import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import connectDB from '@/lib/mongodb'
import Document from '@/models/Document'
import { writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { logActivity } from '@/lib/activity'

const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
const ALLOWED_TYPES = [
  'image/jpeg',
  'image/jpg', 
  'image/png',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
]

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check if user has ID
    const userId = (session.user as { id?: string }).id
    if (!userId) {
      console.error('User ID not found in session:', session.user)
      return NextResponse.json({ error: 'User ID not found' }, { status: 400 })
    }

    const formData = await request.formData()
    const file = formData.get('file') as File
    const category = formData.get('category') as string

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    if (!category) {
      return NextResponse.json({ error: 'Category is required' }, { status: 400 })
    }

    console.log('Upload attempt:', { fileName: file.name, fileSize: file.size, category, userId })

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: 'File size exceeds 10MB limit' }, { status: 400 })
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({ error: 'Invalid file type. Only JPEG, PNG, PDF, DOC, DOCX are allowed' }, { status: 400 })
    }

    await connectDB()

    // Create user directory if it doesn't exist
    const userEmail = session.user.email?.replace(/[^a-zA-Z0-9]/g, '_') || 'unknown'
    const uploadDir = path.join(process.cwd(), 'uploads', 'documents', userEmail)
    
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true })
    }

    // Generate unique filename
    const timestamp = Date.now()
    const safeOriginalName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_')
    const filename = `${timestamp}_${safeOriginalName}`
    const filepath = path.join(uploadDir, filename)

    // Save file to disk
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    await writeFile(filepath, buffer)    // Save document info to database
    const document = new Document({
      userId: userId,
      filename,
      originalName: file.name,
      mimetype: file.type,
      size: file.size,
      path: filepath,
      category,
    })

    const savedDocument = await document.save()    // Log activity
    await logActivity({
      userId: userId,
      action: 'document_uploaded',
      resource: 'system' as const,
      resourceId: String(savedDocument._id),
      details: `Document uploaded: ${file.name} (${category})`,
      metadata: {
        filename: file.name,
        category,
        size: file.size,
        mimetype: file.type,
        resourceType: 'document',
      },
    })

    return NextResponse.json({
      success: true,
      document: {
        _id: savedDocument._id,
        filename: savedDocument.filename,
        originalName: savedDocument.originalName,
        category: savedDocument.category,
        size: savedDocument.size,
        uploadDate: savedDocument.uploadDate,
      }
    })
  } catch (error) {
    console.error('Error uploading document:', error)
    return NextResponse.json({ error: 'Failed to upload document' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check if user has ID
    const userId = (session.user as { id?: string }).id
    if (!userId) {
      console.error('User ID not found in session:', session.user)
      return NextResponse.json({ error: 'User ID not found' }, { status: 400 })
    }

    console.log('Fetching documents for user:', userId)

    await connectDB()

    const documents = await Document.find({
      userId: userId,
      isActive: true
    }).sort({ uploadDate: -1 })

    console.log('Found documents:', documents.length)

    return NextResponse.json(documents)
  } catch (error) {
    console.error('Error fetching documents:', error)
    return NextResponse.json({ error: 'Failed to fetch documents' }, { status: 500 })
  }
}
