import * as React from "react"

import { cn } from "@/lib/utils"

interface FeaturesJudgeCardProps extends React.HTMLAttributes<HTMLDivElement> {
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
        /* "bg-transparent ring-2 ring-fuchsia-900", */
        className
      )}
      {...props}
    />
  </div>
))
FeaturesJudgeCard.displayName = "FeaturesJudgeCard"

export { FeaturesJudgeCard }
