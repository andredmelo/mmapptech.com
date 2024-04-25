import { clsx } from "clsx";

export interface ProductTitlesItem {
  header: string;
}

interface ProductDashboardTitlesProps { productDashboardItems: ProductTitlesItem[], className: string }
export const ProductDashboardTitles = (props: ProductDashboardTitlesProps) => {
  return (
    <>
      {props.productDashboardItems.map(({ header }, i) => (
        <div id="productDashboardTitles" className={props.className} key={i}>
          <h4
            id={"productDashboardTitleShadow"+i}
            className={clsx(
              "absolute py-4",
              "text-center text-[4vw] md:text-[2.5vw] portrait:md:text-[3.75vw] leading-[2.5vw] tracking-normal",
              "text-shadow-sm text-shadow-blur-2 text-shadow-[var(--background-grey)]"
            )}>
            {header}
          </h4>
          <h4
            id={"productDashboardTitle"+i}
            className={clsx(
              "absolute py-4",
              "text-center text-[4vw] md:text-[2.5vw] portrait:md:text-[3.75vw] leading-[2.5vw] tracking-normal",
              "text-transparent bg-clip-text bg-gradient-to-t from-[var(--purple-400)] to-white"
            )}>
            {header}
          </h4>
        </div>
      ))}
    </>
  );
};

interface ProductDashboardMembersTitlesProps { productDashboardMembersItems: ProductTitlesItem[], className: string }
export const ProductDashboardMembersTitles = (props: ProductDashboardMembersTitlesProps) => {
  return (
    <>
      {props.productDashboardMembersItems.map(({ header }, i) => (
        <div /* id="productDashboardMembersTitles" */ className={props.className} key={i}>
          <h4
            /* id={"productDashboardMembersTitle"+i} */
            className={clsx(
              "productDashboardMembersTitle",
              "flex shrink-0 justify-center items-center py-2", //absolute
              //"w-[90%] group-[.active]:w-[100%] h-[90%] group-[.active]:h-[100%]",
              "w-full h-full",
              "text-center text-[3.25vw] group-[.active]:text-[3.75vw] leading-[5vw]",
              "md:text-[1.25vw] group-[.active]:md:text-[1.4vw] md:leading-[2vw]",
              "portrait:md:text-[2.25vw] group-[.active]:portrait:md:text-[3.25vw] portrait:md:leading-[5vw] tracking-normal",
              "text-transparent bg-clip-text bg-gradient-to-br from-[var(--purple-350)] to-white",
              "cursor-pointer transition-all duration-700"
            )}>
            {header}
          </h4>
        </div>
      ))}
    </>
  );
};

