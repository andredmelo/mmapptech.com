import * as React from "react"
import { cn } from "@/lib/utils"

const CardBenefits = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col h-full rounded-xl md:rounded-xl md:mx-0 bg-white text-neutral-950 shadow-2xl  dark:text-neutral-50 dark:bg-gradient-to-r from-[var(--primary-fuchsia-dark5)] to-[var(--primary-fuchsia-dark4)]",
      /* mx-1 border border-neutral-100 dark:border-fuchsia-800 */
      "p-10 md:p-20 lg:p-28 space-y-8 md:space-y-12 lg:space-y-16 justify-between",
      className
    )}
    {...props}
  />
))
CardBenefits.displayName = "CardBenefits"

const CardBenefitsHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-3 md:space-y-6", className)}
    {...props}
  />
))
CardBenefitsHeader.displayName = "CardBenefitsHeader"

const CardBenefitsTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight text-shadow shadow-[rgba(0,0,0,0.35)]", className)}
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
    className={cn("font-medium md:font-normal leading-[2rem] md:leading-[2rem] lg:leading-[3rem] text-neutral-700 dark:text-neutral-300", className)}
    {...props}
  />
))
CardBenefitsDescription.displayName = "CardBenefitsDescription"


export { CardBenefits, CardBenefitsHeader, CardBenefitsTitle, CardBenefitsDescription }
