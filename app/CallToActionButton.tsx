import { DialogCTA } from '@/components/ui/dialogCallToAction'

import { CardCallToActionFooter } from '@/components/ui/card-call-to-action'

type CallToActionButtonProps = {
  className: string;
};

const CallToActionButton = ({ className }: CallToActionButtonProps) => {

  return (
    <CardCallToActionFooter className={className}>
      <DialogCTA title={""} btnLabel={"Request your Federation to join MMAPP"} />
    </CardCallToActionFooter>
  )
};

export default CallToActionButton;