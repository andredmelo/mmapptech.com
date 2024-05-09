//"use client";
import { Metadata } from 'next';
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { GoogleTagManager } from '@next/third-parties/google';
import { SpeedInsights } from "@vercel/speed-insights/next"

import MmappRootLayout from "@/app/mmappRootLayout";

export const metadata: Metadata = {
  title: "MMAPP",
  description: "Mapping MMA, Boosting MMA Federations to the Digital Age with our all-in-one solution",
  creator: 'André Melo',
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
      <head>
        {/* <meta charSet="utf-8" /> */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1"/> */}
        <meta property="og:title" content="MMAPP" />
        <meta property="og:description" content="Mapping MMA" />
        <meta property="og:image" content="@/public/images/logos/mmapp/logo.webp" />
        <link rel="icon" href="@/public/images/logos/mmapp/logo.ico" />
        <link rel="apple-touch-icon" href="@/public/images/logos/mmapp/logo.webp" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"/> */}
      </head>
      {/* <!-- Google tag (gtag.js) --> */}
      <GoogleTagManager gtmId="G-XKR4VB95HV" />
      <SpeedInsights/>
      <MmappRootLayout>
        {children}
      </MmappRootLayout>
    </html>
  );
};

