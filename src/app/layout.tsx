import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

/* SEO base per Next (non fa male tenerla) */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.incambio.eu"),
  title: {
    default: "inCambio – Pubblicità in cambio merce",
    template: "%s | inCambio",
  },
  description:
    "Trasforma i tuoi prodotti e servizi in campagne pubblicitarie misurabili. TV, Radio e Digital anche in cambio merce. Scopri come funziona con inCambio.",
  openGraph: {
    siteName: "inCambio",
    type: "website",
    locale: "it_IT",
    title: "inCambio – Pubblicità in cambio merce",
    description:
      "Trasforma i tuoi prodotti in visibilità: TV, Radio e Digital in cambio merce. Con inCambio investi senza cash flow e ottieni nuovi clienti.",
    url: "https://www.incambio.eu/",
    images: [{ url: "https://www.incambio.eu/logo.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "inCambio – Pubblicità in cambio merce",
    description:
      "Campagne TV, Radio e Digital in cambio merce. Pubblicità senza esborso di cassa.",
    images: ["https://www.incambio.eu/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        {/* ====== HARD-CODED OG/TWITTER (FB/X li vede SEMPRE) ====== */}
        <meta property="og:site_name" content="inCambio" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:title" content="inCambio – Pubblicità in cambio merce" />
        <meta
          property="og:description"
          content="Trasforma i tuoi prodotti in visibilità: TV, Radio e Digital in cambio merce. Con inCambio investi senza cash flow e ottieni nuovi clienti."
        />
        <meta property="og:url" content="https://www.incambio.eu/" />
        {/* 👇 QUESTI SONO QUELLI CHE FB VUOLE VEDERE PER FORZA */}
        <meta property="og:image" content="https://www.incambio.eu/logo.png?v=1" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="inCambio – Pubblicità in cambio merce" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="inCambio – Pubblicità in cambio merce" />
        <meta
          name="twitter:description"
          content="Campagne TV, Radio e Digital in cambio merce. Pubblicità senza esborso di cassa."
        />
        <meta name="twitter:image" content="https://www.incambio.eu/logo.png?v=1" />
        {/* ======================================================== */}
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
