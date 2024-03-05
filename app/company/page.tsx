"use client";
import React from "react";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

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
      <div id="Vision" className="content-spacer">
        <h2>companyVision</h2>
        <br/>
        <h4>Overview of Federation Affairs</h4>
        <h4>Visual Reports with Actionable Insights</h4>
        <h4>Easy Form Management</h4>
        <h4>Seamless Sign-up process for all your members<br/>(Officials, Athletes, Coaches, Promoters and Clubs)</h4>
        <h4>Intuitive Member Management</h4>
        <br/>
      </div>
      <div id="Mission" className="content-spacer">
        <h2>companyMission</h2>
        <br/>
        <h4>Overview of Federation Affairs</h4>
        <h4>Visual Reports with Actionable Insights</h4>
        <h4>Easy Form Management</h4>
        <h4>Seamless Sign-up process for all your members<br/>(Officials, Athletes, Coaches, Promoters and Clubs)</h4>
        <h4>Intuitive Member Management</h4>
        <br/>
      </div>
      <div id="CoreValues" className="content-spacer">
        <h2>companyCoreValues</h2>
        <br/>
        <h4>Overview of Federation Affairs</h4>
        <h4>Visual Reports with Actionable Insights</h4>
        <h4>Easy Form Management</h4>
        <h4>Seamless Sign-up process for all your members<br/>(Officials, Athletes, Coaches, Promoters and Clubs)</h4>
        <h4>Intuitive Member Management</h4>
        <br/>
      </div>
      <div id="SecurityCompliance" className="content-spacer">
        <h2>companySecurityCompliance</h2>
        <br/>
        <h4>Overview of Federation Affairs</h4>
        <h4>Visual Reports with Actionable Insights</h4>
        <h4>Easy Form Management</h4>
        <h4>Seamless Sign-up process for all your members<br/>(Officials, Athletes, Coaches, Promoters and Clubs)</h4>
        <h4>Intuitive Member Management</h4>
        <br/>
      </div>
      <div id="Policies" className="content-spacer">
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
