import { CardBenefits, CardBenefitsDescription, CardBenefitsHeader, CardBenefitsTitle } from '@/components/ui/card-benefits'

export default function Benefits1() {

  return (
    <CardBenefits className='' id="benefitsAthletes">
      <CardBenefitsHeader>
        <CardBenefitsTitle>
          Guarantees athletes and promoters high-standard officials
        </CardBenefitsTitle>
        <CardBenefitsDescription>
          With a standardised methodology and an electronic scoring system, provides higher quality officiating with less effort, making sure wherever you are, you get a fair result.
        </CardBenefitsDescription>
      </CardBenefitsHeader>
      <CardBenefitsHeader>
        <CardBenefitsTitle>
          Minimizes unexpected decisions
        </CardBenefitsTitle>
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
