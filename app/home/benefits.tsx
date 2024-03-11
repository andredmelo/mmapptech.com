'use client'
import { useState, useTransition } from 'react'
import TabButtonBenefits from '@/components/ui/tab-button-benefits'
import Benefits1 from '@/app/home/benefits1'
import Benefits2 from '@/app/home/benefits2'

export interface BenefitsItem {
  title: string;
  header: string;
  content: string;
}

const items: BenefitsItem[] = [
  {
    title: "Athletes",
    header:
      "Guarantees athletes and promoters high-standard officials",
    content:
      "With a standardised methodology and an electronic scoring system, provides higher quality officiating with less effort, making sure wherever you are, you get a fair result.",
  },
  {
    title: "Athletes",
    header:
      "Minimizes unexpected decisions",
    content:
      "With our Judge and RecordKeeper tools, Scores are more consistent and calculations are done instantly, mitigating conscious and unconscious bias",
  },
];

interface BenefitsProps { items: BenefitsItem[]; }

const Benefits = (/* props: BenefitsProps */) => {
  const [activeTabBenefits, setActiveTabBenefits] = useState('Benefits1')
  const [isPending, startTransition] = useTransition()

  function selectTabBenefits(tab: string) {
    startTransition(() => {
      setActiveTabBenefits(tab)
    })
  }

  return (
    <>
      <section  id="Benefits" className='md:pt-0 mb-12'> {/*py-8 md:py-16 lg:py-24 xl:py-32*/}
        {/* <div className='container sm:max-w-2xl'> */}
        <h1 className='text-center py-14 md:py-20 lg:py-24 xl:py-32'>
        Benefits for everyone else
        </h1>
        <div className='flex flex-col md:flex-row items-center mx-4 md:mx-12'>

          {/* <section className='w-full'> */}
            <div className='flex flex-row md:flex-col w-full md:w-[40%] h-full mb-auto justify-center gap-0.5 p-0.5 rounded-lg bg-neutral-100 text-neutral-500 dark:bg-blue-800 dark:text-neutral-400'>
              <TabButtonBenefits
                value='Benefits1'
                isPending={isPending}
                activeTab={activeTabBenefits}
                onClick={() => selectTabBenefits('Benefits1')}
              >
                Athletes
              </TabButtonBenefits>
              <TabButtonBenefits
                value='Benefits2'
                isPending={isPending}
                activeTab={activeTabBenefits}
                onClick={() => selectTabBenefits('Benefits2')}
              >
                Coaches
              </TabButtonBenefits>
              <TabButtonBenefits
                value='Benefits3'
                activeTab={activeTabBenefits}
                onClick={() => selectTabBenefits('Benefits3')}
              >
                Clubs
              </TabButtonBenefits>
              <TabButtonBenefits
                value='Benefits4'
                activeTab={activeTabBenefits}
                onClick={() => selectTabBenefits('Benefits4')}
              >
                Promoters
              </TabButtonBenefits>
            </div>

            <div className='w-full mb-auto'>
              {activeTabBenefits === 'Benefits1' && <Benefits1 />}
              {activeTabBenefits === 'Benefits2' && <Benefits2 />}
              {activeTabBenefits === 'Benefits3' && <Benefits1 />}
              {activeTabBenefits === 'Benefits4' && <Benefits1 />}
            </div>
          {/* </section> */}
        </div>
      </section>

      {/* <section id="Benefits" className="homePageSection">
        <h1>Benefits for everyone else</h1>
        <div id="benefitsAthletes" className="benefitsAthletes">
          <h2>Athletes</h2>
          <br/>
          <h4>Guarantees athletes and promoters high-standard officials</h4>
          <p>With a standardised methodology and an electronic scoring system, provides higher quality officiating with less effort, making sure wherever you are, you get a fair result.</p>
          <h4>Minimizes unexpected decisions</h4>
          <p>With our Judge and RecordKeeper tools, Scores are more consistent and calculations are done instantly, mitigating conscious and unconscious bias</p>
          <h4>Smooth Experience for Membership Maintenance</h4>
          <p>Sign-up in one go, and keep your documents up to date with reminders of their expiration</p>
          <h4>Get featured in a centralized database available to promoters</h4>
          <p>When registered to your Federation, you are automatically added to the country&apos;s roster, at the disposal of all national promoters</p>
        </div>
        <div id="benefitsCoaches" className="benefitsCoaches">
          <h2>Coaches</h2>
          <br/>
          <h4>Smooth Experience for Membership Maintenance</h4>
          <p>Easily keep your profile always up-to-date, with reminders of expiration dates for documents</p>
          <h4>Manage multiple athletes associated with you</h4>
          <p>Change Federation Information, Upload documents and much more on behalf of your associated athletes, ensuring they&apos;re always eligible for competition</p>
          <h4>Make your athletes instantly available to national promoters</h4>
          <p>When registered to the Federation, your atheltes are automatically added to the country&apos;s roster, at the disposal of all national promoters</p>
        </div>
        <div id="benefitsClubs" className="benefitsClubs">
          <h2>Clubs</h2>
          <br/>
          <h4>Manage multiple athletes associated with you</h4>
          <p>Change Federation Information, Upload documents and much more on behalf of your associated athletes, ensuring they&apos;re always eligible for competition</p>
          <h4>Smooth Experience for Membership Maintenance</h4>
          <p>Sign-up once, and keep your documents up to date with reminders of their expiration to stay registered</p>
          <h4>Make your athletes instantly available to national promoters</h4>
          <p>When registered to the Federation, your atheltes are automatically added to the country&apos;s roster, at the disposal of all national promoters</p>
        </div>
        <div id="benefitsPromoters" className="benefitsPromoters">
          <h2>Promoters</h2>
          <br/>
          <h4>Guarantees athletes and promoters high-standard officials</h4>
          <p>With a standardised methodology and an electronic scoring system, provides higher quality officiating with less effort</p>
          <h4>Minimizes unexpected decisions</h4>
          <p>With our Judge and RecordKeeper tools, Scores are more consistent and calculations are done instantly, mitigating conscious and unconscious bias</p>
          <h4>Smooth Experience for Membership Maintenance</h4>
          <p>Sign-up once, and keep your documents up to date with reminders of their expiration to stay registered</p>
        </div>
      </section> */}

    </>
  )
};

export default Benefits;