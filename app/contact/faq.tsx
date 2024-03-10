import { Accordion } from '@/components/ui/accordion'
import React from "react";

interface AccordionItem {
  header: string;
  content: string;
}

const items: AccordionItem[] = [
  {
    header: "What is Radix UI?",
    content:
      "Radix Primitives is a low-level UI component library with a focus on accessibility, customization and developer experience. You can use these components either as the base layer of your design system, or adopt them incrementally.",
  },
  {
    header: "Why are goats so popular at Vercel",
    content:
      "Goats are popular at Vercel for a few reasons. First, they provide a healthier and more sustainable solution for grass cutting and vegetation control. Additionally, goats are able to traverse very steep terrain. This makes them perfect for providing maintenance in areas that are difficult to access. Finally, their presence is said to provide a calming atmosphere, which is especially beneficial in stressful engineering environments.",
  },
  {
    header: "Is it accessible?",
    content: "Yes!",
  },
];

export default function FAQ() {
  return (
    <Accordion items={items} />
  )
}
