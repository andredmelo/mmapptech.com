'use client'

import { useState, useTransition } from 'react'

import General from './general'
import Sales from './sales'
import Partnership from './partnership'
import Media from './media'
import TabButton from '../../components/tab-button'

const Contacts = () => {
  const [activeTab, setActiveTab] = useState('general')
  const [isPending, startTransition] = useTransition()


  function selectTab(tab: string) {
    startTransition(() => {
      setActiveTab(tab)
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
