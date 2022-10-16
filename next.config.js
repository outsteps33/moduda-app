/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const images = require('next-images');

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    reactRoot: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["localhost", "https://imagedelivery.net/"],
    disableStaticImages: true,
    formats: ["image/webp"],
  },
}
module.exports = withPlugins([
  images
], nextConfig);