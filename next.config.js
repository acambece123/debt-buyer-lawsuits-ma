/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  output: 'export', // 👈 this makes Next.js export static files
  basePath: '/debt-buyer-lawsuits-ma', // 👈 this is required for GitHub Pages
  assetPrefix: '/debt-buyer-lawsuits-ma/', // 👈 this fixes CSS/JS paths
}

module.exports = nextConfig
