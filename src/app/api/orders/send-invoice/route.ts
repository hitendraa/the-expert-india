import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import connectDB from "@/lib/mongodb"
import Order from "@/models/Order"
import Service from "@/models/Service"
import User from "@/models/User"
import { authOptions } from "@/lib/auth"
import { sendInvoiceEmail } from "@/lib/email-service"

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Unauthorized", success: false },
        { status: 401 }
      )
    }

    const { orderId } = await request.json()

    if (!orderId) {
      return NextResponse.json(
        { error: "Order ID is required", success: false },
        { status: 400 }
      )
    }

    await connectDB()

    // Get order details
    const order = await Order.findById(orderId)
    if (!order) {
      return NextResponse.json(
        { error: "Order not found", success: false },
        { status: 404 }
      )
    }

    // Get service details
    const service = await Service.findById(order.serviceId)
    if (!service) {
      return NextResponse.json(
        { error: "Service not found", success: false },
        { status: 404 }
      )
    }

    // Get user details
    const user = await User.findById(order.userId)
    if (!user) {
      return NextResponse.json(
        { error: "User not found", success: false },
        { status: 404 }
      )
    }

    // Check if current user is admin or the order owner
    const isAdmin = (session.user as { role?: string }).role === 'admin'
    const isOwner = String(order.userId) === (session.user as { id?: string }).id

    if (!isAdmin && !isOwner) {
      return NextResponse.json(
        { error: "Unauthorized to send email for this order", success: false },
        { status: 403 }
      )
    }

    // Send invoice email
    try {
      const result = await sendInvoiceEmail({
        customerName: user.name,
        customerEmail: user.email,
        serviceName: service.name,
        amount: order.amount,
        orderId: String(order._id),
        orderDate: order.orderDate.toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        paymentMethod: order.paymentDetails?.method === 'razorpay' 
          ? 'Online Payment (Razorpay)' 
          : 'Online Payment',
      })

      return NextResponse.json({
        message: "Invoice email sent successfully",
        success: true,
        emailId: result.emailId,
      })
    } catch (emailError) {
      console.error("Failed to send invoice email:", emailError)
      return NextResponse.json(
        { error: "Failed to send email", success: false },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "An error occurred while sending email", success: false },
      { status: 500 }
    )
  }
}
