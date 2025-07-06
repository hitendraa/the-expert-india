import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { sendInvoiceEmail } from "@/lib/email-service"

export async function POST(request: NextRequest) {
  try {
    // Check authentication and admin role
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
      amount, 
      orderId, 
      orderDate, 
      paymentMethod 
    } = await request.json()

    if (!customerName || !customerEmail || !serviceName || !amount || !orderId) {
      return NextResponse.json(
        { error: "Missing required fields", success: false },
        { status: 400 }
      )
    }

    // Send test invoice email
    try {
      const result = await sendInvoiceEmail({
        customerName,
        customerEmail,
        serviceName,
        amount,
        orderId,
        orderDate: orderDate || new Date().toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        paymentMethod: paymentMethod || 'Test Payment',
      })

      return NextResponse.json({
        message: "Test invoice email sent successfully",
        success: true,
        emailId: result.emailId,
      })
    } catch (emailError) {
      console.error("Failed to send test invoice email:", emailError)
      return NextResponse.json(
        { error: "Failed to send email", success: false },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("Error sending test email:", error)
    return NextResponse.json(
      { error: "An error occurred while sending test email", success: false },
      { status: 500 }
    )
  }
}
