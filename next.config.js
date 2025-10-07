/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  output: 'export',                // 👈 tells Next.js to create static HTML
  basePath: '/debt-buyer-lawsuits-ma', // 👈 match your repo name
  images: {
    unoptimized: true,             // 👈 GitHub Pages doesn’t handle Next.js images
  },
}

module.exports = nextConfig
