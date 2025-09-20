/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  async rewrites() {
    return [
      // Serve index.html for /storybook
      {
        source: '/storybook',
        destination: '/storybook/index.html',
      },
    ]
  },
}

module.exports = nextConfig
