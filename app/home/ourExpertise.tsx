import { AccordionOurExpertise, AccordionOurExpertiseItem } from '@/components/ui/accordionOurExpertise'
import React from "react";
import { clsx } from "clsx";

const items: AccordionOurExpertiseItem[] = [
  {
    header: "Management, Scheduling, Officiation",
    content: [
      "Our platform solves all issues Federations face in membership approval and management as well as event scheduling and approval.",
      <br key="br1" />, // Use keys for list elements
      "On the officiation side, we offer an unparalleled electronic scoring system that encompasses every aspect of the job, from judging fights to Record Keeping (Timekeeping + Scorekeeping).",
    ],
  },
  {
    header: "Common Language & Unit of Measurement",
    content: [
      "Our aim is to revolutionize MMA Judging by providing officials with a common language and unit of measurement.",
      <br key="br1" />, // Use keys for list elements
      "By providing these stepping stones, we can increase precision in discussion and debate the sport in a deeper manner, leading to game-changing improvements.",
    ],
  },
  {
    header: "The “Dashboard” app",
    content: [
      "Easy & Quick sign up for members, with minimal input from Federations.",
      <br key="br1" />, // Use keys for list elements
      "Manage Members and Events with a few clicks.",
      <br key="br2" />,
      "Gain insights into your officials performances.",
    ],
  },
  {
    header: "The “Judge” app",
    content: [
      "Make more informed decisions for longer, with MMAPP’s patented methodology.",
      <br key="br1" />, // Use keys for list elements
      "Discuss scoring in a deeper manner.",
      <br key="br2" />,
      "Lifetime archive of your scoring.",
      <br key="br3" />,
      "Contribute to the improvement of MMA Judging.",
    ],
  },
  {
    header: "The “RecordKeeper” app",
    content: [
      "All Timing duties done automatically.",
      <br key="br1" />, // Use keys for list elements
      "Receive and calculate scores instantly.",
      <br key="br2" />,
      "Record fight events like never before.",
    ],
  },
];

export default function OurExpertise(props: any) {
  return (
    <div className={clsx(
      'px-2',
      props.className
      )}
    >
      <AccordionOurExpertise items={items} />
      <div className="mmappBlockReveal flex justify-center w-full">
        <p className="flex items-end text-[1.4rem] text-neutral-200 text-center pt-12 pb-4 max-w-[28rem] ">
          <span className="pr-4 bounce-arrow" aria-hidden="true">↓</span>
            Learn more about their features and benefits below
          <span className="pl-4 bounce-arrow" aria-hidden="true">↓</span>
        </p>
      </div>
    </div>
  )
}
