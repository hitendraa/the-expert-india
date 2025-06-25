import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'
import { authOptions } from '@/lib/auth'
import { logActivity } from '@/lib/activity'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check if user is admin
    await connectDB()
    const currentUser = await User.findOne({ email: session.user?.email })
    if (!currentUser || currentUser.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const users = await User.find({}).sort({ createdAt: -1 })
    return NextResponse.json(users)
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check if user is admin
    await connectDB()
    const currentUser = await User.findOne({ email: session.user?.email })
    if (!currentUser || currentUser.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { name, email, role } = await request.json()

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return NextResponse.json({ error: 'User with this email already exists' }, { status: 400 })
    }    const newUser = new User({
      name,
      email,
      role: role || 'user',
    })

    await newUser.save()

    // Log activity
    await logActivity({
      adminId: currentUser._id.toString(),
      action: 'create',
      resource: 'user',
      resourceId: newUser._id.toString(),
      details: `Created user: ${name} (${email}) with role ${role || 'user'}`,
      metadata: { name, email, role: role || 'user' },
      request
    })

    return NextResponse.json(newUser, { status: 201 })
  } catch (error) {
    console.error('Error creating user:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
