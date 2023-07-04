/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
  },
  experimental: {
    mdxRs: true,
  },
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
