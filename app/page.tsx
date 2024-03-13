/* 'use client' */
import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from 'next'
import ContactUs from '@/app/contact/contact-us'
import Benefits from '@/app/home/benefits'
import { FeaturesDashboardCard } from '@/components/ui/featuresCard'
import ProDisplayShadowSVG from "@/components/ui/svg/proDisplayShadowSVG";

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {

  return (
    <>
      <div className="">
        <div id="Home" className="homeSection">
          <div className="homeBackground">
            <img src="/images/33498201.webp" alt="Fighters getting ready to fight"/>
          </div>
          <div className="homeMain">
            <img src="/images/logo_on_black.svg" alt="MMAPP Logo" />
            <h2>Mapping MMA</h2>
          </div>
        </div>

        <section id="Features Dashboard">
          <h1>Features</h1>
          <div className="flex flex-col items-center colored-cards my-24">
            <h2 id="featuresDashboardTitle" className="z-20 px-[5vw] md:px-[20vw] lg:px-[10vw] portrait:pb-12text-center" >Federations (Dashboard)</h2>
            {/* <div id="featuresDashboardMBP" className="absolute w-[92vw] h-[100vh] pt-[8vh] flex items-start z-5">
              <img className="object-contain z-5" src="/images/features/mbp_16_hw__cqlhn5ys0o9y_large_2x.jpg" alt="MacBook Pro"/>
            </div> */}
            <div id="featuresDashboardHeader" className="featuresDashboardHeader w-full flex items-center justify-center text-center z-20 overflow-visible relative py-6 portrait:py-12">
              <h4 className="relative" style={{ visibility: 'hidden' }}>Easy Form Management and Seamless Sign-up process<br/>for all your members (Officials, Athletes, Coaches, Promoters and Clubs)</h4>
              <h4 className="absolute featuresDashboardHeaderH4">Overview of Federation Affairs</h4>
              <h4 className="absolute featuresDashboardHeaderH4">Visual Reports with Actionable Insights</h4>
              <h4 className="absolute px-[5vw] 2xl:px-[10vw] featuresDashboardHeaderH4">Easy Form Management and Seamless Sign-up process for all your members (Officials, Athletes, Coaches, Promoters and Clubs)</h4>
              <h4 className="absolute featuresDashboardHeaderH4">Intuitive Member Management</h4>
            </div>
            <FeaturesDashboardCard className="colored-card z-10" parentClassName="pb-0">
              <img src="/images/features/federationsDashboard/dashboard1.webp" alt="Federations Dashboard 1"/>
            </FeaturesDashboardCard>
            <ProDisplayShadowSVG className="proDisplayShadowSVG pb-[35vh]"/>
            <FeaturesDashboardCard className="colored-card z-10" parentClassName="pb-[35vh]">
              <img src="/images/features/federationsDashboard/dashboard2.webp" alt="Federations Dashboard 2"/>
            </FeaturesDashboardCard>
            <FeaturesDashboardCard className="colored-card z-10" parentClassName="pb-[35vh]">
              <img src="/images/features/federationsDashboard/dashboard3.webp" alt="Federations Dashboard 3"/>
            </FeaturesDashboardCard>
            <FeaturesDashboardCard className="colored-card z-10" parentClassName="pb-0">
              <img src="/images/features/federationsDashboard/dashboard4.webp" alt="Federations Dashboard 4"/>
            </FeaturesDashboardCard>
          </div>
        </section>

        <section id="Features" className="homePageSection">
          {/* <h1>Features</h1>
          <div id="featuresDashboard" className="featuresDashboard">
            <h2>Federations (Dashboard)</h2>
            <br/>
            <h4>Overview of Federation Affairs</h4>
            <h4>Visual Reports with Actionable Insights</h4>
            <h4>Easy Form Management</h4>
            <h4>Seamless Sign-up process for all your members<br/>(Officials, Athletes, Coaches, Promoters and Clubs)</h4>
            <h4>Intuitive Member Management</h4>
            <br/>
          </div> */}
          <div id="featuresJudge" className="featuresJudge">
            <h2>Officials (Judge)</h2>
            <br/>
            <h4>Personalized Fight Card</h4>
            <h4>Make more Informed Decisions with a Coherent and Consistent Methodology</h4>
            <h4>Discuss scoring more deeply with your colleagues</h4>
            <h4>Reduce Fatigue</h4>
            <h4>Instantly submit your scorecards to the RecordKeeper</h4>
            <h4>Training Mode - Create Own Fights, Improve your skills and compare with your colleagues</h4>
          </div>
          <div id="featuresRecordKeeper" className="featuresRecordKeeper">
            <h2>Officials (RecordKeeper)</h2>
            <br/>

            <h4>Pre-filled in Information</h4>
            <h4>Effortlessly monitor all relevant details during a fight - Assigned Officials, Rules</h4>
            <h4>Flawlessly perform all timing duties (Round time, Break Time, Breaks, Point Deductions and more)</h4>
            <h4>Notifications for actions needed to perform</h4>
            <h4>Instant Score Delivery and Calculation</h4>
          </div>
        </section>

        {/* <section id="Benefits" className="homePageSection">
          <h1>Benefits for everyone else</h1>
          <div id="benefitsAthletes" className="benefitsAthletes">
            <h2>Athletes</h2>
            <br/>
            <h4>Guarantees athletes and promoters high-standard officials</h4>
            <p>With a standardised methodology and an electronic scoring system, provides higher quality officiating with less effort, making sure wherever you are, you get a fair result.</p>
            <h4>Minimizes unexpected decisions</h4>
            <p>With our Judge and RecordKeeper tools, Scores are more consistent and calculations are done instantly, mitigating conscious and unconscious bias</p>
            <h4>Smooth Experience for Membership Maintenance</h4>
            <p>Sign-up in one go, and keep your documents up to date with reminders of their expiration</p>
            <h4>Get featured in a centralized database available to promoters</h4>
            <p>When registered to your Federation, you are automatically added to the country&apos;s roster, at the disposal of all national promoters</p>
          </div>
          <div id="benefitsCoaches" className="benefitsCoaches">
            <h2>Coaches</h2>
            <br/>
            <h4>Smooth Experience for Membership Maintenance</h4>
            <p>Easily keep your profile always up-to-date, with reminders of expiration dates for documents</p>
            <h4>Manage multiple athletes associated with you</h4>
            <p>Change Federation Information, Upload documents and much more on behalf of your associated athletes, ensuring they&apos;re always eligible for competition</p>
            <h4>Make your athletes instantly available to national promoters</h4>
            <p>When registered to the Federation, your atheltes are automatically added to the country&apos;s roster, at the disposal of all national promoters</p>
          </div>
          <div id="benefitsClubs" className="benefitsClubs">
            <h2>Clubs</h2>
            <br/>
            <h4>Manage multiple athletes associated with you</h4>
            <p>Change Federation Information, Upload documents and much more on behalf of your associated athletes, ensuring they&apos;re always eligible for competition</p>
            <h4>Smooth Experience for Membership Maintenance</h4>
            <p>Sign-up once, and keep your documents up to date with reminders of their expiration to stay registered</p>
            <h4>Make your athletes instantly available to national promoters</h4>
            <p>When registered to the Federation, your atheltes are automatically added to the country&apos;s roster, at the disposal of all national promoters</p>
          </div>
          <div id="benefitsPromoters" className="benefitsPromoters">
            <h2>Promoters</h2>
            <br/>
            <h4>Guarantees athletes and promoters high-standard officials</h4>
            <p>With a standardised methodology and an electronic scoring system, provides higher quality officiating with less effort</p>
            <h4>Minimizes unexpected decisions</h4>
            <p>With our Judge and RecordKeeper tools, Scores are more consistent and calculations are done instantly, mitigating conscious and unconscious bias</p>
            <h4>Smooth Experience for Membership Maintenance</h4>
            <p>Sign-up once, and keep your documents up to date with reminders of their expiration to stay registered</p>
          </div>
        </section> */}
        <section id="Benefits" className='md:pt-0 mb-12'>
          <h1 className="text-center py-14 md:py-20 lg:py-24 xl:py-32 text-3xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl">
            Benefits for everyone else
          </h1>
          <Benefits /* items={items} */ />
        </section>

        <section id="Ourmission" className="homePageSection">
          <div>
            <h1>Our Mission</h1>
            <h4>
              At MMAPP, we want to elevate MMA to the highest level, by enabling Federations to quickly and effortlessly transition to the digital age. Our platform solves all issues Federations face in the realms of membership approval and management, as well as event scheduling. On the officiation side, we offer an unparalleled electronic scoring system that encompasses every aspect of the job, from judging fights to RecordKeeping.
              Our aim is to revolutionize MMA Judging by providing a common language and unit of measurement to officials. By providing these stepping stones, we are able to increase preciseness in discussion and debate the sport in a deeper manner, leading to game-changing improvements.
            </h4>
          </div>
        </section>

        <section id="FAQSupport" className="homePageSection">
          <h1>FAQs/Support</h1>
          <h5>
            Ask us anything. We&apos;re here to help.
          </h5>
        </section>

        <section id="ContactUs" className="mb-12">
          <h1 className="text-center py-14 md:py-20 lg:py-24 xl:py-32 text-3xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl">
            Contact Us
          </h1>
          <ContactUs id={ContactUs} className=""/>
        </section>
        <footer className="py-32">
          <p className="text-center font-medium">
            Powered by{' ®MMAPP '} © 2024 MMAPP. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}