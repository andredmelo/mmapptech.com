import * as React from "react"
import { cn } from "@/lib/utils"

interface CardPoliciesButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  url?: string; // Add the url property as optional
}

const CardPolicies = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col h-full min-h-[32rem] md:min-h-[35rem] xl:min-h-[40rem] w-[32rem] md:w-[32rem] lg:w-[40rem] rounded-2xl md:rounded-3xl bg-white text-neutral-950 shadow-2xl dark:bg-neutral-900 dark:text-neutral-50 shadow-inset",
      /* mx-1 border border-neutral-100 dark:border-fuchsia-800 */
      "p-8 md:p-12 lg:p-16 mx-2 md:mx-4 lg:mx-6 my-3 md:my-4 lg:my-6",
      className
    )}
    {...props}
  />
))
CardPolicies.displayName = "CardPolicies"

const CardPoliciesHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-3 md:space-y-6", className)}
    {...props}
  />
))
CardPoliciesHeader.displayName = "CardPoliciesHeader"

const CardPoliciesTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h6
    ref={ref}
    className={cn("text-white text-shadow shadow-[rgba(0,0,0,0.15)] dark:shadow-[rgba(255,255,255,0.15)]", className)}
    {...props}
  />
))
CardPoliciesTitle.displayName = "CardPoliciesTitle"

const CardPoliciesDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("smallP text-neutral-700 dark:text-neutral-300", className)}
    {...props}
  />
))
CardPoliciesDescription.displayName = "CardPoliciesDescription"

const CardPoliciesButton = React.forwardRef<
  HTMLAnchorElement,
  CardPoliciesButtonProps
>(({ className, /* url, */ ...props }, ref) => (
  <a
    ref={ref}
    /* href={url} */
    className={cn("text-md w-full py-2 px-4 border focus:ring-2 rounded-full border-transparent dark:bg-white dark:hover:bg-neutral-700 dark:text-black dark:hover:text-white hover:bg-neutral-100 bg-neutral-700 text-white hover:text-black duration-200 focus:ring-offset-2 focus:ring-white inline-flex items-center justify-center ring-1 ring-transparent mt-auto", className)}
    {...props}
  />
  /*  */
))
CardPoliciesButton.displayName = "CardPoliciesButton"


export { CardPolicies, CardPoliciesHeader, CardPoliciesTitle, CardPoliciesDescription, CardPoliciesButton }
