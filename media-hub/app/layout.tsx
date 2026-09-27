import type { Metadata } from "next";
import "./globals.css";
import { QueueProvider } from "@/lib/context/queue-context";
import { Navbar } from "@/components/Navbar";
import { DownloadQueueDrawer } from "@/components/DownloadQueueDrawer";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "MediaHub — Download public media",
  description:
    "Analyze public media links and download the available videos, images, or audio in supported formats.",
  keywords: [
    "video downloader",
    "tiktok downloader no watermark",
    "reddit video downloader",
    "twitter video downloader",
    "instagram reels download",
    "universal media downloader",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col text-zinc-100 antialiased selection:bg-violet-500/30 selection:text-violet-200">
        <QueueProvider>
          <Navbar />
          <main id="main-content" className="flex-1">{children}</main>
          <DownloadQueueDrawer />
          <Footer />
        </QueueProvider>
      </body>
    </html>
  );
}
