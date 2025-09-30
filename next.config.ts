// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true, // abilita gzip/brotli dove possibile

  experimental: {
    // 🔥 inlining/ottimizzazione CSS critico: riduce il render-blocking
    optimizeCss: true,

    // opzionale ma utile se usi molte lib grandi
    // optimizePackageImports: ["lucide-react", "date-fns", "lodash"],
  },

  images: {
    // lasciamo WebP (come avevi) — non tocchiamo l'immagine
    formats: ["image/webp"],

    // breakpoint sensati per <Image>
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes:  [16, 24, 32, 48, 64, 96, 128, 256],
    // remotePatterns: [] // se in futuro serviranno immagini esterne
  },

  // (facoltativo) se vuoi cache lunga per asset statici:
  // headers: async () => [
  //   {
  //     source: "/_next/static/(.*)",
  //     headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
  //   },
  // ],
};

export default nextConfig;
