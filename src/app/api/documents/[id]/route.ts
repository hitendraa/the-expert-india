import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import connectDB from '@/lib/mongodb'
import Document from '@/models/Document'
import { readFile, unlink } from 'fs/promises'
import { existsSync } from 'fs'
import { logActivity } from '@/lib/activity'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    const { id } = await params

    const document = await Document.findOne({
      _id: id,
      userId: (session.user as { id?: string }).id,
      isActive: true
    })

    if (!document) {
      return NextResponse.json({ error: 'Document not found' }, { status: 404 })
    }

    // Check if file exists
    if (!existsSync(document.path)) {
      return NextResponse.json({ error: 'File not found on disk' }, { status: 404 })
    }

    // Read file and return as blob
    const fileBuffer = await readFile(document.path)
      // Log document view activity
    await logActivity({
      userId: (session.user as { id?: string }).id,
      action: 'document_viewed',
      resource: 'system' as const,
      resourceId: String(document._id),
      details: `Document viewed: ${document.originalName}`,
      metadata: {
        filename: document.originalName,
        category: document.category,
        resourceType: 'document',
      },
    })

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': document.mimetype,
        'Content-Disposition': `inline; filename="${document.originalName}"`,
        'Content-Length': document.size.toString(),
      },
    })
  } catch (error) {
    console.error('Error serving document:', error)
    return NextResponse.json({ error: 'Failed to serve document' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    const { id } = await params

    const document = await Document.findOne({
      _id: id,
      userId: (session.user as { id?: string }).id,
      isActive: true
    })

    if (!document) {
      return NextResponse.json({ error: 'Document not found' }, { status: 404 })
    }

    // Mark document as inactive instead of deleting
    document.isActive = false
    await document.save()

    // Try to delete physical file (optional - keep for backup)
    try {
      if (existsSync(document.path)) {
        await unlink(document.path)
      }
    } catch (fileError) {
      console.warn('Could not delete physical file:', fileError)
      // Continue execution - marking as inactive is sufficient
    }    // Log activity
    await logActivity({
      userId: (session.user as { id?: string }).id,
      action: 'document_deleted',
      resource: 'system' as const,
      resourceId: String(document._id),
      details: `Document deleted: ${document.originalName}`,
      metadata: {
        filename: document.originalName,
        category: document.category,
        resourceType: 'document',
      },
    })

    return NextResponse.json({ success: true, message: 'Document deleted successfully' })
  } catch (error) {
    console.error('Error deleting document:', error)
    return NextResponse.json({ error: 'Failed to delete document' }, { status: 500 })
  }
}
