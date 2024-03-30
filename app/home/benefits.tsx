'use client'
import { useState, useTransition } from 'react'
import TabButtonBenefits from '@/components/ui/tab-button-benefits'

import { BenefitsItem, BenefitsAthletes, BenefitsCoaches, BenefitsClubs, BenefitsPromoters } from '@/app/home/benefitsFC';

import { IconTablerMinimize, IconTablerUniverse } from '@/components/ui/svg/benefitsSVGs';


const athletesItems: BenefitsItem[] = [
  {
    header:
      "Guarantees high-standard officials",
    content: [
      "With a standardised methodology and an electronic scoring system, MMAPP allows for higher-quality officiating with less effort, ensuring a fair result wherever you are."
    ],
    svg: <IconTablerMinimize />
  },
  {
    header:
      "Minimizes unexpected decisions",
    content: [
      "With our Judge and RecordKeeper tools, Scores are more consistent, and calculations are done instantly, mitigating user errors and conscious and unconscious bias(es)."
    ],
    svg: <IconTablerMinimize />
  },
  {
    header:
      "Consistency & Transparency",
    content: [
      "Our standardized methodology provides judges with equal, easy-to-access tools to learn, discuss, and find consensus, increasing consistency and transparency around the world, no matter where you fight."
    ],
    svg: <IconTablerMinimize />
  },
  {
    header:
      "Athlete Profile",
    content: [
      "Sign up only once, and simply keep your profile documents up to date (with reminders of their expiration date) to remain affiliated with your Federation."
    ],
    svg: <IconTablerMinimize />
  },
  {
    header:
      "Get featured to Promoters",
    content: [
      "When registered to your Federation, you are automatically added to the country’s roster, at the disposal of all national promoters."
    ],
    svg: <IconTablerMinimize />
  },
  {
    header:
      "Free",
    content: [
      "Our platform is 100% free to use for athletes (Federation fees still apply).",
      <br key="br1" />, // Use keys for list elements
      "Lifetime archive of career/ view past and scheduled fights.",
      <br key="br2" />,
      "Access profile anytime, anywhere."
    ],
    svg: <IconTablerMinimize />
  },
];

const coachesItems: BenefitsItem[] = [
  {
    header:
      "Coach Profile",
    content: [
      "Easily keep your profile always up-to-date, with reminders of expiration dates for documents."
    ],
    svg: <IconTablerMinimize />
  },
  {
    header:
      "Manage multiple athletes associated with you",
    content: [
      "Change Federation Information, Upload documents and much more on behalf of your associated athletes, ensuring they’re always eligible for competition."
    ],
    svg: <IconTablerMinimize />
  },
  {
    header:
      "Make your athletes instantly available to national promoters",
    content: [
      "When registered to the Federation, your athletes are automatically added to the country’s roster, at the disposal of all national promoters."
    ],
    svg: <IconTablerMinimize />
  },
  {
    header:
      "Consistency & Transparency",
    content: [
      "Our standardized methodology provides judges with equal, easy-to-access tools to learn, discuss, and find consensus, increasing consistency and transparency worldwide, no matter where your athletes fight."
    ],
    svg: <IconTablerMinimize />
  },
  {
    header:
      "Free",
    content: [
      "Our platform is 100% free to use for coaches (Federation fees still apply)."
    ],
    svg: <IconTablerMinimize />
  },
];

const clubsItems: BenefitsItem[] = [
  {
    header:
      "Manage multiple athletes associated with you",
    content: [
      "Change Federation Information, Upload documents and much more on behalf of your associated athletes, ensuring they’re always eligible for competition."
    ],
    svg: <IconTablerMinimize />
  },
  {
    header:
      "Make your athletes instantly available to national promoters",
    content: [
      "When registered to the Federation, your athletes are automatically added to the country’s roster, at the disposal of all national promoters."
    ],
    svg: <IconTablerMinimize />
  },
  {
    header:
      "Digitalized Federation",
    content: [
      "Help bring your Federation to the 21st century with the MMAPP platform, and take care of all your Federation needs and duties through one simple website."
    ],
    svg: <IconTablerMinimize />
  },
  {
    header:
      "Federation’s Continuous Improvement",
    content: [
      "By having your Federation use MMAPP, you are assured they have access to tools that can provide analysis and fundament to judging decisions, contributing to a cycle of continuous improvement."
    ],
    svg: <IconTablerMinimize />
  },
  {
    header:
      "Free",
    content: [
      "Our platform is 100% free to use for clubs (Federation fees still apply)."
    ],
    svg: <IconTablerMinimize />
  },
];

const promotersItems: BenefitsItem[] = [
  {
    header:
      "Guarantees high-standard officials",
    content: [
      "With a standardised methodology and an electronic scoring system, MMAPP allows for higher-quality officiating with less effort, ensuring a fair result and a successful event."
    ],
    svg: <IconTablerMinimize />
  },
  {
    header:
      "Reduces Logistic delays",
    content: [
      "With our Judge and RecordKeeper tools, Scores are more consistent and calculations are done instantly, speeding up officiating tasks, and making your event run smoother."
    ],
    svg: <IconTablerMinimize />
  },
  {
    header:
      "Smooth Experience for Membership Maintenance",
    content: [
      "Sign up once, and keep your documents up to date with reminders of their expiration to stay registered."
    ],
    svg: <IconTablerMinimize />
  },
  {
    header:
      "Get Your Events Approved Faster",
    content: [
      "Register your Events with your Federation in under 5 minutes."
    ],
    svg: <IconTablerMinimize />
  },
  {
    header:
      "Easy Access to Affiliated Fighters",
    content: [
      "View every athlete eligible for competition within your Federation in one simple list."
    ],
    svg: <IconTablerMinimize />
  },
];



const Benefits = (/* props: BenefitsProps */) => {
  const [activeTabBenefits, setActiveTabBenefits] = useState('BenefitsAthletes')
  const [isPending, startTransition] = useTransition()

  function selectTabBenefits(tab: string) {
    startTransition(() => {
      setActiveTabBenefits(tab)
    })
  }

  return (
    <>
      <div className='flex flex-col md:flex-row md:min-h-[111rem] portrait:md:min-h-[111rem] mx-4 md:mx-12 lg:mx-12 2xl:mx-96'>

          <div className='flex flex-row md:flex-col justify-center px-2 md:px-0 items-end md:items-stretch w-full md:w-[30%]'>
            {/* bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400 */}
            <TabButtonBenefits
              value='BenefitsAthletes'
              isPending={isPending}
              activeTab={activeTabBenefits}
              onClick={() => selectTabBenefits('BenefitsAthletes')}
            >
              Athletes
            </TabButtonBenefits>
            <TabButtonBenefits
              value='BenefitsCoaches'
              isPending={isPending}
              activeTab={activeTabBenefits}
              onClick={() => selectTabBenefits('BenefitsCoaches')}
            >
              Coaches
            </TabButtonBenefits>
            <TabButtonBenefits
              value='BenefitsClubs'
              activeTab={activeTabBenefits}
              onClick={() => selectTabBenefits('BenefitsClubs')}
            >
              Clubs
            </TabButtonBenefits>
            <TabButtonBenefits
              value='BenefitsPromoters'
              activeTab={activeTabBenefits}
              onClick={() => selectTabBenefits('BenefitsPromoters')}
            >
              Promoters
            </TabButtonBenefits>
          </div>

          <div className='w-full'>
            {activeTabBenefits === 'BenefitsAthletes' && <BenefitsAthletes athletesItems={athletesItems} />}
            {activeTabBenefits === 'BenefitsCoaches' && <BenefitsCoaches coachesItems={coachesItems} />}
            {activeTabBenefits === 'BenefitsClubs' && <BenefitsClubs clubsItems={clubsItems} />}
            {activeTabBenefits === 'BenefitsPromoters' && <BenefitsPromoters promotersItems={promotersItems} />}
          </div>

      </div>
    </>
  )
};

export default Benefits;