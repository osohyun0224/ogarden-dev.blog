import type { Metadata } from 'next';
import Script from 'next/script';

import { Toaster } from '@/components/ui/toaster';
import { baseDomain, blogDesc, blogName, blogThumbnailURL } from '@/config/const';
import '@/config/globals.css';
import { Footer } from '@/layouts/Footer';
import { Header } from '@/layouts/Header';
import { ThemeProvider } from '@/layouts/theme/Provider';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(baseDomain),
  title: blogName,
  description: blogDesc,
  openGraph: {
    title: blogName,
    description: blogDesc,
    siteName: blogName,
    images: [blogThumbnailURL],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: blogName,
    description: blogDesc,
    images: [blogThumbnailURL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full scroll-my-20 scroll-smooth' suppressHydrationWarning>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body className='font-pretendard flex min-h-screen flex-col'>
        <ThemeProvider>
          <Header />
          <main className='mt-[64px] flex flex-1 flex-col'>{children}</main>
          <Footer />
        </ThemeProvider>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
