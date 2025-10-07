/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 👈 required for static export
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
