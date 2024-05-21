/* 'use client' */

const MinimumRecommendedRequirements = () => {

  return (
    <>
      <section id="MinimumRecommendedRequirements" className="flex items-center justify-center w-full h-full py-24 md:py-36 lg:py-44 bg-[var(--background-grey)]">
        <div className="policiesPage">
        <h4 className="text-center mb-2 tracking-tight">Minimum and Recommended Requirements</h4>
        <h6 className="text-center mb-8 md:mb-12 lg:mb-16">Last updated December 05, 2023</h6>

        <div className="flex w-full items-center justify-center">
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
              iOS device: iPhone 14 (Judge) / iPad Air 4th Gen (RecordKeeper)<br/>
              iOS  version:  12.4
              <br/><br/>
              Android Processor: Snapdragon 7 gen 2 or equivalent
              Android version: 11
            </span></div>
            </td>
            <td>
            <div><span data-custom-class="body_text">
              iOS device: iPhone 15 (Judge) / iPad Pro 7th Gen (RecordKeeper)<br/>
              iOS  version:  15
              <br/><br/>
              Android Processor: Google Tensor or equivalent / MediaTek Dimensity 8000/8100 or Equivalent
              Android version: 13
            </span></div>
            </td>
            </tr>

            </tbody>
          </table>
        </div>

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
        </div>
      </section>
    </>
  )
};

export default MinimumRecommendedRequirements;