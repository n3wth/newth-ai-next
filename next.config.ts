import type { NextConfig } from 'next'
import bundleAnalyzer from '@next/bundle-analyzer'
import { withVercelToolbar } from '@vercel/toolbar/plugins/next'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
  // Fix workspace root detection
  outputFileTracingRoot: __dirname,

  // Add Storybook rewrite for deployment
  async rewrites() {
    return [
      {
        source: '/storybook',
        destination: '/storybook/index.html',
      },
    ]
  },

  // Performance optimizations
  experimental: {
    // Optimize package imports for better tree-shaking
    optimizePackageImports: ['lucide-react', 'framer-motion', 'clsx', 'tailwind-merge'],
    // Enable optimized CSS
    optimizeCss: true,
    // Web Vitals attribution for debugging
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB'],
  },

  // Enable React strict mode for better debugging
  reactStrictMode: true,

  // Development indicators
  devIndicators: {
    position: 'bottom-right',
  },

  // Turbopack configuration (minimal for best performance)
  turbopack: {},
  productionBrowserSourceMaps: false,
  poweredByHeader: false,

  // Server external packages (moved from experimental)
  serverExternalPackages: [],

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compiler optimizations
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  // Webpack optimizations
  webpack: (config, { isServer }) => {
    // Optimize bundle size
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': __dirname,
      }
    }

    // Webpack cache doesn't work on Vercel serverless
    // Keep default caching behavior

    return config
  },

  // ESLint - disable in production for speed
  eslint: {
    ignoreDuringBuilds: process.env.VERCEL === '1',
  },

  // TypeScript checking - disable in production for speed
  typescript: {
    ignoreBuildErrors: process.env.VERCEL === '1',
  },
}

// Only apply webpack plugins in production or when analyzing
const isDev = process.env.NODE_ENV === 'development'
const isAnalyze = process.env.ANALYZE === 'true'

let finalConfig = nextConfig

// Apply bundle analyzer only when needed (not in dev with Turbopack)
if (isAnalyze || !isDev) {
  finalConfig = withBundleAnalyzer(finalConfig)
}

// Apply Vercel Toolbar
export default withVercelToolbar()(finalConfig)
