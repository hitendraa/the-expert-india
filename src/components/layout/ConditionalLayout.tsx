"use client"

import { usePathname } from "next/navigation"
import Navbar from "@/components/custom/Navbar"
import Footer from "@/components/custom/Footer"

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Don't show navbar and footer on admin routes
  const isAdminRoute = pathname.startsWith('/admin')
  
  if (isAdminRoute) {
    return <>{children}</>
  }
  
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
