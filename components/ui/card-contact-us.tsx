import * as React from "react"

import { cn } from "@/lib/utils"

const CardContactUs = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border border-neutral-200 bg-white text-neutral-950 shadow dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
      className
    )}
    {...props}
  />
))
CardContactUs.displayName = "CardContactUs"

const CardContactUsHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1 px-10 md:px-15 xl:px-20 py-10 md:py-12 xl:py-16", className)}
    {...props}
  />
))
CardContactUsHeader.displayName = "CardContactUsHeader"

const CardContactUsTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn("text-xl md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.5rem] font-semibold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[var(--purple-400)] to-purple-900 dark:bg-gradient-to-br dark:from-[var(--purple-350)] dark:to-purple-100", className)}
    {...props}
  />
))
CardContactUsTitle.displayName = "CardContactUsTitle"

const CardContactUsDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("font-medium leading-snug text-neutral-500 dark:text-neutral-300 py-10", className)}
    {...props}
  />
))
CardContactUsDescription.displayName = "CardContactUsDescription"

const CardContactUsContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("px-10 md:px-15 xl:px-20 pb-6 md:pb-6 xl:pb-6 pt-0", className)} {...props} />
))
CardContactUsContent.displayName = "CardContactUsContent"

const CardContactUsButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, disabled, ...props }, ref) => (
  <button
    ref={ref}
    disabled={disabled}
    className={cn("p-3 w-[20%]",
    "text-sm md:text-sm lg:text-md",
    "text-white hover:text-black hover:bg-neutral-100 bg-neutral-700",
    "dark:bg-white dark:hover:bg-neutral-700 dark:text-black dark:hover:text-white",
    "rounded-full", // border-solid border-2 border-purple-600 border-opacity-50 hover:border-transparent
    "hover:ring-1 ring-purple-600 ring-opacity-100", className)}
    {...props}
  />
))
CardContactUsButton.displayName = "CardContactUsButton"

const CardContactUsFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-0", className)}
    {...props}
  />
))
CardContactUsFooter.displayName = "CardContactUsFooter"

export { CardContactUs, CardContactUsHeader, CardContactUsTitle, CardContactUsDescription, CardContactUsContent, CardContactUsButton, CardContactUsFooter }