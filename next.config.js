/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  sassOptions: {
  },
  experimental: {
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
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/mediocrehacker/**',
      },
    ],
  },
}

const withMDX = require('@next/mdx')()

module.exports = withMDX(nextConfig)
