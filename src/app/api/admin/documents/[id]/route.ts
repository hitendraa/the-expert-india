import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import connectDB from '@/lib/mongodb'
import Document from '@/models/Document'
import { unlink } from 'fs/promises'
import { existsSync } from 'fs'
import { logActivity } from '@/lib/activity'

interface RouteParams {
  params: Promise<{
    id: string
  }>
}

export async function DELETE(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = await params
    const session = await getServerSession(authOptions)
    if (!session || !session.user || (session.user as { role?: string }).role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()

    const document = await Document.findById(id)
    if (!document) {
      return NextResponse.json({ error: 'Document not found' }, { status: 404 })
    }

    // Soft delete - mark as inactive
    document.isActive = false
    await document.save()

    // Optionally delete the actual file
    if (existsSync(document.path)) {
      try {
        await unlink(document.path)
      } catch (fileError) {
        console.error('Error deleting file:', fileError)
        // Continue even if file deletion fails
      }
    }    // Log activity
    await logActivity({
      userId: (session.user as { id: string }).id,
      action: 'document_deleted_by_admin',
      resource: 'system' as const,
      resourceId: String(document._id),
      details: `Admin deleted document: ${document.originalName} (owned by ${document.userId})`,
      metadata: {
        filename: document.originalName,
        category: document.category,
        originalOwner: String(document.userId),
        adminId: (session.user as { id: string }).id,
        resourceType: 'document',
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting document:', error)
    return NextResponse.json({ error: 'Failed to delete document' }, { status: 500 })
  }
}
