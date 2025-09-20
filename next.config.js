/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/storybook',
        destination: '/storybook/index.html',
      },
      {
        source: '/storybook/:path*',
        destination: '/storybook/:path*',
      },
    ]
  },
}

module.exports = nextConfig
