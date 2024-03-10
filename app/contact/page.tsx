'use client'

import { useState, useTransition } from 'react'

import General from '@/app/contact/general'
import Sales from '@/app/contact/sales'
import Partnership from '@/app/contact/partnership'
import Media from '@/app/contact/media'
import FAQ from '@/app/contact/faq'
import FAQ1 from '@/app/contact/faq1'
import FAQ2 from '@/app/contact/faq2'
import FAQ3 from '@/app/contact/faq3'
import FAQ4 from '@/app/contact/faq4'
import FAQ5 from '@/app/contact/faq5'
import { CardFAQ } from '@/components/ui/card'
import TabButton from '@/components/ui/tab-button'
import TabButtonFAQs from '@/components/ui/tab-button-faqs'
import { Accordion } from '@/components/ui/accordion'

const Contacts = () => {
  const [activeTab, setActiveTab] = useState('general')
  const [activeTabFAQ, setActiveTabFAQ] = useState('FAQ1')
  const [isPending, startTransition] = useTransition()

  function selectTab(tab: string) {
    startTransition(() => {
      setActiveTab(tab)
    })
  }
  function selectTabFAQ(tab: string) {
    startTransition(() => {
      setActiveTabFAQ(tab)
    })
  }

  return (
    <>
      <div id="ContactUs" /* className="content-spacer" */>
        <section className='pt-6 md:pt-0'> {/*py-8 md:py-16 lg:py-24 xl:py-32*/}
          {/* <div className='container sm:max-w-2xl'> */}
          <div className='container w-full flex flex-col items-center'>
            <h1 className='text-center py-14 md:py-20 lg:py-24 xl:py-32 text-3xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl'>Contact Us</h1>

            <section className='w-[98%] md:w-[95%] xl:w-[90%]'>
              <div className='flex flex-col md:flex-row w-full h-80 md:h-24 lg:h-28 xl:h-32 2xl:h-36 items-center justify-center gap-1.5 rounded-lg bg-white p-1.5 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400'>
                <TabButton
                  value='general'
                  activeTab={activeTab}
                  onClick={() => selectTab('general')}
                >
                  General Inquiries
                </TabButton>
                <TabButton
                  value='sales'
                  isPending={isPending}
                  activeTab={activeTab}
                  onClick={() => selectTab('sales')}
                >
                  Sales Enquiries
                </TabButton>
                <TabButton
                  value='partnership'
                  activeTab={activeTab}
                  onClick={() => selectTab('partnership')}
                >
                  Partnership Enquiries
                </TabButton>
                <TabButton
                  value='media'
                  activeTab={activeTab}
                  onClick={() => selectTab('media')}
                >
                  Media Enquiries
                </TabButton>
              </div>

              <div className='mt-3'>
                {activeTab === 'general' && <General />}
                {activeTab === 'sales' && <Sales />}
                {activeTab === 'partnership' && <Partnership />}
                {activeTab === 'media' && <Media />}
              </div>
            </section>
          </div>
        </section>
      </div>
      <div id="FAQSupport" /* className="content-spacer" */>
        <h1 className='text-center py-14 md:py-20 lg:py-24 xl:py-32'>
          FAQ Support
        </h1>

        <section className='container w-[95%] md:w-[95%] xl:w-[90%] pt-6 md:pt-0 mb-12'>
          <Accordion />
        </section>

        <section className='pt-6 md:pt-0 mb-12'> {/*py-8 md:py-16 lg:py-24 xl:py-32*/}
          {/* <div className='container sm:max-w-2xl'> */}
          <div className='mx-12 flex flex-row items-center'>

            {/* <section className='w-full'> */}
              <div className='flex flex-col w-[50%] h-[50vh] overflow-y-auto justify-center gap-1.5 mb-auto rounded-lg bg-white p-1.5 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400'>
                <TabButtonFAQs
                  value='FAQ1'
                  isPending={isPending}
                  activeTab={activeTabFAQ}
                  onClick={() => selectTabFAQ('FAQ1')}
                >
                  Where do I go to setup an account?
                </TabButtonFAQs>
                <TabButtonFAQs
                  value='FAQ2'
                  isPending={isPending}
                  activeTab={activeTabFAQ}
                  onClick={() => selectTabFAQ('FAQ2')}
                >
                  Is the Mobile App secure?
                </TabButtonFAQs>
                <TabButtonFAQs
                  value='FAQ3'
                  activeTab={activeTabFAQ}
                  onClick={() => selectTabFAQ('FAQ3')}
                >
                  How current is the account information I see in the Mobile App?
                </TabButtonFAQs>
                <TabButtonFAQs
                  value='FAQ4'
                  activeTab={activeTabFAQ}
                  onClick={() => selectTabFAQ('FAQ4')}
                >
                  How do I get the Mobile App for my phone?
                </TabButtonFAQs>
                <TabButtonFAQs
                  value='FAQ5'
                  activeTab={activeTabFAQ}
                  onClick={() => selectTabFAQ('FAQ5')}
                >
                  How do I find your offices and payment locations?
                </TabButtonFAQs>
                {/* <TabButtonFAQs
                  value='FAQ6'
                  activeTab={activeTabFAQ}
                  onClick={() => selectTabFAQ('FAQ6')}
                >
                  How do I find your offices and payment locations?
                </TabButtonFAQs>
                <TabButtonFAQs
                  value='FAQ7'
                  activeTab={activeTabFAQ}
                  onClick={() => selectTabFAQ('FAQ7')}
                >
                  How do I find your offices and payment locations?
                </TabButtonFAQs>
                <TabButtonFAQs
                  value='FAQ8'
                  activeTab={activeTabFAQ}
                  onClick={() => selectTabFAQ('FAQ8')}
                >
                  How do I find your offices and payment locations?
                </TabButtonFAQs>
                <TabButtonFAQs
                  value='FAQ9'
                  activeTab={activeTabFAQ}
                  onClick={() => selectTabFAQ('FAQ9')}
                >
                  How do I find your offices and payment locations?
                </TabButtonFAQs>
                <TabButtonFAQs
                  value='FAQ10'
                  activeTab={activeTabFAQ}
                  onClick={() => selectTabFAQ('FAQ10')}
                >
                  How do I find your offices and payment locations?
                </TabButtonFAQs> */}
              </div>

              <div className='w-[50%] mb-auto'>
                {activeTabFAQ === 'FAQ1' && <FAQ1 />}
                {activeTabFAQ === 'FAQ2' && <FAQ2 />}
                {activeTabFAQ === 'FAQ3' && <FAQ3 />}
                {activeTabFAQ === 'FAQ4' && <FAQ4 />}
                {activeTabFAQ === 'FAQ5' && <FAQ5 />}
                {/* {activeTabFAQ === 'FAQ6' && <FAQ5 />}
                {activeTabFAQ === 'FAQ7' && <FAQ5 />}
                {activeTabFAQ === 'FAQ8' && <FAQ5 />}
                {activeTabFAQ === 'FAQ9' && <FAQ5 />}
                {activeTabFAQ === 'FAQ10' && <FAQ5 />} */}
              </div>
            {/* </section> */}
          </div>
        </section>
      </div>
  </>
)};

export default Contacts;
