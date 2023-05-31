/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['storage.googleapis.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
      {
        source: '/app/:path*',
        destination: '/app/:path*',
      }
    ];
  },
  async serverMiddleware(app) {
    const apiProxy = require('./apiProxy');
    apiProxy(app);
  },
  experimental: {
    serverActions: true
  }

}

module.exports = nextConfig
