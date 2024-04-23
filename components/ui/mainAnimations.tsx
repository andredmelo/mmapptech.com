import React, {  } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { useMediaQuery } from '@react-hook/media-query';

gsap.registerPlugin(gsap, useGSAP, SplitText);

const MmappBlockReveal = () => {
  const isPortrait = useMediaQuery('(orientation: portrait)');
  useGSAP(
    () => {
      let viewportTrigger = isPortrait ? '0% 95%' : '0% 90%';
      const mmappBlockReveal: HTMLElement[] = gsap.utils.toArray('.mmappBlockReveal');
      mmappBlockReveal.forEach((block, i) => {
        const revealBlock = gsap.timeline({
          paused:true,
          scrollTrigger: {
            trigger: block,
            start: viewportTrigger,
            once:true,
            //markers: true,
            //invalidateOnRefresh: true,
          },
        })
          .from(block, {yPercent: 5, autoAlpha:0}) // Carefull as this 'yPercent' property when applied to the trigger being the animated element makes the markers move accordingly, therefore the very low value
      })
    },
    { dependencies: [], revertOnUpdate: true }
  );
  return null;
};

const MmappHeadingReveal = () => {
  const isPortrait = useMediaQuery('(orientation: portrait)');
  useGSAP(
    () => {
      let viewportTrigger = isPortrait ? '0% 95%' : '0% 90%';
      const splitTypesH: HTMLHeadingElement[] = gsap.utils.toArray('.mmappHeadingReveal');
      splitTypesH.forEach((Heading, index) => {
        let split = new SplitText(Heading, { types: 'lines,words', linesClass: "overflow-hidden pb-1 md:pb-3 mt-[-0.25rem] md:mt-[-0.75rem]" });
        const HeadingsAnim = gsap.timeline({
          paused:true,
          scrollTrigger: {
            trigger: Heading,
            start: viewportTrigger,
            once:true,
            //markers: true,
            //invalidateOnRefresh: true,
          },
        })
          .fromTo(split.words,
          {yPercent:150},
          {yPercent:0, stagger:{each:0.125, ease:"power1.out"}, duration: 0.4, ease: "circ.out"})
      });
    }, { dependencies: [], revertOnUpdate: true }
  );
  return null;
};

const MmappParagraphsReveal = () => {
  const isPortrait = useMediaQuery('(orientation: portrait)');
  useGSAP(
    () => {
      let viewportTrigger = isPortrait ? '0% 95%' : '0% 90%';
      const splitTypesH: HTMLParagraphElement[] = gsap.utils.toArray('.mmappParagraphsReveal');
      splitTypesH.forEach((paragraph, index) => {
        let split = new SplitText(paragraph, { types: 'lines'});
        const ParagraphsAnim = gsap.timeline({
          paused:true,
          scrollTrigger: {
            trigger: paragraph,
            start: viewportTrigger,
            once:true,
            //markers: true,
            //invalidateOnRefresh: true,
          },
        })
          .from(split.lines,
            {
              y: '8vh',
              opacity: 0,
              scale: '0.25',
              rotate: "-10deg",
              rotationX: -75,
              // rotationY:25,
              transformOrigin: '50% 50% -50',
              duration: 0.35,
              stagger: 0.1,
              delay: 0,
              ease: "circ.out"
            })
      });
    }, { dependencies: [], revertOnUpdate: true }
  );
  return null;
};

const MmappParagraphsRevealRight = () => {
  const isPortrait = useMediaQuery('(orientation: portrait)');
  useGSAP(
    () => {
      let viewportTrigger = isPortrait ? '0% 95%' : '0% 90%';
      const splitTypesH: HTMLParagraphElement[] = gsap.utils.toArray('.mmappParagraphsRevealRight');
      splitTypesH.forEach((paragraph, index) => {
        let split = new SplitText(paragraph, { types: 'lines'});
        const ParagraphsAnim = gsap.timeline({
          paused:true,
          scrollTrigger: {
            trigger: paragraph,
            start: viewportTrigger,
            once:true,
            //markers: true,
            //invalidateOnRefresh: true,
          },
        })
          .from(split.lines,
            {
              y: '8vh',
              opacity: 0,
              scale: '0.25',
              rotate: "10deg",
              rotationX: -75,
              // rotationY:25,
              transformOrigin: '50% 50% -50',
              duration: 0.35,
              stagger: 0.1,
              delay: 0,
              ease: "circ.out"
            })
      });
    }, { dependencies: [], revertOnUpdate: true }
  );
  return null;
};

const MmappSequentialParagraphsReveal = () => {
  const isPortrait = useMediaQuery('(orientation: portrait)');
  useGSAP(
    () => {
      let viewportTrigger = isPortrait ? '0% 95%' : '0% 90%';
      const paragraphs: NodeListOf<HTMLElement> = document.querySelectorAll('.MmappSequentialParagraphsReveal');
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: paragraphs[0], // Assuming all paragraphs are close together, we can just trigger on the first
          start: viewportTrigger,
          once: true,
        },
      });

      paragraphs.forEach((paragraph, index) => {
        let split = new SplitText(paragraph, { types: 'lines' });
        timeline.from(split.lines, {
          y: '8vh',
          opacity: 0,
          scale: '0.25',
          rotate: "-10deg",
          rotationX: -75,
          // rotationY:25,
          transformOrigin: '50% 50% -50',
          duration: 0.35,
          stagger: 0.1,
          ease: "circ.out",
          // Delay the start of each paragraph's animation slightly more than the last
          delay: index * 0.4, // Adjust the multiplier as needed to control the delay between paragraphs
        }, 1.25); // This "+=0.5" adds a delay before starting the next paragraph's animation, adjust as needed
      });
    },
    { dependencies: [isPortrait] } // Ensure to list all dependencies here
  );
  return null;
};


// ===== Main Animations Block ===== //

const MainAnimations = () => {

  const isPortrait = useMediaQuery('(orientation: portrait)');

  useGSAP(
    () => {

      /* == mmappParagraphsReveal Effect == */
      gsap.registerEffect({
        name:"mmappParagraphsReveal",
        extendTimeline:true,
        defaults:{
          y: '10vh',
          scale: '0.5',
          rotate:"10deg",
          rotationX:-75,
          // rotationY:25,
          transformOrigin: '50% 50% -50',
          duration: 0.25,
          stagger: 0.05,
          delay: 0,
        },
        effect: (targets:any, config:any) => {
          let tl = gsap.timeline()
          tl.from(targets, {
            autoAlpha:0,
            y:config.y,
            scale:config.scale,
            rotate:config.rotate,
            rotationX:config.rotationX,
            // rotationY:25,
            transformOrigin:config.transformOrigin,
            duration:config.duration,
            stagger:config.stagger,
            delay:config.delay,
          })
        return tl
        }
      })

      let viewportTrigger = isPortrait ? '0% 97%' : '0% 90%';

      const splitTypesH: HTMLHeadingElement[] = gsap.utils.toArray('.mmappHeadingReveal');
      splitTypesH.forEach((Heading, index) => {
        /* let split = new SplitText(Heading, {types: 'words', linesClass: "text-transparent bg-clip-text py-2 bg-gradient-to-bl from-[var(--purple-250)] to-purple-100" }); */
        let split = new SplitText(Heading, {
          types: 'lines,words,chars',
          linesClass: "overflow-hidden",
          //wordsClass: "opacity-0",
          charsClass: "text-[var(--purple-250)] pb-1 lg:pb-2",
          //charsClass: "text-[var(--purple-250)] lg:text-transparent lg:bg-clip-text pb-1 lg:pb-2 lg:bg-gradient-to-tl lg:from-[var(--purple-250)] lg:to-purple-100",
        });
        /* split.lines.forEach((lines) => { // == Add overflow-hidden to each line ==
          lines.classList.add('overflow-hidden');
        }); */
        const HeadingsAnim = gsap.timeline({
          paused:true,
          scrollTrigger: {
            trigger: Heading,
            start: viewportTrigger,
            //once:true,
            //markers: true,
            //invalidateOnRefresh: true,
            toggleActions: 'play none none reverse',
          },
        })
          .fromTo(split.words,
          {yPercent:150},
          {yPercent:0, stagger:{each:0.125, ease:"power1.out"}, duration: 0.4, ease: "circ.out"})
          //.fromTo(split.words, {opacity:0}, {opacity:1, duration: 0.001}, 0)
      });


      // == Reveal Paragraphs On Load ==
      const splitTypesParagraphsOnLoad: HTMLElement[] = gsap.utils.toArray('.mmappParagraphsRevealOnLoad');
      splitTypesParagraphsOnLoad.forEach((paragraph, i) => {
        const split = new SplitText(paragraph, { types: 'lines' });
        const introParagraphsOnLoad = gsap.timeline({ paused:false })
          .mmappParagraphsReveal(split.lines, {y: '3vh', rotate:"25deg", delay: 1.25})
      });

      // == Reveal Paragraph ==
      /* const splitTypesParagraphs: HTMLElement[] = gsap.utils.toArray('.mmappParagraphsReveal');
      splitTypesParagraphs.forEach((paragraph, i) => {
        const split = new SplitText(paragraph, { types: 'lines' });
        const introParagraphsOnLoad = gsap.timeline({
          paused:true,
          scrollTrigger: {
            trigger: paragraph,
            start: viewportTrigger,
            //once:true,
            //markers: true,
            //invalidateOnRefresh: true,
            toggleActions: 'play none none reverse',
          },
        })
          .mmappParagraphsReveal(split.lines, {y: '3vh', rotate:"25deg", delay: 1.25})
      }); */

      // == Reveal Paragraphs ==
      const mmappBlockReveal: HTMLElement[] = gsap.utils.toArray('.mmappBlockReveal');
      mmappBlockReveal.forEach((block, i) => {
        const revealBlock = gsap.timeline({
          paused:true,
          scrollTrigger: {
            trigger: block,
            start: viewportTrigger,
            //once:true,
            //markers: true,
            //invalidateOnRefresh: true,
            toggleActions: 'play none none reverse',
          },
        })
          .from(block, {yPercent: 5, autoAlpha:0}) // Carefull as this 'yPercent' property when applied to the trigger being the animated element makes the markers move accordingly, therefore the very low value

        /* const paragraphsAnim = gsap.from(
          split.lines,
          {
            opacity: '0',
            y: '10vh',
            scale: '0.5',
            rotate:"10deg",
            rotationX:-75,
            // rotationY:25,
            transformOrigin: '50% 50% -50',
            duration: 0.25,
            stagger: 0.05,
            delay: 1.25,
            // stagger:{each:0.2, from:"random"},
            scrollTrigger: {
              trigger: 'body',
              start: 'top top',
              end: 'top 65%',
              scrub: false,
              markers: false,
              toggleActions: 'play none none none',
            },
          }
        ); */
      });

      /* const splitTypesH: HTMLHeadingElement[] = gsap.utils.toArray('.mmappHeadingReveal');
      splitTypesH.forEach((title, index) => {
        let split = new SplitText(title, {types: 'chars' });
        const titlesAnim = gsap.fromTo(
          split.chars,
          {xPercent:200, scale:0},
          {xPercent:0, scale:1, stagger:0.065, duration: 0.25,})
      }); */

      
      
      /* ScrollTrigger.create({
        trigger: 'body',
        start: 'top -20%',
        onEnter: (self) => {
          console.log('ScrollTriggerRefresh');
          ScrollTrigger.refresh();
        }
      }); */

    /* GSDevTools.create(); */
    },
    { dependencies: [], revertOnUpdate: true }
  );

  return null;
};

export { MmappBlockReveal, MmappHeadingReveal, MmappParagraphsReveal, MmappParagraphsRevealRight, MmappSequentialParagraphsReveal };