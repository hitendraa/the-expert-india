import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import connectDB from '@/lib/mongodb'
import FormSubmission from '@/models/FormSubmission'
import User from '@/models/User'
import { authOptions } from '@/lib/auth'
import { logActivity } from '@/lib/activity'

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    
    // Check if user is admin
    const currentUser = await User.findOne({ email: session.user?.email })
    if (!currentUser || currentUser.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { status, notes, assignedTo, contactedAt } = await request.json()

    // Get original submission for comparison
    const originalSubmission = await FormSubmission.findById(id)
    if (!originalSubmission) {
      return NextResponse.json({ error: 'Form submission not found' }, { status: 404 })
    }

    const updateData: any = {}
    if (status) updateData.status = status
    if (notes !== undefined) updateData.notes = notes
    if (assignedTo) updateData.assignedTo = assignedTo
    if (contactedAt) updateData.contactedAt = new Date(contactedAt)

    const updatedSubmission = await FormSubmission.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    ).populate('assignedTo', 'name email')

    if (!updatedSubmission) {
      return NextResponse.json({ error: 'Form submission not found' }, { status: 404 })
    }

    // Log activity
    const changes = []
    if (originalSubmission.status !== status) changes.push(`status: ${originalSubmission.status} → ${status}`)
    if (originalSubmission.notes !== notes) changes.push('notes updated')
    if (originalSubmission.assignedTo?.toString() !== assignedTo) changes.push('assignment changed')

    await logActivity({
      adminId: currentUser._id.toString(),
      action: 'updated',
      resource: 'system',
      resourceId: id,
      details: `Updated form submission from ${originalSubmission.name}: ${changes.join(', ')}`,
      metadata: { 
        originalStatus: originalSubmission.status,
        newStatus: status,
        source: originalSubmission.source,
        formType: originalSubmission.formType
      },
    })

    return NextResponse.json(updatedSubmission)
  } catch (error) {
    console.error('Error updating form submission:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    
    // Check if user is admin
    const currentUser = await User.findOne({ email: session.user?.email })
    if (!currentUser || currentUser.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const submission = await FormSubmission.findByIdAndDelete(id)
    if (!submission) {
      return NextResponse.json({ error: 'Form submission not found' }, { status: 404 })
    }

    // Log activity
    await logActivity({
      adminId: currentUser._id.toString(),
      action: 'deleted',
      resource: 'system',
      resourceId: id,
      details: `Deleted form submission from ${submission.name} (${submission.source})`,
      metadata: { 
        source: submission.source,
        formType: submission.formType,
        email: submission.email
      },
    })

    return NextResponse.json({ message: 'Form submission deleted successfully' })
  } catch (error) {
    console.error('Error deleting form submission:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
