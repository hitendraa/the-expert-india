import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import connectDB from '@/lib/mongodb'
import Document from '@/models/Document'
import { existsSync } from 'fs'
import { logActivity } from '@/lib/activity'

interface RouteParams {
  params: Promise<{
    id: string
  }>
}

export async function GET(
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
    if (!document || !document.isActive) {
      return NextResponse.json({ error: 'Document not found' }, { status: 404 })
    }

    // Check if file exists
    if (!existsSync(document.path)) {
      return NextResponse.json({ error: 'File not found on disk' }, { status: 404 })
    }

    // Read and serve the file
    const fs = await import('fs')
    const fileBuffer = fs.readFileSync(document.path)

    const response = new NextResponse(fileBuffer)
    response.headers.set('Content-Type', document.mimetype)
    response.headers.set('Content-Disposition', `attachment; filename="${document.originalName}"`)
    response.headers.set('Content-Length', document.size.toString())

    // Log activity
    await logActivity({
      userId: (session.user as { id: string }).id,
      action: 'document_downloaded_by_admin',
      resource: 'system' as const,
      resourceId: String(document._id),
      details: `Admin downloaded document: ${document.originalName} (owned by ${document.userId})`,
      metadata: {
        filename: document.originalName,
        category: document.category,
        originalOwner: document.userId.toString(),
        adminId: (session.user as { id: string }).id,
        resourceType: 'document',
      },
    })

    return response
  } catch (error) {
    console.error('Error serving document:', error)
    return NextResponse.json({ error: 'Failed to serve document' }, { status: 500 })
  }
}
