"use client";
import { useEffect, useState, useRef } from "react";
import { useHref } from './HrefContext';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import Loading from './loading';

interface TemplateProps {
  smoother: {
    scrollTo: (target: string, animate: boolean, position: string) => void;
  };
}

export default function Template({
  children,
  smoother,
  isPending,
}: {
  children: React.ReactNode,
  smoother: any // Adjust the type as needed
  isPending: boolean,
}) {
  const { href } = useHref();

  useEffect(() => {
    const checktemplateAnimInLoad = setInterval(() => {
      if (document.querySelector('.templateAnimIn')) {
        clearInterval(checktemplateAnimInLoad);
        gsap.set(".templateAnimIn", {opacity: 0});
      }
    }, 100); // Check every 100ms
  }, []);

  //console.log(children);

  /* useEffect(() => {
    console.log("href = "+href);
    console.log("isPending = "+isPending);
  }, [isPending]); */

  /* useEffect(() => {
    // Here you can fetch data based on the `href` value
    // For example:
    // async function fetchData() {
    //   const response = await fetch(href);
    //   const data = await response.json();
    //   console.log(data);
    // }
    // if (href) fetchData();
  }, [href, isPending, startTransition]); */

  useGSAP(
    () => {
      //console.log(smoother);
      let ScrollSmootherTop = "top 0px"; //"top 52px"

      const checkPendingAndSmoother = setInterval(() => {
        if (isPending == false && smoother && smoother.current && document.querySelector('.templateAnimIn')) {
          clearInterval(checkPendingAndSmoother);
          const animIn = gsap.timeline({
            paused: true,
            /* onStart: () => {
              console.log("animIn complete");
              //console.log("href inside template = "+href);
              if (smoother) {
                console.log("scrollTo triggered");
                setTimeout(() => {
                  smoother.current.scrollTo(href, false, ScrollSmootherTop);
                }, 500);
              }
            } */})
            //.set(".templateAnimIn", {y: 100})
            .fromTo(".templateAnimIn", {opacity: 0, x: -20, }, {duration: 0.75, opacity: 1, x: 0, ease: "power2.out"});


          const checkSmootherExists = setInterval(() => {
            if (smoother && smoother.current) {
              clearInterval(checkSmootherExists);
              //console.log("scrollTo+animIn triggered");
              smoother.current.scrollTo(href, false, ScrollSmootherTop);
              animIn.invalidate();
              animIn.restart().play();
            }
          }, 100); // Check every 100ms

        }
      }, 100); // Check every 100ms
      
    },
  { dependencies: [smoother, href, isPending]/* , revertOnUpdate: true, scope: main  */}
  );

  const checkPendingAndSmootherLoad = setInterval(() => {
    if (/* isPending === undefined || */ isPending === true || smoother) {
      clearInterval(checkPendingAndSmootherLoad);
      return <div className="templateAnimIn"><Loading /></div>;
    }
  }, 100); // Check every 100ms

  return (
    <div className="templateAnimIn">
      {children}
    </div>
  )
}