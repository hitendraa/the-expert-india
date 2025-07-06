'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { Mail, Loader2 } from 'lucide-react'

interface SendInvoiceEmailButtonProps {
  orderId: string
  customerEmail: string
  disabled?: boolean
}

export function SendInvoiceEmailButton({ 
  orderId, 
  customerEmail,
  disabled = false 
}: SendInvoiceEmailButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleSendEmail = async () => {
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/orders/send-invoice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderId }),
      })

      const data = await response.json()

      if (data.success) {
        toast.success('Invoice email sent successfully!', {
          description: `Email sent to ${customerEmail}`,
          duration: 4000,
        })
      } else {
        toast.error('Failed to send email', {
          description: data.error || 'Unknown error occurred',
          duration: 5000,
        })
      }
    } catch (error) {
      console.error('Error sending email:', error)
      toast.error('Failed to send email', {
        description: 'Network error occurred. Please try again.',
        duration: 5000,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      onClick={handleSendEmail}
      disabled={disabled || isLoading}
      variant="outline"
      size="sm"
      className="gap-2"
    >
      {isLoading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Mail className="h-4 w-4" />
          Send Invoice
        </>
      )}
    </Button>
  )
}
