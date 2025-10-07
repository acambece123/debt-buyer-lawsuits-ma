/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',  // Important for static export
  basePath: '/debt-buyer-lawsuits-ma',
  assetPrefix: '/debt-buyer-lawsuits-ma/',
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
