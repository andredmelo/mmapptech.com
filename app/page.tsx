'use client'
import * as ReactDOMServer from "react-dom/server";
import React, { useContext, useState, useEffect, lazy, Suspense, useRef } from 'react';
import { clsx } from "clsx";
/* import Image from "next/image";
import styles from "./page.module.css"; */
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import ContactUs from '@/app/contact/contact-us'
import Benefits from '@/app/home/benefits'
import FAQ from '@/app/contact/faq'
//import { HeroBGSVG, HeroBGSVG180 } from '@/components/ui/svg/heroBGSVG';
import { FeaturesDashboardCard } from '@/components/ui/featuresDashboardCard'
import { FeaturesJudgeCard } from '@/components/ui/featuresJudgeCard'
import { FeaturesRecordKeeperCard } from '@/components/ui/featuresRecordKeeperCard'
//import ProDisplayShadowSVG from "@/components/ui/svg/proDisplayShadowSVG";

import(/* webpackPreload: true */ '@/components/three.js');
import { HomeIntroR3F } from '@/components/three.js';
const HomeFeaturesR3F = lazy(() => import('@/components/three.js').then(module => ({ default: module.HomeFeaturesR3F })));
import { TestR3F } from '@/components/three.js';

import { MacBookProTextureContext, IPhoneTextureContext, IPadTextureContext, MacBookProOpacityContext, IPhoneOpacityContext, IPadOpacityContext } from '@/lib/contexts/R3FContext';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { setiPhoneTextureName } = useContext(IPhoneTextureContext);
  const { setiPhoneOpacity } = useContext(IPhoneOpacityContext);
  const { setiPadTextureName } = useContext(IPadTextureContext);
  const { setiPadOpacity } = useContext(IPadOpacityContext);
  const { setMacBookProOpacity } = useContext(MacBookProOpacityContext);
  const { setMacBookProTextureName } = useContext(MacBookProTextureContext);


  // IntersectionObserver for HomeFeaturesR3F
  const [showHomeFeaturesR3F, setShowHomeFeaturesR3F] = useState(false);
  const homeFeaturesR3FobserverRef = useRef(null);
  useEffect(() => {
    const homeFeaturesR3Fobserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowHomeFeaturesR3F(true);
          homeFeaturesR3Fobserver.disconnect();
        }
      },
      {
        rootMargin: '200px',
      }
    );
    if (homeFeaturesR3FobserverRef.current) {
      homeFeaturesR3Fobserver.observe(homeFeaturesR3FobserverRef.current);
    }
    return () => homeFeaturesR3Fobserver.disconnect();
  }, []);

  // ScrollTrigger for homeFeaturesR3FViewer upon IntersectionObserver
  const [isHomeFeaturesR3FLoaded, setIsHomeFeaturesR3FLoaded] = useState(false);
  const [endPosition, setEndPosition] = useState(0); // State variable to store the elusive end position
  const hasLoadedOnceRef = useRef(false); // Ref to track if the function has been called
  const createScrollTriggerWhenHomeFeaturesR3FLoaded = () => {
    if (!hasLoadedOnceRef.current) { // Check if the function hasn't been called yet
      setIsHomeFeaturesR3FLoaded(true);

      ScrollTrigger.create({
        trigger: "#featuresDashboard",
        start: "top top",
        end: endPosition,
        pin: ".homeFeaturesR3FViewer",
        markers: false,
      });
      /* ScrollTrigger.create({
        trigger: "#featuresDashboard",
        start: "top 95%",
        onEnter: () => {
          console.log("onEnter createScrollTriggerWhenHomeFeaturesR3FLoaded");
          setMacBookProOpacity(1);
        }
      }); */
      ScrollTrigger.refresh();

      hasLoadedOnceRef.current = true; // Mark as called
      console.log("Home Features R3F is loaded and its ScrollTrigger is set");
    }
  };

  /* const svgString = encodeURIComponent(
    ReactDOMServer.renderToStaticMarkup(<HeroBGSVG />)
  );
  const svgString180 = encodeURIComponent(
    ReactDOMServer.renderToStaticMarkup(<HeroBGSVG180 />)
  ); */

  /* ===== GSAP React ===== */
  useGSAP(
    () => {
      let matchMedia = gsap.matchMedia();

      const smallMissionImg = document.querySelector(".smallMissionImg");
      if (smallMissionImg) {
        const smallMissionImgHeight = (smallMissionImg as HTMLElement).offsetHeight;
        const halfViewportHeight = window.innerHeight / 2;
        const endSmallMissionImgTrigger = halfViewportHeight + smallMissionImgHeight / 2;
        console.log("endSmallMissionImgTrigger is "+endSmallMissionImgTrigger);
        
        //Custom endTrigger
        matchMedia.add("(min-width: 768px)", (context) => {
          ScrollTrigger.create({
            trigger: smallMissionImg,
            start: "center 50%",
            endTrigger: ".smallMissionDescriptionContainer",
            end: "bottom "+endSmallMissionImgTrigger+"px",
            pin: ".smallMissionImg",
            pinSpacing: false,
            invalidateOnRefresh: true,
          });
        });
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
      window.addEventListener('resize', () => {ScrollTrigger.refresh();/* console.log("Refreshed ScrollTrigger"); */});
      
      //To detect if a viewport is ultra-wide 1.9265 = 920px height
      function isViewportRatioLessThan192() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const ratio = width / height;
        return ratio < 1.9265;
      }

      //Dashboard Animations
      const checkDashboardAnimIn = setInterval(() => {
        if (document.querySelector('.dashboardCard') && document.getElementById('featuresDashboardTitle')) {
              clearInterval(checkDashboardAnimIn);
              //console.log("Dashboard animations are ready");
          let dashboardCards: HTMLElement[] = gsap.utils.toArray(".dashboardCard");
          let dashboardTitle = document.getElementById('featuresDashboardTitle');
          let dashboardContainer = document.getElementById('featuresDashboardContainer');

          let fJHI: HTMLElement[] = gsap.utils.toArray(".featuresDashboardHeaderItem");

          fJHI.forEach((fJHI) => { gsap.set(fJHI, {opacity: 0}); });
          gsap.set(fJHI[0], {opacity: 1, filter:"brightness(100%)"});

          let bottomDistance = dashboardCards[dashboardCards.length-1].offsetHeight; // extra distance to have things stick after the last card pins (pixels). Careful as not having any could cover up the content bellow

          let lastDashboardCardST = ScrollTrigger.create({
            trigger: dashboardCards[dashboardCards.length-1] as HTMLElement,
            start: "center 50%",
            markers:false,
          });

          // Pin Dashboard Title
          /* if (isViewportRatioLessThan192()) {
            ScrollTrigger.create({
              trigger: dashboardTitle,
              start: "top 7%",
              end: () => lastDashboardCardST.start + bottomDistance,
              pin: dashboardTitle,
              pinSpacing: false,
              invalidateOnRefresh: true,
            });
          } */

          dashboardCards.forEach((card, i) => {
            switch (i) {
              case 0: // case to pin both card[0] and header
                ScrollTrigger.create({
                  trigger: card,
                  start: "center 50%",
                  end: () => lastDashboardCardST.start + bottomDistance,
                  pin: card,
                  pinSpacing: false,
                  invalidateOnRefresh: true,
                  onLeaveBack: ({}) => {
                    setMacBookProTextureName('macBookPro_texture_'+(i+1));
                  }
                });
                /* ScrollTrigger.create({
                  trigger: card,
                  start: "center 50%",
                  end: () => lastDashboardCardST.start + bottomDistance,
                  pin: dashboardContainer,
                  pinSpacing: false,
                  invalidateOnRefresh: true,
                }); */
                /* if (isViewportRatioLessThan192()) { */
                  ScrollTrigger.create({
                    trigger: card,
                    start: "center 50%",
                    end: () => lastDashboardCardST.start + bottomDistance,
                    pin: dashboardTitle,
                    pinSpacing: false,
                    invalidateOnRefresh: true,
                  });
                /* } */
                break;
              case dashboardCards.length-1: // case to pinSpacing the last card
                ScrollTrigger.create({
                  trigger: card,
                  start: "center 50%",
                  end: () => lastDashboardCardST.start + bottomDistance,
                  pin: true,
                  pinSpacing: true,
                  invalidateOnRefresh: true,
                  onEnter: ({progress, direction, isActive}) => {
                    setMacBookProTextureName('macBookPro_texture_'+(i+1));
                    gsap.fromTo(fJHI[i-1], {opacity: 1, yPercent: 0}, {opacity: 0, yPercent: -200, duration: 0.2})
                    gsap.fromTo(fJHI[i], {opacity: 0, yPercent: -200}, {opacity: 1, yPercent: 0, duration: 0.2})
                  },
                  onLeaveBack: ({progress, direction, isActive}) => {
                    setMacBookProTextureName('macBookPro_texture_'+(i));
                    gsap.fromTo(fJHI[i-1], {opacity: 0, yPercent: -200}, {opacity: 1, yPercent: 0, duration: 0.2})
                    gsap.fromTo(fJHI[i], {opacity: 1, yPercent: 0}, {opacity: 0, yPercent: -200, duration: 0.2})
                  }
                });
                break;
              default: // default case
                ScrollTrigger.create({
                  trigger: card,
                  start: "center 50%",
                  end: () => lastDashboardCardST.start + bottomDistance,
                  pin: true,
                  pinSpacing: false,
                  onEnter: ({progress, direction, isActive}) => {
                    setMacBookProTextureName('macBookPro_texture_'+(i+1));
                    gsap.fromTo(fJHI[i-1], {opacity: 1, yPercent: 0}, {opacity: 0, yPercent: -200, duration: 0.2})
                    gsap.fromTo(fJHI[i], {opacity: 0, yPercent: -200}, {opacity: 1, yPercent: 0, duration: 0.2})
                  },
                  onLeaveBack: ({progress, direction, isActive}) => {
                    setMacBookProTextureName('macBookPro_texture_'+(i));
                    gsap.fromTo(fJHI[i-1], {opacity: 0, yPercent: -200}, {opacity: 1, yPercent: 0, duration: 0.2})
                    gsap.fromTo(fJHI[i], {opacity: 1, yPercent: 0}, {opacity: 0, yPercent: -200, duration: 0.2})
                  }
                });
            }   //"center "+(vhToPixels(55)+(vhToPixels(1)*i))
            //setiPhoneOpacity(1);
            //setiPadOpacity(0);
          });

        }
      }, 50); // Check every 50ms

      // macBookProiPhoneSwitch Animation
      ScrollTrigger.create({
        trigger: '.featuresDashboard',
        start: 'bottom 50%',
        //end: 'bottom 75%',
        markers: false,
        scrub: false,
        onEnter: ({progress, direction, isActive}) => {
          setMacBookProOpacity(0);
          setiPhoneOpacity(1);
        },
        onLeaveBack: ({progress, direction, isActive}) => {
          setMacBookProOpacity(1);
          setiPhoneOpacity(0);
        },
      });

      //Judge Animations
      const checkJudgeAnimIn = setInterval(() => {
        if (document.querySelector('.judgeCard') && document.getElementById('featuresJudgeTitle')) {
              clearInterval(checkJudgeAnimIn);
              //console.log("Judge animations are ready");
          let judgeCards: HTMLElement[] = gsap.utils.toArray(".judgeCard");
          let judgeTitle = document.getElementById('featuresJudgeTitle');

          let fJHI: HTMLElement[] = gsap.utils.toArray(".featuresJudgeHeaderItem");

          fJHI.forEach((fJHI) => { gsap.set(fJHI, {opacity: 0}); });
          gsap.set(fJHI[0], {opacity: 1, filter:"brightness(100%)"});

          let bottomDistance = judgeCards[judgeCards.length-1].offsetHeight; // extra distance to have things stick after the last card pins (pixels). Careful as not having any could cover up the content bellow

          let lastJudgeCardST = ScrollTrigger.create({
            trigger: judgeCards[judgeCards.length-1] as HTMLElement,
            start: "center 50%",
            markers:false,
          });

          // Pin Judge Title
          if (isViewportRatioLessThan192()) {
            ScrollTrigger.create({
              trigger: judgeTitle,
              start: "top 7%",
              end: () => lastJudgeCardST.start + bottomDistance,
              pin: judgeTitle,
              pinSpacing: false,
              invalidateOnRefresh: true,
            });
          }

          judgeCards.forEach((card, i) => {
            switch (i) {
              case 0: // case to pin both card[0] and header
                ScrollTrigger.create({
                  trigger: card,
                  start: "center 50%",
                  end: () => lastJudgeCardST.start + bottomDistance,
                  pin: card,
                  pinSpacing: false,
                  invalidateOnRefresh: true,
                  onLeaveBack: ({}) => {
                    setiPhoneTextureName('iPhone_texture_'+(i+1));
                  }
                });
                /* ScrollTrigger.create({
                  trigger: card,
                  start: "center 60%",
                  end: () => lastJudgeCardST.start + bottomDistance,
                  pin: header,
                  pinSpacing: false,
                  invalidateOnRefresh: true,
                }); */
                /* if (isViewportRatioLessThan192()) {
                  ScrollTrigger.create({
                    trigger: card,
                    start: "center 50%",
                    end: () => lastJudgeCardST.start + bottomDistance,
                    pin: judgeTitle,
                    pinSpacing: false,
                    invalidateOnRefresh: true,
                  });
                } */
                break;
              case judgeCards.length-1: // case to pinSpacing the last card
                ScrollTrigger.create({
                  trigger: card,
                  start: "center 50%",
                  end: () => lastJudgeCardST.start + bottomDistance,
                  pin: true,
                  pinSpacing: true,
                  invalidateOnRefresh: true,
                  onEnter: ({progress, direction, isActive}) => {
                    //changeJudgeH4.play();
                    setiPhoneTextureName('iPhone_texture_'+(i+1));
                    gsap.fromTo(fJHI[i-1], {opacity: 1, yPercent: 0}, {opacity: 0, yPercent: -200, duration: 0.2})
                    gsap.fromTo(fJHI[i], {opacity: 0, yPercent: -200}, {opacity: 1, yPercent: 0, duration: 0.2})
                  },
                  onLeaveBack: ({progress, direction, isActive}) => {
                    //changeJudgeH4.reverse();
                    setiPhoneTextureName('iPhone_texture_'+(i));
                    gsap.fromTo(fJHI[i-1], {opacity: 0, yPercent: -200}, {opacity: 1, yPercent: 0, duration: 0.2})
                    gsap.fromTo(fJHI[i], {opacity: 1, yPercent: 0}, {opacity: 0, yPercent: -200, duration: 0.2})
                  }
                });
                break;
              default: // default case
                ScrollTrigger.create({
                  trigger: card,
                  start: "center 50%",
                  end: () => lastJudgeCardST.start + bottomDistance,
                  pin: true,
                  pinSpacing: false,
                  onEnter: ({progress, direction, isActive}) => {
                    //changeJudgeH4.play(); // REVIEW THIS SOLUTION AS IT CAN FAIL WHEN SCROLLING FAST
                    setiPhoneTextureName('iPhone_texture_'+(i+1));
                    gsap.fromTo(fJHI[i-1], {opacity: 1, yPercent: 0}, {opacity: 0, yPercent: -200, duration: 0.2})
                    gsap.fromTo(fJHI[i], {opacity: 0, yPercent: -200}, {opacity: 1, yPercent: 0, duration: 0.2})
                  },
                  onLeaveBack: ({progress, direction, isActive}) => {
                    //changeJudgeH4.reverse();
                    setiPhoneTextureName('iPhone_texture_'+(i));
                    gsap.fromTo(fJHI[i-1], {opacity: 0, yPercent: -200}, {opacity: 1, yPercent: 0, duration: 0.2})
                    gsap.fromTo(fJHI[i], {opacity: 1, yPercent: 0}, {opacity: 0, yPercent: -200, duration: 0.2})
                  }
                });
            }   //"center "+(vhToPixels(55)+(vhToPixels(1)*i))
            //setiPhoneOpacity(1);
            //setiPadOpacity(0);
          });

        }
      }, 50); // Check every 50ms

      // iPhoneiPadSwitch Animation
      ScrollTrigger.create({
        trigger: '.featuresJudge',
        start: 'bottom 50%',
        //end: 'bottom 75%',
        markers: false,
        scrub: false,
        onEnter: ({progress, direction, isActive}) => {
          setiPhoneOpacity(0);
          setiPadOpacity(1);
        },
        onLeaveBack: ({progress, direction, isActive}) => {
          setiPhoneOpacity(1);
          setiPadOpacity(0);
        },
      });


      //RecordKeeper Animations
      const checkRecordKeeperAnimIn = setInterval(() => {
        if (document.querySelector('.recordKeeperCard') && document.getElementById('featuresRecordKeeperTitle')) {
              clearInterval(checkRecordKeeperAnimIn);
              //console.log("RecordKeeper animations are ready");
          let recordKeeperCards: HTMLElement[] = gsap.utils.toArray(".recordKeeperCard");
          let recordKeeperTitle = document.getElementById('featuresRecordKeeperTitle');

          let fRKHI: HTMLElement[] = gsap.utils.toArray(".featuresRecordKeeperHeaderItem");

          fRKHI.forEach((fRKHI) => { gsap.set(fRKHI, {opacity: 0}); });
          gsap.set(fRKHI[0], {opacity: 1, filter:"brightness(100%)"});

          let bottomDistance = recordKeeperCards[recordKeeperCards.length-1].offsetHeight; // extra distance to have things stick after the last card pins (pixels). Careful as not having any could cover up the content bellow

          let lastRecordKeeperCardST = ScrollTrigger.create({
            trigger: recordKeeperCards[recordKeeperCards.length-1] as HTMLElement,
            start: "center 50%",
            markers:false,
          });

          // Pin RecordKeeper Title
          if (isViewportRatioLessThan192()) {
            ScrollTrigger.create({
              trigger: recordKeeperTitle,
              start: "top 7%",
              end: () => lastRecordKeeperCardST.start + bottomDistance,
              pin: recordKeeperTitle,
              pinSpacing: false,
              invalidateOnRefresh: true,
            });
          }

          recordKeeperCards.forEach((card, i) => {
            switch (i) {
              case 0: // case to pin both card[0] and header
                ScrollTrigger.create({
                  trigger: card,
                  start: "center 50%",
                  end: () => lastRecordKeeperCardST.start + bottomDistance,
                  pin: card,
                  pinSpacing: false,
                  invalidateOnRefresh: true,
                  onLeaveBack: ({}) => {
                    setiPhoneTextureName('iPhone_texture_'+(i+1));
                  }
                });
                /* ScrollTrigger.create({
                  trigger: card,
                  start: "center 60%",
                  end: () => lastRecordKeeperCardST.start + bottomDistance,
                  pin: header,
                  pinSpacing: false,
                  invalidateOnRefresh: true,
                }); */
                /* if (isViewportRatioLessThan192()) {
                  ScrollTrigger.create({
                    trigger: card,
                    start: "center 50%",
                    end: () => lastRecordKeeperCardST.start + bottomDistance,
                    pin: recordKeeperTitle,
                    pinSpacing: false,
                    invalidateOnRefresh: true,
                  });
                } */
                break;
              case recordKeeperCards.length-1: // case to pinSpacing the last card
                ScrollTrigger.create({
                  trigger: card,
                  start: "center 50%",
                  end: () => lastRecordKeeperCardST.start + bottomDistance,
                  pin: true,
                  pinSpacing: true,
                  invalidateOnRefresh: true,
                  onEnter: ({progress, direction, isActive}) => {
                    //changeRecordKeeperH4.play();
                    setiPadTextureName('iPad_texture_'+(i+1));
                    gsap.fromTo(fRKHI[i-1], {opacity: 1, yPercent: 0}, {opacity: 0, yPercent: -200, duration: 0.2})
                    gsap.fromTo(fRKHI[i], {opacity: 0, yPercent: -200}, {opacity: 1, yPercent: 0, duration: 0.2})
                  },
                  onLeaveBack: ({progress, direction, isActive}) => {
                    //changeRecordKeeperH4.reverse();
                    setiPadTextureName('iPad_texture_'+(i));
                    gsap.fromTo(fRKHI[i-1], {opacity: 0, yPercent: -200}, {opacity: 1, yPercent: 0, duration: 0.2})
                    gsap.fromTo(fRKHI[i], {opacity: 1, yPercent: 0}, {opacity: 0, yPercent: -200, duration: 0.2})
                  }
                });
                break;
              default: // default case
                ScrollTrigger.create({
                  trigger: card,
                  start: "center 50%",
                  end: () => lastRecordKeeperCardST.start + bottomDistance,
                  pin: true,
                  pinSpacing: false,
                  onEnter: ({progress, direction, isActive}) => {
                    //changeRecordKeeperH4.play(); // REVIEW THIS SOLUTION AS IT CAN FAIL WHEN SCROLLING FAST
                    setiPadTextureName('iPad_texture_'+(i+1));
                    gsap.fromTo(fRKHI[i-1], {opacity: 1, yPercent: 0}, {opacity: 0, yPercent: -200, duration: 0.2})
                    gsap.fromTo(fRKHI[i], {opacity: 0, yPercent: -200}, {opacity: 1, yPercent: 0, duration: 0.2})
                  },
                  onLeaveBack: ({progress, direction, isActive}) => {
                    //changeRecordKeeperH4.reverse();
                    setiPadTextureName('iPad_texture_'+(i));
                    gsap.fromTo(fRKHI[i-1], {opacity: 0, yPercent: -200}, {opacity: 1, yPercent: 0, duration: 0.2})
                    gsap.fromTo(fRKHI[i], {opacity: 1, yPercent: 0}, {opacity: 0, yPercent: -200, duration: 0.2})
                  }
                });
            }   //"center "+(vhToPixels(55)+(vhToPixels(1)*i))
            //setiPhoneOpacity(1);
            //setiPadOpacity(0);
          });

          // Pin R3F Canvas throughout Features section (glitchy so replaced with createScrollTriggerWhenHomeFeaturesR3FLoaded)
          /* ScrollTrigger.create({
            trigger: "#featuresJudge",
            start: "top top",
            //endTrigger: ".featuresRecordKeeperBottom",
            //end: "bottom bottom",
            end: () => lastRecordKeeperCardST.start + bottomDistance,
            pin: ".homeFeaturesR3FViewer",
            markers: true,
          }); */

          //This sets the end position to the createScrollTriggerWhenHomeFeaturesR3FLoaded function that pins the R3F Canvas throughout Features section only when fully loaded
          setEndPosition(lastRecordKeeperCardST.start + bottomDistance);

        }
      }, 50); // Check every 50ms
  
    /* GSDevTools.create(); */
    },
    { dependencies: [setMacBookProTextureName, setiPhoneTextureName, setiPadTextureName, setMacBookProOpacity, setiPhoneOpacity, setiPadOpacity, setEndPosition], revertOnUpdate: true }
  );

  return (
    <>
      <div className="homeRoot">

        <div id="Home" className="homeSection">
          <div className="homeBackground">
            <img src="/images/33498201-fade.webp" alt="Fighters getting ready to fight"/>
          </div>
          <div className="homeMain">
            <img src="/images/logo_on_black.svg" alt="MMAPP Logo" />
            <h2>Mapping MMA</h2>
          </div>
          <HomeIntroR3F />
          {/* <TestR3F /> */}
          {/* <HomeReact3FiberViewer /> */}
        </div>


        <section id="SmallMission" className="z-20 flex flex-col justify-center">
            <div
              className={clsx("h-full flex flex-col md:flex-row relative ", //shadow-inset-mission
              "hero1ContainerMargins min-h-[55rem] md:min-h-[70rem] lg:min-h-[100rem] rounded-[3rem] bg-no-repeat bg-bottom bg-bgRadialGradientDown",
              "pb-[2rem] md:pb-[6rem] lg:pb-[10rem]")}
            >
              <div className="flex flex-col justify-top z-20 mx-[2rem] md:mx-[6rem] xl:mx-[12rem] 2xl:mx-[16rem]"> {/* ml-[4rem] md:ml-[6rem] xl:ml-[12rem] 2xl:ml-[16rem] mr-0 md:mr-[4rem] xl:mr-[8rem] 2xl:mr-[13.5rem] pt-[2rem] md:pt-[2rem] lg:pt-[2rem] max-w-[30rem] md:max-w-[47rem] lg:max-w-[65rem] */}
                <h5 className="mb-4 md:mb-8 lg:mb-12 text-center text-neutral-200 deboss">
                  Small Mission
                </h5>
                <div className="flex flex-col justify-center items-center">
                  <h3 className="mb-8 md:mb-12 lg:mb-12 py-8 text-center text-transparent bg-clip-text bg-gradient-to-b from-[var(--purple-250)] to-purple-100 w-[95%] md:w-[80%]">
                    Accelerate the Recognition of MMA as an Olympic Sport
                  </h3>
                  <p className="mb-8 md:mb-12 lg:mb-12 leading-[2.1rem] md:leading-[2.5rem] text-center w-[95%] md:w-[70%] lg:w-[62%]">
                    MMAPP is an all-in-one solution for MMA Federations, enabling a quick and effortless transition to the digital age, helping elevate MMA to the highest level.
                  </p>
                </div>
                <div className="smallMissionDescriptionContainer flex flex-col md:flex-row w-full">
                  <div className="flex flex-col gap-10 w-[100%] md:w-[65%] pr-0 md:pr-12">
                    <div>
                      <h5 className="py-6 text-transparent bg-clip-text bg-gradient-to-tr from-[var(--purple-250)] to-purple-100">
                        Management, Scheduling, Officiation
                      </h5>
                      <p className="leading-[2.1rem] md:leading-[2.5rem] text-left">
                        Our platform solves all issues Federations face in membership approval and management and event scheduling and approval.<br/>
                        On the officiation side, we offer an unparalleled electronic scoring system that encompasses every aspect of the job, from judging fights to Record Keeping (Timekeeping + Scorekeeping).
                      </p>
                    </div>
                    <div>
                      <h5 className="py-6 text-transparent bg-clip-text bg-gradient-to-tr from-[var(--purple-250)] to-purple-100">
                        Common Language & Unit of Measurement
                      </h5>
                      <p className="leading-[2.1rem] md:leading-[2.5rem] text-left">
                        Our aim is to revolutionize MMA Judging by providing officials with a common language and unit of measurement.<br/>
                        By providing these stepping stones, we can increase precision in discussion and debate the sport in a deeper manner, leading to game-changing improvements.
                      </p>
                    </div>
                    <div>
                      <h5 className="py-6 text-transparent bg-clip-text bg-gradient-to-tr from-[var(--purple-250)] to-purple-100">
                        The “Dashboard” app
                      </h5>
                      <p className="leading-[2.1rem] md:leading-[2.5rem] text-left">
                        Easy & Quick sign up for members, with minimal input from Federations.<br/>
                        Manage Members and Events with a few clicks.<br/>
                        Gain insights into your officials performances.<br/>
                      </p>
                    </div>
                    <div>
                      <h5 className="py-6 text-transparent bg-clip-text bg-gradient-to-tr from-[var(--purple-250)] to-purple-100">
                        The “Judge” app
                      </h5>
                      <p className="leading-[2.1rem] md:leading-[2.5rem] text-left">
                        Make more informed decisions for longer, with MMAPP’s patented methodology.<br/>
                        Discuss scoring in a deeper manner.<br/>
                        Lifetime archive of your scoring.<br/>
                        Contribute to the improvement of MMA Judging.<br/>
                      </p>
                    </div>
                    <div>
                      <h5 className="py-6 text-transparent bg-clip-text bg-gradient-to-tr from-[var(--purple-250)] to-purple-100">
                        The “RecordKeeper” app
                      </h5>
                      <p className="leading-[2.1rem] md:leading-[2.5rem] text-left">
                        All Timing duties done automatically.<br/>
                        Receive and calculate scores instantly.<br/>
                        Record fight events like never before.<br/>
                      </p>
                    </div>
                    <p className="text-md hover:text-white text-neutral-200 text-left pb-14 md:pb-0 pl-10">
                    <span aria-hidden="true">↓</span> Learn more about their features and benefits below <span aria-hidden="true">↓</span>
                    </p>
                  </div>
                  <div className="flex justify-start items-start w-[100%] md:w-[35%]">
                    <img className="smallMissionImg z-10 object-contain self-start px-0 md:px-2 pb-4 md:pb-6 pt-0 md:pt-6" src="/images/features/iphone-12-black.png" alt="iphone-12"/>
                  </div>
                </div>
              </div>
            </div>
        </section>


        <div className="borderBottom"></div>

        <section id="Features" className="">

          <h5 className="mb-4 md:mb-8 lg:mb-12 text-neutral-200 text-center deboss">
            Features
          </h5>

          <div ref={homeFeaturesR3FobserverRef} />
          {showHomeFeaturesR3F && (
            <Suspense fallback={<div>Loading 3D...</div>}>
              <HomeFeaturesR3F onLoaded={createScrollTriggerWhenHomeFeaturesR3FLoaded} />
            </Suspense>
          )}

          {/* // Dashboard */}
          {/* <div id="featuresDashboard" className="flex flex-col items-center dashboardCards my-24">
            <h2 id="featuresDashboardTitle" className="z-20 px-[5vw] md:px-[20vw] lg:px-[10vw] portrait:pb-4 md:portrait:pb-12 text-center text-transparent bg-clip-text bg-gradient-to-tr from-[var(--purple-250)] to-purple-100" >Federations (Dashboard)</h2>
            <div id="featuresDashboardMBP" className="absolute w-[92vw] h-[100vh] flex flex-col justify-center items-center z-5">
              <img className="object-contain relative z-5 max-w-[68%] mt-[5vh] macBookPro" src="/images/features/mbp_16_hw__cqlhn5ys0o9y_large_2x_alpha.webp" alt="MacBook Pro"/>
            </div>
            <div id="featuresDashboardHeader" className="featuresDashboardHeader w-full flex items-center justify-center text-center z-20 overflow-visible relative py-6 portrait:py-12">
              <h5 className="relative" style={{ visibility: 'hidden' }}>Easy Form Management and Seamless Sign-up process<br/>for all your members (Officials, Athletes, Coaches, Promoters and Clubs)</h5>
              <h5 className="absolute featuresDashboardHeaderItem">Overview of Federation Affairs</h5>
              <h5 className="absolute featuresDashboardHeaderItem">Visual Reports with Actionable Insights</h5>
              <h5 className="absolute px-[5vw] 2xl:px-[10vw] featuresDashboardHeaderItem">Easy Form Management and Seamless Sign-up process for all your members (Officials, Athletes, Coaches, Promoters and Clubs)</h5>
              <h5 className="absolute featuresDashboardHeaderItem">Intuitive Member Management</h5>
            </div>
          </div> */}


          <div id="featuresDashboard" className="featuresDashboard flex justify-center">
            <div className={clsx("w-full h-full flex flex-col md:flex-row relative",
            "hero1ContainerMargins rounded-[3rem] px-10 md:px-20 lg:px-32 py-28 md:py-32 lg:py-32 border-2 border-neutral-900")}>
              <div id="featuresDashboardContainer" className="flex flex-col justify-top z-20 text-center">
                <h2 id="featuresDashboardTitle" className="text-transparent bg-clip-text bg-gradient-to-tr from-[var(--purple-250)] to-purple-100 pb-2">
                  Federations (Dashboard)
                </h2>
                <FeaturesDashboardCard className="dashboardCard z-10" parentClassName="">
                  <h4 className="featuresDashboardHeaderItem">
                    Easy Form Management and Seamless Sign-up process for all your members (Officials, Athletes, Coaches, Promoters and Clubs)
                  </h4>
                </FeaturesDashboardCard>
                <FeaturesDashboardCard className="dashboardCard z-10" parentClassName="">
                  <h4 className="featuresDashboardHeaderItem">
                    Overview of Federation Affairs
                  </h4>
                </FeaturesDashboardCard>
                <FeaturesDashboardCard className="dashboardCard z-10" parentClassName="">
                  <h4 className="featuresDashboardHeaderItem">
                    Visual Reports with Actionable Insights
                  </h4>
                </FeaturesDashboardCard>
                <FeaturesDashboardCard className="dashboardCard z-10" parentClassName="">
                  <h4 className="featuresDashboardHeaderItem">
                    Easy Form Management and Seamless Sign-up process for all your members (Officials, Athletes, Coaches, Promoters and Clubs)
                  </h4>
                </FeaturesDashboardCard>
                <FeaturesDashboardCard className="dashboardCard z-10" parentClassName="">
                  <h4 className="featuresDashboardHeaderItem">
                    Intuitive Member Management
                  </h4>
                </FeaturesDashboardCard>
              </div>
            </div>
          </div>

          {/*
            // Dashboard V2 with Screen and MacBook Pro image behind
          <div id="featuresDashboard" className="flex flex-col items-center dashboardCards my-24">
            <h2 id="featuresDashboardTitle" className="z-20 px-[5vw] md:px-[20vw] lg:px-[10vw] portrait:pb-4 md:portrait:pb-12 text-center text-transparent bg-clip-text bg-gradient-to-tr from-[var(--purple-250)] to-purple-100" >Federations (Dashboard)</h2>
            <div id="featuresDashboardMBP" className="absolute w-[92vw] h-[100vh] flex flex-col justify-center items-center z-5">
              <img className="object-contain relative z-5 max-w-[68%] mt-[5vh] macBookPro" src="/images/features/mbp_16_hw__cqlhn5ys0o9y_large_2x_alpha.webp" alt="MacBook Pro"/>
            </div>
            <div id="featuresDashboardHeader" className="featuresDashboardHeader w-full flex items-center justify-center text-center z-20 overflow-visible relative py-6 portrait:py-12">
              <h5 className="relative" style={{ visibility: 'hidden' }}>Easy Form Management and Seamless Sign-up process<br/>for all your members (Officials, Athletes, Coaches, Promoters and Clubs)</h5>
              <h5 className="absolute featuresDashboardHeaderItem">Overview of Federation Affairs</h5>
              <h5 className="absolute featuresDashboardHeaderItem">Visual Reports with Actionable Insights</h5>
              <h5 className="absolute px-[5vw] 2xl:px-[10vw] featuresDashboardHeaderItem">Easy Form Management and Seamless Sign-up process for all your members (Officials, Athletes, Coaches, Promoters and Clubs)</h5>
              <h5 className="absolute featuresDashboardHeaderItem">Intuitive Member Management</h5>
            </div>
            <FeaturesDashboardCard className="dashboardCard z-10" parentClassName="pb-0">
              <img src="/images/features/federationsDashboard/dashboard1.webp" alt="Federations Dashboard 1"/>
            </FeaturesDashboardCard>
            <FeaturesDashboardCard className="dashboardCard z-10" parentClassName="pb-[35vh]">
              <img src="/images/features/federationsDashboard/dashboard2.webp" alt="Federations Dashboard 2"/>
            </FeaturesDashboardCard>
            <FeaturesDashboardCard className="dashboardCard z-10" parentClassName="pb-[35vh]">
              <img src="/images/features/federationsDashboard/dashboard3.webp" alt="Federations Dashboard 3"/>
            </FeaturesDashboardCard>
            <FeaturesDashboardCard className="dashboardCard z-10" parentClassName="pb-0">
              <img src="/images/features/federationsDashboard/dashboard4.webp" alt="Federations Dashboard 4"/>
            </FeaturesDashboardCard>
          </div> */}
          {/*
            // Dashboard V1 with Screen and shadow
            <div id="featuresDashboard" className="flex flex-col items-center dashboardCards my-24">
            <h2 id="featuresDashboardTitle" className="z-20 px-[5vw] md:px-[20vw] lg:px-[10vw] portrait:pb-4 md:portrait:pb-12 text-center text-transparent bg-clip-text bg-gradient-to-tr from-[var(--purple-250)] to-purple-100" >Federations (Dashboard)</h2>
            //<div id="featuresDashboardMBP" className="absolute w-[92vw] h-[100vh] pt-[8vh] flex items-start z-5">
              <img className="object-contain z-5" src="/images/features/mbp_16_hw__cqlhn5ys0o9y_large_2x.jpg" alt="MacBook Pro"/>
            </div>
            <div id="featuresDashboardHeader" className="featuresDashboardHeader w-full flex items-center justify-center text-center z-20 overflow-visible relative py-6 portrait:py-12">
              <h5 className="relative" style={{ visibility: 'hidden' }}>Easy Form Management and Seamless Sign-up process<br/>for all your members (Officials, Athletes, Coaches, Promoters and Clubs)</h5>
              <h5 className="absolute featuresDashboardHeaderItem">Overview of Federation Affairs</h5>
              <h5 className="absolute featuresDashboardHeaderItem">Visual Reports with Actionable Insights</h5>
              <h5 className="absolute px-[5vw] 2xl:px-[10vw] featuresDashboardHeaderItem">Easy Form Management and Seamless Sign-up process for all your members (Officials, Athletes, Coaches, Promoters and Clubs)</h5>
              <h5 className="absolute featuresDashboardHeaderItem">Intuitive Member Management</h5>
            </div>
            <FeaturesDashboardCard className="dashboardCard z-10" parentClassName="pb-0">
              <img src="/images/features/federationsDashboard/dashboard1.webp" alt="Federations Dashboard 1"/>
            </FeaturesDashboardCard>
            <ProDisplayShadowSVG className="proDisplayShadowSVG pb-[35vh]"/>
            <FeaturesDashboardCard className="dashboardCard z-10" parentClassName="pb-[35vh]">
              <img src="/images/features/federationsDashboard/dashboard2.webp" alt="Federations Dashboard 2"/>
            </FeaturesDashboardCard>
            <FeaturesDashboardCard className="dashboardCard z-10" parentClassName="pb-[35vh]">
              <img src="/images/features/federationsDashboard/dashboard3.webp" alt="Federations Dashboard 3"/>
            </FeaturesDashboardCard>
            <FeaturesDashboardCard className="dashboardCard z-10" parentClassName="pb-0">
              <img src="/images/features/federationsDashboard/dashboard4.webp" alt="Federations Dashboard 4"/>
            </FeaturesDashboardCard>
          </div> */}

          {/* <HomeFeaturesR3F /> */}
          {/* <div ref={homeFeaturesR3FobserverRef} style={{ height: '1px' }}></div> */}{/* 
          <div ref={homeFeaturesR3FobserverRef} />
          {showHomeFeaturesR3F && (
            <Suspense fallback={<div>Loading 3D...</div>}>
              <HomeFeaturesR3F onLoaded={createScrollTriggerWhenHomeFeaturesR3FLoaded} />
            </Suspense>
          )} */}

          {/* // Judge */}
          <div id="featuresJudge" className="featuresJudge flex justify-center">
            <div className={clsx("w-full h-full flex flex-col md:flex-row relative",
            "hero1ContainerMargins rounded-[3rem] px-10 md:px-20 lg:px-32 py-28 md:py-32 lg:py-32 border-2 border-neutral-900")}>
              <div className="flex flex-col justify-top z-20 text-left">
                <h2 id="featuresJudgeTitle" className="text-transparent bg-clip-text bg-gradient-to-tr from-[var(--purple-250)] to-purple-100 pb-2">
                  Officials (Judge)
                </h2>
                <FeaturesJudgeCard className="judgeCard z-10" parentClassName="pb-0">
                  <h4 className="featuresJudgeHeaderItem">
                    Personalized Fight Card
                  </h4>
                </FeaturesJudgeCard>
                <FeaturesJudgeCard className="judgeCard z-10" parentClassName="pb-0">
                  <h4 className="featuresJudgeHeaderItem">
                    Make more Informed Decisions with a Coherent and Consistent Methodology
                  </h4>
                </FeaturesJudgeCard>
                <FeaturesJudgeCard className="judgeCard z-10" parentClassName="pb-0">
                  <h4 className="featuresJudgeHeaderItem">
                    Discuss scoring more deeply with your colleagues
                  </h4>
                </FeaturesJudgeCard>
                <FeaturesJudgeCard className="judgeCard z-10" parentClassName="pb-0">
                  <h4 className="featuresJudgeHeaderItem">
                    Reduce Fatigue
                  </h4>
                </FeaturesJudgeCard>
                <FeaturesJudgeCard className="judgeCard z-10" parentClassName="pb-0">
                  <h4 className="featuresJudgeHeaderItem">
                    Instantly submit your scorecards to the RecordKeeper
                  </h4>
                </FeaturesJudgeCard>
                <FeaturesJudgeCard className="judgeCard z-10" parentClassName="pb-0">
                  <h4 className="featuresJudgeHeaderItem">
                    Training Mode<br/>Create Own Fights, Improve your skills and compare with your colleagues
                  </h4>
                </FeaturesJudgeCard>
              </div>
            </div>
          </div>

          {/* // RecordKeeper */}
          <div id="featuresRecordKeeper" className="featuresRecordKeeper flex justify-center">
            <div className={clsx("w-full h-full flex flex-col md:flex-row relative",
            "hero1ContainerMargins rounded-[3rem] px-10 md:px-20 lg:px-32 py-28 md:py-32 lg:py-32 border-2 border-neutral-900")}>
              <div className="flex flex-col justify-top z-20 text-right">
                <h2 id="featuresRecordKeeperTitle" className="text-transparent bg-clip-text bg-gradient-to-tr from-[var(--purple-250)] to-purple-100">
                  Officials (RecordKeeper)
                </h2>
                <FeaturesRecordKeeperCard className="recordKeeperCard z-10" parentClassName="pb-0">
                  <h4 className="featuresRecordKeeperHeaderItem">
                    Pre-filled in Information
                  </h4>
                </FeaturesRecordKeeperCard>
                <FeaturesRecordKeeperCard className="recordKeeperCard z-10" parentClassName="pb-0">
                  <h4 className="featuresRecordKeeperHeaderItem">
                    Effortlessly monitor all relevant details during a fight - Assigned Officials, Rules
                  </h4>
                </FeaturesRecordKeeperCard>
                <FeaturesRecordKeeperCard className="recordKeeperCard z-10" parentClassName="pb-0">
                  <h4 className="featuresRecordKeeperHeaderItem">
                    Flawlessly perform all timing duties (Round time, Break Time, Breaks, Point Deductions and more)
                  </h4>
                </FeaturesRecordKeeperCard>
                <FeaturesRecordKeeperCard className="recordKeeperCard z-10" parentClassName="pb-0">
                  <h4 className="featuresRecordKeeperHeaderItem">
                    Notifications for actions needed to perform
                  </h4>
                </FeaturesRecordKeeperCard>
                <FeaturesRecordKeeperCard className="recordKeeperCard z-10" parentClassName="pb-0">
                  <h4 className="featuresRecordKeeperHeaderItem">
                    Instant Score Delivery and Calculation
                  </h4>
                </FeaturesRecordKeeperCard>
              </div>
            </div>
          </div>

        </section>


        <div className="borderBottom featuresRecordKeeperBottom"></div>


        <section id="Benefits" className='z-20 benefits'>
          <div className="flex flex-col justify-center items-center mb-4 md:mb-8 lg:mb-12">
            <h5 className="mb-4 md:mb-8 lg:mb-12 text-neutral-200 text-center deboss">
              Benefits for everyone else
            </h5>
            <h2 id="featuresJudgeTitle" className="text-transparent text-center bg-clip-text bg-gradient-to-tr from-[var(--purple-250)] to-purple-100 pb-2 w-[95%] md:w-[60%]">
              Athletes, Coaches, Clubs and Promoters all Benefit
            </h2>
          </div>
          <Benefits /* items={items} */ />
        </section>
        

        <div className="borderBottom"></div>


        {/* <section id="SmallMission" className="z-20 flex flex-col justify-center">
            <div
              className={clsx("h-full flex flex-col md:flex-row relative shadow-inset-mission",
              "hero1ContainerMargins min-h-[55rem] md:min-h-[70rem] lg:min-h-[100rem] rounded-[3rem] bg-no-repeat bg-bottom bg-bgRadialGradientDown",
              "pb-[2rem] md:pb-[6rem] lg:pb-[10rem]")}
            >
              <div className="flex flex-col justify-top z-20 max-w-[30rem] md:max-w-[47rem] lg:max-w-[65rem] ml-[4rem] md:ml-[6rem] xl:ml-[12rem] 2xl:ml-[16rem] mr-0 md:mr-[4rem] xl:mr-[8rem] 2xl:mr-[13.5rem] pt-[5rem] md:pt-[6rem] lg:pt-[10rem] text-left">
                <h5 className="mb-4 md:mb-8 lg:mb-12 text-neutral-200 deboss">
                  Our Mission
                </h5>
                <h3 className="mb-8 md:mb-12 lg:mb-12 py-8 text-transparent bg-clip-text bg-gradient-to-b from-[var(--purple-250)] to-purple-100">
                  Accelerate the Recognition of MMA as an Olympic Sport
                </h3>
                <p className="mb-8 md:mb-12 lg:mb-12 leading-[2.1rem] md:leading-[2.5rem] text-left">
                  At MMAPP, we want to elevate MMA to the highest level, by enabling Federations to quickly and effortlessly transition to the digital age.
                </p>
                <div className="flex flex-col w-[27rem] md:w-[35rem] lg:w-[65rem] gap-10">
                  <div>
                    <h5 className="py-6 text-transparent bg-clip-text bg-gradient-to-tr from-[var(--purple-250)] to-purple-100">
                      Management, Scheduling, Officiation
                    </h5>
                    <p className="leading-[2.1rem] md:leading-[2.5rem] text-left">
                      Our platform solves all issues Federations face in the realms of membership approval and management, as well as event scheduling.<br/>
                      On the officiation side, we offer an unparalleled electronic scoring system that encompasses every aspect of the job, from judging fights to RecordKeeping.
                    </p>
                  </div>
                  <div>
                    <h5 className="py-6 text-transparent bg-clip-text bg-gradient-to-tr from-[var(--purple-250)] to-purple-100">
                      Common Language & Unit of Measurement
                    </h5>
                    <p className="leading-[2.1rem] md:leading-[2.5rem] text-left">
                      Our aim is to revolutionize MMA Judging by providing a common language and unit of measurement to officials.<br/>
                      By providing these stepping stones, we are able to increase preciseness in discussion and debate the sport in a deeper manner, leading to game-changing improvements.
                    </p>
                  </div>
                </div>
              </div>
              <img className="z-10 max-h-full max-w-[60vw] md:max-w-[28vw] lg:max-w-[22vw] bottom-[0rem] right-[0rem] md:bottom-[1.5rem] md:right-[6rem] lg:bottom-[4rem] lg:right-[10rem] relative md:absolute object-contain self-center py-20 md:pt-0" src="/images/features/iphone-12-black.png" alt="iphone-12"/>
            </div>
        </section>
        

        <div className="borderBottom"></div> */}


        <section id="FAQSupport" className="">
          <h5 className="mb-4 md:mb-8 lg:mb-12 text-neutral-200 text-center deboss">
            FAQs/Support
          </h5>
          <FAQ />
        </section>
        

        <div className="borderBottom"></div>


        <section id="ContactUs" className="">
          <h5 className="mb-4 md:mb-8 lg:mb-12 text-neutral-200 text-center deboss">
            Contact Us
          </h5>
          <ContactUs id={ContactUs} className=""/>
        </section>

        {/* <ThreeJSViewer /> */}
      </div>
    </>
  );
}