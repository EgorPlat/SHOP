import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
  },
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
