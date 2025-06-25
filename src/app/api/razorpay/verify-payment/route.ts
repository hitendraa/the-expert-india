import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"
import { getServerSession } from "next-auth/next"
import connectDB from "@/lib/mongodb"
import Order from "@/models/Order"
import { logActivity } from "@/lib/activity"
import { authOptions } from "@/lib/auth"

export interface VerifyBody {
  razorpay_order_id: string
  razorpay_payment_id: string
  razorpay_signature: string
  serviceId: string
  amount: number
  userDetails?: {
    name?: string
    email?: string
    phone?: string
    [key: string]: unknown
  }
  documents?: string[]
  documentIds?: string[]
}

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Unauthorized", success: false },
        { status: 401 }
      )
    }    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      serviceId,
      amount,
      userDetails,
      documents,
      documentIds,
    }: VerifyBody = await request.json()

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: "Missing required payment parameters", success: false },
        { status: 400 }
      )
    }

    if (!serviceId || !amount) {
      return NextResponse.json(
        { error: "Missing service details", success: false },
        { status: 400 }
      )
    }

    const secret = process.env.RAZORPAY_KEY_SECRET as string

    if (!secret) {
      return NextResponse.json(
        { error: "Razorpay secret not found", success: false },
        { status: 500 }
      )
    }

    // Verify payment signature
    const hmac = crypto.createHmac("sha256", secret)
    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`)
    const generatedSignature = hmac.digest("hex")

    if (generatedSignature !== razorpay_signature) {
      console.error("Payment signature verification failed")
      return NextResponse.json(
        { error: "Invalid payment signature", success: false },
        { status: 400 }
      )
    }    // Payment verified successfully - create order in database
    await connectDB()

    const newOrder = new Order({
      userId: (session.user as { id?: string }).id,
      serviceId,
      status: "processing",
      amount,
      paymentStatus: "paid",
      orderDate: new Date(),
      userDetails,
      documents,
      documentIds,
      paymentDetails: {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        method: 'razorpay',
      },
      notes: `Order placed successfully via Razorpay payment`,
    })

    const savedOrder = await newOrder.save()    // Log activity
    await logActivity({
      userId: (session.user as { id?: string }).id,
      action: "order_created",
      resource: "order",
      resourceId: String(savedOrder._id),
      details: `New order created for service ${serviceId}. Amount: ₹${amount}. Order ID: ${String(savedOrder._id)}`,
      metadata: {
        orderId: String(savedOrder._id),
        serviceId,
        amount,
        paymentId: razorpay_payment_id,
      },
    })

    console.log("Payment verified and order created successfully:", savedOrder._id)

    return NextResponse.json({
      message: "Payment verified successfully",
      success: true,
      orderId: savedOrder._id,
      order: savedOrder,
    })
  } catch (error) {
    console.error("Error verifying payment:", error)
    return NextResponse.json(
      { error: "An error occurred during payment verification", success: false },
      { status: 500 }
    )
  }
}
