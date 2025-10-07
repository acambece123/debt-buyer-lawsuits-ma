/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // important for static export
  basePath: '/debt-buyer-lawsuits-ma', // repo name
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
