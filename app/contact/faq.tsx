import { Accordion, AccordionItem } from '@/components/ui/accordion'
import React from "react";

const items: AccordionItem[] = [
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
];

export default function FAQ() {
  return (
    <div className='container w-[95%] md:w-[95%] xl:w-[90%] pt-6 md:pt-0'>
      <Accordion items={items} />
    </div>
  )
}
