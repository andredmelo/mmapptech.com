"use client"
import React, { useEffect, useRef, useState, useTransition, useMemo } from "react";
import { preload } from 'react-dom';
import { clsx } from "clsx";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import CustomEase from 'gsap/CustomEase';
import verticalLoop from '@/components/VerticalLoop';
import { useMediaQuery } from '@react-hook/media-query';
import { isMobile, isMobileOnly, isAndroid, isWinPhone, isIOS, isSamsungBrowser } from 'react-device-detect';

import ContactUs from '@/app/contact/contact-us'
import CallToActionButton from '@/components/ui/CallToActionButton'
import CallToActionFederationsButton from '@/components/ui/CallToActionFederationsButton'
import PagesTransitionScroll from '@/lib/contexts/PagesTransitionScroll';
import { MmappBlockReveal, MmappHeadingReveal, MmappParagraphsReveal, MmappParagraphsRevealRight, MmappSequentialParagraphsReveal } from '@/components/ui/mainAnimations';

import { MainFC, MainFCTitle, MainFCHeading, MainFCDescription } from '@/components/ui/mainFunctionalComponent'
import { ProductFC, ProductFCTitle, ProductFCHeading, ProductFCDescription } from '@/components/ui/productFunctionalComponent'
import TabButtonProductJudge from '@/components/ui/tab-button-product-judge'
import TabButtonProductRecordKeeper from '@/components/ui/tab-button-product-RecordKeeper'
import { ProductTitlesItem, ProductDashboardTitles, ProductDashboardMembersTitles } from '@/components/ui/productTitlesFC'


/* interface TemplateProps {
  smoother: {
    scrollTo: (target: string, animate: boolean, position: string) => void;
  };
} */

gsap.registerPlugin(gsap, useGSAP, ScrollTrigger, DrawSVGPlugin, CustomEase);

const Product = () => {

  const isLandscape = useMediaQuery('(orientation: landscape)');
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const isUnder768 = useMediaQuery('(max-width: 767px)');
  //const isOver1536 = useMediaQuery('(min-width: 1536px)');

  const [activeTabProductJudge, setActiveTabProductJudge] = useState('ProductJudge1')
  const [activeTabProductRecordKeeper, setActiveTabProductRecordKeeper] = useState('ProductRecordKeeper1')
  const [isPending, startTransition] = useTransition()
  const [preloadedImages, setPreloadedImages] = useState({});
  const [isLoading, setIsLoading] = useState(false); //image loading state


  preload("/images/product/hero/luizimag3_2876.webp", {
    as: "image",
    imageSrcSet: "/images/product/hero/srcset/luizimag3_2876-480w.webp 480w, /images/product/hero/srcset/luizimag3_2876-640w.webp 640w, /images/product/hero/srcset/luizimag3_2876-768w.webp 768w, /images/product/hero/srcset/luizimag3_2876-1024w.webp 1024w, /images/product/hero/srcset/luizimag3_2876-1280w.webp 1280w",
  });

  // Main Animations ready check
  const [animationsReady, setAnimationsReady] = useState(false);
  const [readyCount, setReadyCount] = useState(0);
  const handleAnimationReady = () => {
    setReadyCount(prevCount => prevCount + 1);
  };
  useEffect(() => {
    if (readyCount === 5) { // Assuming there are 5 animation components
      setAnimationsReady(true);
    }
  }, [readyCount]);


  // Judge and RecordKeeper titles
  const descriptionSrcMapJudge: Record<string, string> = {
    'ProductJudge1': 'Assess Fights with the MMAPP Methodology',
    'ProductJudge2': 'Submit Scores Instantly',
    'ProductJudge3': 'Personalised Fight Card',
    'ProductJudge4': 'Practice at Home',
    'ProductJudge5': 'Share your results with your colleagues',
    'ProductJudge6': 'Personal Lifetime archive of your results',
  };

  const descriptionSrcMapRecordKeeper: Record<string, string> = {
    'ProductRecordKeeper1': 'Master Timing duties like never before',
    'ProductRecordKeeper2': 'Record every fight detail Number of Breaks, Break Duration, Reasons for Point deductions, etc.',
    'ProductRecordKeeper3': 'Receive and Calculate scorecards automatically and get the results instantly',
    'ProductRecordKeeper4': 'Automatically send the results to the Federation',
  };

  // Dashboard and Dashboard Members titles
  const productDashboardItems: ProductTitlesItem[] = [
    { header: "User-friendly interface" },
    { header: "Straightforward registration form management" },
    { header: "Easily approve or reject Applications" },
    { header: "Deep analysis on fights and scoring" },
    { header: "Intuitive Reports and Insights" },
    { header: "Seamless Event Approval Process" },
    { header: "Paperless management" },
  ];

  const productDashboardMembersItems: ProductTitlesItem[] = [
    { header: "Quick sign-up process" },
    { header: "Intuitive Profile Management" },
    { header: "Multi-user management for Clubs and Coaches" },
    { header: "View Membership standing - Documents in order, information updated, etc." },
    { header: "Receive reminders for document expiration" },
    { header: "Competition Eligilibillity status for Athletes and Coaches" },
    { header: "Athletes are part of a centralized athlete database, available to Promoters" },
    { header: "Promoters can Submit Event hosting applications to Federations in under 5 minutes" },
    { header: "Promoters can view all athletes registered with the Federation, eligible for competitions" },
    { header: "View Scheduled Fights" },
    { header: "View Lifetime career history and statistics" },
  ];

  // Judge and RecordKeeper images loading
  useEffect(() => {
    const imagesJudge = ['ProductJudge1', 'ProductJudge2', 'ProductJudge3', 'ProductJudge4', 'ProductJudge5', 'ProductJudge6'];
    const imagesRecordKeeper = ['ProductRecordKeeper1', 'ProductRecordKeeper2', 'ProductRecordKeeper3', 'ProductRecordKeeper4'];
    const newPreloadedImages: Record<string, HTMLImageElement> = {};

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
      let matchMedia = gsap.matchMedia();

      matchMedia.add("(orientation: portrait)", () => {
        const drawMainPathPortrait = setInterval(() => {
          if (document.getElementById('MMAPP-Methodology') && document.getElementById('Judge') && document.getElementById('RecordKeeper') && document.getElementById('Dashboard') && document.getElementById('Dashboard-Members')) {
            clearInterval(drawMainPathPortrait);
            let drawMainPath0 = gsap.timeline({
              defaults: {
                ease: "power1.in",//
              },
              scrollTrigger: {
                trigger: "#MMAPP-Methodology",
                start: "bottom 80%",
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
              .from("#mainPathTouchMD-0", { drawSVG: 0 }, 0)
              //.to(".ball01", { motionPath: { path: "#path", align: '#path', alignOrigin: [0.5, 0.5] } }, 0 )
              /* .add(() => {
                if (action.scrollTrigger.direction === -1) { // if scrolling backwards, reverse the dot animation
                  dotAnimation.reverse();
                } else { // if scrolling forward, play forward
                  dotAnimation.play();
                }
              }, 2.48); */
            let drawMainPathTablet1 = gsap.timeline({
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
              .from("#mainPathTouchMD-1", { drawSVG: 0 }, 0)

            let drawMainPathTablet2 = gsap.timeline({
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
              .from("#mainPathTouchMD-2", { drawSVG: 0 }, 0)

            let drawMainPathTablet3 = gsap.timeline({
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
              .from("#mainPathTouchMD-3", { drawSVG: 0 }, 0)

            let drawMainPathTablet4 = gsap.timeline({
              defaults: {
                ease: CustomEase.create("custom", "M0,0 C0.036,0.256 0.392,0.277 0.5,0.4 0.669,0.595 0.614,0.545 0.754,0.706 0.805,0.765 1,0.851 1,1 "),
              },
              scrollTrigger: {
                trigger: "#Dashboard-Members",
                start: "top top",
                end: "80% bottom",
                scrub: 1,
                /* markers:true, */
                preventOverlaps:true,
              }
              })
              .from("#mainPathTouchMD-4", { drawSVG: 0 }, 0)


            ScrollTrigger.refresh()
            // ScrollTrigger to refresh the markers
            const bodyRefresh = setInterval(() => {
              if (document.querySelector("body")) {
                clearInterval(bodyRefresh);
                let scrollTriggerRefreshCount = 0;
                ScrollTrigger.create({
                  trigger: 'body',
                  start: 'top -20%',
                  onEnter: (self) => {
                    if (scrollTriggerRefreshCount < 10) {
                      //console.log('ScrollTriggerRefresh '+scrollTriggerRefreshCount);
                      ScrollTrigger.refresh();
                      scrollTriggerRefreshCount++;
                    }
                  }
                });
              }
            }, 100);
          }
        }, 50); // Check every 50ms
      });
      
      matchMedia.add("(orientation: landscape)", () => {
        const drawMainPathLandscape = setInterval(() => {
          if (document.getElementById('MMAPP-Methodology') && document.getElementById('Judge') && document.getElementById('RecordKeeper') && document.getElementById('Dashboard') && document.getElementById('Dashboard-Members')) {
            clearInterval(drawMainPathLandscape);
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
                end: "90% bottom",
                scrub: 1,
                /* markers:true, */
                preventOverlaps:true,
              }
              })
              .from("#mainPath-4", { drawSVG: 0 }, 0)


            ScrollTrigger.refresh()
            // ScrollTrigger to refresh the markers
            const bodyRefresh = setInterval(() => {
              if (document.querySelector("body")) {
                clearInterval(bodyRefresh);
                let scrollTriggerRefreshCount = 0;
                ScrollTrigger.create({
                  trigger: 'body',
                  start: 'top -20%',
                  onEnter: (self) => {
                    if (scrollTriggerRefreshCount < 10) {
                      //console.log('ScrollTriggerRefresh '+scrollTriggerRefreshCount);
                      ScrollTrigger.refresh();
                      scrollTriggerRefreshCount++;
                    }
                  }
                });
              }
            }, 100);
          }
        }, 50); // Check every 50ms
      });

        // Refresh ScrollTrigger when the page is scrolled
        /* let scrollTriggerRefreshCount = 0;
        let scrollListener = () => {
          if (scrollTriggerRefreshCount < 10) {
            ScrollTrigger.refresh();
            scrollTriggerRefreshCount++;
            console.log('ScrollTriggerRefresh '+scrollTriggerRefreshCount);
          } else {
            window.removeEventListener('scroll', scrollListener);
          }
        };
        window.addEventListener('scroll', scrollListener); */

      /* }); */

      // Product Dashboard Titles

      const productDashboardTitlesAnim = setInterval(() => {
        if (document.getElementById("productDashboardTitles")) {
          clearInterval(productDashboardTitlesAnim);

          const productDashboardTitles = gsap.utils.toArray("#productDashboardTitles")
          gsap.set(productDashboardTitles, { autoAlpha: 0 })
          const totalDashboardTitles = productDashboardTitles.length;
          const duration = 0.5; // duration of the animation in seconds
          const delay = 3; // delay before the next title appears
          let iteration = 0; // iteration counter for the infinite scrolling effect
          const revealTitles = () => {
            const currentTitle = productDashboardTitles[iteration] as EventTarget;
            gsap.from(currentTitle, {
              autoAlpha: 1,
              duration: duration,
              delay: delay,
              ease: "power1.out",
              onComplete: () => {
                iteration = (iteration + 1) % totalDashboardTitles;
                revealTitles();
              }
            });
          }
          revealTitles();

        }
      }, 50); // Check every 50ms

      // Product Dashboard Titles
        /* const productDashboardMembersTitles = gsap.utils.toArray("#productDashboardMembersTitles")
        gsap.set(productDashboardMembersTitles, { autoAlpha: 0 })
        const totalDashboardMembersTitles = productDashboardMembersTitles.length;
        const visibleTitlesCount = 5; // Number of titles to keep visible
        const moveDistance = 5.25; // Adjust based on your needs

        const showAndAnimateTitles = () => {
          // Make the first 4 titles visible and animate them
          for (let i = 0; i < visibleTitlesCount; i++) {
            const title = productDashboardMembersTitles[i] as HTMLElement;
            gsap.to(title as EventTarget, {
              autoAlpha: 1,
              //y: `-=${moveDistance * i}`+'vh',
              duration: 0.5,
              //delay: i * 0.5, // Delay each title slightly for sequential movement
              ease: "power1.out"
            });
            console.log(productDashboardMembersTitles[i].offsetTop)
          }

          // Function to handle the infinite scrolling effect
          const moveTitles = () => {
            // Move all titles up
            gsap.to(productDashboardMembersTitles, {
              y: `-=${moveDistance}`+'vw',
              duration: 0.5,
              ease: "power1.out",
              onComplete: () => {
                // After moving, hide the first (now off-screen) title, move it to the end, and reset its position
                const firstTitle = productDashboardMembersTitles.shift() as EventTarget; // Remove the first title
                gsap.set(firstTitle, { autoAlpha: 0, y: (5.25*totalDashboardMembersTitles)+`vw` }); // Reset its position and hide it
                productDashboardMembersTitles.push(firstTitle); // Add it back at the end

                // Make the new last title visible and move it into position
                const newLastTitle = productDashboardMembersTitles[visibleTitlesCount - 1] as EventTarget;
                gsap.to(newLastTitle, { autoAlpha: 1, y: `0vw`, duration: 0.5, ease: "power1.out" });
              }
            });
          };

          // Start moving titles every few seconds to create an infinite scroll effect
          gsap.timeline({ repeat: -1, repeatDelay: 3 })
            .call(moveTitles, [], '+=1'); // Adjust timing as needed
        };

        showAndAnimateTitles(); */

      const checkproductDashboardMembersTitlesAnim = setInterval(() => {
        if (document.querySelector(".productDashboardMembersTitles")) {
          clearInterval(checkproductDashboardMembersTitlesAnim);
          const productDashboardMembersTitles = gsap.utils.toArray(".productDashboardMembersTitles") as HTMLElement[];
          let activeElement: HTMLElement | undefined;
          let verticalLoopSpeed = isUnder768 ? 0.2 : 0.3;
          let activeTitlePosition = isPortrait ? false : true;
          const loop = verticalLoop(productDashboardMembersTitles, {
            paused: false,
            speed: verticalLoopSpeed,
            repeat: -1,
            draggable: true, // make it draggable
            center: activeTitlePosition, // active element is the one in the center of the container rather than the top edge
            onChange: (element: HTMLElement, index: number) => { // when the active element changes, this function gets called.
              //console.log(element);
              activeElement && activeElement.classList.remove("active");
              element.classList.add("active");
              activeElement = element;
            }
          });

          productDashboardMembersTitles.forEach((box: HTMLElement, i: number) => box.addEventListener("click", () => {
            loop.toIndex(i, {duration: 0.8, ease: "power1.inOut"});
            setTimeout(() => {
              loop.play();
            }, 3000); // 3000 milliseconds = 3 seconds
          }));
        }
      }, 50); // Check every 50ms


      // Judge Phone animations
      //let viewportTrigger = isPortrait ? '0% 95%' : '0% 90%';
      const checkjudgePhoneAnim = setInterval(() => {
        if (document.querySelector(".judgePhoneWrapper")) {
          clearInterval(checkjudgePhoneAnim);
          const judgePhoneAnim = gsap.timeline({
            paused:true,
            scrollTrigger: {
              trigger: '.judgePhoneWrapper',
              start: 'top bottom',
              end: '50% center',
              scrub: 1,
              once:true,
              //markers: true,
              //invalidateOnRefresh: true,
            },
          })
            .from('.judgePhone',
              {
                yPercent: 100,
                ease: "power2.out"
              })
        }
      }, 50); // Check every 50ms

      const checkProductJudgeButtonsAnim = setInterval(() => {
        if (document.querySelector(".judgePhoneWrapper") && document.querySelector(".ProductJudgeButtonLeft") && document.querySelector(".ProductJudgeButtonRight")) {
          clearInterval(checkProductJudgeButtonsAnim);
          let productJudgeButtonsAnimStart = isPortrait ? (isUnder768 ? '40%' : '30%') : '42%';
          const ProductJudgeButtonLeft: HTMLHeadingElement[] = gsap.utils.toArray('.ProductJudgeButtonLeft');
          const ProductJudgeButtonRight: HTMLHeadingElement[] = gsap.utils.toArray('.ProductJudgeButtonRight');
          const productJudgeButtonsAnim = gsap.timeline({
            paused:true,
            scrollTrigger: {
              trigger: '.judgePhoneWrapper',
              start: 'top '+productJudgeButtonsAnimStart,
              end: 'center center',
              scrub: 1,
              once:true,
              //markers: true,
              preventOverlaps:true,
            },
          })
            .fromTo(ProductJudgeButtonLeft,
              { xPercent: 120},
              { xPercent: 0, ease: "power1.out"}, 0
            )
            .fromTo(ProductJudgeButtonRight,
              { xPercent: -120},
              { xPercent: 0, ease: "power1.out"}, 0
            )
        }
      }, 50); // Check every 50ms

      // RecordKeeper Tablet animations

      const checkRrecordKeeperAnim = setInterval(() => {
        if (document.querySelector('.recordKeeperTabletWrapper') && document.querySelector('.recordKeeperTablet')) {
          clearInterval(checkRrecordKeeperAnim);
          let productRecordKeeperAnimFinish = isPortrait ? (isUnder768 ? '50%' : '38%') : '25%';
          let productRecordKeeperAnimEase = isPortrait ? "power2.in" : "power2.out";
          const recordKeeperAnim = gsap.timeline({
            paused:true,
            scrollTrigger: {
              trigger: '.recordKeeperTabletWrapper',
              start: 'top bottom',
              end: 'top '+productRecordKeeperAnimFinish,
              //markers: true,
              scrub: 1,
              once:true,
            },
          })
            .from('.recordKeeperTablet',
              {
                xPercent: 125,
                ease: productRecordKeeperAnimEase
              });
        };
      }, 50); // Check every 50ms


      matchMedia.add("(orientation: landscape)", () => {
        const checkRecordKeeperTabletWrapper = setInterval(() => {
          if (document.querySelector('.recordKeeperTabletWrapper') && document.querySelector('.ProductRecordKeeperButton')) {
            clearInterval(checkRecordKeeperTabletWrapper);
            const ProductRecordKeeperButtons: HTMLHeadingElement[] = gsap.utils.toArray('.ProductRecordKeeperButton');
            const productRecordKeeperButtonsAnim = gsap.timeline({
              paused:true,
              scrollTrigger: {
                trigger: '.recordKeeperTabletWrapper',
                start: 'top 48%',
                end: 'top 30%',
                scrub: 1,
                once:true,
                //markers: true,
                //preventOverlaps:true,
              },
            })
              .fromTo(ProductRecordKeeperButtons, { xPercent: -150}, { xPercent: 0, ease: "power1.out"})
          };
        }, 50); // Check every 50ms
      });

      matchMedia.add("(orientation: portrait)", () => {
        const checkRecordKeeperTabletWrapper = setInterval(() => {
          if (document.querySelector('.recordKeeperTabletWrapper')) {
            clearInterval(checkRecordKeeperTabletWrapper);
            const ProductRecordKeeperButtons: HTMLHeadingElement[] = gsap.utils.toArray('.ProductRecordKeeperButton');
            let productRecordKeeperButtonsAnimStart = isPortrait ? (isUnder768 ? '50%' : '38%') : '48%';
            let productRecordKeeperButtonsAnimFinish = isPortrait ? (isUnder768 ? '30%' : '30%') : '30%';
            const productRecordKeeperButtonsAnim = gsap.timeline({
              paused:true,
              scrollTrigger: {
                trigger: '.recordKeeperTabletWrapper',
                start: 'top '+productRecordKeeperButtonsAnimStart,
                end: 'top '+productRecordKeeperButtonsAnimFinish,
                scrub: 1,
                once:true,
                //markers: true,
                //preventOverlaps:true,
              },
            })
              .fromTo(ProductRecordKeeperButtons, { yPercent: -250}, { yPercent: 0, ease: "power4.out"})
          };
        }, 50); // Check every 50ms
      });


      // Dashboard animation
      const checkproductDashboardMembersTitles = setInterval(() => {
        if (document.querySelector('.dashboardBlock')) {
          clearInterval(checkproductDashboardMembersTitles);
          let productdashboardAnimFinish = isPortrait ? (isUnder768 ? '40%' : '30%') : '60%';
          const dashboardAnim = gsap.timeline({
            paused:true,
            scrollTrigger: {
              trigger: '.dashboardBlock',
              start: 'top bottom',
              end: 'center '+productdashboardAnimFinish,
              scrub: 1,
              once:true,
            },
          })
            .from('.dashboardBlock',
              {
                yPercent: 20,
                ease: "power2.out"
              })
        }
      }, 50); // Check every 50ms


      // Dashboard (Members) animation

      matchMedia.add("(orientation: landscape)", () => {
        const checkProductDashboardMembersTitles = setInterval(() => {
          if (document.querySelector('.productDashboardMembersTitlesBox') && document.querySelector('.dashboardMembersWrapper')) {
            clearInterval(checkProductDashboardMembersTitles);
            let productDashboardMembersTitlesFinish = isPortrait ? 'center 50%' : (isMobile ? 'center 60%' : 'center 55%');
            gsap.set(".productDashboardMembersTitlesBox", { xPercent: -125 });
            /* isMobile ? gsap.set(".productDashboardMembersTitles", { opacity: 0 }) : gsap.set(".productDashboardMembersTitles", { xPercent: -125 }); */
            const productDashboardMembersAnim = gsap.timeline({
              paused:true,
              scrollTrigger: {
                trigger: '.dashboardMembersWrapper',
                start: 'top bottom',
                end: productDashboardMembersTitlesFinish,
                scrub: 1,
                once:true,
                onLeave: () => {
                  gsap.fromTo(".productDashboardMembersTitlesBox",
                    { xPercent: -125},
                    { xPercent: 0, duration: 0.5, stagger: 0.125, ease: "power1.out"}
                  )
                  /* isMobile ? 
                    gsap.fromTo(".productDashboardMembersTitles",
                      { opacity: 0},
                      { opacity: 100, duration: 0.5, stagger: 0.125, ease: "power1.out"}
                    )
                  :
                    gsap.fromTo(".productDashboardMembersTitles",
                      { xPercent: 0},
                      { xPercent: 0, duration: 0.5, stagger: 0.125, ease: "power1.out"}
                    ) */
                },
                //markers: true,
              },
            })
              .from('.dashboardMembersWrapper', { xPercent: 150, ease: "power1.out" })
            }
          }, 50); // Check every 50ms

      });


      matchMedia.add("(orientation: portrait)", () => {
        matchMedia.add("(min-width: 768px)", () => {
          const checkproductDashboardMembersTitles = setInterval(() => {
            if (document.querySelector('.productDashboardMembersTitlesBox') && document.querySelector('.dashboardMembersWrapper')) {
              clearInterval(checkproductDashboardMembersTitles);
              gsap.set(".productDashboardMembersTitlesBox", { yPercent: -300})
              const productDashboardMembersAnim = gsap.timeline({
                paused:true,
                scrollTrigger: {
                  trigger: '.dashboardMembersWrapper',
                  start: 'top bottom',
                  end: 'top 33%',
                  scrub: 1,
                  once:true,
                  onLeave: () => {
                    gsap.fromTo(".productDashboardMembersTitlesBox",
                      { yPercent: -300},
                      { yPercent: 0, duration: 0.5, stagger: 0.125, ease: "power1.out"}
                    )
                  },
                  //markers: true,
                },
              })
                .from('.dashboardMembersWrapper', { xPercent: 150, ease: "power1.out" })
            }
          }, 50); // Check every 50ms
        });
      });

      matchMedia.add("(orientation: portrait)", () => {
        matchMedia.add("(max-width: 767px)", () => {
          const checkproductDashboardMembersTitles = setInterval(() => {
            if (document.querySelector('.productDashboardMembersTitlesBox') && document.querySelector('.dashboardMembersWrapper')) {
              clearInterval(checkproductDashboardMembersTitles);
              gsap.set(".productDashboardMembersTitlesBox", { yPercent: -200});
              const productDashboardMembersAnim = gsap.timeline({
                paused:true,
                scrollTrigger: {
                  trigger: '.dashboardMembersWrapper',
                  start: 'top bottom',
                  end: 'top 60%',
                  scrub: 1,
                  once:true,
                  onLeave: () => {
                    gsap.fromTo(".productDashboardMembersTitlesBox",
                      { yPercent: -200},
                      { yPercent: 0, duration: 0.5, stagger: 0.125, ease: "power1.out"}
                    )
                  },
                  //markers: true,
                },
              })
                .from('.dashboardMembersWrapper', { yPercent: 50, ease: "power2.out" })
            }
          }, 50); // Check every 50ms
        });
      });

    /* GSDevTools.create(); */
    },
    { dependencies: [verticalLoop], revertOnUpdate: true }
  );



  //let mmappParagraphsRevealType = isPortrait ? '.MmappSequentialParagraphsReveal' : 'mmappParagraphsReveal' ;

  return (
    <>
      <PagesTransitionScroll/>
      <MmappBlockReveal onReady={handleAnimationReady}  />
      <MmappHeadingReveal onReady={handleAnimationReady}  />
      <MmappParagraphsReveal onReady={handleAnimationReady}  />
      <MmappParagraphsRevealRight onReady={handleAnimationReady}  />
      <MmappSequentialParagraphsReveal onReady={handleAnimationReady}  />
      {animationsReady && (
        <div className="productPage">
          <title>Product | MMAPP</title>

          <section id="MMAPP-Methodology" className="flex flex-col py-0 md:py-0 lg:py-0 pt-0 md:pt-[0vw] lg:pt-[0vw]">
            <ProductFC className="px-[5vw] pb-[12vw] md:px-[7.65vw] pt-24 md:pt-56 lg:pt-72 md:pb-[1vw] bg-bgRadialGradientDown overflow-hidden">
              <ProductFCTitle className="mmappBlockReveal">
                MMAPP Methodology
              </ProductFCTitle>
              <ProductFCHeading className="mmappHeadingReveal mx-[2vw] lg:mx-[4vw]">
                A consistent and standardised unit of measurement for officiating MMA
              </ProductFCHeading>
              {/* <ProductFCDescription className="mmappParagraphsReveal justify-start pr-[0vw] md:pr-[22vw] text-left mb-6 md:mb-[2vw]">
                The MMAPP Platform centres around our patented methodology, which provides officials worldwide with a consistent and coherent approach to assessing MMA fights.<br/><br/>
                Using only a mobile device, officials can record their train of thought, without any outside input, for every second of the fight and provide insights into their own evaluation immediately after the round.<br/>
                This allows officials to make more informed decisions for longer.<br/><br/>
                By creating a standardised unit of measurement, we are able to get officials on the same page and improve consistency in MMA Judging, whilst allowing judges to have a better recall of every fight.
              </ProductFCDescription> */}
              <ProductFCDescription className={clsx(
                "justify-start pr-[0vw] md:pr-[11vw] lg:pr-[22vw] text-left mb-6 md:mb-[2vw]",
                isPortrait ? 'MmappSequentialParagraphsReveal' : 'mmappParagraphsReveal'
              )}>
                The MMAPP Platform centres around our patented methodology, which provides officials worldwide with a consistent and coherent approach to assessing fights, according to the current rules of MMA.
              </ProductFCDescription>
              <ProductFCDescription className={clsx(
                "justify-start pr-[0vw] md:pr-[23vw] lg:pr-[26vw] text-left mb-6 md:mb-[2vw]",
                isPortrait ? 'MmappSequentialParagraphsReveal' : 'mmappParagraphsReveal'
              )}>
                Using only a mobile device, officials can record their train of thought, without any outside input, for every second of the fight and provide insights into their own evaluation immediately after the round.<br/>
                This allows officials to make more informed decisions for longer.
              </ProductFCDescription>
              <ProductFCDescription className={clsx(
                "justify-start pr-[30vw] md:pr-[39.5vw] portrait:md:pr-[40vw] text-left",
                isPortrait ? 'MmappSequentialParagraphsReveal' : 'mmappParagraphsReveal'
              )}>
                By creating a standardised unit of measurement, we are able to get officials on the same page
              </ProductFCDescription>
              <ProductFCDescription className={clsx(
                "justify-start pr-[36vw] md:pr-[45vw] portrait:md:pr-[49.5vw] text-left mb-[9rem] md:mb-[2vw]",
                isPortrait ? 'MmappSequentialParagraphsReveal' : 'mmappParagraphsReveal'
              )}>
                and improve consistency in MMA Judging, whilst allowing judges to have a better recall of every fight.
              </ProductFCDescription>
              <p className="z-15 text-lg md:text-xl text-white text-left md:text-center pl-[2vw] md:pl-0 pt-[2vw] justify-center bounce-arrow">
              ↓
              </p>
              <picture>
                <img className="z-10 max-h-full max-w-[45vw] md:max-w-[55vw] portrait:touch:max-w-[90vw] portrait:touch:md:max-w-[66vw] bottom-[-0.1rem] right-[-1.5rem] portrait:touch:right-[-5vw] absolute md:absolute object-contain opacity-70"
                src="/images/product/hero/luizimag3_2876.webp"
                srcSet="
                  /images/product/hero/srcset/luizimag3_2876-480w.webp 480w,
                  /images/product/hero/srcset/luizimag3_2876-640w.webp 640w,
                  /images/product/hero/srcset/luizimag3_2876-768w.webp 768w,
                  /images/product/hero/srcset/luizimag3_2876-1024w.webp 1024w,
                  /images/product/hero/srcset/luizimag3_2876-1280w.webp 1280w"
                alt="MMA Referees"/>
              </picture>
              {/* <img className="z-10 max-h-full max-w-[45vw] xl:max-w-[35vw] portrait:max-w-[90vw] portrait:md:max-w-[45vw] portrait:touch:md:max-w-[70vw] bottom-[-0.1rem] right-[-1.5rem] portrait:touch:right-[-13vw] portrait:touch:md:right-[-14.5vw] absolute md:absolute object-contain opacity-80" src="/images/product/luizimag3_0161.webp" alt="MMA Referees"/> */}

            </ProductFC>
          </section>

          <div id="productLineDesktop"
            className={clsx(
              "portrait:hidden flex flex-col relative justify-center items-center", // portrait:touch:
              "mx-1 md:mx-[5.6vw] mt-[-2px]",
            )}>
            <svg viewBox="0 0 1536 7500" id="productPath" data-name="productPath" className="pointer-events-none absolute top-0 hidden select-none md:block" xmlns="http://www.w3.org/2000/svg">
              <path id="backgroundPath" d="m769,92v56l-.02,19.37c.01,17.68-14.32,32.02-32,32.02H37c-17.67,0-32,14.33-32,32v714c0,17.67,14.33,32,32,32h700c17.67,0,32,14.33,32,32l.02,1070.98c-.01,17.68,14.32,32.02,32,32.02h681.98c17.67,0,32,14.33,32,32v996c0,17.67-14.33,32-23,32H50c-26.67,0-41,14.33-41,32l-.13,475.61c0,17.67,14.33,32,32,32l714.13.29c17.67,0,32,14.33,32,32v444c0,17.67-14.33,32-32,32H41c-17.67,0-32,14.33-32,32v720.1c0,17.67,14.33,32,32,32h700c17.67,0,32,14.33,32,32l.02,1078.98c-.01,17.68,14.32,32.02,32,32.02h677.98c17.67,0,32,14.33,32,32l-.12,780.61c0,17.67-14.33,32-23,32H49.88c-26.67,0-41,14.33-41,32v354c0,17.67,14.33,32,32,32h364c17.67,0,32,14.33,32,32" fill="none" opacity=".1" stroke="#4d004d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
              <path id="mainPath-0" d="m769.27,92.32v56l-.02,19.37c.01,17.68-14.32,32.02-32,32.02l-598.1.3" fill="none" stroke="#4d004d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
              <path id="mainPath-1" d="m139.14,200l-101.87-.3c-17.67,0-32,14.33-32,32v714c0,17.67,14.33,32,32,32h700c17.67,0,32,14.33,32,32l.02,1070.98c-.01,17.68,14.32,32.02,32,32.02h598.85" fill="none" stroke="#4d004d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
              <path id="mainPath-2" d="m1400.14,2112.7h83.13c17.67,0,32,14.33,32,32v996c0,17.67-14.33,32-23,32H50.27c-26.67,0-41,14.33-41,32l-.13,475.61c0,17.67,14.33,32,32,32l714.13.29c17.67,0,32,14.33,32,32v444c0,17.67-14.33,32-32,32H139.14" fill="none" stroke="#4d004d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
              <path id="mainPath-3" d="m139.14,4220.6H41.27c-17.67,0-32,14.33-32,32v720.1c0,17.67,14.33,32,32,32h700c17.67,0,32,14.33,32,32l.02,1078.98c-.01,17.68,14.32,32.02,32,32.02h596.1" fill="none" stroke="#4d004d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
              <path id="mainPath-4" d="m1401.39,6147.7h81.88c17.67,0,32,14.33,32,32l-.12,780.61c0,17.67-14.33,32-23,32H50.14c-26.67,0-41,14.33-41,32v354c0,17.67,14.33,32,32,32h364c17.67,0,32,14.33,32,32" fill="none" stroke="#4d004d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
              {/* <path id="mainPath" d="m760,92v56l-.02,19.37c.01,17.68-14.32,32.02-32,32.02H37c-17.67,0-32,14.33-32,32v714c0,17.67,14.33,32,32,32h691c17.67,0,32,14.33,32,32l.02,1070.98c-.01,17.68,14.32,32.02,32,32.02h690.98c17.67,0,32,14.33,32,32v996c0,17.67-14.33,32-32,32H41c-17.67,0-32,14.33-32,32l-.13,475.61c0,17.67,14.33,32,32,32l705.13.29c17.67,0,32,14.33,32,32v419c0,17.67-14.33,32-32,32H41c-17.67,0-32,14.33-32,32v708.1c0,17.67,14.33,32,32,32h691c17.67,0,32,14.33,32,32l.02,1076.98c-.01,17.68,14.32,32.02,32,32.02h690.98c17.67,0,32,14.33,32,32l-.12,773.61c0,17.67-14.33,32-32,32H40.88c-17.67,0-32,14.33-32,32v400c0,17.67,14.33,32,32,32h705c17.67,0,32,14.33,32,32" fill="none" stroke="#4d004d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10" pathLength="1" stroke-dashoffset="0px" strokeDasharray="1px 1px"/> */}
              <path id="funnel" d="m768.88,122.16s-.53-120.16,193.21-119.78C1248.71,2.19,1008.91,0,769.11,0s-479.6,2.19-192.97,2.39c193.74-.39,193.21,119.78,193.21,119.78" fill="#4d004d" strokeWidth="0"/>
            </svg>
          </div>


          {/* <path d="M2 1686.5L2 1607C2 1589.33 16.3269 1575 34 1575L1186 1575C1203.67 1575 1218 1560.67 1218 1543L1218 795.001C1218 777.327 1203.67 763.001 1186 763.001L34.021 763.001C16.3397 763.001 2.00945 748.661 2.02104 730.98L2.50015 -0.000122048" stroke="var(--blue-500)" stroke-opacity="1" stroke-linecap="round" strokeWidth="3" pathLength="1" stroke-dashoffset="0px" strokeDasharray="0.98052660449808px 1px"></path> */}

          <div id="productLineTablets"
            className={clsx(
              "landscape:hidden portrait:flex portrait:touch:hidden portrait:touch:md:flex flex-col relative justify-center items-center",
              "mx-1 md:mx-[5.6vw] mt-[-2px]",
            )}>
            <svg viewBox="0 0 1536 13000" id="productPathTouchMD" data-name="productPathTouchMD" className="pointer-events-none absolute top-0 select-none" xmlns="http://www.w3.org/2000/svg">
              <path id="backgroundPathTouchMD" d="m759.88,92l.13,176-.02,19.37c.01,17.68-14.32,32.02-32,32.02H37c-17.67,0-32,14.33-32,32v1210c0,17.67,14.33,32,32,32h694c17.67,0,32,14.33,32,32l.02,2174.98c-.01,17.68,14.32,32.02,32,32.02h687.98c17.67,0,32,14.33,32,32v1982c0,17.67-14.33,32-23,32H50c-26.67,0-41,14.33-41,32l-.13,852.61c0,17.67,14.33,32,32,32l1442.13.29c17.67,0,32,14.33,32,32v874c0,17.67-14.33,32-32,32H41c-17.67,0-32,14.33-32,32v1384.1c0,17.67,14.33,32,32,32h689c17.67,0,32,14.33,32,32l.02,1573.98c-.01,17.68,14.32,32.02,32,32.02h688.98c17.67,0,32,14.33,32,32l-.12,1441.61c0,17.67-14.33,32-23,32H49.88c-26.67,0-41,14.33-41,32v524c0,17.67,14.33,32,32,32h364c17.67,0,32,14.33,32,32" fill="none" opacity=".1" stroke="#4d004d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
              <path id="mainPathTouchMD-0" d="m759.88,92.32l.39,176-.02,19.37c.01,17.68-14.32,32.02-32,32.02l-589.1.3" fill="none" stroke="#4d004d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
              <path id="mainPathTouchMD-1" d="m139.14,320l-101.87-.3c-17.67,0-32,14.33-32,32v1210c0,17.67,14.33,32,32,32h694c17.67,0,32,14.33,32,32l.02,2174.98c-.01,17.68,14.32,32.02,32,32.02h604.85" fill="none" stroke="#4d004d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
              <path id="mainPathTouchMD-2" d="m1400.14,3832.7h83.13c17.67,0,32,14.33,32,32v1982c0,17.67-14.33,32-23,32H50.27c-26.67,0-41,14.33-41,32l-.13,852.61c0,17.67,14.33,32,32,32l1442.13.29c17.67,0,32,14.33,32,32v874c0,17.67-14.33,32-32,32H139.14" fill="none" stroke="#4d004d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
              <path id="mainPathTouchMD-3" d="m139.14,7733.6H41.27c-17.67,0-32,14.33-32,32v1384.1c0,17.67,14.33,32,32,32h689c17.67,0,32,14.33,32,32l.02,1573.98c-.01,17.68,14.32,32.02,32,32.02h607.1" fill="none" stroke="#4d004d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
              <path id="mainPathTouchMD-4" d="m1401.39,10819.7h81.88c17.67,0,32,14.33,32,32l-.12,1441.61c0,17.67-14.33,32-23,32H50.14c-26.67,0-41,14.33-41,32v524c0,17.67,14.33,32,32,32h364c17.67,0,32,14.33,32,32" fill="none" stroke="#4d004d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
              <path id="funnelTouchMD" d="m759.64,122.16s-.53-120.16,193.21-119.78C1239.48,2.19,999.68,0,759.87,0s-479.6,2.19-192.97,2.39c193.74-.39,193.21,119.78,193.21,119.78" fill="#4d004d" strokeWidth="0"/>
            </svg>
          </div>

          {/* <div className="borderBottom"></div> */}

        <section id="Judge" className="flex flex-col mt-0 md:mt-[6vw] landscape:touch:md:mt-[4vw] justify-center">
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
          <ProductFC className="px-[7.65vw] md:px-[7.65vw] pt-[12vw] md:pt-[12vw] landscape:touch:md:pt-[14.5vw] portrait:md:pt-[17.5vw] portrait:touch:md:pt-[19.5vw] pb-6 md:pb-[14.1vw] portrait:md:pb-[12vw]">
            <ProductFCTitle className="mmappBlockReveal justify-start text-left max-w-[30rem] md:max-w-[100%]">
              Judge
            </ProductFCTitle>
            <ProductFCHeading className="mmappHeadingReveal justify-start text-left pr-[0%] md:pr-[15vw]">
              Designed for officials and their mobile devices
            </ProductFCHeading>
            <ProductFCDescription className="mmappParagraphsReveal justify-start pr-[0vw] md:pr-[19vw] text-left">
              The “Judge” app is specifically designed for officials and their mobile devices.<br/><br/>
            </ProductFCDescription>
            <ProductFCDescription className="mmappParagraphsReveal justify-start pr-[0vw] md:pr-[19vw] text-left">
              It provides the tools to apply our methodology during a fight, submit scores to the RecordKeeper instantly, and offer personalised fight cards for each official.<br/><br/>
            </ProductFCDescription>
            <ProductFCDescription className="mmappParagraphsReveal justify-start pr-[0vw] md:pr-[19vw] text-left">
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
          <div className="portrait:md:h-[112vw]">
            
            {/* Titles for portrait devices */}
            {<div className="landscape:hidden portrait:flex w-full justify-center items-center relative mb-2 md:mb-[2vw] pb-0 portrait:md:pb-[0.5vw] portrait:md:pt-[1vw] px-0 portrait:md:px-[10%]">
              <h4 className={clsx("mmappBlockReveal text-center portrait:text-[4.5vw] portrait:md:text-[3.75vw] text-transparent bg-clip-text bg-gradient-to-b from-[var(--purple-500)] to-purple-50",
              "two-lines-always")}>
                {descriptionSrcMapJudge[activeTabProductJudge]}
              </h4>
            </div>}

            {/* // Use the loading state to conditionally render the images in small mobile device*/}
            <div className={clsx("judgePhoneWrapper flex portrait:md:hidden landscape:hidden items-center justify-center min-w-auto portrait:max-w-[100vw] max-h-[100vh] z-10 pb-[4vw]")}>
              <picture><img
                className="judgePhone object-scale-down max-h-[65svh]" // shadow-2xl shadow-fuchsia-950/50
                src={(preloadedImages as any)[activeTabProductJudge]?.src}
                alt="iphone-12"
                onLoad={() => setIsLoading(false)}
              /></picture>
              {/* {isLoading && <div className="loading-overlay">Loading...</div>} // Disabled because it causes visual glitches that are unecessary given the small payload */}
            </div>

            <div className={clsx("w-full flex flex-col md:flex-row gap-1 md:gap-0 relative pb-0 md:pb-[1.75vw] landscape:touch:md:pb-[2vw]")}>

              <div className="w-full flex flex-row md:flex-col justify-center items-end gap-4 md:gap-20 relative overflow-hidden">
                <TabButtonProductJudge
                  value='ProductJudge1'
                  className="ProductJudgeButtonLeft"
                  heading='Assess Fights with the MMAPP Methodology'
                  smallHeading='Assess'
                  leftOrRight='left'
                  isPending={isPending}
                  activeTab={activeTabProductJudge}
                  onClick={() => selectTabProductJudge('ProductJudge1')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-body-scan w-[25px] md:w-[28px] lg:w-[30px] h-[25px] md:h-[28px] lg:h-[30px]">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
                    <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                    <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                    <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                    <path d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M10 17v-1a2 2 0 1 1 4 0v1" />
                    <path d="M8 10c.666 .666 1.334 1 2 1h4c.666 0 1.334 -.334 2 -1" />
                    <path d="M12 11v3" />
                  </svg>
                </TabButtonProductJudge>
                <TabButtonProductJudge
                  value='ProductJudge2'
                  className="ProductJudgeButtonLeft"
                  heading='Submit Scores Instantly'
                  smallHeading='Submit'
                  leftOrRight='left'
                  isPending={isPending}
                  activeTab={activeTabProductJudge}
                  onClick={() => selectTabProductJudge('ProductJudge2')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-upload w-[25px] md:w-[28px] lg:w-[30px] h-[25px] md:h-[28px] lg:h-[30px]">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                    <path d="M12 11v6" />
                    <path d="M9.5 13.5l2.5 -2.5l2.5 2.5" />
                  </svg>
                </TabButtonProductJudge>
                <TabButtonProductJudge
                  value='ProductJudge3'
                  className="ProductJudgeButtonLeft"
                  heading='Personalised Fight Card'
                  smallHeading='Fight Card'
                  leftOrRight='left'
                  isPending={isPending}
                  activeTab={activeTabProductJudge}
                  onClick={() => selectTabProductJudge('ProductJudge3')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-id-badge-2 w-[25px] md:w-[28px] lg:w-[30px] h-[25px] md:h-[28px] lg:h-[30px]">
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
              <div className={clsx("judgePhoneWrapper hidden portrait:md:flex landscape:flex items-center justify-center min-w-[25vw] max-w-[25vw] portrait:min-w-[50vw] portrait:max-w-[50vw] z-10")}> {/* needed to set both min-w and max-w to cater to Chrome and Safari */}
                <picture><img
                  className="judgePhone object-scale-down" // shadow-2xl shadow-fuchsia-950/50
                  src={(preloadedImages as any)[activeTabProductJudge]?.src}
                  alt="iPhone Judge images"
                  onLoad={() => setIsLoading(false)}
                /></picture>
                {/* {isLoading && <div className="loading-overlay">Loading...</div>} // Disabled because it causes visual glitches that are unecessary given the small payload */}
              </div>

              <div className="w-full flex flex-row md:flex-col justify-center items-start gap-4 md:gap-20 relative overflow-hidden">
                <TabButtonProductJudge
                  value='ProductJudge4'
                  className="ProductJudgeButtonRight"
                  heading='Practice at Home'
                  smallHeading='Practice'
                  leftOrRight='right'
                  isPending={isPending}
                  activeTab={activeTabProductJudge}
                  onClick={() => selectTabProductJudge('ProductJudge4')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-barbell w-[25px] md:w-[28px] lg:w-[30px] h-[25px] md:h-[28px] lg:h-[30px]">
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
                  className="ProductJudgeButtonRight"
                  heading='Share your results with your colleagues'
                  smallHeading='Share'
                  leftOrRight='right'
                  isPending={isPending}
                  activeTab={activeTabProductJudge}
                  onClick={() => selectTabProductJudge('ProductJudge5')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-table-share w-[25px] md:w-[28px] lg:w-[30px] h-[25px] md:h-[28px] lg:h-[30px]">
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
                  className="ProductJudgeButtonRight"
                  heading='Personal Lifetime Archive'
                  smallHeading='Archive'
                  leftOrRight='right'
                  isPending={isPending}
                  activeTab={activeTabProductJudge}
                  onClick={() => selectTabProductJudge('ProductJudge6')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-archive w-[25px] md:w-[28px] lg:w-[30px] h-[25px] md:h-[28px] lg:h-[30px]">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                    <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                    <path d="M10 12l4 0" />
                  </svg>
                </TabButtonProductJudge>
              </div>

            </div>
          </div>

        </section>

        <div className="productDivider"></div>

        <section id="RecordKeeper" className="flex flex-col py-0 md:py-0 lg:py-0 pt-0 justify-center">
          <ProductFC className="px-[7.65vw] md:px-[7.65vw] pt-[12vw] md:pt-[12.5vw] md:touch:pt-[10vw] landscape:touch:md:pt-[14.5vw] portrait:md:pt-[14vw] portrait:touch:md:pt-[20vw] pb-0 md:pb-[6.5vw] landscape:touch:md:pb-[6vw]">
            <ProductFCTitle className="mmappBlockReveal justify-start text-left md:justify-end md:text-right max-w-[100%]">
              RecordKeeper
            </ProductFCTitle>
            <ProductFCHeading className="mmappHeadingReveal justify-start text-left md:justify-end md:text-right pl-[0%] md:pl-[15vw]">
              Designed for officials performing Scorekeeping and Timekeeping duties
            </ProductFCHeading>
            <ProductFCDescription className="mmappParagraphsRevealRight justify-start text-left md:justify-end md:text-right pl-[0vw] md:pl-[15vw]">
              The “RecordKeeper” is our tool designed for officials performing Scorekeeping and Timekeeping duties.<br/><br/>
            </ProductFCDescription>
            <ProductFCDescription className="mmappParagraphsRevealRight justify-start text-left md:justify-end md:text-right pl-[0vw] md:pl-[15vw]">
              Because it is capable of automating most of the responsibilities, we are able to combine the roles of Scorekeeper and Timekeeper into one, called the RecordKeeper.<br/><br/>
            </ProductFCDescription>
            <ProductFCDescription className="mmappParagraphsRevealRight justify-start text-left md:justify-end md:text-right pl-[0vw] md:pl-[15vw]">
              Outperforming the roles when done individually, the RecordKeeper connects to the Judges, receives and calculates their score, and has outstanding timing capabilities, timing simultaneously Round Time, Breaks and In-between rounds, as well as important event logging, such as Reasons for Point deductions or Break duration.<br/><br/>
            </ProductFCDescription>
            <ProductFCDescription className="mmappParagraphsRevealRight justify-start text-left md:justify-end md:text-right pl-[0vw] md:pl-[15vw]">
              At the end of fights, it provides a clear display of the winner for easy visualization, for quick dispatch to the speaker. Once completed, every detail is instantly delivered to the Federation dashboard.
            </ProductFCDescription>
          </ProductFC>

          {/* RecordKeeper Titles */}
          <div className="flex w-full justify-center items-center relative pb-6 md:pb-[1vw] md:pt-[2.5vw] px-[20vw] portrait:mt-[1vw] portrait:py-[4.5vw] portrait:md:py-[3.25vw] portrait:lg:py-[4.5vw] portrait:px-[3vw] portrait:md:px-[10vw]">
            <h4 className={clsx("mmappBlockReveal text-[3vw] md:text-[2.25vw] portrait:text-[5vw] portrait:md:text-[4.5vw] text-center text-transparent bg-clip-text bg-gradient-to-b from-[var(--purple-500)] to-purple-50",
            "twoLinesAlwaysProductRecordKeeper")}>
              {descriptionSrcMapRecordKeeper[activeTabProductRecordKeeper]}
            </h4>
          </div>

          <div className={clsx(
            "w-full gap-1 portrait:md:gap-1 md:gap-0 relative",
            "min-w-auto max-w-[100%] md:max-w-[90%] portrait:md:max-w-[92.5%] h-full max-h-[100vh] landscape:md:min-h-[46vw] landscape:touch:md:min-h-[45vw] mx-1 md:mx-[5.6vw] portrait:mx-auto",
            "px-2 md:px-[3vw] md:pr-[0vw] portrait:md:px-[6.25vw] portrait:md:mb-[0vw] portrait:lg:mb-[0vw]",
            )}
          >
            <div className="flex flex-row portrait:flex-col landscape:md:max-h-[75vh]">
              {/* // Use the loading state to conditionally render the image */}
              <div className={clsx(
                "recordKeeperTabletWrapper portrait:basis-full flex landscape:items-left portrait:items-center justify-center relative z-10", // basis-[67%]
                "min-w-auto max-w-[100%] landscape:md:max-w-[90%] landscape:2xl:max-w-[65%] portrait:max-w-[100%] h-full max-h-[100%] landscape:md:max-h-[75vh] landscape:2xl:max-h-full",
                "px-[0vw] pb-[0vw] md:pb-[0vw] portrait:pb-[0vw] md:portrait:pb-[0vw] landscape:touch:md:pb-[0vw]",
                )}
              >
                <picture className="flex landscape:justify-end"><img
                  className="recordKeeperTablet object-scale-down portrait:max-h-[65vh] portrait:md:max-h-max landscape:md:max-w-full landscape:md:max-h-full" //  shadow-2xl shadow-fuchsia-950/50 rounded-[2.5vw] portrait:rounded-[4vw] ring-4 md:ring-2 portrait:ring-4 ring-purple-950/75
                  src={(preloadedImages as any)[activeTabProductRecordKeeper]?.src}
                  alt="iPad RecordKeeper images"
                  onLoad={() => setIsLoading(false)}
                /></picture>
                {/* {isLoading && <div className="loading-overlay">Loading...</div>} // Disabled because it causes visual glitches that are unecessary given the small payload */}
              </div>

              <div className={clsx("relative portrait:basis-full flex flex-col", // basis-[33%]
              "w-full 2xl:w-[65%] portrait:w-[100%] portrait:md:w-[98%] portrait:mx-auto min-w-[20vw] landscape:md:max-h-[75vh]", //w-full
              "portrait:flex-row justify-center items-start gap-4 md:gap-[3vh] portrait:gap-[vw] portrait:md:gap-[1vw]",
              "px-[0vw] pb-[0vw] md:pb-[0vw] portrait:pb-[2vw] portrait:md:pb-[0vw] portrait:pt-[4vw] portrait:md:pt-[0vw] overflow-hidden",
              )}>
                <div className="flex flex-col portrait:md:flex-row gap-4 md:gap-[3vh] portrait:gap-[3vw] portrait:md:gap-[1vw]">
                  <TabButtonProductRecordKeeper
                    value='ProductRecordKeeper1'
                    className="ProductRecordKeeperButton"
                    heading='Master Timing'
                    smallHeading='Timing'
                    isPending={isPending}
                    activeTab={activeTabProductRecordKeeper}
                    onClick={() => selectTabProductRecordKeeper('ProductRecordKeeper1')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-time-duration-30 w-[25px] md:w-[30px] h-[25pxw] md:h-[30px]">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M14 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0z" />
                      <path d="M8 9h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5" />
                      <path d="M3 12v.01" />
                      <path d="M7.5 4.2v.01" />
                      <path d="M7.5 19.8v.01" />
                      <path d="M4.2 16.5v.01" />
                      <path d="M4.2 7.5v.01" />
                      <path d="M12 21a9 9 0 0 0 0 -18" />
                    </svg>
                  </TabButtonProductRecordKeeper>
                  <TabButtonProductRecordKeeper
                    value='ProductRecordKeeper2'
                    className="ProductRecordKeeperButton"
                    heading='Record every detail'
                    smallHeading='Record'
                    isPending={isPending}
                    activeTab={activeTabProductRecordKeeper}
                    onClick={() => selectTabProductRecordKeeper('ProductRecordKeeper2')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-report-analytics w-[25px] md:w-[30px] h-[25pxw] md:h-[30px]">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                      <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                      <path d="M9 17v-5" />
                      <path d="M12 17v-1" />
                      <path d="M15 17v-3" />
                    </svg>
                  </TabButtonProductRecordKeeper>
                </div>
                <div className="flex flex-col portrait:md:flex-row gap-4 md:gap-[3vh] portrait:gap-[3vw] portrait:md:gap-[1vw]">
                  <TabButtonProductRecordKeeper
                    value='ProductRecordKeeper3'
                    className="ProductRecordKeeperButton"
                    heading='Receive & Calculate scorecards'
                    smallHeading='Scorecards'
                    isPending={isPending}
                    activeTab={activeTabProductRecordKeeper}
                    onClick={() => selectTabProductRecordKeeper('ProductRecordKeeper3')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-scoreboard w-[25px] md:w-[30px] h-[25pxw] md:h-[30px]">
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
                    value='ProductRecordKeeper4'
                    className="ProductRecordKeeperButton"
                    heading='Send Results'
                    smallHeading='Results'
                    isPending={isPending}
                    activeTab={activeTabProductRecordKeeper}
                    onClick={() => selectTabProductRecordKeeper('ProductRecordKeeper4')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-upload w-[25px] md:w-[30px] h-[25px] md:h-[30px]">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                      <path d="M12 11v6" />
                      <path d="M9.5 13.5l2.5 -2.5l2.5 2.5" />
                    </svg>
                  </TabButtonProductRecordKeeper>
                </div>
              </div>
            </div>
          </div>

        </section>

        <div className="productDivider"></div>

        <section id="Dashboard" className="flex flex-col py-0 md:py-0 lg:py-0 pt-0 justify-center">
          <ProductFC className="px-[7.65vw] md:px-[7.65vw] pt-[13.625vw] md:pt-[12vw] md:touch:pt-[10vw] landscape:touch:md:pt-[14.5vw] portrait:md:pt-[16.5vw] portrait:touch:md:pt-[22vw] portrait:touch:lg:pt-[20.5vw] pb-12 md:pb-[13.75vw] landscape:touch:md:pb-[13.75vw]">
            <ProductFCTitle className="mmappBlockReveal justify-start text-left max-w-[30rem] md:max-w-[100%]">
              Dashboard
            </ProductFCTitle>
            <ProductFCHeading className="mmappHeadingReveal justify-start text-left pr-[0%] md:pr-[15vw]">
              Enables Federations to easily manage all affairs
            </ProductFCHeading>
            <ProductFCDescription className="mmappParagraphsReveal justify-start pr-[0vw] md:pr-[19vw] text-left">
              The Dashboard is the component Federations interact with the most.
            </ProductFCDescription>
            <ProductFCDescription className="mmappParagraphsReveal justify-start pr-[0vw] md:pr-[19vw] text-left">
              Here they will be able to visualize and manage every aspect of the sport.<br/><br/>
            </ProductFCDescription>
            <ProductFCDescription className="mmappParagraphsReveal justify-start pr-[0vw] md:pr-[19vw] text-left">
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
            "dashboardBlock flex flex-col items-center justify-start relative z-10",
            "min-w-auto max-w-[100%] md:max-w-[95%] h-full max-h-[100%] mx-0 md:mx-[5.6vw] portrait:mx-[1vw] portrait:md:mx-[3vw]",
            "px-0 md:px-[12vw] portrait:md:px-[0vw] pb-12 portrait:md:pb-[0vw] landscape:touch:md:pb-[2vw] landscape:touch:lg:pb-[1.5vw]",
            )}
          >
            <picture><img
              className="object-scale-down"
              src="/images/hardware/proDisplay.webp"
              alt="Pro Display image"
              onLoad={() => setIsLoading(false)}
            /></picture>
            <picture><img
              className="object-scale-down px-12 md:px-[8vw] portrait:md:px-[2vw] pt-[2vw] md:pt-[0.5vw]"
              src="/images/hardware/magicKeyboardMouse.webp"
              alt="Magic Keyboard & Mouse image"
              onLoad={() => setIsLoading(false)}
            /></picture>
            {/* {isLoading && <div className="loading-overlay">Loading...</div>} // Disabled because it causes visual glitches that are unecessary given the small payload */}

            {/* Dashboard Video */}
            <div className="flex absolute w-full justify-center items-end md:pt-[0vw] px-[1.65vw] md:px-[13vw] portrait:md:px-[1.45vw]">
              {/* <video
                className="object-scale-down portrait:max-h-[65vh] portrait:md:max-h-max"
                src="/videos/product/mmappdemo5spedup.webm"
                autoPlay
                loop
              /> */}
              {/* <img
                className="object-contain w-full portrait:max-h-max portrait:md:max-h-max px-0 md:px-[0vw] pt-[1.45vw] md:pt-[1vw]"
                src="/videos/product/Sharingofadashboard.webp"
                alt="Animated WebP"
                onLoad={() => setIsLoading(false)}
              /> */}
              <video
                className="object-fill w-full portrait:max-h-max portrait:md:max-h-max px-0 md:px-[0vw] pt-[1.45vw] md:pt-[1vw] portrait:md:pt-[1.475vw]"
                src="/videos/product/dashboard/dashboard.1280x716.x264.AVBR.300kbps.veryslow.high-1280w.mp4"
                typeof="video/mp4"
                playsInline
                muted
                autoPlay
                loop
              />
            </div>

            <ProductDashboardTitles
              className="flex absolute w-full justify-center items-end pt-[65vw] md:pt-[42vw] portrait:md:pt-[62vw] px-[14vw] portrait:px-[1vw] portrait:md:px-[1vw]"
              productDashboardItems={productDashboardItems}
            />
            {/* <div className="flex absolute w-full justify-center items-end md:pt-[38.5vw] px-[14vw]">
              <h4 className={clsx("text-lg md:text-[1.9vw] leading-[2.5vw] tracking-normal text-center text-shadow-sm text-shadow-blur-3 text-shadow-[var(--background-grey)]")}>
                {descriptionSrcMapRecordKeeper[activeTabProductRecordKeeper]}
              </h4>
              <h4 className={clsx("text-lg md:text-[1.9vw] leading-[2.5vw] tracking-normal md:pt-[33vw] px-[14vw] absolute text-center text-transparent bg-clip-text bg-gradient-to-b from-[var(--purple-600)] to-purple-100")}>
                {descriptionSrcMapRecordKeeper[activeTabProductRecordKeeper]}
              </h4>
            </div> */}
          </div>
        </section>

        <div className="productDivider"></div>

        <section id="Dashboard-Members" className="flex flex-col py-0 md:py-0 lg:py-0 pt-0 mb-12 md:mb-[10vw] justify-center">
          <ProductFC className="px-[7.65vw] md:px-[7.65vw] pt-[12vw] md:pt-[12vw] landscape:touch:md:pt-[14vw] portrait:md:pt-[19vw] portrait:touch:md:pt-[17vw] portrait:touch:lg:pt-[19.5vw] pb-12 md:pb-[14vw]">
            <ProductFCTitle className="mmappBlockReveal justify-start text-left md:justify-end md:text-right max-w-[100%]">
              Dashboard (Members)
            </ProductFCTitle>
            <ProductFCHeading className="mmappHeadingReveal justify-start text-left md:justify-end md:text-right pl-[0%] md:pl-[15vw] ">
              A platform to seemlessly interact with your Federation
            </ProductFCHeading>
            <ProductFCDescription className="mmappParagraphsRevealRight justify-start text-left md:justify-end md:text-right pl-[0vw] md:pl-[19vw]">
              The Dashboard for Federation Members offers Athletes, Coaches, Clubs, Promoters a simple platform to interact with your Federations.<br/>
            </ProductFCDescription>
            <ProductFCDescription className="mmappParagraphsRevealRight justify-start text-left md:justify-end md:text-right pl-[0vw] md:pl-[19vw]">
              Whether you’re registering for the first time, or managing your membership and submitted documents.<br/><br/>
            </ProductFCDescription>
            <ProductFCDescription className="mmappParagraphsRevealRight justify-start text-left md:justify-end md:text-right pl-[0vw] md:pl-[19vw]">
              You can also confirm your eligibility for participation in sanctioned events, or submit applications for hosting events, in the case of Promoters.<br/><br/>
            </ProductFCDescription>
            <ProductFCDescription className="mmappParagraphsRevealRight justify-start text-left md:justify-end md:text-right pl-[0vw] md:pl-[19vw]">
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
            "w-full flex landscape:flex-row portrait:flex-col gap-0 md:gap-0 relative",
            "min-w-auto max-w-[100%] md:max-w-[90%] portrait:md:max-w-[94%] h-full max-h-[100vh] mx-1 md:mx-[5.6vw] portrait:md:mx-auto portrait:mx-auto",
            )}
          >
            <div className={clsx(
              "dashboardMembersWrapper basis-[55%] flex landscape:items-left portrait:items-start justify-center relative z-10",
              "min-w-auto max-w-[100%] md:max-w-[90%] portrait:md:max-w-[100%] h-full max-h-[100%]",
              "px-0 md:px-[0vw] pb-0 md:pb-0",
              )}
            >
              <picture><img
                className="object-scale-down"
                src="/images/hardware/macBookPro.webp"
                alt="Pro Display image"
                onLoad={() => setIsLoading(false)}
              /></picture>
              {/* {isLoading && <div className="loading-overlay">Loading...</div>} // Disabled because it causes visual glitches that are unecessary given the small payload */}

              {/* Dashboard (Members) Video */}
              <div className="flex absolute w-full justify-start portrait:justify-center items-start px-[9.5vw] md:px-[4.25vw] portrait:md:px-[9vw]">
                {/* <video
                  className="object-scale-down portrait:touch:max-h-[65vh] portrait:touch:md:max-h-max"
                  src="/videos/product/mmappdemo5spedup.webm"
                  autoPlay
                  loop
                /> */}
                {/* <img
                  className="object-cover"
                  src="/videos/product/Sharingofadashboard.webp"
                  alt="Animated WebP"
                  onLoad={() => setIsLoading(false)}
                /> */}
                <video
                  className="object-fill w-full portrait:max-h-max portrait:md:max-h-max px-0 md:px-[0vw] my-[3.75vw] md:my-[0.9vw] portrait:md:my-[2.15vw] rounded-[0.3rem]"
                  src="/videos/product/dashboardMembers/dashboardMembers.1024x656.x264.AVBR.400kbps.veryslow.high-1024w.mp4"
                  typeof="video/mp4"
                  playsInline
                  muted
                  autoPlay
                  loop
                />
              </div>
            </div>

            {/* Dashboard (Members) Titles Backup */}
            {/* <div className="productDashboardMembersTitlesWrapper w-fit h-fit overflow-hidden border-blue-500">
              <div className={clsx(
                "productDashboardMembersTitlesBox basis-[45%] relative flex flex-col justify-start items-left",
                "w-full min-w-[20vw] portrait:min-w-[70vw] max-h-[40vw] md:max-h-[27vw] portrait:max-h-[45vw] portrait:md:max-h-[40vw]",
                "ml-[2vw] portrait:ml-[0vw] mr-[6vw] portrait:mr-[0vw] border-2 border-red-500",
                )}
              >
                <ProductDashboardMembersTitles
                  className="productDashboardMembersTitles flex items-center justify-center min-h-[20%] portrait:min-h-[15vw] portrait:md:min-h-[11vw] mx-1 md:mx-0 group border-2 border-green-500"
                  productDashboardMembersItems={productDashboardMembersItems}
                />
              </div>
            </div> */}

            {/* Dashboard (Members) Titles */}
            <div className={clsx(
              "productDashboardMembersTitlesWrapper basis-[45%] relative flex flex-col justify-start items-left overflow-hidden",
              "w-full h-full",
              "ml-[2vw] portrait:ml-[0vw] mr-[6vw] portrait:mr-[0vw]", // border-2 border-green-500
              )}
            >
              <div className={clsx(
                "productDashboardMembersTitlesBox",
                "w-full h-full max-h-[40vw] md:max-h-[27vw] portrait:max-h-[70vw] portrait:md:max-h-[45vw]",
                "portrait:pt-2 portrait:md:pt-4", // border-2 border-yellow-300
                )}
              >
                <ProductDashboardMembersTitles
                  className={clsx(
                    "productDashboardMembersTitles flex items-center justify-center",
                    "min-h-[6vw] max-h-[6vw] portrait:min-h-[12vw] portrait:max-h-[12vw] portrait:md:min-h-[10vw] portrait:md:max-h-[10vw]",
                    "group"
                  )} // border-2 border-red-500
                  productDashboardMembersItems={productDashboardMembersItems}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-[5vw]">
            <CallToActionFederationsButton className="mmappBlockReveal" />
            <p className="mmappBlockReveal my-12 md:my-16 lg:my-20">
              Or
            </p>
            <CallToActionButton className="mmappBlockReveal" btnLabel="Request my Federation to join MMAPP" />
          </div>
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
    )}
  </>
)};

export default Product;
