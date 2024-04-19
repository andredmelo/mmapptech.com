'use client'

import ContactUs from '@/app/contact/contact-us'
import FAQ from '@/app/contact/faq'
import PagesTransitionScroll from '@/lib/contexts/PagesTransitionScroll';

const Contacts = () => {
  return (
    <>
      <PagesTransitionScroll />
    
      <div className="contactUsPage">

        <section id="ContactUs" className="flex flex-col justify-center items-center py-32 md:py-40 lg:py-52">
          <h5 className="mb-8 md:mb-10 lg:mb-12 text-neutral-200 deboss">
          Contact Us
          </h5>
          <p className="mb-8 md:mb-10 lg:mb-12">
            Please select your kind of inquiry
          </p>
          <ContactUs />
        </section>
          
          <div className="borderBottom"></div>

        <section id="FAQSupport" className="flex flex-col items-center py-32 md:py-40 lg:py-52">
          {/* <h1 className='text-center py-14 md:py-20 lg:py-24 xl:py-32 text-3xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl'>
            FAQ Support
          </h1> */}
          <h5 className=" mb-8 md:mb-10 lg:mb-12 text-neutral-200 deboss">
            FAQ Support
          </h5>
          <p className="text-center mb-8 md:mb-10 lg:mb-12 md:px-56">
            If you have any other questions, or need any assistance, please feel free to use the contact us form above
          </p>
          <FAQ />
        </section>
      </div>
    </>
  )
};

export default Contacts;
