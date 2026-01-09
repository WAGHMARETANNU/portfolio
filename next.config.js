/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Note the change here to ignoreBuildErrors
    ignoreBuildErrors: true, 
  },
}

module.exports = nextConfig