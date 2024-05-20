'use client';
import { useRef } from 'react';
import { useAppContext } from '@/lib/contexts/AppContext';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const PrivacyPolicy = () => {
  const { smoother } = useAppContext();

  useGSAP(() => {
    const checkAllConditionsReady = setInterval(() => {
      if (smoother?.current && typeof smoother.current.offset === "function" && typeof smoother.current.scrollTo === "function") {
        clearInterval(checkAllConditionsReady);

        const policiesLinks = document.querySelectorAll(".policiesLink") as NodeListOf<HTMLAnchorElement>;

        console.log(policiesLinks);
        policiesLinks.forEach((link: HTMLAnchorElement) => {
          link.addEventListener("click", (e: MouseEvent) => {
            e.preventDefault(); // Prevent the default link behavior
            const href = link.getAttribute('href'); // Get the href attribute from the link
            console.log(href);
        
            gsap.to(smoother.current!, {
              // don't let it go beyond the maximum scrollable area
              scrollTop: Math.min(
                ScrollTrigger.maxScroll(window),
                smoother.current?.offset(href, "top 50px") || 0
              ),
              duration: 0.5,
            });
          });
        });
      }
    }, 100);
  });

  return (
    <>
      <section id="PrivacyPolicy" className="flex flex-col items-center justify-center text-left w-full h-full py-32 md:py-40 lg:py-40 bg-[var(--background-grey)]">
        <div className="policiesPage">
        <h4 className="text-center mb-2 tracking-tight">PRIVACY POLICY</h4>
        <h6 className="text-center mb-12">Last updated October 09, 2023</h6>
<div><span data-custom-class="body_text">This privacy notice for MMAPP Technologies, Unipessoal Lda. (doing business as MMAPP) (&apos;<strong>we</strong>&apos;, &apos;<strong>us</strong>&apos;, or &apos;<strong>our</strong>&apos;</span><span data-custom-class="body_text">), describes how and why we might collect, store, use, and/or share (&apos;<strong>process</strong>&apos;) your information when you use our services (&apos;<strong>Services</strong>&apos;), such as when you:</span></div>
<ul>
<li><span data-custom-class="body_text">Visit our website at <a href="https://www.mmapp.app/" target="_blank" data-custom-class="link">https://www.mmapp.app</a><span data-custom-class="body_text">, or any website of ours that links to this privacy notice</span></span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Download and use our mobile application (MMAPP Judge)<span data-custom-class="body_text"><span data-custom-class="body_text">,</span></span></span><span data-custom-class="body_text"><span data-custom-class="body_text"> or any other application of ours that links to this privacy notice</span></span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Engage with us in other related ways, including any sales, marketing, or events</span></li>
</ul>
<div><span data-custom-class="body_text"><strong>Questions or concerns? </strong>Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at privacy@mmapptech.com.</span></div>
<div><strong><span data-custom-class="heading_1">SUMMARY OF KEY POINTS</span></strong></div>
<div><span data-custom-class="body_text"><strong><em>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our </em></strong></span><a className="policiesLink" href="#toc" data-custom-class="link"><span data-custom-class="body_text"><strong><em>table of contents</em></strong></span></a><span data-custom-class="body_text"><strong><em> below to find the section you are looking for.</em></strong></span></div>
<div><span data-custom-class="body_text"><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about </span><a className="policiesLink" href="#personalinfo" data-custom-class="link"><span data-custom-class="body_text">personal information you disclose to us</span></a><span data-custom-class="body_text">.</span></div>
<div><span data-custom-class="body_text"><strong>Do we process any sensitive personal information?</strong> We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law. Learn more about </span><a className="policiesLink" href="#sensitiveinfo" data-custom-class="link"><span data-custom-class="body_text">sensitive information we process</span></a><span data-custom-class="body_text">.</span></div>
<div><span data-custom-class="body_text"><strong>Do we receive any information from third parties?</strong> We do not receive any information from third parties.</span></div>
<div><span data-custom-class="body_text"><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about </span><a className="policiesLink" href="#infouse" data-custom-class="link"><span data-custom-class="body_text">how we process your information</span></a><span data-custom-class="body_text">.</span></div>
<div><span data-custom-class="body_text"><strong>In what situations and with which types of parties do we share personal information?</strong> We may share information in specific situations and with specific categories of third parties. Learn more about </span><a className="policiesLink" href="#whoshare" data-custom-class="link"><span data-custom-class="body_text">when and with whom we share your personal information</span></a><span data-custom-class="body_text">.</span></div>
<div><span data-custom-class="body_text"><strong>How do we keep your information safe?</strong> We have organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about </span><a className="policiesLink" href="#infosafe" data-custom-class="link"><span data-custom-class="body_text">how we keep your information safe</span></a><span data-custom-class="body_text">.</span></div>
<div><span data-custom-class="body_text"><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about </span><a className="policiesLink" href="#privacyrights" data-custom-class="link"><span data-custom-class="body_text">your privacy rights</span></a><span data-custom-class="body_text">.</span></div>
<div><span data-custom-class="body_text"><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by visiting <a href="https://dashboard.mmapp.app/" target="_blank" data-custom-class="link">https://dashboard.mmapp.app</a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</span></div>
<div><span data-custom-class="body_text">Want to learn more about what we do with any information we collect? </span><a className="policiesLink" href="#toc" data-custom-class="link"><span data-custom-class="body_text">Review the privacy notice in full</span></a><span data-custom-class="body_text">.</span></div>
<div id="toc"><strong><span data-custom-class="heading_1">TABLE OF CONTENTS</span></strong></div>
<div><a className="policiesLink" href="#infocollect" data-custom-class="link">1. WHAT INFORMATION DO WE COLLECT?</a></div>
<div><a className="policiesLink" href="#infouse" data-custom-class="link">2. HOW DO WE PROCESS YOUR INFORMATION?</a></div>
<div><a className="policiesLink" href="#legalbases" data-custom-class="link">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</a></div>
<div><a className="policiesLink" href="#whoshare" data-custom-class="link">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></div>
<div><a className="policiesLink" href="#cookies" data-custom-class="link">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a></div>
<div><a className="policiesLink" href="#sociallogins" data-custom-class="link">6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a></div>
<div><a className="policiesLink" href="#intltransfers" data-custom-class="link">7. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</a></div>
<div><a className="policiesLink" href="#inforetain" data-custom-class="link">8. HOW LONG DO WE KEEP YOUR INFORMATION?</a></div>
<div><a className="policiesLink" href="#infosafe" data-custom-class="link">9. HOW DO WE KEEP YOUR INFORMATION SAFE?</a></div>
<div><a className="policiesLink" href="#privacyrights" data-custom-class="link">10. WHAT ARE YOUR PRIVACY RIGHTS?</a></div>
<div><a className="policiesLink" href="#DNT" data-custom-class="link">11. CONTROLS FOR DO-NOT-TRACK FEATURES</a></div>
<div><a className="policiesLink" href="#uslaws" data-custom-class="link">12. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a></div>
<div><a className="policiesLink" href="#otherlaws" data-custom-class="link">13. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</a></div>
<div><a className="policiesLink" href="#policyupdates" data-custom-class="link">14. DO WE MAKE UPDATES TO THIS NOTICE?</a></div>
<div><a className="policiesLink" href="#contact" data-custom-class="link">15. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></div>
<div><a className="policiesLink" href="#request" data-custom-class="link">16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></div>
<div id="infocollect"><span id="control"><strong><span data-custom-class="heading_1">1. WHAT INFORMATION DO WE COLLECT?</span></strong></span></div>
<div id="personalinfo"><span data-custom-class="heading_2"><strong>Personal information you disclose to us</strong></span></div>
<div>
<div><span data-custom-class="body_text"><span data-custom-class="body_text"><strong><em>In Short:</em></strong></span></span><span data-custom-class="body_text"><span data-custom-class="body_text"><em>We collect personal information that you provide to us.</em></span></span></div>
</div>
<div><span data-custom-class="body_text">We collect personal information that you voluntarily provide to us when you register on the Services, </span><span data-custom-class="body_text">express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</span></div>
<div><span data-custom-class="body_text"><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</span></div>
<ul>
<li><span data-custom-class="body_text"><span data-custom-class="body_text">names</span></span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><span data-custom-class="body_text">phone numbers</span></span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><span data-custom-class="body_text">email addresses</span></span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><span data-custom-class="body_text">mailing addresses</span></span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><span data-custom-class="body_text">usernames</span></span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><span data-custom-class="body_text">passwords</span></span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><span data-custom-class="body_text">contact preferences</span></span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><span data-custom-class="body_text">contact or authentication data</span></span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><span data-custom-class="body_text">billing addresses</span></span></li>
</ul>
<div id="sensitiveinfo"><span data-custom-class="body_text"><strong>Sensitive Information.</strong> When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:</span></div>
<ul>
<li><span data-custom-class="body_text">health data</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">social security numbers or other government identifiers</span></li>
</ul>
<div><span data-custom-class="body_text"><strong>Social Media Login Data. </strong>We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter, or other social media account. If you choose to register in this way, we will collect the information described in the section called &apos;<span data-custom-class="body_text"><a className="policiesLink" href="#sociallogins" data-custom-class="link">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a></span>&apos; below.</span></div>
<div><span data-custom-class="body_text"><strong>Application Data.</strong> If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:</span>
<ul>
<li><span data-custom-class="body_text"><em>Mobile Device Access.</em> We may request access or permission to certain features from your mobile device, including your mobile device&apos;s bluetooth, storage, wi-fi, networking capabilities, and other features. If you wish to change our access or permissions, you may do so in your device&apos;s settings.</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><em>Mobile Device Data.</em> We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device&rsquo;s operating system or platform, the type of mobile device you use, your mobile device&rsquo;s unique device ID, and information about the features of our application(s) you accessed.</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><em>Push Notifications.</em> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device&apos;s settings.</span></li>
</ul>
<div><span data-custom-class="body_text">This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.</span></div>
<div><span data-custom-class="body_text">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</span></div>
<div><span data-custom-class="heading_2"><strong>Information automatically collected</strong></span></div>
<div>
<div><span data-custom-class="body_text"><span data-custom-class="body_text"><strong><em>In Short:</em></strong></span></span><span data-custom-class="body_text"><span data-custom-class="body_text"><em>Some information &mdash; such as your Internet Protocol (IP) address and/or browser and device characteristics &mdash; is collected automatically when you visit our Services.</em></span></span></div>
</div>
<div><span data-custom-class="body_text">We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</span></div>
<div><span data-custom-class="body_text">Like many businesses, we also collect information through cookies and similar technologies.</span></div>
<div><span data-custom-class="body_text">The information we collect includes:</span></div>
<ul>
<li><span data-custom-class="body_text"><em>Log and Usage Data.</em> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called &apos;crash dumps&apos;), and hardware settings).</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><em>Device Data.</em> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><em>Location Data.</em> We collect location data such as information about your device&apos;s location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</span></li>
</ul>
<div id="infouse"><span id="control"><strong><span data-custom-class="heading_1">2. HOW DO WE PROCESS YOUR INFORMATION?</span></strong></span></div>
<div>
<div><span data-custom-class="body_text"><span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</em></span></span></div>
</div>
<div><span data-custom-class="body_text"><strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong></span></div>
<ul>
<li><span data-custom-class="body_text"><strong>To facilitate account creation and authentication and otherwise manage user accounts. </strong>We may process your information so you can create and log in to your account, as well as keep your account in working order.</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><strong>To deliver and facilitate delivery of services to the user. </strong>We may process your information to provide you with the requested service.</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><strong>To send administrative information to you. </strong>We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><strong>To fulfil and manage your orders.</strong> We may process your information to fulfil and manage your orders, payments, returns, and exchanges made through the Services.</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><strong>To request feedback. </strong>We may process your information when necessary to request feedback and to contact you about your use of our Services.</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><strong>To send you marketing and promotional communications. </strong>We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see &apos;</span><a className="policiesLink" href="#privacyrights" data-custom-class="link"><span data-custom-class="body_text">WHAT ARE YOUR PRIVACY RIGHTS?</span></a><span data-custom-class="body_text">&apos; below.</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><strong>To protect our Services.</strong> We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><strong>To identify usage trends.</strong> We may process information about how you use our Services to better understand how they are being used so we can improve them.</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><strong>To save or protect an individual&apos;s vital interest.</strong> We may process your information when necessary to save or protect an individual&rsquo;s vital interest, such as to prevent harm.</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><strong>To officialise competition results</strong><strong>.</strong> We may process your information to officiliase the results of competitions and/or events you participated in.</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><strong>__________</strong><strong>.</strong> __________</span></li>
</ul>
<div id="legalbases"><strong><span data-custom-class="heading_1">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</span></strong></div>
<div><em><span data-custom-class="body_text"><strong>In Short: </strong>We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil our legitimate business interests.</span></em></div>
<div><em><span data-custom-class="body_text"><strong><u>If you are located in the EU or UK, this section applies to you.</u></strong></span></em></div>
<div><span data-custom-class="body_text">The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</span></div>
<ul>
<li><span data-custom-class="body_text"><strong>Consent. </strong>We may process your information if you have given us permission (i.e. consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about </span><a className="policiesLink" href="#withdrawconsent" data-custom-class="link"><span data-custom-class="body_text">withdrawing your consent</span></a><span data-custom-class="body_text">.</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><strong>Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to fulfil our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><strong>Legitimate Interests.</strong> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to:</span></li>
</ul>

<div className="pl-12 py-0">
<ul>
<li><span data-custom-class="body_text">Send users information about special offers and discounts on our products and services</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Analyse how our Services are used so we can improve them to engage and retain users</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Diagnose problems and/or prevent fraudulent activities</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Understand how our users use our products and services so we can improve user experience</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">In order to officialize the outcome of competitions</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">__________</span></li>
</ul>
</div>
<ul>
<li><span data-custom-class="body_text"><strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.<br /></span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</span></li>
</ul>
<div>
<div>
<div><span data-custom-class="body_text"><strong><u><em>If you are located in Canada, this section applies to you.</em></u></strong></span></div>
<div><span data-custom-class="body_text">We may process your information if you have given us specific permission (i.e. express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e. implied consent). You can </span><a className="policiesLink" href="#withdrawconsent" data-custom-class="link"><span data-custom-class="body_text">withdraw your consent</span></a><span data-custom-class="body_text"> at any time.</span></div>
<div><span data-custom-class="body_text">In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</span></div>
<ul>
<li><span data-custom-class="body_text">If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">For investigations and fraud detection and prevention</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">For business transactions provided certain conditions are met</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">For identifying injured, ill, or deceased persons and communicating with next of kin</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">If the collection is solely for journalistic, artistic, or literary purposes</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">If the information is publicly available and is specified by the regulations</span></li>
</ul>
<div id="whoshare"><span id="control"><strong><span data-custom-class="heading_1">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</span></strong></span></div>
<div><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We may share information in specific situations described in this section and/or with the following categories of third parties.</em></span></div>
<div><span data-custom-class="body_text"><strong>Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors, or agents (&apos;<strong>third parties</strong>&apos;) who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organisation apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct. The categories of third parties we may share personal information with are as follows:</span></div>
<ul>
<li><span data-custom-class="body_text">Government Entities</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Data Analytics Services</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Testing Tools</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Website Hosting Service Providers</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Cloud Computing Services</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Performance Monitoring Tools</span></li>
</ul>
<div><span data-custom-class="body_text">We also may need to share your personal information in the following situations:</span></div>
<ul>
<li><span data-custom-class="body_text"><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><strong>Affiliates. </strong>We may share your information with our affiliates, in which case we will require those affiliates to honour this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text"><strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</span></li>
</ul>
<div id="cookies"><span id="control"><strong><span data-custom-class="heading_1">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</span></strong></span></div>
<div><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We may use cookies and other tracking technologies to collect and store your information.</em></span></div>
<div><span data-custom-class="body_text">We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice<span data-custom-class="body_text">.</span></span></div>
<div id="sociallogins"><span id="control"><strong><span data-custom-class="heading_1">6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</span></strong></span></div>
<div><span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.</em></span></div>
<div><span data-custom-class="body_text">Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.</span></div>
<div><span data-custom-class="body_text">We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.</span></div>
<div id="intltransfers"><span id="control"><strong><span data-custom-class="heading_1">7. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</span></strong></span></div>
<div><span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>We may transfer, store, and process your information in countries other than your own.</em></span></div>
<div data-custom-class="body_text"><span data-custom-class="body_text">Our servers are located in<span data-custom-class="body_text"><span data-custom-class="body_text"><span data-custom-class="body_text"> France</span></span></span><span data-custom-class="body_text">. If you are accessing our Services from outside</span><span data-custom-class="body_text"><span data-custom-class="body_text"><span data-custom-class="body_text"><span data-custom-class="body_text"> France</span></span></span></span><span data-custom-class="body_text">, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information (see &apos;</span><a className="policiesLink" href="#whoshare" data-custom-class="link">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a><span data-custom-class="body_text">&apos; above), in</span><span data-custom-class="body_text"> and other countries.</span></span></div>
<div><span data-custom-class="body_text">If you are a resident in the European Economic Area (EEA), United Kingdom (UK), or Switzerland, then these countries may not necessarily have data protection laws or other similar laws as comprehensive as those in your country. However, we will take all necessary measures to protect your personal information in accordance with this privacy notice and applicable law.</span></div>
<div><span data-custom-class="body_text">European Commission&apos;s Standard Contractual Clauses:</span></div>
<div><span data-custom-class="body_text">We have implemented measures to protect your personal information, including by using the European Commission&apos;s Standard Contractual Clauses for transfers of personal information between our group companies and between us and our third-party providers. These clauses require all recipients to protect all personal information that they process originating from the EEA or UK in accordance with European data protection laws and regulations. Our Standard Contractual Clauses can be provided upon request. We have implemented similar appropriate safeguards with our third-party service providers and partners and further details can be provided upon request.</span></div>
<div id="inforetain"><span id="control"><strong><span data-custom-class="heading_1">8. HOW LONG DO WE KEEP YOUR INFORMATION?</span></strong></span></div>
<div><span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>We keep your information for as long as necessary to fulfil the purposes outlined in this privacy notice unless otherwise required by law.</em></span></div>
<div><span data-custom-class="body_text">We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than eighteen (18) months past the termination of the user&apos;s account.</span></div>
<div><span data-custom-class="body_text">When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</span></div>
<div id="infosafe"><span id="control"><strong><span data-custom-class="heading_1">9. HOW DO WE KEEP YOUR INFORMATION SAFE?</span></strong></span></div>
<div><span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>We aim to protect your personal information through a system of organisational and technical security measures.</em></span></div>
<div><span data-custom-class="body_text">We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</span></div>
<div id="privacyrights"><span id="control"><strong><span data-custom-class="heading_1">10. WHAT ARE YOUR PRIVACY RIGHTS?</span></strong></span></div>
<div><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> In some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</em></span></div>
<div><span data-custom-class="body_text">In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section &apos;</span><a className="policiesLink" href="#contact" data-custom-class="link"><span data-custom-class="body_text">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></a><span data-custom-class="body_text">&apos; below.</span></div>
<div><span data-custom-class="body_text">We will consider and act upon any request in accordance with applicable data protection laws.</span></div>
<div><span data-custom-class="body_text">If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your <span data-custom-class="body_text"><span data-custom-class="body_text"><a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" target="_blank" rel="noopener noreferrer" data-custom-class="link">Member State data protection authority</a></span></span> or </span><a href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/" target="_blank" rel="noopener noreferrer" data-custom-class="link"><span data-custom-class="body_text">UK data protection authority</span></a><span data-custom-class="body_text">.</span></div>
<div><span data-custom-class="body_text">If you are located in Switzerland, you may contact the <span data-custom-class="body_text"><span data-custom-class="body_text"><a href="https://www.edoeb.admin.ch/edoeb/en/home.html" target="_blank" rel="noopener noreferrer" data-custom-class="link">Federal Data Protection and Information Commissioner</a></span></span>.</span></div>
<div id="withdrawconsent"><span data-custom-class="body_text"><strong><u>Withdrawing your consent:</u></strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section &apos;</span><a className="policiesLink" href="#contact" data-custom-class="link"><span data-custom-class="body_text">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></a><span data-custom-class="body_text">&apos; below or updating your preferences.</span></div>
<div><span data-custom-class="body_text">However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</span></div>
<div><span data-custom-class="body_text"><strong><u>Opting out of marketing and promotional communications:</u></strong>You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section &apos;</span><a className="policiesLink" href="#contact" data-custom-class="link"><span data-custom-class="body_text">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></a><span data-custom-class="body_text">&apos; below. You will then be removed from the marketing lists. However, we may still communicate with you &mdash; for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.</span></div>
<div><span data-custom-class="heading_2"><strong>Account Information</strong></span></div>
<div><span data-custom-class="body_text">If you would at any time like to review or change the information in your account or terminate your account, you can:</span></div>
<ul>
<li><span data-custom-class="body_text">Log in to your account settings and update your user account.</span></li>
</ul>
<div><span data-custom-class="body_text">Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</span></div>
<div><span data-custom-class="body_text"><strong><u>Cookies and similar technologies:</u></strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.</span></div>
<div><span data-custom-class="body_text">If you have questions or comments about your privacy rights, you may email us at privacy@mmapptech.com.</span></div>
<div id="DNT"><span id="control"><strong><span data-custom-class="heading_1">11. CONTROLS FOR DO-NOT-TRACK FEATURES</span></strong></span></div>
<div><span data-custom-class="body_text">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (&apos;DNT&apos;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</span></div>
<div id="uslaws"><span id="control"><strong><span data-custom-class="heading_1">12. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span></strong></span></div>
<div><span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>If you are a resident of California, Colorado, Connecticut, Virginia or Utah, you are granted specific rights regarding access to your personal information.</em></span></div>
<div><span data-custom-class="body_text"><strong>What categories of personal information do we collect?</strong></span></div>
<div><span data-custom-class="body_text">We have collected the following categories of personal information in the past twelve (12) months:</span></div>
<table>
<tbody>
<tr>
<td><span data-custom-class="body_text"><strong>Category</strong></span></td>
<td><span data-custom-class="body_text"><strong>Examples</strong></span></td>
<td><span data-custom-class="body_text"><strong>Collected</strong></span></td>
</tr>
<tr>
<td>
<div><span data-custom-class="body_text">A. Identifiers</span></div>
</td>
<td>
<div><span data-custom-class="body_text">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</span></div>
</td>
<td>
<div><span data-custom-class="body_text">YES</span></div>
</td>
</tr>
<tr>
<td>
<div><span data-custom-class="body_text">B. Personal information as defined in the California Customer Records statute</span></div>
</td>
<td>
<div><span data-custom-class="body_text">Name, contact information, education, employment, employment history, and financial information</span></div>
</td>
<td>
<div><span data-custom-class="body_text">YES</span></div>
</td>
</tr>
<tr>
<td>
<div><span data-custom-class="body_text">C. Protected classification characteristics under state or federal law</span></div>
</td>
<td>
<div><span data-custom-class="body_text">Gender and date of birth</span></div>
</td>
<td>
<div data-custom-class="body_text"><span data-custom-class="body_text">YES</span></div>
</td>
</tr>
<tr>
<td>
<div><span data-custom-class="body_text">D. Commercial information</span></div>
</td>
<td>
<div><span data-custom-class="body_text">Transaction information, purchase history, financial details, and payment information</span></div>
</td>
<td>
<div data-custom-class="body_text">NO</div>
</td>
</tr>
<tr>
<td>
<div><span data-custom-class="body_text">E. Biometric information</span></div>
</td>
<td>
<div><span data-custom-class="body_text">Fingerprints and voiceprints</span></div>
</td>
<td>
<div data-custom-class="body_text"><span data-custom-class="body_text">YES</span></div>
</td>
</tr>
<tr>
<td>
<div><span data-custom-class="body_text">F. Internet or other similar network activity</span></div>
</td>
<td>
<div><span data-custom-class="body_text">Browsing history, search history, online behaviour, interest data, and interactions with our and other websites, applications, systems, and advertisements</span></div>
</td>
<td>
<div data-custom-class="body_text"><span data-custom-class="body_text">NO</span></div>
</td>
</tr>
<tr>
<td>
<div><span data-custom-class="body_text">G. Geolocation data</span></div>
</td>
<td>
<div><span data-custom-class="body_text">Device location</span></div>
</td>
<td>
<div data-custom-class="body_text"><span data-custom-class="body_text">YES</span></div>
</td>
</tr>
<tr>
<td>
<div><span data-custom-class="body_text">H. Audio, electronic, visual, thermal, olfactory, or similar information</span></div>
</td>
<td>
<div><span data-custom-class="body_text">Images and audio, video or call recordings created in connection with our business activities</span></div>
</td>
<td>
<div data-custom-class="body_text"><span data-custom-class="body_text">NO</span></div>
</td>
</tr>
<tr>
<td>
<div><span data-custom-class="body_text">I. Professional or employment-related information</span></div>
</td>
<td>
<div><span data-custom-class="body_text">Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</span></div>
</td>
<td>
<div data-custom-class="body_text"><span data-custom-class="body_text">YES</span></div>
</td>
</tr>
<tr>
<td>
<div><span data-custom-class="body_text">J. Education Information</span></div>
</td>
<td>
<div><span data-custom-class="body_text">Student records and directory information</span></div>
</td>
<td>
<div data-custom-class="body_text"><span data-custom-class="body_text">NO</span></div>
</td>
</tr>
<tr>
<td>
<div><span data-custom-class="body_text">K. Inferences drawn from collected personal information</span></div>
</td>
<td>
<div><span data-custom-class="body_text">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual&rsquo;s preferences and characteristics</span></div>
</td>
<td>
<div data-custom-class="body_text"><span data-custom-class="body_text">NO</span></div>
</td>
</tr>
<tr>
<td><span data-custom-class="body_text">L. Sensitive personal Information</span></td>
<td><span data-custom-class="body_text">State ID card numbers, personal data from a known child, passport numbers, account login information, biometric data and citizenship or immigration status</span></td>
<td>
<div data-custom-class="body_text" data-empty="true"><span data-custom-class="body_text">YES</span></div>
</td>
</tr>
</tbody>
</table>
<div><span data-custom-class="body_text">We will use and retain the collected personal information as needed to provide the Services or for:</span></div>
<ul>
<li><span data-custom-class="body_text">Category A - 18 months after user terminates their account.</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Category B - 18 months after the user&apos;s account is terminated</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Category C - 18 months after user terminates their account.</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Category E - 18 months after user terminates their account.</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Category G - 6 months</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Category I - 18 months after user terminates their account.</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Category L - 18 months after the user&apos;s account is terminated</span></li>
</ul>
<div>
<div><span data-custom-class="body_text">Category L information may be used, or disclosed to a service provider or contractor, for additional, specified purposes. You have the right to limit the use or disclosure of your sensitive personal information.</span></div>
<div><span data-custom-class="body_text">We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:</span></div>
<ul>
<li><span data-custom-class="body_text">Receiving help through our customer support channels;</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Participation in customer surveys or contests; and</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Facilitation in the delivery of our Services and to respond to your inquiries.</span></li>
</ul>
<div><span data-custom-class="body_text"><strong>How do we use and share your personal information?</strong></span></div>
<div><span data-custom-class="body_text">Learn about how we use your personal information in the section, &apos;</span><a className="policiesLink" href="#infouse" data-custom-class="link">HOW DO WE PROCESS YOUR INFORMATION?</a><span data-custom-class="body_text">&apos;</span></div>
<div><span data-custom-class="body_text"><strong>Will your information be shared with anyone else?</strong></span></div>
<div><span data-custom-class="body_text">We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, &apos;</span><a className="policiesLink" href="#whoshare" data-custom-class="link">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a><span data-custom-class="body_text">&apos;</span></div>
<div><span data-custom-class="body_text">We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be &apos;selling&apos; of your personal information.</span></div>
<div><span data-custom-class="body_text">We have disclosed the following categories of personal information to third parties for a business or commercial purpose in the preceding twelve (12) months:</span></div>
<ul>
<li><span data-custom-class="body_text">Category A. Identifiers</span></li>
</ul>
<ul>
<li>
<p><span data-custom-class="body_text">Category B. Personal information as defined in the California Customer Records law</span></p>
</li>
</ul>
<ul>
<li><span data-custom-class="body_text">Category C. Characteristics of protected classifications under state or federal law</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Category E. Biometric information</span></li>
</ul>
<div>
<ul>
<li><span data-custom-class="body_text">Category G. Geolocation data</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Category I. Professional or employment-related information</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Category L. Sensitive personal information</span></li>
</ul>
<div>
<div><span data-custom-class="body_text">The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under &apos;<a className="policiesLink" href="#whoshare" data-custom-class="link">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a><span data-custom-class="body_text">&apos;</span></span></div>
<div><span data-custom-class="body_text">We have sold or shared the following categories of personal information to third parties in the preceding twelve (12) months:</span>
<div>
<div><span data-custom-class="body_text">The categories of third parties to whom we sold personal information are:</span></div>
<div><strong><span data-custom-class="heading_2">California Residents</span></strong></div>
<div><span data-custom-class="body_text">California Civil Code Section 1798.83, also known as the &apos;Shine The Light&apos; law permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</span></div>
<div><span data-custom-class="body_text">If you are under 18 years of age, reside in California, and have a registered account with the Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. backups, etc.).</span></div>
<div><span data-custom-class="body_text"><strong><u>CCPA Privacy Notice</u></strong></span></div>
<div><span data-custom-class="body_text">This section applies only to California residents. Under the California Consumer Privacy Act (CCPA), you have the rights listed below.</span></div>
<div><span data-custom-class="body_text">The California Code of Regulations defines a &apos;residents&apos; as:</span></div>
<div><span data-custom-class="body_text">(1) every individual who is in the State of California for other than a temporary or transitory purpose and</span></div>
<div><span data-custom-class="body_text">(2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</span></div>
<div><span data-custom-class="body_text">All other individuals are defined as &apos;non-residents&apos;.</span></div>
<div><span data-custom-class="body_text">If this definition of &apos;resident&apos; applies to you, we must adhere to certain rights and obligations regarding your personal information.</span></div>
<div><span data-custom-class="body_text"><strong>Your rights with respect to your personal data</strong></span></div>
<div><span data-custom-class="body_text"><u>Right to request deletion of the data &mdash; Request to delete</u></span></div>
<div><span data-custom-class="body_text">You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.</span></div>
<div><span data-custom-class="body_text"><u>Right to be informed &mdash; Request to know</u></span></div>
<div><span data-custom-class="body_text">Depending on the circumstances, you have a right to know:</span></div>
<ul>
<li><span data-custom-class="body_text">whether we collect and use your personal information;</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">the categories of personal information that we collect;</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">the purposes for which the collected personal information is used;</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">whether we sell or share personal information to third parties;</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">the categories of personal information that we sold, shared, or disclosed for a business purpose;</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">the categories of third parties to whom the personal information was sold, shared, or disclosed for a business purpose;</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">the business or commercial purpose for collecting, selling, or sharing personal information; and</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">the specific pieces of personal information we collected about you.</span></li>
</ul>
<div><span data-custom-class="body_text">In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.</span></div>
<div><span data-custom-class="body_text"><u>Right to Non-Discrimination for the Exercise of a Consumer&rsquo;s Privacy Rights</u></span></div>
<div><span data-custom-class="body_text">We will not discriminate against you if you exercise your privacy rights.</span></div>
<div><u><span data-custom-class="body_text">Right to Limit Use and Disclosure of Sensitive Personal Information</span></u></div>
<div><span data-custom-class="body_text">If the business collects any of the following:</span></div>
<ul>
<li><span data-custom-class="body_text">social security information, drivers&apos; licenses, state ID cards, passport numbers</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">account login information</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">credit card numbers, financial account information, or credentials allowing access to such accounts</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">precise geolocation</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">racial or ethnic origin, religious or philosophical beliefs, union membership</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">the contents of email and text, unless the business is the intended recipient of the communication</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">genetic data, biometric data, and health data</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">data concerning sexual orientation and sex life</span></li>
</ul>
<div><span data-custom-class="body_text">you have the right to direct that business to limit its use of your sensitive personal information to that use which is necessary to perform the Services.</span></div>
<div><span data-custom-class="body_text">Once a business receives your request, they are no longer allowed to use or disclose your sensitive personal information for any other purpose unless you provide consent for the use or disclosure of sensitive personal information for additional purposes.</span></div>
<div><span data-custom-class="body_text">Please note that sensitive personal information that is collected or processed without the purpose of inferring characteristics about a consumer is not covered by this right, as well as the publicly available information.</span></div>
<div><span data-custom-class="body_text">To exercise your right to limit use and disclosure of sensitive personal information, please email privacy@mmapptech.com or visit: <a href="https://dashboard.mmapp.app/" target="_blank" data-custom-class="link">https://dashboard.mmapp.app</a>.</span></div>
<div><span data-custom-class="body_text"><u>Verification process</u></span></div>
<div><span data-custom-class="body_text">Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g. phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.</span></div>
<div><span data-custom-class="body_text">We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.</span></div>
<div><span data-custom-class="body_text"><u>Other privacy rights</u></span></div>
<ul>
<li><span data-custom-class="body_text">You may object to the processing of your personal information.</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">You can designate an authorised agent to make a request under the CCPA on your behalf. We may deny a request from an authorised agent that does not submit proof that they have been validly authorised to act on your behalf in accordance with the CCPA.</span></li>
</ul>
<div>
<div><span data-custom-class="body_text">You can opt out from the selling or sharing of your personal information by disabling cookies in Cookie Preference Settings and clicking on the Do Not Sell or Share My Personal Information link on our homepage.</span></div>
<div><span data-custom-class="body_text">To exercise these rights, you can contact us by visiting <a href="https://dashboard.mmapp.app/" target="_blank" data-custom-class="link">https://dashboard.mmapp.app</a>, </span><span data-custom-class="body_text"><span data-custom-class="body_text">by email at privacy@mmapptech.com, </span></span><span data-custom-class="body_text">or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.</span></div>
<div><strong><span data-custom-class="heading_2">Colorado Residents</span></strong></div>
<div><span data-custom-class="body_text">This section applies only to Colorado residents. Under the Colorado Privacy Act (CPA), you have the rights listed below. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law.</span></div>
<ul>
<li><span data-custom-class="body_text">Right to be informed whether or not we are processing your personal data</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Right to access your personal data</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Right to correct inaccuracies in your personal data</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Right to request deletion of your personal data</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Right to obtain a copy of the personal data you previously shared with us</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects (&apos;profiling&apos;)</span></li>
</ul>
<div data-custom-class="body_text"><span data-custom-class="body_text">We sell personal data to third parties or process personal data for targeted advertising. You can opt out from the selling of your personal data, targeted advertising, or profiling by disabling cookies in Cookie Preference Settings. To submit a request to exercise any of the other rights described above, please email privacy@mmapptech.com or visit <a href="https://dashboard.mmapp.app/" target="_blank" data-custom-class="link">https://dashboard.mmapp.app</a></span><span data-custom-class="body_text">.</span></div>
<div><span data-custom-class="body_text">If we decline to take action regarding your request and you wish to appeal our decision, please email us at privacy@mmapptech.com. Within forty-five (45) days of receipt of an appeal, we will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions.</span></div>
<div><strong><span data-custom-class="heading_2">Connecticut Residents</span></strong></div>
<div><span data-custom-class="body_text">This section applies only to Connecticut residents. Under the Connecticut Data Privacy Act (CTDPA), you have the rights listed below. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law.</span></div>
<ul>
<li><span data-custom-class="body_text">Right to be informed whether or not we are processing your personal data</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Right to access your personal data</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Right to correct inaccuracies in your personal data</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Right to request deletion of your personal data</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Right to obtain a copy of the personal data you previously shared with us</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects (&apos;profiling&apos;)</span></li>
</ul>
<div data-custom-class="body_text"><span data-custom-class="body_text">We sell personal data to third parties or process personal data for targeted advertising. You can opt out from the selling of your personal data, targeted advertising, or profiling by disabling cookies in Cookie Preference Settings. To submit a request to exercise any of the other rights described above, please email privacy@mmapptech.com or visit <a href="https://dashboard.mmapp.app/" target="_blank" data-custom-class="link">https://dashboard.mmapp.app</a>.</span></div>
<div><span data-custom-class="body_text">If we decline to take action regarding your request and you wish to appeal our decision, please email us at privacy@mmapptech.com. Within sixty (60) days of receipt of an appeal, we will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions.</span></div>
<div><strong><span data-custom-class="heading_2">Utah Residents</span></strong></div>
<div><span data-custom-class="body_text">This section applies only to Utah residents. Under the Utah Consumer Privacy Act (UCPA), you have the rights listed below. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law.</span></div>
<ul>
<li><span data-custom-class="body_text">Right to be informed whether or not we are processing your personal data</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Right to access your personal data</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Right to request deletion of your personal data</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Right to obtain a copy of the personal data you previously shared with us</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Right to opt out of the processing of your personal data if it is used for targeted advertising or the sale of personal data</span></li>
</ul>
<div data-custom-class="body_text"><span data-custom-class="body_text">We sell personal data to third parties or process personal data for targeted advertising. You can opt out from the selling of your personal data or targeted advertising by disabling cookies in Cookie Preference Settings. To submit a request to exercise any of the other rights described above, please email privacy@mmapptech.com or visit <a href="https://dashboard.mmapp.app/" target="_blank" data-custom-class="link">https://dashboard.mmapp.app</a>.</span></div>
<div><strong><span data-custom-class="heading_2">Virginia Residents</span></strong></div>
<div><span data-custom-class="body_text">Under the Virginia Consumer Data Protection Act (VCDPA):</span></div>
<div data-custom-class="body_text"><span data-custom-class="body_text">&apos;Consumer&apos; means a natural person who is a resident of the Commonwealth acting only in an individual or household context. It does not include a natural person acting in a commercial or employment context.</span></div>
<div data-custom-class="body_text"><span data-custom-class="body_text">&apos;Personal data&apos; means any information that is linked or reasonably linkable to an identified or identifiable natural person. &apos;Personal data&apos; does not include de-identified data or publicly available information.</span></div>
<div data-custom-class="body_text"><span data-custom-class="body_text">&apos;Sale of personal data&apos; means the exchange of personal data for monetary consideration.</span></div>
<div><span data-custom-class="body_text">If this definition of &apos;consumer&apos; applies to you, we must adhere to certain rights and obligations regarding your personal data.</span></div>
<div><span data-custom-class="body_text"><u>Your rights with respect to your personal data</u></span></div>
<ul>
<li><span data-custom-class="body_text">Right to be informed whether or not we are processing your personal data</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Right to access your personal data</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Right to correct inaccuracies in your personal data</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Right to request deletion of your personal data</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Right to obtain a copy of the personal data you previously shared with us</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects (&apos;profiling&apos;)</span></li>
</ul>
<div><span data-custom-class="body_text">We sell personal data to third parties or process personal data for targeted advertising. Please see the following section to find out how you can opt out from further selling or sharing of your personal data for targeted advertising or profiling purposes.</span></div>
<div><u><span data-custom-class="body_text">Exercise your rights provided under the Virginia VCDPA</span></u></div>
<div><span data-custom-class="body_text">You can opt out from the selling of your personal data, targeted advertising, or profiling by disabling cookies in Cookie Preference Settings. </span><span data-custom-class="body_text">You may contact us by email at privacy@mmapptech.com or visit <a href="https://dashboard.mmapp.app/" target="_blank" data-custom-class="link">https://dashboard.mmapp.app</a>.</span></div>
<div><span data-custom-class="body_text">If you are using an authorised agent to exercise your rights, we may deny a request if the authorised agent does not submit proof that they have been validly authorised to act on your behalf.</span></div>
<div><u><span data-custom-class="body_text">Verification process</span></u></div>
<div><span data-custom-class="body_text">We may request that you provide additional information reasonably necessary to verify you and your consumer&apos;s request. If you submit the request through an authorised agent, we may need to collect additional information to verify your identity before processing your request.</span></div>
<div><span data-custom-class="body_text">Upon receiving your request, we will respond without undue delay, but in all cases, within forty-five (45) days of receipt. The response period may be extended once by forty-five (45) additional days when reasonably necessary. We will inform you of any such extension within the initial 45-day response period, together with the reason for the extension.</span></div>
<div><span data-custom-class="body_text"><u>Right to appeal</u></span></div>
<div><span data-custom-class="body_text">If we decline to take action regarding your request, we will inform you of our decision and reasoning behind it. If you wish to appeal our decision, please email us at privacy@mmapptech.com. Within sixty (60) days of receipt of an appeal, we will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may contact the <a href="https://www.oag.state.va.us/consumer-protection/index.php/file-a-complaint" target="_blank" rel="noopener noreferrer" data-custom-class="link"><span data-custom-class="link">Attorney General to submit a complaint</span></a>.</span></div>
<div><span id="otherlaws"><strong><span data-custom-class="heading_1">13. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</span></strong></span></div>
<div><em><strong><span data-custom-class="body_text">In Short:</span></strong><span data-custom-class="body_text"> You may have additional rights based on the country you reside in.</span></em></div>
<div><span data-custom-class="heading_2"><strong>Australia</strong> <strong>and</strong> <strong>New Zealand</strong></span></div>
<div><span data-custom-class="body_text">We collect and process your personal information under the obligations and conditions set by Australia&apos;s Privacy Act 1988 and New Zealand&apos;s Privacy Act 2020 (Privacy Act).</span></div>
<div><span data-custom-class="body_text">This privacy notice satisfies the notice requirements defined in both Privacy Acts, in particular: what personal information we collect from you, from which sources, for which purposes, and other recipients of your personal information.</span></div>
<div><span data-custom-class="body_text">If you do not wish to provide the personal information necessary to fulfill their applicable purpose, it may affect our ability to provide our services, in particular:</span></div>
<ul>
<li><span data-custom-class="body_text">offer you the products or services that you want</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">respond to or help with your requests</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">manage your account with us</span></li>
</ul>
<ul>
<li><span data-custom-class="body_text">confirm your identity and protect your account</span></li>
</ul>
<div><span data-custom-class="body_text">At any time, you have the right to request access to or correction of your personal information. You can make such a request by contacting us by using the contact details provided in the section &apos;<a className="policiesLink" href="#request" data-custom-class="link"><span data-custom-class="link">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></a>&apos;</span></div>
<div>I<span data-custom-class="body_text">f you believe we are unlawfully processing your personal information, you have the right to submit a complaint about a breach of the Australian Privacy Principles to the <a href="https://www.oaic.gov.au/privacy/privacy-complaints/lodge-a-privacy-complaint-with-us" target="_blank" rel="noopener noreferrer" data-custom-class="link"><span data-custom-class="link">Office of the Australian Information Commissioner</span></a> and a breach of New Zealand&apos;s Privacy Principles to the <a href="https://www.privacy.org.nz/your-rights/making-a-complaint/" target="_blank" rel="noopener noreferrer" data-custom-class="link"><span data-custom-class="link">Office of New Zealand Privacy Commissioner</span></a>.</span></div>
<div><strong><span data-custom-class="heading_2">Republic of South Africa</span></strong></div>
<div><span data-custom-class="body_text">At any time, you have the right to request access to or correction of your personal information. You can make such a request by contacting us by using the contact details provided in the section &apos;</span><span data-custom-class="link"><a className="policiesLink" href="#request"><span data-custom-class="link">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></a></span><span data-custom-class="body_text">&apos;</span></div>
<div><span data-custom-class="body_text">If you are unsatisfied with the manner in which we address any complaint with regard to our processing of personal information, you can contact the office of the regulator, the details of which are:</span></div>
<div><a href="https://inforegulator.org.za/" target="_blank" rel="noopener noreferrer" data-custom-class="link"><span data-custom-class="body_text"><span data-custom-class="link">The Information Regulator (South Africa)</span></span></a></div>
<div><span data-custom-class="body_text">General enquiries: <a href="mailto:enquiries@inforegulator.org.za" target="_blank" rel="noopener noreferrer" data-custom-class="link"><span data-custom-class="link">enquiries@inforegulator.org.za</span></a></span></div>
<div><span data-custom-class="body_text">Complaints (complete POPIA/PAIA form 5): <a href="mailto:PAIAComplaints@inforegulator.org.za" target="_blank" rel="noopener noreferrer" data-custom-class="link"><span data-custom-class="link">PAIAComplaints@inforegulator.org.za</span></a> &amp; </span><a href="mailto:POPIAComplaints@inforegulator.org.za" target="_blank" rel="noopener noreferrer" data-custom-class="link"><span data-custom-class="body_text"><span data-custom-class="link">POPIAComplaints@inforegulator.org.za</span></span></a></div>
<div id="policyupdates"><span id="control"><strong><span data-custom-class="heading_1">14. DO WE MAKE UPDATES TO THIS NOTICE?</span></strong></span></div>
<div><span data-custom-class="body_text"><em><strong>In Short: </strong>Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></span></div>
<div><span data-custom-class="body_text">We may update this privacy notice from time to time. The updated version will be indicated by an updated &apos;Revised&apos; date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</span></div>
<div id="contact"><span id="control"><strong><span data-custom-class="heading_1">15. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></strong></span></div>
<div><span data-custom-class="body_text">If you have questions or comments about this notice, you may <span data-custom-class="body_text">email us at privacy@mmapptech.com or </span><span data-custom-class="body_text">contact us by post at:</span></span></div>
<div><span data-custom-class="body_text"><span data-custom-class="body_text">MMAPP Technologies, Unipessoal Lda.</span></span></div>
<div><span data-custom-class="body_text">Avenida da Rep&uacute;blica, 861, Bloco D, 3&ordm; Dto.</span></div>
<div><span data-custom-class="body_text">Bloco D, 3&ordm; Dto.</span></div>
<div><span data-custom-class="body_text">Parede, Lisbon 2775-274</span></div>
<div><span data-custom-class="body_text">Portugal</span></div>
<div id="request"><span id="control"><strong><span data-custom-class="heading_1">16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></strong></span></div>
<div><span data-custom-class="body_text">Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please </span><span data-custom-class="body_text">visit: <a href="https://dashboard.mmapp.app/" target="_blank" data-custom-class="link">https://dashboard.mmapp.app</a></span><span data-custom-class="body_text">.</span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

      </section>
    </>
  )
};

export default PrivacyPolicy;
