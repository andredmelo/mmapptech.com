import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { clsx } from "clsx";
import React from "react";

export interface AccordionItem {
  header: string;
  content: string;
}

/* const items: AccordionItem[] = [
  {
    header: "Where do I go to setup an account?",
    content:
      "The account setup can be completed by going to this link. You can also reach this page by clicking Customer Login in the top right of our webpage. Then click login, followed by New User under the login area.",
  },
  {
    header: "Is the Mobile App secure?",
    content:
      "Yes! All critical information is encrypted in every transaction run through the Apps and the Mobile Web App, and no personal information is stored on your mobile device. However, mobile devices do offer you the ability to store your login information for apps installed on the device. If you choose to store your login information, any person who has access to your mobile device can access your account.",
  },
  {
    header: "How current is the account information I see in the Mobile App?",
    content: "The information you see in the Mobile App and in the Mobile Web App is shown in real-time, so it's always accurate. However, if you keep your Mobile App or Mobile Web App open for an extended period of time, you should refresh the page by selecting a new option in order to ensure the information is still current.",
  },
  {
    header: "How do I get the Mobile App for my phone?",
    content: "Simply look for our name in the App Store or in the Android Market. In the Android Market, if you can't find our App, that likely means your phone is not supported - see the list of supported operating systems.",
  },
  {
    header: "How do I find your offices and payment locations?",
    content: "You do not have to log in to view addresses or maps to our office locations or even to get our contact information. Simply open the App and use the link at the bottom of the login screen.",
  },
]; */

interface AccordionProps { items: AccordionItem[]; }

const Accordion = (props: AccordionProps) => {
  return (
    <AccordionPrimitive.Root
      type="single"
      defaultValue="item-1"
      className={clsx("space-y-4 w-full")}
    >
      {props.items.map(({ header, content }, i) => (
        <AccordionPrimitive.Item
          key={`header-${i}`}
          value={`item-${i + 1}`}
          className="rounded-xl focus-within:ring focus-within:ring-fuchsia-700 focus-within:ring-opacity-75 focus:outline-none w-full"
        >
          <AccordionPrimitive.Header className="w-full h-full leading-[0.5]">
            <AccordionPrimitive.Trigger
              className={clsx(
                "group",
                "radix-state-open:rounded-t-xl radix-state-closed:rounded-xl",
                "focus:outline-none",
                "inline-flex w-full items-center justify-between px-10 md:px-16 py-7 md:py-12 text-left bg-white dark:bg-neutral-800"
              )}
            >
              <span className="text-lg md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                {header}
              </span>
              <ChevronDownIcon
                className={clsx(
                  "ml-2 h-8 w-8 shrink-0 text-neutral-700 ease-in-out dark:text-neutral-400",
                  "group-radix-state-open:rotate-180 group-radix-state-open:duration-300"
                )}
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="w-full h-full rounded-b-xl px-10 md:px-16 pt-6 md:pt-8 pb-7 md:pb-12 bg-neutral-100 dark:bg-[#181818]">
            <div className="text-[2rem] md:text-[1.8rem] text-neutral-900 dark:text-neutral-300">
              {content}
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
};

export { Accordion };
