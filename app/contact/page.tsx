'use client'

/* import { useState, useTransition } from 'react' */

import ContactUs from '@/app/contact/contact-us'
/* import General from '@/app/contact/general'
import Sales from '@/app/contact/sales'
import Partnership from '@/app/contact/partnership'
import Media from '@/app/contact/media' */
import FAQ from '@/app/contact/faq'
/* import FAQ1 from '@/app/contact/faq1'
import FAQ2 from '@/app/contact/faq2'
import FAQ3 from '@/app/contact/faq3'
import FAQ4 from '@/app/contact/faq4'
import FAQ5 from '@/app/contact/faq5'
import { CardFAQ } from '@/components/ui/card'
import TabButton from '@/components/ui/tab-button'
import TabButtonFAQs from '@/components/ui/tab-button-benefits' */

const Contacts = () => {

  return (
    <>
      <ContactUs id={ContactUs}/>
      
      <div id="FAQSupport" /* className="content-spacer" */>
        <h1 className='text-center py-14 md:py-20 lg:py-24 xl:py-32'>
          FAQ Support
        </h1>

        <section className='container w-[95%] md:w-[95%] xl:w-[90%] pt-6 md:pt-0 mb-12'>
          <FAQ />
        </section>

{/*         <section className='pt-6 md:pt-0 mb-12'>
          <div className='mx-12 flex flex-row items-center'>

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
              </div>

              <div className='w-[50%] mb-auto'>
                {activeTabFAQ === 'FAQ1' && <FAQ1 />}
                {activeTabFAQ === 'FAQ2' && <FAQ2 />}
                {activeTabFAQ === 'FAQ3' && <FAQ3 />}
                {activeTabFAQ === 'FAQ4' && <FAQ4 />}
                {activeTabFAQ === 'FAQ5' && <FAQ5 />}
              </div>
          </div>
        </section> */}
      </div>
  </>
)};

export default Contacts;
