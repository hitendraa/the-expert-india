import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import connectDB from '@/lib/mongodb'
import DocumentCategory from '@/models/DocumentCategory'
import User from '@/models/User'
import { logActivity } from '@/lib/activity'

// PUT /api/admin/document-categories/[id] - Update document category
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    const currentUser = await User.findOne({ email: session.user.email })
    if (!currentUser || currentUser.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { name, description, isActive } = await request.json()
    const categoryId = id

    if (!name) {
      return NextResponse.json({ error: 'Category name is required' }, { status: 400 })
    }

    // Check if another category with this name exists
    const existingCategory = await DocumentCategory.findOne({ 
      name: { $regex: new RegExp(`^${name}$`, 'i') },
      _id: { $ne: categoryId }
    })
    if (existingCategory) {
      return NextResponse.json({ error: 'Category with this name already exists' }, { status: 400 })
    }

    const updatedCategory = await DocumentCategory.findByIdAndUpdate(
      categoryId,
      {
        name: name.trim(),
        description: description?.trim(),
        isActive: isActive !== undefined ? isActive : true,
      },
      { new: true }
    )

    if (!updatedCategory) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 })
    }

    // Log activity
    await logActivity({
      userId: currentUser._id.toString(),
      action: 'document_category_updated',
      resource: 'system',
      resourceId: categoryId,
      details: `Document category updated: ${name}`,
    })

    return NextResponse.json(updatedCategory)
  } catch (error) {
    console.error('Error updating document category:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// DELETE /api/admin/document-categories/[id] - Delete document category
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    const currentUser = await User.findOne({ email: session.user.email })
    if (!currentUser || currentUser.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const categoryId = id
    const category = await DocumentCategory.findById(categoryId)
    
    if (!category) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 })
    }

    // Instead of hard delete, soft delete by setting isActive to false
    const deletedCategory = await DocumentCategory.findByIdAndUpdate(
      categoryId,
      { isActive: false },
      { new: true }
    )

    // Log activity
    await logActivity({
      userId: currentUser._id.toString(),
      action: 'document_category_deleted',
      resource: 'system',
      resourceId: categoryId,
      details: `Document category deleted: ${category.name}`,
    })

    return NextResponse.json({ message: 'Category deleted successfully', category: deletedCategory })
  } catch (error) {
    console.error('Error deleting document category:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
