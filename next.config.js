/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverActionsBodySizeLimit: '5mb',
  },
  images: {
    domains: [
      process.env.NEXT_PUBLIC_URL,
      process.env.NEXT_PUBLIC_IMAGE_URL,
      '*',
    ],
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_PROTOCOL,
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
