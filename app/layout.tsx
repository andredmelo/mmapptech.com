//"use client";
import { Metadata } from 'next';
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { GoogleTagManager } from '@next/third-parties/google';
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Viewport } from 'next'

import MmappRootLayout from "@/app/mmappRootLayout";
 
export const viewport: Viewport = {
  themeColor: 'black',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mmapptech.com'),
  title: "MMAPP",
  description: "Mapping MMA, Boosting MMA Federations to the Digital Age with our all-in-one solution",
  icons: {
    icon: '/public/images/logos/mmapp/logo.ico',
    /* shortcut: '/public/images/logos/mmapp/shortcut-icon.png', */
    apple: '/public/images/logos/mmapp/logo.webp',
    /* other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    }, */
  },
  creator: 'André Melo',
  authors: [{ name: "André Melo", url: "https://andre1melo.com" }],
  openGraph: {
    title: 'MMAPP',
    description: 'Mapping MMA, Boosting MMA Federations to the Digital Age with our all-in-one solution',
    url: 'https://www.mmapptech.com',
    siteName: 'MMAPP',
    /* images: [
      {
        url: 'https://nextjs.org/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ], */
    locale: 'en_US',
    type: 'website',
  },
  /* twitter: {
    card: 'summary_large_image',
    title: 'Next.js',
    description: 'The React Framework for the Web',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['https://nextjs.org/og.png'], // Must be an absolute URL
  }, */
  /* appLinks: {
    ios: {
      url: 'https://nextjs.org/ios',
      app_store_id: 'app_store_id',
    },
    android: {
      package: 'com.example.android/package',
      app_name: 'app_name_android',
    },
    web: {
      url: 'https://nextjs.org/web',
      should_fallback: true,
    },
  }, */
  /* robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }, */
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const CalSans = localFont({
  src: "../components/ui/fonts/cal-sans/webfonts/CalSans-SemiBold.woff2",
  display: 'swap',
  variable: '--font-calSans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html className={`${inter.variable} ${CalSans.variable}`}>
      {/* <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta property="og:title" content="MMAPP" />
        <meta property="og:description" content="Mapping MMA" />
        <meta property="og:image" content="@/public/images/logos/mmapp/logo.webp" />
        <link rel="icon" href="@/public/images/logos/mmapp/logo.ico" />
        <link rel="apple-touch-icon" href="@/public/images/logos/mmapp/logo.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
      </head> */}
      {/* <!-- Google tag (gtag.js) --> */}
      <GoogleTagManager gtmId="G-XKR4VB95HV" />
      <SpeedInsights/>
      <MmappRootLayout>
        {children}
      </MmappRootLayout>
    </html>
  );
};

