/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Add this line
    
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Note the change here to ignoreBuildErrors
    ignoreBuildErrors: true, 
  },
}

module.exports = nextConfig