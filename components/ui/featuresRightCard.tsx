import * as React from "react"

import { cn } from "@/lib/utils"

const FeaturesRightCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col items-center justify-center",
      "w-full h-full", // border-2 border-fuchsia-600
      className
    )}
    {...props}
  />
))
FeaturesRightCard.displayName = "FeaturesRightCard"

const FeaturesRightCardHeader = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col landscape:items-end portrait:items-center landscape:justify-center portrait:justify-start landscape:text-right portrait:text-center", // border-2 border-green-500
      "w-[95vw] md:w-[90vw] lg:w-full max-w-[1440px] max-h-[100vh] h-[100vh]",
      "overflow-hidden portrait:pt-[48%] portrait:md:pt-[32%] landscape:px-[0%] portrait:px-[2%] landscape:pl-[50%] portrait:pl-[0%]",
      className
    )}
    {...props}
  />
))
FeaturesRightCardHeader.displayName = "FeaturesRightCardHeader"

const FeaturesRightCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn(
      "", // border-2 border-green-500
      className
    )}
    {...props}
  />
))
FeaturesRightCardTitle.displayName = "FeaturesRightCardTitle"

const FeaturesRightCardDescription = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h6
    ref={ref}
    className={cn("font-medium md:font-normal leading-[2rem] md:leading-[2rem] lg:leading-[3rem] text-neutral-700 dark:text-neutral-300 pt-8 md:pt-8 lg:pt-10 portrait:px-[1%] portrait:md:px-[5%] text-shadow-sm", className)}
    {...props}
  />
))
FeaturesRightCardDescription.displayName = "FeaturesRightCardDescription"

export { FeaturesRightCard, FeaturesRightCardHeader, FeaturesRightCardTitle, FeaturesRightCardDescription }


// Old version
/* interface FeaturesJudgeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  parentClassName: string;
}

const FeaturesJudgeCard = React.forwardRef<
  HTMLDivElement,
  FeaturesJudgeCardProps
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
FeaturesJudgeCard.displayName = "FeaturesJudgeCard" */