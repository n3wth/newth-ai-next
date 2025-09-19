import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Navigation } from '@/components/Navigation'
import { WebVitalsReporter } from './layout-client'
import './refined-globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: 'Oliver Newth - AI Developer',
  description:
    'Engineering at the intersection of AI and human creativity. Building tools that amplify developer capabilities.',
  keywords: ['AI', 'Developer', 'Machine Learning', 'Software Engineering'],
  authors: [{ name: 'Oliver Newth' }],
  openGraph: {
    title: 'Oliver Newth - AI Developer',
    description: 'Engineering at the intersection of AI and human creativity.',
    url: 'https://newth.ai',
    siteName: 'Oliver Newth',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oliver Newth - AI Developer',
    description: 'Engineering at the intersection of AI and human creativity.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* Preload critical resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Resource hints for performance */}
        <link rel="prefetch" href="/projects" />
        <link rel="prefetch" href="/work" />

        {/* Prevent FOUC with minimal inline styles */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            body { margin: 0; padding: 0; }
          `,
          }}
        />
      </head>
      <body className="antialiased font-sans">
        <WebVitalsReporter />
        <Navigation />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
