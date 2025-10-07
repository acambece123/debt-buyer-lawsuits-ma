/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // 👈 this tells Next.js to build static files
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
