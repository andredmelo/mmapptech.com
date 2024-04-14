import React from 'react';
import { useAppContext } from '@/lib/contexts/AppContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger);

interface PagesTransitionScrollProps {
  onConditionMet?: () => void; // Optional callback
}

const PagesTransitionScroll: React.FC<PagesTransitionScrollProps> = ({ onConditionMet }) => {
  const { href, smoother } = useAppContext();

  useGSAP(() => {
    const checkAllConditionsReady = setInterval(() => {
      if (smoother?.current && typeof smoother.current.scrollTo === "function" && document.querySelector('.templateAnimIn')) {
        clearInterval(checkAllConditionsReady);

        const animIn = gsap.timeline({ paused: true })
          .fromTo(".templateAnimIn", { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 0.25, ease: "power2.out" });

        if (!href.includes("company") && !href.includes("product")) {
          //console.log("condition met");
          onConditionMet?.(); // Call the callback if the condition is met
        }
        try {
          // Your code that might throw an error
          smoother.current.scrollTo(href, false);
        } catch (error) {
          console.error("Trying to scrollTo");
          //console.error("Error accessing element's style:", error);
          // Optional: retry logic or other error handling
        }
        
        animIn.invalidate();
        animIn.restart().play();
        //console.log("scrollingTo : " + href);
      } else {
        console.log("Conditions for scrollTo not met");
      }
    }, 100);
  }, [href, smoother]);

  return null; // This component does not render anything
};

export default PagesTransitionScroll;



/* let ScrollSmootherTop = "top 0px"; //"top 52px"
let attempts = 0;
const maxAttempts = 5; // Maximum number of attempts to try scrollTo
const attemptInterval = 50; // Milliseconds between attempts

const checkAndExecuteScroll = () => {
  //console.log("checkAndExecuteScroll "+attempts);
  attempts++;
  // Check if conditions are met to execute the scroll
  if (smoother?.current && typeof smoother.current.scrollTo === "function") {
    const templateAnimInExists = document.querySelector('.templateAnimIn');

    console.log("Conditions for scrollTo met!:", { smootherExists: !!smoother, scrollToIsFunction: typeof smoother?.current?.scrollTo === "function" });

    if (templateAnimInExists) {

      const animIn = gsap.timeline({ paused: true })
        .fromTo(".templateAnimIn", { opacity: 0, x: -20 }, { duration: 0.75, opacity: 1, x: 0, ease: "power2.out" });

      // Additional check to ensure smoother is in a ready state
      const checkSmootherCurrentIsReady = setInterval(() => {
        if (smoother.current) {
          clearInterval(checkSmootherCurrentIsReady);
          smoother.current.scrollTo(href, true, ScrollSmootherTop);
          animIn.invalidate();
          animIn.restart().play();
          //console.log("scrollTo : " + href);
        }
      }, 100); // Check every 100ms
    }
  } else if (attempts < maxAttempts) {
    console.log("Conditions for scrollTo not met:", { smootherExists: !!smoother, scrollToIsFunction: typeof smoother?.current?.scrollTo === "function" });
    // If conditions are not met, retry after a delay
    setTimeout(checkAndExecuteScroll, attemptInterval);
  } else {
    console.log("Conditions for scrollTo not met after maximum attempts.");
  }
};

// Initial attempt
setTimeout(checkAndExecuteScroll, attemptInterval); */