import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {

  return (
    <>
      <div className="homePage">
        <div id="Home" className="homeSection">
          <div className="homeBackground">
            <img src="/images/33498201.webp" alt="Fighters getting ready to fight"/>
          </div>
          <div className="homeMain">
            <img src="/images/logo_on_black.svg" alt="MMAPP Logo" />
            <h2>Mapping MMA</h2>
          </div>
        </div>

        <section id="Features" className="">
          <h1>Features</h1>
          <div id="featuresDashboard" className="featuresDashboard">
            <h2>Federations (Dashboard)</h2>
            <br/>
            <h4>Overview of Federation Affairs</h4>
            <h4>Visual Reports with Actionable Insights</h4>
            <h4>Easy Form Management</h4>
            <h4>Seamless Sign-up process for all your members<br/>(Officials, Athletes, Coaches, Promoters and Clubs)</h4>
            <h4>Intuitive Member Management</h4>
            <br/>
          </div>
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

        <section id="Benefits" className="">
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
            <p>When registered to your Federation, you are automatically added to the country's roster, at the disposal of all national promoters</p>
          </div>
          <div id="benefitsCoaches" className="benefitsCoaches">
            <h2>Coaches</h2>
            <br/>
            <h4>Smooth Experience for Membership Maintenance</h4>
            <p>Easily keep your profile always up-to-date, with reminders of expiration dates for documents</p>
            <h4>Manage multiple athletes associated with you</h4>
            <p>Change Federation Information, Upload documents and much more on behalf of your associated athletes, ensuring they're always eligible for competition</p>
            <h4>Make your athletes instantly available to national promoters</h4>
            <p>When registered to the Federation, your atheltes are automatically added to the country's roster, at the disposal of all national promoters</p>
          </div>
          <div id="benefitsClubs" className="benefitsClubs">
            <h2>Clubs</h2>
            <br/>
            <h4>Manage multiple athletes associated with you</h4>
            <p>Change Federation Information, Upload documents and much more on behalf of your associated athletes, ensuring they're always eligible for competition</p>
            <h4>Smooth Experience for Membership Maintenance</h4>
            <p>Sign-up once, and keep your documents up to date with reminders of their expiration to stay registered</p>
            <h4>Make your athletes instantly available to national promoters</h4>
            <p>When registered to the Federation, your atheltes are automatically added to the country's roster, at the disposal of all national promoters</p>
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
        </section>

        <section id="Ourmission" className="">
          <div>
            <h1>Our Mission</h1>
            <h4>
              At MMAPP, we want to elevate MMA to the highest level, by enabling Federations to quickly and effortlessly transition to the digital age. Our platform solves all issues Federations face in the realms of membership approval and management, as well as event scheduling. On the officiation side, we offer an unparalleled electronic scoring system that encompasses every aspect of the job, from judging fights to RecordKeeping.
              Our aim is to revolutionize MMA Judging by providing a common language and unit of measurement to officials. By providing these stepping stones, we are able to increase preciseness in discussion and debate the sport in a deeper manner, leading to game-changing improvements.
            </h4>
          </div>
        </section>

        <section id="FAQSupport" className="">
          <div>
            <h1>FAQs/Support</h1>
            <h5>
              Ask us anything. We're here to help.
            </h5>
          </div>
        </section>

        <section id="ContactUs" className="">
          <div>
            <h1>Contact Us</h1>
            <h5>
              Get in touch already. We're waiting for you.
            </h5>
          </div>
        </section>
      </div>
    </>
  );
}