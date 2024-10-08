'use client'
import { useState, useTransition } from 'react'
import { clsx } from "clsx";

import General from '@/app/contact/general'
import Sales from '@/app/contact/sales'
import Partnership from '@/app/contact/partnership'
import Media from '@/app/contact/media'
import TabButton from '@/components/ui/tab-button-contact-us'

const ContactUs = (props: any) => {
  const [activeTab, setActiveTab] = useState('general')
  const [isPending, startTransition] = useTransition()

  function selectTab(tab: string) {
    startTransition(() => {
      setActiveTab(tab)
    })
  }

  return (
    <>
      <div className={clsx(
        'w-[98%] md:w-[95%] xl:w-[90%] max-w-[1536px] mx-auto px-2 md:px-[4.5vw]',
        props.className
      )}>
        <div className='flex flex-col md:flex-row w-full h-80 md:h-24 lg:h-28 xl:h-32 2xl:h-36 items-center justify-center gap-1.5 p-1.5 rounded-lg bg-neutral-900 text-neutral-400'> {/* bg-neutral-200 text-neutral-500 */}
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
      </div>
    </>
  )
};

export default ContactUs;
