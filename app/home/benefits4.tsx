import { CardBenefits, CardBenefitsDescription, CardBenefitsHeader, CardBenefitsTitle } from '@/components/ui/card-benefits'

export default function Benefits4() {

  return (
    <CardBenefits className='h-full' id="benefitsPromoters">
      <CardBenefitsHeader>
        <CardBenefitsTitle>
          Guarantees athletes and promoters high-standard officials
        </CardBenefitsTitle>
        <CardBenefitsDescription>
          With a standardised methodology and an electronic scoring system, provides higher quality officiating with less effort.
        </CardBenefitsDescription>
      </CardBenefitsHeader>
      <CardBenefitsHeader>
        <CardBenefitsTitle>
          Minimizes unexpected decisions
        </CardBenefitsTitle>
        <CardBenefitsDescription>
          With our Judge and RecordKeeper tools, Scores are more consistent and calculations are done instantly, mitigating conscious and unconscious bias.
        </CardBenefitsDescription>
      </CardBenefitsHeader>
      <CardBenefitsHeader>
        <CardBenefitsTitle>
          Smooth Experience for Membership Maintenance
        </CardBenefitsTitle>
        <CardBenefitsDescription>
          Sign-up once, and keep your documents up to date with reminders of their expiration to stay registered.
        </CardBenefitsDescription>
      </CardBenefitsHeader>
    </CardBenefits>
  )
}