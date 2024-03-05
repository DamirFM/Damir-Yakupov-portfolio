/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['unsplash.com'],
    },
    experimental: {
      serverActions: true,
      serverComponentsExternalPackages: [
        '@react-email/components',
        '@react-email/render',
        '@react-email/tailwind'
    ]
    },
    reactServerComponents: {
      use: ["@react-email/tailwind"]}
  };
  
  export default nextConfig;

  