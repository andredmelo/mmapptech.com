import { Accordion, AccordionItem } from '@/components/ui/accordion'
import React from "react";

const items: AccordionItem[] = [
  {
    header: "Who is this platform for?",
    content:
      "Boh!?",
  },
  {
    header: "How does it work?",
    content:
      "Boh!?",
  },
  {
    header: "What is the MMAPP Methodology?",
    content:
      "Boh!?",
  },
  {
    header: "What tools are involved?",
    content:
      "Boh!?",
  },
  {
    header: "Does the public get to see the results?",
    content:
      "Boh!?",
  },
  {
    header: "What are the minimum/recommended requirements?",
    content:
      "Boh!?",
  },
  {
    header: "How do I know my information is safe?",
    content:
      "Boh!?",
  },
  {
    header: "What is the pricing?",
    content:
      "Free !!! (Federation fees still apply)",
  },
  {
    header: "How do I sign up?",
    content:
      "Boh!?",
  },
  {
    header: "How do I log in?",
    content:
      "Boh!?",
  },
  {
    header: "How do I get in touch with you?",
    content:
      "Boh!?",
  },
];

export default function FAQ() {
  return (
    <div className='container w-[95%] md:w-[95%] xl:w-[90%] pt-6 md:pt-0'>
      <Accordion items={items} />
    </div>
  )
}
