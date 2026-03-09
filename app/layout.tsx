import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
