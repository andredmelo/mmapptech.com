import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";
import { clsx } from "clsx";
import React from "react";

import { CardCallToAction, CardCallToActionHeader, CardCallToActionLogo, CardCallToActionInfo, CardCallToActionCountry, CardCallToActionFederation, CardCallToActionDescription, CardCallToActionContent, CardCallToActionEmail, CardCallToActionFooter, CardCallToActionButtonEmail } from '@/components/ui/card-call-to-action'


export interface AccordionCallToActionItemContinents {
  continent: string;
}

export interface AccordionCallToActionItemCountries {
  Country: string;
  Email: string;
  Federation: string;
  Icon: string;
}

// Define a new type for the mapping from continent names to arrays of country data.
export type AccordionCallToActionCountriesData = {
  [continent: string]: AccordionCallToActionItemCountries[];
};

interface AccordionCallToActionProps { 
  ContinentsData: { continent: string }[]; 
  CountriesData: { [key: string]: { Country: string; Email: string; Federation: string; Icon: string; }[] };
}

const AccordionCallToAction = ({ ContinentsData, CountriesData }: AccordionCallToActionProps) => {
  return (
    <AccordionPrimitive.Root
      type="multiple"
      /* collapsible */
      className={clsx("space-y-4 w-full")}
    >
      {ContinentsData.map(({ continent }, i) => (
        <AccordionPrimitive.Item
          key={`continent-${i}`}
          value={`continent-${i}`}
          className={clsx(
            "rounded-xl",
            "border radix-state-closed:border-transparent", //border radix-state-closed:border-transparent radix-state-closed:hover:ring-2 radix-state-closed:hover:ring-purple-600/25
            "radix-state-open:border radix-state-open:border-neutral-500/25 w-full" // focus:outline-none 
          )}
        >
          <AccordionPrimitive.Header className="w-full h-full leading-[3rem]">
            <AccordionPrimitive.Trigger
              className={clsx(
                "group",
                "radix-state-open:rounded-t-xl radix-state-closed:rounded-xl",
                "focus:outline-none cursor-pointer",
                "inline-flex w-full items-center justify-left px-10 md:px-16 py-6 md:py-10 text-left",
                /* "bg-neutral-50 hover:bg-neutral-200",
                "dark:bg-neutral-800 hover:dark:bg-neutral-700 transition-colors" */
                "text-neutral-700 hover:text-neutral-800",
                "radix-state-open:bg-white radix-state-closed:bg-neutral-100 radix-state-closed:hover:bg-neutral-50",
                "dark:text-neutral-300 dark:hover:text-neutral-200",
                "dark:radix-state-open:bg-neutral-950 dark:radix-state-closed:bg-neutral-900 dark:radix-state-closed:hover:bg-neutral-800 transition-colors"
              )}
            >
              <PlusIcon
                className={clsx(
                  "group-radix-state-open:hidden",
                  "group-radix-state-closed:block",
                  "m-2 h-8 w-8 shrink-0 text-neutral-700 ease-in-out dark:text-neutral-400",
                  /* "group-radix-state-open:rotate-45 group-radix-state-open:duration-300",
                  "group-radix-state-closed:rotate-0 group-radix-state-closed:duration-200" */
                )}
              />
              <MinusIcon
                className={clsx(
                  "group-radix-state-open:block",
                  "group-radix-state-closed:hidden",
                  "m-2 h-8 w-8 shrink-0 text-neutral-700 ease-in-out dark:text-neutral-400",
                  /* "group-radix-state-open:rotate-45 group-radix-state-open:duration-300",
                  "group-radix-state-closed:rotate-0 group-radix-state-closed:duration-200" */
                )}
              />
              <span className={clsx("text-[1.8rem] md:text-lg text-left font-semibold pl-10",
                "group-radix-state-closed:text-neutral-700 group-radix-state-closed:hover:text-neutral-800 group-radix-state-open:text-transparent group-radix-state-open:bg-clip-text group-radix-state-open:bg-gradient-to-r group-radix-state-open:from-[var(--purple-800)] group-radix-state-open:to-purple-600",
                "dark:group-radix-state-closed:text-neutral-300 dark:group-radix-state-closed:hover:text-neutral-200 dark:group-radix-state-open:bg-gradient-to-t dark:group-radix-state-open:from-[var(--fuchsia-250)] dark:group-radix-state-open:to-fuchsia-100"
              )}>
                {continent}
              </span>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="w-full h-full rounded-b-xl border-t border-neutral-500/15 dark:border-neutral-500/25 px-4 md:px-0 pt-6 md:pt-8 pb-8 md:pb-10 bg-white dark:bg-neutral-950 transition-transform">

            <div className="flex flex-row flex-wrap justify-center">
              {CountriesData[continent]?.map(({ Country, Email, Federation, Icon }, index) => (
                <div key={`country-${index}`} className="basis-[100%] md:basis-[44%] 2xl:basis-1/4 m-2 md:m-4 lg:m-6 2xl:m-12">

                  <CardCallToAction className='' id="Privacy Policy">
                    <CardCallToActionHeader>
                      {/* <CardCallToActionLogo src={`/images/logos/federations/${Icon}`} alt={`${Country} flag`} /> */}
                      <img src={`/images/logos/federations/${Icon}`} alt={`${Country} flag`} className='object-cover max-h-[20vw] md:max-h-[8vw] pr-4 md:pr-4 lg:pr-6' />
                      <CardCallToActionInfo>
                        <CardCallToActionCountry>
                          {Country}
                        </CardCallToActionCountry>
                        <CardCallToActionFederation>
                          {Federation}
                        </CardCallToActionFederation>
                        <CardCallToActionDescription>
                          Send an Email to your Federation to request them to join MMAPP.
                        </CardCallToActionDescription>
                        {/* <CardCallToActionEmail>
                          {Email}
                        </CardCallToActionEmail> */}
                      </CardCallToActionInfo>
                    </CardCallToActionHeader>
                    <CardCallToActionFooter>
                      <CardCallToActionButtonEmail
                        href={`mailto:${Email}?subject=Request%20for%20MMAPP%20Platform&body=I%20am%20%3Cinsert%20your%20name%20here%3E%20and%20I%20am%20affiliated%20with%20you%20as%20an%20%3Cathlete%2Fcoach%2Fclub%2Fpromoter%3E.%0A%0AI%20am%20reaching%20out%20to%20you%20regarding%20MMAPP%2C%20an%20all-in-one%20solution%20I%20came%20across%2C%20designed%20to%20help%20MMA%20Federations%20manage%20their%20members%20and%20events%20with%20ease.%20This%20platform%20also%20provides%20tools%20that%20can%20assist%20in%20improving%20MMA%20officiating%2C%20including%20scorekeeping%2C%20timekeeping%2C%20and%20judging.%20I%20believe%20that%20implementing%20MMAPP%20would%20be%20highly%20beneficial%20not%20only%20to%20the%20Federation%2C%20but%20also%20to%20us%2C%20your%20members.%0A%0AYou%20can%20check%20out%20the%20many%20features%20available%20on%20their%20website%20below%3A%0Awww.mmapptech.com%0A%0ALooking%20forward%20to%20being%20able%20to%20use%20MMAPP%20with%20${Federation}.%0A%0ABest%20regards.%0A%0A%3Cinsert%20name%20here%3E`}
                        className=""
                      >
                        Click to Email now
                      </CardCallToActionButtonEmail>
                    </CardCallToActionFooter>
                  </CardCallToAction>


                  {/* <p>{Country}</p>
                  <p>{Email}</p>
                  <p>{Federation}</p>
                  <img src={`/images/logos/federations/${Icon}`} alt={`${Country} flag`} /> */}
                </div>
              ))}
            </div>
            {/* <p className="leading-[1.9rem] md:leading-[2.5rem] lg:leading-[3.2rem] font-normal text-neutral-900 dark:text-neutral-300">
            </p> */}
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
};

export { AccordionCallToAction };



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