import * as React from "react"

import { cn } from "@/lib/utils"

const FeaturesDashboardCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center justify-center",
      "w-full h-full",
      "pb-[35vh] last:pb-0",
    )}>
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center",
        "w-[95vw] md:w-[75vw] h-[67.5vw] md:h-[53.3vw]",
        "max-w-[1440px] max-h-[1024px] overflow-hidden",
        "bg-transparent ring-2 ring-fuchsia-900",
        className
      )}
      {...props}
    />
  </div>
))
FeaturesDashboardCard.displayName = "FeaturesDashboardCard"

export { FeaturesDashboardCard }
