"use client"
import React, { useEffect, useRef, useState, useTransition, useMemo } from "react";
import dynamic from 'next/dynamic'
import { preload } from 'react-dom';
import { cn } from "@/lib/utils"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import CustomEase from 'gsap/CustomEase';
import verticalLoop from '@/components/VerticalLoop';
import { useMediaQuery } from '@react-hook/media-query';
import { isDesktop, isTablet, isMobile, isMobileOnly, isAndroid, isWinPhone, isIOS, isSamsungBrowser } from 'react-device-detect';

import { MainFC, MainFCTitle, MainFCHeading, MainFCDescription } from '@/components/ui/mainFunctionalComponent'
import { ProductFC, ProductFCTitle, ProductFCHeading, ProductFCDescription } from '@/components/ui/productFunctionalComponent'
const ProductJudgePhone = dynamic(() => import('@/components/ui/productJudgePhone'), { ssr: false })
const ProductRecordKeeperTablet = dynamic(() => import('@/components/ui/productRecordKeeperTablet'), { ssr: false })
const ProductDashboardDesktop = dynamic(() => import('@/components/ui/productDashboardDesktop'), { ssr: false })
const ProductDashboardMembersLaptop = dynamic(() => import('@/components/ui/productDashboardMembersLaptop'), { ssr: false })



import ContactUs from '@/app/contact/contact-us'
import CallToActionButton from '@/components/ui/CallToActionButton'
import CallToActionFederationsButton from '@/components/ui/CallToActionFederationsButton'
import PagesTransitionScroll from '@/lib/contexts/PagesTransitionScroll';
import { MmappBlockReveal, MmappHeadingReveal, MmappParagraphsReveal, MmappParagraphsRevealRight, MmappSequentialParagraphsReveal } from '@/components/ui/mainAnimations';

gsap.registerPlugin(gsap, useGSAP, ScrollTrigger, DrawSVGPlugin, CustomEase);

const Product = () => {

  const isLandscape = useMediaQuery('(orientation: landscape)');
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const isUnder480 = useMediaQuery('(max-width: 479px)');
  const isUnder640 = useMediaQuery('(max-width: 639px)');
  const isUnder768 = useMediaQuery('(max-width: 767px)');
  const isUnder1024 = useMediaQuery('(max-width: 1023px)');
  const isUnder1280 = useMediaQuery('(max-width: 1279px)');
  const isUnder1536 = useMediaQuery('(max-width: 1535px)');
  
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

  const [executionCount, setExecutionCount] = useState(0);

  /* ===== GSAP React ===== */
  useGSAP(
    () => {
      let matchMedia = gsap.matchMedia();

      matchMedia.add("(orientation: portrait)", () => {
        const drawMainPathPortrait = setInterval(() => {
          if (
            document.getElementById("MMAPP-Methodology") &&
            document.getElementById("Judge") &&
            document.getElementById("ProductJudgePhone") &&
            document.getElementById("RecordKeeper") &&
            document.getElementById("ProductRecordKeeperTablet") &&
            document.getElementById("Dashboard") &&
            document.getElementById("ProductDashboardDesktop") &&
            document.getElementById("DashboardMembers") &&
            document.getElementById("ProductDashboardMembersLaptop")
          ) {
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
              .from("#mainPathTouchMD-0", { drawSVG: 0 }, 0)
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
                trigger: "#DashboardMembers",
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
          if (
            document.getElementById("MMAPP-Methodology") &&
            document.getElementById("Judge") &&
            document.getElementById("ProductJudgePhone") &&
            document.getElementById("RecordKeeper") &&
            document.getElementById("ProductRecordKeeperTablet") &&
            document.getElementById("Dashboard") &&
            document.getElementById("ProductDashboardDesktop") &&
            document.getElementById("DashboardMembers") &&
            document.getElementById("ProductDashboardMembersLaptop")
          ) {
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
              .from("#mainPath-0", { drawSVG: 0 }, 0)

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
                trigger: "#DashboardMembers",
                start: "top top",
                end: "90% bottom",
                scrub: 1,
                /* markers:true, */
                preventOverlaps:true,
              }
              })
              .from("#mainPath-4", { drawSVG: 0 }, 0)

          }
        }, 50); // Check every 50ms
      });

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

      const checkRecordKeeperAnim = setInterval(() => {
        if (document.querySelector('.recordKeeperTabletWrapper') && document.querySelector('.recordKeeperTablet')) {
          clearInterval(checkRecordKeeperAnim);
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

    },
    { dependencies: [verticalLoop], revertOnUpdate: true }
  );


  useGSAP(
    () => {
      const checkAllElementsReady = setInterval(() => {
        if (
          document.getElementById("MMAPP-Methodology") &&
          document.getElementById("Judge") &&
          document.getElementById("ProductJudgePhone") &&
          document.getElementById("RecordKeeper") &&
          document.getElementById("ProductRecordKeeperTablet") &&
          document.getElementById("Dashboard") &&
          document.getElementById("ProductDashboardDesktop") &&
          document.getElementById("DashboardMembers") &&
          document.getElementById("ProductDashboardMembersLaptop")
        ) {

          clearInterval(checkAllElementsReady);

          ScrollTrigger.refresh();

          //console.log("All elements are ready && ScrollTrigger has been refreshed");

        }
      }, 50); // Check every 50ms
    },
    { dependencies: [], revertOnUpdate: true }
  );



  let mmappParagraphsRevealType = isPortrait ? '.mmappSequentialParagraphsReveal' : 'mmappParagraphsReveal' ;
  console.log(mmappParagraphsRevealType);

  return (
    <>
      <PagesTransitionScroll/>
      <MmappBlockReveal onReady={handleAnimationReady}  />
      <MmappHeadingReveal onReady={handleAnimationReady}  />
      <MmappParagraphsReveal onReady={handleAnimationReady}  />
      <MmappParagraphsRevealRight onReady={handleAnimationReady}  />
      <MmappSequentialParagraphsReveal onReady={handleAnimationReady}  />
      {/* {animationsReady && ( */}
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
              <ProductFCDescription className={cn(
                "justify-start pr-[0vw] md:pr-[11vw] lg:pr-[22vw] portrait:md:pr-[11vw] portrait:touch:md:pr-[0vw] text-left mb-6 md:mb-[2vw]",
                mmappParagraphsRevealType
              )}>
                The MMAPP Platform centres around our patented methodology, which provides officials worldwide with a consistent and coherent approach to assessing fights, according to the current rules of MMA.
              </ProductFCDescription>
              <ProductFCDescription className={cn(
                "justify-start pr-[0vw] md:pr-[23vw] lg:pr-[26vw] portrait:lg:pr-[22vw] portrait:touch:lg:pr-[26vw] text-left mb-6 md:mb-[2vw]",
                mmappParagraphsRevealType
              )}>
                Using only a mobile device, officials can record their train of thought, without any outside input, for every second of the fight and provide insights into their own evaluation immediately after the round.<br/>
                This allows officials to make more informed decisions for longer.
              </ProductFCDescription>
              <ProductFCDescription className={cn(
                "justify-start pr-[30vw] md:pr-[39.5vw] portrait:md:pr-[35vw] portrait:touch:md:pr-[40vw] text-left",
                mmappParagraphsRevealType
              )}>
                By creating a standardised unit of measurement, we are able to get officials on the same page
              </ProductFCDescription>
              <ProductFCDescription className={cn(
                "justify-start pr-[36vw] md:pr-[45vw] portrait:md:pr-[48vw] portrait:touch:md:pr-[49.5vw] text-left mb-[9rem] md:mb-[2vw]",
                mmappParagraphsRevealType
              )}>
                and improve consistency in MMA Judging, whilst allowing judges to have a better recall of every fight.
              </ProductFCDescription>
              <p className="z-15 text-lg md:text-xl text-white text-left md:text-center pl-[2vw] md:pl-0 pt-[2vw] justify-center bounce-arrow">
              ↓
              </p>
              <picture>
                <img className="z-10 max-h-full max-w-[45vw] md:max-w-[55vw] portrait:max-w-[90vw] portrait:md:max-w-[66vw] bottom-[-0.1rem] right-[-1.5rem] portrait:touch:right-[-5vw] absolute md:absolute object-contain opacity-70"
                src="/images/product/hero/luizimag3_2876.webp"
                srcSet="
                  /images/product/hero/srcset/luizimag3_2876-480w.webp 480w,
                  /images/product/hero/srcset/luizimag3_2876-640w.webp 640w,
                  /images/product/hero/srcset/luizimag3_2876-768w.webp 768w,
                  /images/product/hero/srcset/luizimag3_2876-1024w.webp 1024w,
                  /images/product/hero/srcset/luizimag3_2876-1280w.webp 1280w"
                alt="MMA Referees"/>
              </picture>

            </ProductFC>
          </section>

          <div id="productLineDesktop"
            className={cn(
              "portrait:hidden flex flex-col relative justify-center items-center",
              "mx-1 md:mx-[5.6vw] mt-[-2px]",
            )}>
            <svg viewBox="0 0 1536 7500" id="productPath" data-name="productPath" className="pointer-events-none absolute top-0 hidden select-none md:block" xmlns="http://www.w3.org/2000/svg">
              <path id="backgroundPath" d="m769,92v56l-.02,19.37c.01,17.68-14.32,32.02-32,32.02H37c-17.67,0-32,14.33-32,32v714c0,17.67,14.33,32,32,32h700c17.67,0,32,14.33,32,32l.02,1070.98c-.01,17.68,14.32,32.02,32,32.02h681.98c17.67,0,32,14.33,32,32v996c0,17.67-14.33,32-23,32H50c-26.67,0-41,14.33-41,32l-.13,475.61c0,17.67,14.33,32,32,32l714.13.29c17.67,0,32,14.33,32,32v444c0,17.67-14.33,32-32,32H41c-17.67,0-32,14.33-32,32v720.1c0,17.67,14.33,32,32,32h700c17.67,0,32,14.33,32,32l.02,1078.98c-.01,17.68,14.32,32.02,32,32.02h677.98c17.67,0,32,14.33,32,32l-.12,780.61c0,17.67-14.33,32-23,32H49.88c-26.67,0-41,14.33-41,32v354c0,17.67,14.33,32,32,32h364c17.67,0,32,14.33,32,32" fill="none" opacity=".1" stroke="#4d004d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
              <path id="mainPath-0" d="m769.27,92.32v56l-.02,19.37c.01,17.68-14.32,32.02-32,32.02l-598.1.3" fill="none" stroke="#4d004d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
              <path id="mainPath-1" d="m139.14,200l-101.87-.3c-17.67,0-32,14.33-32,32v714c0,17.67,14.33,32,32,32h700c17.67,0,32,14.33,32,32l.02,1070.98c-.01,17.68,14.32,32.02,32,32.02h598.85" fill="none" stroke="#4d004d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
              <path id="mainPath-2" d="m1400.14,2112.7h83.13c17.67,0,32,14.33,32,32v996c0,17.67-14.33,32-23,32H50.27c-26.67,0-41,14.33-41,32l-.13,475.61c0,17.67,14.33,32,32,32l714.13.29c17.67,0,32,14.33,32,32v444c0,17.67-14.33,32-32,32H139.14" fill="none" stroke="#4d004d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
              <path id="mainPath-3" d="m139.14,4220.6H41.27c-17.67,0-32,14.33-32,32v720.1c0,17.67,14.33,32,32,32h700c17.67,0,32,14.33,32,32l.02,1078.98c-.01,17.68,14.32,32.02,32,32.02h596.1" fill="none" stroke="#4d004d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
              <path id="mainPath-4" d="m1401.39,6147.7h81.88c17.67,0,32,14.33,32,32l-.12,780.61c0,17.67-14.33,32-23,32H50.14c-26.67,0-41,14.33-41,32v354c0,17.67,14.33,32,32,32h364c17.67,0,32,14.33,32,32" fill="none" stroke="#4d004d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"/>
              <path id="funnel" d="m768.88,122.16s-.53-120.16,193.21-119.78C1248.71,2.19,1008.91,0,769.11,0s-479.6,2.19-192.97,2.39c193.74-.39,193.21,119.78,193.21,119.78" fill="#4d004d" strokeWidth="0"/>
            </svg>
          </div>
          
          <div id="productLineTablets"
            className={cn(
              "landscape:hidden portrait:hidden portrait:md:flex portrait:touch:md:flex flex-col relative justify-center items-center",// portrait:md:flex
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

        <section id="Judge" className="flex flex-col mt-0 md:mt-[1vw] lg:mt-[4vw] xl:mt-[5vw] 2xl:mt-[6vw] landscape:touch:md:mt-[4vw] landscape:touch:2xl:mt-[2vw] portrait:md:mt-[5.5vw] portrait:lg:mt-[6vw] justify-center">
          <ProductFC className={cn(
            "px-[7.65vw] md:px-[7.65vw]",
            "pt-[12vw] md:pt-[15.5vw] lg:pt-[14vw] xl:pt-[13vw] 2xl:pt-[12vw]",
            "landscape:touch:md:pt-[14.5vw]",
            "portrait:md:pt-[19.5vw] portrait:lg:pt-[17.5vw] portrait:touch:md:pt-[22vw] portrait:touch:lg:pt-[19.5vw]",
            "pb-6 md:pb-[7vw] lg:pb-[11.5vw] xl:pb-[13.1vw] 2xl:pb-[14.1vw]",
            "portrait:md:pb-[7vw] portrait:lg:pb-[7vw] portrait:touch:md:pb-[10.5vw] portrait:touch:lg:pb-[10vw]"
            )}>
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

          <ProductJudgePhone />

        </section>

        <div className="productDivider"></div>

        <section id="RecordKeeper" className="flex flex-col py-0 md:py-0 lg:py-0 pt-0 justify-center">
          <ProductFC className={cn(
            "px-[7.65vw] md:px-[7.65vw]",
            "pt-[12vw] md:pt-[15.25vw] lg:pt-[13.5vw] xl:pt-[13.5vw] 2xl:pt-[12.5vw] md:touch:pt-[10vw]",
            "landscape:touch:md:pt-[14.5vw]",
            "portrait:md:pt-[21vw] portrait:lg:pt-[20vw]",
            "portrait:touch:md:pt-[22vw] portrait:touch:lg:pt-[20vw]",
            "pb-0 md:pb-[0vw] lg:pb-[1.75vw] xl:pb-[3.5vw] 2xl:pb-[6.5vw]",
            "landscape:touch:md:pb-[6vw]",
            "portrait:md:pb-[8vw] portrait:lg:pb-[6vw]",
            "portrait:touch:md:pb-[8vw] portrait:touch:lg:pb-[6vw]"
            )}>
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

          <ProductRecordKeeperTablet />

        </section>

        <div className="productDivider"></div>

        <section id="Dashboard" className="flex flex-col py-0 md:py-0 lg:py-0 pt-0 justify-center">
          <ProductFC className={cn(
            "px-[7.65vw] md:px-[7.65vw]",
            "pt-[13.625vw] md:pt-[17vw] lg:pt-[14.8vw] xl:pt-[14vw] 2xl:pt-[12vw]",
            "landscape:touch:md:pt-[14.5vw] landscape:touch:xl:pt-[14.5vw]",
            "portrait:md:pt-[20vw] portrait:lg:pt-[16.5vw] portrait:xl:pt-[19.5vw]",
            "portrait:touch:md:pt-[22vw] portrait:touch:lg:pt-[20.5vw]",
            "pb-12 md:pb-[12vw] lg:pb-[14vw] xl:pb-[12.75vw] 2xl:pb-[13.75vw]",
            "landscape:touch:md:pb-[13.75vw]"
          )}>
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

          <ProductDashboardDesktop />

        </section>

        <div className="productDivider"></div>

        <section id="DashboardMembers" className="flex flex-col py-0 md:py-0 lg:py-0 pt-0 mb-12 md:mb-[10vw] justify-center">
          <ProductFC className={cn(
            "px-[7.65vw] md:px-[7.65vw]",
            "pt-[12vw] md:pt-[14.5vw] lg:pt-[10vw] xl:pt-[10.5vw] 2xl:pt-[12vw]",
            "landscape:touch:md:pt-[14vw] landscape:touch:lg:pt-[11.75vw] landscape:touch:xl:pt-[13vw]",
            "portrait:md:pt-[20vw] portrait:lg:pt-[15vw] portrait:xl:pt-[18vw]",
            "portrait:touch:md:pt-[22.5vw] portrait:touch:lg:pt-[18vw]",
            "pb-12 md:pb-[14vw]"
            )}>
            <ProductFCTitle className="mmappBlockReveal justify-start text-left md:justify-end md:text-right max-w-[100%]">
              Dashboard (Members)
            </ProductFCTitle>
            <ProductFCHeading className="mmappHeadingReveal justify-start text-left md:justify-end md:text-right pl-[0%] md:pl-[13vw] lg:pl-[15vw]">
              A platform to seamlessly interact with your Federation
            </ProductFCHeading>
            <ProductFCDescription className="mmappParagraphsRevealRight justify-start text-left md:justify-end md:text-right pl-[0vw] md:pl-[11vw] lg:pl-[11vw]">
              The Dashboard for Federation Members offers Athletes, Coaches, Clubs, and Promoters a simple platform to interact with your Federations, whether you&apos;re registering for the first time, or managing your membership and submitted documents.<br/><br/>
            </ProductFCDescription>
            <ProductFCDescription className="mmappParagraphsRevealRight justify-start text-left md:justify-end md:text-right pl-[0vw] md:pl-[11vw] lg:pl-[11vw]">
            You can also confirm your eligibility for competing in sanctioned events, view where you&apos;re scheduled to participate, as well as your career history.<br/><br/>
            </ProductFCDescription>
            <ProductFCDescription className="mmappParagraphsRevealRight justify-start text-left md:justify-end md:text-right pl-[0vw] md:pl-[16vw] lg:pl-[16vw]">
            Promoters can quickly submit applications for hosting events, view all athletes eligible to compete in their events, and any last-minute changes are quickly sent to all relevant participants (Federations, Officials, Athletes).
            </ProductFCDescription>
          </ProductFC>

          <ProductDashboardMembersLaptop />

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
    {/* )} */}
  </>
)};

export default Product;
