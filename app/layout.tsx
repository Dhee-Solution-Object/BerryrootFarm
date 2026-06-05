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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Coffeeo Plants | Premium Plants for Modern Living",
  description:
    "Discover premium quality plants for your home. Organic, sustainably grown plants with expert care guidance and fast delivery.",
  keywords:
    "plants, indoor plants, succulents, plant delivery, premium plants, sustainable farming, home gardening",
  authors: [{ name: "Coffeeo Plants" }],
  creator: "Coffeeo Plants",
  publisher: "Coffeeo Plants",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://coffeeo-plants.com",
    siteName: "Coffeeo Plants",
    title: "Coffeeo Plants | Premium Plants for Modern Living",
    description:
      "Discover premium quality plants for your home. Organic, sustainably grown plants with expert care guidance.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516997121675-4ebf66a5d763?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Coffeeo Plants - Premium Plants",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@coffeeo_plants",
    creator: "@coffeeo_plants",
    title: "Coffeeo Plants | Premium Plants for Modern Living",
    description:
      "Discover premium quality plants for your home. Organic, sustainably grown plants.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#16a34a" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
