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
        "flex flex-col h-full rounded-xl md:rounded-xl md:mx-0 text-neutral-950 dark:text-neutral-50",
        /*  bg-white dark:bg-gradient-to-r from-[var(--primary-fuchsia-dark4)] to-[var(--background-grey)] to-85% */
        "bg-no-repeat bg-left bg-cover bg-bgRadialGradientUp md:bg-bgRadialGradientRight",
        /* mx-1 border border-neutral-100 dark:border-fuchsia-800 */
        "p-8 md:p-10 lg:p-12 space-y-8 md:space-y-10 lg:space-y-12 justify-between",
        { ...props, ref }
      )}
      {...props}
    />
  );
});
CardBenefits.displayName = "CardBenefits"

const CardBenefitsHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-3 md:space-y-6", "rounded-2xl md:rounded-2xl bg-white text-neutral-950 shadow-xl dark:bg-[var(--background-grey-50)] dark:text-neutral-50 shadow-inset-right p-8 md:p-10 lg:p-12", className)}
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
