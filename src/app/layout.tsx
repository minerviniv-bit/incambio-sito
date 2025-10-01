import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

// Configura il font scelto
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

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
    images: [
      {
        url: "/logo.png", // usa il tuo logo reale
        width: 1200,
        height: 630,
        alt: "inCambio – Pubblicità in cambio merce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "inCambio – Pubblicità in cambio merce",
    description:
      "Campagne TV, Radio e Digital in cambio merce. Pubblicità senza esborso di cassa.",
    images: ["/logo.png"], // stesso logo per Twitter
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
