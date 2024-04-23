"use client";
import { useState, useRef, useEffect, useTransition, Suspense } from 'react';
import { useRouter, usePathname } from "next/navigation";
import { AppContext } from '@/lib/contexts/AppContext';
import { MacBookProTextureContext, IPhoneTextureContext, IPadTextureContext, MacBookProOpacityContext, IPhoneOpacityContext, IPadOpacityContext } from '@/lib/contexts/R3FContext';
import { Inter } from "next/font/google";
//import Navigation from "./components/navigation";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/app/footer";
import Loading from "./loading";
import Template from "./template";
import Providers from './providers'
import "./globals.css";
import localFont from "next/font/local";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { HeroIntroProvider } from '@/lib/contexts/HeroIntroContext';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/* const inter = Inter({ subsets: ["latin"] });
export const siteTitle = 'MMAPP'; */

const inter = Inter({ subsets: ["latin"] });
const CalSans = localFont({ src: "../components/ui/fonts/cal-sans/webfonts/CalSans-SemiBold.woff2" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const main: any = useRef();
  /* ===== Media Queries ===== */
  /* const [noHover] = useMediaQuery('(hover: none)')
  const [portrait] = useMediaQuery('(orientation: portrait)')
  const [under992] = useMediaQuery('(max-width: 992px)')
  const [under768] = useMediaQuery('(max-width: 767px)')
  const [hUnder376] = useMediaQuery('(max-height: 376px)') */

  const [macBookProTextureName, setMacBookProTextureName] = useState('');
  const [iPhoneTextureName, setiPhoneTextureName] = useState('');
  const [iPadTextureName, setiPadTextureName] = useState('');
  const [iPhoneOpacity, setiPhoneOpacity] = useState(0);
  const [iPadOpacity, setiPadOpacity] = useState(0);
  const [macBookProOpacity, setMacBookProOpacity] = useState(0);

  const router = useRouter();
  const [href, setHref] = useState('');
  const smoother = useRef<ScrollSmoother>();
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
        matchMedia.add("(max-width: 767px)", () => {
          //console.log("hover none");
          smoother.current = ScrollSmoother.create({
            smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
            effects: false, // looks for data-speed and data-lag attributes on elements
            smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
            // ignoreMobileResize: true,
            //normalizeScroll: true,
          });
          let ScrollSmootherTop = "top 0px";
        });
        matchMedia.add("(min-width: 768px)", () => {
          //console.log("hover none");
          smoother.current = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
            effects: true, // looks for data-speed and data-lag attributes on elements
            smoothTouch: 0.25, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
            //ignoreMobileResize: true,
            //normalizeScroll: true,
          });
          let ScrollSmootherTop = "top 0px";
        });
      });

      matchMedia.add("(hover: hover)", () => {
        smoother.current = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
          effects: true, // looks for data-speed and data-lag attributes on elements
          //smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
        });

        //let currentPage: string = "/";
        let ScrollSmootherTop = "top 0px"; //"top 52px"
      });

      //ScrollTrigger.config({ ignoreMobileResize: true });
      //ScrollTrigger.normalizeScroll(true);

      // Navigation
      const checktemplateAnimIn = setInterval(() => {
        if (document.querySelector('.templateAnimIn')) {
          clearInterval(checktemplateAnimIn);
          //console.log("Template animations are ready");

          if (smoother && smoother.current) {
            const dropdownLinks = gsap.utils.toArray('.dropdown-link');
            dropdownLinks.forEach((link: any, i) => {
              //router.prefetch(link.dataset.page)
              link.addEventListener("click", (e: any) => {

                e.preventDefault();

                if (link.dataset.page == currentPage.current && smoother.current) {
                  console.log("currentPage is = "+currentPage.current);
                  smoother.current.scrollTo(link.dataset.link, true, "top 0px");
                  //router.replace(link.href, { scroll: false });
                  //console.log("currentPage remains = "+currentPage);
                } else {
                  /* // Event without animOut
                  setHref(link.dataset.link);
                  router.push(link.href, { scroll: false });
                  currentPage = link.dataset.page;
                  console.log("currentPage changed to " + currentPage); */

                  const animOut = gsap.timeline({
                    paused: true,
                    immediateRender: true,
                    onComplete: () => {
                      setHref(link.dataset.link);
                      startTransition(() => {
                        router.push(link.dataset.page, { scroll: false });
                        //router.push(link.href, { scroll: false });
                      });
                      currentPage.current = link.dataset.page;
                      //console.log("currentPage changed to " + currentPage);
                    }
                  })
                    .set(".footer", {opacity: 0})
                    .fromTo(".templateAnimIn", {opacity: 1, x: 0},{opacity: 0, x: 100, duration: 0.3, ease: "power2.out"})
                    .fromTo("#loadingBanner", {opacity: 0, y: -25}, {opacity: 1, y: 0, duration: 0.125, ease: "power2.out"})
                  //.fromTo("main h1, main h2, main h3, main h4, main p, main a, main button, main img", {opacity: 1, y: 0}, {duration: 0.1, opacity: 0, y: -100, stagger: 0.01, ease: "power2.inOut"})

                  animOut.invalidate().restart().play();
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
    <AppContext.Provider value={{ href, setHref, smoother }}>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <link rel="icon" href="@/public/images/logos/mmapp/logo.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="apple-touch-icon" href="@/public/images/logos/mmapp/logo.webp" />
          {/* <!-- Google tag (gtag.js) --> */}
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XKR4VB95HV"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XKR4VB95HV');
          </script> */}
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
        </head>
        <body className={`${inter.className} ${CalSans.className}`} ref={main}>
          <Providers>
            <HeroIntroProvider>
            <MacBookProTextureContext.Provider value={{ macBookProTextureName, setMacBookProTextureName }}>
            <IPhoneTextureContext.Provider value={{ iPhoneTextureName, setiPhoneTextureName }}>
            <IPadTextureContext.Provider value={{ iPadTextureName, setiPadTextureName }}>
            <MacBookProOpacityContext.Provider value={{ macBookProOpacity, setMacBookProOpacity }}>
            <IPhoneOpacityContext.Provider value={{ iPhoneOpacity, setiPhoneOpacity }}>
            <IPadOpacityContext.Provider value={{ iPadOpacity, setiPadOpacity }}>
              <Navbar />
              <div id="smooth-wrapper">
                <div id="smooth-content">
                  {<Loading />}
                  <main id="main" className="templateAnimIn">{children}</main>

                  {/* <Template isPending={isPending}>  //key={routeParam} smoother={smoother}
                    <main id="main" className="templateAnimIn">{children}</main>
                  </Template> */}

                  {/* <Suspense fallback={<Loading />}>
                      <main id="main">
                        {children}
                      </main>
                  </Suspense> */}

                  <Footer />
                </div>
              </div>
            </IPadOpacityContext.Provider>
            </IPhoneOpacityContext.Provider>
            </MacBookProOpacityContext.Provider>
            </IPadTextureContext.Provider>
            </IPhoneTextureContext.Provider>
            </MacBookProTextureContext.Provider>
            </HeroIntroProvider>
          </Providers>
        </body>
      </html>
    </AppContext.Provider>
  );
};