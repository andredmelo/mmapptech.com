/* "use client" */
import React, { useEffect, useState, useTransition } from "react";
import { cn } from "@/lib/utils"
//import TabButtonProductRecordKeeper from '@/components/ui/tab-button-product-RecordKeeper'
import useProductSharedHook from '@/components/ui/productSharedHook'
import { ProductDashboardMembersTitles } from '@/components/ui/productTitlesFC'

const ProductDashboardMembersLaptop = ({ ...props }) => {
  const {
    productDashboardMembersItems,
    dashboardMembers,
    setIsLoading,
  } = useProductSharedHook();

  return (
    <>
      <div id="ProductDashboardMembersLaptop" className={cn(
        "w-full flex landscape:flex-row portrait:flex-col gap-0 md:gap-0 relative",
        "min-w-auto max-w-[100%] md:max-w-[90%] portrait:md:max-w-[94%] h-full max-h-[100vh] mx-1 md:mx-[5.6vw] portrait:md:mx-auto portrait:mx-auto",
        )}
      >
        <div className={cn(
          "dashboardMembersWrapper basis-[55%] flex landscape:items-left portrait:items-start justify-center relative z-10",
          "min-w-auto max-w-[100%] md:max-w-[90%] portrait:md:max-w-[100%] h-full max-h-[100%]",
          "px-0 md:px-[0vw] pb-0 md:pb-0",
          )}
        >
          <picture><img
            className="object-scale-down"
            src="/images/hardware/macBookPro.webp"
            alt="Pro Display image"
            onLoad={() => setIsLoading(false)}
          /></picture>
          {/* {isLoading && <div className="loading-overlay">Loading...</div>} // Disabled because it causes visual glitches that are unecessary given the small payload */}

          {/* Dashboard (Members) Video */}
          <div className="flex absolute w-full justify-start portrait:justify-center items-start px-[9.5vw] md:px-[4.25vw] portrait:md:px-[9vw]">
            {/* <video
              className="object-scale-down portrait:touch:max-h-[65vh] portrait:touch:md:max-h-max"
              src="/videos/product/mmappdemo5spedup.webm"
              autoPlay
              loop
            /> */}
            {/* <img
              className="object-cover"
              src="/videos/product/Sharingofadashboard.webp"
              alt="Animated WebP"
              onLoad={() => setIsLoading(false)}
            /> */}
            <video
              className="object-fill w-full px-0 md:px-[0vw] my-[3.75vw] md:my-[0.9vw] portrait:md:my-[2.15vw] portrait:touch:md:mt-[2vw] portrait:touch:lg:mt-[2vw] rounded-[0.3rem]"
              src={dashboardMembers}
              typeof="video/mp4"
              playsInline
              muted
              autoPlay
              loop
            />
          </div>
        </div>

        {/* Dashboard (Members) Titles Backup */}
        {/* <div className="productDashboardMembersTitlesWrapper w-fit h-fit overflow-hidden border-blue-500">
          <div className={cn(
            "productDashboardMembersTitlesBox basis-[45%] relative flex flex-col justify-start items-left",
            "w-full min-w-[20vw] portrait:min-w-[70vw] max-h-[40vw] md:max-h-[27vw] portrait:max-h-[45vw] portrait:md:max-h-[40vw]",
            "ml-[2vw] portrait:ml-[0vw] mr-[6vw] portrait:mr-[0vw] border-2 border-red-500",
            )}
          >
            <ProductDashboardMembersTitles
              className="productDashboardMembersTitles flex items-center justify-center min-h-[20%] portrait:min-h-[15vw] portrait:md:min-h-[11vw] mx-1 md:mx-0 group border-2 border-green-500"
              productDashboardMembersItems={productDashboardMembersItems}
            />
          </div>
        </div> */}

        {/* Dashboard (Members) Titles */}
        <div className={cn(
          "productDashboardMembersTitlesWrapper basis-[45%] relative flex flex-col justify-start items-left overflow-hidden",
          "w-full h-full",
          "ml-[2vw] portrait:ml-[0vw] mr-[6vw] portrait:mr-[0vw]", // border-2 border-green-500
          )}
        >
          <div className={cn(
            "productDashboardMembersTitlesBox",
            "w-full h-full max-h-[40vw] md:max-h-[27vw] portrait:max-h-[70vw] portrait:md:max-h-[45vw]",
            "portrait:pt-2 portrait:md:pt-4", // border-2 border-yellow-300
            )}
          >
            <ProductDashboardMembersTitles
              className={cn(
                "productDashboardMembersTitles flex items-center justify-center",
                "min-h-[6vw] max-h-[6vw] portrait:min-h-[12vw] portrait:max-h-[12vw] portrait:md:min-h-[10vw] portrait:md:max-h-[10vw]",
                "group"
              )} // border-2 border-red-500
              productDashboardMembersItems={productDashboardMembersItems}
            />
          </div>
        </div>
      </div>
    </>
  )
};

export default ProductDashboardMembersLaptop;