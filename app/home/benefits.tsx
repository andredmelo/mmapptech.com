'use client'
import { useState, useTransition } from 'react'
import TabButtonBenefits from '@/components/ui/tab-button-benefits'

import { BenefitsItem, BenefitsAthletes, BenefitsCoaches, BenefitsClubs, BenefitsPromoters } from '@/components/ui/benefitsFC';

import { IconTablerMinimize, IconTablerRefreshDot, IconTablerAssembly, IconTablerAtom2, IconTablerKarate, IconTablerUserScan, IconTablerUserCircle, IconTablerProgressBolt, IconTablerFreeRights, IconTablerAffiliate, IconTablerFileDigit, IconTablerTruckLoading, IconTablerSpeedtest, IconTablerCalendarCheck, IconTablerAccessPoint, IconTablerFileIsr } from '@/components/ui/svg/benefitsSVGs';


const athletesItems: BenefitsItem[] = [
  {
    header:
      "Guarantees high-standard officials",
    content: [
      "Our Judge and RecordKeeper tools helps officials with their duties, mitigating errors and reducing fatigue, ensuring a higher-quality officiation for longer."
    ],
    svg: <IconTablerAtom2 />
  },
  /* {
    header:
      "Minimizes unexpected decisions",
    content: [
      "With our Judge and RecordKeeper tools, Scores are more consistent, and calculations are done instantly, mitigating user errors and conscious and unconscious bias(es)."
    ],
    svg: <IconTablerMinimize />
  }, */
  {
    header:
      "Consistency & Transparency",
    content: [
      "Our standardized methodology fosters discussion and consensus among judges, promoting consistency and transparency in fights, regardless of where you fight."
    ],
    svg: <IconTablerAssembly />
  },
  {
    header:
      "Athlete Profile",
    content: [
      "Sign up once, keep your documents up to date (with reminders of expiration dates) to remain affiliated. Access your profile anytime, anywhere, and have a lifetime archive of your career."
    ],
    svg: <IconTablerKarate />
  },
  /* {
    header:
      "Athlete Profile",
    content: [
      "Sign up only once, and simply keep your profile documents up to date (with reminders of expiration dates) to remain affiliated.",
      <br key="br1" />, // Use keys for list elements
      "Access your profile anytime, anywhere."
    ],
    svg: <IconTablerKarate />
  },
  {
    header:
      "Fights Schedule and Records",
    content: [
      "Easily browse all your upcoming fights, their details and rulesets.",
      <br key="br1" />, // Use keys for list elements
      "Have a digital lifetime archive of your career."
    ],
    svg: <IconTablerKarate />
  }, */
  {
    header:
      "Get featured to Promoters",
    content: [
      "When registered to your Federation, you are automatically added to the country’s roster, at the disposal of all national promoters."
    ],
    svg: <IconTablerProgressBolt />
  },
  {
    header:
      "Free",
    content: [
      "Our platform is 100% free to use for athletes (Federation fees still apply)."
    ],
    svg: <IconTablerFreeRights />
  },
];

const coachesItems: BenefitsItem[] = [
  {
    header:
      "Coach Profile",
    content: [
      "Easily keep your profile always up-to-date, with reminders of expiration dates for documents.",
      <br key="br1" />, // Use keys for list elements
      "Have a digital lifetime archive of your career."
    ],
    svg: <IconTablerUserCircle />
  },
  {
    header:
      "Manage multiple athletes",
    content: [
      "Change Federation Information, Upload documents and much more on behalf of your associated athletes, ensuring they’re always eligible for competition."
    ],
    svg: <IconTablerAffiliate />
  },
  {
    header:
      "Make your athletes instantly available to national promoters",
    content: [
      "When registered to the Federation, your athletes are automatically added to the country’s roster, at the disposal of all national promoters."
    ],
    svg: <IconTablerUserScan />
  },
  {
    header:
      "Consistency & Transparency",
    content: [
      "Our standardized methodology provides judges with equal, easy-to-access tools to learn, discuss, and find consensus, increasing consistency and transparency worldwide."
    ],
    svg: <IconTablerAssembly />
  },
  {
    header:
      "Free",
    content: [
      "Our platform is 100% free to use for coaches (Federation fees still apply)."
    ],
    svg: <IconTablerFreeRights />
  },
];

const clubsItems: BenefitsItem[] = [
  {
    header:
      "Manage multiple athletes",
    content: [
      "Change Federation Information, Upload documents and much more on behalf of your associated athletes, ensuring they’re always eligible for competition."
    ],
    svg: <IconTablerAffiliate />
  },
  {
    header:
      "Make your athletes instantly available to national promoters",
    content: [
      "When registered to the Federation, your athletes are automatically added to the country’s roster, at the disposal of all national promoters."
    ],
    svg: <IconTablerUserScan />
  },
  {
    header:
      "Digitalized Federation",
    content: [
      "Help bring your Federation to the 21st century with its digital integration on the MMAPP platform.",
      <br key="br1" />, // Use keys for list elements
      "Take care of all your Federation needs and duties through one simple website."
    ],
    svg: <IconTablerFileDigit />
  },
  {
    header:
      "Federation’s Continuous Improvement",
    content: [
      "By having your Federation use MMAPP, they'll have access to tools that can provide analysis and fundament to judging decisions, contributing to a cycle of continuous improvement."
    ],
    svg: <IconTablerRefreshDot />
  },
  {
    header:
      "Free",
    content: [
      "Our platform is 100% free to use for clubs (Federation fees still apply)."
    ],
    svg: <IconTablerFreeRights />
  },
];

const promotersItems: BenefitsItem[] = [
  {
    header:
      "Guarantees high-standard officials",
    content: [
      "With a standardised methodology and an electronic scoring system, MMAPP allows for higher-quality officiating with less effort, ensuring a fair result and a successful event."
    ],
    svg: <IconTablerAtom2 />
  },
  {
    header:
      "Reduces Logistic delays",
    content: [
      "With our Judge and RecordKeeper tools, Scores are more consistent and calculations are done instantly, speeding up officiating tasks, and making your event run smoother."
    ],
    svg: <IconTablerSpeedtest />
  },
  {
    header:
      "Smooth Membership Maintenance",
    content: [
      "Sign up once, and keep your documents up to date with reminders of their expiration to stay registered."
    ],
    svg: <IconTablerFileIsr />
  },
  {
    header:
      "Get Your Events Approved Faster",
    content: [
      "Register your Events with your Federation in under 5 minutes."
    ],
    svg: <IconTablerCalendarCheck />
  },
  {
    header:
      "Easy Access to Affiliated Fighters",
    content: [
      "View every athlete eligible for competition within your Federation in one simple list."
    ],
    svg: <IconTablerAccessPoint />
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
      <div className='flex flex-col md:flex-row md:min-h-[120rem] portrait:touch:md:min-h-[86.5rem] lg:min-h-[97rem] mx-1 md:mx-[1rem] xl:mx-[8rem] 2xl:mx-[10rem]'>  {/* 3xl:min-w-[1536px] 3xl:mx-auto */}

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