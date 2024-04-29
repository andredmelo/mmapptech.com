'use client'
import * as ReactDOMServer from "react-dom/server";
import React, { useContext, useState, useEffect, lazy, Suspense, useRef } from 'react';
import { clsx } from "clsx";
import { useMediaQuery } from '@react-hook/media-query';
/* import Image from "next/image";
import styles from "./page.module.css"; */
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import { SplitText } from 'gsap/SplitText';
import CustomEase from 'gsap/CustomEase';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';

import { MainFC, MainFCTitle, MainFCHeading, MainFCDescription } from '@/components/ui/mainFunctionalComponent'
import ContactUs from '@/app/contact/contact-us'
import Benefits from '@/app/home/benefits'
import FAQ from '@/app/contact/faq'
//import { HeroBGSVG, HeroBGSVG180 } from '@/components/ui/svg/heroBGSVG';
import { FeaturesCard, FeaturesCardHeader, FeaturesCardTitle, FeaturesCardDescription, FeaturesCardImage } from '@/components/ui/featuresCard'
import { CardPoliciesButton } from '@/components/ui/card-policies'
import CallToActionButton from '@/app/CallToActionButton'
import ProgressCircle from '@/components/ui/svg/progressCircle'

import(/* webpackPreload: true */ '@/components/three.js');
import { TestR3F } from '@/components/three.js';
import { HomeIntroR3F } from '@/components/three.js';
import { HomeiPhoneIntroR3F } from '@/components/three.js';
import { HomeCageR3F } from '@/components/three.js';
const HomeFeaturesR3F = lazy(() => import('@/components/three.js').then(module => ({ default: module.HomeFeaturesR3F })));
import { MacBookProTextureContext, IPhoneTextureContext, IPadTextureContext, MacBookProOpacityContext, IPhoneOpacityContext, IPadOpacityContext } from '@/lib/contexts/R3FContext';

import PagesTransitionScroll from '@/lib/contexts/PagesTransitionScroll';
import { MmappBlockReveal, MmappHeadingReveal, MmappParagraphsReveal, MmappParagraphsRevealRight } from '@/components/ui/mainAnimations';
//import { useHeroIntroContext } from '@/lib/contexts/HeroIntroContext';

gsap.registerPlugin(gsap, useGSAP, ScrollTrigger, DrawSVGPlugin, SplitText, CustomEase, ScrambleTextPlugin);

export default function Home() {

  const isLandscape = useMediaQuery('(orientation: landscape)');
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const isTouch = useMediaQuery('(hover: none)');
  const isUnder768 = useMediaQuery('(max-width: 768px)');
  const isUnder1280 = useMediaQuery('(max-width: 1280px)');
  const isUnder1536 = useMediaQuery('(max-width: 1536px)');
  const isOver1280 = useMediaQuery('(min-width: 1280px)');
  const isOver1536 = useMediaQuery('(min-width: 1536px)');

  const { setiPhoneTextureName } = useContext(IPhoneTextureContext);
  const { setiPhoneOpacity } = useContext(IPhoneOpacityContext);
  const { setiPadTextureName } = useContext(IPadTextureContext);
  const { setiPadOpacity } = useContext(IPadOpacityContext);
  const { setMacBookProOpacity } = useContext(MacBookProOpacityContext);
  const { setMacBookProTextureName } = useContext(MacBookProTextureContext);

  //const { isHeroIntro3DComplete } = useHeroIntroContext();

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
      //console.log("createScrollTriggerWhenHomeFeaturesR3FLoaded endPosition = "+endPosition);

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
      //console.log("Home Features R3F is loaded and its ScrollTrigger is set");
    }
  };

  /* ===== GSAP React ===== */
  useGSAP(
    () => {
      /* //ScrollTrigger for debugging
      ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        pin: "#topOverlay",
        markers: false,
      }); */

      let matchMedia = gsap.matchMedia();

      // Pin Small Mission Image
      const smallMissionImg = document.querySelector(".smallMissionImg");
      const smallMissionDescription = document.querySelector(".smallMissionDescription");
      if (smallMissionImg) {
        const smallMissionImgHeight = (smallMissionImg as HTMLElement).offsetHeight;
        const smallMissionDescriptionHeight = (smallMissionDescription as HTMLElement).offsetHeight;
        const halfViewportHeight = window.innerHeight / 2;
        const endSmallMissionImgTrigger = halfViewportHeight + smallMissionImgHeight / 2;
        //console.log("endSmallMissionImgTrigger is "+endSmallMissionImgTrigger);

        //Custom endTrigger
        matchMedia.add("(min-width: 768px)", (context) => {
          if (smallMissionImgHeight < smallMissionDescriptionHeight) {
            ScrollTrigger.create({
              trigger: smallMissionImg,
              start: "center 50%",
              endTrigger: ".smallMissionDescriptionContainer",
              end: "bottom "+endSmallMissionImgTrigger+"px",
              pin: ".smallMissionImg",
              
              pinSpacing: false,
              invalidateOnRefresh: true,
            });
          }
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
      /* window.addEventListener('resize', () => {
        ScrollTrigger.refresh();
        // console.log("Refreshed ScrollTrigger");
      }); */
      
      //To detect if a viewport is ultra-wide 1.9265 = 920px height
      /* function isViewportRatioLessThan192() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const ratio = width / height;
        return ratio < 1.9265;
      } */

      //Variables in common
      let sectionTitlePaddingTop = "" as string;
      if (isLandscape) {
        if (isOver1536) {
          sectionTitlePaddingTop = "90px";
        } else {
          sectionTitlePaddingTop = "70px";
        }
      } else if (isUnder768) {
        sectionTitlePaddingTop = "50px";
      } else {
        sectionTitlePaddingTop = "80px";
      }
    
      /* matchMedia.add("(min-width: 768px)", () => { */

        // ScrollTrigger to force iPhone Opacity to 0 when scrolling back up after a page transition below #Features
        ScrollTrigger.create({
          trigger: '#featuresDashboard',
          start: 'top 1%',
          invalidateOnRefresh: false,
          onEnter: () => { setiPhoneOpacity(0) },
          onLeaveBack: () => { setiPhoneOpacity(0)},
        });

        /* ScrollTrigger.create({
          trigger:"featuresDashboard",
          start:"top top",
          scrub:true,
          end:"bottom bottom",
          once:true,
          onUpdate:function(self){
            console.log('dashboardProgress = '+self.progress)
            if(self.progress > dashboardProgressCircleTween.progress()){
              dashboardProgressCircleTween.progress(self.progress)
            }
          }
        }) */

        //Dashboard Animations
        const checkDashboardAnimIn = setInterval(() => {
          if (document.querySelector('.dashboardCard') && document.getElementById('featuresDashboardTitle')) {
                clearInterval(checkDashboardAnimIn);
                //console.log("Dashboard animations are ready");
            let dashboardCards: HTMLElement[] = gsap.utils.toArray(".dashboardCard");
            let dashboardTitle = document.getElementById('featuresDashboardTitle');
            let dashboardContainer = document.getElementById('featuresDashboardContainer');
            const dashboardProgressCircle = document.getElementById("dashboardProgressCircle")
            const dashboardProgressCircleProgress = document.querySelector("#dashboardProgressCircle #progress")
            const dashboardProgressCircleTween = gsap.from(dashboardProgressCircleProgress, { drawSVG: 0, ease: "linear", paused:true })

            let fDHI: HTMLElement[] = gsap.utils.toArray(".featuresDashboardHeaderItem");
            let fDI: HTMLDivElement[] = gsap.utils.toArray(".featuresDashboardImage");
            //console.log("fDI is "+fDI);

            fDHI.forEach((fDHI) => { gsap.set(fDHI, {opacity: 0}); });
            gsap.set(fDHI[0], {opacity: 1, filter:"brightness(100%)"});

            let bottomDistance = dashboardCards[dashboardCards.length-1].offsetHeight; // extra distance to have things stick after the last card pins (pixels). Careful as not having any could cover up the content bellow

            let lastDashboardCardST = ScrollTrigger.create({
              trigger: dashboardCards[dashboardCards.length-1] as HTMLElement,
              start: "center 50%",
              markers:false,
              invalidateOnRefresh: false,
            });

            dashboardCards.forEach((card, i) => {
              switch (i) {
                case 0: // case to pin both card[0] and header
                  ScrollTrigger.create({
                    trigger: card,
                    start: "center 50%",
                    end: () => lastDashboardCardST.start + bottomDistance,
                    pin: card,
                    pinSpacing: false,
                    invalidateOnRefresh: false,
                    onLeaveBack: ({}) => {
                      setMacBookProTextureName('macBookPro_texture_'+(i+1));
                    }
                  });
                  // Pin Dashboard Title
                  ScrollTrigger.create({
                    trigger: dashboardTitle,
                    start: "top "+sectionTitlePaddingTop,
                    end: () => lastDashboardCardST.start + bottomDistance,
                    pin: dashboardTitle,
                    pinSpacing: false,
                    invalidateOnRefresh: false,
                  });
                  // Pin Dashboard Progress Circle
                  ScrollTrigger.create({
                    trigger: dashboardTitle,
                    start: "top "+sectionTitlePaddingTop,
                    end: () => lastDashboardCardST.start + bottomDistance,
                    //pin: dashboardProgressCircle,
                    scrub:true,
                    pinSpacing: false,
                    invalidateOnRefresh: false,
                    onUpdate:function(self){
                      let progress: number = Number(self.progress.toFixed(3));
                      //console.log('dashboardProgress = '+progress);
                      dashboardProgressCircleTween.progress(progress)
                      /* if(self.progress > dashboardProgressCircleTween.progress()){
                        dashboardProgressCircleTween.progress(progress)
                      } */ // This will make it once:true
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
                  break;
                case dashboardCards.length-1: // case to pinSpacing the last card
                  ScrollTrigger.create({
                    trigger: card,
                    start: "center 50%",
                    end: () => lastDashboardCardST.start + bottomDistance,
                    pin: true,
                    pinSpacing: true,
                    invalidateOnRefresh: false,
                    onEnter: ({progress, direction, isActive}) => {
                      setMacBookProTextureName('macBookPro_texture_'+(i+1));
                      gsap.fromTo(fDHI[i-1], {opacity: 1}, {opacity: 0, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fDHI[i-1], {yPercent: 0}, {yPercent: -48, duration: 0.4, ease: "power1.in"});
                      gsap.fromTo(fDI[i-1], {xPercent: 0}, {xPercent: 24, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fDHI[i], {opacity: 0}, {opacity: 1, duration: 0.2, ease: "power1.out"});
                      gsap.fromTo(fDHI[i], {yPercent: 48}, {yPercent: 0, duration: 0.4, ease: "power1.out"});
                      gsap.fromTo(fDI[i], {xPercent: -24}, {xPercent: 0, duration: 0.2, ease: "power1.in"});
                    },
                    onLeaveBack: ({progress, direction, isActive}) => {
                      setMacBookProTextureName('macBookPro_texture_'+(i));
                      gsap.fromTo(fDHI[i-1], {opacity: 0}, {opacity: 1, duration: 0.2, ease: "power1.out"});
                      gsap.fromTo(fDHI[i-1], {yPercent: -48}, {yPercent: 0, duration: 0.4, ease: "power1.out"});
                      gsap.fromTo(fDI[i-1], {xPercent: 24}, {xPercent: 0, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fDHI[i], {opacity: 1}, {opacity: 0, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fDHI[i], {yPercent: 0}, {yPercent: 48, duration: 0.4, ease: "power1.in"});
                      gsap.fromTo(fDI[i], {xPercent: 0}, {xPercent: -24, duration: 0.2, ease: "power1.in"});
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
                    invalidateOnRefresh: false,
                    onEnter: ({progress, direction, isActive}) => {
                      setMacBookProTextureName('macBookPro_texture_'+(i+1));
                      gsap.fromTo(fDHI[i-1], {opacity: 1}, {opacity: 0, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fDHI[i-1], {yPercent: 0}, {yPercent: -48, duration: 0.4, ease: "power1.in"});
                      gsap.fromTo(fDI[i-1], {xPercent: 0, yPercent: 0}, {xPercent: 24, yPercent: 24, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fDHI[i], {opacity: 0}, {opacity: 1, duration: 0.2, ease: "power1.out"});
                      gsap.fromTo(fDHI[i], {yPercent: 48}, {yPercent: 0, duration: 0.4, ease: "power1.out"});
                      gsap.fromTo(fDI[i], {xPercent: -24, yPercent: -24}, {xPercent: 0, yPercent: 0, duration: 0.2, ease: "power1.in"});
                    },
                    onLeaveBack: ({progress, direction, isActive}) => {
                      setMacBookProTextureName('macBookPro_texture_'+(i));
                      gsap.fromTo(fDHI[i-1], {opacity: 0}, {opacity: 1, duration: 0.2, ease: "power1.out"});
                      gsap.fromTo(fDHI[i-1], {yPercent: -48}, {yPercent: 0, duration: 0.4, ease: "power1.out"});
                      gsap.fromTo(fDI[i-1], {xPercent: 24, yPercent: 24}, {xPercent: 0, yPercent: 0, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fDHI[i], {opacity: 1}, {opacity: 0, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fDHI[i], {yPercent: 0}, {yPercent: 48, duration: 0.4, ease: "power1.in"});
                      gsap.fromTo(fDI[i], {xPercent: 0, yPercent: 0}, {xPercent: -24, yPercent: -24, duration: 0.2, ease: "power1.in"});
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
          invalidateOnRefresh: false,
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
            const judgeProgressCircle = document.getElementById("judgeProgressCircle")
            const judgeProgressCircleProgress = document.querySelector("#judgeProgressCircle #progress")
            const judgeProgressCircleTween = gsap.from(judgeProgressCircleProgress, { drawSVG: 0, ease: "linear", paused:true })

            let fJHI: HTMLElement[] = gsap.utils.toArray(".featuresJudgeHeaderItem");
            let fJI: HTMLImageElement[] = gsap.utils.toArray(".featuresJudgeImage");

            fJHI.forEach((fJHI) => { gsap.set(fJHI, {opacity: 0}); });
            gsap.set(fJHI[0], {opacity: 1, filter:"brightness(100%)"});

            let bottomDistance = judgeCards[judgeCards.length-1].offsetHeight; // extra distance to have things stick after the last card pins (pixels). Careful as not having any could cover up the content bellow

            let lastJudgeCardST = ScrollTrigger.create({
              trigger: judgeCards[judgeCards.length-1] as HTMLElement,
              start: "center 50%",
              markers:false,
              invalidateOnRefresh: false,
            });

            judgeCards.forEach((card, i) => {
              switch (i) {
                case 0: // case to pin both card[0] and header
                  ScrollTrigger.create({
                    trigger: card,
                    start: "center 50%",
                    end: () => lastJudgeCardST.start + bottomDistance,
                    pin: card,
                    pinSpacing: false,
                    invalidateOnRefresh: false,
                    onLeaveBack: ({}) => {
                      setiPhoneTextureName('iPhone_texture_'+(i+1));
                    }
                  });
                  // Pin Judge Title
                  ScrollTrigger.create({
                    trigger: judgeTitle,
                    start: "top "+sectionTitlePaddingTop,
                    end: () => lastJudgeCardST.start + bottomDistance,
                    pin: judgeTitle,
                    pinSpacing: false,
                    invalidateOnRefresh: false,
                  });
                  // Pin Judge Progress Circle
                  ScrollTrigger.create({
                    trigger: judgeTitle,
                    start: "top "+sectionTitlePaddingTop,
                    end: () => lastJudgeCardST.start + bottomDistance,
                    //pin: judgeProgressCircle,
                    scrub:true,
                    pinSpacing: false,
                    invalidateOnRefresh: false,
                    onUpdate:function(self){
                      let progress: number = Number(self.progress.toFixed(3));
                      //console.log('judgeProgress = '+progress);
                      judgeProgressCircleTween.progress(progress)
                      /* if(self.progress > judgeProgressCircleTween.progress()){
                        judgeProgressCircleTween.progress(progress)
                      } */ // This will make it once:true
                    }
                  });
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
                    invalidateOnRefresh: false,
                    onEnter: ({progress, direction, isActive}) => {
                      setiPhoneTextureName('iPhone_texture_'+(i+1));
                      gsap.fromTo(fJHI[i-1], {opacity: 1}, {opacity: 0, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fJHI[i-1], {yPercent: 0}, {yPercent: -48, duration: 0.4, ease: "power1.in"});
                      gsap.fromTo(fJI[i-1], {xPercent: 0}, {xPercent: 96, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fJHI[i], {opacity: 0}, {opacity: 1, duration: 0.2, ease: "power1.out"});
                      gsap.fromTo(fJHI[i], {yPercent: 48}, {yPercent: 0, duration: 0.4, ease: "power1.out"});
                      gsap.fromTo(fJI[i], {xPercent: -96}, {xPercent: 0, duration: 0.2, ease: "power1.in"});
                    },
                    onLeaveBack: ({progress, direction, isActive}) => {
                      setiPhoneTextureName('iPhone_texture_'+(i));
                      gsap.fromTo(fJHI[i-1], {opacity: 0}, {opacity: 1, duration: 0.2, ease: "power1.out"});
                      gsap.fromTo(fJHI[i-1], {yPercent: -48}, {yPercent: 0, duration: 0.4, ease: "power1.out"});
                      gsap.fromTo(fJI[i-1], {xPercent: 96}, {xPercent: 0, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fJHI[i], {opacity: 1}, {opacity: 0, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fJHI[i], {yPercent: 0}, {yPercent: 48, duration: 0.4, ease: "power1.in"});
                      gsap.fromTo(fJI[i], {xPercent: 0}, {xPercent: -96, duration: 0.2, ease: "power1.in"});
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
                    invalidateOnRefresh: false,
                    onEnter: ({progress, direction, isActive}) => {
                      setiPhoneTextureName('iPhone_texture_'+(i+1));
                      gsap.fromTo(fJHI[i-1], {opacity: 1}, {opacity: 0, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fJHI[i-1], {yPercent: 0}, {yPercent: -48, duration: 0.4, ease: "power1.in"});
                      gsap.fromTo(fJI[i-1], {xPercent: 0}, {xPercent: 96, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fJHI[i], {opacity: 0}, {opacity: 1, duration: 0.2, ease: "power1.out"});
                      gsap.fromTo(fJHI[i], {yPercent: 48}, {yPercent: 0, duration: 0.4, ease: "power1.out"});
                      gsap.fromTo(fJI[i], {xPercent: -96}, {xPercent: 0, duration: 0.2, ease: "power1.in"});
                    },
                    onLeaveBack: ({progress, direction, isActive}) => {
                      setiPhoneTextureName('iPhone_texture_'+(i));
                      gsap.fromTo(fJHI[i-1], {opacity: 0}, {opacity: 1, duration: 0.2, ease: "power1.out"});
                      gsap.fromTo(fJHI[i-1], {yPercent: -48}, {yPercent: 0, duration: 0.4, ease: "power1.out"});
                      gsap.fromTo(fJI[i-1], {xPercent: 96}, {xPercent: 0, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fJHI[i], {opacity: 1}, {opacity: 0, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fJHI[i], {yPercent: 0}, {yPercent: 48, duration: 0.4, ease: "power1.in"});
                      gsap.fromTo(fJI[i], {xPercent: 0}, {xPercent: -96, duration: 0.2, ease: "power1.in"});
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
          invalidateOnRefresh: false,
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
            const recordKeeperProgressCircle = document.getElementById("recordKeeperProgressCircle")
            const recordKeeperProgressCircleProgress = document.querySelector("#recordKeeperProgressCircle #progress")
            const recordKeeperProgressCircleTween = gsap.from(recordKeeperProgressCircleProgress, { drawSVG: 0, ease: "linear", paused:true })

            let fRKHI: HTMLElement[] = gsap.utils.toArray(".featuresRecordKeeperHeaderItem");
            let fRKI: HTMLImageElement[] = gsap.utils.toArray(".featuresRecordKeeperImage");

            fRKHI.forEach((fRKHI) => { gsap.set(fRKHI, {opacity: 0}); });
            gsap.set(fRKHI[0], {opacity: 1, filter:"brightness(100%)"});

            let bottomDistance = recordKeeperCards[recordKeeperCards.length-1].offsetHeight; // extra distance to have things stick after the last card pins (pixels). Careful as not having any could cover up the content bellow

            let lastRecordKeeperCardST = ScrollTrigger.create({
              trigger: recordKeeperCards[recordKeeperCards.length-1] as HTMLElement,
              start: "center 50%",
              markers:false,
            });

            recordKeeperCards.forEach((card, i) => {
              switch (i) {
                case 0: // case to pin both card[0] and header
                  ScrollTrigger.create({
                    trigger: card,
                    start: "center 50%",
                    end: () => lastRecordKeeperCardST.start + bottomDistance,
                    pin: card,
                    pinSpacing: false,
                    invalidateOnRefresh: false,
                    onLeaveBack: ({}) => {
                      setiPhoneTextureName('iPhone_texture_'+(i+1));
                    }
                  });
                  // Pin RecordKeeper Title
                  ScrollTrigger.create({
                    trigger: recordKeeperTitle,
                    start: "top "+sectionTitlePaddingTop,
                    end: () => lastRecordKeeperCardST.start + bottomDistance,
                    pin: recordKeeperTitle,
                    pinSpacing: false,
                    invalidateOnRefresh: false,
                  });
                  // Pin RecordKeeper Progress Circle
                  ScrollTrigger.create({
                    trigger: recordKeeperTitle,
                    start: "top "+sectionTitlePaddingTop,
                    end: () => lastRecordKeeperCardST.start + bottomDistance,
                    //pin: recordKeeperProgressCircle,
                    scrub:true,
                    pinSpacing: false,
                    invalidateOnRefresh: false,
                    onUpdate:function(self){
                      let progress: number = Number(self.progress.toFixed(3));
                      //console.log('recordKeeperProgress = '+progress);
                      recordKeeperProgressCircleTween.progress(progress)
                      /* if(self.progress > recordKeeperProgressCircleTween.progress()){
                        recordKeeperProgressCircleTween.progress(progress)
                      } */ // This will make it once:true
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
                  break;
                case recordKeeperCards.length-1: // case to pinSpacing the last card
                  ScrollTrigger.create({
                    trigger: card,
                    start: "center 50%",
                    end: () => lastRecordKeeperCardST.start + bottomDistance,
                    pin: true,
                    pinSpacing: true,
                    invalidateOnRefresh: false,
                    onEnter: ({progress, direction, isActive}) => {
                      setiPadTextureName('iPad_texture_'+(i+1));
                      gsap.fromTo(fRKHI[i-1], {opacity: 1}, {opacity: 0, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fRKHI[i-1], {yPercent: 0}, {yPercent: -48, duration: 0.4, ease: "power1.in"});
                      gsap.fromTo(fRKI[i-1], {xPercent: 0}, {xPercent: 96, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fRKHI[i], {opacity: 0}, {opacity: 1, duration: 0.2, ease: "power1.out"});
                      gsap.fromTo(fRKHI[i], {yPercent: 48}, {yPercent: 0, duration: 0.4, ease: "power1.out"});
                      gsap.fromTo(fRKI[i], {xPercent: -96}, {xPercent: 0, duration: 0.2, ease: "power1.in"});
                    },
                    onLeaveBack: ({progress, direction, isActive}) => {
                      setiPadTextureName('iPad_texture_'+(i));
                      gsap.fromTo(fRKHI[i-1], {opacity: 0}, {opacity: 1, duration: 0.2, ease: "power1.out"});
                      gsap.fromTo(fRKHI[i-1], {yPercent: -48}, {yPercent: 0, duration: 0.4, ease: "power1.out"});
                      gsap.fromTo(fRKI[i-1], {xPercent: 96}, {xPercent: 0, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fRKHI[i], {opacity: 1}, {opacity: 0, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fRKHI[i], {yPercent: 0}, {yPercent: 48, duration: 0.4, ease: "power1.in"});
                      gsap.fromTo(fRKI[i], {xPercent: 0}, {xPercent: -96, duration: 0.2, ease: "power1.in"});
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
                    invalidateOnRefresh: false,
                    onEnter: ({progress, direction, isActive}) => {
                      setiPadTextureName('iPad_texture_'+(i+1));
                      gsap.fromTo(fRKHI[i-1], {opacity: 1}, {opacity: 0, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fRKHI[i-1], {yPercent: 0}, {yPercent: -48, duration: 0.4, ease: "power1.in"});
                      gsap.fromTo(fRKI[i-1], {xPercent: 0}, {xPercent: 96, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fRKHI[i], {opacity: 0}, {opacity: 1, duration: 0.2, ease: "power1.out"});
                      gsap.fromTo(fRKHI[i], {yPercent: 48}, {yPercent: 0, duration: 0.4, ease: "power1.out"});
                      gsap.fromTo(fRKI[i], {xPercent: -96}, {xPercent: 0, duration: 0.2, ease: "power1.in"});
                    },
                    onLeaveBack: ({progress, direction, isActive}) => {
                      setiPadTextureName('iPad_texture_'+(i));
                      gsap.fromTo(fRKHI[i-1], {opacity: 0}, {opacity: 1, duration: 0.2, ease: "power1.out"});
                      gsap.fromTo(fRKHI[i-1], {yPercent: -48}, {yPercent: 0, duration: 0.4, ease: "power1.out"});
                      gsap.fromTo(fRKI[i-1], {xPercent: 96}, {xPercent: 0, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fRKHI[i], {opacity: 1}, {opacity: 0, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fRKHI[i], {yPercent: 0}, {yPercent: 48, duration: 0.4, ease: "power1.in"});
                      gsap.fromTo(fRKI[i], {xPercent: 0}, {xPercent: -96, duration: 0.2, ease: "power1.in"});
                    }
                  });
              }   //"center "+(vhToPixels(55)+(vhToPixels(1)*i))
            });

            // ScrollTrigger to force iPhone Opacity to 0 when scrolling back up after a page transition below #Features
            ScrollTrigger.create({
              trigger: '#featuresRecordKeeperContainer',
              start: 'bottom top',
              invalidateOnRefresh: false,
              onEnter: () => { setMacBookProOpacity(0) },
              onLeaveBack: () => { setMacBookProOpacity(0)},
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
            //console.log("GSAP endPosition = "+(lastRecordKeeperCardST.start + bottomDistance));

          }
        }, 50); // Check every 50ms
      /* }); */


      //Home Animation
      const heroVeil = document.getElementById("heroVeil");
      //const heroBG = document.getElementById("heroBG");
      const heroBGVideo = document.getElementById("heroBGVideo");
      const heroSpotLeft = document.getElementById("heroSpotLeft");
      const heroSpotRight = document.getElementById("heroSpotRight");
      const heroFighterRight = document.getElementById("heroFighterRight");
      const heroFighterLeft = document.getElementById("heroFighterLeft");
      const heroMMAPPHeader = document.getElementById("heroMMAPPHeader");
      const heroMMAPPLogo = document.getElementById("heroMMAPPLogo");
      const heroMMAPPText = document.getElementById("heroMMAPPText");
      const heroMMAPPiPhone = document.getElementById("heroMMAPPiPhone");
      const heroMMAPPiPhone2 = document.getElementById("heroMMAPPiPhone2");

      const heroMMAPPHeaderTop = isPortrait ? ( isUnder768 ? "42px" : "70px") : (isTouch ? (isUnder768 ? "5px" : "70px") : "70px");
      const heroMMAPPLogoWidth = isPortrait ? ( isUnder768 ? "85vw" : "80vw") : "50vw";
      //const heroMMAPPLogoScale = isPortrait ? ( isUnder768 ? "1.5" : "1.5") : "2";
      //const heroMMAPPTextBottom = isPortrait ? ( isUnder768 ? "0%" : "1.5%") : "10%";
      const heroMMAPPiPhoneScale = isPortrait ? "65svh" : "55svh";
      const heroMMAPPiPhoneBottom = isPortrait ? ( isUnder768 ? "4%" : "4%") : "4%";

      gsap.set(heroVeil, {autoAlpha: 1});
      //gsap.set(heroBG, {autoAlpha: 0});
      gsap.set(heroBGVideo, {autoAlpha: 0});
      gsap.set(heroSpotLeft, {autoAlpha: 0});
      gsap.set(heroSpotRight, {autoAlpha: 0});
      gsap.set(heroFighterRight, {autoAlpha: 0});
      gsap.set(heroFighterLeft, {autoAlpha: 0});
      gsap.set(heroMMAPPHeader, {xPercent: -50, left: "50%", top: heroMMAPPHeaderTop});
      //gsap.set(heroMMAPPText, {transformPerspective:800, transformStyle:"preserve-3d"});
      gsap.set(heroMMAPPiPhone, {autoAlpha: 0, xPercent: -50, left: "50%", height: heroMMAPPiPhoneScale, bottom: "-70%"});
      gsap.set(heroMMAPPiPhone2, {opacity: 0, xPercent: -50, left: "50%", height: heroMMAPPiPhoneScale, bottom: "-70%"});

      const HeroIntroBGReveal = gsap.timeline({paused:false})
        .fromTo(heroVeil, {autoAlpha: 1}, {autoAlpha: 0})

      let split = new SplitText(heroMMAPPText,
        { types: 'chars',
          charsClass: "bg-white/70 border-[1.5px] border-[var(--primary-fuchsia)] py-2 px-2 md:px-4 min-w-12 md:min-w-24 rounded-b-sm",
          wordsClass: "perspective-750",
          // linesClass: "perspective-750",
        });
      const MappingMMARevealAnim = gsap.timeline({
        paused:true,
      })
        .fromTo(split.chars,
          {autoAlpha:0, rotationX:-90, transformOrigin:"top"},
          {
            autoAlpha:1,
            rotationX:0,
            scrambleText: {
              text: "{original}", 
              chars: "0123456789", 
              revealDelay: 0.5, 
              speed: 0.3, 
              newClass: "myClass"
            },
            stagger:{each:0.25, ease:"power1.out"},
            duration: 3,
            //ease: "bounce.out",
            ease: CustomEase.create("custom", "M0,0 C0.051,0 0.106,0.334 0.136,0.5 0.166,0.669 0.192,0.963 0.2,1 0.208,0.985 0.28,0.289 0.354,0.3 0.468,0.316 0.491,0.983 0.5,1 0.518,0.974 0.594,0.562 0.638,0.599 0.713,0.662 0.729,0.934 0.763,1.005 0.799,0.93 0.817,0.769 0.846,0.818 0.875,0.867 0.897,0.985 0.911,0.998 0.922,0.994 0.938,0.973 0.953,0.973 0.968,0.973 1,1 1,1 "),
            // ease: CustomEase.create("custom", "M0,0 C0,0 0.015,0.156 0.021,0.226 0.033,0.373 0.054,0.719 0.065,0.867 0.07,0.941 0.109,1.488 0.113,1.533 0.191,2.451 0.256,0.554 0.26,0.482 0.276,0.163 0.327,0.106 0.346,0.4 0.35,0.467 0.4,1.573 0.443,1.573 0.485,1.573 0.527,0.535 0.577,0.535 0.627,0.535 0.63,1.37 0.668,1.371 0.704,1.371 0.707,0.722 0.755,0.723 0.781,0.723 0.789,1.184 0.816,1.2 0.838,1.213 0.856,0.833 0.88,0.833 0.913,0.833 0.891,1.104 0.922,1.104 0.95,1.104 0.945,0.915 0.964,0.948 0.98,1 1,1 1,1 "),
          }
        )

      let hasHeroIntroStageRan = false;
      const HeroIntroStage = gsap.timeline({
        paused:true,
        onComplete: () => {
          MappingMMARevealAnim?.play();
          hasHeroIntroStageRan = true;
        },
        defaults: {delay: 3},
      })
        .fromTo(heroSpotLeft, {autoAlpha: 0, xPercent: -100, yPercent: -1000}, {autoAlpha: 1, xPercent: 0, yPercent: 0, duration: 0.25, ease: "power1.in"}, 0)
        .fromTo(heroSpotRight, {autoAlpha: 0, xPercent: 100, yPercent: -100}, {autoAlpha: 1, xPercent: 0, yPercent: 0, duration: 0.25, ease: "power1.in"}, 0.25)
        .fromTo(heroBGVideo, {autoAlpha: 0}, {autoAlpha: 1, duration: 1, ease: "power2.in"}, 0.5)
        .fromTo(heroFighterLeft, {autoAlpha: 0, xPercent: -100, left: "-50%"}, {autoAlpha: 1, xPercent: -50, left: "50%", duration: 0.5, ease: "back.out"}, 0.75)
        .fromTo(heroFighterRight, {autoAlpha: 0, xPercent: 100, right: "-50%"}, {autoAlpha: 1, xPercent: 50, right: "50%", duration: 0.5, ease: "power2.out"}, 0.8)
        .fromTo(heroMMAPPLogo, {autoAlpha: 0, width: 0}, {autoAlpha: 1, width: heroMMAPPLogoWidth, duration: 0.2, ease: "back.out"}, 1.25)
        //.fromTo(heroMMAPPText, {autoAlpha: 0, scale: 0}, {autoAlpha: 1, scale: 1, duration: 0.2, ease: "back.out"}, 1.35)
        .to(heroMMAPPiPhone, {autoAlpha: 1, bottom: heroMMAPPiPhoneBottom, duration: 0.2, ease: "power1.out"}, 1.6)
        .to(heroMMAPPiPhone2, {opacity: 0.5, bottom: heroMMAPPiPhoneBottom, duration: 0.2, ease: "power1.out"}, 1.6)

      /* if (isHeroIntro3DComplete && !hasHeroIntroStageRan) {
        HeroIntroStage.play();
      } */
      HeroIntroStage.play();
  
    /* GSDevTools.create(); */
    },
    { dependencies: [isLandscape, isPortrait, isUnder768, isOver1536, setMacBookProTextureName, setiPhoneTextureName, setiPadTextureName, setMacBookProOpacity, setiPhoneOpacity, setiPadOpacity, setEndPosition], revertOnUpdate: false }
  );

  let heroVideo = "/videos/hero/hero.1080p.mp4";
  if (isUnder768) {
    heroVideo = "/videos/hero/hero.720p.mp4";
  }

  let heroFighterRight = "/images/hero/fighter_red_2xl.webp";
  if (isUnder1280) {
    heroVideo = "/images/hero/fighter_red_xl.webp";
    if (isUnder768) {
      heroVideo = "/images/hero/fighter_red_md.webp";
    }
  }

  let heroFighterLeft = "/images/hero/fighter_blue_2xl.webp";
  if (isUnder1280) {
    heroVideo = "/images/hero/fighter_blue_xl.webp";
    if (isUnder768) {
      heroVideo = "/images/hero/fighter_blue_md.webp";
    }
  }

  let heroLogo = "/images/logos/mmapp/white_logo_on_black.svg";
  if (isLandscape) {
    heroLogo = "/images/logos/mmapp/white_logo_on_black.svg";
  } else {
    heroLogo = "/images/logos/mmapp/white_logo_on_black80perc.svg";
  }

  return (
    <>
      <PagesTransitionScroll onConditionMet={() => {setShowHomeFeaturesR3F(true)}} />
      <MmappBlockReveal />
      <MmappHeadingReveal />
      <MmappParagraphsReveal />
      <MmappParagraphsRevealRight />
      {/* <MappingMMAReveal /> */}
      {/* <MainAnimations /> */}
      {/* <div id="topOverlay" className="z-[500] absolute top-0 right-0 mt-[10vh]">
        <h4 id="topOverlayh4" className="text-white">orientation = {isPortrait}</h4>
      </div> */}

      <div className="homeRoot">

        <section id="Home" className="homeSection overflow-hidden">
          <div className="hero relative w-[100vw] h-[100svh]">
            {/* <img src="/images/33498201-fade.webp" alt="Fighters getting ready to fight"/> */}
            <video
              className="z-[1] absolute object-cover top-0 left-0 w-screen h-[99svh]"
              src={heroVideo}
              typeof="video/mp4"
              playsInline
              muted
              autoPlay
              loop
              id="heroBGVideo"
            />
            {/* <video
              className="z-[1] absolute object-cover top-0 left-0 h-[100svh]"
              playsInline
              muted
              autoPlay
              loop
              id="heroBGVideo"
            >
              <source
              src="/videos/hero/empty-fighting-cage-ready-fight.1620x1080p.x264.AVBR1500kbps.veryslow.mp4"
              type="video/mp4" />
            </video> */}
            {/* <img id="heroBG" src="/images/hero/bg.webp" alt="Arena" className="z-[1] absolute object-cover top-0 left-0 w-[100vw] h-[100svh]"/> */}
            <img id="heroSpotLeft" src="/images/hero/spotlights_top_left.webp" alt="Spotlight Top Left" className="z-[2] absolute object-scale-down top-0 left-0 max-w-[35vw] md:max-w-full"/>
            <img id="heroSpotRight" src="/images/hero/spotlights_top_right.webp" alt="Spotlight Top Right" className="z-[2] absolute object-scale-down top-0 right-0 max-w-[35vw] md:max-w-full"/>
            <div id="heroMMAPPHeader" className="z-[3] absolute flex flex-col justify-center items-center w-screen">
              <img id="heroMMAPPLogo" src={heroLogo} alt="MMAPP Logo" className="relative"/>
              <h4 id="heroMMAPPText" className="relative pt-0 text-[1.75rem] md:text-[7rem] lg:text-[2.5vw] portrait:md:text-[5vw] text-center text-black font-extrabold deboss">
                MAPPING  MMA
              </h4>
            </div>
            <img id="heroMMAPPiPhone" className="z-[4] absolute object-contain rounded-[4.5vh] border-[3px] border-fuchsia-900/70" src="/images/hero/judge.webp" alt="iphone-12"/> {/* // h-[40svh] */}
            <img id="heroFighterRight" src={heroFighterRight} alt="Red Fighter" className="z-[4] absolute object-scale-down bottom-0 right-0 max-h-[65svh]"/>
            <img id="heroFighterLeft" src={heroFighterLeft} alt="Blue Fighter" className="z-[4] absolute object-scale-down bottom-0 left-0 max-h-[65svh]"/>
            <img id="heroBGFader" src="/images/hero/fader.webp" alt="Arena" className="z-[4] absolute object-cover bottom-[0px] left-0 w-[100vw] h-[100svh]"/>
            <img id="heroMMAPPiPhone2" className="z-[4] absolute object-contain opacity-[0.5] rounded-[4.5vh] border-[3px] border-transparent" src="/images/hero/judge.webp" alt="iphone-12"/> {/* // h-[40svh] */}
          </div>
          {/* <HomeIntroR3F /> */}
          {/* <HomeiPhoneIntroR3F /> */}
          <HomeCageR3F />
          {/* <HomeReact3FiberViewer /> */}
          <div id="heroVeil" className="absolute z-[200] top-0 left-0 w-[100vw] h-[100lvh] bg-[var(--background-grey)]"/>
        </section>

        <section id="SmallMission" className="z-20 flex flex-col justify-center py-32 md:py-40 lg:py-52">
          <MainFC className="bg-bgRadialGradientDown">
            <MainFCTitle className="mmappBlockReveal flex flex-col justify-center z-20 text-center">
              What We Do
            </MainFCTitle>
            <MainFCHeading className="mmappHeadingReveal flex flex-col justify-center z-20 text-center px-[0%] md:px-[3%] lg:px-[0%]">
              We offer MMA Federations an All-In-One Solution to transition to the Digital Age
            </MainFCHeading>
            {/* <MainFCDescription className="mmappParagraphsReveal flex flex-col justify-center z-20 text-center px-[0%] md:px-[8%] lg:px-[17%] mb-8 md:mb-12 lg:mb-12">
              MMAPP is an all-in-one solution for MMA Federations, enabling a quick and effortless transition to the digital age, helping elevate MMA to the highest level.
            </MainFCDescription> */}
            <div className="smallMissionDescriptionContainer flex flex-col md:flex-row w-full">
              <div className="smallMissionDescription flex flex-col gap-10 w-[100%] md:w-[65%] pr-0 md:pr-12">
                <div>
                  <h5 className="mmappHeadingReveal py-6 text-[var(--purple-250)]">
                    Management, Scheduling, Officiation
                  </h5>
                  <p className="mmappParagraphsRevealRight leading-[2.1rem] md:leading-[2.5rem] text-left">
                    Our platform solves all issues Federations face in membership approval and management and event scheduling and approval.<br/>
                    On the officiation side, we offer an unparalleled electronic scoring system that encompasses every aspect of the job, from judging fights to Record Keeping (Timekeeping + Scorekeeping).
                  </p>
                </div>
                <div>
                  <h5 className="mmappHeadingReveal py-6 text-[var(--purple-250)]">
                    Common Language & Unit of Measurement
                  </h5>
                  <p className="mmappParagraphsRevealRight leading-[2.1rem] md:leading-[2.5rem] text-left">
                    Our aim is to revolutionize MMA Judging by providing officials with a common language and unit of measurement.<br/>
                    By providing these stepping stones, we can increase precision in discussion and debate the sport in a deeper manner, leading to game-changing improvements.
                  </p>
                </div>
                <div>
                  <h5 className="mmappHeadingReveal py-6 text-[var(--purple-250)]">
                    The “Dashboard” app
                  </h5>
                  <p className="mmappParagraphsRevealRight leading-[2.1rem] md:leading-[2.5rem] text-left">
                    Easy & Quick sign up for members, with minimal input from Federations.<br/>
                    Manage Members and Events with a few clicks.<br/>
                    Gain insights into your officials performances.<br/>
                  </p>
                </div>
                <div>
                  <h5 className="mmappHeadingReveal py-6 text-[var(--purple-250)]">
                    The “Judge” app
                  </h5>
                  <p className="mmappParagraphsRevealRight leading-[2.1rem] md:leading-[2.5rem] text-left">
                    Make more informed decisions for longer, with MMAPP’s patented methodology.<br/>
                    Discuss scoring in a deeper manner.<br/>
                    Lifetime archive of your scoring.<br/>
                    Contribute to the improvement of MMA Judging.<br/>
                  </p>
                </div>
                <div>
                  <h5 className="mmappHeadingReveal py-6 text-[var(--purple-250)]">
                    The “RecordKeeper” app
                  </h5>
                  <p className="mmappParagraphsRevealRight leading-[2.1rem] md:leading-[2.5rem] text-left">
                    All Timing duties done automatically.<br/>
                    Receive and calculate scores instantly.<br/>
                    Record fight events like never before.<br/>
                  </p>
                </div>
                <div className="mmappBlockReveal flex justify-center md:justify-end w-full">
                  <p className="flex items-end text-md text-neutral-200 text-center pt-12 pb-20 md:pb-0 max-w-[28rem] md:max-w-[29rem] lg:max-w-full">
                    <span className="pr-4 bounce-arrow" aria-hidden="true">↓</span>
                      Learn more about their features and benefits below
                    <span className="pl-4 bounce-arrow" aria-hidden="true">↓</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start w-[100%] md:w-[35%]">
                <img className="smallMissionImg landscape:h-full max-h-[95vh] z-10 object-contain self-start px-0 md:px-2 pt-0 md:pt-6" src="/images/features/iphone-12-black.png" alt="iphone-12"/>
              </div>
            </div>
          </MainFC>
        </section>

        <div className="borderBottom"></div>

        <section id="Features" className="py-32 md:py-40 lg:py-52">

          <h5 className="mmappBlockReveal mb-4 md:mb-8 lg:mb-12 text-neutral-200 text-center deboss">
            Features
          </h5>

          {/* <HomeFeaturesR3F /> */}
          <div className="hidden md:block" ref={homeFeaturesR3FobserverRef} />
          {showHomeFeaturesR3F && (
            <Suspense fallback={<div className="z-[999]"><h2>Loading 3D...</h2></div>}>
              <HomeFeaturesR3F onLoaded={createScrollTriggerWhenHomeFeaturesR3FLoaded} />
            </Suspense>
          )}

          {/* // Dashboard */}
          <div id="featuresDashboard" className="featuresDashboard flex justify-center">
            <div className={clsx("w-full h-full flex flex-col md:flex-row relative justify-center",
            "rounded-[3rem] mx-1 md:mx-[4rem] xl:mx-[8rem] 2xl:mx-[13.5rem] px-2 md:px-20 lg:px-12 py-28 md:py-32 lg:py-32 ring-1 ring-white/5")}>
              <div className="flex flex-col z-20 text-left">

                <div id="featuresDashboardTitle" className="flex portrait:flex-col landscape:flex-row justify-start items-center z-20 text-left">
                  <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-[var(--purple-250)] to-purple-100 pb-2 landscape:pr-12 portrait:pr-0">
                    Federations
                  </h2>
                  <div className="flex flex-row justify-start items-center">
                    <h6 className="text-transparent bg-clip-text bg-gradient-to-tl from-[var(--purple-250)] to-purple-100 pb-2 pr-8 portrait:hidden lanscape:block">
                      ➤
                    </h6>
                    <h4 className="text-transparent bg-clip-text bg-gradient-to-tl from-[var(--purple-250)] to-purple-100 pb-2 text-center md:text-left">
                      Dashboard App
                    </h4>
                  </div>
                <ProgressCircle id="dashboardProgressCircle" leftOrRight="left"/>
                </div>

                <FeaturesCard className="dashboardCard z-10">
                  <FeaturesCardHeader className="featuresDashboardHeaderItem" leftOrRight='left'>
                    <FeaturesCardTitle>
                      Overview of Federation Affairs
                    </FeaturesCardTitle>
                    <FeaturesCardDescription>
                      Relevant information for everyday management viewable at a glance in the Overview screen.
                    </FeaturesCardDescription>
                    <FeaturesCardImage
                      className="featuresDashboardImage"
                      src="/images/features/federationsDashboard/featuresFederationsDashboard-1.webp"
                      alt="features Federations Dashboard image"
                    />
                  </FeaturesCardHeader>
                </FeaturesCard>

                <FeaturesCard className="dashboardCard z-10">
                  <FeaturesCardHeader className="featuresDashboardHeaderItem" leftOrRight='left'>
                    <FeaturesCardTitle>
                      Visual Reports with Actionable Insights
                    </FeaturesCardTitle>
                    <FeaturesCardDescription>
                      Gain a better understanding on judge scoring and the differences between your officials, to create a more cohesive team.
                    </FeaturesCardDescription>
                    <FeaturesCardImage
                      className="featuresDashboardImage"
                      src="/images/features/federationsDashboard/featuresFederationsDashboard-2.webp"
                      alt="features Federations Dashboard image"
                    />
                  </FeaturesCardHeader>
                </FeaturesCard>

                <FeaturesCard className="dashboardCard z-10">
                  <FeaturesCardHeader className="featuresDashboardHeaderItem" leftOrRight='left'>
                    <FeaturesCardTitle>
                      Easy Form Management and Sign-up process for all your members
                    </FeaturesCardTitle>
                    <FeaturesCardDescription>
                      Registering is as simple as filling out a form online, and managing them is even easier.
                    </FeaturesCardDescription>
                    <FeaturesCardImage
                      className="featuresDashboardImage"
                      src="/images/features/federationsDashboard/featuresFederationsDashboard-3.webp"
                      alt="features Federations Dashboard image"
                    />
                  </FeaturesCardHeader>
                </FeaturesCard>

                <FeaturesCard className="dashboardCard z-10">
                  <FeaturesCardHeader className="featuresDashboardHeaderItem" leftOrRight='left'>
                    <FeaturesCardTitle>
                      Intuitive Member Management
                    </FeaturesCardTitle>
                    <FeaturesCardDescription>
                      Easily view and filter your members, according to your needs to quickly drill down on what’s important.
                    </FeaturesCardDescription>
                    <FeaturesCardImage
                      className="featuresDashboardImage"
                      src="/images/features/federationsDashboard/featuresFederationsDashboard-4.webp"
                      alt="features Federations Dashboard image"
                    />
                  </FeaturesCardHeader>
                </FeaturesCard>

                <FeaturesCard className="dashboardCard z-10">
                  <FeaturesCardHeader className="featuresDashboardHeaderItem" leftOrRight='left'>
                    <FeaturesCardTitle>
                      International Database
                    </FeaturesCardTitle>
                    <FeaturesCardDescription>
                      Easily accessible foreign fighter profiles with competition eligibility allows Federations to approve athletes instantly, and athletes to travel abroad carefree.
                    </FeaturesCardDescription>
                    <FeaturesCardImage
                      className="featuresDashboardImage"
                      src="/images/features/federationsDashboard/featuresFederationsDashboard-5.webp"
                      alt="features Federations Dashboard image"
                    />
                  </FeaturesCardHeader>
                </FeaturesCard>

              </div>
            </div>
          </div>

          {/* 
            // Dashboard V3 with 3D
          <div id="featuresDashboard" className="featuresDashboard flex justify-center">
            <div className={clsx("w-full h-full flex flex-col md:flex-row relative",
            "hero1ContainerMargins rounded-[3rem] px-10 md:px-20 lg:px-32 py-28 md:py-32 lg:py-32 border-2 border-neutral-900")}>
              <div id="featuresDashboardContainer" className="flex flex-col w-full justify-top z-20 text-center">
                <h2 id="featuresDashboardTitle" className="text-transparent bg-clip-text bg-gradient-to-tr from-[var(--purple-250)] to-purple-100 pb-2">
                  Federations (Dashboard)
                </h2>
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
                    Easy Form Management and Seamless Sign-up process for all (Officials, Athletes, Coaches, Promoters and Clubs)
                  </h4>
                </FeaturesDashboardCard>
                <FeaturesDashboardCard className="dashboardCard z-10" parentClassName="">
                  <h4 className="featuresDashboardHeaderItem">
                    Intuitive Member Management
                  </h4>
                </FeaturesDashboardCard>
                <FeaturesDashboardCard className="dashboardCard z-10" parentClassName="">
                  <h4 className="featuresDashboardHeaderItem">
                    Centralized Database
                  </h4>
                </FeaturesDashboardCard>
              </div>
            </div>
          </div> */}

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


          {/* // Judge */}
          <div id="featuresJudge" className="featuresJudge flex justify-center">
            <div className={clsx("w-full h-full flex flex-col md:flex-row relative justify-center",
            "rounded-[3rem] mx-1 md:mx-[4rem] xl:mx-[8rem] 2xl:mx-[13.5rem] px-10 md:px-20 lg:px-12 py-28 md:py-32 lg:py-32 ring-1 ring-white/5")}>
              <div className="flex flex-col z-20 text-right">

                <div id="featuresJudgeTitle" className="flex portrait:flex-col-reverse landscape:flex-row justify-end items-center z-20 text-right">
                  <div className="flex flex-row justify-end items-center">
                    <h4 className="text-transparent bg-clip-text bg-gradient-to-tr from-[var(--purple-250)] to-purple-100 pb-2 text-center md:text-right">
                      Judge App
                    </h4>
                    <h6 className="text-transparent bg-clip-text bg-gradient-to-tr from-[var(--purple-250)] to-purple-100 pb-2 pr-8 rotate-180 portrait:hidden lanscape:block">
                      ➤
                    </h6>
                  </div>
                  <h2 className="text-transparent bg-clip-text bg-gradient-to-bl from-[var(--purple-250)] to-purple-100 pb-2 landscape:pl-12 portrait:pr-0">
                    Officials
                  </h2>
                  <ProgressCircle id="judgeProgressCircle" leftOrRight="right"/>
                </div>


                <FeaturesCard className="judgeCard z-10">
                  <FeaturesCardHeader className="featuresJudgeHeaderItem" leftOrRight='right'>
                    <FeaturesCardTitle>
                      Personalized Fight Card
                    </FeaturesCardTitle>
                    <FeaturesCardDescription>
                      Even with last-minute changes, officials have their upcoming roles and fight rules at their fingertips.
                    </FeaturesCardDescription>
                    <FeaturesCardImage
                      className="featuresJudgeImage"
                      src="/images/features/officialsJudge/featuresOfficialsJudge-1.webp"
                      alt="features Officials Judge image"
                    />
                  </FeaturesCardHeader>
                </FeaturesCard>

                <FeaturesCard className="judgeCard z-10">
                  <FeaturesCardHeader className="featuresJudgeHeaderItem" leftOrRight='right'>
                    <FeaturesCardTitle>
                      Informed Decisions, for longer
                    </FeaturesCardTitle>
                    <FeaturesCardDescription>
                      With an analysis of their own evaluation of the fight provided immediately after each round, officials are able to make better decisions, with less pressure, and provide support for their scoring.
                    </FeaturesCardDescription>
                    <FeaturesCardImage
                      className="featuresJudgeImage"
                      src="/images/features/officialsJudge/featuresOfficialsJudge-2.webp"
                      alt="features Officials Judge image"
                    />
                  </FeaturesCardHeader>
                </FeaturesCard>

                <FeaturesCard className="judgeCard z-10">
                  <FeaturesCardHeader className="featuresJudgeHeaderItem" leftOrRight='right'>
                    <FeaturesCardTitle>
                      Deeper Scoring discussions and debates
                    </FeaturesCardTitle>
                    <FeaturesCardDescription>
                      With a consistent and coherent methodology, with common baselines, officials are able to discuss fight and techniques in a with precision never before possible.
                    </FeaturesCardDescription>
                    <FeaturesCardImage
                      className="featuresJudgeImage"
                      src="/images/features/officialsJudge/featuresOfficialsJudge-3.webp"
                      alt="features Officials Judge image"
                    />
                  </FeaturesCardHeader>
                </FeaturesCard>

                <FeaturesCard className="judgeCard z-10">
                  <FeaturesCardHeader className="featuresJudgeHeaderItem" leftOrRight='right'>
                    <FeaturesCardTitle>
                      Instant Scorecard Submission
                    </FeaturesCardTitle>
                    <FeaturesCardDescription>
                      Once a decision has been made, officials can instantly submit their scores to the RecordKeeper for scorecard calculation and archival.
                    </FeaturesCardDescription>
                    <FeaturesCardImage
                      className="featuresJudgeImage"
                      src="/images/features/officialsJudge/featuresOfficialsJudge-4.webp"
                      alt="features Officials Judge image"
                    />
                  </FeaturesCardHeader>
                </FeaturesCard>

                <FeaturesCard className="judgeCard z-10">
                  <FeaturesCardHeader className="featuresJudgeHeaderItem" leftOrRight='right'>
                    <FeaturesCardTitle>
                      Training Mode
                    </FeaturesCardTitle>
                    <FeaturesCardDescription>
                    Training mode offers officials the ability to create their own Fights, Improve their skills and share fight assessments with their colleagues.
                    </FeaturesCardDescription>
                    <FeaturesCardImage
                      className="featuresJudgeImage"
                      src="/images/features/officialsJudge/featuresOfficialsJudge-5.webp"
                      alt="features Officials Judge image"
                    />
                  </FeaturesCardHeader>
                </FeaturesCard>

              </div>
            </div>
          </div>

          {/* // RecordKeeper */}
          <div id="featuresRecordKeeper" className="featuresRecordKeeper flex justify-center">
            <div className={clsx("w-full h-full flex flex-col md:flex-row relative justify-center",
            "rounded-[3rem] mx-1 md:mx-[4rem] xl:mx-[8rem] 2xl:mx-[13.5rem] px-10 md:px-20 lg:px-12 py-28 md:py-32 lg:py-32 ring-1 ring-white/5")}>
              <div id="featuresRecordKeeperContainer" className="flex flex-col z-20 text-left">

                <div id="featuresRecordKeeperTitle" className="flex portrait:flex-col landscape:flex-row justify-start items-center z-20 text-left">
                  <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-[var(--purple-250)] to-purple-100 pb-2 landscape:pr-12 portrait:pr-0">
                    Officials
                  </h2>
                  <div className="flex flex-row justify-start items-center">
                    <h6 className="text-transparent bg-clip-text bg-gradient-to-tl from-[var(--purple-250)] to-purple-100 pb-2 pr-8 portrait:hidden lanscape:block">
                      ➤
                    </h6>
                    <h4 className="text-transparent bg-clip-text bg-gradient-to-tl from-[var(--purple-250)] to-purple-100 pb-2 text-center md:text-left">
                      RecordKeeper
                    </h4>
                  </div>
                  <ProgressCircle id="recordKeeperProgressCircle" leftOrRight="left"/>
                </div>

                <FeaturesCard className="recordKeeperCard z-10">
                  <FeaturesCardHeader className="featuresRecordKeeperHeaderItem" leftOrRight='left'>
                    <FeaturesCardTitle>
                      Pre-filled in Information & Quick Edits
                    </FeaturesCardTitle>
                    <FeaturesCardDescription>
                      All information is pre-filled, and accessible, and any last minute change can be easily accomplished and instantly shared with everyone.
                    </FeaturesCardDescription>
                    <FeaturesCardImage
                      className="featuresRecordKeeperImage"
                      src="/images/features/officialsRecordKeeper/featuresOfficialsRecordKeeper-1.webp"
                      alt="features Officials RecordKeeper image"
                    />
                  </FeaturesCardHeader>
                </FeaturesCard>

                <FeaturesCard className="recordKeeperCard z-10">
                  <FeaturesCardHeader className="featuresRecordKeeperHeaderItem" leftOrRight='left'>
                    <FeaturesCardTitle>
                      Effortlessly record all relevant details
                    </FeaturesCardTitle>
                    <FeaturesCardDescription>
                      From reason for breaks or point deduction to submission types, everything is recorded, with no extra effort.
                    </FeaturesCardDescription>
                    <FeaturesCardImage
                      className="featuresRecordKeeperImage"
                      src="/images/features/officialsRecordKeeper/featuresOfficialsRecordKeeper-2.webp"
                      alt="features Officials RecordKeeper image"
                    />
                  </FeaturesCardHeader>
                </FeaturesCard>

                <FeaturesCard className="recordKeeperCard z-10">
                  <FeaturesCardHeader className="featuresRecordKeeperHeaderItem" leftOrRight='left'>
                    <FeaturesCardTitle>
                      Automatic timing duties
                    </FeaturesCardTitle>
                    <FeaturesCardDescription>
                      Flawlessly perform all timing duties with a push of a button. Record (Round time, Break Time, Breaks, Point Deductions and more).
                    </FeaturesCardDescription>
                    <FeaturesCardImage
                      className="featuresRecordKeeperImage"
                      src="/images/features/officialsRecordKeeper/featuresOfficialsRecordKeeper-3.webp"
                      alt="features Officials RecordKeeper image"
                    />
                  </FeaturesCardHeader>
                </FeaturesCard>

                <FeaturesCard className="recordKeeperCard z-10">
                  <FeaturesCardHeader className="featuresRecordKeeperHeaderItem" leftOrRight='left'>
                    <FeaturesCardTitle>
                      Action Notifications
                    </FeaturesCardTitle>
                    <FeaturesCardDescription>
                      Get alerted when a task must be performed such as sounding the clack for the final 10s, or to remove corners from the cage.
                    </FeaturesCardDescription>
                    <FeaturesCardImage
                      className="featuresRecordKeeperImage"
                      src="/images/features/officialsRecordKeeper/featuresOfficialsRecordKeeper-4.webp"
                      alt="features Officials RecordKeeper image"
                    />
                  </FeaturesCardHeader>
                </FeaturesCard>

                <FeaturesCard className="recordKeeperCard z-10">
                  <FeaturesCardHeader className="featuresRecordKeeperHeaderItem" leftOrRight='left'>
                    <FeaturesCardTitle>
                      Instant Score Delivery and Calculation
                    </FeaturesCardTitle>
                    <FeaturesCardDescription>
                      Never collect scores at the end of each round or fumble with a calculator. Scores are instantly received from judges and automatically calculated.
                    </FeaturesCardDescription>
                    <FeaturesCardImage
                      className="featuresRecordKeeperImage"
                      src="/images/features/officialsRecordKeeper/featuresOfficialsRecordKeeper-5.webp"
                      alt="features Officials RecordKeeper image"
                    />
                  </FeaturesCardHeader>
                </FeaturesCard>

                <CardPoliciesButton
                  id="featuresRecordKeeperBottomButton"
                  href="/product"
                  data-page="/product"
                  data-link="#MMAPP-Methodology"
                  className="w-fit px-14 mx-auto"
                >
                  Learn more in our product page<span aria-hidden="true" className="pl-2"> →</span>
                </CardPoliciesButton>

              </div>
            </div>
          </div>

        </section>

        <div className="borderBottom featuresRecordKeeperBottom"></div>

        <section id="Benefits" className='z-20 benefits py-32 md:py-40 lg:py-52'>
          <div className="flex flex-col justify-center items-center mb-4 md:mb-8 lg:mb-12 mx-1 md:mx-[4rem] xl:mx-[8rem] 2xl:mx-[13.5rem] 3xl:min-w-[1536px] 3xl:mx-auto">
            <h5 className="mmappBlockReveal mb-7 md:mb-8 lg:mb-10 text-neutral-200 text-center deboss">
              Benefits for everyone else
            </h5>
            <h3 id="featuresJudgeTitle" className="mmappHeadingReveal text-[var(--purple-250)] text-center py-1 md:py-2 mb-7 md:mb-8 lg:mb-10 w-[95%] md:w-[90%]">
            Athletes, Coaches, Clubs and Promoters also benefit from using MMAPP
            </h3>
            <p className="mmappBlockReveal text-center w-[95%] md:w-[60%] mb-8 md:mb-10 lg:mb-12">
              Choose your category below to find out how you stand to gain
            </p>
          </div>
          <Benefits /* items={items} */ />

          <CallToActionButton className="mmappBlockReveal mt-[5vw]" />
        </section>

        <div className="borderBottom"></div>

        {/* <section id="FAQSupport" className="flex flex-col justify-center items-center py-32 md:py-40 lg:py-52">
          <h5 className="mmappBlockReveal mb-8 md:mb-10 lg:mb-12 text-neutral-200 text-center deboss">
            FAQs/Support
          </h5>
          <p className="mmappBlockReveal text-center mb-8 md:mb-10 lg:mb-12 md:px-56">
            If you have any other questions, or need any assistance, please feel free to use the contact us form below
          </p>
          <FAQ className="mmappBlockReveal" />
        </section>

        <div className="borderBottom"></div> */}


        <section id="ContactUs" className="flex flex-col justify-center items-center py-32 md:py-40 lg:py-52">
          <h5 className="mmappBlockReveal mb-8 md:mb-10 lg:mb-12 text-neutral-200 text-center deboss">
            Contact Us
          </h5>
          <p className="mmappBlockReveal text-center mb-8 md:mb-10 lg:mb-12">
            Please select your kind of inquiry
          </p>
          <ContactUs id={ContactUs} className="mmappBlockReveal"/>
        </section>

      </div>
    </>
  );
}