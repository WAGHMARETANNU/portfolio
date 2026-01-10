/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Note the change here to ignoreBuildErrors
    ignoreBuildErrors: true, 
  },
}

module.exports = nextConfig