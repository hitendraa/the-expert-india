import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import connectDB from '@/lib/mongodb'
import Document from '@/models/Document'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    console.log('Session:', JSON.stringify(session, null, 2))
    
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized', session: null }, { status: 401 })
    }

    const userId = (session.user as { id?: string }).id
    console.log('User ID:', userId)

    await connectDB()

    // Find all documents for this user (including inactive ones for debugging)
    const allDocuments = await Document.find({ userId }).sort({ uploadDate: -1 })
    const activeDocuments = await Document.find({ userId, isActive: true }).sort({ uploadDate: -1 })

    console.log('All documents for user:', allDocuments.length)
    console.log('Active documents for user:', activeDocuments.length)

    return NextResponse.json({
      session: {
        user: session.user,
        userId: userId
      },
      allDocuments: allDocuments.length,
      activeDocuments: activeDocuments.length,
      documents: activeDocuments
    })
  } catch (error) {
    console.error('Debug error:', error)
    return NextResponse.json({ error: 'Debug failed', details: error }, { status: 500 })
  }
}
