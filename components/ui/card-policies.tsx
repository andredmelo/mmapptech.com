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
      "flex flex-col h-full min-h-[17rem] md:min-h-[24rem] w-[30rem] md:w-[32rem] lg:w-[40rem] rounded-2xl md:rounded-3xl bg-white text-neutral-950 shadow-2xl dark:bg-neutral-800 dark:text-neutral-50 shadow-inset",
      /* mx-1 border border-neutral-100 dark:border-fuchsia-800 */
      "p-8 md:p-12 lg:p-16 mx-2 md:mx-2 lg:mx-4 my-2 md:my-2 lg:my-4",
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
    className={cn("leading-6 text-white text-shadow shadow-[rgba(0,0,0,0.35)]", className)}
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
    className={cn("font-medium md:font-normal leading-[2.1rem] md:leading-[2.5rem] text-neutral-700 dark:text-neutral-300", className)}
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
    className={cn("text-md w-full py-2 px-4 border focus:ring-2 rounded-full border-transparent bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent mt-auto", className)}
    {...props}
  />
))
CardPoliciesButton.displayName = "CardPoliciesButton"


export { CardPolicies, CardPoliciesHeader, CardPoliciesTitle, CardPoliciesDescription, CardPoliciesButton }
