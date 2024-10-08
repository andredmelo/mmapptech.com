'use client'
import * as ReactDOMServer from "react-dom/server";
import React, { useContext, useState, useEffect, lazy, Suspense, useRef } from 'react';
import { clsx } from "clsx";
import { cn } from "@/lib/utils"
import { useMediaQuery } from '@react-hook/media-query';
import { isDesktop, isTablet, isMobile, isMobileOnly, isAndroid, isWinPhone, isIOS, isSamsungBrowser } from 'react-device-detect';
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
import OurExpertise from '@/app/home/ourExpertise'
import { FeaturesCard, FeaturesCardHeader, FeaturesCardTitle, FeaturesCardDescription, FeaturesCardImage, FeaturesCardVideo } from '@/components/ui/featuresCard'
import { CardPoliciesButton } from '@/components/ui/card-policies'
import CallToActionButton from '@/components/ui/CallToActionButton'
import CallToActionFederationsButton from '@/components/ui/CallToActionFederationsButton'
import FeaturesCallToActionFederations from '@/components/ui/featuresCallToActionFederations'
import ProgressCircle from '@/components/ui/svg/progressCircle'

import dynamic from 'next/dynamic';
const HomeFeaturesR3F = dynamic(() => import('@/components/three.js').then(module => ({ default: module.HomeFeaturesR3F })), {
  loading: () => 
    <div id="initial3DLoading" className="relative w-full h-0 overflow-visible">
      <div className="absolute z-[999] top-0 left-0 flex flex-col items-center justify-center w-full h-[50svh]">
        <div className="flex flex-col items-center mb-16 text-left">
          <h4 className="mb-6 tracking-tight text-white animate-pulse">Loading</h4>
          <h4 className="mb-24 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[var(--purple-350)] to-purple-100 animate-pulse">3D Models and Textures</h4>
          <div className="flex-col gap-4 w-full flex items-center justify-center">
            <div className="flex items-center justify-center">
              <div className="threeDspinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
  ssr: false
});
import { MacBookProTextureContext, IPhoneTextureContext, IPadTextureContext, MacBookProOpacityContext, IPhoneOpacityContext, IPadOpacityContext } from '@/lib/contexts/R3FContext';

import PagesTransitionScroll from '@/lib/contexts/PagesTransitionScroll';
import { MmappBlockReveal, MmappHeadingReveal, MmappParagraphsReveal, MmappParagraphsRevealRight } from '@/components/ui/mainAnimations';

gsap.registerPlugin(useGSAP, ScrollTrigger, DrawSVGPlugin, SplitText, CustomEase, ScrambleTextPlugin);

export default function Home() {

  const isLandscape = useMediaQuery('(orientation: landscape)');
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const isTouch = useMediaQuery('(hover: none)');
  const isUnder480 = useMediaQuery('(max-width: 479px)');
  const isUnder640 = useMediaQuery('(max-width: 639px)');
  const isUnder768 = useMediaQuery('(max-width: 767px)');
  const isUnder1024 = useMediaQuery('(max-width: 1023px)');
  const isUnder1280 = useMediaQuery('(max-width: 1279px)');
  const isUnder1536 = useMediaQuery('(max-width: 1535px)');
  const isOver1280 = useMediaQuery('(min-width: 1280px)');
  const isOver1536 = useMediaQuery('(min-width: 1536px)');

  const { setiPhoneTextureName } = useContext(IPhoneTextureContext);
  const { setiPhoneOpacity } = useContext(IPhoneOpacityContext);
  const { setiPadTextureName } = useContext(IPadTextureContext);
  const { setiPadOpacity } = useContext(IPadOpacityContext);
  const { setMacBookProOpacity } = useContext(MacBookProOpacityContext);
  const { setMacBookProTextureName } = useContext(MacBookProTextureContext);

  // Main Animations ready check
  const [animationsReady, setAnimationsReady] = useState(false);
  const [readyCount, setReadyCount] = useState(0);
  const handleAnimationReady = () => {
    setReadyCount(prevCount => prevCount + 1);
  };
  useEffect(() => {
    if (readyCount === 4) { // Assuming there are 5 animation components
      setAnimationsReady(true);
    }
  }, [readyCount]);

  // Hero Assets
  const [heroVideo, setHeroVideo] = useState("");
  const [heroFighterRight, setHeroFighterRight] = useState("");
  const [heroFighterLeft, setHeroFighterLeft] = useState("");
  const [heroLogo, setHeroLogo] = useState("");
  const [judge, setJudge] = useState("");
  const [heroIntroStageReady, setHeroIntroStageReady] = useState(false);
  const [dashboardVideos, setDashboardVideos] = useState<string[]>([]);
  const [judgeVideos, setJudgeVideos] = useState<string[]>([]);
  const [recordKeeperVideos, setRecordKeeperVideos] = useState<string[]>([]);

  useEffect(() => {
    let video = "/videos/hero/hero.1920w.mp4";
    if (isUnder768) {
      video = "/videos/hero/hero.768w.mp4";
      if (isLandscape) {
        video = "/videos/hero/hero.1024w.mp4";
      }
    } else if (isUnder1024) {
      video = "/videos/hero/hero.1024w.mp4";
      if (isLandscape) {
        video = "/videos/hero/hero.1280w.mp4";
      }
    } else if (isUnder1280) {
      video = "/videos/hero/hero.1280w.mp4";
      if (isLandscape) {
        video = "/videos/hero/hero.1536w.mp4";
      }
    } else if (isUnder1536) {
      video = "/videos/hero/hero.1536w.mp4";
    }
    setHeroVideo(video);

    let fighterRight = "/images/hero/fighter_red_2xl.webp";
    if (isUnder768) {
      fighterRight = "/images/hero/fighter_red_md.webp";
    } else if (isUnder1280) {
      fighterRight = "/images/hero/fighter_red_xl.webp";
    }
    setHeroFighterRight(fighterRight);

    let fighterLeft = "/images/hero/fighter_blue_2xl.webp";
    if (isUnder768) {
      fighterLeft = "/images/hero/fighter_blue_md.webp";
    } else if (isUnder1280) {
      fighterLeft = "/images/hero/fighter_blue_xl.webp";
    }
    setHeroFighterLeft(fighterLeft);

    let logo = "/images/logos/mmapp/white_logo_on_black.svg";
    if (isLandscape) {
      logo = "/images/logos/mmapp/white_logo_on_black.svg";
    } else {
      logo = "/images/logos/mmapp/white_logo_on_black80perc.svg";
    }
    setHeroLogo(logo);

    let judge = "/images/hero/judge.webp";
    if (isUnder480) {
      judge = "/images/hero/srcset/judge-480w.webp";
    } else if (isUnder640) {
      judge = "/images/hero/srcset/judge-640w.webp";
    } else if (isUnder768) {
      judge = "/images/hero/srcset/judge-768w.webp";
    } else if (isUnder1024) {
      judge = "/images/hero/srcset/judge-1024w.webp";
    } else if (isUnder1280) {
      judge = "/images/hero/srcset/judge-1280w.webp";
    }
    setJudge(judge);

    if (isUnder768) {
      const dashboardVideos = Array.from({ length: 5 }, (_, i) => 
      `/videos/features/federationsDashboard/featuresFederationsDashboard-${i + 1}.768p.mp4`
      );
      setDashboardVideos(dashboardVideos);

      const judgeVideos = Array.from({ length: 5 }, (_, i) => 
      `/videos/features/officialsJudge/featuresOfficialsJudge-${i + 1}.576p.mp4`
      );
      setJudgeVideos(judgeVideos);

      const recordKeeperVideos = Array.from({ length: 5 }, (_, i) => 
      `/videos/features/officialsRecordKeeper/featuresOfficialsRecordKeeper-${i + 1}.768p.mp4`
      );
      setRecordKeeperVideos(recordKeeperVideos);
    }
  }, [isUnder1536, isUnder1280, isUnder1024, isUnder768, isUnder640, isUnder480, isLandscape]);

  // IntersectionObserver for HomeFeaturesR3F
  /* const [showHomeFeaturesR3F, setShowHomeFeaturesR3F] = useState(false);
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
        rootMargin: '0px',
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
      ScrollTrigger.refresh();

      hasLoadedOnceRef.current = true; // Mark as called
      //console.log("Home Features R3F is loaded and its ScrollTrigger is set");
    }
  }; */

  // ScrollTrigger for homeFeaturesR3FViewer upon onLoaded
  const [endPosition, setEndPosition] = useState(0); // State variable to store the elusive end position
  const hasLoadedOnceRef = useRef(false); // Ref to track if the function has been called (this prevents the weird disapearance of the 3d Canvas when scrolling down, but not scrolling up?!?!)
  const createScrollTriggerWhenHomeFeaturesR3FLoaded = () => {
    if (!hasLoadedOnceRef.current) { // Check if the function hasn't been called yet
      let featuresDashboard = document.getElementById("featuresDashboard");
      let featuresJudge = document.getElementById("featuresJudge");
      let featuresRecordKeeper = document.getElementById("featuresRecordKeeper");
      gsap.set(featuresDashboard, { visibility: "visible", });
      gsap.set(featuresJudge, { visibility: "visible", });
      gsap.set(featuresRecordKeeper, { visibility: "visible", });

      ScrollTrigger.create({
        trigger: "#featuresDashboard",
        start: "top top",
        end: endPosition,
        pin: ".homeFeaturesR3FViewer",
        markers: false,
      });
      ScrollTrigger.refresh();
      hasLoadedOnceRef.current = true; // Mark as called
      //console.log("Home Features R3F is loaded and its ScrollTrigger is set");
    }
  };

  /* ===== GSAP React ===== */
  useGSAP(
    () => {
      let matchMedia = gsap.matchMedia();

      /* const detectViewportRatio = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const ratio = width / height;
        if (ratio > 16/9) {
          console.log("Viewport is wider than 16:9");
        } else if (ratio < 16/9) {
          console.log("Viewport is narrower than 16:9");
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

      // Mobile Animations

      function enterAni(target: HTMLElement, xIn: number, xOut: number){
        let tl = gsap.timeline({
          defaults: { ease: "power1.out" },
          scrollTrigger: {
            trigger: target,
            start: 'top bottom',
            end: "top 75%",
            scrub: 1,
            once: true,
            preventOverlaps:true,
            fastScrollEnd: true,
          }
        })
          .fromTo(target, {xPercent: xIn}, {xPercent: xOut, ease: "power1.in"})
        return tl
      }

      if (isMobileOnly) {
        let fDT: HTMLElement[] = gsap.utils.toArray(".featuresDashboardTitle");
        fDT.forEach((fDT) => {
          enterAni(fDT, -150, 0);
        });

        let fDD: HTMLElement[] = gsap.utils.toArray(".featuresDashboardDescription");
        fDD.forEach((fDD) => { 
          enterAni(fDD, -150, 0);
        });

        let fDI: HTMLDivElement[] = gsap.utils.toArray(".featuresDashboardImage");
        let fDV: HTMLDivElement[] = gsap.utils.toArray(".featuresDashboardVideo");
        {isMobileOnly && isAndroid ? 
          fDI.forEach((fDI) => {
            enterAni(fDI, 150, 0);
          })
        :
          fDV.forEach((fDV) => {
            enterAni(fDV, 150, 0);
          })
        };


        let fJT: HTMLElement[] = gsap.utils.toArray(".featuresJudgeTitle");
        fJT.forEach((fJT) => {
          enterAni(fJT, -150, 0);
        });

        let fJD: HTMLElement[] = gsap.utils.toArray(".featuresJudgeDescription");
        fJD.forEach((fJD) => { 
          enterAni(fJD, -150, 0);
        });

        let fJV: HTMLDivElement[] = gsap.utils.toArray(".featuresJudgeVideo");
        let fJI: HTMLDivElement[] = gsap.utils.toArray(".featuresJudgeImage");
        {isMobileOnly && isAndroid ? 
          fJI.forEach((fJI) => {
            enterAni(fJI, 150, 0);
          })
        :
          fJV.forEach((fJV) => {
            enterAni(fJV, 150, 0);
          });
        };

        let fRKT: HTMLElement[] = gsap.utils.toArray(".featuresRecordKeeperTitle");
        fRKT.forEach((fRKT) => {
          enterAni(fRKT, -150, 0);
        });

        let fRKD: HTMLElement[] = gsap.utils.toArray(".featuresRecordKeeperDescription");
        fRKD.forEach((fRKD) => { 
          enterAni(fRKD, -150, 0);
        });

        let fRKV: HTMLDivElement[] = gsap.utils.toArray(".featuresRecordKeeperVideo");
        let fRKI: HTMLDivElement[] = gsap.utils.toArray(".featuresRecordKeeperImage");
        {isMobileOnly && isAndroid ? 
          fRKI.forEach((fRKI) => {
            enterAni(fRKI, 150, 0);
          })
        :
          fRKV.forEach((fRKV) => {
            enterAni(fRKV, 150, 0);
          })
        };
      };

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

      // Tablet and Desktop Animations
      if (!isMobileOnly) {
      matchMedia.add("(min-width: 768px)", (context) => {
        // Pin Our Expertise Image
        const ourExpertiseImg = document.querySelector(".ourExpertiseImg");
        const ourExpertiseDescription = document.querySelector(".ourExpertiseDescription");
        const ourExpertiseDescriptionContainer = document.querySelector(".ourExpertiseDescriptionContainer");

        const ourExpertise = setInterval(() => {
          if (ourExpertiseImg && ourExpertiseDescription && ourExpertiseDescriptionContainer) {
            clearInterval(ourExpertise);
            const ourExpertiseImgHeight = (ourExpertiseImg as HTMLElement).offsetHeight;
            const ourExpertiseDescriptionHeight = (ourExpertiseDescription as HTMLElement).offsetHeight;
            const halfViewportHeight = window.innerHeight / 2;
            const endOurExpertiseImgTrigger = halfViewportHeight + ourExpertiseImgHeight / 2;
            //console.log("endOurExpertiseImgTrigger is "+endOurExpertiseImgTrigger);

            //Custom endTrigger
            if (ourExpertiseImgHeight < ourExpertiseDescriptionHeight) {
              ScrollTrigger.create({
                trigger: ourExpertiseImg,
                start: "center 50%",
                endTrigger: ".ourExpertiseDescriptionContainer",
                end: "bottom "+endOurExpertiseImgTrigger+"px",
                pin: ".ourExpertiseImg",
                pinSpacing: false,
                invalidateOnRefresh: true,
              });
            }
          };
        }, 50); // Check every 50ms

        // ScrollTrigger to force iPhone Opacity to 0 when scrolling down after a page transition to #Features
        const checkiPhoneOpacity0 = setInterval(() => {
          if (document.getElementById('featuresDashboard')) {
            clearInterval(checkiPhoneOpacity0);
            ScrollTrigger.create({
              trigger: '#featuresDashboard',
              start: 'top 1%',
              invalidateOnRefresh: false,
              onEnter: () => { setiPhoneOpacity(0) },
              onLeaveBack: () => { setiPhoneOpacity(0)},
            });
          }
        }, 50); // Check every 50ms

        //Dashboard Animations
        const checkDashboardAnimIn = setInterval(() => {
          if (document.querySelector('.dashboardCard') && document.getElementById('featuresDashboardTitle')) {
                clearInterval(checkDashboardAnimIn);
                //console.log("Dashboard animations are ready");
            let dashboardCards: HTMLElement[] = gsap.utils.toArray(".dashboardCard");
            const dashboardTitle = document.getElementById('featuresDashboardTitle');
            const dashboardFeaturesCallToActionFederationsWrapper = document.getElementById('dashboardFeaturesCallToActionFederationsWrapper');
            const dashboardProgressCircleProgress = document.querySelector("#dashboardProgressCircle #progress")
            const dashboardProgressCircleTween = gsap.from(dashboardProgressCircleProgress, { drawSVG: 0, ease: "linear", paused:true })

            let fDHI: HTMLElement[] = gsap.utils.toArray(".featuresDashboardHeaderItem");
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
                  // Pin Dashboard CallToActionFederations
                  ScrollTrigger.create({
                    trigger: dashboardTitle,
                    start: "top "+sectionTitlePaddingTop,
                    end: () => lastDashboardCardST.start + bottomDistance,
                    pin: dashboardFeaturesCallToActionFederationsWrapper,
                    pinSpacing: false,
                    invalidateOnRefresh: false,
                  });
                  // Track Dashboard Progress Circle percentage
                  ScrollTrigger.create({
                    trigger: dashboardTitle,
                    start: "top "+sectionTitlePaddingTop,
                    end: () => lastDashboardCardST.start + bottomDistance,
                    scrub:true,
                    pinSpacing: false,
                    invalidateOnRefresh: false,
                    onUpdate:function(self){
                      let progress: number = Number(self.progress.toFixed(3));
                      //console.log('dashboardProgress = '+progress);
                      dashboardProgressCircleTween.progress(progress)
                    }
                  });
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
                      gsap.fromTo(fDHI[i], {opacity: 0}, {opacity: 1, duration: 0.2, ease: "power1.out"});
                      gsap.fromTo(fDHI[i], {yPercent: 48}, {yPercent: 0, duration: 0.4, ease: "power1.out"});
                    },
                    onLeaveBack: ({progress, direction, isActive}) => {
                      setMacBookProTextureName('macBookPro_texture_'+(i));
                      gsap.fromTo(fDHI[i-1], {opacity: 0}, {opacity: 1, duration: 0.2, ease: "power1.out"});
                      gsap.fromTo(fDHI[i-1], {yPercent: -48}, {yPercent: 0, duration: 0.4, ease: "power1.out"});
                      gsap.fromTo(fDHI[i], {opacity: 1}, {opacity: 0, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fDHI[i], {yPercent: 0}, {yPercent: 48, duration: 0.4, ease: "power1.in"});
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
                      gsap.fromTo(fDHI[i], {opacity: 0}, {opacity: 1, duration: 0.2, ease: "power1.out"});
                      gsap.fromTo(fDHI[i], {yPercent: 48}, {yPercent: 0, duration: 0.4, ease: "power1.out"});
                    },
                    onLeaveBack: ({progress, direction, isActive}) => {
                      setMacBookProTextureName('macBookPro_texture_'+(i));
                      gsap.fromTo(fDHI[i-1], {opacity: 0}, {opacity: 1, duration: 0.2, ease: "power1.out"});
                      gsap.fromTo(fDHI[i-1], {yPercent: -48}, {yPercent: 0, duration: 0.4, ease: "power1.out"});
                      gsap.fromTo(fDHI[i], {opacity: 1}, {opacity: 0, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fDHI[i], {yPercent: 0}, {yPercent: 48, duration: 0.4, ease: "power1.in"});
                    }
                  });
              }
            });

          }
        }, 50); // Check every 50ms

        // macBookProiPhoneSwitch Animation
        const macBookProiPhoneSwitch = setInterval(() => {
          if (document.querySelector('.featuresDashboard')) {
            clearInterval(macBookProiPhoneSwitch);
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
          }
        }, 50); // Check every 50ms
        

        //Judge Animations
        const checkJudgeAnimIn = setInterval(() => {
          if (document.querySelector('.judgeCard') && document.getElementById('featuresJudgeTitle')) {
                clearInterval(checkJudgeAnimIn);
                //console.log("Judge animations are ready");
            let judgeCards: HTMLElement[] = gsap.utils.toArray(".judgeCard");
            let judgeTitle = document.getElementById('featuresJudgeTitle');
            const judgeFeaturesCallToActionFederationsWrapper = document.getElementById('judgeFeaturesCallToActionFederationsWrapper');
            const judgeProgressCircleProgress = document.querySelector("#judgeProgressCircle #progress")
            const judgeProgressCircleTween = gsap.from(judgeProgressCircleProgress, { drawSVG: 0, ease: "linear", paused:true })

            let fJHI: HTMLElement[] = gsap.utils.toArray(".featuresJudgeHeaderItem");

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
                  // Pin Judge CallToActionFederations
                  ScrollTrigger.create({
                    trigger: judgeTitle,
                    start: "top "+sectionTitlePaddingTop,
                    end: () => lastJudgeCardST.start + bottomDistance,
                    pin: judgeFeaturesCallToActionFederationsWrapper,
                    pinSpacing: false,
                    invalidateOnRefresh: false,
                  });
                  // Pin Judge Progress Circle
                  ScrollTrigger.create({
                    trigger: judgeTitle,
                    start: "top "+sectionTitlePaddingTop,
                    end: () => lastJudgeCardST.start + bottomDistance,
                    scrub:true,
                    pinSpacing: false,
                    invalidateOnRefresh: false,
                    onUpdate:function(self){
                      let progress: number = Number(self.progress.toFixed(3));
                      //console.log('judgeProgress = '+progress);
                      judgeProgressCircleTween.progress(progress)
                    }
                  });
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
                      gsap.fromTo(fJHI[i], {opacity: 0}, {opacity: 1, duration: 0.2, ease: "power1.out"});
                      gsap.fromTo(fJHI[i], {yPercent: 48}, {yPercent: 0, duration: 0.4, ease: "power1.out"});
                    },
                    onLeaveBack: ({progress, direction, isActive}) => {
                      setiPhoneTextureName('iPhone_texture_'+(i));
                      gsap.fromTo(fJHI[i-1], {opacity: 0}, {opacity: 1, duration: 0.2, ease: "power1.out"});
                      gsap.fromTo(fJHI[i-1], {yPercent: -48}, {yPercent: 0, duration: 0.4, ease: "power1.out"});
                      gsap.fromTo(fJHI[i], {opacity: 1}, {opacity: 0, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fJHI[i], {yPercent: 0}, {yPercent: 48, duration: 0.4, ease: "power1.in"});
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
                      gsap.fromTo(fJHI[i], {opacity: 0}, {opacity: 1, duration: 0.2, ease: "power1.out"});
                      gsap.fromTo(fJHI[i], {yPercent: 48}, {yPercent: 0, duration: 0.4, ease: "power1.out"});
                    },
                    onLeaveBack: ({progress, direction, isActive}) => {
                      setiPhoneTextureName('iPhone_texture_'+(i));
                      gsap.fromTo(fJHI[i-1], {opacity: 0}, {opacity: 1, duration: 0.2, ease: "power1.out"});
                      gsap.fromTo(fJHI[i-1], {yPercent: -48}, {yPercent: 0, duration: 0.4, ease: "power1.out"});
                      gsap.fromTo(fJHI[i], {opacity: 1}, {opacity: 0, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fJHI[i], {yPercent: 0}, {yPercent: 48, duration: 0.4, ease: "power1.in"});
                    }
                  });
              }
            });

          }
        }, 50); // Check every 50ms

        // iPhoneiPadSwitch Animation
        const iPhoneiPadSwitch = setInterval(() => {
          if (document.querySelector('.featuresJudge')) {
            clearInterval(iPhoneiPadSwitch);
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
          }
        }, 50); // Check every 50ms

        //RecordKeeper Animations
        const checkRecordKeeperAnimIn = setInterval(() => {
          if (document.querySelector('.recordKeeperCard') && document.getElementById('featuresRecordKeeperTitle')) {
                clearInterval(checkRecordKeeperAnimIn);
                //console.log("RecordKeeper animations are ready");
            let recordKeeperCards: HTMLElement[] = gsap.utils.toArray(".recordKeeperCard");
            let recordKeeperTitle = document.getElementById('featuresRecordKeeperTitle');
            const recordKeeperFeaturesCallToActionFederationsWrapper = document.getElementById('recordKeeperFeaturesCallToActionFederationsWrapper');
            const recordKeeperProgressCircleProgress = document.querySelector("#recordKeeperProgressCircle #progress")
            const recordKeeperProgressCircleTween = gsap.from(recordKeeperProgressCircleProgress, { drawSVG: 0, ease: "linear", paused:true })

            let fRKHI: HTMLElement[] = gsap.utils.toArray(".featuresRecordKeeperHeaderItem");

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
                  // Pin RecordKeeper CallToActionFederations
                  ScrollTrigger.create({
                    trigger: recordKeeperTitle,
                    start: "top "+sectionTitlePaddingTop,
                    end: () => lastRecordKeeperCardST.start + bottomDistance,
                    pin: recordKeeperFeaturesCallToActionFederationsWrapper,
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
                    }
                  });
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
                      gsap.fromTo(fRKHI[i], {opacity: 0}, {opacity: 1, duration: 0.2, ease: "power1.out"});
                      gsap.fromTo(fRKHI[i], {yPercent: 48}, {yPercent: 0, duration: 0.4, ease: "power1.out"});
                    },
                    onLeaveBack: ({progress, direction, isActive}) => {
                      setiPadTextureName('iPad_texture_'+(i));
                      gsap.fromTo(fRKHI[i-1], {opacity: 0}, {opacity: 1, duration: 0.2, ease: "power1.out"});
                      gsap.fromTo(fRKHI[i-1], {yPercent: -48}, {yPercent: 0, duration: 0.4, ease: "power1.out"});
                      gsap.fromTo(fRKHI[i], {opacity: 1}, {opacity: 0, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fRKHI[i], {yPercent: 0}, {yPercent: 48, duration: 0.4, ease: "power1.in"});
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
                      gsap.fromTo(fRKHI[i], {opacity: 0}, {opacity: 1, duration: 0.2, ease: "power1.out"});
                      gsap.fromTo(fRKHI[i], {yPercent: 48}, {yPercent: 0, duration: 0.4, ease: "power1.out"});
                    },
                    onLeaveBack: ({progress, direction, isActive}) => {
                      setiPadTextureName('iPad_texture_'+(i));
                      gsap.fromTo(fRKHI[i-1], {opacity: 0}, {opacity: 1, duration: 0.2, ease: "power1.out"});
                      gsap.fromTo(fRKHI[i-1], {yPercent: -48}, {yPercent: 0, duration: 0.4, ease: "power1.out"});
                      gsap.fromTo(fRKHI[i], {opacity: 1}, {opacity: 0, duration: 0.2, ease: "power1.in"});
                      gsap.fromTo(fRKHI[i], {yPercent: 0}, {yPercent: 48, duration: 0.4, ease: "power1.in"});
                    }
                  });
              }
            });

            // ScrollTrigger to force iPhone Opacity to 0 when scrolling back up after a page transition below #Features
            const checkiPhoneOpacity02 = setInterval(() => {
              if (document.getElementById('featuresRecordKeeperContainer')) {
                clearInterval(checkiPhoneOpacity02);
                ScrollTrigger.create({
                  trigger: '#featuresRecordKeeperContainer',
                  start: 'bottom top',
                  invalidateOnRefresh: false,
                  onEnter: () => { setMacBookProOpacity(0) },
                  onLeaveBack: () => { setMacBookProOpacity(0)},
                });
              }
            }, 50); // Check every 50ms

            //This sets the end position to the createScrollTriggerWhenHomeFeaturesR3FLoaded function that pins the R3F Canvas throughout Features section only when fully loaded
            setEndPosition(lastRecordKeeperCardST.start + bottomDistance);
            //console.log("GSAP endPosition = "+(lastRecordKeeperCardST.start + bottomDistance));

          }
        }, 50); // Check every 50ms
      });
      }
    },
    { dependencies: [isLandscape, isPortrait, isUnder768, isOver1536, isMobileOnly, isAndroid, setMacBookProTextureName, setiPhoneTextureName, setiPadTextureName, setMacBookProOpacity, setiPhoneOpacity, setiPadOpacity, setEndPosition], revertOnUpdate: false }
  );



  const heroContainer = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: heroContainer });

  /* ===== useGSAP for Hero Animation ===== */
  useGSAP(
    () => {
      //Home Animation
      const heroVeil = document.getElementById("heroVeil");
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
      const heroMMAPPiPhoneScale = isPortrait ? "65svh" : "55svh";
      const heroMMAPPiPhoneBottom = isPortrait ? ( isUnder768 ? "4%" : "4%") : "4%";

      gsap.set(heroVeil, {autoAlpha: 1});
      gsap.set(heroBGVideo, {autoAlpha: 0});
      gsap.set(heroSpotLeft, {autoAlpha: 0});
      gsap.set(heroSpotRight, {autoAlpha: 0});
      gsap.set(heroFighterRight, {autoAlpha: 0});
      gsap.set(heroFighterLeft, {autoAlpha: 0});
      gsap.set(heroMMAPPHeader, {xPercent: -50, left: "50%", top: heroMMAPPHeaderTop});
      gsap.set(heroMMAPPiPhone, {autoAlpha: 0, xPercent: -50, left: "50%", height: heroMMAPPiPhoneScale, bottom: "-70%"});
      gsap.set(heroMMAPPiPhone2, {opacity: 0, xPercent: -50, left: "50%", height: heroMMAPPiPhoneScale, bottom: "-70%"});

      const HeroIntroBGReveal = gsap.timeline({paused:false})
        .fromTo(heroVeil, {autoAlpha: 1}, {autoAlpha: 0})

      // Mapping MMA Animation
      let split = new SplitText(heroMMAPPText,
        { types: 'chars',
          charsClass: cn(
            'bg-white/70 border-[1.5px] border-[var(--primary-fuchsia)] rounded-b-sm',
            'py-2 px-[0.6rem] portrait:md:px-4 lg:px-4'
            ),
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
              speed: 0.6,
              newClass: "myClass"
            },
            stagger:{each:0.1, ease:"linear"},
            duration: 2,
            //ease: "bounce.out",
            ease: CustomEase.create("custom", "M0,0 C0.051,0 0.106,0.334 0.136,0.5 0.166,0.669 0.192,0.963 0.2,1 0.208,0.985 0.28,0.289 0.354,0.3 0.468,0.316 0.491,0.983 0.5,1 0.518,0.974 0.594,0.562 0.638,0.599 0.713,0.662 0.729,0.934 0.763,1.005 0.799,0.93 0.817,0.769 0.846,0.818 0.875,0.867 0.897,0.985 0.911,0.998 0.922,0.994 0.938,0.973 0.953,0.973 0.968,0.973 1,1 1,1 "),
          }
        )

      // HeroIntroStage Animation
      const HeroIntroStage = gsap.timeline({
        paused:true,
        defaults: {delay: 0.25},
      })
        .fromTo(heroSpotLeft, {autoAlpha: 0, xPercent: -100, yPercent: -1000}, {autoAlpha: 1, xPercent: 0, yPercent: 0, duration: 0.125, ease: "power1.in"}, 0)
        .fromTo(heroSpotRight, {autoAlpha: 0, xPercent: 100, yPercent: -100}, {autoAlpha: 1, xPercent: 0, yPercent: 0, duration: 0.125, ease: "power1.in"}, 0.125)
        .fromTo(heroBGVideo, {autoAlpha: 0}, {autoAlpha: 1, duration: 1, ease: "power2.in"}, 0.075)
        .fromTo(heroFighterLeft, {autoAlpha: 0, xPercent: -100, left: "-50%"}, {autoAlpha: 1, xPercent: -50, left: "50%", duration: 0.5, ease: "back.out"}, 0.55)
        .fromTo(heroFighterRight, {autoAlpha: 0, xPercent: 100, right: "-50%"}, {autoAlpha: 1, xPercent: 50, right: "50%", duration: 0.5, ease: "power2.out"}, 0.6)
        .fromTo(heroMMAPPLogo, {autoAlpha: 0, width: 0}, {autoAlpha: 1, width: heroMMAPPLogoWidth, duration: 0.2, ease: "back.out", onComplete: () => {MappingMMARevealAnim?.play()}}, 1.05)
        .to(heroMMAPPiPhone, {autoAlpha: 1, bottom: heroMMAPPiPhoneBottom, duration: 0.2, ease: "power1.out"}, 1.4)
        .to(heroMMAPPiPhone2, {opacity: 0.5, bottom: heroMMAPPiPhoneBottom, duration: 0.2, ease: "power1.out"}, 1.4)

      const handleHeroBGVideoLoaded = contextSafe(() => {
        HeroIntroStage.play();
      });

      window.addEventListener('heroBGVideoLoaded', handleHeroBGVideoLoaded);

      return () => {
        window.removeEventListener('heroBGVideoLoaded', handleHeroBGVideoLoaded);
      };

    },
    { dependencies: [isLandscape, isPortrait, isUnder768, isOver1536, isMobileOnly, isAndroid], revertOnUpdate: false }
  );

  return (
    <>
      <PagesTransitionScroll />
      <MmappBlockReveal onReady={handleAnimationReady} />
      <MmappHeadingReveal onReady={handleAnimationReady} />
      <MmappParagraphsReveal onReady={handleAnimationReady} />
      <MmappParagraphsRevealRight onReady={handleAnimationReady} />

      <div className="homeRoot">
        <title>Home | MMAPP</title>

        <section id="Home" className="homeSection overflow-hidden">
          <div className="hero relative w-[100vw] h-[100svh]" ref={heroContainer}>
            <video
              className="z-[1] absolute object-cover top-0 left-0 w-screen h-[99svh]"
              src={heroVideo}
              typeof="video/mp4"
              playsInline
              muted
              autoPlay
              loop
              id="heroBGVideo"
              onLoadedData={() => {
                const event = new CustomEvent('heroBGVideoLoaded');
                window.dispatchEvent(event);
              }}
            />
            <picture><img id="heroSpotLeft" src="/images/hero/spotlights_top_left.webp" alt="Spotlight Top Left" className="z-[2] absolute object-scale-down top-0 left-0 max-w-[35vw] md:max-w-full"/></picture>
            <picture><img id="heroSpotRight" src="/images/hero/spotlights_top_right.webp" alt="Spotlight Top Right" className="z-[2] absolute object-scale-down top-0 right-0 max-w-[35vw] md:max-w-full"/></picture>
            <div id="heroMMAPPHeader" className="z-[3] absolute flex flex-col justify-center items-center w-screen">
              <picture id="heroMMAPPLogo"><img src={heroLogo} alt="MMAPP Logo" className="relative"/></picture>
              <h4 id="heroMMAPPText" className={cn(
                "relative pt-0 text-center text-black font-extrabold deboss font-sans",
                'landscape:text-[2.75vw] landscape:md:text-[4vw] landscape:lg:text-[3.25vw] landscape:xl:text-[3.75vw] landscape:2xl:text-[4vw] landscape:3xl:text-[4.5vw]',
                'portrait:text-[5.5vw] portrait:md:text-[5vw] portrait:lg:text-[7vw]',
                )}
              >
                MAPPING  MMA
              </h4>
            </div>
            <picture>
              <img
                id="heroMMAPPiPhone"
                className="z-[4] absolute object-contain rounded-[4.5vh] border-[3px] border-fuchsia-900/70"
                src={judge}
                width="fit"
                height="fit"
                alt="iphone-12"
              />
            </picture>
            <picture><img id="heroFighterRight" src={heroFighterRight} alt="Red Fighter" className="z-[4] absolute object-scale-down bottom-0 right-0 max-h-[65svh]"/></picture>
            <picture><img id="heroFighterLeft" src={heroFighterLeft} alt="Blue Fighter" className="z-[4] absolute object-scale-down bottom-0 left-0 max-h-[65svh]"/></picture>
            <picture><img id="heroBGFader" src="/images/hero/fader.webp" alt="Arena" className="z-[4] absolute object-cover bottom-[-1px] md:bottom-[0px] left-0 w-[100vw] h-[100svh]"/></picture>
            <picture>
              <img
                id="heroMMAPPiPhone2"
                className="z-[4] absolute object-contain opacity-[0.5] rounded-[4.5vh] border-[3px] border-transparent"
                src={judge}
                width="fit"
                height="fit"
                alt="iphone-12"
              />
            </picture>
          </div>
          <div id="heroVeil" className="absolute z-[10] top-0 left-0 w-[100vw] h-[100lvh] bg-[var(--background-grey)]"/>
        </section>

        <section id="OurExpertise" className="z-20 flex flex-col justify-center pb-32 md:py-40 lg:py-52">
          <MainFC className="pt-20 md:pt-36 lg:pt-14 pb-12 md:pb-36 lg:pb-20 xl:pb-36 bg-bgRadialGradientDown">
            <MainFCTitle className="mmappBlockReveal flex flex-col justify-center z-20 text-center">
              Our Expertise
            </MainFCTitle>
            <MainFCHeading className="mmappHeadingReveal flex flex-col justify-center z-20 text-center px-[0%] md:px-[1%] lg:px-[0%] break-normal">
              Boosting MMA Federations to the Digital Age with our all-in-one solution
            </MainFCHeading>
            <div className="ourExpertiseDescriptionContainer flex flex-col md:flex-row w-full">
              {isUnder768 ? <OurExpertise className="mmappBlockReveal" /> : 
                <>
                  <div className="ourExpertiseDescription flex flex-col gap-10 w-[100%] md:w-[65%] pr-0 md:pr-12">
                    <div>
                      <h5 className="mmappHeadingReveal py-6 text-[var(--purple-250)]">
                        Management, Scheduling, Officiation
                      </h5>
                      <p className="mmappBlockReveal leading-[2.1rem] md:leading-[2.5rem] text-left">
                        Our platform solves all issues Federations face in membership approval and management as well as event scheduling and approval.<br/>
                        On the officiation side, we offer an unparalleled electronic scoring system that encompasses every aspect of the job, from judging fights to Record Keeping (Timekeeping + Scorekeeping).
                      </p>
                    </div>
                    <div>
                      <h5 className="mmappHeadingReveal py-6 text-[var(--purple-250)]">
                        Common Language & Unit of Measurement
                      </h5>
                      <p className="mmappBlockReveal leading-[2.1rem] md:leading-[2.5rem] text-left">
                        Our aim is to revolutionize MMA Judging by providing officials with a common language and unit of measurement.<br/>
                        By providing these stepping stones, we can increase precision in discussion and debate the sport in a deeper manner, leading to game-changing improvements.
                      </p>
                    </div>
                    <div>
                      <h5 className="mmappHeadingReveal py-6 text-[var(--purple-250)]">
                        The “Dashboard” app
                      </h5>
                      <p className="mmappBlockReveal leading-[2.1rem] md:leading-[2.5rem] text-left">
                        Easy & Quick sign up for members, with minimal input from Federations.<br/>
                        Manage Members and Events with a few clicks.<br/>
                        Gain insights into your officials performances.<br/>
                      </p>
                    </div>
                    <div>
                      <h5 className="mmappHeadingReveal py-6 text-[var(--purple-250)]">
                        The “Judge” app
                      </h5>
                      <p className="mmappBlockReveal leading-[2.1rem] md:leading-[2.5rem] text-left">
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
                      <p className="mmappBlockReveal leading-[2.1rem] md:leading-[2.5rem] text-left">
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
                  <div className="flex justify-start items-start md:w-[35%]">
                    <picture className="ourExpertiseImg md:block">
                      <img
                        className="landscape:h-full max-h-[95vh] z-10 object-contain self-start md:px-2 md:pt-6"
                        src="/images/ourExpertise/iphone-12-black.webp"
                        srcSet="
                          /images/ourExpertise/srcset/iphone-12-black-480w.webp 480w,
                          /images/ourExpertise/srcset/iphone-12-black-640w.webp 640w,
                          /images/ourExpertise/srcset/iphone-12-black-768w.webp 768w,
                          /images/ourExpertise/srcset/iphone-12-black-1024w.webp 1024w,
                          /images/ourExpertise/srcset/iphone-12-black-1280w.webp 1280w"
                        alt="MMAPP features on iPhone"/>
                    </picture>
                  </div>
                </>
              }

            </div>
          </MainFC>
        </section>

        <div className="borderBottom"></div>

        <section id="Features" className="py-32 md:py-40 lg:py-52">

          <h5 className="mmappBlockReveal mb-4 md:mb-8 lg:mb-12 text-neutral-200 text-center deboss">
            Features
          </h5>

          {isUnder768||isMobileOnly ? '' : 
            <HomeFeaturesR3F onLoaded={createScrollTriggerWhenHomeFeaturesR3FLoaded} />
          }

          {/* // Dashboard */}
          <div id="featuresDashboard" className="visible md:invisible featuresDashboard flex justify-center">
            <div className={clsx(
              "w-full h-full flex flex-col md:flex-row relative justify-center",
              "rounded-[3rem] mx-1 md:mx-10 lg:mx-[4rem] px-2 md:px-10 lg:px-20 xl:px-24 py-28 md:py-32 lg:py-32 ring-1 ring-white/5" // xl:mx-[8rem] 2xl:mx-[13.5rem]
            )}>

              <FeaturesCallToActionFederations
                id="dashboardFeaturesCallToActionFederationsWrapper"
                className=""
                leftOrRight="left"
              />

              <div className="flex flex-col z-20 text-left">

                <div id="featuresDashboardTitle" className="flex portrait:flex-col landscape:flex-col landscape:md:flex-row justify-start items-center z-20 text-left mmappBlockReveal">
                  <h2 className="text-2xl md:text-[6.2rem] lg:text-[7.4rem] xl:text-[9.2rem] 2xl:text-[9.2rem] text-transparent bg-clip-text bg-gradient-to-br from-[var(--purple-250)] to-purple-100 pb-2 landscape:pr-0 landscape:md:pr-12 portrait:pr-0">
                    Federations
                  </h2>
                  <div className="flex flex-row justify-start items-center mmappBlockReveal">
                    <h6 className="text-[1.55rem] md:text-[2.6rem] lg:text-[3rem] xl:text-[4rem] 2xl:text-[4rem] text-transparent bg-clip-text bg-gradient-to-tl from-[var(--purple-250)] to-purple-100 pb-2 pr-8 portrait:hidden landscape:hidden landscape:md:block">
                      ➤
                    </h6>
                    <h4 className="text-lg md:text-[3.2rem] lg:text-[4.2rem] xl:text-[5.4rem] 2xl:text-[5.4rem] text-transparent bg-clip-text bg-gradient-to-tl from-[var(--purple-250)] to-purple-100 pb-2 text-center md:text-left">
                      Dashboard App
                    </h4>
                  </div>
                  {isUnder768||isMobileOnly ? '' : <ProgressCircle id="dashboardProgressCircle" leftOrRight="left"/>}
                </div>

                <FeaturesCard className="dashboardCard z-10">
                  <FeaturesCardHeader className="featuresDashboardHeaderItem" leftOrRight='left'>
                    <FeaturesCardTitle className="featuresDashboardTitle">
                      Overview of Federation Affairs
                    </FeaturesCardTitle>
                    <FeaturesCardDescription className="featuresDashboardDescription">
                      Relevant information for everyday management viewable at a glance in the Overview screen.
                    </FeaturesCardDescription>
                    {isMobileOnly && isAndroid ? 
                      <FeaturesCardImage
                        className="featuresDashboardImage"
                        src="/images/features/federationsDashboard/featuresFederationsDashboard-1.webp"
                        srcSet="
                          /images/features/federationsDashboard/srcset/featuresFederationsDashboard-1-480w.webp 480w,
                          /images/features/federationsDashboard/srcset/featuresFederationsDashboard-1-640.webp 640w,
                          /images/features/federationsDashboard/srcset/featuresFederationsDashboard-1-768.webp 768w,
                          /images/features/federationsDashboard/srcset/featuresFederationsDashboard-1-1024w.webp 1024w,
                          /images/features/federationsDashboard/srcset/featuresFederationsDashboard-1-1280w.webp 1280w"
                        alt="features Federations Dashboard image"
                      /> 
                    :
                      <FeaturesCardVideo
                        className="featuresDashboardVideo"
                        src={dashboardVideos[0]}
                        id="features Federations Dashboard video"
                      />
                    }
                  </FeaturesCardHeader>
                </FeaturesCard>

                <FeaturesCard className="dashboardCard z-10">
                  <FeaturesCardHeader className="featuresDashboardHeaderItem" leftOrRight='left'>
                    <FeaturesCardTitle className="featuresDashboardTitle">
                      Visual Reports with Actionable Insights
                    </FeaturesCardTitle>
                    <FeaturesCardDescription className="featuresDashboardDescription">
                      Gain a better understanding on judge scoring and the differences between your officials, to create a more cohesive team.
                    </FeaturesCardDescription>
                    {isMobileOnly && isAndroid ? 
                      <FeaturesCardImage
                        className="featuresDashboardImage"
                        src="/images/features/federationsDashboard/featuresFederationsDashboard-2.webp"
                        srcSet="
                          /images/features/federationsDashboard/srcset/featuresFederationsDashboard-2-480w.webp 480w,
                          /images/features/federationsDashboard/srcset/featuresFederationsDashboard-2-640.webp 640w,
                          /images/features/federationsDashboard/srcset/featuresFederationsDashboard-2-768.webp 768w,
                          /images/features/federationsDashboard/srcset/featuresFederationsDashboard-2-1024w.webp 1024w,
                          /images/features/federationsDashboard/srcset/featuresFederationsDashboard-2-1280w.webp 1280w"
                        alt="features Federations Dashboard image"
                      /> 
                    :
                      <FeaturesCardVideo
                        className="featuresDashboardVideo"
                        src={dashboardVideos[1]}
                        id="features Federations Dashboard video"
                      />
                    }
                  </FeaturesCardHeader>
                </FeaturesCard>

                <FeaturesCard className="dashboardCard z-10">
                  <FeaturesCardHeader className="featuresDashboardHeaderItem" leftOrRight='left'>
                    <FeaturesCardTitle className="featuresDashboardTitle">
                      Easy Form Management and Sign-up process for all your members
                    </FeaturesCardTitle>
                    <FeaturesCardDescription className="featuresDashboardDescription">
                      Registering is as simple as filling out a form online, and managing them is even easier.
                    </FeaturesCardDescription>
                    {isMobileOnly && isAndroid ? 
                      <FeaturesCardImage
                        className="featuresDashboardImage"
                        src="/images/features/federationsDashboard/featuresFederationsDashboard-3.webp"
                        srcSet="
                          /images/features/federationsDashboard/srcset/featuresFederationsDashboard-3-480w.webp 480w,
                          /images/features/federationsDashboard/srcset/featuresFederationsDashboard-3-640.webp 640w,
                          /images/features/federationsDashboard/srcset/featuresFederationsDashboard-3-768.webp 768w,
                          /images/features/federationsDashboard/srcset/featuresFederationsDashboard-3-1024w.webp 1024w,
                          /images/features/federationsDashboard/srcset/featuresFederationsDashboard-3-1280w.webp 1280w"
                        alt="features Federations Dashboard image"
                      /> 
                    :
                      <FeaturesCardVideo
                        className="featuresDashboardVideo"
                        src={dashboardVideos[2]}
                        id="features Federations Dashboard video"
                      />
                    }
                  </FeaturesCardHeader>
                </FeaturesCard>

                <FeaturesCard className="dashboardCard z-10">
                  <FeaturesCardHeader className="featuresDashboardHeaderItem" leftOrRight='left'>
                    <FeaturesCardTitle className="featuresDashboardTitle">
                      Intuitive Member Management
                    </FeaturesCardTitle>
                    <FeaturesCardDescription className="featuresDashboardDescription">
                      Easily view and filter your members, according to your needs to quickly drill down on what’s important.
                    </FeaturesCardDescription>
                    {isMobileOnly && isAndroid ? 
                      <FeaturesCardImage
                        className="featuresDashboardImage"
                        src="/images/features/federationsDashboard/featuresFederationsDashboard-4.webp"
                        srcSet="
                          /images/features/federationsDashboard/srcset/featuresFederationsDashboard-4-480w.webp 480w,
                          /images/features/federationsDashboard/srcset/featuresFederationsDashboard-4-640.webp 640w,
                          /images/features/federationsDashboard/srcset/featuresFederationsDashboard-4-768.webp 768w,
                          /images/features/federationsDashboard/srcset/featuresFederationsDashboard-4-1024w.webp 1024w,
                          /images/features/federationsDashboard/srcset/featuresFederationsDashboard-4-1280w.webp 1280w"
                        alt="features Federations Dashboard image"
                      /> 
                    :
                      <FeaturesCardVideo
                        className="featuresDashboardVideo"
                        src={dashboardVideos[3]}
                        id="features Federations Dashboard video"
                      />
                    }
                  </FeaturesCardHeader>
                </FeaturesCard>

                <FeaturesCard className="dashboardCard z-10">
                  <FeaturesCardHeader className="featuresDashboardHeaderItem" leftOrRight='left'>
                    <FeaturesCardTitle className="featuresDashboardTitle">
                      International Database
                    </FeaturesCardTitle>
                    <FeaturesCardDescription className="featuresDashboardDescription">
                      Easily accessible foreign fighter profiles with competition eligibility allows Federations to approve athletes instantly, and athletes to travel abroad carefree.
                    </FeaturesCardDescription>
                    {isMobileOnly && isAndroid ? 
                      <FeaturesCardImage
                        className="featuresDashboardImage"
                        src="/images/features/federationsDashboard/featuresFederationsDashboard-5.webp"
                        srcSet="
                          /images/features/federationsDashboard/srcset/featuresFederationsDashboard-5-480w.webp 480w,
                          /images/features/federationsDashboard/srcset/featuresFederationsDashboard-5-640.webp 640w,
                          /images/features/federationsDashboard/srcset/featuresFederationsDashboard-5-768.webp 768w,
                          /images/features/federationsDashboard/srcset/featuresFederationsDashboard-5-1024w.webp 1024w,
                          /images/features/federationsDashboard/srcset/featuresFederationsDashboard-5-1280w.webp 1280w"
                        alt="features Federations Dashboard image"
                      /> 
                    :
                      <FeaturesCardVideo
                        className="featuresDashboardVideo"
                        src={dashboardVideos[4]}
                        id="features Federations Dashboard video"
                      />
                    }
                  </FeaturesCardHeader>
                </FeaturesCard>

                <CallToActionFederationsButton className="flex md:hidden w-full pt-20" />

              </div>
            </div>
          </div>

          {/* // Judge */}
          <div id="featuresJudge" className="visible md:invisible featuresJudge flex justify-center">
            <div className={clsx(
              "w-full h-full flex flex-col md:flex-row relative justify-center",
              "rounded-[3rem] mx-1 md:mx-[4rem] px-2 md:px-10 lg:px-20 xl:px-24 py-28 md:py-32 lg:py-32 ring-1 ring-white/5" // xl:mx-[8rem] 2xl:mx-[13.5rem]
            )}>

              <FeaturesCallToActionFederations
                id="judgeFeaturesCallToActionFederationsWrapper"
                className=""
                leftOrRight="right"
              />

              <div className="flex flex-col z-20 text-right">

                <div id="featuresJudgeTitle" className="flex portrait:flex-col-reverse landscape:flex-col-reverse landscape:md:flex-row justify-end items-center z-20 text-right">
                  <div className="flex flex-row justify-end items-center mmappBlockReveal">
                    <h4 className="text-lg md:text-[3.2rem] lg:text-[4.2rem] xl:text-[5.4rem] 2xl:text-[5.4rem] text-transparent bg-clip-text bg-gradient-to-tr from-[var(--purple-250)] to-purple-100 pb-2 md:pb-4 text-center md:text-right">
                      Judge App
                    </h4>
                    <h6 className="text-[1.55rem] md:text-[2.6rem] lg:text-[3rem] xl:text-[4rem] 2xl:text-[4rem] text-transparent bg-clip-text bg-gradient-to-tr from-[var(--purple-250)] to-purple-100 pb-2 pr-8 rotate-180 portrait:hidden landscape:hidden landscape:md:block">
                      ➤
                    </h6>
                  </div>
                  <h2 className="text-2xl md:text-[6.2rem] lg:text-[7.4rem] xl:text-[9.2rem] 2xl:text-[9.2rem] text-transparent bg-clip-text bg-gradient-to-bl from-[var(--purple-250)] to-purple-100 pb-2 landscape:pl-0 landscape:md:pl-12 portrait:pr-0 mmappBlockReveal">
                    Officials
                  </h2>
                {isUnder768||isMobileOnly ? '' : <ProgressCircle id="judgeProgressCircle" leftOrRight="right"/>}
                </div>


                <FeaturesCard className="judgeCard z-10">
                  <FeaturesCardHeader className="featuresJudgeHeaderItem" leftOrRight='right'>
                    <FeaturesCardTitle className="featuresJudgeTitle">
                      Personalized Fight Card
                    </FeaturesCardTitle>
                    <FeaturesCardDescription className="featuresJudgeDescription">
                      Even with last-minute changes, officials have their upcoming roles and fight rules at their fingertips.
                    </FeaturesCardDescription>
                    {isMobileOnly && isAndroid ? 
                      <FeaturesCardImage
                        className="featuresJudgeImage"
                        src="/images/features/officialsJudge/featuresOfficialsJudge-1.webp"
                        srcSet="
                          /images/features/officialsJudge/srcset/featuresOfficialsJudge-1-480w.webp 480w,
                          /images/features/officialsJudge/srcset/featuresOfficialsJudge-1-640.webp 640w,
                          /images/features/officialsJudge/srcset/featuresOfficialsJudge-1-768.webp 768w,
                          /images/features/officialsJudge/srcset/featuresOfficialsJudge-1-1024w.webp 1024w,
                          /images/features/officialsJudge/srcset/featuresOfficialsJudge-1-1280w.webp 1280w"
                        alt="features Officials Judge image"
                      /> 
                    :
                      <FeaturesCardVideo
                        className="featuresJudgeVideo"
                        src={judgeVideos[0]}
                        id="features Officials Judge video"
                      />
                    }
                  </FeaturesCardHeader>
                </FeaturesCard>

                <FeaturesCard className="judgeCard z-10">
                  <FeaturesCardHeader className="featuresJudgeHeaderItem" leftOrRight='right'>
                    <FeaturesCardTitle className="featuresJudgeTitle">
                      Informed Decisions, for longer
                    </FeaturesCardTitle>
                    <FeaturesCardDescription className="featuresJudgeDescription">
                      With an analysis of their own evaluation of the fight provided immediately after each round, officials are able to make better decisions, with less pressure, and provide support for their scoring.
                    </FeaturesCardDescription>
                    {isMobileOnly && isAndroid ? 
                      <FeaturesCardImage
                        className="featuresJudgeImage"
                        src="/images/features/officialsJudge/featuresOfficialsJudge-2.webp"
                        srcSet="
                          /images/features/officialsJudge/srcset/featuresOfficialsJudge-2-480w.webp 480w,
                          /images/features/officialsJudge/srcset/featuresOfficialsJudge-2-640.webp 640w,
                          /images/features/officialsJudge/srcset/featuresOfficialsJudge-2-768.webp 768w,
                          /images/features/officialsJudge/srcset/featuresOfficialsJudge-2-1024w.webp 1024w,
                          /images/features/officialsJudge/srcset/featuresOfficialsJudge-2-1280w.webp 1280w"
                        alt="features Officials Judge image"
                      /> 
                    :
                      <FeaturesCardVideo
                        className="featuresJudgeVideo"
                        src={judgeVideos[1]}
                        id="features Officials Judge video"
                      />
                    }
                  </FeaturesCardHeader>
                </FeaturesCard>

                <FeaturesCard className="judgeCard z-10">
                  <FeaturesCardHeader className="featuresJudgeHeaderItem" leftOrRight='right'>
                    <FeaturesCardTitle className="featuresJudgeTitle">
                      Instant Scorecard Submission
                    </FeaturesCardTitle>
                    <FeaturesCardDescription className="featuresJudgeDescription">
                      Once a decision has been made, officials can instantly submit their scores to the RecordKeeper for scorecard calculation and archival.
                    </FeaturesCardDescription>
                    {isMobileOnly && isAndroid ? 
                      <FeaturesCardImage
                        className="featuresJudgeImage"
                        src="/images/features/officialsJudge/featuresOfficialsJudge-3.webp"
                        srcSet="
                          /images/features/officialsJudge/srcset/featuresOfficialsJudge-3-480w.webp 480w,
                          /images/features/officialsJudge/srcset/featuresOfficialsJudge-3-640.webp 640w,
                          /images/features/officialsJudge/srcset/featuresOfficialsJudge-3-768.webp 768w,
                          /images/features/officialsJudge/srcset/featuresOfficialsJudge-3-1024w.webp 1024w,
                          /images/features/officialsJudge/srcset/featuresOfficialsJudge-3-1280w.webp 1280w"
                        alt="features Officials Judge image"
                      /> 
                    :
                      <FeaturesCardVideo
                        className="featuresJudgeVideo"
                        src={judgeVideos[2]}
                        id="features Officials Judge video"
                      />
                    }
                  </FeaturesCardHeader>
                </FeaturesCard>

                <FeaturesCard className="judgeCard z-10">
                  <FeaturesCardHeader className="featuresJudgeHeaderItem" leftOrRight='right'>
                    <FeaturesCardTitle className="featuresJudgeTitle">
                      Deeper Scoring discussions and debates
                    </FeaturesCardTitle>
                    <FeaturesCardDescription className="featuresJudgeDescription">
                      With a consistent and coherent methodology, with common baselines, officials are able to discuss fight and techniques with precision never before possible.
                    </FeaturesCardDescription>
                    {isMobileOnly && isAndroid ? 
                      <FeaturesCardImage
                        className="featuresJudgeImage"
                        src="/images/features/officialsJudge/featuresOfficialsJudge-4.webp"
                        srcSet="
                          /images/features/officialsJudge/srcset/featuresOfficialsJudge-4-480w.webp 480w,
                          /images/features/officialsJudge/srcset/featuresOfficialsJudge-4-640.webp 640w,
                          /images/features/officialsJudge/srcset/featuresOfficialsJudge-4-768.webp 768w,
                          /images/features/officialsJudge/srcset/featuresOfficialsJudge-4-1024w.webp 1024w,
                          /images/features/officialsJudge/srcset/featuresOfficialsJudge-4-1280w.webp 1280w"
                        alt="features Officials Judge image"
                      /> 
                    :
                      <FeaturesCardVideo
                        className="featuresJudgeVideo"
                        src={judgeVideos[3]}
                        id="features Officials Judge video"
                      />
                    }
                  </FeaturesCardHeader>
                </FeaturesCard>

                <FeaturesCard className="judgeCard z-10">
                  <FeaturesCardHeader className="featuresJudgeHeaderItem" leftOrRight='right'>
                    <FeaturesCardTitle className="featuresJudgeTitle">
                      Training Mode
                    </FeaturesCardTitle>
                    <FeaturesCardDescription className="featuresJudgeDescription">
                    Training mode offers officials the ability to create their own Fights, Improve their skills and share fight assessments with their colleagues.
                    </FeaturesCardDescription>
                    {isMobileOnly && isAndroid ? 
                      <FeaturesCardImage
                        className="featuresJudgeImage"
                        src="/images/features/officialsJudge/featuresOfficialsJudge-5.webp"
                        srcSet="
                          /images/features/officialsJudge/srcset/featuresOfficialsJudge-5-480w.webp 480w,
                          /images/features/officialsJudge/srcset/featuresOfficialsJudge-5-640.webp 640w,
                          /images/features/officialsJudge/srcset/featuresOfficialsJudge-5-768.webp 768w,
                          /images/features/officialsJudge/srcset/featuresOfficialsJudge-5-1024w.webp 1024w,
                          /images/features/officialsJudge/srcset/featuresOfficialsJudge-5-1280w.webp 1280w"
                        alt="features Officials Judge image"
                      /> 
                    :
                      <FeaturesCardVideo
                        className="featuresJudgeVideo"
                        src={judgeVideos[4]}
                        id="features Officials Judge video"
                      />
                    }
                  </FeaturesCardHeader>
                </FeaturesCard>

                <CallToActionFederationsButton className="flex md:hidden w-full pt-20" />

              </div>
            </div>
          </div>

          {/* // RecordKeeper */}
          <div id="featuresRecordKeeper" className="visible md:invisible featuresRecordKeeper flex justify-center">
            <div className={clsx(
              "w-full h-full flex flex-col md:flex-row relative justify-center",
              "rounded-[3rem] mx-1 md:mx-[4rem] px-2 md:px-10 lg:px-20 xl:px-24 py-28 md:py-32 lg:py-32 ring-1 ring-white/5" // xl:mx-[8rem] 2xl:mx-[13.5rem]
            )}>

              <FeaturesCallToActionFederations
                id="recordKeeperFeaturesCallToActionFederationsWrapper"
                className=""
                leftOrRight="left"
              />
              
              <div id="featuresRecordKeeperContainer" className="flex flex-col z-20 text-left">

                <div id="featuresRecordKeeperTitle" className="flex portrait:flex-col landscape:flex-col landscape:md:flex-row justify-start items-center z-20 text-left">
                  <h2 className="text-2xl md:text-[6.2rem] lg:text-[7.4rem] xl:text-[9.2rem] 2xl:text-[9.2rem] text-transparent bg-clip-text bg-gradient-to-br from-[var(--purple-250)] to-purple-100 pb-2 landscape:pr-0 landscape:md:pr-12 portrait:pr-0 mmappBlockReveal">
                    Officials
                  </h2>
                  <div className="flex flex-row justify-start items-center mmappBlockReveal">
                    <h6 className="text-[1.55rem] md:text-[2.6rem] lg:text-[3rem] xl:text-[4rem] 2xl:text-[4rem] text-transparent bg-clip-text bg-gradient-to-tl from-[var(--purple-250)] to-purple-100 pb-2 pr-8 portrait:hidden landscape:hidden landscape:md:block">
                      ➤
                    </h6>
                    <h4 className="text-lg md:text-[3.2rem] lg:text-[4.2rem] xl:text-[5.4rem] 2xl:text-[5.4rem] text-transparent bg-clip-text bg-gradient-to-tl from-[var(--purple-250)] to-purple-100 pb-2 text-center md:text-left">
                      RecordKeeper
                    </h4>
                  </div>
                  {isUnder768||isMobileOnly ? '' : <ProgressCircle id="recordKeeperProgressCircle" leftOrRight="left"/>}
                </div>

                <FeaturesCard className="recordKeeperCard z-10">
                  <FeaturesCardHeader className="featuresRecordKeeperHeaderItem" leftOrRight='left'>
                    <FeaturesCardTitle className="featuresRecordKeeperTitle">
                      Pre-filled in Information & Quick Edits
                    </FeaturesCardTitle>
                    <FeaturesCardDescription className="featuresRecordKeeperDescription">
                      All event & fight information is pre-filled and accessible, and any last minute change can be easily accomplished and instantly shared with everyone.
                    </FeaturesCardDescription>
                    {isMobileOnly && isAndroid ? 
                      <FeaturesCardImage
                        className="featuresRecordKeeperImage"
                        src="/images/features/officialsRecordKeeper/featuresOfficialsRecordKeeper-1.webp"
                        srcSet="
                          /images/features/officialsRecordKeeper/srcset/featuresOfficialsRecordKeeper-1-480w.webp 480w,
                          /images/features/officialsRecordKeeper/srcset/featuresOfficialsRecordKeeper-1-640.webp 640w,
                          /images/features/officialsRecordKeeper/srcset/featuresOfficialsRecordKeeper-1-768.webp 768w,
                          /images/features/officialsRecordKeeper/srcset/featuresOfficialsRecordKeeper-1-1024w.webp 1024w,
                          /images/features/officialsRecordKeeper/srcset/featuresOfficialsRecordKeeper-1-1280w.webp 1280w"
                        alt="features Officials RecordKeeper image"
                      /> 
                    :
                      <FeaturesCardVideo
                        className="featuresRecordKeeperVideo"
                        src={recordKeeperVideos[0]}
                        id="features Officials RecordKeeper video"
                      />
                    }
                  </FeaturesCardHeader>
                </FeaturesCard>

                <FeaturesCard className="recordKeeperCard z-10">
                  <FeaturesCardHeader className="featuresRecordKeeperHeaderItem" leftOrRight='left'>
                    <FeaturesCardTitle className="featuresRecordKeeperTitle">
                      Effortlessly record all relevant details
                    </FeaturesCardTitle>
                    <FeaturesCardDescription className="featuresRecordKeeperDescription">
                      From reason for breaks or point deduction to submission types, everything is recorded, with no extra effort.
                    </FeaturesCardDescription>
                    {isMobileOnly && isAndroid ? 
                      <FeaturesCardImage
                        className="featuresRecordKeeperImage"
                        src="/images/features/officialsRecordKeeper/featuresOfficialsRecordKeeper-2.webp"
                        srcSet="
                          /images/features/officialsRecordKeeper/srcset/featuresOfficialsRecordKeeper-2-480w.webp 480w,
                          /images/features/officialsRecordKeeper/srcset/featuresOfficialsRecordKeeper-2-640.webp 640w,
                          /images/features/officialsRecordKeeper/srcset/featuresOfficialsRecordKeeper-2-768.webp 768w,
                          /images/features/officialsRecordKeeper/srcset/featuresOfficialsRecordKeeper-2-1024w.webp 1024w,
                          /images/features/officialsRecordKeeper/srcset/featuresOfficialsRecordKeeper-2-1280w.webp 1280w"
                        alt="features Officials RecordKeeper image"
                      /> 
                    :
                      <FeaturesCardVideo
                        className="featuresRecordKeeperVideo"
                        src={recordKeeperVideos[1]}
                        id="features Officials RecordKeeper video"
                      />
                    }
                  </FeaturesCardHeader>
                </FeaturesCard>

                <FeaturesCard className="recordKeeperCard z-10">
                  <FeaturesCardHeader className="featuresRecordKeeperHeaderItem" leftOrRight='left'>
                    <FeaturesCardTitle className="featuresRecordKeeperTitle">
                      Automatic timing duties
                    </FeaturesCardTitle>
                    <FeaturesCardDescription className="featuresRecordKeeperDescription">
                      Flawlessly perform all timing duties with a push of a button. Record Round time, Break Time, Breaks, Point Deductions and more.
                    </FeaturesCardDescription>
                    {isMobileOnly && isAndroid ? 
                      <FeaturesCardImage
                        className="featuresRecordKeeperImage"
                        src="/images/features/officialsRecordKeeper/featuresOfficialsRecordKeeper-3.webp"
                        srcSet="
                          /images/features/officialsRecordKeeper/srcset/featuresOfficialsRecordKeeper-3-480w.webp 480w,
                          /images/features/officialsRecordKeeper/srcset/featuresOfficialsRecordKeeper-3-640.webp 640w,
                          /images/features/officialsRecordKeeper/srcset/featuresOfficialsRecordKeeper-3-768.webp 768w,
                          /images/features/officialsRecordKeeper/srcset/featuresOfficialsRecordKeeper-3-1024w.webp 1024w,
                          /images/features/officialsRecordKeeper/srcset/featuresOfficialsRecordKeeper-3-1280w.webp 1280w"
                        alt="features Officials RecordKeeper image"
                      /> 
                    :
                      <FeaturesCardVideo
                        className="featuresRecordKeeperVideo"
                        src={recordKeeperVideos[2]}
                        id="features Officials RecordKeeper video"
                      />
                    }
                  </FeaturesCardHeader>
                </FeaturesCard>

                <FeaturesCard className="recordKeeperCard z-10">
                  <FeaturesCardHeader className="featuresRecordKeeperHeaderItem" leftOrRight='left'>
                    <FeaturesCardTitle className="featuresRecordKeeperTitle">
                      Action Notifications
                    </FeaturesCardTitle>
                    <FeaturesCardDescription className="featuresRecordKeeperDescription">
                      Get alerted when a task must be performed such as sounding the clack for the final 10s, or to remove corners from the cage.
                    </FeaturesCardDescription>
                    {isMobileOnly && isAndroid ? 
                      <FeaturesCardImage
                        className="featuresRecordKeeperImage"
                        src="/images/features/officialsRecordKeeper/featuresOfficialsRecordKeeper-4.webp"
                        srcSet="
                          /images/features/officialsRecordKeeper/srcset/featuresOfficialsRecordKeeper-4-480w.webp 480w,
                          /images/features/officialsRecordKeeper/srcset/featuresOfficialsRecordKeeper-4-640.webp 640w,
                          /images/features/officialsRecordKeeper/srcset/featuresOfficialsRecordKeeper-4-768.webp 768w,
                          /images/features/officialsRecordKeeper/srcset/featuresOfficialsRecordKeeper-4-1024w.webp 1024w,
                          /images/features/officialsRecordKeeper/srcset/featuresOfficialsRecordKeeper-4-1280w.webp 1280w"
                        alt="features Officials RecordKeeper image"
                      /> 
                    :
                      <FeaturesCardVideo
                        className="featuresRecordKeeperVideo"
                        src={recordKeeperVideos[3]}
                        id="features Officials RecordKeeper video"
                      />
                    }
                  </FeaturesCardHeader>
                </FeaturesCard>

                <FeaturesCard className="recordKeeperCard z-10">
                  <FeaturesCardHeader className="featuresRecordKeeperHeaderItem" leftOrRight='left'>
                    <FeaturesCardTitle className="featuresRecordKeeperTitle">
                      Instant Score Delivery and Calculation
                    </FeaturesCardTitle>
                    <FeaturesCardDescription className="featuresRecordKeeperDescription">
                      Never collect scores at the end of each round or fumble with a calculator. Scores are instantly received from judges and automatically calculated.
                    </FeaturesCardDescription>
                    {isMobileOnly && isAndroid ? 
                      <FeaturesCardImage
                        className="featuresRecordKeeperImage"
                        src="/images/features/officialsRecordKeeper/featuresOfficialsRecordKeeper-5.webp"
                        srcSet="
                          /images/features/officialsRecordKeeper/srcset/featuresOfficialsRecordKeeper-5-480w.webp 480w,
                          /images/features/officialsRecordKeeper/srcset/featuresOfficialsRecordKeeper-5-640.webp 640w,
                          /images/features/officialsRecordKeeper/srcset/featuresOfficialsRecordKeeper-5-768.webp 768w,
                          /images/features/officialsRecordKeeper/srcset/featuresOfficialsRecordKeeper-5-1024w.webp 1024w,
                          /images/features/officialsRecordKeeper/srcset/featuresOfficialsRecordKeeper-5-1280w.webp 1280w"
                        alt="features Officials RecordKeeper image"
                      /> 
                    :
                      <FeaturesCardVideo
                        className="featuresRecordKeeperVideo"
                        src={recordKeeperVideos[4]}
                        id="features Officials RecordKeeper video"
                      />
                    }
                  </FeaturesCardHeader>
                </FeaturesCard>

                <CallToActionFederationsButton className="flex md:hidden w-full pt-20" />

                <CardPoliciesButton
                  id="featuresRecordKeeperBottomButton"
                  href="/product"
                  data-page="/product"
                  data-link="#MMAPP-Methodology"
                  className="w-fit px-14 mx-auto mt-20 md:mt-24 portrait:md:mt-20"
                >
                  Learn more in our product page<span aria-hidden="true" className="pl-2"> →</span>
                </CardPoliciesButton>

              </div>
            </div>
          </div>

        </section>

        <div className="borderBottom featuresRecordKeeperBottom"></div>

        <section id="Benefits" className='z-20 flex flex-col justify-center items-center benefits py-32 md:py-40 lg:py-52'>
          <div className="flex flex-col justify-center items-center mb-4 md:mb-8 lg:mb-12 mx-1 md:mx-[4rem] xl:mx-[8rem] 2xl:mx-[13.5rem] 3xl:min-w-[1536px] 3xl:mx-auto">
            <h5 className="mmappBlockReveal mb-7 md:mb-8 lg:mb-10 text-neutral-200 text-center deboss">
              Benefits for everyone else
            </h5>
            <h3 id="featuresJudgeTitle" className="mmappHeadingReveal text-[var(--purple-250)] text-center py-1 md:py-2 mb-7 md:mb-8 lg:mb-10 w-[95%] md:w-[90%] lg:w-[100%] max-w-[1200px]">
            Athletes, Coaches, Clubs and Promoters also benefit from using MMAPP
            </h3>
            <p className="mmappBlockReveal text-center w-[95%] md:w-[60%] mb-8 md:mb-10 lg:mb-12">
              Choose your category below to find out how you stand to gain
            </p>
          </div>
          <Benefits />

          <CallToActionButton className="mmappBlockReveal mt-[5vw]" btnLabel="I want my Federation to join MMAPP" />
        </section>

        <div className="borderBottom"></div>


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