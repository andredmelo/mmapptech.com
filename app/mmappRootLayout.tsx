"use client";
import dynamic from 'next/dynamic';
import { useState, useRef, useEffect, useTransition, Suspense } from 'react';
import { useRouter, usePathname } from "next/navigation";
import { isMobile, isMobileOnly, isAndroid, isWinPhone, isIOS, isSamsungBrowser } from 'react-device-detect';
import { useMediaQuery } from '@react-hook/media-query';
//import Loading from "@/app/loading";
const Loading = dynamic(() => import('@/app/loading'), {
  loading: () => 
    <div id="initalLoading" className="absolute z-[11] top-0 left-0 flex flex-col items-center justify-center w-screen h-screen bg-[var(--background-grey)]">
      <div className="flex flex-col items-center mb-16 text-left">
        <picture className="mb-6 w-[25vw]">
          <img src="/images/logos/mmapp/logo_on_black.svg" alt="MMAPP Logo"/>
        </picture>
        <h5 className="text-white mb-6 animate-pulse">Loading Assets</h5>
        <div className="flex-col gap-4 w-full flex items-center justify-center">
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin"
              xmlns="http://www.w3.org/2000/svg" width="48" height="48"
              viewBox="0 0 48 48" fill="none"
            >
              <circle cx="24" cy="24" r="22.5" stroke="#800080" strokeWidth="3" strokeDasharray="15 15" />
            </svg>
          </div>
        </div>
      </div>
    </div>,
  ssr: false
});

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

import "@/app/globals.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/app/footer";
import { AppContext } from '@/lib/contexts/AppContext';
import ToasterProviders from '@/lib/providers/toasterProviders'
import { MacBookProTextureContext, IPhoneTextureContext, IPadTextureContext, MacBookProOpacityContext, IPhoneOpacityContext, IPadOpacityContext } from '@/lib/contexts/R3FContext';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

declare global {
  interface Window {
    _mtm: any;
  }
}

export default function MmappRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const main: any = useRef();

  const isUnder768 = useMediaQuery('(max-width: 768px)');
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
  const [lastHref, setLastHref] = useState('');
  const [backLink, setBackLink] = useState(false);
  const smoother = useRef<ScrollSmoother>();
  const [isPending, startTransition] = useTransition();

  // Initialize currentPage with the current path
  //console.log("currentPage = "+currentPage.current);
  const currentPathname = usePathname(); // Call usePathname at the top level
  let currentPage = useRef<string>(currentPathname);
  const pathnameHistory = useRef([currentPathname]); // Initialize with the first pathname

  const linkHrefHistory = useRef<string[]>([]); // Ref to store the history of link.href values

  useEffect(() => {
    const reloadWindow = () => {
      window.location.reload();
    };
    if (!isMobile) {
      window.addEventListener('resize', reloadWindow);
    }
    window.addEventListener('orientationchange', reloadWindow);
    return () => {
      if (!isMobile) {
        window.removeEventListener('resize', reloadWindow);
      }
      window.removeEventListener('orientationchange', reloadWindow);
    };
  }, []);

  /* ===== useGSAP 4 matchMedia ===== */
  useGSAP(
    () => {
      let matchMedia = gsap.matchMedia();
      matchMedia.add("(hover: none)", () => {
        matchMedia.add("(max-width: 767px)", () => {
          //console.log("hover none");
          {isMobileOnly && !isIOS ? 
            smoother.current = ScrollSmoother.create({
              smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
              effects: false, // looks for data-speed and data-lag attributes on elements
              smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
              // ignoreMobileResize: true,
              //normalizeScroll: true,
            })
          :
            smoother.current = ScrollSmoother.create({
              smooth: 0,
              effects: false,
              smoothTouch: 0,
            })
          }
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
    },
    { dependencies: [ smoother ], revertOnUpdate: true, scope: main }
  );

  /* ===== useGSAP 4 Navigation ===== */
  useGSAP(
    () => {

      const hrefHistory = linkHrefHistory.current;
      const lastHref = hrefHistory[hrefHistory.length - 2];
      const handleLinkClick = (link:any) => {
        if (hrefHistory.length > 0) {
          //console.log('Previous href was:', lastHref);
        }
        // Update href history
        linkHrefHistory.current = [...hrefHistory, link.dataset.link];
        //console.log('Current href is:', link.href);
      };

      const history = pathnameHistory.current;
      const lastPathname = history[history.length - 1];
      if (currentPathname !== lastPathname) {
        //console.log('Pathname changed');
        // Check if it's likely a back button press
        if (history.length > 1 && currentPathname === history[history.length - 2]) {
          console.log('Back button was pressed');
          //console.log('Previous href was:', lastHref);
          setBackLink(true);
          setLastHref(lastHref);
          //animInBack.invalidate().restart().play();
        }
        // Update the history
        pathnameHistory.current = [...history, currentPathname];
      }

      const checktemplateAnimIn = setInterval(() => {
        if (document.querySelector('.templateAnimIn')) {
          clearInterval(checktemplateAnimIn);
          //console.log("Template animations are ready");
          if (smoother && smoother.current) {

            const dropdownLinks = gsap.utils.toArray('.dropdown-link-button');
            dropdownLinks.forEach((link: any, i) => {
              //router.prefetch(link.dataset.page)
              link.addEventListener("click", (e: any) => {

                e.preventDefault();

                if (link.dataset.page == currentPage.current && smoother.current) {
                  //console.log("currentPage is = "+currentPage.current);
                  smoother.current.scrollTo(link.dataset.link, true, "top 0px");
                  //router.replace(link.href, { scroll: false });
                  //console.log("currentPage remains = "+currentPage.current);
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
                      //console.log("animOut complete");
                      setHref(link.dataset.link);
                      setBackLink(false);
                      handleLinkClick(link);
                      startTransition(() => {
                        router.push(link.dataset.page, { scroll: true });
                        //router.push(link.href, { scroll: false });
                      });
                      currentPage.current = link.dataset.page;
                      //console.log("currentPage changed to " + currentPage.current);
                    }
                  })
                    .set(".footer", {opacity: 0})
                    .fromTo(".templateAnimIn", {opacity: 1, xPercent: 0},{opacity: 0, xPercent: 50, duration: 0.3, ease: "power2.out"})
                    .set(".templateAnimIn", {xPercent: 0})
                    .fromTo("#loadingBanner", {opacity: 0, y: -25}, {opacity: 1, y: 0, duration: 0.125, ease: "power2.out"})

                  animOut.invalidate().restart().play();
                }
              });
            });
          }
        }
      }, 50); // Check every 50ms
  },
  { dependencies: [currentPage, currentPathname, router, setHref, smoother, startTransition], revertOnUpdate: true, scope: main }
  );

  // Matomo tracker
  useEffect(() => {
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true;
    g.src='https://cdn.matomo.cloud/mmapptech.matomo.cloud/container_PHzoXL7A.js';
    if (s.parentNode) {
      s.parentNode.insertBefore(g, s);
    }
   }, [])

return (
    <AppContext.Provider value={{ href, setHref, lastHref, setLastHref, backLink, setBackLink, smoother }}>
    <body ref={main}>
      {isUnder768 ? 
        <ToasterProviders>
            <Navbar />
            <div id="smooth-wrapper">
              <div id="smooth-content">
                {<Loading />}
                <main id="main" className="templateAnimIn">{children}</main>
                <Footer />
              </div>
            </div>
        </ToasterProviders>
        : 
        <ToasterProviders>
          {/* <HeroIntroProvider> */}
          <MacBookProTextureContext.Provider value={{ macBookProTextureName, setMacBookProTextureName }}>
          <IPhoneTextureContext.Provider value={{ iPhoneTextureName, setiPhoneTextureName }}>
          <IPadTextureContext.Provider value={{ iPadTextureName, setiPadTextureName }}>
          <MacBookProOpacityContext.Provider value={{ macBookProOpacity, setMacBookProOpacity }}>
          <IPhoneOpacityContext.Provider value={{ iPhoneOpacity, setiPhoneOpacity }}>
          <IPadOpacityContext.Provider value={{ iPadOpacity, setiPadOpacity }}>
            <Navbar />
            <div id="smooth-wrapper">
              <div id="smooth-content">
                <Loading />
                <main id="main" className="templateAnimIn">
                  {children}
                </main>
                <Footer />
              </div>
            </div>
          </IPadOpacityContext.Provider>
          </IPhoneOpacityContext.Provider>
          </MacBookProOpacityContext.Provider>
          </IPadTextureContext.Provider>
          </IPhoneTextureContext.Provider>
          </MacBookProTextureContext.Provider>
          {/* </HeroIntroProvider> */}
        </ToasterProviders>
      }
    </body>
    </AppContext.Provider>
  );
};


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