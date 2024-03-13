import * as React from "react"

import { cn } from "@/lib/utils"

interface FeaturesDashboardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  parentClassName: string;
}

const FeaturesDashboardCard = React.forwardRef<
  HTMLDivElement,
  FeaturesDashboardCardProps
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
        "w-[95vw] md:w-[90vw] lg:w-[75vw] h-[67.5vw] md:h-[53.3vw]",
        "max-w-[1440px] max-h-[70vh] overflow-hidden object-cover object-top",
        "border-solid border-[10px] md:border-[20px] lg:border-[30px] borderImage shadow-2xl",
        /* "bg-transparent ring-2 ring-fuchsia-900", */
        className
      )}
      {...props}
    />
  </div>
))
FeaturesDashboardCard.displayName = "FeaturesDashboardCard"

export { FeaturesDashboardCard }
