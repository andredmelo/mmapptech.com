'use client';
import { useAppContext } from '@/lib/contexts/AppContext';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function PoliciesLoader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { smoother } = useAppContext();

  useGSAP(() => {
    const checkAllConditionsReady = setInterval(() => {
      if (smoother?.current && typeof smoother.current.offset === "function" && typeof smoother.current.scrollTo === "function") {
        clearInterval(checkAllConditionsReady);

        const policiesLinks = document.querySelectorAll(".policiesLink") as NodeListOf<HTMLAnchorElement>;

        console.log(policiesLinks);
        policiesLinks.forEach((link: HTMLAnchorElement) => {
          link.addEventListener("click", (e: MouseEvent) => {
            e.preventDefault(); // Prevent the default link behavior
            const href = link.getAttribute('href'); // Get the href attribute from the link
            console.log(href);

            gsap.to(smoother.current!, {
              // don't let it go beyond the maximum scrollable area
              scrollTop: Math.min(
                ScrollTrigger.maxScroll(window),
                smoother.current?.offset(href, "top 50px") || 0
              ),
              duration: 0.5,
            });
          });
        });
      }
    }, 100);
  });

return (
  <>
    {children}
  </>
  )
};
