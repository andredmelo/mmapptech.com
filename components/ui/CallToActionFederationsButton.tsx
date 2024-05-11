import { CardCallToActionFooter, CardCallToActionFederationsButton } from '@/components/ui/card-call-to-action'
import { DialogCTABookADemo } from '@/components/ui/dialogCallToActionBookADemo'


type CallToActionBookADemoButtonProps = {
  className: string;
};

const CallToActionBookADemoButton = ({ className }: CallToActionBookADemoButtonProps) => {

  return (
    <CardCallToActionFooter className={className}>
      {/* <CardCallToActionBookADemoButton href="https://calendar.app.google/teZYUTWXr1kajxyV7" target="_blank">
        Book a Demo
      </CardCallToActionBookADemoButton> */}

      <DialogCTABookADemo title={"Request that your Federation join MMAPP"} btnLabel={"Book a Demo"} />
    </CardCallToActionFooter>
  )
};

export default CallToActionBookADemoButton;