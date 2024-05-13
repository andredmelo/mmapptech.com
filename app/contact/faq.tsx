import { AccordionFAQs, AccordionFAQsItem } from '@/components/ui/accordionFAQs'
import React from "react";
import { clsx } from "clsx";

const items: AccordionFAQsItem[] = [
  {
    header: "Who is this platform for?",
    content: [
      "MMAPP is made for every member in the sport of MMA.",
      <br key="br1" />, // Use keys for list elements
      "Whether you’re a Federation, an individual such as official, athlete or coach, or an entity like a Club or Promoter/Organizer, there are benefits in using the MMAPP Platform.",
    ],
  },
  /* {
    header: "What tools are involved?",
    content: [
      "There are three components to the MMAPP Platform:",
      <br key="br1" />, // Use keys for list elements
      "The Dashboard, which any member can access through any web browser.",
      <br key="br2" />,
      "The “Judge” app, which is designed specifically for officials to access on their mobile devices.",
      <br key="br3" />,
      "The “RecordKeeper” app, available only on Tablets, and is used by officials for scorekeeping and timekeeping purposes."
    ],
  },
  {
    header: "How does it work?",
    content: [
      "The Dashboard allows promoters to create their events and schedule their fights according to their parameters, which in turn is approved by their Federations.",
      <br key="br1" />, // Use keys for list elements
      "The Recordkeeper performs all scorekeeping and timekeeping duties on behalf of the officials, and the Judge app allows the judges to score their fights effectively using the MMAPP Methodology and communicate their scores to the RecordKeeper instantly.",
      <br key="br2" />,
      "In the end, all the event information is sent and automatically archived in the Federation.",
    ],
  },
  {
    header: "What is the MMAPP Methodology?",
    content: [
      "The MMAPP Methodology is a patented two-in-one process that standardizes the assessment of fights. It includes a tool for applying the methodology, recording the assessment, and providing insights on the evaluation. This allows judges to be more consistent in their evaluations not only between themselves but also each other, reduces fatigue allowing officials to perform better for longer, and ensures athletes their fights are being held to the highest standard, mitigating unexpected results.",
    ],
  }, */
  {
    header: "What do I need to use MMAPP?",
    content: [
      "The MMAPP Platform comprises three components:",
      <br key="br1" />, // Use keys for list elements
      "• The Dashboard, which allows any member to access their profile through any web browser",
      <br key="br2" />,
      "• The \"Judge\" app, which is exclusively designed for officials to use on their mobile devices during events to assign roles and judge fights",
      <br key="br3" />,
      "• The \"RecordKeeper\" app, which is only available on tablets and is used by officials for scorekeeping and timekeeping purposes."
    ],
  },
  {
    header: "Does the public get to see the results?",
    content: [
      "MMAPP is an internal tool for Federations. Ultimately, it is up to the respective Federation to decide to share the results.",
    ],
  },
  {
    header: "What are the minimum/recommended requirements?",
    content: [
      "You can find the Minimum and Recommended requirements for each device type ",
      <a href="/company/policies/minimum-recommended-requirements" className="link-hover">at the following link</a>,
      ".",
    ],
  },
  {
    header: "How do I know my information is safe?",
    content: [
      "MMAPP adheres to the strictest privacy policies and performs regular security checks to make sure that all information within the platform is secure.",
      <br key="br1" />, // Use keys for list elements
      "You can read more about this topic in our ",
      <a href="/company#Policies" className="link-hover">Policies</a>,
      " Section",
    ],
  },
  {
    header: "Why is there no pricing on your website?",
    content: [
      "We assess every potential customer on a case-by-case basis, taking into account their circumstances, such as the sport's status within their country, the number of members, and the number of events per year, among others, so that we can offer valuable solutions every time.",
      <br key="br1" />, // Use keys for list elements
      "Having said that, our platform is free for members, once their Federation has enrolled in the MMAPP Platform.",
    ],
  },
  {
    header: "How do I sign up?",
    content: [
      "You can sign up by using your Federation’s registration forms.",
      <br key="br1" />, // Use keys for list elements
      "If your Federation hasn’t signed up for MMAPP yet, use the above 'Request that your Federation join MMAPP' button to let them know you’d like them to.",
    ],
  },
  {
    header: "How do I log in?",
    content: [
      "Once you have successfully registered on our Platform, you can Log In by pressing the button on the top right.",
    ],
  },
  {
    header: "How do I get in touch with you?",
    content: [
      "Above, you have a form for the different occasions you may want to contact us.",
      <br key="br1" />, // Use keys for list elements
      "By using the correct one, you are ensuring your message is directed to the most appropriate person.",
    ],
  },
  {
    header: "I want to report a bug/submit feedback for the platform. How can I do that?",
    content: [
      "If you’d like to reach our support team about the MMAPP Platform, once logged in to your account you can submit a ticket through our feedback form, or you can click the “Submit Feedback” found on the top right.",
    ],
  },
];

export default function FAQ(props: any) {
  return (
    <div className={clsx(
      'w-[98%] md:w-[95%] xl:w-[90%] max-w-[1536px] mx-auto px-2 md:px-[4.5vw]',
      props.className
      )}
    >
      <AccordionFAQs items={items} />
    </div>
  )
}
