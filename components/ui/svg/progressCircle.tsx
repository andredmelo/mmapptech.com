/* "use client" */
/* import * as React from "react" */
/* import gsap from 'gsap'; */

import { cn } from "@/lib/utils"
//import { useMediaQuery } from '@react-hook/media-query';

/* gsap.registerPlugin(gsap); */

export interface ProgressCircleProps
  extends React.HTMLAttributes<HTMLDivElement> {
    id: string
    leftOrRight: 'left' | 'right'
}

export default function ProgressCircle({
  className,
  id,
  leftOrRight,
  ...props
}: ProgressCircleProps) {

  //const isPortrait = useMediaQuery('(orientation: portrait)');
  //console.log("isPortrait: "+isPortrait)
  //const isLandscape = useMediaQuery('(orientation: landscape)');
  //console.log("isLandscape: "+isLandscape)

  /* const landscapeSide = leftOrRight === 'left' ?
    'w-[25px] h-[25px] top-[27vw] right-[5vw] md:w-[50px] md:h-[50px] md:top-[13.75vw] lg:w-[50px] lg:h-[50px] lg:top-[6.1vw]' :
    'w-[25px] h-[25px] top-[27vw] left-[5vw] md:w-[50px] md:h-[50px] md:top-[13.75vw] lg:w-[50px] lg:h-[50px] lg:top-[6.1vw]';

  const itsPortrait = "p w-[25px] h-[25px] top-[27vw] right-[5vw] md:w-[50px] md:h-[50px] md:top-[13.75vw] lg:w-[50px] lg:h-[50px] lg:top-[6.1vw] bg-transparent"; */

  /* const portraitOrLandscape = isPortrait ? itsPortrait : landscapeSide;
  console.log("portraitOrLandscape: "+isPortrait) */

  /* gsap.set(judgeProgressCircle, {
    x: isPortrait ? '90%' : '10%',
  }); */

  const landscapeSide = leftOrRight === 'left' ? 'justify-end' : 'justify-start';

  //const portraitOrLandscape = isLandscape ? (leftOrRight === 'left' ? 'justify-end' : 'justify-start') : 'justify-end';
  //console.log("portraitOrLandscape: "+portraitOrLandscape)

  /* let portraitOrLandscape = "";

  if (isPortrait) {
    portraitOrLandscape = itsPortrait;
    console.log("portrait")
  } else {
    portraitOrLandscape = landscapeSide;
    console.log("Landscape: ")
  } */

  return (
    <>
      <div id={id}
        className={cn(
          "absolute flex h-full w-full items-center",
          landscapeSide,
          "portrait:justify-end",// px-[5vw]
          //portraitOrLandscape
          /* "w-[25px] h-[25px] top-[27vw] right-[5vw]",
          "md:w-[50px] md:h-[50px] md:top-[13.75vw]",
          "lg:w-[50px] lg:h-[50px] lg:top-[6.1vw]", */
          className,
        )}>
        <svg className="progressCircle w-[25px] h-[25px]  md:w-[50px] md:h-[50px] lg:w-[50px] lg:h-[50px]" viewBox="0 0 19 19" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs></defs>
          {<circle id="bg" cx="9.5" cy="9.5" r="7.5" fill="none" stroke="rgba(255, 255, 255, .04)" strokeMiterlimit="10" strokeWidth="3.5"/>}
          {<path id="progress" d="m9.5,2c4.14,0,7.5,3.36,7.5,7.5s-3.36,7.5-7.5,7.5-7.5-3.36-7.5-7.5,3.36-7.5,7.5-7.5" fill="none" stroke="#800080" strokeLinejoin="round" strokeWidth="3.5"/>}
        </svg>
      </div>
    </>
  )
}


/* const ProgressCircle = React.forwardRef<
HTMLDivElement,
ProgressCircleProps
>(({ className, leftOrRight, id, ...props }, ref) => (
  
  <div id="ProgressCircleWrapper"
    className={cn(
      "absolute",
      "w-[25px] h-[25px] top-[27vw] right-[5vw]",
      "md:w-[50px] md:h-[50px] md:top-[13.75vw]",
      "lg:w-[50px] lg:h-[50px] lg:top-[6.1vw]",
    )}>
    <svg id={id} className="progressCircle" viewBox="0 0 19 19" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs></defs>
      {<circle id="bg" cx="9.5" cy="9.5" r="7.5" fill="none" stroke="rgba(255, 255, 255, .04)" strokeMiterlimit="10" strokeWidth="3.5"/>}
      {<path id="progress" d="m9.5,2c4.14,0,7.5,3.36,7.5,7.5s-3.36,7.5-7.5,7.5-7.5-3.36-7.5-7.5,3.36-7.5,7.5-7.5" fill="none" stroke="#800080" strokeLinejoin="round" strokeWidth="3.5"/>}
    </svg>
  </div>
));

export default ProgressCircle; */