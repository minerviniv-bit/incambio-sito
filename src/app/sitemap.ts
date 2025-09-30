// src/app/sitemap.ts
import type { MetadataRoute } from 'next';

const base = 'https://www.incambio.eu';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${base}/contatti`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/valutazione`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Aggiungi qui eventuali altre pagine reali
  ];
}
