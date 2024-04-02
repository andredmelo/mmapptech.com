"use client"
import React, { useEffect, useRef, useState, useTransition } from "react";
import { Metadata } from 'next'
import { clsx } from "clsx";
import Benefits from '@/app/home/benefits'
import ContactUs from '@/app/contact/contact-us'


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
      <section id="Features" className="flex justify-center">

        <div className={clsx("w-full flex flex-col md:flex-row relative",
          "hero1ContainerMargins rounded-b-[3rem] bg-no-repeat bg-bottom bg-bgRadialGradientDown")} /* style={{ backgroundImage: `url("data:image/svg+xml,${svgString}")`, backgroundSize:"100%"}} */>

          <div className="flex flex-col justify-top z-20 text-center pb-40">
            <h5 className="mb-4 md:mb-8 lg:mb-12 text-neutral-200 deboss">
              MMAPP Methodology
            </h5>
            <div className="flex flex-col justify-center items-center">
              <h3 className="mb-8 md:mb-12 lg:mb-16 py-8 text-center text-transparent bg-clip-text bg-gradient-to-bl from-[var(--purple-250)] to-purple-100 w-[95%] md:w-[80%]">
              A consistent and standardised unit of measurement for officiating MMA
              </h3>
              <h6 className="h7 font-medium text-center leading-[2.1rem] md:leading-[2.5rem] w-[98%] md:w-[85%]">
                The MMAPP Platform centres around our patented methodology, which provides officials worldwide with a consistent and coherent approach to assessing MMA fights.<br/>
                Using only a mobile device, officials can record their train of thought, without any outside input, for every second of the fight and provide insights into their own evaluation immediately after the round.<br/>
                This allows officials to make more informed decisions for longer.<br/>
                By creating a standardised unit of measurement, we are able to get officials on the same page and improve consistency in MMA Judging, whilst allowing judges to have a better recall of every fight.
              </h6>
            </div>
          </div>
        </div>
      </section>

      <div className="borderBottom"></div>

      <section id="Judge" className="flex flex-col justify-center hero1ContainerMargins">

        <div className={clsx("w-full h-full flex flex-col md:flex-row relative bg-bgRadialGradientUp",
          "rounded-[3rem] px-10 md:px-20 lg:px-32 py-28 md:py-32 lg:py-32")}>

          <div className="flex flex-col justify-top z-20 text-center">
            <h5 className="mb-4 md:mb-8 lg:mb-12 text-neutral-200 deboss">
              Judge
            </h5>
            <div className="flex flex-col justify-center items-center">
              <h3 className="mb-8 md:mb-12 lg:mb-16 py-8 text-center text-transparent bg-clip-text bg-gradient-to-bl from-[var(--purple-250)] to-purple-100 w-[98%] md:w-[60%]">
                Designed for officials and their mobile devices
              </h3>
              <h6 className="h7 font-medium text-left leading-[2.1rem] md:leading-[2.5rem] w-[98%] md:w-[85%]">
                The “Judge” app is specifically designed for officials and their mobile devices.<br/>
                It provides the tools to apply our methodology during a fight, submit scores to the RecordKeeper instantly, and offer personalised fight cards for each official.<br/>
                Additionally, it allows judges to share their scorecards and graphs with each other and their Federations, allowing for a second-by-second analysis of each round.
              </h6>
            </div>
          </div>
        </div>

        {/* Titles for big mobile devices */}
        <div className="landscape:hidden portrait:hidden portrait:md:flex w-full justify-center items-center relative mb-6 md:mb-10 lg:mb-12 py-8">
          <h3 className={clsx("text-center text-transparent bg-clip-text bg-gradient-to-t from-[var(--purple-450)] to-purple-100",
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
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-assembly">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                <path d="M15.5 9.422c.312 .18 .503 .515 .5 .876v3.277c0 .364 -.197 .7 -.515 .877l-3 1.922a1 1 0 0 1 -.97 0l-3 -1.922a1 1 0 0 1 -.515 -.876v-3.278c0 -.364 .197 -.7 .514 -.877l3 -1.79c.311 -.174 .69 -.174 1 0l3 1.79h-.014z" />
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
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-refresh-dot">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
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
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-atom-2">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M12 21l0 .01" />
                <path d="M3 9l0 .01" />
                <path d="M21 9l0 .01" />
                <path d="M8 20.1a9 9 0 0 1 -5 -7.1" />
                <path d="M16 20.1a9 9 0 0 0 5 -7.1" />
                <path d="M6.2 5a9 9 0 0 1 11.4 0" />
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
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-assembly">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                <path d="M15.5 9.422c.312 .18 .503 .515 .5 .876v3.277c0 .364 -.197 .7 -.515 .877l-3 1.922a1 1 0 0 1 -.97 0l-3 -1.922a1 1 0 0 1 -.515 -.876v-3.278c0 -.364 .197 -.7 .514 -.877l3 -1.79c.311 -.174 .69 -.174 1 0l3 1.79h-.014z" />
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
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-refresh-dot">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
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
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-atom-2">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M12 21l0 .01" />
                <path d="M3 9l0 .01" />
                <path d="M21 9l0 .01" />
                <path d="M8 20.1a9 9 0 0 1 -5 -7.1" />
                <path d="M16 20.1a9 9 0 0 0 5 -7.1" />
                <path d="M6.2 5a9 9 0 0 1 11.4 0" />
              </svg>
            </TabButtonProductJudge>
          </div>

        </div>


        {/* Titles for small mobile devices */}
        <div className="landscape:hidden portrait:flex portrait:md:hidden w-full justify-center items-center relative py-10">
          <h4 className={clsx("text-center text-transparent bg-clip-text bg-gradient-to-t from-[var(--purple-450)] to-purple-100",
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
        <Benefits /* items={items} */ />
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
