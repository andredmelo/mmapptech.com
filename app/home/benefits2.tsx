import { CardBenefits, CardBenefitsDescription, CardBenefitsHeader, CardBenefitsTitle } from '@/components/ui/card'

export default function Benefits1() {

  return (
    <CardBenefits className='h-full'>
      <CardBenefitsHeader>
        <CardBenefitsTitle>
        Smooth Experience for Membership Maintenance
        </CardBenefitsTitle>
        <CardBenefitsDescription>
          Easily keep your profile always up-to-date, with reminders of expiration dates for documents.
        </CardBenefitsDescription>
      </CardBenefitsHeader>
      <CardBenefitsHeader>
        <CardBenefitsTitle>
          Manage multiple athletes associated with you
        </CardBenefitsTitle>
        <CardBenefitsDescription>
          Change Federation Information, Upload documents and much more on behalf of your associated athletes, ensuring they&apos;re always eligible for competition.
        </CardBenefitsDescription>
      </CardBenefitsHeader>
      <CardBenefitsHeader>
        <CardBenefitsTitle>
          Make your athletes instantly available to national promoters
        </CardBenefitsTitle>
        <CardBenefitsDescription>
        When registered to the Federation, your atheltes are automatically added to the country&apos;s roster, at the disposal of all national promoters.
        </CardBenefitsDescription>
      </CardBenefitsHeader>
    </CardBenefits>
  )
}