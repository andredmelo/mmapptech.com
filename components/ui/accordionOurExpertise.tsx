import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { cn } from '@/lib/utils'
import React from "react";

export interface AccordionOurExpertiseItem {
  header: string;
  content: React.ReactNode[]; // Use React.ReactNode for flexible content
}

interface AccordionProps { items: AccordionOurExpertiseItem[]; }

const AccordionOurExpertise = (props: AccordionProps) => {
  return (
    <AccordionPrimitive.Root
      type="multiple"
      defaultValue={["item-1", "item-2"]}
      //collapsible={true}
      className={cn("space-y-4 w-full")}
    >
      {props.items.map(({ header, content }, i) => (
        <AccordionPrimitive.Item
          key={`header-${i}`}
          value={`item-${i + 1}`}
          className="w-full pb-6"
        >
          <AccordionPrimitive.Header className="w-full h-full leading-[2rem]">
            <AccordionPrimitive.Trigger
              className={cn(
                "group",
                //"radix-state-open:rounded-t-xl radix-state-closed:rounded-xl",
                "focus:outline-none",
                "inline-flex w-full items-center justify-between text-left",
                /* "bg-neutral-50 hover:bg-neutral-200",
                "dark:bg-neutral-800 hover:dark:bg-neutral-700 transition-colors" */
                //"radix-state-open:bg-white radix-state-closed:bg-neutral-200 radix-state-closed:hover:bg-neutral-100",
                //"dark:radix-state-open:bg-[var(--purple-1200)] dark:radix-state-closed:bg-neutral-800 dark:radix-state-closed:hover:bg-neutral-700 transition-colors"
              )}
            >
              <span className={cn(
                "text-[2rem] py-[0.25rem]",
                "group-radix-state-closed:text-neutral-100 group-radix-state-open:text-transparent group-radix-state-open:bg-clip-text  group-radix-state-open:bg-gradient-to-t group-radix-state-open:from-[var(--fuchsia-250)] group-radix-state-open:to-fuchsia-100",
                /* "group-radix-state-closed:text-neutral-100 group-radix-state-open:text-transparent group-radix-state-open:bg-clip-text group-radix-state-open:bg-gradient-to-t group-radix-state-open:from-[var(--fuchsia-250)] group-radix-state-open:to-fuchsia-100 ",
                "dark:group-radix-state-open:bg-gradient-to-t dark:group-radix-state-open:from-[var(--fuchsia-250)] dark:group-radix-state-open:to-fuchsia-100" */
              )}
            > {/* // font-semibold  */}
                {header}
              </span>
              <ChevronDownIcon
                className={cn(
                  "ml-2 h-8 w-8 shrink-0  ease-in-out text-neutral-400", //text-neutral-700
                  "group-radix-state-open:rotate-180 group-radix-state-open:duration-300",
                  "group-radix-state-closed:rotate-0 group-radix-state-closed:duration-200"
                )}
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="w-full h-full pt-[0.75rem] transition-transform">
            <p className="leading-[1.9rem] font-normal text-white">
              {content}
            </p>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
};

export { AccordionOurExpertise };



// Reference of the item to be used in the Accordion
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