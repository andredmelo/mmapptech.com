"use client"
import React, { useEffect, useRef, useState, useTransition } from "react";
import { Metadata } from 'next'
import { clsx } from "clsx";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import CustomEase from 'gsap/CustomEase';

import Benefits from '@/app/home/benefits'
import ContactUs from '@/app/contact/contact-us'

import { MainFC, MainFCTitle, MainFCHeading, MainFCDescription } from '@/components/ui/mainFunctionalComponent'
import { ProductFC, ProductFCTitle, ProductFCHeading, ProductFCDescription } from '@/components/ui/productFunctionalComponent'
import TabButtonProductJudge from '@/components/ui/tab-button-product-judge'
import TabButtonProductRecordKeeper from '@/components/ui/tab-button-product-RecordKeeper'

gsap.registerPlugin(gsap, useGSAP, ScrollTrigger, DrawSVGPlugin, CustomEase);

/* export const metadata: Metadata = {
  title: 'Product',
} */

const Product = () => {
  const [activeTabProductJudge, setActiveTabProductJudge] = useState('ProductJudge1')
  const [activeTabProductRecordKeeper, setActiveTabProductRecordKeeper] = useState('ProductRecordKeeper1')
  const [isPending, startTransition] = useTransition()
  const [preloadedImages, setPreloadedImages] = useState({});
  const [isLoading, setIsLoading] = useState(false); //image loading state

  const imageSrcMapJudge: Record<string, string> = {
    'ProductJudge1': 'productJudge-1',
    'ProductJudge2': 'productJudge-2',
    'ProductJudge3': 'productJudge-3',
    'ProductJudge4': 'productJudge-4',
    'ProductJudge5': 'productJudge-5',
    'ProductJudge6': 'productJudge-6',
  };
  const imageSrcMapRecordKeeper: Record<string, string> = {
    'ProductRecordKeeper1': 'productRecordKeeper-1',
    'ProductRecordKeeper2': 'productRecordKeeper-2',
    'ProductRecordKeeper3': 'productRecordKeeper-3',
    'ProductRecordKeeper4': 'productRecordKeeper-4',
  };

  const descriptionSrcMapJudge: Record<string, string> = {
    'ProductJudge1': 'Assess Fights with the MMAPP Methodology',
    'ProductJudge2': 'Submit Scores Instantly',
    'ProductJudge3': 'Personalised Fight Card',
    'ProductJudge4': 'Practice at Home',
    'ProductJudge5': 'Share your results with your colleagues',
    'ProductJudge6': 'Personal Lifetime archive of your results',
  };

  const descriptionSrcMapRecordKeeper: Record<string, string> = {
    'ProductRecordKeeper1': 'Master Timing duties like never before (Round Time, Break Time)',
    'ProductRecordKeeper2': 'Record every fight detail (Number of Breaks, Break Duration, Reasons for Point deductions, etc.)',
    'ProductRecordKeeper3': 'Receive and Calculate scorecards automatically and get the results instantly',
    'ProductRecordKeeper4': 'Automatically send the results to the Federation',
  };

  useEffect(() => {
    const imagesJudge = ['ProductJudge1', 'ProductJudge2', 'ProductJudge3', 'ProductJudge4', 'ProductJudge5', 'ProductJudge6'];
    const imagesRecordKeeper = ['ProductRecordKeeper1', 'ProductRecordKeeper2', 'ProductRecordKeeper3', 'ProductRecordKeeper4'];
    const newPreloadedImages: Record<string, HTMLImageElement> = {};
  
    imagesJudge.forEach((image) => {
      const img = new Image();
      img.src = `/images/product/officialsJudge/${imageSrcMapJudge[image as keyof typeof imageSrcMapJudge]}.webp`;
      newPreloadedImages[image] = img;
    });

    imagesRecordKeeper.forEach((image) => {
      const img = new Image();
      img.src = `/images/product/officialsRecordKeeper/${imageSrcMapRecordKeeper[image as keyof typeof imageSrcMapRecordKeeper]}.webp`;
      newPreloadedImages[image] = img;
    });
  
    setPreloadedImages(newPreloadedImages);
  }, []);

  // Use the isLoading state to delay the change of the activeTabProductJudge state
  function selectTabProductJudge(tab: string) {
    setIsLoading(true); // Assuming you have an isLoading state to manage the loading indicator
    startTransition(() => {
      setActiveTabProductJudge(tab);
      // Introduce a delay before setting isPending to false
      setTimeout(() => {
        setIsLoading(false); // Turn off loading indicator after a delay
      }, 50); // Adjust the delay as needed
    });
  }

  function selectTabProductRecordKeeper(tab: string) {
    setIsLoading(true); // Assuming you have an isLoading state to manage the loading indicator
    startTransition(() => {
      setActiveTabProductRecordKeeper(tab);
      // Introduce a delay before setting isPending to false
      setTimeout(() => {
        setIsLoading(false); // Turn off loading indicator after a delay
      }, 50); // Adjust the delay as needed
    });
  }

  useEffect(() => {
    let timeoutId: any;
    if (isLoading) {
      timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 50);
    }
    return () => clearTimeout(timeoutId);
  }, [isLoading]);

/*   const useDomReady = (callback: () => void) => {
    useEffect(() => {
      if (document.readyState === 'complete') {
        callback();
      } else {
        const handleReady = () => {
          callback();
          document.removeEventListener('DOMContentLoaded', handleReady);
        };
        document.addEventListener('DOMContentLoaded', handleReady);
        return () => document.removeEventListener('DOMContentLoaded', handleReady);
      }
    }, [callback]);
  };
  // Usage
  useDomReady(() => {
    console.log('DomReady is done')
    ScrollTrigger.refresh()
  }); */


  const [executionCount, setExecutionCount] = useState(0);
  /* ===== GSAP React ===== */
  useGSAP(
    () => {
      //drawMainPath Animations

      /* gsap.defaults({
        ease: "none",
        duration: 1
      }); */
      let drawMainPath0 = gsap.timeline({
        defaults: {
          ease: "linear",//
        },
        scrollTrigger: {
          trigger: "#MMAPP-Methodology",
          start: "bottom 70%",
          endTrigger: "#Judge",
          end: "top top",
          scrub: 1,
          /* markers:true, */
          preventOverlaps:true,
          /* onUpdate: (self) => {
            if (self.direction === -1 && self.getVelocity() > 1) {
              // The user is scrolling up fast, so rewind the animation faster
              gsap.to("#myAnimation", { timeScale: self.getVelocity() });
            } else {
              // The user is scrolling normally or down, so play the animation at normal speed
              gsap.to("#myAnimation", { timeScale: 1 });
            }
          } */
        }
        })
        //.to(".ball04", { duration: 0.01, autoAlpha: 1 })
        .from("#mainPath-0", { drawSVG: 0 }, 0)
        //.to(".ball01", { motionPath: { path: "#path", align: '#path', alignOrigin: [0.5, 0.5] } }, 0 )
        /* .add(() => {
          if (action.scrollTrigger.direction === -1) { // if scrolling backwards, reverse the dot animation
            dotAnimation.reverse();
          } else { // if scrolling forward, play forward
            dotAnimation.play();
          }
        }, 2.48); */
      let drawMainPath1 = gsap.timeline({
        defaults: {
          ease: CustomEase.create("custom", "M0,0 C0.036,0.228 0.314,0.499 0.4,0.6 0.551,0.776 0.625,0.682 0.802,0.776 0.872,0.813 0.98,0.934 1,1 "),//
        },
        scrollTrigger: {
          trigger: "#Judge",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          /* markers:true, */
          preventOverlaps:true,
        }
        })
        .from("#mainPath-1", { drawSVG: 0 }, 0)

      let drawMainPath2 = gsap.timeline({
        defaults: {
          ease: CustomEase.create("custom", "M0,0 C0.097,0.318 0.202,0.019 0.453,0.6 0.561,0.85 0.626,0.733 0.803,0.827 0.873,0.864 0.98,0.934 1,1 "),
        },
        scrollTrigger: {
          trigger: "#RecordKeeper",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          /* markers:true, */
          preventOverlaps:true,
        }
        })
        .from("#mainPath-2", { drawSVG: 0 }, 0)

      let drawMainPath3 = gsap.timeline({
        defaults: {
          ease: CustomEase.create("custom", "M0,0 C0.036,0.228 0.187,0.5 0.273,0.6 0.433,0.808 0.625,0.682 0.802,0.776 0.872,0.813 0.98,0.934 1,1 "),
        },
        scrollTrigger: {
          trigger: "#Dashboard",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          /* markers:true, */
          preventOverlaps:true,
        }
        })
        .from("#mainPath-3", { drawSVG: 0 }, 0)

      let drawMainPath4 = gsap.timeline({
        defaults: {
          ease: CustomEase.create("custom", "M0,0 C0.036,0.256 0.392,0.277 0.5,0.4 0.669,0.595 0.614,0.545 0.754,0.706 0.805,0.765 1,0.851 1,1 "),
        },
        scrollTrigger: {
          trigger: "#Dashboard-Members",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          /* markers:true, */
          preventOverlaps:true,
        }
        })
        .from("#mainPath-4", { drawSVG: 0 }, 0)


        ScrollTrigger.refresh()

        ScrollTrigger.create({
          trigger: 'body',
          start: 'top -20%',
          onEnter: (self) => {
            console.log('ScrollTriggerRefresh');
            ScrollTrigger.refresh();
          }
        });


    /* GSDevTools.create(); */
    },
    { dependencies: [executionCount], revertOnUpdate: true }
  );

  return (
    <>
    {/* <article className="prose-stone lg:prose-xl"> */}
      {/* <section id="MMAPP-Methodology" className="flex flex-col h-[65vw] py-0 md:py-0 lg:py-0 pt-0 md:pt-12 lg:pt-20">
          <MainFC className="bg-bgRadialGradientDown">
            <MainFCTitle className="flex flex-col justify-start z-20 max-w-[30rem] md:max-w-[50rem] lg:max-w-[60rem] text-left">
              MMAPP Methodology
            </MainFCTitle>
            <MainFCHeading className="flex flex-col justify-start z-20 pr-[0%] md:pr-[32%] lg:pr-[20%] text-left">
              A consistent and standardised unit of measurement for officiating MMA
            </MainFCHeading>
            <MainFCDescription className="flex flex-col justify-start z-20 pr-[0%] md:pr-[30%] lg:pr-[25%] text-left mb-2 md:mb-0">
              The MMAPP Platform centres around our patented methodology, which provides officials worldwide with a consistent and coherent approach to assessing MMA fights.<br/><br/>
              Using only a mobile device, officials can record their train of thought, without any outside input, for every second of the fight and provide insights into their own evaluation immediately after the round.<br/><br/>
              This allows officials to make more informed decisions for longer.<br/><br/>
              By creating a standardised unit of measurement, we are able to get officials on the same page and improve consistency in MMA Judging, whilst allowing judges to have a better recall of every fight.
            </MainFCDescription>
          </MainFC>
      </section> */}

      <section id="MMAPP-Methodology" className="flex flex-col py-0 md:py-0 lg:py-0 pt-0 md:pt-[0vw] lg:pt-[0vw]">
          <ProductFC className="p-12 md:p-[7.65vw] bg-bgRadialGradientDown">
            <ProductFCTitle className="
            pt-[3vw]">
              MMAPP Methodology
            </ProductFCTitle>
            <ProductFCHeading className="mx-[5vw]">
              A consistent and standardised unit of measurement for officiating MMA
            </ProductFCHeading>
            <ProductFCDescription className="justify-start pr-[0vw] md:pr-[22vw] text-left mb-6 md:mb-[2vw]">
              The MMAPP Platform centres around our patented methodology, which provides officials worldwide with a consistent and coherent approach to assessing MMA fights.
            </ProductFCDescription>
            <ProductFCDescription className="justify-end pl-[0vw] md:pl-[19vw] text-right mb-6 md:mb-[2vw]">
              Using only a mobile device, officials can record their train of thought, without any outside input, for every second of the fight and provide insights into their own evaluation immediately after the round.<br/>
              This allows officials to make more informed decisions for longer.
            </ProductFCDescription>
            <ProductFCDescription className="justify-start pr-[0vw] md:pr-[22vw] text-left mb-6 md:mb-[2vw]">
              By creating a standardised unit of measurement, we are able to get officials on the same page and improve consistency in MMA Judging, whilst allowing judges to have a better recall of every fight.
            </ProductFCDescription>
            <p className="text-xl hover:text-white text-neutral-200 text-center justify-center pt-[2.5vw]">
            ↓
            </p>
          </ProductFC>

          {/* <div className={clsx(
            "flex flex-col relative justify-center",
            "h-full mx-1 md:mx-[5.6vw]",//max-w-[1536px] 3xl:min-w-[1536px] 3xl:mx-auto
            "p-12 md:p-[7.65vw]",
            "rounded-[3rem] bg-no-repeat bg-bgRadialGradientDown")}
          >
            <h5 className="flex flex-col justify-center z-20 text-md md:text-[2.175vw] portrait:touch:text-[3.15vw] text-center mb-12 md:mb-[3.5vw] pt-[3vw] text-neutral-200 deboss">
              MMAPP Methodology
            </h5>

            <h3 className={clsx(
              "flex flex-col justify-center text-center z-20 mx-[5vw] mb-12 md:mb-[3.5vw]",
              "text-xl md:text-[4.35vw] portrait:touch:text-[6.75vw] text-transparent bg-clip-text py-2 bg-gradient-to-bl from-[var(--purple-250)] to-purple-100")}
              >
              A consistent and standardised unit of measurement for officiating MMA
            </h3>
            <h6 className="flex flex-col justify-start z-20 pr-[0vw] md:pr-[22vw] text-[1.5rem] md:text-[1.33vw] portrait:touch:text-[2vw] text-left font-medium leading-[2.1rem] md:leading-[1.75vw] portrait:touch:leading-[2.8vw] mb-6 md:mb-[2vw]">
              The MMAPP Platform centres around our patented methodology, which provides officials worldwide with a consistent and coherent approach to assessing MMA fights.
            </h6>
            <h6 className="flex flex-col justify-end z-20 pl-[0vw] md:pl-[19vw] text-[1.5rem] md:text-[1.33vw] portrait:touch:text-[2vw] text-right font-medium leading-[2.1rem] md:leading-[1.75vw] portrait:touch:leading-[2.8vw] mb-6 md:mb-[2vw]">
              Using only a mobile device, officials can record their train of thought, without any outside input, for every second of the fight and provide insights into their own evaluation immediately after the round.<br/>
              This allows officials to make more informed decisions for longer.
            </h6>
            <h6 className="flex flex-col justify-start z-20 pr-[0vw] md:pr-[19vw] text-[1.5rem] md:text-[1.33vw] portrait:touch:text-[2vw] text-left font-medium leading-[2.1rem] md:leading-[1.75vw] portrait:touch:leading-[2.8vw]">
              By creating a standardised unit of measurement, we are able to get officials on the same page and improve consistency in MMA Judging, whilst allowing judges to have a better recall of every fight.
            </h6>
            <p className="text-xl hover:text-white text-neutral-200 text-center justify-center pt-[2.5vw]">
            ↓
            </p>
          </div> */}

      </section>
      

      <div id="productLineDesktop"
        className={clsx(
          "portrait:touch:hidden flex flex-col relative justify-center items-center", // portrait:touch:
          "mx-1 md:mx-[5.6vw] mt-[-2px]",
        )}>
        <svg viewBox="0 0 1536 7500" id="productPath" data-name="productPath" className="pointer-events-none absolute top-0 hidden select-none md:block" xmlns="http://www.w3.org/2000/svg">
          <path id="backgroundPath" d="m769,92v56l-.02,19.37c.01,17.68-14.32,32.02-32,32.02H37c-17.67,0-32,14.33-32,32v714c0,17.67,14.33,32,32,32h700c17.67,0,32,14.33,32,32l.02,1070.98c-.01,17.68,14.32,32.02,32,32.02h681.98c17.67,0,32,14.33,32,32v996c0,17.67-14.33,32-23,32H50c-26.67,0-41,14.33-41,32l-.13,475.61c0,17.67,14.33,32,32,32l714.13.29c17.67,0,32,14.33,32,32v419c0,17.67-14.33,32-32,32H41c-17.67,0-32,14.33-32,32v708.1c0,17.67,14.33,32,32,32h700c17.67,0,32,14.33,32,32l.02,1076.98c-.01,17.68,14.32,32.02,32,32.02h677.98c17.67,0,32,14.33,32,32l-.12,773.61c0,17.67-14.33,32-23,32H49.88c-26.67,0-41,14.33-41,32v400c0,17.67,14.33,32,32,32h714c17.67,0,32,14.33,32,32" fill="none" opacity=".1" stroke="#4d004d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
          <path id="mainPath-0" d="m769.27,92.32v56l-.02,19.37c.01,17.68-14.32,32.02-32,32.02l-598.1.3" fill="none" stroke="#4d004d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
          <path id="mainPath-1" d="m139.14,200l-101.87-.3c-17.67,0-32,14.33-32,32v714c0,17.67,14.33,32,32,32h700c17.67,0,32,14.33,32,32l.02,1070.98c-.01,17.68,14.32,32.02,32,32.02h598.85" fill="none" stroke="#4d004d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
          <path id="mainPath-2" d="m1400.14,2112.7h83.13c17.67,0,32,14.33,32,32v996c0,17.67-14.33,32-23,32H50.27c-26.67,0-41,14.33-41,32l-.13,475.61c0,17.67,14.33,32,32,32l714.13.29c17.67,0,32,14.33,32,32v419c0,17.67-14.33,32-32,32H139.14" fill="none" stroke="#4d004d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
          <path id="mainPath-3" d="m139.14,4195.6H41.27c-17.67,0-32,14.33-32,32v708.1c0,17.67,14.33,32,32,32h700c17.67,0,32,14.33,32,32l.02,1076.98c-.01,17.68,14.32,32.02,32,32.02h596.1" fill="none" stroke="#4d004d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
          <path id="mainPath-4" d="m1401.39,6108.7h81.88c17.67,0,32,14.33,32,32l-.12,773.61c0,17.67-14.33,32-23,32H50.14c-26.67,0-41,14.33-41,32v400c0,17.67,14.33,32,32,32h714c17.67,0,32,14.33,32,32" fill="none" stroke="#4d004d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
          {/* <path id="mainPath" d="m760,92v56l-.02,19.37c.01,17.68-14.32,32.02-32,32.02H37c-17.67,0-32,14.33-32,32v714c0,17.67,14.33,32,32,32h691c17.67,0,32,14.33,32,32l.02,1070.98c-.01,17.68,14.32,32.02,32,32.02h690.98c17.67,0,32,14.33,32,32v996c0,17.67-14.33,32-32,32H41c-17.67,0-32,14.33-32,32l-.13,475.61c0,17.67,14.33,32,32,32l705.13.29c17.67,0,32,14.33,32,32v419c0,17.67-14.33,32-32,32H41c-17.67,0-32,14.33-32,32v708.1c0,17.67,14.33,32,32,32h691c17.67,0,32,14.33,32,32l.02,1076.98c-.01,17.68,14.32,32.02,32,32.02h690.98c17.67,0,32,14.33,32,32l-.12,773.61c0,17.67-14.33,32-32,32H40.88c-17.67,0-32,14.33-32,32v400c0,17.67,14.33,32,32,32h705c17.67,0,32,14.33,32,32" fill="none" stroke="#4d004d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"/> */}
          <path id="funnel" d="m768.88,122.16s-.53-120.16,193.21-119.78C1248.71,2.19,1008.91,0,769.11,0s-479.6,2.19-192.97,2.39c193.74-.39,193.21,119.78,193.21,119.78" fill="#4d004d" strokeWidth="0"/>
        </svg>
      </div>


      {/* <path d="M2 1686.5L2 1607C2 1589.33 16.3269 1575 34 1575L1186 1575C1203.67 1575 1218 1560.67 1218 1543L1218 795.001C1218 777.327 1203.67 763.001 1186 763.001L34.021 763.001C16.3397 763.001 2.00945 748.661 2.02104 730.98L2.50015 -0.000122048" stroke="var(--blue-500)" stroke-opacity="1" stroke-linecap="round" stroke-width="3" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="0.98052660449808px 1px"></path> */}

      <div id="productLineTablets"
        className={clsx(
          "landscape:hidden portrait:hidden portrait:touch:hidden portrait:touch:md:flex flex-col relative justify-center items-center",
          "mx-1 md:mx-[5.6vw]",
        )}>
        <svg viewBox="0 0 1536 3500" id="Layer_1" data-name="Layer 1" className="pointer-events-none absolute top-0 hidden select-none md:block" xmlns="http://www.w3.org/2000/svg">
        <path d="m15.13,3499.9v-587.61c0-17.67,14.33-32,32-32h1442c17.67,0,32-14.33,32-32v-878c0-17.67-14.33-32-32-32h-690.98c-17.68,0-32.01-14.34-32-32.02l-.02-898.98c0-17.67-14.33-32-32-32H43.12c-17.67,0-32-14.33-32-32V229.29c0-17.67,14.33-32,32-32h690.98c17.68,0,32.01-14.34,32-32.02l.02-19.37v-56" fill="none" stroke="#cc0000" strokeLinecap="round" stroke-width="10"/>
      <path d="m766,120.07S765.47-.1,959.21.29C1532.47-.1,0-.1,573.26.29c193.74-.39,193.21,119.78,193.21,119.78" fill="#cc0000" stroke-width="0"/>
        </svg>
      </div>

      {/* <div className="borderBottom"></div> */}

    <section id="Judge" className="flex flex-col mt-0 md:mt-[6vw] justify-center">
        {/* <div id="bgGlowRight" className={clsx(
              "flex justify-end",
              "h-full ml-auto",
              )}
            >
            <img
              className="object-scale-down absolute"
              src="/images/bg/glow-right.webp"
              alt="bg GlowRight"
            />
        </div> */}
        <ProductFC className="px-12 md:px-[7.65vw] pt-12 md:pt-[12vw] pb-12 md:pb-[14.1vw]">
          <ProductFCTitle className="justify-start text-left max-w-[30rem] md:max-w-[100%]">
            Judge
          </ProductFCTitle>
          <ProductFCHeading className="justify-start text-left pr-[0%] md:pr-[15vw]">
            Designed for officials and their mobile devices
          </ProductFCHeading>
          <ProductFCDescription className="justify-start pr-[0vw] md:pr-[19vw] text-left">
            The “Judge” app is specifically designed for officials and their mobile devices.<br/><br/>
            It provides the tools to apply our methodology during a fight, submit scores to the RecordKeeper instantly, and offer personalised fight cards for each official.<br/><br/>
            Additionally, it allows judges to share their scorecards and graphs with each other and their Federations, allowing for a second-by-second analysis of each round.
          </ProductFCDescription>
        </ProductFC>
        {/* <div className={clsx(
          "flex flex-col relative justify-center",
          "h-full mx-1 md:mx-[5.6vw]",
          "px-12 md:px-[7.65vw] pt-12 md:pt-[12vw] pb-12 md:pb-[14.1vw]",
          "rounded-[3rem] bg-no-repeat ",
          )}
        >
          <h5 className="flex flex-col justify-start text-left z-20 max-w-[30rem] md:max-w-[100%] text-md md:text-[2.175vw] mb-12 md:mb-[3.5vw] text-neutral-200 deboss">
            Judge
          </h5>
          <h3 className={clsx(
            "flex flex-col justify-start text-left z-20 pr-[0%] md:pr-[15vw] mb-12 md:mb-[3.5vw]",
            "text-xl md:text-[4.35vw] text-transparent bg-clip-text py-2 bg-gradient-to-bl from-[var(--purple-250)] to-purple-100")}>
            Designed for officials and their mobile devices
          </h3>
          <h6 className="flex flex-col justify-start z-20 pr-[0vw] md:pr-[19vw] text-[1.5rem] md:text-[1.33vw] text-left font-medium leading-[2.1rem] md:leading-[1.75vw]">
            The “Judge” app is specifically designed for officials and their mobile devices.<br/><br/>
            It provides the tools to apply our methodology during a fight, submit scores to the RecordKeeper instantly, and offer personalised fight cards for each official.<br/><br/>
            Additionally, it allows judges to share their scorecards and graphs with each other and their Federations, allowing for a second-by-second analysis of each round.
          </h6>
        </div> */}

        {/* Titles for big mobile devices */}
        <div className="landscape:hidden portrait:hidden portrait:touch:hidden portrait:touch:md:flex w-full justify-center items-center relative mb-6 md:mb-10 lg:mb-12 py-8 px-[10%]">
          <h3 className={clsx("text-center text-transparent bg-clip-text bg-gradient-to-b from-[var(--purple-400)] to-purple-100",
          "two-lines-always")}>
            {descriptionSrcMapJudge[activeTabProductJudge]}
          </h3>
        </div>

        <div className={clsx("w-full flex flex-col md:flex-row gap-4 md:gap-0 relative pb-0 md:pb-[1.75vw]")}>

          <div className="w-full flex flex-row md:flex-col justify-center items-end gap-4 md:gap-20 relative">
            <TabButtonProductJudge
              value='ProductJudge1'
              heading='Assess Fights with the MMAPP Methodology'
              smallHeading='Assess'
              leftOrRight='left'
              isPending={isPending}
              activeTab={activeTabProductJudge}
              onClick={() => selectTabProductJudge('ProductJudge1')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-scoreboard">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                <path d="M12 5v2" />
                <path d="M12 10v1" />
                <path d="M12 14v1" />
                <path d="M12 18v1" />
                <path d="M7 3v2" />
                <path d="M17 3v2" />
                <path d="M15 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0z" />
                <path d="M6 9h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5" />
              </svg>
            </TabButtonProductJudge>
            <TabButtonProductJudge
              value='ProductJudge2'
              heading='Submit Scores Instantly'
              smallHeading='Submit'
              leftOrRight='left'
              isPending={isPending}
              activeTab={activeTabProductJudge}
              onClick={() => selectTabProductJudge('ProductJudge2')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-upload">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <path d="M12 11v6" />
                <path d="M9.5 13.5l2.5 -2.5l2.5 2.5" />
              </svg>
            </TabButtonProductJudge>
            <TabButtonProductJudge
              value='ProductJudge3'
              heading='Personalised Fight Card'
              smallHeading='Fight Card'
              leftOrRight='left'
              isPending={isPending}
              activeTab={activeTabProductJudge}
              onClick={() => selectTabProductJudge('ProductJudge3')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-id-badge-2">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 12h3v4h-3z" />
                <path d="M10 6h-6a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1h-6" />
                <path d="M10 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                <path d="M14 16h2" />
                <path d="M14 12h4" />
              </svg>
            </TabButtonProductJudge>
          </div>

          {/* // Use the loading state to conditionally render the image */}
          <div className={clsx("hidden portrait:md:flex landscape:flex items-center justify-center min-w-auto landscape:max-w-[25vw] portrait:max-w-[25vw] portrait:touch:md:max-w-max touch:max-w-[120vw] max-h-[100%] z-10")}>
            <img
              className="object-scale-down portrait:touch:max-h-[65vh] portrait:touch:md:max-h-max landscape:rounded-[5.25rem] landscape:xl:rounded-[6rem] landscape:3xl:rounded-[7rem] portrait:rounded-[4.5rem] portrait:md:rounded-[5.5vw] portrait:lg:rounded-[6.5rem] shadow-2xl shadow-fuchsia-950/50 ring-2 ring-purple-950/75"
              src={(preloadedImages as any)[activeTabProductJudge]?.src}
              alt="iPhone Judge images"
              onLoad={() => setIsLoading(false)}
            />
            {/* {isLoading && <div className="loading-overlay">Loading...</div>} // Disabled because it causes visual glitches that are unecessary given the small payload */}
          </div>

          <div className="w-full flex flex-row md:flex-col justify-center items-start gap-4 md:gap-20 relative">
            <TabButtonProductJudge
              value='ProductJudge4'
              heading='Practice at Home'
              smallHeading='Practice'
              leftOrRight='right'
              isPending={isPending}
              activeTab={activeTabProductJudge}
              onClick={() => selectTabProductJudge('ProductJudge4')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-barbell">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M2 12h1" />
                <path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" />
                <path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" />
                <path d="M9 12h6" />
                <path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" />
                <path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" />
                <path d="M22 12h-1" />
              </svg>
            </TabButtonProductJudge>
            <TabButtonProductJudge
              value='ProductJudge5'
              heading='Share your results with your colleagues'
              smallHeading='Share'
              leftOrRight='right'
              isPending={isPending}
              activeTab={activeTabProductJudge}
              onClick={() => selectTabProductJudge('ProductJudge5')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-table-share">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8" />
                <path d="M3 10h18" />
                <path d="M10 3v18" />
                <path d="M16 22l5 -5" />
                <path d="M21 21.5v-4.5h-4.5" />
              </svg>
            </TabButtonProductJudge>
            <TabButtonProductJudge
              value='ProductJudge6'
              heading='Personal Lifetime Archive'
              smallHeading='Archive'
              leftOrRight='right'
              isPending={isPending}
              activeTab={activeTabProductJudge}
              onClick={() => selectTabProductJudge('ProductJudge6')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-archive">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                <path d="M10 12l4 0" />
              </svg>
            </TabButtonProductJudge>
          </div>

        </div>
        {/* Titles for small mobile devices */}
        <div className="landscape:hidden portrait:flex portrait:md:hidden w-full justify-center items-center relative py-10">
          <h4 className={clsx("text-center text-transparent bg-clip-text bg-gradient-to-b from-[var(--purple-350)] to-purple-100",
          "two-lines-always")}>
            {descriptionSrcMapJudge[activeTabProductJudge]}
          </h4>
        </div>
        {/* // Use the loading state to conditionally render the image in small mobile device*/}
        <div className={clsx("flex portrait:md:hidden landscape:hidden items-center justify-center min-w-auto landscape:max-w-[25vw] portrait:max-w-[120vw] max-h-[110vh] z-10")}>
          <img
            className="object-scale-down max-h-[65vh] rounded-[4.5rem] shadow-2xl shadow-neutral-50/10 ring-4 ring-fuchsia-950/50"
            src={(preloadedImages as any)[activeTabProductJudge]?.src}
            alt="iphone-12"
            onLoad={() => setIsLoading(false)}
          />
          {/* {isLoading && <div className="loading-overlay">Loading...</div>} // Disabled because it causes visual glitches that are unecessary given the small payload */}
        </div>

      </section>

      <section id="RecordKeeper" className="flex flex-col py-0 md:py-0 lg:py-0 pt-0 justify-center">
        <ProductFC className="px-12 md:px-[7.65vw] pt-12 md:pt-[12vw] pb-12 md:pb-[6.5vw]">
          <ProductFCTitle className="justify-end text-right max-w-[30rem] md:max-w-[100%]">
            RecordKeeper
          </ProductFCTitle>
          <ProductFCHeading className="justify-end text-right pl-[0%] md:pl-[15vw]">
            Designed for officials performing Scorekeeping and Timekeeping duties
          </ProductFCHeading>
          <ProductFCDescription className="justify-end text-right pl-[0vw] md:pl-[15vw]">
            The “RecordKeeper” is our tool designed for officials performing Scorekeeping and Timekeeping duties.<br/><br/>
            Because it is capable of automating most of the responsibilities, we are able to combine the roles of Scorekeeper and Timekeeper into one, called the RecordKeeper.<br/><br/>
            Outperforming the roles when done individually, the RecordKeeper connects to the Judges, receives and calculates their score, and has outstanding timing capabilities, timing simultaneously Round Time, Breaks and In-between rounds, as well as important event logging, such as Reasons for Point deductions or Break duration.<br/><br/>
            At the end of fights, it provides a clear display of the winner for easy visualization, for quick dispatch to the speaker. Once completed, every detail is instantly delivered to the Federation dashboard.
          </ProductFCDescription>
        </ProductFC>

          {/* <div className={clsx(
            "flex flex-col relative justify-center",
            "h-full mx-1 md:mx-[5.6vw]",
            "px-12 md:px-[7.65vw] pt-12 md:pt-[12vw] pb-12 md:pb-[6.5vw]",
            "rounded-[3rem] bg-no-repeat ",
          )}>
            <h5 className="flex flex-col justify-end text-right z-20 max-w-[30rem] md:max-w-[100%] text-md md:text-[2.175vw] mb-12 md:mb-[3.5vw] text-neutral-200 deboss">
              RecordKeeper
            </h5>
            <h3 className={clsx(
              "flex flex-col justify-end text-right z-20 pl-[0%] md:pl-[15vw] mb-12 md:mb-[3.5vw]",
              "text-xl md:text-[4.35vw] text-transparent bg-clip-text py-2 bg-gradient-to-bl from-[var(--purple-250)] to-purple-100")}>
              Designed for officials performing Scorekeeping and Timekeeping duties
            </h3>
            <h6 className="flex flex-col justify-end z-20 pl-[0vw] md:pl-[15vw] text-[1.5rem] md:text-[1.33vw] text-right font-medium leading-[2.1rem] md:leading-[1.75vw]">
              The “RecordKeeper” is our tool designed for officials performing Scorekeeping and Timekeeping duties.<br/><br/>
              Because it is capable of automating most of the responsibilities, we are able to combine the roles of Scorekeeper and Timekeeper into one, called the RecordKeeper.<br/><br/>
              Outperforming the roles when done individually, the RecordKeeper connects to the Judges, receives and calculates their score, and has outstanding timing capabilities, timing simultaneously Round Time, Breaks and In-between rounds, as well as important event logging, such as Reasons for Point deductions or Break duration.<br/><br/>
              At the end of fights, it provides a clear display of the winner for easy visualization, for quick dispatch to the speaker. Once completed, every detail is instantly delivered to the Federation dashboard.
            </h6>
          </div> */}

          {/* RecordKeeper Titles */}
          <div className="flex w-full justify-center items-center relative pb-6 md:pb-[1vw] md:pt-[5.6vw] px-[20vw]">
            <h4 className={clsx("text-lg md:text-[2.25vw] text-center text-transparent bg-clip-text bg-gradient-to-b from-[var(--purple-400)] to-purple-100",
            "twoLinesAlwaysProductRecordKeeper")}>
              {descriptionSrcMapRecordKeeper[activeTabProductRecordKeeper]}
            </h4>
          </div>

          <div className={clsx(
            "w-full flex lanscape:flex-row portrait:flex-col gap-4 md:gap-0 relative",
            "min-w-auto max-w-[100%] md:max-w-[90%] h-full max-h-[100vh] mx-1 md:mx-[5.6vw]",
            "px-12 md:px-[6.25vw]",
            )}
          >

            {/* // Use the loading state to conditionally render the image */}
            <div className={clsx(
              "basis-[67.5%] flex landscape:items-left portrait:items-center justify-center relative z-10",
              "min-w-auto max-w-[100%] md:max-w-[90%] h-full max-h-[100%]",
              "px-12 md:px-[0vw] pb-12 md:pb-0",
              )}
            >
              <img
                className="object-scale-down portrait:touch:max-h-[65vh] portrait:touch:md:max-h-max rounded-[2.5vw] shadow-2xl shadow-fuchsia-950/50 ring-2 ring-purple-950/75"
                src={(preloadedImages as any)[activeTabProductRecordKeeper]?.src}
                alt="iPad RecordKeeper images"
                onLoad={() => setIsLoading(false)}
              />
              {/* {isLoading && <div className="loading-overlay">Loading...</div>} // Disabled because it causes visual glitches that are unecessary given the small payload */}
            </div>

            <div className="basis-[32.5%] w-full min-w-[20vw] flex landscape:flex-col portrait:flex-row justify-center items-start gap-4 md:gap-[3vw] relative">
              <TabButtonProductRecordKeeper
                value='ProductRecordKeeper1'
                heading='Master Timing'
                smallHeading='Timing'
                isPending={isPending}
                activeTab={activeTabProductRecordKeeper}
                onClick={() => selectTabProductRecordKeeper('ProductRecordKeeper1')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-scoreboard">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                  <path d="M12 5v2" />
                  <path d="M12 10v1" />
                  <path d="M12 14v1" />
                  <path d="M12 18v1" />
                  <path d="M7 3v2" />
                  <path d="M17 3v2" />
                  <path d="M15 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0z" />
                  <path d="M6 9h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5" />
                </svg>
              </TabButtonProductRecordKeeper>
              <TabButtonProductRecordKeeper
                value='ProductRecordKeeper2'
                heading='Record every detail'
                smallHeading='Record'
                isPending={isPending}
                activeTab={activeTabProductRecordKeeper}
                onClick={() => selectTabProductRecordKeeper('ProductRecordKeeper2')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-upload">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                  <path d="M12 11v6" />
                  <path d="M9.5 13.5l2.5 -2.5l2.5 2.5" />
                </svg>
              </TabButtonProductRecordKeeper>
              <TabButtonProductRecordKeeper
                value='ProductRecordKeeper3'
                heading='Receive & Calculate scorecards'
                smallHeading='Scorecards'
                isPending={isPending}
                activeTab={activeTabProductRecordKeeper}
                onClick={() => selectTabProductRecordKeeper('ProductRecordKeeper3')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-id-badge-2">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 12h3v4h-3z" />
                  <path d="M10 6h-6a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1h-6" />
                  <path d="M10 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                  <path d="M14 16h2" />
                  <path d="M14 12h4" />
                </svg>
              </TabButtonProductRecordKeeper>
              <TabButtonProductRecordKeeper
                value='ProductRecordKeeper4'
                heading='Send Results'
                smallHeading='Results'
                isPending={isPending}
                activeTab={activeTabProductRecordKeeper}
                onClick={() => selectTabProductRecordKeeper('ProductRecordKeeper4')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-id-badge-2">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 12h3v4h-3z" />
                  <path d="M10 6h-6a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1h-6" />
                  <path d="M10 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                  <path d="M14 16h2" />
                  <path d="M14 12h4" />
                </svg>
              </TabButtonProductRecordKeeper>
            </div>

          </div>

        </section>

        <section id="Dashboard" className="flex flex-col py-0 md:py-0 lg:py-0 pt-0 justify-center">
          <ProductFC className="px-12 md:px-[7.65vw] pt-12 md:pt-[13.625vw] pb-12 md:pb-[13.75vw]">
            <ProductFCTitle className="justify-start text-left max-w-[30rem] md:max-w-[100%]">
              Dashboard
            </ProductFCTitle>
            <ProductFCHeading className="justify-start text-left pr-[0%] md:pr-[15vw]">
              Enables Federations to easily manage all affairs
            </ProductFCHeading>
            <ProductFCDescription className="justify-start pr-[0vw] md:pr-[19vw] text-left">
              The Dashboard is the component Federations interact with the most.<br/><br/>
              Here they will be able to visualize and manage every aspect of the sport.<br/>
              The dashboard provides an intuitive interface that allows Federations to easily manage various topics, while offering easy-to-digest reports and analysis on the various affairs of the Federation, such as fights statistics and trends from a regulatory perspective, as well as insights into members.
            </ProductFCDescription>
          </ProductFC>
          {/* <div className={clsx(
            "flex flex-col relative justify-center",
            "h-full mx-1 md:mx-[5.6vw]",
            "px-12 md:px-[7.65vw] pt-12 md:pt-[13.625vw] pb-12 md:pb-[13.75vw]",
            "rounded-[3rem] bg-no-repeat ",
            )}
          >
            <h5 className="flex flex-col justify-start text-left z-20 max-w-[30rem] md:max-w-[100%] text-md md:text-[2.175vw] mb-12 md:mb-[3.5vw] text-neutral-200 deboss">
              Dashboard
            </h5>
            <h3 className={clsx(
              "flex flex-col justify-start text-left z-20 pr-[0%] md:pr-[15vw] mb-12 md:mb-[3.5vw]",
              "text-xl md:text-[4.35vw] text-transparent bg-clip-text py-2 bg-gradient-to-bl from-[var(--purple-250)] to-purple-100")}>
              Enables Federations to easily manage all affairs
            </h3>
            <h6 className="flex flex-col justify-start z-20 pr-[0vw] md:pr-[19vw] text-[1.5rem] md:text-[1.33vw] text-left font-medium leading-[2.1rem] md:leading-[1.75vw]">
              The Dashboard is the component Federations interact with the most.<br/><br/>
              Here they will be able to visualize and manage every aspect of the sport.<br/>
              The dashboard provides an intuitive interface that allows Federations to easily manage various topics, while offering easy-to-digest reports and analysis on the various affairs of the Federation, such as fights statistics and trends from a regulatory perspective, as well as insights into members.
            </h6>
          </div> */}

          <div className={clsx(
            "flex flex-col items-center justify-start relative z-10",
            "min-w-auto max-w-[100%] md:max-w-[95%] h-full max-h-[100%] mx-1 md:mx-[5.6vw]",
            "px-12 md:px-[12vw] pb-12",
            )}
          >
            <img
              className="object-scale-down portrait:touch:max-h-[65vh] portrait:touch:md:max-h-max"
              src="/images/hardware/proDisplay.webp"
              alt="Pro Display image"
              onLoad={() => setIsLoading(false)}
            />
            <img
              className="object-scale-down portrait:touch:max-h-[65vh] portrait:touch:md:max-h-max px-12 md:px-[8vw] pt-12 md:pt-[0.5vw]"
              src="/images/hardware/magicKeyboardMouse.webp"
              alt="Pro Display image"
              onLoad={() => setIsLoading(false)}
            />
            {/* {isLoading && <div className="loading-overlay">Loading...</div>} // Disabled because it causes visual glitches that are unecessary given the small payload */}

            {/* Dashboard Video */}
            <div className="flex absolute w-full justify-center items-end md:pt-[0vw] px-[13.1vw]">
              {/* <video
                className="object-scale-down portrait:touch:max-h-[65vh] portrait:touch:md:max-h-max"
                src="/videos/product/mmappdemo5spedup.webm"
                autoPlay
                loop
              /> */}
              <img
                className="object-contain w-full portrait:touch:max-h-[65vh] portrait:touch:md:max-h-max px-0 md:px-[0vw] pt-12 md:pt-[1vw]"
                src="/videos/product/Sharingofadashboard.webp"
                alt="Animated WebP"
                onLoad={() => setIsLoading(false)}
              />
            </div>
            <div className="flex absolute w-full justify-center items-end md:pt-[38.5vw] px-[14vw]">
              <h4 className={clsx("text-lg md:text-[1.9vw] leading-[2.5vw] tracking-normal text-center text-shadow-sm text-shadow-blur-3 text-shadow-[var(--background-grey)]")}>
                {descriptionSrcMapRecordKeeper[activeTabProductRecordKeeper]}
              </h4>
              <h4 className={clsx("text-lg md:text-[1.9vw] leading-[2.5vw] tracking-normal md:pt-[33vw] px-[14vw] absolute text-center text-transparent bg-clip-text bg-gradient-to-b from-[var(--purple-600)] to-purple-100")}>
                {descriptionSrcMapRecordKeeper[activeTabProductRecordKeeper]}
              </h4>
            </div>
          </div>
        </section>

        <section id="Dashboard-Members" className="flex flex-col py-0 md:py-0 lg:py-0 pt-0 mb-12 md:mb-[10vw] justify-center">
          <ProductFC className="px-12 md:px-[7.65vw] pt-12 md:pt-[12vw] pb-12 md:pb-[14vw]">
            <ProductFCTitle className="justify-end text-right max-w-[30rem] md:max-w-[100%]">
              Dashboard (Members)
            </ProductFCTitle>
            <ProductFCHeading className="justify-end text-right pl-[0%] md:pl-[15vw]">
              A platform to seemlessly interact with your Federation
            </ProductFCHeading>
            <ProductFCDescription className="justify-end text-right pl-[0vw] md:pl-[15vw]">
              The Dashboard for Federation Members offers Athletes, Coaches, Clubs, Promoters a simple platform to interact with your Federations.<br/><br/>
              Whether you’re registering for the first time, or managing your membership and submitted documents.<br/>
              You can also confirm your eligibility for participation in sanctioned events, or submit applications for hosting events, in the case of Promoters.<br/>
              Additionally, members can view events they’re scheduled to participate in or host, as well as view a history of their career.
            </ProductFCDescription>
          </ProductFC>
            {/* <div className={clsx(
              "flex flex-col relative justify-center",
              "h-full mx-1 md:mx-[5.6vw]",
              "px-12 md:px-[7.65vw] pt-12 md:pt-[12vw] pb-12 md:pb-[14vw]",
              "rounded-[3rem] bg-no-repeat ",
            )}>
              <h5 className="flex flex-col justify-end text-right z-20 max-w-[30rem] md:max-w-[100%] text-md md:text-[2.175vw] mb-12 md:mb-[3.5vw] text-neutral-200 deboss">
                Dashboard (Members)
              </h5>
              <h3 className={clsx(
                "flex flex-col justify-end text-right z-20 pl-[0%] md:pl-[15vw] mb-12 md:mb-[3.5vw]",
                "text-xl md:text-[4.35vw] text-transparent bg-clip-text py-2 bg-gradient-to-bl from-[var(--purple-250)] to-purple-100")}>
                A platform to seemlessly interact with your Federation
              </h3>
              <h6 className="flex flex-col justify-end z-20 pl-[0vw] md:pl-[25vw] text-[1.5rem] md:text-[1.33vw] text-right font-medium leading-[2.1rem] md:leading-[1.75vw]">
                The Dashboard for Federation Members offers Athletes, Coaches, Clubs, Promoters a simple platform to interact with your Federations.<br/><br/>
                Whether you’re registering for the first time, or managing your membership and submitted documents.<br/>
                You can also confirm your eligibility for participation in sanctioned events, or submit applications for hosting events, in the case of Promoters.<br/>
                Additionally, members can view events they’re scheduled to participate in or host, as well as view a history of their career.

              </h6>
            </div> */}

            <div className={clsx(
              "w-full flex lanscape:flex-row portrait:flex-col gap-4 md:gap-0 relative",
              "min-w-auto max-w-[100%] md:max-w-[90%] h-full max-h-[100vh] mx-1 md:mx-[5.6vw]",
              "px-12 md:px-[0vw]",
              )}
            >
              <div className={clsx(
                "basis-[67.5%] flex landscape:items-left portrait:items-center justify-center relative z-10",
                "min-w-auto max-w-[100%] md:max-w-[90%] h-full max-h-[100%]",
                "px-12 md:px-[0vw] pb-12 md:pb-0",
                )}
              >
                <img
                  className="object-scale-down portrait:touch:max-h-[65vh] portrait:touch:md:max-h-max"
                  src="/images/hardware/macBookPro.webp"
                  alt="Pro Display image"
                  onLoad={() => setIsLoading(false)}
                />
                {/* {isLoading && <div className="loading-overlay">Loading...</div>} // Disabled because it causes visual glitches that are unecessary given the small payload */}

                {/* Dashboard (Members) Video */}
                <div className="flex absolute w-full justify-center items-end md:pt-[3.5vw] px-[6vw]">
                  {/* <video
                    className="object-scale-down portrait:touch:max-h-[65vh] portrait:touch:md:max-h-max"
                    src="/videos/product/mmappdemo5spedup.webm"
                    autoPlay
                    loop
                  /> */}
                  <img
                    className="object-cover w-full h-[150%] portrait:touch:max-h-[65vh] portrait:touch:md:max-h-max px-0 md:px-[0vw] pt-12 md:pt-[0vw]"
                    src="/videos/product/Sharingofadashboard.webp"
                    alt="Animated WebP"
                    onLoad={() => setIsLoading(false)}
                  />
                </div>
              </div>

              {/* RecordKeeper Titles */}
              <div className="basis-[32.5%] w-full min-w-[20vw] flex landscape:flex-col portrait:flex-row justify-center items-left gap-4 md:gap-[2vw] relative">
                <h4 className={clsx("text-lg md:text-[1.25vw] leading-[2vw] tracking-normal px-[2vw] text-left text-transparent bg-clip-text bg-gradient-to-r from-[var(--purple-300)] to-purple-100")}>
                (ALL) Quick sign-up process
                </h4>
                <h4 className={clsx("text-lg md:text-[1.25vw] leading-[2vw] tracking-normal px-[2vw] text-left text-transparent bg-clip-text bg-gradient-to-r from-[var(--purple-300)] to-purple-100")}>
                (ALL) Intuitive Profile Management
                </h4>
                <h4 className={clsx("text-lg md:text-[1.25vw] leading-[2vw] tracking-normal px-[2vw] text-left text-transparent bg-clip-text bg-gradient-to-r from-[var(--purple-300)] to-purple-100")}>
                (Clubs/Coaches) Multi-user management (Clubs/Coaches can manage multiple athlete profiles)
                </h4>
                <h4 className={clsx("text-lg md:text-[1.25vw] leading-[2vw] tracking-normal px-[2vw] text-left text-transparent bg-clip-text bg-gradient-to-r from-[var(--purple-300)] to-purple-100")}>
                (ALL) View Membership standing (Documents in order, information updated, etc.)
                </h4>
                <h4 className={clsx("text-lg md:text-[1.25vw] leading-[2vw] tracking-normal px-[2vw] text-left text-transparent bg-clip-text bg-gradient-to-r from-[var(--purple-300)] to-purple-100")}>
                (ALL) Receive reminders for document expiration
                </h4>
                <h4 className={clsx("text-lg md:text-[1.25vw] leading-[2vw] tracking-normal px-[2vw] text-left text-transparent bg-clip-text bg-gradient-to-r from-[var(--purple-300)] to-purple-100")}>
                (Athletes/Coaches)View Eligilibillity status
                </h4>
              </div>
            </div>
        </section>


      {/* <section id="Benefits" className='z-20 benefits'>
        <div className="flex flex-col justify-center items-center mb-4 md:mb-8 lg:mb-12">
          <h5 className="mb-4 md:mb-8 lg:mb-12 text-neutral-200 text-center deboss">
            Benefits for everyone else
          </h5>
          <h2 id="featuresJudgeTitle" className="text-transparent text-center pb-12 bg-clip-text bg-gradient-to-tr from-[var(--purple-250)] to-purple-100 w-[95%] md:w-[85%]">
          Athletes, Coaches, Clubs and Promoters also benefit from using MMAPP
          </h2>
          <p className=" text-center w-[95%] md:w-[60%] pb-10">
            Choose your category below to find out how you stand to gain
          </p>
        </div>
        <Benefits />
      </section> */}


      <div className="borderBottom"></div>


      <section id="ContactUs" className="mx-1 md:mx-[4.5vw] py-32 md:py-40 lg:py-52">
        <h5 className="mb-4 md:mb-8 lg:mb-12 text-neutral-200 text-center deboss">
          Contact Us
        </h5>
        <ContactUs id={ContactUs} className=""/>
      </section>
  </>
)};

export default Product;
