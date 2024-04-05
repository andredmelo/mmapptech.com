'use client'

import ContactUs from '@/app/contact/contact-us'
import FAQ from '@/app/contact/faq'

const Contacts = () => {

  return (
    <>

      <section id="ContactUs" className="flex flex-col items-center py-32 md:py-40 lg:py-52">
        {/* <h1 className='text-center py-14 md:py-20 lg:py-24 xl:py-32 text-3xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl'>
          Contact Us
        </h1> */}
          <h5 className="mb-4 md:mb-8 lg:mb-12 text-neutral-200 deboss">
          Contact Us
          </h5>
        <ContactUs />
      </section>
        
        <div className="borderBottom"></div>

      <section id="FAQSupport" className="flex flex-col items-center py-32 md:py-40 lg:py-52">
        {/* <h1 className='text-center py-14 md:py-20 lg:py-24 xl:py-32 text-3xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl'>
          FAQ Support
        </h1> */}
        <h5 className="mb-4 md:mb-8 lg:mb-12 text-neutral-200 deboss">
          FAQ Support
        </h5>
        <FAQ />
      </section>

    </>
  )
};

export default Contacts;
