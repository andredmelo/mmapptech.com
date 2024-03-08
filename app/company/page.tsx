/* "use client"; */
import React from "react";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Company',
}

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

  return (
    <>
      <div className="companyPage">
        <section id="Mission" className="">
          <div>
            <h1>Our Mission</h1>
            <h4>
              Our mission is to accelerate the recognition of MMA as an Olympic sport.<br/>
              In pursuit of this goal, we build solutions designed to help Federations and their respective members streamline their activities and build cohesiveness in MMA judging by offering tools for officials to discuss their assessments more profoundly and amplify their judging abilities.
            </h4>
          </div>
        </section>
        <section id="Vision" className="">
          <div>
            <h1>Our Vision</h1>
            <h4>
              Our vision is to create a common language and unit of measurement for officials to increase transparency, consistency, and coherence in MMA and promote an honest discussion between all stakeholders of the sport on the best path forward to the betterment of all.
            </h4>
          </div>
        </section>
        <section id="CoreValues" className="">
          <div>
            <h1>Core Values</h1>
              <h3>Objectivity</h3>
              <h3>Consistency</h3>
              <h3>Growth & Learning</h3>
              <h3>Accountability</h3>
              <h3>Safety</h3>
              <h3>Compliance</h3>
              <h3>Insist on Excellence</h3>
              <h3>Innovation</h3>
              <h3>Empathy</h3>
              <h3>Clear Communication</h3>
          </div>
        </section>
        <section id="SecurityCompliance" className="">
          <div>
            <h1>Security and Compliance</h1>
            <h4>
              Striving to become the document of record for the sport, we take Privacy, Security, and Compliance with the utmost seriousness.<br/>
              The privacy of our users is paramount, and we take industry-excelling measures to guarantee their safety.<br/>
              We adhere to the GDPR as our base of compliance. Still, we are in accordance with various privacy agreements worldwide, such as the US's CCPA, Australia's Privacy Act, and Canada's DCIA.<br/>
              We are continuously working to include full compliance in all regions we operate. Additionally, we count on the help of external agencies to ensure the best safeguarding practices and compliance for all regulatory purposes whilst providing users with transparent choices on how to manage their data.
            </h4>
          </div>
        </section>
        <section id="Policies" className="">
          <div>
            <h1>Company Policies ??? Where are they Señor Suave???</h1>
            <br/>
            <h4>Bla Bla Bla</h4>
            <h4>Bla Bla Bla</h4>
            <h4>Bla Bla Bla</h4>
            <h4>Bla Bla Bla</h4>
            <h4>Bla Bla Bla</h4>
            <h4>Bla Bla Bla</h4>
            <h4>Bla Bla Bla</h4>
            <h4>Bla Bla Bla</h4>
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
