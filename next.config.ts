// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Abilita formati moderni e dimensioni responsive per <Image>
  images: {
    formats: ["image/avif", "image/webp"],

    // Breakpoint usati per generare versioni responsive
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920, 2560],

    // Dimensioni utili per icone, loghi, avatar ecc.
    imageSizes: [16, 24, 32, 48, 64, 96, 128, 256],

    // Se in futuro usi immagini esterne, abilita remotePatterns:
    // remotePatterns: [
    //   { protocol: "https", hostname: "cdn.esempio.com" }
    // ],
  },

  reactStrictMode: true,
};

export default nextConfig;
