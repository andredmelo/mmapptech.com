import * as React from "react"

import { cn } from "@/lib/utils"

const ProductFC = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col relative justify-center",
      "h-full mx-[1.5vw] md:mx-[5.6vw]",
      "",
      "rounded-[3rem] bg-no-repeat ", // border-2 border-fuchsia-600
      className
    )}
    {...props}
  />
))
ProductFC.displayName = "ProductFC"

const ProductFCTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      "flex flex-col justify-center z-20",
      "mb-[3.5vw] md:mb-[3.5vw]", // border-2 border-green-500,
      "text-md md:text-[2.175vw] portrait:touch:text-[5vw] portrait:touch:md:text-[3.15vw] text-neutral-200 deboss text-center",
      className
    )}
    {...props}
  />
))
ProductFCTitle.displayName = "ProductFCTitle"

const ProductFCHeading = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "flex flex-col justify-center z-20",
      "mb-[3.5vw] md:mb-[3.5vw] py-2",
      "text-xl md:text-[4.35vw] portrait:touch:text-[7.5vw] portrait:touch:md:text-[6.75vw] text-center text-transparent bg-clip-text bg-gradient-to-bl from-[var(--purple-250)] to-purple-100", // border-2 border-blue-500
      className
    )}
    {...props}
  />
))
ProductFCHeading.displayName = "ProductFCHeading"

const ProductFCDescription = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h6
    ref={ref}
    className={cn(
      "flex flex-col justify-center z-20",
      "text-center font-medium text-[1.5rem] md:text-[1.33vw] portrait:touch:text-[3.5vw] portrait:touch:md:text-[2vw] leading-[2.1rem] md:leading-[1.75vw] portrait:touch:leading-[4.75vw] portrait:touch:md:leading-[2.8vw]",
      className
    )}
    {...props}
  />
))
ProductFCDescription.displayName = "ProductFCDescription"

export { ProductFC, ProductFCTitle, ProductFCHeading, ProductFCDescription }


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