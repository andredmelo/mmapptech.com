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
import { CardPolicies, CardPoliciesDescription, CardPoliciesHeader, CardPoliciesTitle, CardPoliciesButton } from '@/components/ui/card-policies'

/* export const metadata: Metadata = {
  title: 'Company',
} */

function HeroBGSVG({}: {}) {
  return (
    <svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="mask0">
          <rect fill="rgb(255, 255, 255)" width="500" height="400"></rect>
        </clipPath>
        <linearGradient id="gradient-1">
          <stop offset="0.345" stopColor="rgb(20, 15, 15)"></stop>
          <stop offset="1" stopColor="rgb(128, 0, 128)"></stop>
        </linearGradient>
        <radialGradient id="radial-gradient" gradientUnits="userSpaceOnUse" cx="256.082" cy="-0.516" r="250" spreadMethod="pad" gradientTransform="matrix(-0.004168, 1.497955, -2.776109, -0.007725, 261.7983, -384.24772)" href="#gradient-1"></radialGradient>
      </defs>
      <g clip-path="url(#mask0)">
        <rect fill="url(#radial-gradient)" width="1000" height="400" x="-250"></rect>
      </g>
    </svg>

  );
}

const svgString = encodeURIComponent(
  ReactDOMServer.renderToStaticMarkup(<HeroBGSVG />)
);

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
      const loop = horizontalLoop(boxes, {paused: false, repeat:-1, speed:1.5});

  /* GSDevTools.create(); */

  },
  { dependencies: [horizontalLoop], revertOnUpdate: true, /* scope: main */ }
  );

  return (
    <>
      <div className="companyPage">
        <section id="Mission" className="flex justify-center">
          <div className={clsx("w-full h-full flex flex-col md:flex-row relative",
          "hero1ContainerMargins min-h-[60rem] md:min-h-[65rem] xl:min-h-[80rem] rounded-b-[3rem] bg-no-repeat bg-bottom ")} style={{ backgroundImage: `url("data:image/svg+xml,${svgString}")`, backgroundSize:"100%"}}>
            <div className="flex flex-col justify-top z-20 max-w-[30rem] md:max-w-[50rem] lg:max-w-[60rem] hero1ContentMargins text-left">
              <h2 className="mb-4 md:mb-8 lg:mb-12">
                Our Mission:
              </h2>
              <h3 className="mb-8 md:mb-12 lg:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[var(--purple-250)] to-purple-100">
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

        <section id="Vision" className="flex flex-col items-center min-h-[calc(50vh)] space-y-24">
            <h2>Our Vision</h2>
            <h5>
              Our vision is to create a common language and unit of measurement for officials to increase transparency, consistency, and coherence in MMA and promote an honest discussion between all stakeholders of the sport on the best path forward to the betterment of all.
            </h5>
        </section>

        <section id="CoreValues" className="flex flex-col items-center space-y-24">
            <h2>Core Values</h2>
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

        <section id="SecurityCompliance" className="flex flex-col items-center min-h-[calc(50vh)]">
          <h2 className="text-center">Security & Compliance</h2>
          <ul className="flex flex-col items-center text-left md:text-center gap-6 md:gap-12 p-8 md:p-12 lg:p-24 space-y-6 md:space-y-8 lg:space-y-6" role="list">
            <li className="w-[98%] md:w-[90%] lg:w-[80%]">
              <h4 className="leading-[3rem] md:leading-[4rem] lg:leading-[5rem] font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-[var(--purple-250)] to-purple-100">
                Striving to become the document of record for the sport, we take Privacy, Security, and Compliance with the utmost seriousness
              </h4>
            </li>
            <li className="flex flex-col md:flex-row">
              <ol className="basis-1/3 mt-0 md:mt-20 lg:mt-32 mb-12 md:mb-0">
                <h4 className="leading-[2.1rem] md:leading-[2.5rem] font-semibold mb-8 md:mb-8 lg:mb-12">
                Privacy
                </h4>
                <p className="leading-[2.1rem] md:leading-[2.5rem] font-semibold text-neutral-300">
                The privacy of our users is paramount, and we take industry-excelling measures to guarantee their safety.
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
                  GDPR is our base of compliance.<br/>
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
        
        <section id="Policies" className="flex flex-col items-center min-h-[calc(50vh)]">
            <h2 className="text-center mb-24">Company Policies</h2>
            {/* <Dialog url={"https://app.termly.io/document/privacy-policy/2ffc1934-7508-4685-85e3-56eb7785d5e1#otherlaws"} title={"Privacy Policy"} btnLabel={"Privacy Policy"} />
            <br/> */}

            <div className="flex flex-row flex-wrap justify-center mx-20 md:mx-10 lg:mx-8">
              <CardPolicies className='' id="Privacy Policy">
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
              <CardPolicies className='' id="Cookie Policy">
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
              <CardPolicies className='' id="Terms & Conditions">
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
              <CardPolicies className='' id="EULA">
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
              <CardPolicies className='' id="Disclaimer">
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
              <CardPolicies className='' id="Acceptable Use Policy">
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
