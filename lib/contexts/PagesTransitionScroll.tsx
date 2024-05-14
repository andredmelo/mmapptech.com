import  React, { useEffect, useState } from 'react';
import { useAppContext } from '@/lib/contexts/AppContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

interface PagesTransitionScrollProps {
  onConditionMet?: () => void; // Optional callback
}

const PagesTransitionScroll: React.FC<PagesTransitionScrollProps> = ({ onConditionMet }) => {
  const { href, smoother } = useAppContext();

  const [documentReady, setDocumentReady] = useState(false);

  useEffect(() => {
    let refreshCount = localStorage.getItem('refreshCount') || 0;

    const handleReady = () => {
      setDocumentReady(true);
      /* console.log('handleReady'+refreshCount);
      if (refreshCount === '0') {
        console.log('Page 1st load');
        window.location.reload(); // Trigger a full page refresh
        setTimeout(() => {setDocumentReady(true);}, 50);
        localStorage.setItem('refreshCount', '1');
      } */
      /* if (refreshCount === '1') {
        console.log('Page re-loaded');
        setDocumentReady(true);
        localStorage.setItem('refreshCount', '2');
      } */
    };

    if (document.readyState === 'complete') {
      handleReady();
    } else {
      document.addEventListener('DOMContentLoaded', handleReady);
      return () => document.removeEventListener('DOMContentLoaded', handleReady);
    }
  }, []);

  useGSAP(() => {
    const checkAllConditionsReady = setInterval(() => {
      //console.log("href: "+href);
      if (smoother?.current && typeof smoother.current.offset === "function" && typeof smoother.current.scrollTo === "function" && document.querySelector('.templateAnimIn')) {
        clearInterval(checkAllConditionsReady);
        //console.log("ConditionsReady !");
        //console.log("href: "+href);
        //gsap.set(".templateAnimIn", { opacity: 0, x: -100 });
        const animIn = gsap.timeline({ paused: true, /* onComplete: () => {ScrollTrigger.refresh();} */ })
          .fromTo("#loadingBanner", {opacity: 1, y: 0}, {opacity: 0, y: 25, duration: 0.125, ease: "power2.out"})
          .fromTo(".templateAnimIn", { opacity: 0, xPercent: -50 }, { opacity: 1, xPercent: 0, duration: 0.3, ease: "power2.out"}, 0.125)
          .set(".footer", {opacity: 1})

        if (!href.includes("company") && !href.includes("product")) {
          //console.log("condition met");
          onConditionMet?.(); // Call the callback if the condition is met
        }

        if (documentReady) {
          /* setTimeout(() => {
            console.log("documentReady: "+documentReady);
            gsap.to(smoother.current!, {
              scrollTop: Math.min(
                ScrollTrigger.maxScroll(window),
                smoother.current?.offset(href, "top 0px") ?? 0
              ),
              duration: 0.01,
              onComplete: () => {
                console.log("ScrollComplete, now animatingIn");
                animIn.invalidate().restart().play();
              }
            });
          }, 200); */
          try {
          // Code that might throw an error
          // smoother.current.scrollTo(href, false);
            gsap.to(smoother.current, {
              // don't let it go beyond the maximum scrollable area
              scrollTop: Math.min(
                ScrollTrigger.maxScroll(window),
                smoother.current?.offset(href, "top 0px")
              ),
              duration: 0.01,
              onComplete: () => {
                //console.log("ScrollComplete, now animatingIn");
                animIn.invalidate().restart().play();
              }
            });
          } catch (error) {
            let scrollToCount = 0;
            //console.error("Trying to scrollTo "+scrollToCount);
            scrollToCount++;
            // console.error("Error accessing element's style:", error);
            // Optional: retry logic or other error handling
          }
        }


        /* try {
          // Code that might throw an error
          //smoother.current.scrollTo(href, false);
          gsap.to(smoother.current, {
            // don't let it go beyond the maximum scrollable area
            scrollTop: Math.min(
              ScrollTrigger.maxScroll(window),
              smoother.current.offset(href, "top 0px")
            ),
            duration: 0.01,
            onComplete: () => {
              //console.log("ScrollComplete, now animatingIn");
              animIn.invalidate().restart().play();
            }
          });
        } catch (error) {
          let scrollToCount = 0;
          console.error("Trying to scrollTo "+scrollToCount);
          scrollToCount++;
          //console.error("Error accessing element's style:", error);
          // Optional: retry logic or other error handling
        } */

        if (href == '') {
          //console.log("href = is null");
          animIn.invalidate().restart().play();
        }
        //animIn.invalidate();
        //animIn.restart().play();
        //console.log("scrollingTo : " + href);
      } else {
        console.log("Conditions for scrollTo not met:", {
          smootherCurrentExists: !!smoother?.current,
          offsetIsFunction: typeof smoother?.current?.offset === "function",
          scrollToIsFunction: typeof smoother?.current?.scrollTo === "function",
          templateAnimInExists: !!document.querySelector('.templateAnimIn')
        });
      }
    }, 100);
  }, [href, smoother, documentReady]);

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