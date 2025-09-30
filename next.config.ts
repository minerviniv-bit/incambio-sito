import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  experimental: {
    // 🔥 Inline critical CSS → elimina il "render blocking"
    optimizeCss: true,
  },

  images: {
    // 👉 Solo WebP: veloce da decodificare su mobile (AVIF è troppo lento)
    formats: ["image/webp"],

    // Breakpoint per responsive <Image>
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920],

    // Per icone, loghi, avatar
    imageSizes: [16, 24, 32, 48, 64, 96, 128, 256],

    // Se un giorno usi immagini esterne, abilita qui
    // remotePatterns: [
    //   { protocol: "https", hostname: "cdn.tuodominio.com" }
    // ],
  },
};

export default nextConfig;
