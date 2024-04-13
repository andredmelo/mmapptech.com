'use client'

import ContactUs from '@/app/contact/contact-us'
import FAQ from '@/app/contact/faq'
import CallToActionButton from '@/app/CallToActionButton'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { useAppContext } from '@/lib/contexts/AppContext';

const Contacts = () => {
  const { href, smoother } = useAppContext();

  useGSAP(
    () => {


      //let ScrollSmootherTop = "top 0px"; //"top 52px"
      const checkAllConditionsReady = setInterval(() => {
        if (smoother?.current && typeof smoother.current.scrollTo === "function" && document.querySelector('.templateAnimIn')) {
          clearInterval(checkAllConditionsReady);
          //console.log("All conditions met!")

          const animIn = gsap.timeline({ paused: true })
            .fromTo(".templateAnimIn", { opacity: 0, x: -100 }, { duration: 0.25, opacity: 1, x: 0, ease: "power2.out" });

          smoother.current.scrollTo(href);
          animIn.invalidate();
          animIn.restart().play();
          console.log("scrollingTo : " + href);

        } else {
          console.log("Conditions for scrollTo not met");
        }
      }, 100); // Check every 100ms

    },
    { dependencies: [smoother, href], revertOnUpdate: true, /* scope: main */ }
    );
  return (
    <>

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
        <p className="text-center mb-8 md:mb-10 lg:mb-12">
          If you have any other questions, or need any assistance, please feel free to use the contact us form above
        </p>
        <FAQ />
      </section>

    </>
  )
};

export default Contacts;
