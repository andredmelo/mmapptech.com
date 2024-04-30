'use client'

import ContactUs from '@/app/contact/contact-us'
import FAQ from '@/app/contact/faq'
import PagesTransitionScroll from '@/lib/contexts/PagesTransitionScroll';
import CallToActionButton from '@/app/CallToActionButton'
import { MmappBlockReveal, MmappHeadingReveal, MmappParagraphsReveal } from '@/components/ui/mainAnimations';

const Contacts = () => {
  return (
    <>
      <PagesTransitionScroll />
      <MmappBlockReveal />
      {/* <MmappHeadingReveal />
      <MmappParagraphsReveal /> */}

      <div className="contactUsPage">

        <section id="ContactUs" className="flex flex-col justify-center items-center py-24 md:py-40 lg:py-52">
          <h5 className="mmappBlockReveal px-[3vw] md:px-[10vw] lg:px-[25vw] mb-4 md:mb-6 lg:mb-12 text-center text-neutral-200 leading-8 md:leading-[3rem] lg:leading-[4rem] deboss">
            If you&apos;d like to enjoy the many benefits of MMAPP yourself, contact your Federation and let them know you&apos;d like them to start using the platform.
          </h5>
          <CallToActionButton className="mmappBlockReveal" />
        </section>

          <div className="borderBottom"></div>

        <section className="flex flex-col justify-center items-center py-24 md:py-40 lg:py-52">

          <h5 className="mmappBlockReveal mb-8 md:mb-10 lg:mb-12 text-neutral-200 deboss">
            Contact Us
          </h5>
          <p className="mmappBlockReveal mb-8 md:mb-10 lg:mb-12">
            Please select your kind of inquiry
          </p>
          <ContactUs className="mmappBlockReveal" />
        </section>

        <div className="borderBottom"></div>

        <section id="FAQSupport" className="flex flex-col items-center py-32 md:py-40 lg:py-52">
          {/* <h1 className='text-center py-14 md:py-20 lg:py-24 xl:py-32 text-3xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl'>
            FAQ Support
          </h1> */}
          <h5 className="mmappBlockReveal mb-8 md:mb-10 lg:mb-12 text-neutral-200 deboss">
            FAQs & Support
          </h5>
          <p className="mmappBlockReveal text-center mb-8 md:mb-10 lg:mb-12 md:px-56">
            If you have any other questions, or need any assistance, please feel free to use the contact us form above
          </p>
          <FAQ className="mmappBlockReveal" />
        </section>
      </div>
    </>
  )
};

export default Contacts;
