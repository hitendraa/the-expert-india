import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'
import Order from '@/models/Order'
import { authOptions } from '@/lib/auth'
import { logActivity } from '@/lib/activity'

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

    // Parse query parameters for pagination
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50')
    const skip = (page - 1) * limit

    console.log(`Fetching orders: page ${page}, limit ${limit}`)
    const startTime = Date.now()

    // Optimize query by selecting necessary fields and populate documentIds
    const ordersQuery = Order.find({})
      .populate('userId', 'name email image')
      .populate({
        path: 'serviceId',
        select: 'name price',
        options: { strictPopulate: false }
      })
      .populate({
        path: 'documentIds',
        select: 'filename originalName mimetype size category uploadDate isActive',
        options: { strictPopulate: false }
      })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)

    // Get total count for pagination
    const [orders, totalCount] = await Promise.all([
      ordersQuery.exec(),
      Order.countDocuments({})
    ])

    const queryTime = Date.now() - startTime
    console.log(`Orders query completed in ${queryTime}ms. Found ${orders.length} orders of ${totalCount} total.`)

    // If service is deleted, serviceId will be null. Add a fallback for admin consumers.
    type ServiceFallback = { name: string; price: number };
    type OrderWithFallback = ReturnType<typeof orders[0]["toObject"]> & { serviceFallback?: ServiceFallback };
    const ordersWithServiceFallback: OrderWithFallback[] = orders.map(order => {
      const plainOrder: OrderWithFallback = order.toObject();
      if (!plainOrder.serviceId) {
        plainOrder.serviceFallback = { name: 'Service unavailable', price: 0 };
      }
      return plainOrder;
    });

    return NextResponse.json({
      orders: ordersWithServiceFallback,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages: Math.ceil(totalCount / limit),
        hasNextPage: page < Math.ceil(totalCount / limit),
        hasPreviousPage: page > 1
      },
      performance: {
        queryTime,
        recordsReturned: orders.length
      }
    })
  } catch (error) {
    console.error('Error fetching orders:', error)
    return NextResponse.json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
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
