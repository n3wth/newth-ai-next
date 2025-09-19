import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { WebVitalsReporter } from './layout-client'
import { JsonLdPerson, JsonLdWebsite } from '@/components/JsonLd'
import { KeyboardNavProvider } from '@/components/KeyboardNavProvider'
import './refined-globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'sans-serif',
  ],
  adjustFontFallback: true, // Better CLS prevention
})

export const metadata: Metadata = {
  metadataBase: new URL('https://newth.ai'),
  title: {
    default: 'Oliver Newth - AI Developer',
    template: '%s | Oliver Newth',
  },
  description:
    'Engineering at the intersection of AI and human creativity. Building tools that amplify developer capabilities.',
  keywords: [
    'AI',
    'Developer',
    'Machine Learning',
    'Software Engineering',
    'Google',
    'Product Manager',
  ],
  authors: [{ name: 'Oliver Newth' }],
  creator: 'Oliver Newth',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'Oliver Newth - AI Developer',
    description: 'Engineering at the intersection of AI and human creativity.',
    url: 'https://newth.ai',
    siteName: 'Oliver Newth',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Oliver Newth - AI Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oliver Newth - AI Developer',
    description: 'Engineering at the intersection of AI and human creativity.',
    creator: '@olivernewth',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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

        {/* PWA */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />

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
        <JsonLdPerson />
        <JsonLdWebsite />
        <WebVitalsReporter />
        <KeyboardNavProvider>
          <Navigation />
          {children}
          <Footer />
        </KeyboardNavProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
