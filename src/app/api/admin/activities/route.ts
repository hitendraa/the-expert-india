import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'
import Activity from '@/models/Activity'
import { authOptions } from '@/lib/auth'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    const currentUser = await User.findOne({ email: session.user?.email })
    if (!currentUser || currentUser.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50')
    const resource = searchParams.get('resource')
    const action = searchParams.get('action')

    const skip = (page - 1) * limit

    // Build filter
    const filter: { resource?: string; action?: string } = {}
    if (resource) filter.resource = resource
    if (action) filter.action = action

    const activities = await Activity.find(filter)
      .populate('userId', 'name email image')
      .populate('adminId', 'name email image')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)

    const total = await Activity.countDocuments(filter)

    return NextResponse.json({
      activities,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching activities:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
