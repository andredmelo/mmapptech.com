import { cn } from "@/lib/utils"
import CallToActionFederationsButton from '@/components/ui/CallToActionFederationsButton'

type FeaturesCallToActionFederationsProps = {
  id: string
  className: string;
  leftOrRight: "left" | "right";
};

const FeaturesCallToActionFederations = ({ id, className, leftOrRight, ...props}: FeaturesCallToActionFederationsProps) => {

  const landscapeSide = leftOrRight === 'right' ? 'justify-end' : 'justify-start';

  return (
    <div
      id={id}
      className={cn(
        "z-[60] absolute hidden md:flex w-full items-start",
        "px-2 md:px-20 lg:px-32", //md:pt-[140vh]
        "md:pt-[73.5svh] portrait:md:pt-[85svh]",
        landscapeSide,
        "portrait:justify-center",
        className,
      )}>
      <CallToActionFederationsButton className="" />
    </div>
  )
};

export default FeaturesCallToActionFederations;