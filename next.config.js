/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['unsplash.com'],
    //   remotePatterns: [
    //     {
    //       protocol: "https",
    //       hostname: "images.unsplash.com",
    //     },
    //   ],
    },
    experimental: {
      serverActions: true,
    },
  };
  
  module.exports = nextConfig;