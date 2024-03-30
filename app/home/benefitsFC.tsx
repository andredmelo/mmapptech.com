import { CardBenefits, CardBenefitsDescription, CardBenefitsHeader, CardBenefitsTitle } from '@/components/ui/card-benefits'


export interface BenefitsItem {
  header: string;
  content: React.ReactNode[]; // Use React.ReactNode for flexible content
  svg: JSX.Element;
}


interface BenefitsAthletesProps { athletesItems: BenefitsItem[]; }
export const BenefitsAthletes = (props: BenefitsAthletesProps) => {
  return (
    <CardBenefits
      className=''
      id="benefitsAthletes"
    >
      {props.athletesItems.map(({ header, content, svg }, i) => (
        <CardBenefitsHeader key={i}>
          <dt className="inline-flex items-center gap-3 max-w-full">
            <CardBenefitsTitle>
            {header}
            </CardBenefitsTitle>
            <div className="flex items-center justify-center text-white pr-4 pb-0">
              {svg}
            </div>
          </dt>
          <CardBenefitsDescription>
          {content}
          </CardBenefitsDescription>
        </CardBenefitsHeader>
      ))}
    </CardBenefits>
  );
};

interface BenefitsCoachesProps { coachesItems: BenefitsItem[]; }
export const BenefitsCoaches = (props: BenefitsCoachesProps) => {
  return (
    <CardBenefits
      className=''
      id="benefitsCoaches"
    >
      {props.coachesItems.map(({ header, content, svg }, i) => (
        <CardBenefitsHeader key={i}>
          <dt className="inline-flex items-center gap-3 max-w-full">
            <CardBenefitsTitle>
            {header}
            </CardBenefitsTitle>
            <div className="flex items-center justify-center text-white pr-4 pb-0">
              {svg}
            </div>
          </dt>
          <CardBenefitsDescription>
          {content}
          </CardBenefitsDescription>
        </CardBenefitsHeader>
      ))}
    </CardBenefits>
  );
};

interface BenefitsClubsProps { clubsItems: BenefitsItem[]; }
export const BenefitsClubs = (props: BenefitsClubsProps) => {
  return (
    <CardBenefits
      className=''
      id="benefitsClubs"
    >
      {props.clubsItems.map(({ header, content, svg }, i) => (
        <CardBenefitsHeader key={i}>
          <dt className="inline-flex items-center gap-3 max-w-full">
            <CardBenefitsTitle>
            {header}
            </CardBenefitsTitle>
            <div className="flex items-center justify-center text-white pr-4 pb-0">
              {svg}
            </div>
          </dt>
          <CardBenefitsDescription>
          {content}
          </CardBenefitsDescription>
        </CardBenefitsHeader>
      ))}
    </CardBenefits>
  );
};

interface BenefitsPromotersProps { promotersItems: BenefitsItem[]; }
export const BenefitsPromoters = (props: BenefitsPromotersProps) => {
  return (
    <CardBenefits
      className=''
      id="benefitsPromoters"
    >
      {props.promotersItems.map(({ header, content, svg }, i) => (
        <CardBenefitsHeader key={i}>
          <dt className="inline-flex items-center gap-3 max-w-full">
            <CardBenefitsTitle>
            {header}
            </CardBenefitsTitle>
            <div className="flex items-center justify-center text-white pr-4 pb-0">
              {svg}
            </div>
          </dt>
          <CardBenefitsDescription>
          {content}
          </CardBenefitsDescription>
        </CardBenefitsHeader>
      ))}
    </CardBenefits>
  );
};