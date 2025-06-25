import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import connectDB from '@/lib/mongodb'
import Document from '@/models/Document'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session || !session.user || (session.user as { role?: string }).role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()

    // Fetch all documents with user information
    const documents = await Document.aggregate([
      {
        $match: { isActive: true }
      },
      {
        $lookup: {
          from: 'users',
          localField: 'userId',
          foreignField: '_id',
          as: 'user'
        }
      },
      {
        $unwind: {
          path: '$user',
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $project: {
          _id: 1,
          userId: 1,
          filename: 1,
          originalName: 1,
          mimetype: 1,
          size: 1,
          category: 1,
          uploadDate: 1,
          isActive: 1,
          username: '$user.name',
          useremail: '$user.email'
        }
      },
      {
        $sort: { uploadDate: -1 }
      }
    ])

    return NextResponse.json(documents)
  } catch (error) {
    console.error('Error fetching admin documents:', error)
    return NextResponse.json({ error: 'Failed to fetch documents' }, { status: 500 })
  }
}
