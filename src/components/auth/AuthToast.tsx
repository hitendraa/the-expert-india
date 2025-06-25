'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { toast } from 'sonner'

export function AuthToast() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Check for error and success parameters
    const error = searchParams.get('error')
    const success = searchParams.get('success')
    
    // Clean up callback URL parameter if present
    const callbackUrl = searchParams.get('callbackUrl')

    if (error) {
      toast.error(error, {
        duration: 5000,
        position: 'top-right',
      })
    }

    if (success) {
      toast.success(success, {
        duration: 4000,
        position: 'top-right',
      })
    }

    // Clean up URL parameters after showing toast
    if (error || success || callbackUrl) {
      const timer = setTimeout(() => {
        try {
          const url = new URL(window.location.href)
          if (error) url.searchParams.delete('error')
          if (success) url.searchParams.delete('success')
          if (callbackUrl) url.searchParams.delete('callbackUrl')
          
          // Only update URL if there were parameters to remove
          if (url.search !== window.location.search) {
            window.history.replaceState({}, '', url.toString())
          }
        } catch {
          // Ignore URL manipulation errors
        }
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [pathname, searchParams])

  return null
}
