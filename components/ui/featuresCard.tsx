import * as React from "react"
import { isMobileOnly, isAndroid, isWinPhone, isIOS, isSamsungBrowser } from 'react-device-detect';

import { cn } from "@/lib/utils"

export interface FeaturesCardProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  leftOrRight: 'left' | 'right'
}

export interface FeaturesCardImageProps
  extends React.HTMLAttributes<HTMLImageElement> {
    src: string
    alt: string
}

export interface FeaturesCardVideoProps
  extends React.HTMLAttributes<HTMLVideoElement> {
    src: string
}


const FeaturesCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col items-center justify-center",
      "w-full h-full md:min-h-[100lvh] touch:md:h-[100lvh] touch:md:max-h-[100lvh]", // border-2 border-fuchsia-600
      className
    )}
    {...props}
  />
))
FeaturesCard.displayName = "FeaturesCard"

const FeaturesCardHeader = React.forwardRef<
  HTMLParagraphElement,
  FeaturesCardProps
>(({ className, leftOrRight, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col portrait:items-center landscape:justify-center portrait:justify-start portrait:md:justify-start portrait:text-center", // border-2 border-green-500
      "w-[98vw] md:w-[90vw] lg:w-full max-w-[1440px] min-h-0 md:min-h-[100lvh] h-full md:h-[100lvh] touch:md:max-h-[100lvh]",
      "overflow-hidden",
      isMobileOnly ? 
        leftOrRight === 'left' ? "landscape:items-center landscape:text-center landscape:pr-0 portrait:pr-[0%] landscape:pt-[6rem] portrait:pt-[6rem] portrait:md:pt-[36%]" : "landscape:items-center landscape:text-center landscape:pl-0 portrait:pl-[0%] landscape:pt-[6rem] portrait:pt-[6rem] portrait:md:pt-[36%]"
      : 
        leftOrRight === 'left' ? "landscape:items-center landscape:text-center landscape:pr-0 landscape:md:items-start landscape:md:text-left landscape:md:pr-[50%] portrait:pr-[0%] landscape:pt-[6rem] landscape:md:pt-0 portrait:pt-[6rem] portrait:md:pt-[36%]" : "landscape:items-center landscape:text-center landscape:pl-0 landscape:md:items-end landscape:md:text-right landscape:md:pl-[50%] portrait:pl-[0%] landscape:pt-[6rem] landscape:md:pt-0 portrait:pt-[6rem] portrait:md:pt-[36%]",
      className
    )}
    {...props}
  />
))
FeaturesCardHeader.displayName = "FeaturesCardHeader"

const FeaturesCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn(
      "px-10 md:px-0", // border-2 border-green-500
      className
    )}
    {...props}
  />
))
FeaturesCardTitle.displayName = "FeaturesCardTitle"

const FeaturesCardDescription = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h6
    ref={ref}
    className={cn(
      "font-sans font-medium md:font-normal leading-[2rem] md:leading-[2rem] lg:leading-[3rem] text-neutral-300", //text-neutral-700 
      "py-8 md:py-8 lg:py-10 px-2 md:px-0 portrait:md:px-[5%] landscape:px-[9%] landscape:md:px-0 text-shadow-sm",
      className
    )}
    {...props}
  />
))
FeaturesCardDescription.displayName = "FeaturesCardDescription"


const FeaturesCardImage = React.forwardRef<
  HTMLImageElement,
  FeaturesCardImageProps
>(({ className, src, alt, ...props }, ref) => (

  <div
    ref={ref}
    className={cn(
      "flex shrink items-start justify-center h-auto max-h-full overflow-hidden rounded-2xl border border-fuchsia-600/75", //  border-2 border-green-500
      isMobileOnly ? '' : 'md:hidden',
      className
    )}
  >
    <picture><img
      src={src}
      ref={ref}
      alt={alt}
      className={cn(
        "shrink object-scale-down h-full landscape:max-h-[200svh] portrait:max-h-[80svh]", //max-h-[50svh]
      )}
      {...props}
    /></picture>
  </div>
))
FeaturesCardImage.displayName = "FeaturesCardImage"


const FeaturesCardVideo = React.forwardRef<
  HTMLVideoElement,
  FeaturesCardVideoProps
>(({ className, src, ...props }, ref) => (
  <div
    className={cn(
      "flex shrink items-start justify-center h-auto max-h-full overflow-hidden rounded-2xl border border-fuchsia-600/75", //  border-2 border-green-500
      isMobileOnly ? '' : 'md:hidden',
      className
    )}
  >
    <video
      src={src}
      ref={ref}
      typeof="video/mp4"
      playsInline
      muted
      autoPlay
      loop
      className={cn(
        "shrink object-scale-down h-full landscape:max-h-[200svh] portrait:max-h-[80svh]", //max-h-[50svh]
      )}
      {...props}
    />
  </div>
))
FeaturesCardVideo.displayName = "FeaturesCardVideo"

export { FeaturesCard, FeaturesCardHeader, FeaturesCardTitle, FeaturesCardDescription, FeaturesCardImage, FeaturesCardVideo }

