/* "use client" */
import React, { useEffect, useState, useTransition } from "react";
import { cn } from "@/lib/utils"
//import TabButtonProductRecordKeeper from '@/components/ui/tab-button-product-RecordKeeper'
import useProductSharedHook from '@/components/ui/productSharedHook'
import { ProductDashboardTitles } from '@/components/ui/productTitlesFC'

const ProductDashboardDesktop = ({ ...props }) => {
  const {
    productDashboardItems,
    dashboard,
    setIsLoading,
  } = useProductSharedHook();

  return (
    <>
      <div id="ProductDashboardDesktop" className={cn(
        "dashboardBlock flex flex-col items-center justify-start relative z-10",
        "min-w-auto max-w-[100%] md:max-w-[95%] h-full max-h-[100%] mx-0 md:mx-[5.6vw] portrait:mx-[1vw] portrait:md:mx-[3vw]",
        "px-0 md:px-[12vw] portrait:md:px-[0vw] pb-12 md:pb-0 lg:pb-12 portrait:md:pb-[0vw] landscape:touch:md:pb-[2vw] landscape:touch:lg:pb-[1.5vw]",
        )}
      >
        <picture><img
          className="object-scale-down"
          src="/images/hardware/proDisplay.webp"
          alt="Pro Display image"
          onLoad={() => setIsLoading(false)}
        /></picture>
        <picture><img
          className="object-scale-down px-12 md:px-[8vw] portrait:md:px-[2vw] pt-[2vw] md:pt-[0.5vw]"
          src="/images/hardware/magicKeyboardMouse.webp"
          alt="Magic Keyboard & Mouse image"
          onLoad={() => setIsLoading(false)}
        /></picture>
        {/* {isLoading && <div className="loading-overlay">Loading...</div>} // Disabled because it causes visual glitches that are unecessary given the small payload */}

        {/* Dashboard Video */}
        <div className="flex absolute w-full justify-center items-end md:pt-[0vw] px-[1.65vw] md:px-[13vw] portrait:md:px-[1.45vw]">
          {/* <video
            className="object-scale-down portrait:max-h-[65vh] portrait:md:max-h-max"
            src="/videos/product/mmappdemo5spedup.webm"
            autoPlay
            loop
          /> */}
          {/* <img
            className="object-contain w-full portrait:max-h-max portrait:md:max-h-max px-0 md:px-[0vw] pt-[1.45vw] md:pt-[1vw]"
            src="/videos/product/Sharingofadashboard.webp"
            alt="Animated WebP"
            onLoad={() => setIsLoading(false)}
          /> */}
          <video
            className="object-fill w-full portrait:max-h-max portrait:md:max-h-max px-0 md:px-[0vw] pt-[1.6vw] md:pt-[1vw] portrait:md:pt-[1.475vw]"
            src={dashboard}
            typeof="video/mp4"
            playsInline
            muted
            autoPlay
            loop
          />
        </div>

        <ProductDashboardTitles
          className="flex absolute w-full justify-center items-end pt-[65vw] md:pt-[42vw] portrait:md:pt-[62vw] px-[14vw] portrait:px-[1vw] portrait:md:px-[1vw]"
          productDashboardItems={productDashboardItems}
        />
      </div>
    </>
  )
};

export default ProductDashboardDesktop;