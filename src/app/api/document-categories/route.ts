import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import DocumentCategory from '@/models/DocumentCategory'

// GET /api/document-categories - Get all active document categories (public endpoint)
export async function GET() {
  try {
    await connectDB()
    
    const categories = await DocumentCategory.find({ isActive: true })
      .select('name description')
      .sort({ name: 1 })

    return NextResponse.json(categories)
  } catch (error) {
    console.error('Error fetching document categories:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
