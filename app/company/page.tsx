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
      <div className="companyPage">
        <section id="Mission" className="flex justify-center">
          <div className={clsx("w-full h-[82vh] flex flex-col md:flex-row relative",
          "hero1ContainerMargins min-h-[55rem] md:min-h-[70rem] lg:min-h-[68rem] lg:max-h-[83rem] rounded-b-[3rem] bg-no-repeat bg-bottom bg-bgRadialGradientDown")} /* style={{ backgroundImage: `url("data:image/svg+xml,${svgString}")`, backgroundSize:"100%"}} */>
            <div className="flex flex-col justify-top z-20 max-w-[30rem] md:max-w-[50rem] lg:max-w-[60rem] hero1ContentMargins text-left">
              <h5 className="mb-4 md:mb-8 lg:mb-12 text-neutral-200">
                Our Mission
              </h5>
              <h3 className="mb-8 md:mb-12 lg:mb-16 py-8 text-transparent bg-clip-text bg-gradient-to-b from-[var(--purple-250)] to-purple-100">
                Accelerate the Recognition of MMA as an Olympic Sport
              </h3>
              <div className="">
                <p className="leading-[2.1rem] md:leading-[2.5rem] text-left w-[27rem] md:w-[42rem] lg:w-[51rem]">
                In pursuit of this goal, we build solutions designed to help Federations and their respective members streamline their activities and build cohesiveness in MMA judging by offering tools for officials to discuss their assessments more profoundly and amplify their judging abilities.
                </p>
              </div>
            </div>
            <img className="z-10 max-h-full max-w-[60vw] md:max-w-[45vw] bottom-[-0.1rem] right-[1rem] absolute md:absolute object-contain" src="/images/referees/herb-dean.webp" alt="herb dean"/>
          </div>
        </section>

        <div className="borderBottom"></div>

        <section id="Vision" className="flex justify-center">
          <div className={clsx("w-full h-full flex flex-col md:flex-row relative bg-bgRadialGradientUp",
          "hero1ContainerMargins min-h-[60rem] md:min-h-[75rem] xl:min-h-[60rem] rounded-[3rem] px-10 md:px-20 lg:px-32 py-28 md:py-32 lg:py-32 border-2 border-neutral-900")}>
            <div className="flex flex-col justify-top z-20 text-center">
              <h5 className="mb-4 md:mb-8 lg:mb-12 text-neutral-200">
                Our Vision
              </h5>
              <h3 className="mb-8 md:mb-12 lg:mb-16 py-8 text-transparent bg-clip-text bg-gradient-to-bl from-[var(--purple-250)] to-purple-100">
              Create a common language and unit of measurement for officiating MMA
              </h3>
              <div className="flex justify-center">
                <p className="text-center leading-[2.1rem] md:leading-[2.5rem] w-[95%] md:w-[90%]">
                  By creating a common language and unit of measurement for officials, transparency, consistency, and coherence increase in MMA and promote an honest discussion between all stakeholders of the sport on the best path forward to the betterment of all.
                </p>
              </div>
              <div className="">
                <div className="flex flex-col md:flex-row items-start justify-between mt-12 md:mt-20 lg:mt-32 mx-2 md:mx-0 lg:mx-8">

                  <div className="flex flex-col max-w-[95%] md:max-w-[35rem] lg:max-w-[31rem] px-4 rounded-[1rem]">
                    <dt className="inline-flex items-center gap-3 max-w-full">
                      <div className="flex items-center justify-center text-white pr-4 py-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-slack" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M12 12v-6a2 2 0 0 1 4 0v6m0 -2a2 2 0 1 1 2 2h-6"></path>
                          <path d="M12 12h6a2 2 0 0 1 0 4h-6m2 0a2 2 0 1 1 -2 2v-6"></path>
                          <path d="M12 12v6a2 2 0 0 1 -4 0v-6m0 2a2 2 0 1 1 -2 -2h6"></path>
                          <path d="M12 12h-6a2 2 0 0 1 0 -4h6m-2 0a2 2 0 1 1 2 -2v6"></path>
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

                  <div className="flex flex-col max-w-[95%] md:max-w-[35rem] lg:max-w-[31rem] px-4 py-8 md:py-0 bgRadialGradientLeft rounded-[1rem]">
                    <dt className="inline-flex items-center gap-3 max-w-full">
                      <div className="flex items-center justify-center text-white pr-4 py-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-artboard" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <rect x="8" y="8" width="8" height="8" rx="1"></rect> <line x1="3" y1="8" x2="4" y2="8"></line> <line x1="3" y1="16" x2="4" y2="16"></line> <line x1="8" y1="3" x2="8" y2="4"></line> <line x1="16" y1="3" x2="16" y2="4"></line> <line x1="20" y1="8" x2="21" y2="8"></line> <line x1="20" y1="16" x2="21" y2="16"></line> <line x1="8" y1="20" x2="8" y2="21"></line> <line x1="16" y1="20" x2="16" y2="21"></line> </svg>
                      </div>
                      <div className="h7 font-medium leading-6 text-white">
                        Consistency
                      </div>
                    </dt>
                    <p className="text-left font-normal mt-4 text-neutral-200">
                    Establish common terminology and metrics that can be applied uniformly across the sport, reducing ambiguity and subjectivity.
                    </p>
                  </div>

                  <div className="flex flex-col max-w-[95%] md:max-w-[35rem] lg:max-w-[31rem] px-4">
                    <dt className="inline-flex items-center gap-3 max-w-full">
                      <div className="flex items-center justify-center text-white pr-4 py-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-medal" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 4v3m-4 -3v6m8 -6v6"></path> <path d="M12 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z"></path> </svg>
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
          </div>
        </section>
        
        <div className="borderBottom"></div>

        <section id="CoreValues" className="flex flex-col items-center">
          <h5 className="mb-4 md:mb-8 lg:mb-12 text-neutral-200">Core Values</h5>
          <h3 className="mb-8 md:mb-12 lg:mb-16 py-8 text-transparent bg-clip-text bg-gradient-to-l from-[var(--purple-250)] to-purple-100">
            What keeps us grounded
          </h3>
          <div className="carouselWrapper">
            <div className="box">
              <div className="card">
                <div><h4>Objectivity</h4></div>
                <img src="/images/icons/objectivity.svg" alt="Objectivity"/>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div><h4>Consistency</h4></div>
                <img src="/images/icons/consistency.svg" alt="Consistency"/>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div><h4>Growth & Learning</h4></div>
                <img src="/images/icons/growth-learning.svg" alt="Growth & Learning"/>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div><h4>Accountability</h4></div>
                <img src="/images/icons/accountability.svg" alt="Accountability"/>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div><h4>Safety</h4></div>
                <img src="/images/icons/safety.svg" alt="Safety"/>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div><h4>Compliance</h4></div>
                <img src="/images/icons/compliance.svg" alt="Compliance"/>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div><h4>Insist on Excellence</h4></div>
                <img src="/images/icons/excellence.svg" alt="Insist on Excellence"/>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div><h4>Innovation</h4></div>
                <img src="/images/icons/innovation.svg" alt="Innovation"/>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div><h4>Empathy</h4></div>
                <img src="/images/icons/empathy.svg" alt="Empathy"/>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div><h4>Clear Communication</h4></div>
                <img src="/images/icons/clear-communication.svg" alt="Clear Communication"/>
              </div>
            </div>
          </div>
        </section>
        
        <div className="borderBottom"></div>

        <section id="SecurityCompliance" className="flex flex-col items-center min-h-[calc(50vh)]">
          <h5 className="mb-4 md:mb-8 lg:mb-12 text-neutral-200">Security & Compliance</h5>
          <ul className="flex flex-col items-center text-left md:text-center gap-12 md:gap-12 px-8 md:px-12 lg:px-24" role="list">
            <li className="w-[98%] md:w-[90%] lg:w-[80%]">
              <h3 className="mb-8 md:mb-12 lg:mb-16 py-8 text-transparent bg-clip-text bg-gradient-to-tl from-[var(--purple-250)] to-purple-100">
                Striving to become the document of record for the sport, we take Privacy, Security, and Compliance with the utmost seriousness
              </h3>
            </li>
            <li className="flex flex-col md:flex-row mb-0 lg:mb-16">
              <ol className="basis-1/3 mt-0 md:mt-20 lg:mt-32 mb-12 md:mb-0">
                <h4 className="leading-[2.1rem] md:leading-[2.5rem] font-semibold mb-8 md:mb-8 lg:mb-12">
                Privacy
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
                Security
                </h4>
                <p className="leading-[2.1rem] md:leading-[2.5rem] font-semibold mt-2 text-neutral-300">
                  We adhere to the GDPR as our base of compliance.<br/>
                  Furthermore, we are in accordance with various privacy agreements worldwide.
                </p>
              </ol>
            </li>
            <li className="w-[100%] md:w-[90%] lg:w-[80%]">
              <h4 className="leading-[2.1rem] md:leading-[2.5rem] font-semibold mb-8 md:mb-8 lg:mb-12">
              Compliance
              </h4>
              <p className="leading-[2.1rem] md:leading-[2.5rem] font-semibold  text-neutral-300">
              We are continuously working to include full compliance in all regions we operate. Additionally, we count on the help of external agencies to ensure the best safeguarding practices and compliance for all regulatory purposes whilst providing users with transparent choices on how to manage their data.
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
        
        <section id="Policies" className="flex flex-col items-center min-h-[calc(50vh)]">
            <h5 className="mb-4 md:mb-8 lg:mb-12 text-neutral-200">Company Policies</h5>
              <h3 className="mb-8 md:mb-12 lg:mb-16 py-8 text-transparent bg-clip-text bg-gradient-to-t from-[var(--purple-250)] to-purple-100">
                Our Policies are tight
              </h3>
            {/* <Dialog url={"https://app.termly.io/document/privacy-policy/2ffc1934-7508-4685-85e3-56eb7785d5e1#otherlaws"} title={"Privacy Policy"} btnLabel={"Privacy Policy"} />
            <br/> */}

            <div className="flex flex-row flex-wrap justify-center mx-8 md:mx-6 lg:mx-8">
              <CardPolicies className='basis-[90%] md:basis-[44%] xl:basis-1/4' id="Privacy Policy">
                <CardPoliciesHeader>
                  <CardPoliciesTitle>
                    Privacy Policy
                  </CardPoliciesTitle>
                  <CardPoliciesDescription>
                    Consult our Privacy Policy for more information on how we use your data.
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
                    Consult our Cookie Policy for more information on how we use your data.
                  </CardPoliciesDescription>
                </CardPoliciesHeader>
                <CardPoliciesButton
                  href="/company/policies/privacy-policy"
                  data-page="/company/policies/privacy-policy"
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
                    Consult our Terms & Conditions for more information on how we use your data.
                  </CardPoliciesDescription>
                </CardPoliciesHeader>
                <CardPoliciesButton
                  href="/company/policies/privacy-policy"
                  data-page="/company/policies/privacy-policy"
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
                    Consult our EULA for more information on how we use your data.
                  </CardPoliciesDescription>
                </CardPoliciesHeader>
                <CardPoliciesButton
                  href="/company/policies/privacy-policy"
                  data-page="/company/policies/privacy-policy"
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
                    Consult our Disclaimer for more information on how we use your data.
                  </CardPoliciesDescription>
                </CardPoliciesHeader>
                <CardPoliciesButton
                  href="/company/policies/privacy-policy"
                  data-page="/company/policies/privacy-policy"
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
                    Consult our Acceptable Use Policy for more information on how we use your data.
                  </CardPoliciesDescription>
                </CardPoliciesHeader>
                <CardPoliciesButton
                  href="/company/policies/privacy-policy"
                  data-page="/company/policies/privacy-policy"
                  className=""
                >
                  Acceptable Use Policy
                </CardPoliciesButton>
              </CardPolicies>
          </div>
        </section>
      </div>
    </>
  )
};

Company.getInitialProps = async (context: any) => {
  /* console.log('This component is being rendered by a Next.js page.'); */
  return {};
};

export default Company;
