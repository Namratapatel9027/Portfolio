import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.codebasics.io',
      },
    ],
  },
};

export default nextConfig;
