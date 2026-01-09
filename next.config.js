/** @type {import('next').NextConfig} */
const nextConfig = {
  // This tells Vercel to ignore ESLint errors during the build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // This tells Vercel to ignore TypeScript type errors during the build
  typescript: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;