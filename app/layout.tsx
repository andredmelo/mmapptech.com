"use client";
import Head from 'next/head';
/* import type { Metadata } from "next"; */
import { useState, useRef, useEffect, useTransition } from 'react';
import { useRouter } from "next/navigation";
import { HrefContext } from './HrefContext';
import { Inter } from "next/font/google";
//import Navigation from "./components/navigation";
import Navbar from "../components/navigation/navbar";
import Loading from "./loading";
import Template from "./template";
import Providers from './providers'
import "./globals.css";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/* const inter = Inter({ subsets: ["latin"] });
export const siteTitle = 'MMAPP'; */

const inter = Inter({ subsets: ["latin"] });

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

  
  const router = useRouter();
  const [href, setHref] = useState('');
  const [isPending, startTransition] = useTransition();

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

      let currentPage: string = "/";
      let ScrollSmootherTop = "top 52px";

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

                if (link.dataset.page == currentPage && smoother.current) {
                  smoother.current.scrollTo(link.dataset.link, true, ScrollSmootherTop);
                  router.replace(link.href, { scroll: false });
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
                      router.push(link.href, { scroll: false });
                    });
                    currentPage = link.dataset.page;
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

      const detectViewportRatio = () => {
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
      window.addEventListener('resize', detectViewportRatio);

      function isViewportRatioLessThan160() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const ratio = width / height;
        return ratio < 1.6;
      }

      //Home Animations
      const checkHomeAnimIn = setInterval(() => {
        if (document.querySelector('.colored-card') && document.querySelector('.featuresDashboardHeader')) {
              clearInterval(checkHomeAnimIn);
              //console.log("Home animations are ready");
          let cards: HTMLElement[] = gsap.utils.toArray(".colored-card");

          let h4s: HTMLElement[] = gsap.utils.toArray(".featuresDashboardHeaderH4");
          const changeH4 = gsap.timeline({paused: true, immediateRender: false})
            .fromTo(h4s[0], {opacity: 1, yPercent: 0}, {opacity: 0, yPercent: -200, duration: 0.2})
            .fromTo(h4s[1], {opacity: 0, yPercent: -200}, {opacity: 1, yPercent: 0, duration: 0.2})
            .addPause()
            .fromTo(h4s[1], {opacity: 1, yPercent: 0}, {opacity: 0, yPercent: -200, duration: 0.2})
            .fromTo(h4s[2], {opacity: 0, yPercent: -200}, {opacity: 1, yPercent: 0, duration: 0.2})
            .addPause()
            .fromTo(h4s[2], {opacity: 1, yPercent: 0}, {opacity: 0, yPercent: -200, duration: 0.2})
            .fromTo(h4s[3], {opacity: 0, yPercent: -200}, {opacity: 1, yPercent: 0, duration: 0.2})
            .addPause()

          h4s.forEach((h4) => { gsap.set(h4, {opacity: 0}); });
          gsap.set(h4s[0], {opacity: 1, filter:"brightness(100%)"});

          let header = document.getElementById('featuresDashboardHeader');
          let title = document.getElementById('featuresDashboardTitle');
          let proDisplayShadowSVG = document.getElementById('proDisplayShadowSVG');

          const vhToPixels = (vh: number) => {
            const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            return (vh * height) / 100;
          };
          let bottomDistance = vhToPixels(50); // extra distance to have things stick after the last card pins (pixels). Careful as 
          let lastCardST = ScrollTrigger.create({
            trigger: cards[cards.length-1] as HTMLElement,
            start: "center center",
          });

          // variable for how much the card moves up when stacked
          let cardsYPercent = 5;
          matchMedia.add("(hover: none)", () => { cardsYPercent = 6; })

          // Animation that makes the cards go up and shrink further on each iteration
          const stackCardsAnim = (cards: HTMLElement[], i: number) => {
            for (let j = 0; j < i; j++) {
              let opacity = 1 - ((i - j) * 0.2); // Decrease opacity by 0.2 for each preceding card
              let brightness = 100 - ((i - j) * 20); // Decrease brightness by 20% for each preceding card
              let blur = 0 + (i * 0.5); // Increase blur by 2 for each preceding card

              gsap.to(cards[j], {
                yPercent: ((-cardsYPercent) * (i - j)),
                scale: (1 - ((i - j) * 0.1)),
                filter: `brightness(${brightness}%)`, //blur(${blur}px)
                /* opacity: opacity, */
                transformOrigin: "top",
                duration: 0.5,
                ease: "power2.inOut"
              });
            }
          }

          const reverseStackCardsAnim = (cards: HTMLElement[], i: number) => {
            for (let j = 0; j < i; j++) {
              // Calculate the adjustment factor to ensure immediate reversal
              let adjustmentFactor = j - i + 1;
              let brightness = 100 + (adjustmentFactor * 20); // Increase brightness to reverse the effect
              let opacity = 1 + (adjustmentFactor * 0.2); // Increase opacity to reverse the effect
              let blur = 0 - (i * 0.5); // Decrease blur to reverse the effect

              gsap.to(cards[j], {
                yPercent: cardsYPercent * adjustmentFactor,
                scale: 1 - (adjustmentFactor * (-0.1)),
                filter: `brightness(${brightness}%)`,
                /* opacity: opacity, */
                transformOrigin: "top",
                duration: 0.5,
                ease: "power2.inOut"
              });
            }
          }

          cards.forEach((card, i) => {
            switch (i) {
              case 0: // case to pin both card[0] and header
                ScrollTrigger.create({
                  trigger: card,
                  start: "center 60%",
                  end: () => lastCardST.start + bottomDistance,
                  pin: card,
                  pinSpacing: false,
                  invalidateOnRefresh: true,
                });
                ScrollTrigger.create({
                  trigger: card,
                  start: "center 60%",
                  end: () => lastCardST.start + bottomDistance,
                  pin: header,
                  pinSpacing: false,
                  invalidateOnRefresh: true,
                });
                ScrollTrigger.create({
                  trigger: card,
                  start: "center 60%",
                  end: () => lastCardST.start + bottomDistance,
                  pin: proDisplayShadowSVG,
                  pinSpacing: false,
                  invalidateOnRefresh: true,
                });
                if (isViewportRatioLessThan160()) {
                  ScrollTrigger.create({
                    trigger: card,
                    start: "center 60%",
                    end: () => lastCardST.start + bottomDistance,
                    pin: title,
                    pinSpacing: false,
                    invalidateOnRefresh: true,
                  });
                }
                break;
              case cards.length-1: // case to pinSpacing the last card
                ScrollTrigger.create({
                  trigger: card,
                  start: "center 60%",
                  end: () => lastCardST.start + bottomDistance,
                  pin: true,
                  pinSpacing: true,
                  invalidateOnRefresh: true,
                  onEnter: ({progress, direction, isActive}) => {
                    changeH4.play();
                    stackCardsAnim(cards, i);
                  },
                  onLeaveBack: ({progress, direction, isActive}) => {
                    changeH4.reverse();
                    reverseStackCardsAnim(cards, i);
                  }
                });
                break;
              default: // default case
                ScrollTrigger.create({
                  trigger: card,
                  start: "center 60%",
                  end: () => lastCardST.start+ bottomDistance,
                  pin: true,
                  pinSpacing: false,
                  onEnter: ({progress, direction, isActive}) => {
                    changeH4.play();
                    stackCardsAnim(cards, i);
                  },
                  onLeaveBack: ({progress, direction, isActive}) => {
                    changeH4.reverse();
                    reverseStackCardsAnim(cards, i);
                  }
                });
            }   //"center "+(vhToPixels(55)+(vhToPixels(1)*i))
          });
        }
      }, 50); // Check every 50ms

  /* GSDevTools.create(); */
  },
  { dependencies: [router, setHref, smoother, startTransition], revertOnUpdate: true, scope: main }
  );

  //console.log(smoother);

  return (
    <HrefContext.Provider value={{ href, setHref }}>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <link rel="icon" href="@/public/images/logo.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1"
          />
          <link rel="apple-touch-icon" href="@/public/images/logo.webp" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
        </head>
        <body className={inter.className} ref={main}>
          <Providers>
            <Navbar />
            <div id="smooth-wrapper">
              <div id="smooth-content">
                <Template /* key={routeParam} */ smoother={smoother} isPending={isPending}>
                  <main id="main">{children}</main>
                </Template>
              </div>
            </div>
          </Providers>
        </body>
      </html>
    </HrefContext.Provider>
  );
};

