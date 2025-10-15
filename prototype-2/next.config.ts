import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve public images directly to avoid Netlify IPX 500s
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
