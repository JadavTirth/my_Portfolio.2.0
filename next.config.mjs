/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // required for static export if using next/image
  },
  output: 'export', // 👈 tells Next.js to generate /out for static hosting
};

export default nextConfig;
