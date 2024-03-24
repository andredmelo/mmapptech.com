import * as React from "react"

import { cn } from "@/lib/utils"

interface FeaturesRecordKeeperCardProps extends React.HTMLAttributes<HTMLDivElement> {
  parentClassName: string;
}

const FeaturesRecordKeeperCard = React.forwardRef<
  HTMLDivElement,
  FeaturesRecordKeeperCardProps
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
        "flex items-center justify-end",
        "w-[95vw] md:w-[90vw] lg:w-[75vw] h-[67.5vw] md:h-[53.3vw]",
        "max-w-[1440px] max-h-[50vh] overflow-hidden object-cover object-top pl-[35%]",
        /* "bg-transparent ring-2 ring-fuchsia-900", */
        className
      )}
      {...props}
    />
  </div>
))
FeaturesRecordKeeperCard.displayName = "FeaturesRecordKeeperCard"

export { FeaturesRecordKeeperCard }
