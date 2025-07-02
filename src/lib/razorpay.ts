export interface CreateOrderParams {
  amount: number
  currency?: string
  serviceId: string
  serviceName: string
}

export async function createRazorpayOrder({
  amount,
  currency = "INR",
  serviceId,
  serviceName,
}: CreateOrderParams) {
  try {
    const response = await fetch("/api/razorpay/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
        currency,
        serviceId,
        serviceName,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || "Failed to create order")
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error creating Razorpay order:", error)
    throw error
  }
}

export interface VerifyPaymentParams {
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

export async function verifyRazorpayPayment(params: VerifyPaymentParams) {
  try {
    const response = await fetch("/api/razorpay/verify-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || "Payment verification failed")
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error verifying payment:", error)
    throw error
  }
}
