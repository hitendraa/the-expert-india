import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import connectDB from '@/lib/mongodb'
import DocumentCategory from '@/models/DocumentCategory'
import User from '@/models/User'
import { logActivity } from '@/lib/activity'

// GET /api/admin/document-categories - List all document categories
export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    const currentUser = await User.findOne({ email: session.user.email })
    if (!currentUser || currentUser.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const categories = await DocumentCategory.find({})
      .sort({ name: 1 })

    return NextResponse.json(categories)
  } catch (error) {
    console.error('Error fetching document categories:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/admin/document-categories - Create new document category
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    const currentUser = await User.findOne({ email: session.user.email })
    if (!currentUser || currentUser.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { name, description } = await request.json()

    if (!name) {
      return NextResponse.json({ error: 'Category name is required' }, { status: 400 })
    }

    // Check if category already exists
    const existingCategory = await DocumentCategory.findOne({ name: { $regex: new RegExp(`^${name}$`, 'i') } })
    if (existingCategory) {
      return NextResponse.json({ error: 'Category with this name already exists' }, { status: 400 })
    }

    const newCategory = new DocumentCategory({
      name: name.trim(),
      description: description?.trim(),
    })

    const savedCategory = await newCategory.save()    // Log activity
    await logActivity({
      userId: currentUser._id.toString(),
      action: 'document_category_created',
      resource: 'system',
      resourceId: String(savedCategory._id),
      details: `Document category created: ${name}`,
    })

    return NextResponse.json(savedCategory)
  } catch (error) {
    console.error('Error creating document category:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
