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
    disableStaticImages: true
  }
}
module.exports = withPlugins([
  images
], nextConfig);