import type { NextConfig } from 'next'
import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
  // Performance optimizations
  experimental: {
    // Optimize package imports for better tree-shaking
    optimizePackageImports: ['lucide-react', 'framer-motion', 'clsx', 'tailwind-merge'],
    // Enable optimized CSS
    optimizeCss: true,
    // Turbopack for faster dev builds (optional)
    // turbo: {},
  },
  productionBrowserSourceMaps: false,
  poweredByHeader: false,

  // Fix workspace root detection
  outputFileTracingRoot: __dirname,

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
  webpack: (config, { isServer, dev }) => {
    // Optimize bundle size
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': __dirname,
      }
    }

    // Fix webpack cache issues in development
    if (dev) {
      config.cache = false
    }

    return config
  },

  // Keep ESLint during builds for better code quality
  eslint: {
    ignoreDuringBuilds: false,
  },

  // TypeScript strict checking
  typescript: {
    ignoreBuildErrors: false,
  },
}

export default withBundleAnalyzer(nextConfig)
