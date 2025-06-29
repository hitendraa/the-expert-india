import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'
import Order from '@/models/Order'
import { authOptions } from '@/lib/auth'
import { logActivity } from '@/lib/activity'

export async function GET(
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
    const order = await Order.findById(id)
      .populate('userId', 'name email')
      .populate('serviceId', 'name price')
    if (!order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 })
    }
    return NextResponse.json(order)
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(
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
    const { status, paymentStatus, notes, completionDate } = await request.json()
    // Get original order for comparison
    const originalOrder = await Order.findById(id)
    if (!originalOrder) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 })
    }
    const updateData: { 
      status: string; 
      paymentStatus: string; 
      notes?: string; 
      completionDate?: Date;
    } = { status, paymentStatus, notes }
    if (status === 'completed' && !completionDate) {
      updateData.completionDate = new Date()
    } else if (completionDate) {
      updateData.completionDate = completionDate
    }
    const order = await Order.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    ).populate('userId', 'name email').populate('serviceId', 'name price')
    if (!order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 })
    }
    // Log activity
    const changes = []
    if (originalOrder.status !== status) changes.push(`status: ${originalOrder.status} → ${status}`)
    if (originalOrder.paymentStatus !== paymentStatus) changes.push(`payment: ${originalOrder.paymentStatus} → ${paymentStatus}`)
    if (originalOrder.notes !== notes) changes.push('notes updated')
    await logActivity({
      adminId: currentUser._id.toString(),
      action: 'update',
      resource: 'order',
      resourceId: id,
      details: `Updated order: ${changes.join(', ')}`,
      metadata: { changes: updateData },
      request
    })
    return NextResponse.json(order)
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(
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
    const order = await Order.findById(id).populate('userId', 'name email').populate('serviceId', 'name price')
    if (!order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 })
    }
    await Order.findByIdAndDelete(id)
    // Log activity
    await logActivity({
      adminId: currentUser._id.toString(),
      action: 'delete',
      resource: 'order',
      resourceId: id,
      details: `Deleted order for user - service`,
      metadata: { 
        userId: order.userId?._id,
        serviceId: order.serviceId?._id,
        amount: order.amount 
      },
      request
    })
    return NextResponse.json({ message: 'Order deleted successfully' })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
