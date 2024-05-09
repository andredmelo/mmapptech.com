import { CardCallToActionFooter, CardCallToActionFederationsButton } from '@/components/ui/card-call-to-action'

type CallToActionFederationsButtonProps = {
  className: string;
};

const CallToActionFederationsButton = ({ className }: CallToActionFederationsButtonProps) => {

  return (
    <CardCallToActionFooter className={className}>
      <CardCallToActionFederationsButton href="https://calendar.app.google/teZYUTWXr1kajxyV7" target="_blank">
        Book a Demo
      </CardCallToActionFederationsButton>
    </CardCallToActionFooter>
  )
};

export default CallToActionFederationsButton;