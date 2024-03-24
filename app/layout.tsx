"use client";
/* import type { Metadata } from "next"; */
import { useState, useRef, useEffect, useTransition } from 'react';
import { useRouter, usePathname } from "next/navigation";
import { HrefContext } from '@/contexts/HrefContext';
import { IPhoneTextureContext, IPadTextureContext, IPhoneOpacityContext, IPadOpacityContext } from '@/contexts/TextureContext';
import { Inter } from "next/font/google";
//import Navigation from "./components/navigation";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer";
//import Loading from "./loading";
import Template from "./template";
import Providers from './providers'
import "./globals.css";
import localFont from "next/font/local";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/* const inter = Inter({ subsets: ["latin"] });
export const siteTitle = 'MMAPP'; */

const inter = Inter({ subsets: ["latin"] });
const CalSans = localFont({ src: "../components/ui/fonts/cal-sans/webfonts/CalSans-SemiBold.woff2" });

/* export const metadata: Metadata = {
  title: {
    template: '%s | MMAPP',
    default: 'MMAPP',
  },
  description: "Mapping MMA, the Language of MMA Officials",
}; */


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const main: any = useRef();
  let smoother = useRef<ScrollSmoother>();
  /* ===== Media Queries ===== */
  /* const [noHover] = useMediaQuery('(hover: none)')
  const [portrait] = useMediaQuery('(orientation: portrait)')
  const [under992] = useMediaQuery('(max-width: 992px)')
  const [under768] = useMediaQuery('(max-width: 767px)')
  const [hUnder376] = useMediaQuery('(max-height: 376px)') */

  const [iPhoneTextureName, setiPhoneTextureName] = useState('');
  const [iPadTextureName, setiPadTextureName] = useState('');
  const [iPhoneOpacity, setiPhoneOpacity] = useState(0);
  const [iPadOpacity, setiPadOpacity] = useState(0);

  const router = useRouter();
  const [href, setHref] = useState('');
  const [isPending, startTransition] = useTransition();

  // Initialize currentPage with the current path
  const initialPathname = usePathname();
  let currentPage = useRef<string>(initialPathname);
  //console.log("currentPage = "+currentPage.current);

  /* useEffect(() => {
    console.log("href = "+href);
    // Here you can fetch data based on the `href` value
    // For example:
    // async function fetchData() {
    //   const response = await fetch(href);
    //   const data = await response.json();
    //   console.log(data);
    // }
    // if (href) fetchData();
  }, [href]); */

  /* ===== GSAP React ===== */
  useGSAP(
    () => {
      let matchMedia = gsap.matchMedia();
      matchMedia.add("(hover: none)", () => {
        //console.log("hover none");
        smoother.current = ScrollSmoother.create({
          smooth: 0, // how long (in seconds) it takes to "catch up" to the native scroll position
          effects: true, // looks for data-speed and data-lag attributes on elements
          smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
          /* ignoreMobileResize: true,
          normalizeScroll: true, */
        });
        let ScrollSmootherTop = "top 0px";
      });

      smoother.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true, // looks for data-speed and data-lag attributes on elements
        smoothTouch: 0.25, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
      });

      //let currentPage: string = "/";
      let ScrollSmootherTop = "top 0px"; //"top 52px"

      //ScrollTrigger.config({ ignoreMobileResize: true });
      //ScrollTrigger.normalizeScroll(true);

      // Navigation
      /* const animIn = gsap.timeline({paused: true, immediateRender: true})
        .fromTo("#smooth-content", {opacity: 0, xPercent: -100, }, {duration: 0.5, opacity: 1, xPercent: 0, ease: "power2.out"}); */
        //.fromTo("main h1, main h2, main h3, main h4, main p, main a, main button, main img", {opacity: 0, y: -100}, {duration: 0.1, opacity: 1, y: 0, stagger: 0.01, ease: "power2.inOut"})
      const checktemplateAnimIn = setInterval(() => {
        if (document.querySelector('.templateAnimIn')) {
          clearInterval(checktemplateAnimIn);
          //console.log("Template animations are ready");
          const animOut = gsap.timeline({paused: true, immediateRender: true})
          //.fromTo("main h1, main h2, main h3, main h4, main p, main a, main button, main img", {opacity: 1, y: 0}, {duration: 0.1, opacity: 0, y: -100, stagger: 0.01, ease: "power2.inOut"})
            .fromTo(".templateAnimIn", {opacity: 1, x: 0},{duration: 0.25, opacity: 0, x: -100, ease: "power2.out"})

          if (smoother && smoother.current) {
            const dropdownLinks = gsap.utils.toArray('.dropdown-link');
            dropdownLinks.forEach((link: any, i) => {
              //router.prefetch(link.dataset.page)
              link.addEventListener("click", (e: any) => {

                e.preventDefault();
                /* console.log("Clicked && currentPage is "+currentPage);
                console.log("New page is "+link.dataset.page);
                console.log("New link is "+link.dataset.link);
                console.log("New href is "+link.href); */

                if (link.dataset.page == currentPage.current && smoother.current) {
                  console.log("currentPage is = "+currentPage.current);
                  smoother.current.scrollTo(link.dataset.link, true, ScrollSmootherTop);
                  //router.replace(link.href, { scroll: false });
                  //console.log("currentPage remains = "+currentPage);
                } else {
                  /* // Event without animOut
                  setHref(link.dataset.link);
                  router.push(link.href, { scroll: false });
                  currentPage = link.dataset.page;
                  console.log("currentPage changed to " + currentPage); */

                  animOut.eventCallback("onComplete", () => {
                    setHref(link.dataset.link);
                    startTransition(() => {
                      router.push(link.dataset.page, { scroll: false });
                      //router.push(link.href, { scroll: false });
                    });
                    currentPage.current = link.dataset.page;
                    //console.log("currentPage changed to " + currentPage);
                  });
                  animOut.invalidate();
                  animOut.restart().play();
                }
              });
            });
          }
        }
      }, 50); // Check every 50ms

      /* const detectViewportRatio = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const ratio = width / height;
        if (ratio > 16/9) {
        } else if (ratio < 16/9) {
        } else {
          console.log("Viewport is 16:9");
        }
        if (ratio < 4/3) {
          console.log("Viewport is narrower than 4:3");
        } else if (ratio > 4/3) {
          console.log("Viewport is wider than 4:3");
        } else {
          console.log("Viewport is 4:3");
        }
        console.log("ratio is "+ratio);

        if (ratio > 1.54) {
          gsap.set(document.getElementById("featuresDashboardTitle"), {marginBottom: 0, });
        }
      }
      detectViewportRatio();
      window.addEventListener('resize', detectViewportRatio); */

  /* GSDevTools.create(); */
  },
  { dependencies: [currentPage, router, setHref, smoother, startTransition], revertOnUpdate: true, scope: main }
  );

  //console.log(smoother);

  return (
    <HrefContext.Provider value={{ href, setHref }}>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <link rel="icon" href="@/public/images/logo.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="apple-touch-icon" href="@/public/images/logo.webp" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
        </head>
        <body className={`${inter.className} ${CalSans.className}`} ref={main}>
          <Providers>
            <IPhoneTextureContext.Provider value={{ iPhoneTextureName, setiPhoneTextureName }}>
            <IPadTextureContext.Provider value={{ iPadTextureName, setiPadTextureName }}>
            <IPhoneOpacityContext.Provider value={{ iPhoneOpacity, setiPhoneOpacity }}>
            <IPadOpacityContext.Provider value={{ iPadOpacity, setiPadOpacity }}>
              <Navbar />
              <div id="smooth-wrapper">
                <div id="smooth-content">
                  <Template /* key={routeParam} */ smoother={smoother} isPending={isPending}>
                    <main id="main">{children}</main>
                  </Template>
                  <Footer />
                </div>
              </div>
            </IPadOpacityContext.Provider>
            </IPhoneOpacityContext.Provider>
            </IPadTextureContext.Provider>
            </IPhoneTextureContext.Provider>
          </Providers>
        </body>
      </html>
    </HrefContext.Provider>
  );
};