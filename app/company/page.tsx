"use client";
import React from "react";
import * as ReactDOMServer from "react-dom/server";
/* import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; */
import { Metadata } from 'next'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { clsx } from "clsx";

import horizontalLoop from '@/components/HorizontalLoop';
import { Dialog } from '@/components/ui/dialog'
//import heroBGSVG from '@/public/images/bg/heroBG.svg';
//import { HeroBGSVG } from '@/components/ui/svg/heroBGSVG';
import { CardPolicies, CardPoliciesDescription, CardPoliciesHeader, CardPoliciesTitle, CardPoliciesButton } from '@/components/ui/card-policies'
import { MainFC, MainFCTitle, MainFCHeading, MainFCDescription } from '@/components/ui/mainFunctionalComponent'
import PagesTransitionScroll from '@/lib/contexts/PagesTransitionScroll';
/* interface TemplateProps {
  smoother: {
    scrollTo: (target: string, animate: boolean, position: string) => void;
  };
} */

/* export const metadata: Metadata = {
  title: 'Company',
} */

/* const svgString = encodeURIComponent(
  ReactDOMServer.renderToStaticMarkup(<HeroBGSVG />)
); */

const Company = (props: any) => {
  //console.log(props);
  /* const router = useRouter();
  const keyValue = router.query.key;

  const handlePageLoad = () => {
    // Your custom function to run after the new page is loaded
    console.log('Function executed after page load'+keyValue);
  };

  useEffect(() => {
    handlePageLoad(); // Run the function on initial page load

    const handleRouteChange = () => {
      // Check if the window location has changed
      if (window.location.pathname !== window.location.pathname) {
        handlePageLoad();
      }
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []); */

  /* ===== GSAP React ===== */
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".box");
      const loop = horizontalLoop(boxes, {paused: false, repeat:-1, speed:0.75});

  /* GSDevTools.create(); */

  },
  { dependencies: [horizontalLoop], revertOnUpdate: true, /* scope: main */ }
  );

  return (
    <>
      <PagesTransitionScroll />
    
      <div className="companyPage">

        <section id="Mission" className="w-full flex flex-col pt-0 lg:pt-20 py-32 md:py-40 lg:py-52">
          {/* <div className={clsx("w-full h-[82vh] flex flex-col md:flex-row relative",
          "hero1ContainerMargins min-h-[55rem] md:min-h-[70rem] lg:min-h-[68rem] max-h-[58rem] md:max-h-[83rem] lg:max-h-[83rem] rounded-b-[3rem] bg-no-repeat bg-bottom bg-bgRadialGradientDown")}>
            <div className="flex flex-col justify-top z-20 max-w-[30rem] md:max-w-[50rem] lg:max-w-[60rem] hero1ContentMargins text-left">
              <h5 className="mb-4 md:mb-8 lg:mb-12 text-neutral-200 deboss">
                Our Mission
              </h5>
              <h3 className="mb-8 md:mb-12 lg:mb-16 py-8 text-transparent bg-clip-text bg-gradient-to-b from-[var(--purple-250)] to-purple-100">
                Accelerate the Recognition of MMA as an Olympic Sport
              </h3>
              <div className="">
                <h6 className="h7 font-medium text-left leading-[2.1rem] md:leading-[2.5rem] md:w-[42rem] lg:w-[51rem]">
                In pursuit of this goal, we build solutions designed to help Federations and their respective members streamline their activities and build cohesiveness in MMA judging by offering tools for officials to discuss their assessments more profoundly and amplify their judging abilities.
                </h6>
              </div>
            </div>
            <img className="z-10 max-h-full max-w-[60vw] md:max-w-[45vw] bottom-[-0.1rem] right-[1rem] absolute md:absolute object-contain" src="/images/referees/herb-dean.webp" alt="herb dean"/>
          </div> */}

          <MainFC className=" justify-start bg-bgRadialGradientDown min-h-[62rem] md:min-h-[60rem] lg:min-h-[74rem] xl:min-h-[50rem] 2xl:min-h-[40rem] max-h-[75rem] md:max-h-[83rem] lg:max-h-[83rem] xl:max-h-[88rem] py-28 md:py-32 lg:py-52">
            <MainFCTitle className="flex-col justify-start z-20 max-w-[100%] md:max-w-[50rem] lg:max-w-[60rem] text-left">
              Our Mission
            </MainFCTitle>
            <MainFCHeading className="flex-col justify-start z-20 max-w-[100%] md:max-w-[50rem] lg:max-w-[70rem] xl:max-w-[65rem] text-left">
              Accelerate the Recognition of MMA as an Olympic Sport
            </MainFCHeading>
            <MainFCDescription className="flex-col justify-start z-20 max-w-[100%] md:max-w-[39rem] lg:max-w-[55rem] text-left leading-normal">
              In pursuit of this goal, we build solutions designed to help Federations and their respective members streamline their activities and build cohesiveness in MMA judging by offering tools for officials to discuss their assessments more profoundly and amplify their judging abilities.
            </MainFCDescription>
            {/* <img className="z-10 max-h-full max-w-[50vw] md:max-w-[40vw] xl:max-w-[38vw] bottom-[-0.1rem] right-[1rem] absolute md:absolute object-contain" src="/images/referees/herb-dean.webp" alt="herb dean"/> */}
            <img className="z-10 max-h-full max-w-[50vw] md:max-w-[36vw] xl:max-w-[34vw] bottom-[-0.1rem] right-[-2vw] portrait:touch:md:right-[-3vw] absolute md:absolute object-contain overflow-hidden" src="/images/referees/Temp/stock-photo-minsk-belarus-september-new-fighting-generation-mixed-martial-arts-1774520465.webp" alt="herb dean"/>
          </MainFC>
        </section>

        <div className="borderBottom"></div>

        <section id="Vision" className="flex flex-col justify-center py-32 md:py-40 lg:py-52">
          <MainFC className="bg-bgRadialGradientUp ring-1 ring-white/5">
            <MainFCTitle className="justify-center">
              Our Vision
            </MainFCTitle>
            <MainFCHeading className="text-center">
              Create a common language and unit of measurement for officiating MMA
            </MainFCHeading>
            <MainFCDescription className="text-center mx-5 md:mx-12 lg:mx-44 leading-normal">
              By creating a common language and unit of measurement for officials, transparency, consistency, and coherence increase in MMA and promote an honest discussion between all stakeholders of the sport on the best path forward to the betterment of all.
            </MainFCDescription>
            <div className="flex flex-col md:flex-row items-start justify-between mt-12 md:mt-20 mb-8 md:mb-0 lg:mt-32 mx-2 md:mx-0 lg:mx-8">

              <div className="flex flex-col max-w-[95%] md:max-w-[35rem] lg:max-w-[40rem] px-4 rounded-[1rem]">
                <dt className="inline-flex items-center gap-3 max-w-full">
                  <div className="flex items-center justify-center text-white pr-4 py-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-assembly w-[24px] h-[24px]">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                    <path d="M15.5 9.422c.312 .18 .503 .515 .5 .876v3.277c0 .364 -.197 .7 -.515 .877l-3 1.922a1 1 0 0 1 -.97 0l-3 -1.922a1 1 0 0 1 -.515 -.876v-3.278c0 -.364 .197 -.7 .514 -.877l3 -1.79c.311 -.174 .69 -.174 1 0l3 1.79h-.014z" />
                  </svg>
                  </div>
                  <div className="h7 font-medium leading-6 text-white">
                    Transparency
                  </div>
                </dt>
                <p className="text-left font-normal mt-4 text-neutral-200">
                Provide a consistent and coherent framework for officials to operate within, promoting openness and accountability.
                </p>
              </div>

              <div className="flex flex-col max-w-[95%] md:max-w-[35rem] lg:max-w-[40rem] px-4 py-8 md:py-0 bgRadialGradientLeft rounded-[1rem]">
                <dt className="inline-flex items-center gap-3 max-w-full">
                  <div className="flex items-center justify-center text-white pr-4 py-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-refresh-dot w-[24px] h-[24px]">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                    <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  </svg>
                  </div>
                  <div className="h7 font-medium leading-6 text-white">
                    Consistency
                  </div>
                </dt>
                <p className="text-left font-normal mt-4 text-neutral-200">
                Establish common terminology and metrics that can be applied uniformly across the sport, reducing ambiguity and subjectivity.
                </p>
              </div>

              <div className="flex flex-col max-w-[95%] md:max-w-[35rem] lg:max-w-[40rem] px-4">
                <dt className="inline-flex items-center gap-3 max-w-full">
                  <div className="flex items-center justify-center text-white pr-4 py-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-atom-2 w-[24px] h-[24px]">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M12 21l0 .01" />
                    <path d="M3 9l0 .01" />
                    <path d="M21 9l0 .01" />
                    <path d="M8 20.1a9 9 0 0 1 -5 -7.1" />
                    <path d="M16 20.1a9 9 0 0 0 5 -7.1" />
                    <path d="M6.2 5a9 9 0 0 1 11.4 0" />
                  </svg>
                  </div>
                  <div className="h7 font-medium leading-6 text-white">
                    Coherence
                  </div>
                </dt>
                <p className="text-left font-normal mt-4 text-neutral-200">
                  Develop a unified framework that brings together all aspects of officiating to promote coordination and alignment among officials, organizers, and stakeholders.
                </p>
              </div>
            </div>
          </MainFC>

          {/* <div className={clsx("w-full h-full flex flex-col md:flex-row relative bg-bgRadialGradientUp",
          "hero1ContainerMargins min-h-[60rem] md:min-h-[75rem] xl:min-h-[60rem] rounded-[3rem] px-10 md:px-20 lg:px-32 py-28 md:py-32 lg:py-32 ring-1 ring-white/5")}>
            <div className="flex flex-col justify-top z-20 text-center">
              <h5 className="mb-4 md:mb-8 lg:mb-12 text-neutral-200 deboss">
                Our Vision
              </h5>
              <div className="flex flex-col justify-center items-center">
                <h3 className="mb-8 md:mb-12 lg:mb-16 py-8 text-center text-transparent bg-clip-text bg-gradient-to-bl from-[var(--purple-250)] to-purple-100 w-[95%] md:w-[80%]">
                Create a common language and unit of measurement for officiating MMA
                </h3>
                <h6 className="h7 font-medium text-center leading-[2.1rem] md:leading-[2.5rem] w-[98%] md:w-[85%]">
                  By creating a common language and unit of measurement for officials, transparency, consistency, and coherence increase in MMA and promote an honest discussion between all stakeholders of the sport on the best path forward to the betterment of all.
                </h6>
              </div>
              <div className="">
                <div className="flex flex-col md:flex-row items-start justify-between mt-12 md:mt-20 lg:mt-32 mx-2 md:mx-0 lg:mx-8">

                  <div className="flex flex-col max-w-[95%] md:max-w-[35rem] lg:max-w-[40rem] px-4 rounded-[1rem]">
                    <dt className="inline-flex items-center gap-3 max-w-full">
                      <div className="flex items-center justify-center text-white pr-4 py-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-assembly">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                        <path d="M15.5 9.422c.312 .18 .503 .515 .5 .876v3.277c0 .364 -.197 .7 -.515 .877l-3 1.922a1 1 0 0 1 -.97 0l-3 -1.922a1 1 0 0 1 -.515 -.876v-3.278c0 -.364 .197 -.7 .514 -.877l3 -1.79c.311 -.174 .69 -.174 1 0l3 1.79h-.014z" />
                      </svg>
                      </div>
                      <div className="h7 font-medium leading-6 text-white">
                        Transparency
                      </div>
                    </dt>
                    <p className="text-left font-normal mt-4 text-neutral-200">
                    Provide a consistent and coherent framework for officials to operate within, promoting openness and accountability.
                    </p>
                  </div>

                  <div className="flex flex-col max-w-[95%] md:max-w-[35rem] lg:max-w-[40rem] px-4 py-8 md:py-0 bgRadialGradientLeft rounded-[1rem]">
                    <dt className="inline-flex items-center gap-3 max-w-full">
                      <div className="flex items-center justify-center text-white pr-4 py-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-refresh-dot">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                        <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                        <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      </svg>
                      </div>
                      <div className="h7 font-medium leading-6 text-white">
                        Consistency
                      </div>
                    </dt>
                    <p className="text-left font-normal mt-4 text-neutral-200">
                    Establish common terminology and metrics that can be applied uniformly across the sport, reducing ambiguity and subjectivity.
                    </p>
                  </div>

                  <div className="flex flex-col max-w-[95%] md:max-w-[35rem] lg:max-w-[40rem] px-4">
                    <dt className="inline-flex items-center gap-3 max-w-full">
                      <div className="flex items-center justify-center text-white pr-4 py-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-atom-2">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M12 21l0 .01" />
                        <path d="M3 9l0 .01" />
                        <path d="M21 9l0 .01" />
                        <path d="M8 20.1a9 9 0 0 1 -5 -7.1" />
                        <path d="M16 20.1a9 9 0 0 0 5 -7.1" />
                        <path d="M6.2 5a9 9 0 0 1 11.4 0" />
                      </svg>
                      </div>
                      <div className="h7 font-medium leading-6 text-white">
                        Coherence
                      </div>
                    </dt>
                    <p className="text-left font-normal mt-4 text-neutral-200">
                      Develop a unified framework that brings together all aspects of officiating to promote coordination and alignment among officials, organizers, and stakeholders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        </section>

        <div className="borderBottom"></div>

        <section id="CoreValues" className="flex flex-col items-center py-32 md:py-40 lg:py-52">
          <h5 className="mb-4 md:mb-8 lg:mb-12 text-neutral-200 deboss">
            Core Values
          </h5>
          <h3 className="mb-8 md:mb-12 lg:mb-16 py-8 text-transparent bg-clip-text bg-gradient-to-l from-[var(--purple-250)] to-purple-100">
            What keeps us grounded
          </h3>
          <div className="carouselWrapper">
            <div className="box">
              <div className="card">
                <div><h4>Objectivity</h4></div>
                {/* <img src="/images/icons/objectivity.svg" alt="Objectivity"/> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Target-3--Streamline-Core" >
                  <desc>{"Target 3 Streamline Icon: https://streamlinehq.com"}</desc>
                  <g id="Target-3--Streamline-Core">
                    <path id="Ellipse 20" fill="#631f99" d="M0.875 7a6.125 6.125 0 1 1 12.25 0A6.125 6.125 0 0 1 0.875 7Z" strokeWidth={0.5} />
                    <path id="Ellipse 19" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="M0.875 7a6.125 6.125 0 1 1 12.25 0A6.125 6.125 0 0 1 0.875 7Z" strokeWidth={0.5} />
                    <path id="Vector 1585" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="M7 0.875v1.633" strokeWidth={0.5} />
                    <path id="Vector 1587" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="m13.125 7 -1.633 0" strokeWidth={0.5} />
                    <path id="Vector 1586" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="M7 13.125v-1.633" strokeWidth={0.5} />
                    <path id="Vector 1588" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="m0.875 7 1.633 0" strokeWidth={0.5} />
                    <path id="Vector 1589" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="m5.396 7 3.208 0" strokeWidth={0.5} />
                    <path id="Vector 1590" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="m7 5.396 0 3.208" strokeWidth={0.5} />
                  </g>
                </svg>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div><h4>Consistency</h4></div>
                {/* <img src="/images/icons/consistency.svg" alt="Consistency"/> */}
                <svg
                  fill="none"
                  viewBox="0 0 14 14"
                  id="Synchronize-Warning--Streamline-Core"
                  xmlns="http://www.w3.org/2000/svg"
                  {...props}
                >
                  <defs />
                  <desc>
                    {"Synchronize Warning Streamline Icon: https://streamlinehq.com"}
                  </desc>
                  <g id="Synchronize-Warning--Streamline-Core">
                    <g
                      id="Square-Brackets-Circle--Streamline-Core"
                      transform="matrix(0.570335, 0, 0, 0.570335, 3.40689, 3.40689)"
                      style={{}}
                    >
                      <path
                        id="path-2"
                        fill="#631f99"
                        d="M6.3 11.925A5.625 5.625 0 1 0 6.3 0.675a5.625 5.625 0 0 0 0 11.25Z"
                        style={{
                          strokeWidth: "0.876678px",
                        }}
                      />
                      <path
                        id="path-3"
                        stroke="#ffffff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.3 11.925A5.625 5.625 0 1 0 6.3 0.675a5.625 5.625 0 0 0 0 11.25Z"
                        style={{
                          strokeWidth: "0.876678px",
                        }}
                      />
                    </g>
                    <path
                      id="path-1"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M 8.636 5.963 L 6.63 8.221 L 5.626 7.468"
                      style={{
                        strokeWidth: "0.5px",
                      }}
                    />
                    <path
                      id="Vector"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11 9 2 -0.5 0.5 2"
                      style={{
                        strokeWidth: "0.5px",
                      }}
                    />
                    <path
                      id="Vector_2"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 8.5A6.6 6.6 0 0 1 7 13a6 6 0 0 1 -5.64 -3.95"
                      style={{
                        strokeWidth: "0.5px",
                      }}
                    />
                    <path
                      id="Vector_3"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m3 5 -2 0.5 -0.5 -2"
                      style={{
                        strokeWidth: "0.5px",
                      }}
                    />
                    <path
                      id="Vector_4"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M1 5.5A6.79 6.79 0 0 1 7 1a6 6 0 0 1 5.64 4"
                      style={{
                        strokeWidth: "0.5px",
                      }}
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div><h4>Growth & Learning</h4></div>
                {/* <img src="/images/icons/growth-learning.svg" alt="Growth & Learning"/> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-1 -1 16 16" id="Expand-Window-2--Streamline-Core" >
                  <desc>{"Expand Window 2 Streamline Icon: https://streamlinehq.com"}</desc>
                  <g id="Expand-Window-2--Streamline-Core">
                    <path id="Rectangle 759" fill="#631f99" d="M0.5 1.5a1 1 0 0 1 1 -1h11a1 1 0 0 1 1 1v11a1 1 0 0 1 -1 1h-11a1 1 0 0 1 -1 -1v-11Z" strokeWidth={0.5} />
                    <path id="Vector" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="M13.5 8v4.5a1 1 0 0 1 -1 1h-11a1 1 0 0 1 -1 -1v-11a1 1 0 0 1 1 -1H6" strokeWidth={0.5} />
                    <path id="Vector_2" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="M10 0.5h3.5V4" strokeWidth={0.5} />
                    <path id="Vector_3" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="M13.5 0.5 7 7" strokeWidth={0.5} />
                  </g>
                </svg>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div><h4>Accountability</h4></div>
                {/* <img src="/images/icons/accountability.svg" alt="Accountability"/> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Task-List--Streamline-Core" >
                  <desc>{"Task List Streamline Icon: https://streamlinehq.com"}</desc>
                  <g id="Task-List--Streamline-Core">
                    <path id="Vector" fill="#631f99" d="M12.39 12.39C12.39 12.9312 11.9512 13.37 11.41 13.37H2.59C2.0488 13.37 1.61 12.9312 1.61 12.39V1.61C1.61 1.0688 2.0488 0.63 2.59 0.63H8.47L12.39 4.55V12.39Z" strokeWidth={0.5} />
                    <path id="Vector_2" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="M12.39 12.39C12.39 12.9312 11.9512 13.37 11.41 13.37H2.59C2.0488 13.37 1.61 12.9312 1.61 12.39V1.61C1.61 1.0688 2.0488 0.63 2.59 0.63H8.0643C8.3242 0.6301 8.5734 0.7333 8.7571 0.9171L12.1029 4.2629C12.2867 4.4466 12.3899 4.6958 12.39 4.9557V12.39Z" strokeWidth={0.5} />
                    <path id="Vector_3" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="M7.5468 6.3875H9.9968" strokeWidth={0.5} />
                    <path id="Vector_4" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="M7.5468 9.7871H9.9968" strokeWidth={0.5} />
                    <path id="Vector_5" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="M3.7572 9.7313L4.5784 10.5525L5.9475 8.6366" strokeWidth={0.5} />
                    <path id="Vector_6" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="M3.7572 6.2709L4.5784 7.0921L5.9475 5.1762" strokeWidth={0.5} />
                  </g>
                </svg>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div><h4>Safety</h4></div>
                {/* <img src="/images/icons/safety.svg" alt="Safety"/> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Shield-Cross--Streamline-Core" >
                  <desc>{"Shield Cross Streamline Icon: https://streamlinehq.com"}</desc>
                  <g id="Shield-Cross--Streamline-Core">
                    <path id="Subtract" fill="#631f99" fillRule="evenodd" d="M6.64 13.433a1 1 0 0 0 0.72 0 9.565 9.565 0 0 0 6.136 -8.935V1.499A1 1 0 0 0 12.497 0.5H1.503a1 1 0 0 0 -1 1v2.998a9.565 9.565 0 0 0 6.137 8.935ZM6 3.008h2v2h1.998v1.998H8v2H6v-2H4.002V5.007H6V3.008Z" clipRule="evenodd" strokeWidth={0.5} />
                    <path id="Vector 6" fill="none" d="M8 3.008H6v2H4.002v1.998H6v2h2v-2h1.998V5.007H8V3.008Z" strokeWidth={0.5} />
                    <path id="Vector" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="M7.36 13.433a1 1 0 0 1 -0.72 0A9.565 9.565 0 0 1 0.504 4.498V1.499A1 1 0 0 1 1.503 0.5h10.994a1 1 0 0 1 1 1v2.998a9.565 9.565 0 0 1 -6.137 8.935Z" strokeWidth={0.5} />
                    <path id="Vector 5" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="M8 3.008H6v2H4.002v1.998H6v2h2v-2h1.998V5.007H8V3.008Z" strokeWidth={0.5} />
                  </g>
                </svg>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div><h4>Compliance</h4></div>
                {/* <img src="/images/icons/compliance.svg" alt="Compliance"/> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Business-Handshake--Streamline-Core" >
                  <desc>{"Business Handshake Streamline Icon: https://streamlinehq.com"}</desc>
                  <g id="Business-Handshake--Streamline-Core">
                    <path id="Vector" fill="#631f99" d="M2.74246 4.26595 0.54805 3.08496l0.000014 4.77793L5.89503 11.5079c0.69118 0.4711 1.60258 0.4624 2.28459 -0.022l5.22268 -3.64644V2.63208l-2.7059 1.46261 -2.03325 -0.21754c-0.74667 -0.07989 -1.4936 0.12329 -2.095 0.56503 -0.01412 0 -0.02777 -0.00515 -0.03852 -0.01432 -0.50433 -0.43034 -1.17439 -0.61428 -1.82841 -0.50105l-1.95876 0.33914Z" strokeWidth={0.5} />
                    <path id="Rectangle 8" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="M0.548043 3.08491 2.74245 4.2659l1.95877 -0.33914c0.66122 -0.11449 1.33884 0.07479 1.84502 0.51536v0" strokeWidth={0.5} />
                    <path id="Rectangle 9" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="M11.2822 9.28247 8.17961 11.4859c-0.682 0.4844 -1.5934 0.4931 -2.28458 0.0219L0.54806 7.86287" strokeWidth={0.5} />
                    <path id="Vector 1282" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="M13.4023 7.83946 11.207 9.33957 7.80082 6.58926l-1.2529 0.91188c-0.50945 0.37079 -1.22114 0.27089 -1.60882 -0.22583v0c-0.38679 -0.49558 -0.31217 -1.20836 0.16887 -1.6131l1.30458 -1.09765c0.62527 -0.52609 1.43809 -0.77436 2.2506 -0.68742l2.03325 0.21754 2.7059 -1.46261" strokeWidth={0.5} />
                    <path id="Vector 1289" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="M7.80128 6.59668c0.8196 0.73022 1.98195 0.35769 2.41412 -0.2384" strokeWidth={0.5} />
                  </g>
                </svg>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div><h4>Insist on Excellence</h4></div>
                {/* <img src="/images/icons/excellence.svg" alt="Insist on Excellence"/> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Star-Badge--Streamline-Core" >
                  <desc>{"Star Badge Streamline Icon: https://streamlinehq.com"}</desc>
                  <g id="Star-Badge--Streamline-Core">
                    <path id="Vector 2356" fill="#631f99" d="M2.881 11.093 0.5 11.73l2.204 -3.818 2.728 2.249 -1.912 3.312 -0.639 -2.381Z" strokeWidth={0.5} />
                    <path id="Vector 2354" fill="#631f99" d="m11.118 11.093 2.382 0.638 -2.204 -3.818 -2.728 2.249 1.912 3.312 0.638 -2.381Z" strokeWidth={0.5} />
                    <path id="Vector 2355" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="m11.31 7.937 2.19 3.794 -2.382 -0.638 -0.638 2.381 -1.898 -3.289" strokeWidth={0.5} /><path id="Ellipse 19" fill="#631f99" d="M11.953 5.482a4.956 4.956 0 1 1 -9.912 0 4.956 4.956 0 0 1 9.912 0Z" strokeWidth={0.5} />
                    <path id="Ellipse 20" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="M11.953 5.482a4.956 4.956 0 1 1 -9.912 0 4.956 4.956 0 0 1 9.912 0Z" strokeWidth={0.5} />
                    <path id="Vector" fill="#ffffff" d="m7.2 2.791 0.683 1.374a0.214 0.214 0 0 0 0.174 0.127l1.517 0.23a0.23 0.23 0 0 1 0.127 0.397L8.58 5.982a0.222 0.222 0 0 0 0 0.207l0.215 1.508a0.23 0.23 0 0 1 -0.342 0.246l-1.35 -0.714a0.27 0.27 0 0 0 -0.222 0l-1.35 0.714a0.23 0.23 0 0 1 -0.34 -0.246l0.254 -1.508a0.222 0.222 0 0 0 -0.04 -0.207l-1.12 -1.071a0.23 0.23 0 0 1 0.128 -0.39L5.93 4.3a0.214 0.214 0 0 0 0.174 -0.127L6.787 2.8a0.23 0.23 0 0 1 0.413 -0.008Z" strokeWidth={0.5} />
                    <path id="Vector_2" stroke="none" strokeLinecap="round" strokeLinejoin="round" d="m7.2 2.791 0.683 1.374a0.214 0.214 0 0 0 0.174 0.127l1.517 0.23a0.23 0.23 0 0 1 0.127 0.397L8.58 5.982a0.222 0.222 0 0 0 0 0.207l0.215 1.508a0.23 0.23 0 0 1 -0.342 0.246l-1.35 -0.714a0.27 0.27 0 0 0 -0.222 0l-1.35 0.714a0.23 0.23 0 0 1 -0.34 -0.246l0.254 -1.508a0.222 0.222 0 0 0 -0.04 -0.207l-1.12 -1.071a0.23 0.23 0 0 1 0.128 -0.39L5.93 4.3a0.214 0.214 0 0 0 0.174 -0.127L6.787 2.8a0.23 0.23 0 0 1 0.413 -0.008Z" strokeWidth={0.5} />
                    <path id="Vector 2353" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="M2.692 7.934 0.5 11.73l2.381 -0.638 0.639 2.382 1.9 -3.292" strokeWidth={0.5} />
                  </g>
                </svg>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div><h4>Innovation</h4></div>
                {/* <img src="/images/icons/innovation.svg" alt="Innovation"/> */}
                <svg
                  fill="none"
                  viewBox="0 0 14 14"
                  id="Ai-Technology-Spark--Streamline-Core"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs />
                  <desc>
                    {'{"Ai Technology Spark Streamline Icon: https://streamlinehq.com"}'}
                  </desc>
                  <g id="Ai-Technology-Spark--Streamline-Core">
                    <path
                      id="Vector"
                      fill="#631f99"
                      d="M9.51393 5.03108c0.00555 -0.80324 -0.20401 -1.59332 -0.60691 -2.28823 -0.40291 -0.6949 -0.98447 -1.26929 -1.68432 -1.66354C6.52285 0.68506 5.73023 0.485325 4.92712 0.50084c-0.8031 0.015514 -1.58742 0.245713 -2.27152 0.6667 -0.6841 0.42098 -1.24305 1.01741 -1.61881 1.72735 -0.375766 0.70995 -0.554652 1.50753 -0.518086 2.30996 0.036565 0.80242 0.287249 1.58043 0.726026 2.25326 0.43877 0.67283 1.04965 1.21594 1.7692 1.57297v1.50002c0 0.1326 0.05268 0.2598 0.14645 0.3535 0.09377 0.0938 0.22094 0.1465 0.35355 0.1465h3c0.13261 0 0.25979 -0.0527 0.35356 -0.1465 0.09376 -0.0937 0.14644 -0.2209 0.14644 -0.3535V9.03108c0.74748 -0.36828 1.37744 -0.93772 1.81907 -1.64433 0.44164 -0.70662 0.67745 -1.52241 0.68093 -2.35567Z"
                      strokeWidth="{0.5}"
                      style={{
                        strokeWidth: "0.5px",
                      }}
                    >
                      <title>{"bulb"}</title>
                    </path>
                    <path
                      id="Vector_2"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.39866 7.97027c-0.38607 0.43916 -0.856 0.80031 -1.38473 1.06081v1.50002c0 0.1326 -0.05268 0.2598 -0.14644 0.3535 -0.09377 0.0938 -0.22095 0.1465 -0.35356 0.1465h-3c-0.13261 0 -0.25978 -0.0527 -0.35355 -0.1465 -0.09377 -0.0937 -0.14645 -0.2209 -0.14645 -0.3535V9.03108c-0.71955 -0.35703 -1.33043 -0.90014 -1.7692 -1.57297C0.805953 6.78528 0.555269 6.00727 0.518704 5.20485c-0.036566 -0.80243 0.14232 -1.60001 0.518086 -2.30996 0.37576 -0.70994 0.93471 -1.30637 1.61881 -1.72735 0.6841 -0.420987 1.46842 -0.651186 2.27152 -0.6667 0.67002 -0.012944 1.33273 0.12393 1.94037 0.398581"
                      strokeWidth="{0.5}"
                      style={{
                        strokeWidth: "0.5px",
                      }}
                    >
                      <title>{"bulb-case"}</title>
                    </path>
                    <path
                      id="Vector 2136"
                      d="M7.40193 4.44201c-0.35093 -0.06106 -0.35093 -0.56483 0 -0.62588 1.27136 -0.22118 2.28254 -1.18955 2.5585 -2.45015l0.02115 -0.09663c0.07592 -0.346834 0.56972 -0.348993 0.64872 -0.00284l0.0257 0.11261c0.2861 1.25466 1.2976 2.21484 2.5654 2.43541 0.3528 0.06136 0.3528 0.56771 0 0.62907 -1.2678 0.22057 -2.2793 1.18076 -2.5654 2.43541l-0.0257 0.11261c-0.079 0.34616 -0.5728 0.344 -0.64872 -0.00284l-0.02115 -0.09662c-0.27595 -1.26061 -1.28714 -2.22897 -2.5585 -2.45015Z"
                      strokeWidth="{0.5}"
                      style={{
                        strokeWidth: "0.5px",
                        fill: "rgb(255, 255, 255)",
                      }}
                    >
                      <title>{"star-fill"}</title>
                    </path>
                    <path
                      id="Vector 2137"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.40193 4.44201c-0.35093 -0.06106 -0.35093 -0.56483 0 -0.62588 1.27136 -0.22118 2.28254 -1.18955 2.5585 -2.45015l0.02115 -0.09663c0.07592 -0.346834 0.56972 -0.348993 0.64872 -0.00284l0.0257 0.11261c0.2861 1.25466 1.2976 2.21484 2.5654 2.43541 0.3528 0.06136 0.3528 0.56771 0 0.62907 -1.2678 0.22057 -2.2793 1.18076 -2.5654 2.43541l-0.0257 0.11261c-0.079 0.34616 -0.5728 0.344 -0.64872 -0.00284l-0.02115 -0.09662c-0.27595 -1.26061 -1.28714 -2.22897 -2.5585 -2.45015Z"
                      strokeWidth="{0.5}"
                      style={{
                        strokeWidth: "0.5px",
                        stroke: "rgb(99, 31, 153)",
                      }}
                    >
                      <title>{"star-stroke"}</title>
                    </path>
                    <path
                      id="path-1"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M 3.139 12.267 L 6.889 12.267"
                      strokeWidth="{0.5}"
                      style={{
                        strokeWidth: "0.5px",
                        strokeLinecap: "round",
                      }}
                    >
                      <title>{"line-middle"}</title>
                    </path>
                    <path
                      id="Vector_3"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M 3.264 13.5 L 6.764 13.5"
                      strokeWidth="{0.5}"
                      style={{
                        strokeWidth: "0.5px",
                        strokeLinecap: "round",
                      }}
                    >
                      <title>{"line-bottom"}</title>
                    </path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div><h4>Empathy</h4></div>
                {/* <img src="/images/icons/empathy.svg" alt="Empathy"/> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                  id="No-Poverty--Streamline-Core"
                >
                  <desc>{"No Poverty Streamline Icon: https://streamlinehq.com"}</desc>
                  <g id="No-Poverty--Streamline-Core">
                    <path
                      id="Ellipse 233"
                      fill="#631f99"
                      d="M10.6 5.201a2.7 2.7 0 0 0 -2.7 2.7v0.9h5.4v-0.9a2.7 2.7 0 0 0 -2.7 -2.7Z"
                      strokeWidth={0.5}
                    />
                    <path
                      id="Ellipse 227"
                      fill="#631f99"
                      d="M8.8 2.501a1.8 1.8 0 1 0 3.6 0 1.8 1.8 0 1 0 -3.6 0"
                      strokeWidth={0.5}
                    />
                    <path
                      id="Ellipse 228"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.3 8.801v-0.9a2.7 2.7 0 0 0 -5.063 -1.307"
                      strokeWidth={0.5}
                    />
                    <path
                      id="Ellipse 227_2"
                      fill="#631f99"
                      d="M1.6 2.501a1.8 1.8 0 1 0 3.6 0 1.8 1.8 0 1 0 -3.6 0"
                      strokeWidth={0.5}
                    />
                    <path
                      id="Ellipse 228_2"
                      fill="#631f99"
                      d="M3.4 5.201a2.7 2.7 0 0 0 -2.7 2.7v0.9h5.4v-0.9a2.7 2.7 0 0 0 -2.7 -2.7Z"
                      strokeWidth={0.5}
                    />
                    <path
                      id="Ellipse 227_3"
                      fill="#631f99"
                      d="M5.201 7.899a1.8 1.8 0 1 0 3.6 0 1.8 1.8 0 1 0 -3.6 0"
                      strokeWidth={0.5}
                    />
                    <path
                      id="Ellipse 229"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.8 2.501a1.8 1.8 0 1 0 3.6 0 1.8 1.8 0 1 0 -3.6 0"
                      strokeWidth={0.5}
                    />
                    <path
                      id="Ellipse 230"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M1.6 2.501a1.8 1.8 0 1 0 3.6 0 1.8 1.8 0 1 0 -3.6 0"
                      strokeWidth={0.5}
                    />
                    <path
                      id="Ellipse 231"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.201 7.899a1.8 1.8 0 1 0 3.6 0 1.8 1.8 0 1 0 -3.6 0"
                      strokeWidth={0.5}
                    />
                    <path
                      id="Ellipse 228_3"
                      fill="#631f99"
                      d="M7.001 10.599a2.7 2.7 0 0 0 -2.7 2.7h5.4a2.7 2.7 0 0 0 -2.7 -2.7Z"
                      strokeWidth={0.5}
                    />
                    <path
                      id="Ellipse 234"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.701 13.299a2.7 2.7 0 1 0 -5.4 0"
                      strokeWidth={0.5}
                    />
                    <path
                      id="Ellipse 232"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M0.7 8.801v-0.9a2.7 2.7 0 0 1 5.063 -1.307"
                      strokeWidth={0.5}
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div><h4>Clear Communication</h4></div>
                {/* <img src="/images/icons/clear-communication.svg" alt="Clear Communication"/> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Chat-Two-Bubbles-Oval--Streamline-Core" >
                  <desc>{"Chat Two Bubbles Oval Streamline Icon: https://streamlinehq.com"}</desc>
                  <g id="Chat-Two-Bubbles-Oval--Streamline-Core">
                    <path id="Subtract" fill="#631f99" fillRule="evenodd" d="M3.05388 1.24616C3.86856 0.758171 4.80035 0.500297 5.75 0.5c0.79011 -0.000465 1.57014 0.177412 2.28194 0.52037 0.7118 0.34296 1.33701 0.84216 1.82902 1.46039 0.49204 0.61822 0.83814 1.33953 1.01254 2.11014 0.0584 0.25791 0.0971 0.51912 0.116 0.78139C10.4475 5.12918 9.85543 5 9.25 5c-0.63948 -0.00042 -1.27081 0.14347 -1.84696 0.42095 -0.57614 0.27748 -1.08224 0.68139 -1.48058 1.18165 -0.39835 0.50026 -0.67866 1.08396 -0.82007 1.70761 -0.14141 0.62365 -0.14026 1.27117 0.00337 1.89429 0.06203 0.2692 0.14996 0.5308 0.26207 0.7813 -0.66603 -0.049 -1.31775 -0.2247 -1.91975 -0.5189L0.5 11l0.88038 -2.34231C0.854423 7.86699 0.552781 6.94844 0.507584 5.99986c-0.045197 -0.94857 0.167744 -1.89164 0.616146 -2.72877 0.4484 -0.83712 1.11546 -1.53695 1.93015 -2.02493Z" clipRule="evenodd" strokeWidth={0.5} />
                    <path id="Vector" fill="#631f99" d="M9.25001 5c1.12719 0 2.20819 0.44777 3.00519 1.2448 0.797 0.79703 1.2448 1.87803 1.2448 3.0052 0.0027 0.8366 -0.2446 1.6549 -0.71 2.35l0.71 1.9 -2.39 -0.43c-0.5748 0.2803 -1.20539 0.4273 -1.84487 0.43 -0.63947 0.0027 -1.27131 -0.139 -1.84844 -0.4144 -0.57713 -0.2754 -1.08466 -0.6776 -1.48478 -1.1764 -0.40012 -0.4988 -0.68252 -1.0815 -0.82614 -1.7047 -0.14362 -0.62311 -0.14478 -1.27064 -0.00337 -1.89429 0.14141 -0.62365 0.42173 -1.20735 0.82007 -1.70761 0.39834 -0.50026 0.90444 -0.90417 1.48058 -1.18165C7.9792 5.14347 8.61053 4.99958 9.25001 5Z" strokeWidth={0.5} />
                    <path id="Vector_2" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="M9.25001 5c1.12719 0 2.20819 0.44777 3.00519 1.2448 0.797 0.79703 1.2448 1.87803 1.2448 3.0052 0.0027 0.8366 -0.2446 1.6549 -0.71 2.35l0.71 1.9 -2.39 -0.43c-0.5748 0.2803 -1.20539 0.4273 -1.84487 0.43 -0.63947 0.0027 -1.27131 -0.139 -1.84844 -0.4144 -0.57713 -0.2754 -1.08466 -0.6776 -1.48478 -1.1764 -0.40012 -0.4988 -0.68252 -1.0815 -0.82614 -1.7047 -0.14362 -0.62311 -0.14478 -1.27064 -0.00337 -1.89429 0.14141 -0.62365 0.42173 -1.20735 0.82007 -1.70761 0.39834 -0.50026 0.90444 -0.90417 1.48058 -1.18165C7.9792 5.14347 8.61053 4.99958 9.25001 5v0Z" strokeWidth={0.5} />
                    <path id="Vector_3" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" d="M9.86002 2.51004c-0.67343 -0.85693 -1.5973 -1.48255 -2.64299 -1.789757C6.17134 0.413077 5.05588 0.439575 4.02596 0.796086 2.99604 1.1526 2.10292 1.82138 1.47093 2.70932 0.838948 3.59725 0.499561 4.66016 0.500023 5.75004c-0.003099 1.036 0.303333 2.04932 0.879997 2.91L0.500023 11l2.119997 -0.38" strokeWidth={0.5} />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <div className="borderBottom"></div>

        <section id="SecurityCompliance" className="flex flex-col items-center min-h-[calc(50vh)] py-32 md:py-40 lg:py-52">
          <h5 className="mb-4 md:mb-8 lg:mb-12 text-neutral-200 deboss">
            Security & Compliance
          </h5>
          <ul className="flex flex-col items-center text-left md:text-center gap-12 md:gap-12 px-8 md:px-12 lg:px-24" role="list">
            <li className="w-[98%] md:w-[90%] lg:w-[80%]">
              <h3 className="mb-8 md:mb-12 lg:mb-16 py-8 text-transparent bg-clip-text bg-gradient-to-tl from-[var(--purple-250)] to-purple-100">
                We take Privacy, Security, and Compliance with the utmost seriousness
              </h3>
            </li>
            <li className="flex flex-col md:flex-row mb-0 lg:mb-20">
              <ol className="basis-1/3 mt-0 md:mt-20 lg:mt-32 mb-12 md:mb-0">
                <h4 className="leading-[2.1rem] md:leading-[2.5rem] font-semibold mb-8 md:mb-8 lg:mb-12">
                  Security
                </h4>
                <p className="leading-[2.1rem] md:leading-[2.5rem] font-semibold text-neutral-300">
                The privacy of our users is paramount, and we take industry‑excelling measures to guarantee their safety.
                </p>
              </ol>
              <ol className="hidden md:inline-flex items-center basis-1/3 content-center justify-center">
                <div className="md:w-[25rem] md:h-[25rem] lg:w-[30rem] lg:h-[30rem] mx-10">
                  <img className="" src="/images/icons/shield.svg" alt="shield"/>
                </div>
              </ol>
              <ol className="flex flex-col basis-1/3 mt-0 md:mt-20 lg:mt-32">
                <h4 className="leading-[2.1rem] md:leading-[2.5rem] font-semibold mb-8 md:mb-8 lg:mb-12">
                  Privacy
                </h4>
                <p className="leading-[2.1rem] md:leading-[2.5rem] font-semibold mt-2 text-neutral-300">
                  We adhere to the GDPR as our base of compliance.<br/>
                  Furthermore, we are in accordance with various privacy agreements worldwide.
                </p>
              </ol>
            </li>
            <li className="w-[100%] md:w-[90%] lg:w-[80%] mb-8 md:mb-8 lg:mb-12 max-w-[100%] md:max-w-[60%]">
              <h4 className="leading-[2.1rem] md:leading-[2.5rem] font-semibold mb-8 md:mb-8 lg:mb-12">
              Compliance
              </h4>
              <p className="leading-[2.1rem] md:leading-[2.5rem] font-semibold  text-neutral-300">
              We are continuously working to include full compliance in all regions we operate.<br/>
              Additionally, we count on the help of external agencies to ensure the best safeguarding practices and compliance for all regulatory purposes whilst providing users with transparent choices on how to manage their data.
              </p>
            </li>
            <div className="flex flex-row justify-center shrink w-full h-[10rem] space-x-6 md:space-x-10">
              <img className="h-auto object-scale-down max-w-full max-h-full" src="/images/logos/gdpr.webp" alt="gdpr"/>
              <img className="h-auto object-scale-down max-w-full max-h-full" src="/images/logos/cppa.webp" alt="cppa"/>
              <img className="h-auto object-scale-down max-w-full max-h-full" src="/images/logos/apa.webp" alt="apa"/>
              <img className="h-auto object-scale-down max-w-full max-h-full" src="/images/logos/ccpa.webp" alt="ccpa"/>
            </div>
          </ul>
        </section>

        <div className="borderBottom"></div>

        <section id="Policies" className="flex flex-col items-center min-h-[calc(50vh)] py-32 md:py-40 lg:py-52">
            <h5 className="mb-4 md:mb-8 lg:mb-12 text-neutral-200 deboss">
              Company Policies
            </h5>
            <h3 className="mb-8 md:mb-12 lg:mb-16 py-8 px-8 md:px-12 lg:px-24 text-transparent bg-clip-text bg-gradient-to-t from-[var(--purple-250)] to-purple-100">
              Policies and Guidelines of Usage
            </h3>
            <h6 className="h7 font-medium text-left leading-[2.1rem] md:leading-[2.5rem] pb-16 md:pb-12 px-8 md:px-12 lg:px-[6rem] xl:px-[24rem]">
              In accordance with the aforementioned agreements, this section outlines the rules of the road for using our website.<br/>
              It covers important topics like privacy, acceptable use, and limitations of liability. By understanding these policies, you&apos;ll have a smooth and enjoyable experience on our site.<br/>
              You can find a quick rundown below each one, but if you have any questions, don&apos;t hesitate to reach out to us at privacy@mmapp.com.
            </h6>
            {/* <Dialog url={"https://app.termly.io/document/privacy-policy/2ffc1934-7508-4685-85e3-56eb7785d5e1#otherlaws"} title={"Privacy Policy"} btnLabel={"Privacy Policy"} />
            <br/> */}

            <div className="flex flex-row flex-wrap justify-center mx-8 md:mx-6 lg:mx-8">
              <CardPolicies className='basis-[90%] md:basis-[44%] xl:basis-1/4' id="Privacy Policy">
                <CardPoliciesHeader>
                  <CardPoliciesTitle>
                    Privacy Policy
                  </CardPoliciesTitle>
                  <CardPoliciesDescription>
                    This policy explains how we collect, use, and protect your personal information.<br/>
                    It details what data we gather when you use our platform, how we use it to improve your experience, and how we keep it secure.<br/>
                    This policy also outlines your choices regarding your information, including your opt-out options and data access rights.
                  </CardPoliciesDescription>
                </CardPoliciesHeader>
                <CardPoliciesButton
                  href="/company/policies/privacy-policy"
                  data-page="/company/policies/privacy-policy"
                  className=""
                >
                  Privacy Policy
                </CardPoliciesButton>
              </CardPolicies>

              <CardPolicies className='basis-[90%] md:basis-[44%] xl:basis-1/4' id="Cookie Policy">
                <CardPoliciesHeader>
                  <CardPoliciesTitle>
                    Cookie Policy
                  </CardPoliciesTitle>
                  <CardPoliciesDescription>
                    This details the types of cookies we use on our website and mobile apps.<br/>
                    We explain what cookies are, why we use them (e.g., session management, analytics, personalization), and how you can control your cookie preferences through your browser or device settings.
                  </CardPoliciesDescription>
                </CardPoliciesHeader>
                <CardPoliciesButton
                  href="/company/policies/cookie-policy"
                  data-page="/company/policies/cookie-policy"
                  className=""
                >
                  Cookie Policy
                </CardPoliciesButton>
              </CardPolicies>

              <CardPolicies className='basis-[90%] md:basis-[44%] xl:basis-1/4' id="Terms & Conditions">
                <CardPoliciesHeader>
                  <CardPoliciesTitle>
                    Terms & Conditions
                  </CardPoliciesTitle>
                  <CardPoliciesDescription>
                    This outlines the rules for using our website, mobile apps, and our associated services.<br/>
                    It covers topics like user accounts, payment terms, acceptable content, and limitations of liability.
                  </CardPoliciesDescription>
                </CardPoliciesHeader>
                <CardPoliciesButton
                  href="/company/policies/terms-conditions"
                  data-page="/company/policies/terms-conditions"
                  className=""
                >
                  Terms & Conditions
                </CardPoliciesButton>
              </CardPolicies>

              <CardPolicies className='basis-[90%] md:basis-[44%] xl:basis-1/4' id="EULA">
                <CardPoliciesHeader>
                  <CardPoliciesTitle>
                    EULA
                  </CardPoliciesTitle>
                  <CardPoliciesDescription>
                    Our End-User License Agreement (EULA) is very similar to our Terms and Conditions (T&C), but broadens the definition of users and provides the differences between the different types of users.<br/>
                    Consult our EULA for more information on how we use your data.
                  </CardPoliciesDescription>
                </CardPoliciesHeader>
                <CardPoliciesButton
                  href="/company/policies/eula"
                  data-page="/company/policies/eula"
                  className=""
                >
                  EULA
                </CardPoliciesButton>
              </CardPolicies>

              <CardPolicies className='basis-[90%] md:basis-[44%] xl:basis-1/4' id="Disclaimer">
                <CardPoliciesHeader>
                  <CardPoliciesTitle>
                    Disclaimer
                  </CardPoliciesTitle>
                  <CardPoliciesDescription>
                    This agreement outlines the terms and conditions for using our SaaS platform and mobile applications. It clarifies what you can and cannot do with our service, such as acceptable use guidelines, limitations on data storage and usage, and intellectual property ownership.
                  </CardPoliciesDescription>
                </CardPoliciesHeader>
                <CardPoliciesButton
                  href="/company/policies/disclaimer"
                  data-page="/company/policies/disclaimer"
                  className=""
                >
                  Disclaimer
                </CardPoliciesButton>
              </CardPolicies>

              <CardPolicies className='basis-[90%] md:basis-[44%] xl:basis-1/4' id="Acceptable Use Policy">
                <CardPoliciesHeader>
                  <CardPoliciesTitle>
                    Acceptable Use Policy
                  </CardPoliciesTitle>
                  <CardPoliciesDescription>
                    Our Acceptable Use Policy outlines the proper ways to use our platform and mobile applications.<br/>
                    To ensure a safe and productive environment for everyone, it prohibits activities such as using our service for illegal purposes, attempting to breach security measures, disrupting the platform&apos;s functionality, infringing on intellectual property rights, or collecting personal information without authorization.
                  </CardPoliciesDescription>
                </CardPoliciesHeader>
                <CardPoliciesButton
                  href="/company/policies/acceptable-use-policy"
                  data-page="/company/policies/acceptable-use-policy"
                  className=""
                >
                  Acceptable Use Policy
                </CardPoliciesButton>
              </CardPolicies>

              <CardPolicies className='basis-[90%] md:basis-[44%] xl:basis-1/4' id="Minimum & Recommended Requirements">
                <CardPoliciesHeader>
                  <CardPoliciesTitle>
                    Minimum & Recommended Requirements
                  </CardPoliciesTitle>
                  <CardPoliciesDescription>
                    This document describes the minimum and recommended requirements for the various devices running the MMAPP Platform, including those for our Web Dashboard, the RecordKeeper app, and the Judge app.
                  </CardPoliciesDescription>
                </CardPoliciesHeader>
                <CardPoliciesButton
                  href="/company/policies/minimum-recommended-requirements"
                  data-page="/company/policies/minimum-recommended-requirements"
                  className=""
                >
                  Requirements
                </CardPoliciesButton>
              </CardPolicies>
          </div>
        </section>
      </div>
    </>
  )
};

/* Company.getInitialProps = async (context: any) => {
  console.log('This component is being rendered by a Next.js page.');
  return {};
}; */

export default Company;


