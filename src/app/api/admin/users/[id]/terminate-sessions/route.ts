import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { MongoClient } from 'mongodb'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'
import { authOptions } from '@/lib/auth'
import { logActivity } from '@/lib/activity'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    const currentUser = await User.findOne({ email: session.user?.email })
    if (!currentUser || currentUser.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // Don't allow admin to terminate their own session
    if (id === currentUser._id.toString()) {
      return NextResponse.json({ error: 'Cannot terminate your own session' }, { status: 400 })
    }

    // Check if target user exists
    const targetUser = await User.findById(id)
    if (!targetUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Delete all sessions for the user from NextAuth sessions collection
    const client = new MongoClient(process.env.MONGODB_URI!)
    await client.connect()
    const db = client.db()
      // Delete sessions from the sessions collection
    await db.collection('sessions').deleteMany({ userId: id })
    
    await client.close()

    // Log activity
    await logActivity({
      adminId: currentUser._id.toString(),
      action: 'terminate_sessions',
      resource: 'user',
      resourceId: id,
      details: `Terminated all sessions for user: ${targetUser.name} (${targetUser.email})`,
      metadata: { 
        targetUserId: id,
        targetUserName: targetUser.name,
        targetUserEmail: targetUser.email
      },
      request
    })

    return NextResponse.json({ message: 'User sessions terminated successfully' })
  } catch (error) {
    console.error('Error terminating user sessions:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
