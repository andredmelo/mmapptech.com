"use client";
import Head from 'next/head';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import Navigation from "./components/navigation";
import Navbar from "./components/navigation/navbar";
import "./globals.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/* const inter = Inter({ subsets: ["latin"] });
export const siteTitle = 'MMAPP';

export const metadata: Metadata = {
  title: "MMAPP",
  description: "Mapping MMA",
}; */
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  /* ===== GSAP React ===== */
  useGSAP(
    () => {
      let smoother = ScrollSmoother.create({
        smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true, // looks for data-speed and data-lag attributes on elements
        smoothTouch: 0.25, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
      });

      let currentPage: string = "home";

      const dropdownLinks = gsap.utils.toArray('.dropdown-link');
      dropdownLinks.forEach((link: any, i) => {
        //console.log(link.dataset.page);
        //console.log(link.dataset.link);
        link.addEventListener("click", () => {
      
          if (link.dataset.page == currentPage) {
            smoother.scrollTo(link.dataset.link, true, "top 52px");
          } else {
            //router.push(link.dataset.page);
            currentPage = link.dataset.page;
            //smoother.scrollTo(link.dataset.link, true, "top 52px");
            console.log("current page is "+link.dataset.page);
          }
        });
      });


  /* GSDevTools.create(); */

  },
  { dependencies: [/* color, noHover, portrait, under768, isGecko, lettersYInit, lettersYLiftoff, lettersYDrop, lettersYRise */], revertOnUpdate: true, /* scope: main */ }
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

