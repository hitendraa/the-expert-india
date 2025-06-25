"use client"

import { useSession } from "next-auth/react"
import { useAuthStore } from "@/store/authStore"
import { useEffect } from "react"

export function AuthSync() {
  const { data: session, status } = useSession()
  const { setUser, setLoading } = useAuthStore()

  useEffect(() => {
    if (status === "loading") {
      setLoading(true)
      return
    }

    setLoading(false)

    if (session?.user) {
      const user = session.user as {
        id: string
        name: string
        email: string
        image?: string
        role: 'user' | 'admin'
      }
      setUser({
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
        role: user.role,
      })
    } else {
      setUser(null)
    }
  }, [session, status, setUser, setLoading])

  return null
}
