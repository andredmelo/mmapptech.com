import React, { createContext, useContext, useRef, useCallback } from 'react';
import ScrollSmoother from "gsap/ScrollSmoother";
import gsap from 'gsap';

interface PageTransitionType {
  href: string;
  setHref: (href: string) => void;
  smoother: React.MutableRefObject<ScrollSmoother | undefined>;
  checkAllConditionsReady: () => void; // Add this line
}

const PageTransition = createContext<PageTransitionType | undefined>(undefined);

export const PageTransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [href, setHref] = React.useState('');
  const smoother = useRef<ScrollSmoother>();

  const checkAllConditionsReady = useCallback(() => {
    const intervalId = setInterval(() => {
      if (smoother?.current && typeof smoother.current.scrollTo === "function" && document.querySelector('.templateAnimIn')) {
        clearInterval(intervalId);
        const animIn = gsap.timeline({ paused: true })
          .fromTo(".templateAnimIn", { opacity: 0, x: -50 }, { duration: 3, opacity: 1, x: 0, ease: "power2.out" });

        smoother.current.scrollTo(href);
        animIn.invalidate();
        animIn.restart().play();
        console.log("scrollingTo : " + href);
      } else {
        console.log("Conditions for scrollTo not met");
      }
    }, 100);
  }, [href]);

  return (
    <PageTransition.Provider value={{ href, setHref, smoother, checkAllConditionsReady }}>
      {children}
    </PageTransition.Provider>
  );
};

export const usePageTransition = () => {
  const context = useContext(PageTransition);
  if (context === undefined) {
    throw new Error('usePageTransition must be used within a PageTransitionProvider');
  }
  return context;
};