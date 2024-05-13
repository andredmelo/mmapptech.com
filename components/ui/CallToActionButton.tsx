import { DialogCTA } from '@/components/ui/dialogCallToAction'

import { CardCallToActionFooter } from '@/components/ui/card-call-to-action'

type CallToActionButtonProps = {
  className: string;
  btnLabel: string;
};

const CallToActionButton = ({ className, btnLabel }: CallToActionButtonProps) => {

  return (
    <CardCallToActionFooter className={className}>
      <DialogCTA title={""} btnLabel={btnLabel} />
    </CardCallToActionFooter>
  )
};

export default CallToActionButton;