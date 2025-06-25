import { NextRequest, NextResponse } from "next/server"
import Razorpay from "razorpay"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

const key_id = process.env.RAZORPAY_KEY_ID as string
const key_secret = process.env.RAZORPAY_KEY_SECRET as string

if (!key_id || !key_secret) {
  throw new Error("Razorpay keys are missing")
}

const razorpay = new Razorpay({
  key_id,
  key_secret,
})

export interface OrderBody {
  amount: number
  currency: string
  serviceId: string
  serviceName: string
}

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      )
    }

    const { amount, currency, serviceId, serviceName }: OrderBody = await request.json()

    if (!amount || !serviceId || !serviceName) {
      return NextResponse.json(
        { message: "Amount, serviceId, and serviceName are required" },
        { status: 400 }
      )
    }    // Convert amount to paise (multiply by 100)
    const amountInPaise = Math.round(amount * 100)

    // Create a short receipt ID (max 40 characters)
    const shortServiceId = serviceId.slice(-8) // Last 8 characters
    const timestamp = Date.now().toString().slice(-8) // Last 8 digits
    const receipt = `rcpt_${shortServiceId}_${timestamp}`

    const options = {
      amount: amountInPaise,
      currency: currency || "INR",
      receipt,
      notes: {
        serviceId,
        serviceName: serviceName.slice(0, 50), // Limit service name length
        userId: (session.user as { id?: string }).id || session.user.email,
        userEmail: session.user.email,
      },
    }

    const order = await razorpay.orders.create(options)
    console.log("Razorpay Order Created Successfully:", order.id)

    return NextResponse.json(
      {
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
        receipt: order.receipt,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error creating Razorpay order:", error)
    return NextResponse.json(
      { message: "Server Error", error: "Failed to create order" },
      { status: 500 }
    )
  }
}
