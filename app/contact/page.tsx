'use client'

import { useState, useTransition } from 'react'

import General from './general'
import Sales from './sales'
import Partnership from './partnership'
import Media from './media'
import TabButton from '../../components/tab-button'

const Contacts = () => {
  const [activeTab, setActiveTab] = useState('about')
  const [isPending, startTransition] = useTransition()

  function selectTab(tab: string) {
    startTransition(() => {
      setActiveTab(tab)
    })
  }

  return (
    <>
      <div id="ContactUs" /* className="content-spacer" */>
        <section className='py-8'>
          {/* <div className='container sm:max-w-2xl'> */}
          <div className='container w-full'>
            <h1 className='text-center'>Contact Us</h1>

            <section className='mt-6'>
              <div className='flex flex-col md:flex-row w-full h-72 md:h-24 lg:h-28 items-center justify-center gap-1.5 rounded-lg bg-white p-1.5 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400'>
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
      <div id="FAQSupport" className="content-spacer">
        <h2>FAQ Support</h2>
        <br/>
        <h4>Overview of Federation Affairs</h4>
        <h4>Visual Reports with Actionable Insights</h4>
        <h4>Easy Form Management</h4>
        <h4>Seamless Sign-up process for all your members<br/>(Officials, Athletes, Coaches, Promoters and Clubs)</h4>
        <h4>Intuitive Member Management</h4>
        <br/>
      </div>
  </>
)};

export default Contacts;
