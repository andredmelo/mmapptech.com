"use client";
import React from "react";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Company = (props: any) => {
  //console.log(props);

  /* const router = useRouter();

    useEffect(() => {
        const handlePageLoad = () => {
            // Your custom function to run after the new page is loaded
            console.log('Function executed after page load');
        };

        if (router.isReady) {
            router.events.on('routeChangeComplete', handlePageLoad);
        }

        return () => {
            if (router.isReady) {
                router.events.off('routeChangeComplete', handlePageLoad);
            }
        };
    }, [router.isReady]); // Listen for changes in router readiness */

  return (
    <>
      <div id="companyVision" className="content-spacer">
        <h2>companyVision</h2>
        <br/>
        <h4>Overview of Federation Affairs</h4>
        <h4>Visual Reports with Actionable Insights</h4>
        <h4>Easy Form Management</h4>
        <h4>Seamless Sign-up process for all your members<br/>(Officials, Athletes, Coaches, Promoters and Clubs)</h4>
        <h4>Intuitive Member Management</h4>
        <br/>
      </div>
      <div id="companyMission" className="content-spacer">
        <h2>companyMission</h2>
        <br/>
        <h4>Overview of Federation Affairs</h4>
        <h4>Visual Reports with Actionable Insights</h4>
        <h4>Easy Form Management</h4>
        <h4>Seamless Sign-up process for all your members<br/>(Officials, Athletes, Coaches, Promoters and Clubs)</h4>
        <h4>Intuitive Member Management</h4>
        <br/>
      </div>
      <div id="companyCoreValues" className="content-spacer">
        <h2>companyCoreValues</h2>
        <br/>
        <h4>Overview of Federation Affairs</h4>
        <h4>Visual Reports with Actionable Insights</h4>
        <h4>Easy Form Management</h4>
        <h4>Seamless Sign-up process for all your members<br/>(Officials, Athletes, Coaches, Promoters and Clubs)</h4>
        <h4>Intuitive Member Management</h4>
        <br/>
      </div>
      <div id="companySecurityCompliance" className="content-spacer">
        <h2>companySecurityCompliance</h2>
        <br/>
        <h4>Overview of Federation Affairs</h4>
        <h4>Visual Reports with Actionable Insights</h4>
        <h4>Easy Form Management</h4>
        <h4>Seamless Sign-up process for all your members<br/>(Officials, Athletes, Coaches, Promoters and Clubs)</h4>
        <h4>Intuitive Member Management</h4>
        <br/>
      </div>
      <div id="companyPolicies" className="content-spacer">
        <h2>companyPolicies</h2>
        <br/>
        <h4>Overview of Federation Affairs</h4>
        <h4>Visual Reports with Actionable Insights</h4>
        <h4>Easy Form Management</h4>
        <h4>Seamless Sign-up process for all your members<br/>(Officials, Athletes, Coaches, Promoters and Clubs)</h4>
        <h4>Intuitive Member Management</h4>
        <br/>
      </div>
  </>
)};

Company.getInitialProps = async (context: any) => {
  console.log('This component is being rendered by a Next.js page.');
  return {};
};

export default Company;
