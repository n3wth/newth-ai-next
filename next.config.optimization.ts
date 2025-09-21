import type { NextConfig } from 'next'

export const optimizationConfig: Partial<NextConfig> = {
  // Enable SWC minification
  swcMinify: true,

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },

  // Webpack optimizations
  webpack: (config, { isServer }) => {
    // Tree shaking
    config.optimization = {
      ...config.optimization,
      usedExports: true,
      sideEffects: false,
    }

    // Code splitting
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            name: 'framework',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
            priority: 40,
            enforce: true,
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name(module: { context: string }) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([[\\/]|$)/
              )?.[1]
              return `npm.${packageName?.replace('@', '')}`
            },
            priority: 10,
          },
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 5,
          },
        },
      }
    }

    return config
  },

  // Experimental features for performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
}
