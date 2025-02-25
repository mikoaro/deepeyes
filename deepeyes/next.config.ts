import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        port: '',
        pathname: '/image**',
      },
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        port: '',
        pathname: '/image*',
      },
      {
        protocol: 'https',
        hostname: 'v0.blob.com',
        port: '',
        pathname: '/*',
      },
    ],
  },
  experimental: {
    ppr: false,
  },
};

export default nextConfig;



