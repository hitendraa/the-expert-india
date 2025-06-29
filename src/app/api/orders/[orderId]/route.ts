import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import Order from '@/models/Order';
import { authOptions } from '@/lib/auth';

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ orderId: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    await connectDB();
    const currentUser = await User.findOne({ email: session.user?.email });
    if (!currentUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    const { orderId } = await (context.params);
    if (!orderId) {
      return NextResponse.json({ error: 'Order ID required' }, { status: 400 });
    }
    // Find order and populate service and documentIds
    const order = await Order.findById(orderId)
      .populate('serviceId', 'name price')
      .populate('documentIds');
    if (!order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }
    // Check if order belongs to user
    if (order.userId.toString() !== currentUser._id.toString()) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }
    // Return order details with service name, payment status, documents, and documentIds
    let serviceName = '';
    if (order.serviceId && typeof order.serviceId === 'object' && 'name' in order.serviceId) {
      serviceName = (order.serviceId as { name: string }).name;
    }
    return NextResponse.json({
      _id: order._id,
      status: order.paymentStatus || order.status,
      user: currentUser.email,
      serviceName,
      amount: order.amount,
      createdAt: order.createdAt,
      documents: order.documents || [],
      documentIds: order.documentIds || [],
      notes: order.notes,
      paymentStatus: order.paymentStatus,
      paymentDetails: order.paymentDetails,
      orderDate: order.orderDate,
      completionDate: order.completionDate,
      userDetails: order.userDetails,
      updatedAt: order.updatedAt,
    });
  } catch (error) {
    console.error('Error fetching order by ID:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
