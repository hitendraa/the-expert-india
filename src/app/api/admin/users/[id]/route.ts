import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'
import { authOptions } from '@/lib/auth'
import { logActivity } from '@/lib/activity'

export async function GET(
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
    const currentUser = await User.findOne({ email: session.user?.email })
    if (!currentUser || currentUser.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const user = await User.findById(id)
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json(user)
  } catch (error) {
    console.error('Error fetching user:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

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
    const currentUser = await User.findOne({ email: session.user?.email })
    if (!currentUser || currentUser.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }    const { name, email, role } = await request.json()

    // Get original user for comparison
    const originalUser = await User.findById(id)
    if (!originalUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const user = await User.findByIdAndUpdate(
      id,
      { name, email, role },
      { new: true, runValidators: true }
    )

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Log activity
    const changes = []
    if (originalUser.name !== name) changes.push(`name: ${originalUser.name} → ${name}`)
    if (originalUser.email !== email) changes.push(`email: ${originalUser.email} → ${email}`)
    if (originalUser.role !== role) changes.push(`role: ${originalUser.role} → ${role}`)

    await logActivity({
      adminId: currentUser._id.toString(),
      action: 'update',
      resource: 'user',
      resourceId: id,
      details: `Updated user: ${changes.join(', ')}`,
      metadata: { changes: { name, email, role } },
      request
    })

    return NextResponse.json(user)
  } catch (error) {
    console.error('Error updating user:', error)
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
    const currentUser = await User.findOne({ email: session.user?.email })
    if (!currentUser || currentUser.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }    // Don't allow admin to delete themselves
    if (id === currentUser._id.toString()) {
      return NextResponse.json({ error: 'Cannot delete your own account' }, { status: 400 })
    }

    const user = await User.findById(id)
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    await User.findByIdAndDelete(id)

    // Log activity
    await logActivity({
      adminId: currentUser._id.toString(),
      action: 'delete',
      resource: 'user',
      resourceId: id,
      details: `Deleted user: ${user.name} (${user.email})`,
      metadata: { 
        name: user.name,
        email: user.email,
        role: user.role 
      },
      request
    })

    return NextResponse.json({ message: 'User deleted successfully' })
  } catch (error) {
    console.error('Error deleting user:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
