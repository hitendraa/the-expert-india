import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { sendInvoiceEmail } from "@/lib/email-service"

export async function POST(request: NextRequest) {
  try {
    // Check authentication and admin access
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Unauthorized", success: false },
        { status: 401 }
      )
    }

    const isAdmin = (session.user as { role?: string }).role === 'admin'
    if (!isAdmin) {
      return NextResponse.json(
        { error: "Admin access required", success: false },
        { status: 403 }
      )
    }

    const { 
      customerName, 
      customerEmail, 
      serviceName, 
      amount 
    } = await request.json()

    // Validate required fields
    if (!customerName || !customerEmail || !serviceName || !amount) {
      return NextResponse.json(
        { error: "Missing required fields", success: false },
        { status: 400 }
      )
    }

    // Send test email (non-blocking approach)
    const emailPromise = sendInvoiceEmail({
      customerName,
      customerEmail,
      serviceName,
      amount,
      orderId: 'TEST-' + Date.now(),
      orderDate: new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      paymentMethod: 'Test Payment',
    })

    // Handle the email promise without blocking the response
    emailPromise
      .then((result) => {
        console.log('Test email sent successfully:', result.emailId)
      })
      .catch((error) => {
        console.error('Test email failed:', error)
      })

    // Return immediate response (non-blocking)
    return NextResponse.json({
      message: "Test email initiated successfully",
      success: true,
      note: "Email is being sent in the background. Check logs for delivery status.",
    })

  } catch (error) {
    console.error("Error in test email endpoint:", error)
    return NextResponse.json(
      { error: "An error occurred while testing email", success: false },
      { status: 500 }
    )
  }
}
