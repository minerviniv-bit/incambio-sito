// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  experimental: {
    // 🔥 Inline critical CSS → elimina i CSS che bloccano il rendering
    optimizeCss: true,
  },

  images: {
    // 👉 Solo WebP (decodifica veloce su mobile, AVIF troppo pesante)
    formats: ["image/webp"],

    // Breakpoint per <Image> responsive
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920],

    // Per icone, loghi, avatar
    imageSizes: [16, 24, 32, 48, 64, 96, 128, 256],

    // Se un giorno userai immagini esterne, abilita qui
    // remotePatterns: [
    //   { protocol: "https", hostname: "cdn.tuodominio.com" }
    // ],
  },
};

export default nextConfig;
