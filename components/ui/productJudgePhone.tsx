/* "use client" */
import React, { useEffect, useState, useTransition } from "react";
import { cn } from "@/lib/utils"
import TabButtonProductJudge from '@/components/ui/tab-button-product-judge'
import useProductSharedHook from '@/components/ui/productSharedHook'

const ProductJudgePhone = ({ ...props }) => {
  const {
    activeTabProductJudge,
    isPending,
    preloadedImages,
    isLoading,
    setIsLoading,
    descriptionSrcMapJudge,
    selectTabProductJudge,
  } = useProductSharedHook();

  return (
    <div id="ProductJudgePhone" className="portrait:md:h-[112vw] portrait:touch:md:h-[115vw] portrait:touch:lg:h-[115vw]">

      {/* Titles for portrait devices */}
      {<div className="landscape:hidden portrait:flex w-full justify-center items-center relative mb-2 md:mb-[2vw] pb-0 portrait:md:pb-[0.5vw] portrait:md:pt-[1vw] px-0 portrait:md:px-[10%]">
        <h4 className={cn("mmappBlockReveal text-center portrait:text-[4.5vw] portrait:md:text-[3.75vw] text-transparent bg-clip-text bg-gradient-to-b from-[var(--purple-500)] to-purple-50",
        "two-lines-always")}>
          {descriptionSrcMapJudge[activeTabProductJudge]}
        </h4>
      </div>}

      <div
      className={cn("w-full flex flex-col md:flex-row gap-1 md:gap-0 relative pb-0 md:pb-[1.75vw] landscape:touch:md:pb-[2vw] ")}
      {...props}
      >
        {/* // Use the loading state to conditionally render the images in small mobile device*/}
        <div className={cn("judgePhoneWrapper flex portrait:md:hidden landscape:hidden items-center justify-center min-w-auto portrait:max-w-[100vw] max-h-[100vh] z-10 pb-[4vw]")}>
          <picture><img
            className="judgePhone object-scale-down max-h-[65svh]" // shadow-2xl shadow-fuchsia-950/50
            src={(preloadedImages as any)[activeTabProductJudge]?.src}
            alt="iphone-12"
            onLoad={() => setIsLoading(false)}
          /></picture>
          {/* {isLoading && <div className="loading-overlay">Loading...</div>} // Disabled because it causes visual glitches that are unecessary given the small payload */}
        </div>

        <div className="w-full flex flex-row md:flex-col justify-center items-end gap-4 md:gap-20 relative overflow-hidden">
          <TabButtonProductJudge
            value='ProductJudge1'
            className="ProductJudgeButtonLeft"
            heading='Assess Fights with the MMAPP Methodology'
            smallHeading='Assess'
            leftOrRight='left'
            isPending={isPending}
            activeTab={activeTabProductJudge}
            onClick={() => selectTabProductJudge('ProductJudge1')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-body-scan w-[25px] md:w-[28px] lg:w-[30px] h-[25px] md:h-[28px] lg:h-[30px]">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
              <path d="M4 16v2a2 2 0 0 0 2 2h2" />
              <path d="M16 4h2a2 2 0 0 1 2 2v2" />
              <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
              <path d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M10 17v-1a2 2 0 1 1 4 0v1" />
              <path d="M8 10c.666 .666 1.334 1 2 1h4c.666 0 1.334 -.334 2 -1" />
              <path d="M12 11v3" />
            </svg>
          </TabButtonProductJudge>
          <TabButtonProductJudge
            value='ProductJudge2'
            className="ProductJudgeButtonLeft"
            heading='Submit Scores Instantly'
            smallHeading='Submit'
            leftOrRight='left'
            isPending={isPending}
            activeTab={activeTabProductJudge}
            onClick={() => selectTabProductJudge('ProductJudge2')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-upload w-[25px] md:w-[28px] lg:w-[30px] h-[25px] md:h-[28px] lg:h-[30px]">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <path d="M12 11v6" />
              <path d="M9.5 13.5l2.5 -2.5l2.5 2.5" />
            </svg>
          </TabButtonProductJudge>
          <TabButtonProductJudge
            value='ProductJudge3'
            className="ProductJudgeButtonLeft"
            heading='Personalised Fight Card'
            smallHeading='Fight Card'
            leftOrRight='left'
            isPending={isPending}
            activeTab={activeTabProductJudge}
            onClick={() => selectTabProductJudge('ProductJudge3')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-id-badge-2 w-[25px] md:w-[28px] lg:w-[30px] h-[25px] md:h-[28px] lg:h-[30px]">
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
        <div className={cn("judgePhoneWrapper hidden portrait:md:flex landscape:flex items-center justify-center min-w-[25vw] max-w-[25vw] portrait:min-w-[50vw] portrait:max-w-[50vw] z-10")}> {/* needed to set both min-w and max-w to cater to Chrome and Safari */}
          <picture><img
            className="judgePhone object-scale-down" // shadow-2xl shadow-fuchsia-950/50
            src={(preloadedImages as any)[activeTabProductJudge]?.src}
            alt="iPhone Judge images"
            onLoad={() => setIsLoading(false)}
          /></picture>
          {/* {isLoading && <div className="loading-overlay">Loading...</div>} // Disabled because it causes visual glitches that are unecessary given the small payload */}
        </div>

        <div className="w-full flex flex-row md:flex-col justify-center items-start gap-4 md:gap-20 relative overflow-hidden">
          <TabButtonProductJudge
            value='ProductJudge4'
            className="ProductJudgeButtonRight"
            heading='Make more informed decisions'
            smallHeading='Decisions'
            leftOrRight='right'
            isPending={isPending}
            activeTab={activeTabProductJudge}
            onClick={() => selectTabProductJudge('ProductJudge4')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-barbell w-[25px] md:w-[28px] lg:w-[30px] h-[25px] md:h-[28px] lg:h-[30px]">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12h4.5l1.5 -6l4 12l2 -9l1.5 3h4.5" />
            </svg>
          </TabButtonProductJudge>
          <TabButtonProductJudge
            value='ProductJudge5'
            className="ProductJudgeButtonRight"
            heading='Share your results with your colleagues'
            smallHeading='Share'
            leftOrRight='right'
            isPending={isPending}
            activeTab={activeTabProductJudge}
            onClick={() => selectTabProductJudge('ProductJudge5')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-table-share w-[25px] md:w-[28px] lg:w-[30px] h-[25px] md:h-[28px] lg:h-[30px]">
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
            className="ProductJudgeButtonRight"
            heading='Personal Lifetime Archive'
            smallHeading='Archive'
            leftOrRight='right'
            isPending={isPending}
            activeTab={activeTabProductJudge}
            onClick={() => selectTabProductJudge('ProductJudge6')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-archive w-[25px] md:w-[28px] lg:w-[30px] h-[25px] md:h-[28px] lg:h-[30px]">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
              <path d="M10 12l4 0" />
            </svg>
          </TabButtonProductJudge>
        </div>

      </div>

    </div>
  )
};

export default ProductJudgePhone;