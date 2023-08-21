/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_PROTOCOL,
        hostname: process.env.NEXT_PUBLIC_URL,
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
