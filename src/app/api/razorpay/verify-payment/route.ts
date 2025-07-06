import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"
import { getServerSession } from "next-auth/next"
import connectDB from "@/lib/mongodb"
import Order from "@/models/Order"
import Service from "@/models/Service"
import User from "@/models/User"  
import { logActivity } from "@/lib/activity"
import { authOptions } from "@/lib/auth"
import { sendInvoiceEmail } from "@/lib/email-service"

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
  notes?: string
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
      notes,
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
      notes: notes || undefined, // Use user's notes if provided
    })

    const savedOrder = await newOrder.save()

    // Get service details for email
    const service = await Service.findById(serviceId)
    if (!service) {
      console.error("Service not found for email:", serviceId)
    }

    // Get user details for email
    const user = await User.findById((session.user as { id?: string }).id)
    if (!user) {
      console.error("User not found for email:", (session.user as { id?: string }).id)
    }

    // Send invoice email if we have the necessary details (non-blocking)
    if (service && user) {
      // Send email in parallel without blocking the response
      sendInvoiceEmail({
        customerName: user.name,
        customerEmail: user.email,
        serviceName: service.name,
        amount: amount,
        orderId: String(savedOrder._id),
        orderDate: new Date().toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        paymentMethod: 'Online Payment (Razorpay)',
      })
        .then(() => {
          console.log("Invoice email sent successfully for order:", savedOrder._id)
          
          // Log successful email sending activity
          logActivity({
            userId: (session.user as { id?: string }).id,
            action: "email_sent",
            resource: "order",
            resourceId: String(savedOrder._id),
            details: `Invoice email sent to ${user.email} for order ${String(savedOrder._id)}`,
            metadata: {
              orderId: String(savedOrder._id),
              emailRecipient: user.email,
              emailType: "invoice",
            },
          }).catch((logError) => {
            console.error("Failed to log email success activity:", logError)
          })
        })
        .catch((emailError) => {
          console.error("Failed to send invoice email:", emailError)
          
          // Log email failure activity (but don't fail the payment)
          logActivity({
            userId: (session.user as { id?: string }).id,
            action: "email_failed",
            resource: "order",
            resourceId: String(savedOrder._id),
            details: `Failed to send invoice email to ${user.email} for order ${String(savedOrder._id)}: ${emailError instanceof Error ? emailError.message : 'Unknown error'}`,
            metadata: {
              orderId: String(savedOrder._id),
              emailRecipient: user.email,
              emailType: "invoice",
              error: emailError instanceof Error ? emailError.message : 'Unknown error',
            },
          }).catch((logError) => {
            console.error("Failed to log email failure activity:", logError)
          })
        })
    } else {
      console.warn("Cannot send invoice email - missing service or user data:", {
        serviceFound: !!service,
        userFound: !!user,
        serviceId,
        userId: (session.user as { id?: string }).id,
      })
      
      // Log missing data warning (non-blocking)
      logActivity({
        userId: (session.user as { id?: string }).id,
        action: "email_skipped",
        resource: "order",
        resourceId: String(savedOrder._id),
        details: `Invoice email skipped for order ${String(savedOrder._id)} - missing ${!service ? 'service' : ''} ${!user ? 'user' : ''} data`,
        metadata: {
          orderId: String(savedOrder._id),
          serviceFound: !!service,
          userFound: !!user,
        },
      }).catch((logError) => {
        console.error("Failed to log email skip activity:", logError)
      })
    }

    // Log activity
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
