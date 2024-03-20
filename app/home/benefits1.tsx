import { CardBenefits, CardBenefitsDescription, CardBenefitsHeader, CardBenefitsTitle } from '@/components/ui/card-benefits'

export default function Benefits1() {

  return (
    <CardBenefits className='' id="benefitsAthletes">
      <CardBenefitsHeader>
        <dt className="inline-flex items-center gap-3 max-w-full">
          <CardBenefitsTitle>
            Guarantees athletes and promoters high-standard officials
          </CardBenefitsTitle>
          <div className="flex items-center justify-center text-white pr-4 py-4">
            <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-universe">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7.027 11.477a5 5 0 1 0 5.496 -4.45a4.951 4.951 0 0 0 -3.088 .681" />
              <path d="M5.636 5.636a9 9 0 1 0 3.555 -2.188" />
              <path d="M18 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M9 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>
          </div>
        </dt>
        <CardBenefitsDescription>
          With a standardised methodology and an electronic scoring system, provides higher quality officiating with less effort, making sure wherever you are, you get a fair result.
        </CardBenefitsDescription>
      </CardBenefitsHeader>
      <CardBenefitsHeader>
        <CardBenefitsTitle>
          Minimizes unexpected decisions
        </CardBenefitsTitle>
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-minimize">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 19v-2a2 2 0 0 1 2 -2h2" />
          <path d="M15 5v2a2 2 0 0 0 2 2h2" />
          <path d="M5 15h2a2 2 0 0 1 2 2v2" />
          <path d="M5 9h2a2 2 0 0 0 2 -2v-2" />
        </svg>
        <CardBenefitsDescription>
          With our Judge and RecordKeeper tools, Scores are more consistent and calculations are done instantly, mitigating conscious and unconscious bias
        </CardBenefitsDescription>
      </CardBenefitsHeader>
      <CardBenefitsHeader>
        <CardBenefitsTitle>
          Smooth Experience for Membership Maintenance
        </CardBenefitsTitle>
        <CardBenefitsDescription>
          Sign-up in one go, and keep your documents up to date with reminders of their expiration
        </CardBenefitsDescription>
      </CardBenefitsHeader>
      <CardBenefitsHeader>
        <CardBenefitsTitle>
          Get featured in a centralized database available to promoters
        </CardBenefitsTitle>
        <CardBenefitsDescription>
          When registered to your Federation, you are automatically added to the country&apos;s roster, at the disposal of all national promoters
        </CardBenefitsDescription>
      </CardBenefitsHeader>
    </CardBenefits>
  )
}
