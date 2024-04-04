"use client"
import React, { useEffect, useRef, useState, useTransition } from "react";
import { Metadata } from 'next'
import { clsx } from "clsx";
import Benefits from '@/app/home/benefits'
import ContactUs from '@/app/contact/contact-us'
import { MainBanner, MainBannerTitle, MainBannerHeading, MainBannerDescription } from '@/components/ui/mainBanner'


import TabButtonProductJudge from '@/components/ui/tab-button-product-judge'

/* export const metadata: Metadata = {
  title: 'Product',
} */

const Product = () => {
  const [activeTabProductJudge, setActiveTabProductJudge] = useState('ProductJudge1')
  const [isPending, startTransition] = useTransition()
  const [preloadedImages, setPreloadedImages] = useState({});
  const [isLoading, setIsLoading] = useState(false); //image loading state

  const imageSrcMap: Record<string, string> = {
    'ProductJudge1': 'productJudge-1',
    'ProductJudge2': 'productJudge-2',
    'ProductJudge3': 'productJudge-3',
    'ProductJudge4': 'productJudge-4',
    'ProductJudge5': 'productJudge-5',
    'ProductJudge6': 'productJudge-6',
  };

  const descriptionSrcMap: Record<string, string> = {
    'ProductJudge1': 'Assess Fights with the MMAPP Methodology',
    'ProductJudge2': 'Submit Scores Instantly',
    'ProductJudge3': 'Personalised Fight Card',
    'ProductJudge4': 'Practice at Home',
    'ProductJudge5': 'Share your results with your colleagues',
    'ProductJudge6': 'Personal Lifetime archive of your results',
  };

  useEffect(() => {
    const images = ['ProductJudge1', 'ProductJudge2', 'ProductJudge3', 'ProductJudge4', 'ProductJudge5', 'ProductJudge6'];
    const newPreloadedImages: Record<string, HTMLImageElement> = {};
  
    images.forEach((image) => {
      const img = new Image();
      img.src = `/images/product/officialsJudge/${imageSrcMap[image as keyof typeof imageSrcMap]}.png`;
      newPreloadedImages[image] = img;
    });
  
    setPreloadedImages(newPreloadedImages);
  }, []);

  // Use the isLoading state to delay the change of the activeTabProductJudge state
  function selectTabProductJudge(tab: string) {
    setIsLoading(true); // Assuming you have an isLoading state to manage the loading indicator
    startTransition(() => {
      setActiveTabProductJudge(tab);
      // Introduce a delay before setting isPending to false
      setTimeout(() => {
        setIsLoading(false); // Turn off loading indicator after a delay
      }, 50); // Adjust the delay as needed
    });
  }
  useEffect(() => {
    let timeoutId: any;
    if (isLoading) {
      timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 50);
    }
    return () => clearTimeout(timeoutId);
  }, [isLoading]);

  return (
    <>
    {/* <article className="prose-stone lg:prose-xl"> */}
      {/* <section id="MMAPP-Methodology" className="flex flex-col h-[65vw] py-0 md:py-0 lg:py-0 pt-0 md:pt-12 lg:pt-20">
          <MainBanner className="bg-bgRadialGradientDown">
            <MainBannerTitle className="flex flex-col justify-start z-20 max-w-[30rem] md:max-w-[50rem] lg:max-w-[60rem] text-left">
              MMAPP Methodology
            </MainBannerTitle>
            <MainBannerHeading className="flex flex-col justify-start z-20 pr-[0%] md:pr-[32%] lg:pr-[20%] text-left">
              A consistent and standardised unit of measurement for officiating MMA
            </MainBannerHeading>
            <MainBannerDescription className="flex flex-col justify-start z-20 pr-[0%] md:pr-[30%] lg:pr-[25%] text-left mb-2 md:mb-0">
              The MMAPP Platform centres around our patented methodology, which provides officials worldwide with a consistent and coherent approach to assessing MMA fights.<br/><br/>
              Using only a mobile device, officials can record their train of thought, without any outside input, for every second of the fight and provide insights into their own evaluation immediately after the round.<br/><br/>
              This allows officials to make more informed decisions for longer.<br/><br/>
              By creating a standardised unit of measurement, we are able to get officials on the same page and improve consistency in MMA Judging, whilst allowing judges to have a better recall of every fight.
            </MainBannerDescription>
          </MainBanner>
      </section> */}

      <section id="MMAPP-Methodology" className="flex flex-col h-[65vw] py-0 md:py-0 lg:py-0 pt-0 md:pt-[3.35vw] lg:pt-[3.35vw]">
          <div className={clsx(
            "flex flex-col relative justify-center",
            "h-full mx-1 md:mx-[5.6vw]",//max-w-[1536px] 3xl:min-w-[1536px] 3xl:mx-auto
            "px-12 md:px-[7.65vw] py-12 md:py-[4vw]",
            "rounded-[3rem] bg-no-repeat bg-bgRadialGradientDown")}
          >
            <h5 className="flex flex-col justify-center z-20 text-md md:text-[2.175vw] text-center mb-12 md:mb-[3.5vw] text-neutral-200 deboss">
              MMAPP Methodology
            </h5>
            <h3 className={clsx(
              "flex flex-col justify-center text-center z-20 mx-[6vw] mb-12 md:mb-[3.5vw]",
              "text-xl md:text-[4.35vw] text-transparent bg-clip-text py-2 bg-gradient-to-bl from-[var(--purple-250)] to-purple-100")}
              >
              A consistent and standardised unit of measurement for officiating MMA
            </h3>
            <h6 className="flex flex-col justify-start z-20 pr-[0vw] md:pr-[22.8vw] lg:pr-[19vw] text-[1.5rem] md:text-[1.33vw] text-left font-medium leading-[2.1rem] md:leading-[1.75vw] mb-6 md:mb-[2vw]">
              The MMAPP Platform centres around our patented methodology, which provides officials worldwide with a consistent and coherent approach to assessing MMA fights.
            </h6>
            <h6 className="flex flex-col justify-end z-20 pl-[0vw] md:pl-[22.8vw] lg:pl-[19vw] text-[1.5rem] md:text-[1.33vw] text-right font-medium leading-[2.1rem] md:leading-[1.75vw] mb-6 md:mb-[2vw]">
              Using only a mobile device, officials can record their train of thought, without any outside input, for every second of the fight and provide insights into their own evaluation immediately after the round.<br/>
              This allows officials to make more informed decisions for longer.
            </h6>
            <h6 className="flex flex-col justify-start z-20 pr-[0vw] md:pr-[22.8vw] lg:pr-[19vw] text-[1.5rem] md:text-[1.33vw] text-left font-medium leading-[2.1rem] md:leading-[1.75vw]">
              By creating a standardised unit of measurement, we are able to get officials on the same page and improve consistency in MMA Judging, whilst allowing judges to have a better recall of every fight.
            </h6>
          </div>
      </section>

      <div id="productLineDesktop"
        className={clsx(
          "portrait:flex portrait:touch:hidden flex flex-col relative justify-center items-center",
          "mx-1 md:mx-[5.6vw]",
        )}>
        <svg viewBox="0 0 1536 3500" id="Layer_1" data-name="Layer 1" className="pointer-events-none absolute top-0 hidden select-none md:block" xmlns="http://www.w3.org/2000/svg">
        <path d="m15.13,3499.9v-300.61c0-17.67,14.33-32,32-32h1442c17.67,0,32-14.33,32-32v-996c0-17.67-14.33-32-32-32h-690.98c-17.68,0-32.01-14.34-32-32.02l-.02-1067.98c0-17.67-14.33-32-32-32H43.12c-17.67,0-32-14.33-32-32V229.29c0-17.67,14.33-32,32-32h690.98c17.68,0,32.01-14.34,32-32.02l.02-19.37v-56" fill="none" stroke="#4d004d" stroke-linecap="round" stroke-width="10"/>
  <path d="m766,120.07S765.47-.1,959.21.29C1532.47-.1,0-.1,573.26.29c193.74-.39,193.21,119.78,193.21,119.78" fill="#4d004d" stroke-width="0"/>
        </svg>
      </div>

<div id="productLineTablets"
  className={clsx(
    "landscape:hidden portrait:hidden portrait:touch:hidden portrait:touch:md:flex flex-col relative justify-center items-center",
    "mx-1 md:mx-[5.6vw]",
  )}>
  <svg viewBox="0 0 1536 3500" id="Layer_1" data-name="Layer 1" className="pointer-events-none absolute top-0 hidden select-none md:block" xmlns="http://www.w3.org/2000/svg">
  <path d="m15.13,3499.9v-587.61c0-17.67,14.33-32,32-32h1442c17.67,0,32-14.33,32-32v-878c0-17.67-14.33-32-32-32h-690.98c-17.68,0-32.01-14.34-32-32.02l-.02-898.98c0-17.67-14.33-32-32-32H43.12c-17.67,0-32-14.33-32-32V229.29c0-17.67,14.33-32,32-32h690.98c17.68,0,32.01-14.34,32-32.02l.02-19.37v-56" fill="none" stroke="#cc0000" stroke-linecap="round" stroke-width="10"/>
<path d="m766,120.07S765.47-.1,959.21.29C1532.47-.1,0-.1,573.26.29c193.74-.39,193.21,119.78,193.21,119.78" fill="#cc0000" stroke-width="0"/>
  </svg>
</div>

      {/* <div className="borderBottom"></div> */}

      <section id="Judge" className="flex flex-col py-0 md:py-0 lg:py-0 pt-0 md:pt-[3.35vw] lg:pt-[3.35vw] justify-center">
          <div className={clsx(
            "flex flex-col relative justify-center",
            "h-full mx-1 md:mx-[5.6vw]",
            "px-12 md:px-[7.65vw] pt-12 md:pt-[14.65vw] pb-12 md:pb-[14.1vw]",
            "rounded-[3rem] bg-no-repeat ",
          )}> {/* //bg-bgRadialGradientUp */}
            <h5 className="flex flex-col justify-start text-left z-20 max-w-[30rem] md:max-w-[100%] text-md md:text-[2.175vw] mb-12 md:mb-[3.5vw] text-neutral-200 deboss">
              Judge
            </h5>
            <h3 className={clsx(
              "flex flex-col justify-start text-left z-20 pr-[0%] md:pr-[15vw] mb-12 md:mb-[3.5vw]",
              "text-xl md:text-[4.35vw] text-transparent bg-clip-text py-2 bg-gradient-to-bl from-[var(--purple-250)] to-purple-100")}>
              Designed for officials and their mobile devices
            </h3>
            <h6 className="flex flex-col justify-start z-20 pr-[0vw] md:pr-[22.8vw] lg:pr-[19vw] text-[1.5rem] md:text-[1.33vw] text-left font-medium leading-[2.1rem] md:leading-[1.75vw]">
              The “Judge” app is specifically designed for officials and their mobile devices.<br/><br/>
              It provides the tools to apply our methodology during a fight, submit scores to the RecordKeeper instantly, and offer personalised fight cards for each official.<br/><br/>
              Additionally, it allows judges to share their scorecards and graphs with each other and their Federations, allowing for a second-by-second analysis of each round.
            </h6>
          </div>

        {/* Titles for big mobile devices */}
        <div className="landscape:hidden portrait:hidden portrait:touch:hidden portrait:touch:md:flex w-full justify-center items-center relative mb-6 md:mb-10 lg:mb-12 py-8 px-[10%]">
          <h3 className={clsx("text-center text-transparent bg-clip-text bg-gradient-to-b from-[var(--purple-400)] to-purple-100",
          "two-lines-always")}>
            {descriptionSrcMap[activeTabProductJudge]}
          </h3>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-0 relative">

          <div className="w-full flex flex-row md:flex-col justify-center items-end gap-4 md:gap-20 relative">
            <TabButtonProductJudge
              value='ProductJudge1'
              heading='Assess Fights with the MMAPP Methodology'
              smallHeading='Assess'
              leftOrRight='left'
              isPending={isPending}
              activeTab={activeTabProductJudge}
              onClick={() => selectTabProductJudge('ProductJudge1')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-scoreboard">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                <path d="M12 5v2" />
                <path d="M12 10v1" />
                <path d="M12 14v1" />
                <path d="M12 18v1" />
                <path d="M7 3v2" />
                <path d="M17 3v2" />
                <path d="M15 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0z" />
                <path d="M6 9h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5" />
              </svg>
            </TabButtonProductJudge>
            <TabButtonProductJudge
              value='ProductJudge2'
              heading='Submit Scores Instantly'
              smallHeading='Submit'
              leftOrRight='left'
              isPending={isPending}
              activeTab={activeTabProductJudge}
              onClick={() => selectTabProductJudge('ProductJudge2')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-upload">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <path d="M12 11v6" />
                <path d="M9.5 13.5l2.5 -2.5l2.5 2.5" />
              </svg>
            </TabButtonProductJudge>
            <TabButtonProductJudge
              value='ProductJudge3'
              heading='Personalised Fight Card'
              smallHeading='Fight Card'
              leftOrRight='left'
              isPending={isPending}
              activeTab={activeTabProductJudge}
              onClick={() => selectTabProductJudge('ProductJudge3')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-id-badge-2">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 12h3v4h-3z" />
                <path d="M10 6h-6a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1h-6" />
                <path d="M10 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                <path d="M14 16h2" />
                <path d="M14 12h4" />
              </svg>
            </TabButtonProductJudge>
          </div>

          {/* // Use the loading state to conditionally render the image */}
          <div className={clsx("hidden portrait:md:flex landscape:flex items-center justify-center min-w-auto landscape:max-w-[25vw] portrait:max-w-[25vw] portrait:touch:md:max-w-max touch:max-w-[120vw] max-h-[110vh] z-10")}>
            <img
              className="object-scale-down portrait:touch:max-h-[65vh] portrait:touch:md:max-h-max landscape:rounded-[5.25rem] landscape:xl:rounded-[6rem] landscape:3xl:rounded-[7rem] portrait:rounded-[4.5rem] portrait:md:rounded-[5.5vw] portrait:lg:rounded-[6.5rem] shadow-2xl shadow-fuchsia-950/50 ring-2 ring-purple-950/75"
              src={(preloadedImages as any)[activeTabProductJudge]?.src}
              alt="iphone-12"
              onLoad={() => setIsLoading(false)}
            />
            {/* {isLoading && <div className="loading-overlay">Loading...</div>} // Disabled because it causes visual glitches that are unecessary given the small payload */}
          </div>

          <div className="w-full flex flex-row md:flex-col justify-center items-start gap-4 md:gap-20 relative">
            <TabButtonProductJudge
              value='ProductJudge4'
              heading='Practice at Home'
              smallHeading='Practice'
              leftOrRight='right'
              isPending={isPending}
              activeTab={activeTabProductJudge}
              onClick={() => selectTabProductJudge('ProductJudge4')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-barbell">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M2 12h1" />
                <path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" />
                <path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" />
                <path d="M9 12h6" />
                <path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" />
                <path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" />
                <path d="M22 12h-1" />
              </svg>
            </TabButtonProductJudge>
            <TabButtonProductJudge
              value='ProductJudge5'
              heading='Share your results with your colleagues'
              smallHeading='Share'
              leftOrRight='right'
              isPending={isPending}
              activeTab={activeTabProductJudge}
              onClick={() => selectTabProductJudge('ProductJudge5')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-table-share">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8" />
                <path d="M3 10h18" />
                <path d="M10 3v18" />
                <path d="M16 22l5 -5" />
                <path d="M21 21.5v-4.5h-4.5" />
              </svg>
            </TabButtonProductJudge>
            <TabButtonProductJudge
              value='ProductJudge6'
              heading='Personal Lifetime Archive'
              smallHeading='Archive'
              leftOrRight='right'
              isPending={isPending}
              activeTab={activeTabProductJudge}
              onClick={() => selectTabProductJudge('ProductJudge6')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-archive">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                <path d="M10 12l4 0" />
              </svg>
            </TabButtonProductJudge>
          </div>

        </div>
        {/* Titles for small mobile devices */}
        <div className="landscape:hidden portrait:flex portrait:md:hidden w-full justify-center items-center relative py-10">
          <h4 className={clsx("text-center text-transparent bg-clip-text bg-gradient-to-b from-[var(--purple-350)] to-purple-100",
          "two-lines-always")}>
            {descriptionSrcMap[activeTabProductJudge]}
          </h4>
        </div>
        {/* // Use the loading state to conditionally render the image in small mobile device*/}
        <div className={clsx("flex portrait:md:hidden landscape:hidden items-center justify-center min-w-auto landscape:max-w-[25vw] portrait:max-w-[120vw] max-h-[110vh] z-10")}>
          <img
            className="object-scale-down max-h-[65vh] rounded-[4.5rem] shadow-2xl shadow-neutral-50/10 ring-4 ring-fuchsia-950/50"
            src={(preloadedImages as any)[activeTabProductJudge]?.src}
            alt="iphone-12"
            onLoad={() => setIsLoading(false)}
          />
          {/* {isLoading && <div className="loading-overlay">Loading...</div>} // Disabled because it causes visual glitches that are unecessary given the small payload */}
        </div>

      </section>

      <section id="RecordKeeper" className="flex flex-col py-0 md:py-0 lg:py-0 pt-0 md:pt-[3.35vw] lg:pt-[3.35vw] justify-center">
          <div className={clsx(
            "flex flex-col relative justify-center",
            "h-full mx-1 md:mx-[5.6vw]",
            "px-12 md:px-[7.65vw] pt-12 md:pt-[10.3vw] pb-12 md:pb-[14.1vw]",
            "rounded-[3rem] bg-no-repeat ",
          )}> {/* //bg-bgRadialGradientUp */}
            <h5 className="flex flex-col justify-end text-right z-20 max-w-[30rem] md:max-w-[100%] text-md md:text-[2.175vw] mb-12 md:mb-[3.5vw] text-neutral-200 deboss">
              RecordKeeper
            </h5>
            <h3 className={clsx(
              "flex flex-col justify-end text-right z-20 pl-[0%] md:pl-[15vw] mb-12 md:mb-[3.5vw]",
              "text-xl md:text-[4.35vw] text-transparent bg-clip-text py-2 bg-gradient-to-bl from-[var(--purple-250)] to-purple-100")}>
              Designed for officials performing Scorekeeping and Timekeeping duties
            </h3>
            <h6 className="flex flex-col justify-end z-20 pl-[0vw] md:pl-[15vw] text-[1.5rem] md:text-[1.33vw] text-right font-medium leading-[2.1rem] md:leading-[1.75vw]">
              The “RecordKeeper” is our tool designed for officials performing Scorekeeping and Timekeeping duties.<br/><br/>
              Because it is capable of automating most of the responsibilities, we are able to combine the roles of Scorekeeper and Timekeeper into one, called the RecordKeeper.<br/><br/>
              Outperforming the roles when done individually, the RecordKeeper connects to the Judges, receives and calculates their score, and has outstanding timing capabilities, timing simultaneously Round Time, Breaks and In-between rounds, as well as important event logging, such as Reasons for Point deductions or Break duration.<br/><br/>
              At the end of fights, it provides a clear display of the winner for easy visualization, for quick dispatch to the speaker. Once completed, every detail is instantly delivered to the Federation dashboard.
            </h6>
          </div>

          {/* Titles for big mobile devices */}
          <div className="landscape:hidden portrait:hidden portrait:touch:hidden portrait:touch:md:flex w-full justify-center items-center relative mb-6 md:mb-10 lg:mb-12 py-8 px-[10%]">
            <h3 className={clsx("text-center text-transparent bg-clip-text bg-gradient-to-b from-[var(--purple-400)] to-purple-100",
            "two-lines-always")}>
              {descriptionSrcMap[activeTabProductJudge]}
            </h3>
          </div>

        </section>


      {/* <section id="Benefits" className='z-20 benefits'>
        <div className="flex flex-col justify-center items-center mb-4 md:mb-8 lg:mb-12">
          <h5 className="mb-4 md:mb-8 lg:mb-12 text-neutral-200 text-center deboss">
            Benefits for everyone else
          </h5>
          <h2 id="featuresJudgeTitle" className="text-transparent text-center pb-12 bg-clip-text bg-gradient-to-tr from-[var(--purple-250)] to-purple-100 w-[95%] md:w-[85%]">
          Athletes, Coaches, Clubs and Promoters also benefit from using MMAPP
          </h2>
          <p className=" text-center w-[95%] md:w-[60%] pb-10">
            Choose your category below to find out how you stand to gain
          </p>
        </div>
        <Benefits />
      </section> */}


      <div className="borderBottom"></div>


      <section id="ContactUs" className="">
        <h5 className="mb-4 md:mb-8 lg:mb-12 text-neutral-200 text-center deboss">
          Contact Us
        </h5>
        <ContactUs id={ContactUs} className=""/>
      </section>
  </>
)};

export default Product;
