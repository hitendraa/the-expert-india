import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  // Protected routes
  const protectedRoutes = ['/dashboard', '/admin', '/profile']

  // Check if the path is protected
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))

  // For database sessions, we check the session cookie
  const sessionToken = request.cookies.get('next-auth.session-token')?.value || 
                      request.cookies.get('__Secure-next-auth.session-token')?.value

  // If trying to access protected route without session
  if (isProtectedRoute && !sessionToken) {
    const url = request.nextUrl.clone()
    url.pathname = '/'
      if (pathname.startsWith('/dashboard')) {
      url.searchParams.set('error', 'Please sign in to access your dashboard')
    } else if (pathname.startsWith('/admin')) {
      url.searchParams.set('error', 'Please sign in to access the admin panel')
    } else if (pathname.startsWith('/profile')) {
      url.searchParams.set('error', 'Please sign in to access your profile')
    } else {
      url.searchParams.set('error', 'Please sign in to access this page')
    }
    
    return NextResponse.redirect(url)
  }

  // Note: For admin role checking with database sessions, 
  // we'll handle it in the page component since middleware can't easily access the database

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*', '/profile/:path*', '/auth/:path*']
}
