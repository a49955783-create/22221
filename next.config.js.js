/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // لتفادي مشاكل الصور على Vercel
  },
  eslint: {
    ignoreDuringBuilds: true, // لتجاوز تحذيرات اللنت أثناء البناء
  },
};

module.exports = nextConfig;
