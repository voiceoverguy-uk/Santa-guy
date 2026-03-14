import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://santaguy.co.uk"),
  title: {
    default: "SantaGuy | The UK's Trusted Voice of Santa — Guy Harris",
    template: "%s | SantaGuy",
  },
  description:
    "Guy Harris is the UK's trusted voice of Santa. Professional Santa voiceover for radio, TV, podcasts, brands, and festive campaigns. Trusted by BBC, ITV, Heart, Capital, Tesco, and more.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "SantaGuy",
    images: [
      {
        url: "/santa-guy-logo-og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@voiceoverman",
    creator: "@voiceoverman",
    images: ["/santa-guy-logo-og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
