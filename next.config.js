/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: '/Users/oliver/GitHub/newth-ai-next',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig