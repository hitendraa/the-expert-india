"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"

export function AdminNavbar() {
  const pathname = usePathname()
  
  const getBreadcrumbs = () => {
    const paths = pathname.split('/').filter(Boolean)
    const breadcrumbs = []
    
    if (paths[0] === 'admin') {
      breadcrumbs.push({ label: 'Admin', href: '/admin' })
      
      if (paths[1]) {
        const pageName = paths[1].charAt(0).toUpperCase() + paths[1].slice(1)
        breadcrumbs.push({ label: pageName, href: pathname })
      }
    }
    
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs()

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={breadcrumb.href} className="flex items-center">
              {index > 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem>
                {index === breadcrumbs.length - 1 ? (
                  <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={breadcrumb.href}>
                    {breadcrumb.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </div>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      
      {/* Spacer to push button to the right */}
      <div className="flex-1" />
      
      {/* Go to Dashboard button */}
      <Button asChild variant="outline" size="sm">
        <Link href="/dashboard" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          <ExternalLink className="h-4 w-4" />
          Go to Dashboard
        </Link>
      </Button>
    </header>
  )
}
