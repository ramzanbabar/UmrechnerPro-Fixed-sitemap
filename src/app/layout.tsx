import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://umrechnerpro.de'),
  title: {
    default: 'UmrechnerPro - Kostenlose Einheiten-Umrechner für DACH',
    template: '%s | UmrechnerPro',
  },
  description: 'Kostenlose Einheiten-Umrechner für Länge, Gewicht, Temperatur, Fläche, Volumen und mehr. Präzise Umrechnungen für Deutschland, Österreich und die Schweiz.',
  keywords: ['Umrechner', 'Einheiten umrechnen', 'Einheitenrechner', 'Umrechnung', 'Umrechnen', 'Umrechnungstabelle', 'Längenumrechner', 'Gewichtsumrechner', 'Temperatur umrechnen'],
  authors: [{ name: 'UmrechnerPro' }],
  creator: 'UmrechnerPro',
  publisher: 'UmrechnerPro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    alternateLocale: ['de_AT', 'de_CH'],
    url: 'https://umrechnerpro.de',
    siteName: 'UmrechnerPro',
    title: 'UmrechnerPro - Kostenlose Einheiten-Umrechner für DACH',
    description: 'Kostenlose Einheiten-Umrechner für Länge, Gewicht, Temperatur, Fläche, Volumen und mehr. Präzise Umrechnungen für Deutschland, Österreich und die Schweiz.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UmrechnerPro - Kostenlose Einheiten-Umrechner',
    description: 'Kostenlose Einheiten-Umrechner für Länge, Gewicht, Temperatur und mehr.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes when available
  },
  alternates: {
    canonical: 'https://umrechnerpro.de',
    languages: {
      'de-DE': 'https://umrechnerpro.de',
      'de-AT': 'https://umrechnerpro.de',
      'de-CH': 'https://umrechnerpro.de',
      'de': 'https://umrechnerpro.de',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <meta name="geo.region" content="DE" />
        <meta name="geo.region" content="AT" />
        <meta name="geo.region" content="CH" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
