/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  sassOptions: {
  },
  experimental: {
    serverActions: true,
    mdxRs: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
    ],
  },
}

const withMDX = require('@next/mdx')()

module.exports = withMDX(nextConfig)
