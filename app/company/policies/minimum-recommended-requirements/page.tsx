"use client";
import PagesTransitionScroll from '@/lib/contexts/PagesTransitionScroll';

const MinimumRecommendedRequirements = () => {

  return (
    <>
    <PagesTransitionScroll />
      <section id="MinimumRecommendedRequirements" className="relative flex justify-center w-full h-full py-24 md:py-36 lg:py-44 bg-[var(--background-grey)]">
        <div className="policiesPage">
          <h4 className="text-center mb-2 tracking-tight">Minimum and Recommended Requirements</h4>
          <h6 className="text-center mb-8 md:mb-12 lg:mb-16">Last updated December 05, 2023</h6>
          <div>
            <strong><span data-custom-class="heading_1">Connection Requirements:</span></strong>
            <div data-custom-class="body_text">
            An Internet Connection is required to access the Dashboard and make any last-minute changes to events.
            To connect the devices between themselves during an event, a Wi-Fi network must be available. It is recommended to have your own private Wi-Fi network. This can be through a router at the venue, a router of your own, or you can use the tablet to create a Wi-Fi hotspot..
            </div>
            <div>
              <table id="minimumRequirements" className="max-w-[1040px]">
                <tbody>

                <tr>
                <td><div><span data-custom-class="body_text"><strong>Minimum Specs</strong></span></div></td>
                <td><div><span data-custom-class="body_text"><strong>Recommended Specs</strong></span></div></td>
                </tr>

                <tr>
                <td><div><span data-custom-class="body_text">Web Dashboard</span></div></td>
                <td><div><span data-custom-class="body_text"></span></div></td>
                </tr>

                <tr>
                <td><div><span data-custom-class="body_text">
                  Supported Browsers (Minimum Browser Version):<br/>
                  chrome (v111)<br/>
                  firefox (v113)<br/>
                  opera (v98)<br/>
                  safari (v9)<br/>
                  edge (v111)<br/>
                  firefox mobile (v125)<br/>
                  chrome mobile (v120)<br/>
                </span></div></td>
                <td><div><span data-custom-class="body_text">
                  Supported Browsers (Minimum Browser Version):<br/>
                  chrome (v125)<br/>
                  firefox (v126)<br/>
                  opera (v110)<br/>
                  safari (v17)<br/>
                  edge (v124)<br/>
                  firefox mobile (v126)<br/>
                  chrome mobile (v125)<br/>
                </span></div></td>
                </tr>

                <tr>
                <td><div><span data-custom-class="body_text">Judge & RecordKeeper</span></div></td>
                <td><div><span data-custom-class="body_text"></span></div></td>
                </tr>

                <tr>
                <td>
                <div><span data-custom-class="body_text">
                  iOS device: iPhone 14 or newer (Judge) / iPad Air 4th Gen or newer (RecordKeeper)<br/>
                  iOS  version:  12.4 or newer
                  <br/><br/>
                  Android: Any android device Running Android 11 or newer
                </span></div>
                </td>
                <td>
                <div><span data-custom-class="body_text">
                  iOS device: iPhone 15 or newer (Judge) / iPad Pro 7th Gen or newer (RecordKeeper)<br/>
                  iOS  version:  15 or newer
                  <br/><br/>
                  Android: Any android device Running Android 13 or newer
                </span></div>
                </td>
                </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default MinimumRecommendedRequirements;

{/* <picture>
  <img
    id="Under Construction"
    className="object-contain max-w-[25vw] mb-12"
    src="/images/company/under-construction-2408059.png"
    width="fit"
    height="fit"
    alt="Under Construction"
  />
</picture>
<p className="pb-4">
  (We&apos;ll try to be brief)
</p> */}