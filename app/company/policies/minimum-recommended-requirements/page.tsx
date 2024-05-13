/* 'use client' */

const MinimumRecommendedRequirements = () => {

  return (
    <>
      <section id="MinimumRecommendedRequirements" className="w-full h-full min-h-[85vh]">
        {/* <div className="flex w-full">
          <iframe src="https://app.termly.io/document/eula/b95bc7c0-3bb3-4631-a607-b1ac9d064a76" className="w-full h-full min-h-[calc(100vh-130px)] mt-[65px]"/>
        </div> */}

        <div className="flex flex-col w-full h-full min-h-[80vh] justify-center items-center bg-[var(--background-grey)]">
          <picture>
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
          </p>
        </div>
      </section>
    </>
  )
};

export default MinimumRecommendedRequirements;
