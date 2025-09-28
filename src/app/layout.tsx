import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🔥 METADATA GLOBALI SEO
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
        url: "/og/incambio-default.jpg",
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
    images: ["/og/incambio-default.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
