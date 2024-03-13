'use client'

import ContactUs from '@/app/contact/contact-us'
import FAQ from '@/app/contact/faq'

const Contacts = () => {

  return (
    <>

      <section id="ContactUs">
        <h1 className='text-center py-14 md:py-20 lg:py-24 xl:py-32 text-3xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl'>
          Contact Us
        </h1>
        <ContactUs />
      </section>

      <section id="FAQSupport">
        <h1 className='text-center py-14 md:py-20 lg:py-24 xl:py-32 text-3xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl'>
          FAQ Support
        </h1>
        <FAQ />
      </section>

    </>
  )
};

export default Contacts;
