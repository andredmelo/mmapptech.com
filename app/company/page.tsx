"use client";
import React from "react";
/* import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; */
import { Metadata } from 'next'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

import horizontalLoop from '@/components/HorizontalLoop';
import { Dialog } from '@/components/ui/dialog'

/* export const metadata: Metadata = {
  title: 'Company',
} */

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
        <section id="Mission" className="">
          <div className="defaultDiv">
            <h1>Our Mission</h1>
            <h4>
              Our mission is to accelerate the recognition of MMA as an Olympic sport.<br/>
              In pursuit of this goal, we build solutions designed to help Federations and their respective members streamline their activities and build cohesiveness in MMA judging by offering tools for officials to discuss their assessments more profoundly and amplify their judging abilities.
            </h4>
          </div>
        </section>
        <section id="Vision" className="">
          <div className="defaultDiv">
            <h1>Our Vision</h1>
            <h4>
              Our vision is to create a common language and unit of measurement for officials to increase transparency, consistency, and coherence in MMA and promote an honest discussion between all stakeholders of the sport on the best path forward to the betterment of all.
            </h4>
          </div>
        </section>
        <section id="CoreValues" className="flex flex-col">
          <div className="defaultDiv">
            <h1>Core Values</h1>
          </div>
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
        <section id="SecurityCompliance" className="">
          <div className="defaultDiv">
            <h1>Security and Compliance</h1>
            <h4>
              Striving to become the document of record for the sport, we take Privacy, Security, and Compliance with the utmost seriousness.<br/>
              The privacy of our users is paramount, and we take industry-excelling measures to guarantee their safety.<br/>
              We adhere to the GDPR as our base of compliance. Still, we are in accordance with various privacy agreements worldwide, such as the US&apos;s CCPA, Australia&apos;s Privacy Act, and Canada&apos;s DCIA.<br/>
              We are continuously working to include full compliance in all regions we operate. Additionally, we count on the help of external agencies to ensure the best safeguarding practices and compliance for all regulatory purposes whilst providing users with transparent choices on how to manage their data.
            </h4>
          </div>
        </section>
        <section id="policies" className="">
          <div className="defaultDiv">
            <h1>Company Policies</h1>
            <Dialog url={"https://app.termly.io/document/privacy-policy/2ffc1934-7508-4685-85e3-56eb7785d5e1#otherlaws"} title={"Privacy Policy"} btnLabel={"Privacy Policy"} />
            <br/>
            <a
              href="/company/policies/privacy-policy"
              data-page="/company/policies/privacy-policy"
              data-link=""
              className="dropdown-link"
            >
                Privacy Policy
            </a>
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
