'use client'
import Image from "next/image";
import styles from "./page.module.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import { Metadata } from 'next'
import ContactUs from '@/app/contact/contact-us'
import Benefits from '@/app/home/benefits'
import { FeaturesDashboardCard } from '@/components/ui/featuresCard'
import ProDisplayShadowSVG from "@/components/ui/svg/proDisplayShadowSVG";

gsap.registerPlugin(ScrollTrigger);
/* export const metadata: Metadata = {
  title: 'Home',
} */

export default function Home() {

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
        window.addEventListener('resize', () => {ScrollTrigger.refresh();console.log("Refreshed ScrollTrigger");});
        
        //To detect if a viewport is ultra-wide
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
            let bottomDistance = vhToPixels(50); // extra distance to have things stick after the last card pins (pixels). Careful as not having any could cover up the content bellow
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
    { dependencies: [], revertOnUpdate: true }
    );

  return (
    <>
      <div className="">
        <div id="Home" className="homeSection">
          <div className="homeBackground">
            <img src="/images/33498201.webp" alt="Fighters getting ready to fight"/>
          </div>
          <div className="homeMain">
            <img src="/images/logo_on_black.svg" alt="MMAPP Logo" />
            <h2>Mapping MMA</h2>
          </div>
        </div>

        <section id="Features">
          <h1>Features</h1>
          <div className="flex flex-col items-center colored-cards my-24">
            <h2 id="featuresDashboardTitle" className="z-20 px-[5vw] md:px-[20vw] lg:px-[10vw] portrait:pb-4 md:portrait:pb-12 text-center" >Federations (Dashboard)</h2>
            {/* <div id="featuresDashboardMBP" className="absolute w-[92vw] h-[100vh] pt-[8vh] flex items-start z-5">
              <img className="object-contain z-5" src="/images/features/mbp_16_hw__cqlhn5ys0o9y_large_2x.jpg" alt="MacBook Pro"/>
            </div> */}
            <div id="featuresDashboardHeader" className="featuresDashboardHeader w-full flex items-center justify-center text-center z-20 overflow-visible relative py-6 portrait:py-12">
              <h4 className="relative" style={{ visibility: 'hidden' }}>Easy Form Management and Seamless Sign-up process<br/>for all your members (Officials, Athletes, Coaches, Promoters and Clubs)</h4>
              <h4 className="absolute featuresDashboardHeaderH4">Overview of Federation Affairs</h4>
              <h4 className="absolute featuresDashboardHeaderH4">Visual Reports with Actionable Insights</h4>
              <h4 className="absolute px-[5vw] 2xl:px-[10vw] featuresDashboardHeaderH4">Easy Form Management and Seamless Sign-up process for all your members (Officials, Athletes, Coaches, Promoters and Clubs)</h4>
              <h4 className="absolute featuresDashboardHeaderH4">Intuitive Member Management</h4>
            </div>
            <FeaturesDashboardCard className="colored-card z-10" parentClassName="pb-0">
              <img src="/images/features/federationsDashboard/dashboard1.webp" alt="Federations Dashboard 1"/>
            </FeaturesDashboardCard>
            <ProDisplayShadowSVG className="proDisplayShadowSVG pb-[35vh]"/>
            <FeaturesDashboardCard className="colored-card z-10" parentClassName="pb-[35vh]">
              <img src="/images/features/federationsDashboard/dashboard2.webp" alt="Federations Dashboard 2"/>
            </FeaturesDashboardCard>
            <FeaturesDashboardCard className="colored-card z-10" parentClassName="pb-[35vh]">
              <img src="/images/features/federationsDashboard/dashboard3.webp" alt="Federations Dashboard 3"/>
            </FeaturesDashboardCard>
            <FeaturesDashboardCard className="colored-card z-10" parentClassName="pb-0">
              <img src="/images/features/federationsDashboard/dashboard4.webp" alt="Federations Dashboard 4"/>
            </FeaturesDashboardCard>
          </div>
        </section>

        <section id="Features rest" className="homePageSection">
          {/* <h1>Features</h1>
          <div id="featuresDashboard" className="featuresDashboard">
            <h2>Federations (Dashboard)</h2>
            <br/>
            <h4>Overview of Federation Affairs</h4>
            <h4>Visual Reports with Actionable Insights</h4>
            <h4>Easy Form Management</h4>
            <h4>Seamless Sign-up process for all your members<br/>(Officials, Athletes, Coaches, Promoters and Clubs)</h4>
            <h4>Intuitive Member Management</h4>
            <br/>
          </div> */}
          <div id="featuresJudge" className="featuresJudge">
            <h2>Officials (Judge)</h2>
            <br/>
            <h4>Personalized Fight Card</h4>
            <h4>Make more Informed Decisions with a Coherent and Consistent Methodology</h4>
            <h4>Discuss scoring more deeply with your colleagues</h4>
            <h4>Reduce Fatigue</h4>
            <h4>Instantly submit your scorecards to the RecordKeeper</h4>
            <h4>Training Mode - Create Own Fights, Improve your skills and compare with your colleagues</h4>
          </div>
          <div id="featuresRecordKeeper" className="featuresRecordKeeper">
            <h2>Officials (RecordKeeper)</h2>
            <br/>

            <h4>Pre-filled in Information</h4>
            <h4>Effortlessly monitor all relevant details during a fight - Assigned Officials, Rules</h4>
            <h4>Flawlessly perform all timing duties (Round time, Break Time, Breaks, Point Deductions and more)</h4>
            <h4>Notifications for actions needed to perform</h4>
            <h4>Instant Score Delivery and Calculation</h4>
          </div>
        </section>

        
        <section id="Benefits" className='md:pt-0 mb-12'>
          <h1 className="text-center py-14 md:py-20 lg:py-24 xl:py-32 text-3xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl">
            Benefits for everyone else
          </h1>
          <Benefits /* items={items} */ />
        </section>

        <section id="Ourmission" className="homePageSection">
          <div>
            <h1>Our Mission</h1>
            <h4>
              At MMAPP, we want to elevate MMA to the highest level, by enabling Federations to quickly and effortlessly transition to the digital age. Our platform solves all issues Federations face in the realms of membership approval and management, as well as event scheduling. On the officiation side, we offer an unparalleled electronic scoring system that encompasses every aspect of the job, from judging fights to RecordKeeping.
              Our aim is to revolutionize MMA Judging by providing a common language and unit of measurement to officials. By providing these stepping stones, we are able to increase preciseness in discussion and debate the sport in a deeper manner, leading to game-changing improvements.
            </h4>
          </div>
        </section>

        <section id="FAQSupport" className="homePageSection">
          <h1>FAQs/Support</h1>
          <h5>
            Ask us anything. We&apos;re here to help.
          </h5>
        </section>

        <section id="ContactUs" className="mb-12">
          <h1 className="text-center py-14 md:py-20 lg:py-24 xl:py-32 text-3xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl">
            Contact Us
          </h1>
          <ContactUs id={ContactUs} className=""/>
        </section>
        <footer className="py-32">
          <p className="text-center font-medium">
            Powered by{' ®MMAPP '} © 2024 MMAPP. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}