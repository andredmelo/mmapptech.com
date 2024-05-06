import * as React from "react"

import { cn } from "@/lib/utils"

interface CardCallToActionLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string; // Add the src property as optional
  alt?: string; // Add the alt property as optional
}

interface CardCallToActionButtonEmailProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  url?: string; // Add the url property as optional
}

const CardCallToAction = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col justify-between w-full h-full min-w-[25vw] rounded-2xl md:rounded-3xl bg-white text-neutral-950 shadow-2xl dark:bg-neutral-900 dark:text-neutral-50 shadow-inset",
      /* mx-1 border border-neutral-100 dark:border-fuchsia-800 */
      "p-8 md:p-12 lg:p-16",
      className
    )}
    {...props}
  />
))
CardCallToAction.displayName = "CardCallToAction"

const CardCallToActionHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-row", className)}
    {...props}
  />
))
CardCallToActionHeader.displayName = "CardCallToActionHeader"

const CardCallToActionLogo = React.forwardRef<
  HTMLImageElement,
  CardCallToActionLogoProps
>(({ className, src, alt, ...props }, ref) => (
  <picture><img
    ref={ref}
    src={src}
    alt={alt}
    className={cn("object-contain max-w-[100px] max-h-[100px]", className)}
    {...props}
  /></picture>
))
CardCallToActionLogo.displayName = "CardCallToActionLogo"

const CardCallToActionInfo = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col min-w-[12vw] space-y-4 md:space-y-6", className)}
    {...props}
  />
))
CardCallToActionInfo.displayName = "CardCallToActionInfo"

const CardCallToActionCountry = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("text-white text-shadow text-shadow-[rgba(0,0,0,0.15)] dark:text-shadow-[rgba(255,255,255,0.15)]", className)}
    {...props}
  />
))
CardCallToActionCountry.displayName = "CardCallToActionCountry"

const CardCallToActionFederation = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h6
    ref={ref}
    className={cn("h7 text-white text-shadow text-shadow-[rgba(0,0,0,0.15)] dark:text-shadow-[rgba(255,255,255,0.15)]", className)}
    {...props}
  />
))
CardCallToActionFederation.displayName = "CardCallToActionFederation"

const CardCallToActionDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("smallP text-neutral-700 dark:text-neutral-300 leading-snug", className)}
    {...props}
  />
))
CardCallToActionDescription.displayName = "CardCallToActionDescription"

const CardCallToActionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("px-10 md:px-15 xl:px-20 pb-6 md:pb-6 xl:pb-6 pt-0", className)} {...props} />
))
CardCallToActionContent.displayName = "CardCallToActionContent"

const CardCallToActionEmail = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "w-fit",
      "text-sm md:text-sm lg:text-md cursor-pointer",
      "dark:text-white dark:hover:text-blue-500",
      "text-black hover:text-blue-500",
      className
      )}
    {...props}
  />
))
CardCallToActionEmail.displayName = "CardCallToActionEmail"

const CardCallToActionFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center justify-center pt-3 md:pt-6",
      className
    )}
    {...props}
  />
))
CardCallToActionFooter.displayName = "CardCallToActionFooter"

const CardCallToActionButtonEmail = React.forwardRef<
  HTMLAnchorElement,
  CardCallToActionButtonEmailProps
>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={cn("py-3 px-20 w-fit",
    "text-sm md:text-sm lg:text-md cursor-pointer",
    "text-white hover:text-black hover:bg-neutral-100 bg-neutral-700",
    "dark:bg-white dark:hover:bg-neutral-700 dark:text-black dark:hover:text-white",
    "rounded-full", // border-solid border-2 border-purple-600 border-opacity-50 hover:border-transparent
    "hover:ring-2 ring-purple-600 ring-opacity-100", className)}
    {...props}
  />
))
CardCallToActionButtonEmail.displayName = "CardCallToActionButtonEmail"



const CardCallToActionButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, disabled, ...props }, ref) => (
  <button
    ref={ref}
    disabled={disabled}
    className={cn("py-4 md:py-5 px-12 md:px-16 lg:px-20 w-fit",
    "text-[1.4rem] md:text-md lg:text-[2rem] cursor-pointer font-semibold",
    "text-white hover:text-black hover:bg-neutral-100 bg-neutral-700",
    "dark:bg-white dark:hover:bg-neutral-900 dark:text-black dark:hover:text-white",
    "rounded-full", // border-solid border-2 border-purple-600 border-opacity-50 hover:border-transparent
    "ring-1 ring-offset-4 ring-offset-[var(--background-grey)] hover:ring-2 hover:ring-offset-0 ring-purple-600 ring-opacity-100", className)}
    {...props}
  />
))
CardCallToActionButton.displayName = "CardCallToActionButton"

export { CardCallToAction, CardCallToActionHeader, CardCallToActionLogo, CardCallToActionInfo, CardCallToActionCountry, CardCallToActionFederation, CardCallToActionDescription, CardCallToActionContent, CardCallToActionEmail, CardCallToActionFooter, CardCallToActionButtonEmail, CardCallToActionButton }

