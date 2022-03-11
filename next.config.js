/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    reactRoot: true,
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
