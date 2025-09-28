// src/app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.incambio.eu";

  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/valutazione`, lastModified: new Date() },
    { url: `${base}/contatti`, lastModified: new Date() },

    // le 6 landing SEO
    { url: `${base}/pubblicita-cambio-merce`, lastModified: new Date() },
    { url: `${base}/cambio-merce`, lastModified: new Date() },
    { url: `${base}/baratto-pubblicita`, lastModified: new Date() },
    { url: `${base}/pubblicita-roma`, lastModified: new Date() },
    { url: `${base}/pubblicita-tv`, lastModified: new Date() },
    { url: `${base}/pubblicita-radio`, lastModified: new Date() },
  ];
}
