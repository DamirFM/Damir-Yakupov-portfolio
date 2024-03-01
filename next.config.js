/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['unsplash.com'],
    },
    experimental: {
      serverActions: true,
    },
  };
  
  module.exports = nextConfig;