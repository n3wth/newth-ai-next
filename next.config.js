/** @type {import('next').NextConfig} */
const nextConfig = {
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
