import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'
import Order from '@/models/Order'
import Service from '@/models/Service'
import { authOptions } from '@/lib/auth'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    const currentUser = await User.findOne({ email: session.user?.email })
    if (!currentUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const orders = await Order.find({ userId: currentUser._id })
      .populate('serviceId', 'name price')
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
    if (!currentUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const { serviceId, amount, notes } = await request.json()

    // Verify service exists
    const service = await Service.findById(serviceId)
    if (!service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 })
    }

    const newOrder = new Order({
      userId: currentUser._id,
      serviceId,
      amount,
      status: 'pending',
      paymentStatus: 'paid', // Mock payment as paid
      notes: notes || `Order for ${service.name}`,
      orderDate: new Date(),
    })

    await newOrder.save()
    
    // Populate the response
    await newOrder.populate('userId', 'name email')
    await newOrder.populate('serviceId', 'name price')
    
    return NextResponse.json(newOrder, { status: 201 })
  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
