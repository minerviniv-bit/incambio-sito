// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  experimental: {
    // Inline critical CSS (toglie il render-blocking del CSS)
    optimizeCss: true,
  },

  images: {
    formats: ["image/webp"],
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 24, 32, 48, 64, 96, 128, 256],
  },
};

export default nextConfig;
