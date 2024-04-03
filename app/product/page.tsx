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
      <section id="Features" className="flex flex-col pt-0 md:pt-12 lg:pt-20">
          <MainBanner className="bg-bgRadialGradientDown">
            <MainBannerTitle className="flex flex-col justify-start z-20 max-w-[30rem] md:max-w-[50rem] lg:max-w-[60rem] text-left">
              MMAPP Methodology
            </MainBannerTitle>
            <MainBannerHeading className="flex flex-col justify-start z-20 pr-[0%] md:pr-[32%] lg:pr-[20%] text-left">
              A consistent and standardised unit of measurement for officiating MMA
            </MainBannerHeading>
            <MainBannerDescription className="flex flex-col justify-start z-20 pr-[0%] md:pr-[30%] lg:pr-[25%] text-left">
              The MMAPP Platform centres around our patented methodology, which provides officials worldwide with a consistent and coherent approach to assessing MMA fights.<br/><br/>
              Using only a mobile device, officials can record their train of thought, without any outside input, for every second of the fight and provide insights into their own evaluation immediately after the round.<br/><br/>
              This allows officials to make more informed decisions for longer.<br/><br/>
              By creating a standardised unit of measurement, we are able to get officials on the same page and improve consistency in MMA Judging, whilst allowing judges to have a better recall of every fight.
            </MainBannerDescription>
          </MainBanner>
      </section>

      <div className="borderBottom"></div>

      <section id="Judge" className="flex flex-col justify-center">
          <MainBanner className="bg-bgRadialGradientUp">
            <MainBannerTitle className="flex flex-col justify-center z-20 text-center">
              Judge
            </MainBannerTitle>
            <MainBannerHeading className="flex flex-col justify-center z-20 text-center px-[0%] md:px-[5%] lg:px-[5%]">
              Designed for officials and their mobile devices
            </MainBannerHeading>
            <MainBannerDescription className="flex flex-col justify-center z-20 text-center px-[0%] md:px-[8%] lg:px-[10%]">
              The “Judge” app is specifically designed for officials and their mobile devices.<br/><br/>
              It provides the tools to apply our methodology during a fight, submit scores to the RecordKeeper instantly, and offer personalised fight cards for each official.<br/><br/>
              Additionally, it allows judges to share their scorecards and graphs with each other and their Federations, allowing for a second-by-second analysis of each round.
            </MainBannerDescription>
          </MainBanner>

        {/* <div className={clsx("hero1ContainerMargins w-full h-full flex flex-col md:flex-row relative bg-bgRadialGradientUp",
          "rounded-[3rem] px-10 md:px-20 lg:px-32 py-24 md:py-32 lg:py-32")}>

          <div className="flex flex-col justify-top z-20 text-center">
            <h5 className="mb-4 md:mb-8 lg:mb-12 text-neutral-200 deboss">
              Judge
            </h5>
            <div className="flex flex-col justify-center items-start px-2 md:px-12 lg:px-32">
              <h3 className="mb-8 md:mb-12 lg:mb-16 pr-0 md:pr-20 lg:pr-80 py-8 text-left text-transparent bg-clip-text bg-gradient-to-bl from-[var(--purple-250)] to-purple-100">
                Designed for officials and their mobile devices
              </h3>
              <h6 className="h7 font-medium text-left leading-[2.1rem] md:leading-[2.5rem]">
                The “Judge” app is specifically designed for officials and their mobile devices.<br/><br/>
                It provides the tools to apply our methodology during a fight, submit scores to the RecordKeeper instantly, and offer personalised fight cards for each official.<br/><br/>
                Additionally, it allows judges to share their scorecards and graphs with each other and their Federations, allowing for a second-by-second analysis of each round.
              </h6>
            </div>
          </div>
        </div> */}

        {/* <div className="flex h-[10rem] items-center border-2 border-white/100">
          <button className="group relative rounded-full p-px text-[0.8125rem] font-semibold leading-6 shadow-xl shadow-zinc-950 text-white">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              </span>
            </span>
            <div className="relative z-10 rounded-full bg-gradient-to-b from-zinc-800 to-zinc-900 py-1 px-4 ring-1 ring-white/10 flex items-center space-x-2">
              <span>
                Download
              </span>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40">
            </span>
          </button>
        </div> */}

        {/* Titles for big mobile devices */}
        <div className="landscape:hidden portrait:hidden portrait:md:flex w-full justify-center items-center relative mb-6 md:mb-10 lg:mb-12 py-8">
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
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-scoreboard">
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
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-upload">
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
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-id-badge-2">
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
          <div className={clsx("hidden portrait:md:flex landscape:flex items-center justify-center min-w-auto landscape:max-w-[25vw] portrait:max-w-[120vw] max-h-[110vh] z-10")}>
            <img
              className="object-scale-down portrait:max-h-[65vh] portrait:md:max-h-max landscape:rounded-[5.25rem] portrait:rounded-[4.5rem] shadow-2xl shadow-neutral-50/10 ring-4 ring-fuchsia-950/25"
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
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-barbell">
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
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-table-share">
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
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-archive">
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
            className="object-scale-down portrait:max-h-[65vh] portrait:md:max-h-max landscape:rounded-[5.25rem] portrait:rounded-[4.5rem] shadow-2xl shadow-neutral-50/10 ring-4 ring-fuchsia-950/50"
            src={(preloadedImages as any)[activeTabProductJudge]?.src}
            alt="iphone-12"
            onLoad={() => setIsLoading(false)}
          />
          {/* {isLoading && <div className="loading-overlay">Loading...</div>} // Disabled because it causes visual glitches that are unecessary given the small payload */}
        </div>

      </section>

      <section id="Benefits" className='z-20 benefits'>
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
      </section>


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
