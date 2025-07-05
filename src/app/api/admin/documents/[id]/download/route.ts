import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import connectDB from '@/lib/mongodb'
import Document from '@/models/Document'
import { existsSync } from 'fs'
import { logActivity } from '@/lib/activity'

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  // Await the params since they're now a Promise in Next.js 15
  const { id } = await context.params

  try {
    const session = await getServerSession(authOptions)

    if (
      !session ||
      !session.user ||
      (session.user as { role?: string }).role !== 'admin'
    ) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()

    // Validate ObjectId format
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return NextResponse.json({ error: 'Invalid document ID format' }, { status: 400 })
    }

    const document = await Document.findById(id)
    if (!document) {
      return NextResponse.json({ error: 'Document not found' }, { status: 404 })
    }

    if (!document.isActive) {
      return NextResponse.json({ error: 'Document is not available' }, { status: 404 })
    }

    if (!existsSync(document.path)) {
      console.error(`File not found on disk: ${document.path}`)
      return NextResponse.json({ 
        error: 'File not found on server', 
        details: 'The requested file is not available on the server' 
      }, { status: 404 })
    }

    try {
      const fs = await import('fs')
      const fileBuffer = fs.readFileSync(document.path)

      const response = new NextResponse(fileBuffer)
      response.headers.set('Content-Type', document.mimetype || 'application/octet-stream')
      response.headers.set(
        'Content-Disposition', 
        `attachment; filename="${encodeURIComponent(document.originalName)}"`
      )
      response.headers.set('Content-Length', document.size.toString())
      response.headers.set('Cache-Control', 'no-cache')

      // Log the download activity
      await logActivity({
        userId: (session.user as { id: string }).id,
        action: 'document_downloaded',
        resource: 'document',
        resourceId: String(document._id),
        details: `Admin downloaded document: ${document.originalName}`,
        metadata: {
          filename: document.originalName,
          category: document.category,
          fileSize: document.size,
          mimetype: document.mimetype,
          adminDownload: true,
        },
      })

      return response
    } catch (fileError) {
      console.error('Error reading file:', fileError)
      return NextResponse.json({ 
        error: 'Failed to read file',
        details: 'Unable to read the requested file from storage'
      }, { status: 500 })
    }
  } catch (error) {
    console.error('Error serving document:', error)
    return NextResponse.json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error occurred'
    }, { status: 500 })
  }
}