import * as React from "react"

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
      leftOrRight === 'left' ? "landscape:items-start landscape:text-left landscape:pr-[50%] portrait:pr-[0%]" : "landscape:items-end landscape:text-right landscape:pl-[50%] portrait:pl-[0%]",
      "overflow-hidden portrait:pt-[6rem] portrait:md:pt-[36%]",
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
      "font-medium md:font-normal leading-[2rem] md:leading-[2rem] lg:leading-[3rem] text-neutral-700 dark:text-neutral-300",
      "py-8 md:py-8 lg:py-10 px-2 md:px-0 portrait:md:px-[5%] text-shadow-sm",
      className
    )}
    {...props}
  />
))
FeaturesCardDescription.displayName = "FeaturesCardDescription"


const FeaturesCardImage = React.forwardRef<
  HTMLImageElement,
  FeaturesCardImageProps
>(({ className, src, ...props }, ref) => (

  <div
    ref={ref}
    className={cn(
      "flex shrink md:hidden items-start justify-center h-auto max-h-full border border-neutral-700/50", //  border-2 border-green-500
      className
    )}
  >
    <img
      src={src}
      ref={ref}
      className={cn(
        "shrink object-scale-down h-full max-h-[58svh]", //max-h-[50svh]
      )}
      {...props}
    />
  </div>
))
FeaturesCardImage.displayName = "FeaturesCardImage"

export { FeaturesCard, FeaturesCardHeader, FeaturesCardTitle, FeaturesCardDescription, FeaturesCardImage }