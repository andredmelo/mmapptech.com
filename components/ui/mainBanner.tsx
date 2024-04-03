import * as React from "react"

import { cn } from "@/lib/utils"

const MainBanner = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col relative justify-center",
      "max-w-[1536px] h-full mx-1 md:mx-[4rem] xl:mx-[8rem] 2xl:mx-[13.5rem] 3xl:min-w-[1536px] 3xl:mx-auto",
      "px-12 md:px-28 lg:px-44 py-20 md:py-36 lg:py-44",
      "rounded-[3rem] bg-no-repeat ", // border-2 border-fuchsia-600
      className
    )}
    {...props}
  />
))
MainBanner.displayName = "MainBanner"

const MainBannerTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      "flex mb-12 md:mb-16 lg:mb-20 text-neutral-200 deboss", // border-2 border-green-500
      className
    )}
    {...props}
  />
))
MainBannerTitle.displayName = "MainBannerTitle"

const MainBannerHeading = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "flex mb-12 md:mb-16 lg:mb-20",
      "text-transparent bg-clip-text py-2 bg-gradient-to-bl from-[var(--purple-250)] to-purple-100", // border-2 border-blue-500
      className
    )}
    {...props}
  />
))
MainBannerHeading.displayName = "MainBannerHeading"

const MainBannerDescription = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h6
    ref={ref}
    className={cn(
      "flex",
      "h7 font-medium text-center leading-[2.1rem] md:leading-[2.5rem]",
      className
    )}
    {...props}
  />
))
MainBannerDescription.displayName = "MainBannerDescription"

export { MainBanner, MainBannerTitle, MainBannerHeading, MainBannerDescription }


// Old version
/* interface FeaturesLeftCardProps extends React.HTMLAttributes<HTMLDivElement> {
  parentClassName: string;
}

const FeaturesLeftCard = React.forwardRef<
  HTMLDivElement,
  FeaturesLeftCardProps
>(({ className, parentClassName, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col items-center justify-center",
      "w-full h-full",
      parentClassName
    )}>
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-start",
        "w-[95vw] md:w-[90vw] lg:w-[75vw] h-[100vw] md:h-[100vw]",
        "max-w-[1440px] max-h-[100vh] overflow-hidden object-cover object-top pr-[50%]",
        // "bg-transparent ring-2 ring-fuchsia-900",
        className
      )}
      {...props}
    />
  </div>
))
FeaturesLeftCard.displayName = "FeaturesLeftCard" */