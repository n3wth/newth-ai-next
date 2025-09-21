import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(_request: NextRequest) {
  const response = NextResponse.next()

  // Content Security Policy - Critical for security
  const isDev = process.env.NODE_ENV === 'development'
  const csp = [
    "default-src 'self'",
    `script-src 'self' ${isDev ? "'unsafe-eval'" : ""} 'unsafe-inline' https://vercel.live https://*.vercel-scripts.com`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://vitals.vercel-insights.com https://vercel.live wss://*.pusher.com https://*.pusher.com",
    "frame-src 'self' https://vercel.live",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests"
  ].join('; ')

  // Add security headers
  response.headers.set('Content-Security-Policy', csp)
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()')

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     * - storybook (Storybook static files)
     * - sb-addons (Storybook addons)
     * - sb-manager (Storybook manager)
     * - sb-preview (Storybook preview)
     */
    '/((?!_next/static|_next/image|favicon.ico|storybook|sb-addons|sb-manager|sb-preview|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
