import * as React from "react"
import { cn } from "@/lib/utils"

const CardBenefits = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-row flex-wrap h-full rounded-2xl md:rounded-3xl md:mx-0 text-neutral-50",
        //"flex flex-col h-full rounded-2xl md:rounded-3xl md:mx-0 text-neutral-50",
        "bg-no-repeat bg-left bg-cover bg-bgRadialGradientDarkUp md:bg-bgRadialGradientDarkRight",
        //mx-1 border border-neutral-100 dark:border-fuchsia-800
        "pl-8 md:pl-10 lg:pl-12 py-8 md:py-10 lg:py-12 gap-y-8 md:gap-y-10 lg:gap-y-12 justify-center",// p-8 md:p-10  space-y-8 md:space-y-10 lg:space-y-12 lg:pl-12     // lg:p-10 lg:space-y-10 lg:pt-12
        { ...props, ref }
      )}
      {...props}
    />
  );
});
CardBenefits.displayName = "CardBenefits"

const CardBenefitsHeaderWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "basis-[100%] landscape:lg:basis-1/2", //
      "pr-8 md:pr-10 landscape:lg:pr-12", // lg:pb-12 
      className
    )}
    {...props}
  />
))
CardBenefitsHeaderWrapper.displayName = "CardBenefitsHeaderWrapper"

const CardBenefitsHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col space-y-3 md:space-y-0 p-8 md:p-8 lg:p-10 h-full", //
      //"flex flex-col space-y-3 md:space-y-0 p-8 md:p-8 lg:p-10",
      "rounded-2xl md:rounded-2xl shadow-xl",
      "bg-white bg-opacity-[0.0125] text-neutral-50",
      "shadow-inset",
      className
    )}
    {...props}
  />
))
CardBenefitsHeader.displayName = "CardBenefitsHeader"

const CardBenefitsTitleWrapper = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-row w-fit items-center justify-start",
      "pb-6 md:pb-5 border-b border-white/10",
      className
    )}
    {...props}
  />
))
CardBenefitsTitleWrapper.displayName = "CardBenefitsTitleWrapper"

const CardBenefitsTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h6
    ref={ref}
    className={cn(
      "h7 text-shadow text-shadow-[rgba(0,0,0,0.35)] leading-none tracking-wide",
      className
    )}
    {...props}
  />
))
CardBenefitsTitle.displayName = "CardBenefitsTitle"

const CardBenefitsDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "font-medium md:font-normal leading-[2rem] md:leading-[2rem] lg:leading-[3rem]",
      "text-neutral-300 pt-2 md:pt-4 lg:pt-4",
      "",
      className
    )}
    {...props}
  />
))
CardBenefitsDescription.displayName = "CardBenefitsDescription"


export { CardBenefits, CardBenefitsHeaderWrapper, CardBenefitsHeader, CardBenefitsTitleWrapper, CardBenefitsTitle, CardBenefitsDescription }
