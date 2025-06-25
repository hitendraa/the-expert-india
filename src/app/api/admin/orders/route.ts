import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'
import Order from '@/models/Order'
import { authOptions } from '@/lib/auth'
import { logActivity } from '@/lib/activity'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    const currentUser = await User.findOne({ email: session.user?.email })
    if (!currentUser || currentUser.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }    const orders = await Order.find({})
      .populate('userId', 'name email')
      .populate('serviceId', 'name price')
      .populate('documentIds', 'filename originalName mimetype size category uploadDate')
      .sort({ createdAt: -1 })
    
    return NextResponse.json(orders)
  } catch (error) {
    console.error('Error fetching orders:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
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

    const { userId, serviceId, amount, status, paymentStatus, notes } = await request.json()

    const newOrder = new Order({
      userId,
      serviceId,
      amount,
      status: status || 'pending',
      paymentStatus: paymentStatus || 'pending',
      notes,
    })    
    await newOrder.save()
    
    // Log activity
    await logActivity({
      adminId: currentUser._id.toString(),
      action: 'create',
      resource: 'order',
      resourceId: String(newOrder._id),
      details: `Created order for user ${userId} with amount $${amount}`,
      metadata: { amount, status, paymentStatus },
      request
    })
    
    // Populate the response
    await newOrder.populate('userId', 'name email')
    await newOrder.populate('serviceId', 'name price')
    
    return NextResponse.json(newOrder, { status: 201 })
  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
