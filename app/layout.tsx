//"use client";
import { Metadata } from 'next';
import { Inter } from "next/font/google";
import localFont from "next/font/local";
//import { GoogleTagManager } from '@next/third-parties/google';
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Viewport } from 'next'

import { CSPostHogProvider } from './providers'

import MmappRootLayout from "@/app/mmappRootLayout";
 
export const viewport: Viewport = {
  themeColor: 'black',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mmapptech.com'),
  title: "MMAPP",
  description: "Mapping MMA, Boosting MMA Federations to the Digital Age",
  icons: {
    icon: '/public/images/logos/mmapp/logo_icon.svg',
    shortcut: '/public/images/logos/mmapp/shortcut-icon.png',
    apple: '/public/images/logos/mmapp/apple-icon.png',
  },
  manifest: '/public/images/logos/mmapp/manifest.json',
  referrer: 'origin-when-cross-origin',
  keywords: ['MMA', 'Fighting', 'Judging', 'Timekeeper', 'Timekeeping', 'Scorekeeper', 'Scorekeeping', 'Methodology', 'Referee', 'Refereeing', 'Officials', 'Regulatory', 'Federations', 'Athletic Commission', 'IMMAF', 'Bellator', 'UFC', 'One', 'Rizin', 'Cage Warriors', 'Academy'],
  creator: 'André Melo',
  authors: [{ name: "André Melo", url: "https://andre1melo.com" },{ name: 'MMAPP Technologies', url: 'https://www.linkedin.com/company/mmapp-technologies/'}],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'MMAPP',
    description: 'Mapping MMA, Boosting MMA Federations to the Digital Age',
    url: 'https://www.mmapptech.com',
    siteName: 'MMAPP',
    images: [
      {
        url: 'https://www.mmapptech.com/public/images/logos/mmapp/og.png', // Must be an absolute URL
        width: 1200,
        height: 630,
      },
      /* {
        url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      }, */
    ],
    locale: 'en_US',
    type: 'website',
  },
  appLinks: {
    ios: {
      url: 'https://apps.apple.com/us/app/mmapp-judge/id6446885768',
      app_store_id: '6446885768',
    },
    android: {
      package: 'https://play.google.com/store/apps/details?id=com.mmapp.mobile',
      app_name: 'MMAPP - Judge',
    },
    web: {
      url: 'https://dashboard.mmapp.app/login',
      should_fallback: true,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
    <html className={`${inter.variable} ${CalSans.variable}`} lang="en">
      {/* <GoogleTagManager gtmId="G-XKR4VB95HV" /> */}
      <SpeedInsights/>
      <CSPostHogProvider>
        <MmappRootLayout>
          {children}
        </MmappRootLayout>
      </CSPostHogProvider>
    </html>
  );
};

