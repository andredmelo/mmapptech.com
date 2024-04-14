/* "use client"; */
/* import { useEffect, useState, useRef } from "react"; */
/* import { useAppContext } from '@/lib/contexts/AppContext'; */
/* import { gsap } from "gsap";
import { useGSAP } from '@gsap/react'; */
import Loading from './loading';

/* interface TemplateProps {
  smoother: {
    scrollTo: (target: string, animate: boolean, position: string) => void;
  };
} */

export default function Template({
  children,
  /* smoother, */
  isPending,
}: {
  children: React.ReactNode,
  /* smoother: any */ // Adjust the type as needed
  isPending: boolean,
}) {
  /* const { href, smoother } = useAppContext(); */

 /*  useEffect(() => {
    const checktemplateAnimInLoad = setInterval(() => {
      if (document.querySelector('.templateAnimIn')) {
        clearInterval(checktemplateAnimInLoad);
        gsap.set(".templateAnimIn", {opacity: 0});
      }
    }, 100); // Check every 100ms
  }, []); */

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

/*   useGSAP(
    () => { */
      //console.log(smoother);
      /* let ScrollSmootherTop = "top 0px"; //"top 52px"
      let attempts = 0;
      const maxAttempts = 5; // Maximum number of attempts to try scrollTo
      const attemptInterval = 50; // Milliseconds between attempts

      const checkAndExecuteScroll = () => {
        //console.log("checkAndExecuteScroll "+attempts);
        attempts++;
        // Check if conditions are met to execute the scroll
        if ((!isPending || isPending === undefined) && smoother?.current && typeof smoother.current.scrollTo === "function") {
          const templateAnimInExists = document.querySelector('.templateAnimIn');

          //console.log("Conditions for scrollTo met!:", { isPending, smootherExists: !!smoother, scrollToIsFunction: typeof smoother?.current?.scrollTo === "function" });

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
          //console.log("Conditions for scrollTo not met:", { isPending, smootherExists: !!smoother, scrollToIsFunction: typeof smoother?.current?.scrollTo === "function" });
          // If conditions are not met, retry after a delay
          setTimeout(checkAndExecuteScroll, attemptInterval);
        } else {
          //console.log("Conditions for scrollTo not met after maximum attempts.");
        }
      };
    
      // Initial attempt
      setTimeout(checkAndExecuteScroll, attemptInterval); */

      
      // Original code to debug the issue
      /* const checkAndExecuteScroll = () => {
        if (!isPending && smoother?.current && typeof smoother.current.scrollTo === "function") {

          console.log("Conditions for scrollTo met!:", { isPending, smootherExists: !!smoother, scrollToIsFunction: typeof smoother?.current?.scrollTo === "function" });
          //console.log("href = "+href);

          const templateAnimInExists = document.querySelector('.templateAnimIn');
          if (templateAnimInExists) {

            const animIn = gsap.timeline({ paused: true})
              .fromTo(".templateAnimIn", {opacity: 0, x: -20, }, {duration: 0.75, opacity: 1, x: 0, ease: "power2.out"});

            try {
              // Additional check to ensure smoother is in a ready state
              const checkSmootherCurrentIsReady = setInterval(() => {
                if (smoother.current) {
                  clearInterval(checkSmootherCurrentIsReady);
                  smoother.current.scrollTo(href, false, ScrollSmootherTop);
                  animIn.invalidate();
                  animIn.restart().play();
                  console.log("scrollTo : "+href);
                } else {
                  console.log("Smoother is not ready.");
                }
              }, 100); // Check every 100ms
            } catch (error) {
              console.error("Error calling scrollTo on smoother.current:", error);
              console.log("Error calling scrollTo on smoother.current.");
            }
          } else {
            console.log("'.templateAnimIn' element not found in the DOM.");
          }
        } else {
          console.log("Conditions for scrollTo not met:", { isPending, smootherExists: !!smoother, scrollToIsFunction: typeof smoother?.current?.scrollTo === "function" });
        }
      };
    
      // Attempt to execute scroll after a delay to ensure smoother and elements are ready
      const delayForInitialization = 500; // Adjust delay as needed
      const timeoutId = setTimeout(checkAndExecuteScroll, delayForInitialization);
    
      // Cleanup timeout if component unmounts
      return () => clearTimeout(timeoutId); */


      
/*     },
  { dependencies: [smoother, href, isPending]}
  ); */

  const checkPendingAndSmootherLoad = setInterval(() => {
    if (/* isPending === undefined || */ isPending === true /* || smoother */) {
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