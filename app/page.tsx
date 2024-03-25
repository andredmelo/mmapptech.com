'use client'
import * as ReactDOMServer from "react-dom/server";
import React, { useContext } from 'react';
import { clsx } from "clsx";
/* import Image from "next/image";
import { Metadata } from 'next'
import styles from "./page.module.css"; */
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import ContactUs from '@/app/contact/contact-us'
import Benefits from '@/app/home/benefits'
import FAQ from '@/app/contact/faq'
import { HeroBGSVG, HeroBGSVG180 } from '@/components/ui/svg/heroBGSVG';
import { FeaturesDashboardCard } from '@/components/ui/featuresDashboardCard'
import { FeaturesJudgeCard } from '@/components/ui/featuresJudgeCard'
import { FeaturesRecordKeeperCard } from '@/components/ui/featuresRecordKeeperCard'
import ProDisplayShadowSVG from "@/components/ui/svg/proDisplayShadowSVG";

/* import { Canvas } from "@react-three/fiber";
import { OrbitControls} from '@react-three/drei'; */
//import { ThreeJSViewer } from '@/components/three.js';
//import ThreeJSViewer from '@/components/three.js';
import { HomeIntroR3F } from '@/components/three.js';
import { HomeFeaturesR3F } from '@/components/three.js'; 
import { TestiPadR3F } from '@/components/three.js'; 

//import Cube from '@/components/three.js/cube'

import { IPhoneTextureContext, IPadTextureContext, IPhoneOpacityContext, IPadOpacityContext } from '@/contexts/R3FContext';

gsap.registerPlugin(ScrollTrigger);
/* export const metadata: Metadata = {
  title: 'Home',
} */

export default function Home() {
  const { setiPhoneTextureName } = useContext(IPhoneTextureContext);
  const { setiPhoneOpacity } = useContext(IPhoneOpacityContext);
  const { setiPadTextureName } = useContext(IPadTextureContext);
  const { setiPadOpacity } = useContext(IPadOpacityContext);

  const svgString = encodeURIComponent(
    ReactDOMServer.renderToStaticMarkup(<HeroBGSVG />)
  );
  const svgString180 = encodeURIComponent(
    ReactDOMServer.renderToStaticMarkup(<HeroBGSVG180 />)
  );

  /* ===== GSAP React ===== */
  useGSAP(
    () => {
      let matchMedia = gsap.matchMedia();
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
      
      //To detect if a viewport is ultra-wide
      function isViewportRatioLessThan160() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const ratio = width / height;
        return ratio < 1.6;
      }

      //Dashboard Animations
      const checkDashboardAnimIn = setInterval(() => {
        if (document.querySelector('.dashboardCard') && document.querySelector('.featuresDashboardHeader')) {
              clearInterval(checkDashboardAnimIn);
              //console.log("Dashboard animations are ready");
          let cards: HTMLElement[] = gsap.utils.toArray(".dashboardCard");

          let fDHI: HTMLElement[] = gsap.utils.toArray(".featuresDashboardHeaderItem");
          /* const changeH4 = gsap.timeline({paused: true, immediateRender: false})
            .fromTo(fDHI[0], {opacity: 1, yPercent: 0}, {opacity: 0, yPercent: -200, duration: 0.2})
            .fromTo(fDHI[1], {opacity: 0, yPercent: -200}, {opacity: 1, yPercent: 0, duration: 0.2})
            .addPause()
            .fromTo(fDHI[1], {opacity: 1, yPercent: 0}, {opacity: 0, yPercent: -200, duration: 0.2})
            .fromTo(fDHI[2], {opacity: 0, yPercent: -200}, {opacity: 1, yPercent: 0, duration: 0.2})
            .addPause()
            .fromTo(fDHI[2], {opacity: 1, yPercent: 0}, {opacity: 0, yPercent: -200, duration: 0.2})
            .fromTo(fDHI[3], {opacity: 0, yPercent: -200}, {opacity: 1, yPercent: 0, duration: 0.2})
            .addPause() */

          fDHI.forEach((fDHI) => { gsap.set(fDHI, {opacity: 0}); });
          gsap.set(fDHI[0], {opacity: 1, filter:"brightness(100%)"});

          let header = document.getElementById('featuresDashboardHeader');
          let title = document.getElementById('featuresDashboardTitle');
          let proDisplayShadowSVG = document.getElementById('proDisplayShadowSVG');

          /* const vhToPixels = (vh: number) => {
            const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            return (vh * height) / 100;
          }; */
          //let bottomDistance = vhToPixels(0); // extra distance to have things stick after the last card pins (pixels). Careful as not having any could cover up the content bellow

          let bottomDistance = cards[cards.length-1].offsetHeight;

          let lastCardST = ScrollTrigger.create({
            trigger: cards[cards.length-1] as HTMLElement,
            start: "center 60%",
            markers:false,
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
                filter: `brightness(${brightness}%)`, // Discarded blur(${blur}px)
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
                    //changeH4.play();
                    stackCardsAnim(cards, i);
                    gsap.fromTo(fDHI[i-1], {opacity: 1, yPercent: 0}, {opacity: 0, yPercent: -200, duration: 0.2})
                    gsap.fromTo(fDHI[i], {opacity: 0, yPercent: -200}, {opacity: 1, yPercent: 0, duration: 0.2})
                  },
                  onLeaveBack: ({progress, direction, isActive}) => {
                    //changeH4.reverse();
                    reverseStackCardsAnim(cards, i);
                    gsap.fromTo(fDHI[i-1], {opacity: 0, yPercent: -200}, {opacity: 1, yPercent: 0, duration: 0.2})
                    gsap.fromTo(fDHI[i], {opacity: 1, yPercent: 0}, {opacity: 0, yPercent: -200, duration: 0.2})
                  }
                });
                break;
              default: // default case
                ScrollTrigger.create({
                  trigger: card,
                  start: "center 60%",
                  end: () => lastCardST.start + bottomDistance,
                  pin: true,
                  pinSpacing: false,
                  onEnter: ({progress, direction, isActive}) => {
                    //changeH4.play();
                    stackCardsAnim(cards, i);
                    gsap.fromTo(fDHI[i-1], {opacity: 1, yPercent: 0}, {opacity: 0, yPercent: -200, duration: 0.2})
                    gsap.fromTo(fDHI[i], {opacity: 0, yPercent: -200}, {opacity: 1, yPercent: 0, duration: 0.2})
                  },
                  onLeaveBack: ({progress, direction, isActive}) => {
                    //changeH4.reverse();
                    reverseStackCardsAnim(cards, i);
                    gsap.fromTo(fDHI[i-1], {opacity: 0, yPercent: -200}, {opacity: 1, yPercent: 0, duration: 0.2})
                    gsap.fromTo(fDHI[i], {opacity: 1, yPercent: 0}, {opacity: 0, yPercent: -200, duration: 0.2})
                  }
                });
            }   //"center "+(vhToPixels(55)+(vhToPixels(1)*i))
          });
        }
      }, 50); // Check every 50ms


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
          if (isViewportRatioLessThan160()) {
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
                /* if (isViewportRatioLessThan160()) {
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
            setiPhoneOpacity(1);
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
          if (isViewportRatioLessThan160()) {
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
                /* if (isViewportRatioLessThan160()) {
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
            setiPhoneOpacity(1);
            //setiPadOpacity(0);
          });

          // Pin R3F Canvas throughout Features section
          ScrollTrigger.create({
            trigger: "#featuresJudge",
            start: "top top",
            //endTrigger: ".featuresRecordKeeperBottom",
            //end: "bottom bottom",
            end: () => lastRecordKeeperCardST.start + bottomDistance,
            pin: ".homeFeaturesR3FViewer",
            markers:false,
          });

        }
      }, 50); // Check every 50ms
  
    /* GSDevTools.create(); */
    },
    { dependencies: [setiPhoneTextureName, setiPadTextureName, setiPhoneOpacity, setiPadOpacity], revertOnUpdate: true }
  );

  return (
    <>
      <div className="homeRoot">

        <div id="Home" className="homeSection">
          <div className="homeBackground">
            <img src="/images/33498201.webp" alt="Fighters getting ready to fight"/>
          </div>
          <div className="homeMain">
            <img src="/images/logo_on_black.svg" alt="MMAPP Logo" />
            <h2>Mapping MMA</h2>
          </div>
          <HomeIntroR3F />
          {/* <TestiPadR3F /> */}
        </div>

        <section id="Features" className="">

          <h5 className="mb-4 md:mb-8 lg:mb-12 text-neutral-200 text-center deboss">
            Features
          </h5>

          {/* // Dashboard */}
          <div id="featuresDashboard" className="flex flex-col items-center dashboardCards my-24">
            <h2 id="featuresDashboardTitle" className="z-20 px-[5vw] md:px-[20vw] lg:px-[10vw] portrait:pb-4 md:portrait:pb-12 text-center" >Federations (Dashboard)</h2>
            {/* <div id="featuresDashboardMBP" className="absolute w-[92vw] h-[100vh] pt-[8vh] flex items-start z-5">
              <img className="object-contain z-5" src="/images/features/mbp_16_hw__cqlhn5ys0o9y_large_2x.jpg" alt="MacBook Pro"/>
            </div> */}
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
          </div>

          <HomeFeaturesR3F />

          {/* // Judge */}
          <div id="featuresJudge" className="featuresJudge flex justify-center">
            <div className={clsx("w-full h-full flex flex-col md:flex-row relative",
            "hero1ContainerMargins rounded-[3rem] px-10 md:px-20 lg:px-32 py-28 md:py-32 lg:py-32 border-2 border-neutral-900")}>
              <div className="flex flex-col justify-top z-20 text-left">
                <h2 id="featuresJudgeTitle">Officials (Judge)</h2>
                <FeaturesJudgeCard className="judgeCard z-10" parentClassName="pb-0">
                  <h4 className="featuresJudgeHeaderItem">Personalized Fight Card</h4>
                </FeaturesJudgeCard>
                <FeaturesJudgeCard className="judgeCard z-10" parentClassName="pb-0">
                  <h4 className="featuresJudgeHeaderItem">Make more Informed Decisions with a Coherent and Consistent Methodology</h4>
                </FeaturesJudgeCard>
                <FeaturesJudgeCard className="judgeCard z-10" parentClassName="pb-0">
                  <h4 className="featuresJudgeHeaderItem">Discuss scoring more deeply with your colleagues</h4>
                </FeaturesJudgeCard>
                <FeaturesJudgeCard className="judgeCard z-10" parentClassName="pb-0">
                  <h4 className="featuresJudgeHeaderItem">Reduce Fatigue</h4>
                </FeaturesJudgeCard>
                <FeaturesJudgeCard className="judgeCard z-10" parentClassName="pb-0">
                  <h4 className="featuresJudgeHeaderItem">Instantly submit your scorecards to the RecordKeeper</h4>
                </FeaturesJudgeCard>
                <FeaturesJudgeCard className="judgeCard z-10" parentClassName="pb-0">
                  <h4 className="featuresJudgeHeaderItem">Training Mode<br/>Create Own Fights, Improve your skills and compare with your colleagues</h4>
                </FeaturesJudgeCard>
              </div>
            </div>
          </div>

          {/* // RecordKeeper */}
          <div id="featuresRecordKeeper" className="featuresRecordKeeper flex justify-center">
            <div className={clsx("w-full h-full flex flex-col md:flex-row relative",
            "hero1ContainerMargins rounded-[3rem] px-10 md:px-20 lg:px-32 py-28 md:py-32 lg:py-32 border-2 border-neutral-900")}>
              <div className="flex flex-col justify-top z-20 text-right">
                <h2 id="featuresRecordKeeperTitle">Officials (RecordKeeper)</h2>
                <FeaturesRecordKeeperCard className="recordKeeperCard z-10" parentClassName="pb-0">
                  <h4 className="featuresRecordKeeperHeaderItem">Pre-filled in Information</h4>
                </FeaturesRecordKeeperCard>
                <FeaturesRecordKeeperCard className="recordKeeperCard z-10" parentClassName="pb-0">
                  <h4 className="featuresRecordKeeperHeaderItem">Effortlessly monitor all relevant details during a fight - Assigned Officials, Rules</h4>
                </FeaturesRecordKeeperCard>
                <FeaturesRecordKeeperCard className="recordKeeperCard z-10" parentClassName="pb-0">
                  <h4 className="featuresRecordKeeperHeaderItem">Flawlessly perform all timing duties (Round time, Break Time, Breaks, Point Deductions and more)</h4>
                </FeaturesRecordKeeperCard>
                <FeaturesRecordKeeperCard className="recordKeeperCard z-10" parentClassName="pb-0">
                  <h4 className="featuresRecordKeeperHeaderItem">Notifications for actions needed to perform</h4>
                </FeaturesRecordKeeperCard>
                <FeaturesRecordKeeperCard className="recordKeeperCard z-10" parentClassName="pb-0">
                  <h4 className="featuresRecordKeeperHeaderItem">Instant Score Delivery and Calculation</h4>
                </FeaturesRecordKeeperCard>
              </div>
            </div>
          </div>

        </section>


        <div className="borderBottom featuresRecordKeeperBottom"></div>


        <section id="Benefits" className='z-20 benefits'>
          <h5 className="mb-4 md:mb-8 lg:mb-12 text-neutral-200 text-center deboss">
          Benefits for everyone else
          </h5>
          <Benefits /* items={items} */ />
        </section>
        

        <div className="borderBottom"></div>


        <section id="OurMission" className="z-20 flex flex-col justify-center">
            <div
              className={clsx("h-full flex flex-col md:flex-row relative shadow-inset-mission",
              "hero1ContainerMargins min-h-[55rem] md:min-h-[70rem] lg:min-h-[110rem] rounded-[3rem] bg-no-repeat bg-bottom bg-bgRadialGradientDown",
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
              <img className="z-10 max-h-full max-w-[60vw] md:max-w-[28vw] lg:max-w-[22vw] bottom-[0rem] right-[0rem] md:bottom-[8rem] md:right-[6rem] lg:bottom-[10rem] lg:right-[10rem] relative md:absolute object-contain self-center py-20 md:pt-0" src="/images/features/iphone-12-black.png" alt="iphone-12"/>
            </div>
        </section>
        

        <div className="borderBottom"></div>


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