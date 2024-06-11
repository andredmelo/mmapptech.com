/* "use client" */
import React, { useEffect, useState, useTransition } from "react";
import { cn } from "@/lib/utils"
import TabButtonProductRecordKeeper from '@/components/ui/tab-button-product-RecordKeeper'
import useProductSharedHook from '@/components/ui/productSharedHook'

const ProductRecordKeeperTablet = ({ ...props }) => {
  const {
    activeTabProductRecordKeeper,
    isPending,
    preloadedImages,
    isLoading,
    setIsLoading,
    descriptionSrcMapRecordKeeper,
    selectTabProductRecordKeeper,
  } = useProductSharedHook();

  return (
    <div id="ProductRecordKeeperTablet">
      {/* RecordKeeper Titles */}
      <div className="flex w-full justify-center items-center relative pb-6 md:pb-[1vw] md:pt-[7.5vw] lg:pt-[4vw] xl:pt-[4vw] 2xl:pt-[2.5vw] px-[20vw] portrait:mt-[1vw] portrait:py-[4.5vw] portrait:md:py-[3.25vw] portrait:lg:py-[4.5vw] portrait:px-[3vw] portrait:md:px-[10vw]">
        <h4 className={cn("mmappBlockReveal text-[3vw] md:text-[2.25vw] portrait:text-[5vw] portrait:md:text-[4.5vw] text-center text-transparent bg-clip-text bg-gradient-to-b from-[var(--purple-500)] to-purple-50",
        "twoLinesAlwaysProductRecordKeeper")}>
          {descriptionSrcMapRecordKeeper[activeTabProductRecordKeeper]}
        </h4>
      </div>

      <div className={cn(
        "w-full gap-1 portrait:md:gap-1 md:gap-0 relative",
        "min-w-auto max-w-[100%] md:max-w-[90%] portrait:md:max-w-[92.5%] h-full max-h-[100vh] landscape:md:min-h-[35vw] landscape:lg:min-h-[46vw] landscape:touch:md:min-h-[45vw] mx-1 md:mx-[5.6vw] portrait:mx-auto",
        "px-2 md:px-[3vw] md:pr-[0vw] portrait:md:px-[6.25vw] portrait:md:mb-[0vw] portrait:lg:mb-[0vw]",
        )}
      >
        <div className="flex flex-row portrait:flex-col landscape:md:max-h-[75vh]">
          {/* // Use the loading state to conditionally render the image */}
          <div className={cn(
            "recordKeeperTabletWrapper portrait:basis-full flex landscape:items-left portrait:items-center justify-center relative z-10", // basis-[67%]
            "min-w-auto max-w-[100%] landscape:md:max-w-[62%] landscape:lg:max-w-[90%] landscape:2xl:max-w-[65%] portrait:max-w-[100%] h-full max-h-[100%] landscape:md:max-h-[75vh] landscape:2xl:max-h-full",
            "px-[0vw] pb-[0vw] md:pb-[0vw] portrait:pb-[0vw] md:portrait:pb-[0vw] landscape:touch:md:pb-[0vw]",
            )}
          >
            <picture className="flex landscape:justify-end"><img
              className="recordKeeperTablet object-scale-down portrait:max-h-[65vh] portrait:md:max-h-max landscape:md:max-w-full landscape:md:max-h-full" //  shadow-2xl shadow-fuchsia-950/50 rounded-[2.5vw] portrait:rounded-[4vw] ring-4 md:ring-2 portrait:ring-4 ring-purple-950/75
              src={(preloadedImages as any)[activeTabProductRecordKeeper]?.src}
              alt="iPad RecordKeeper images"
              onLoad={() => setIsLoading(false)}
            /></picture>
            {/* {isLoading && <div className="loading-overlay">Loading...</div>} // Disabled because it causes visual glitches that are unecessary given the small payload */}
          </div>

          <div className={cn("relative portrait:basis-full flex flex-col", // basis-[33%]
          "w-full 2xl:w-[65%] portrait:w-[100%] portrait:md:w-[98%] portrait:mx-auto min-w-[20vw] landscape:md:max-h-[75vh]", //w-full
          "portrait:flex-row justify-center items-start gap-4 md:gap-[3vh] portrait:gap-[vw] portrait:md:gap-[1vw]",
          "px-[0vw] pb-[0vw] md:pb-[0vw] portrait:pb-[2vw] portrait:md:pb-[0vw] portrait:pt-[4vw] portrait:md:pt-[0vw] overflow-hidden",
          )}>
            <div className="flex flex-col portrait:md:flex-row gap-4 md:gap-[3vh] portrait:gap-[3vw] portrait:md:gap-[1vw]">
              <TabButtonProductRecordKeeper
                value='ProductRecordKeeper1'
                className="ProductRecordKeeperButton"
                heading='Master Timing'
                smallHeading='Timing'
                isPending={isPending}
                activeTab={activeTabProductRecordKeeper}
                onClick={() => selectTabProductRecordKeeper('ProductRecordKeeper1')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-time-duration-30 w-[25px] md:w-[25px] lg:w-[30px] h-[25pxw] md:h-[25px] lg:h-[30px]">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0z" />
                  <path d="M8 9h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5" />
                  <path d="M3 12v.01" />
                  <path d="M7.5 4.2v.01" />
                  <path d="M7.5 19.8v.01" />
                  <path d="M4.2 16.5v.01" />
                  <path d="M4.2 7.5v.01" />
                  <path d="M12 21a9 9 0 0 0 0 -18" />
                </svg>
              </TabButtonProductRecordKeeper>
              <TabButtonProductRecordKeeper
                value='ProductRecordKeeper2'
                className="ProductRecordKeeperButton"
                heading='Record every detail'
                smallHeading='Record'
                isPending={isPending}
                activeTab={activeTabProductRecordKeeper}
                onClick={() => selectTabProductRecordKeeper('ProductRecordKeeper2')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-report-analytics w-[25px] md:w-[25px] lg:w-[30px] h-[25pxw] md:h-[25px] lg:h-[30px]">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                  <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                  <path d="M9 17v-5" />
                  <path d="M12 17v-1" />
                  <path d="M15 17v-3" />
                </svg>
              </TabButtonProductRecordKeeper>
            </div>
            <div className="flex flex-col portrait:md:flex-row gap-4 md:gap-[3vh] portrait:gap-[3vw] portrait:md:gap-[1vw]">
              <TabButtonProductRecordKeeper
                value='ProductRecordKeeper3'
                className="ProductRecordKeeperButton"
                heading='Receive & Calculate scorecards'
                smallHeading='Scorecards'
                isPending={isPending}
                activeTab={activeTabProductRecordKeeper}
                onClick={() => selectTabProductRecordKeeper('ProductRecordKeeper3')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-scoreboard w-[25px] md:w-[25px] lg:w-[30px] h-[25pxw] md:h-[25px] lg:h-[30px]">
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
              </TabButtonProductRecordKeeper>
              <TabButtonProductRecordKeeper
                value='ProductRecordKeeper4'
                className="ProductRecordKeeperButton"
                heading='Send Results'
                smallHeading='Results'
                isPending={isPending}
                activeTab={activeTabProductRecordKeeper}
                onClick={() => selectTabProductRecordKeeper('ProductRecordKeeper4')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-upload w-[25px] md:w-[25px] lg:w-[30px] h-[25px] md:h-[25px] lg:h-[30px]">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                  <path d="M12 11v6" />
                  <path d="M9.5 13.5l2.5 -2.5l2.5 2.5" />
                </svg>
              </TabButtonProductRecordKeeper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProductRecordKeeperTablet;