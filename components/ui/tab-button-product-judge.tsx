"use client"
import { cn } from '@/lib/utils'
import { useMediaQuery } from '@react-hook/media-query';

export interface TabButtonProductJudgeProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  heading: string
  smallHeading: string
  leftOrRight: 'left' | 'right'
  activeTab: string
  isPending?: boolean
}

export default function TabButtonProductJudge({
  className,
  value,
  heading,
  smallHeading,
  activeTab,
  isPending,
  children,
  leftOrRight,
  ...props
}: TabButtonProductJudgeProps) {
  //const isLandscape = useMediaQuery('(orientation: landscape)');
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const isUnder768 = useMediaQuery('(max-width: 768px)');
  const isTouch = useMediaQuery('(hover: none)');

  const activeClass = leftOrRight === 'right' ?
    'portrait:ml-0 portrait:mr-0 portrait:md:mr-12 landscape:mr-12 md:transition-all md:duration-500 md:ease-out ring-4 ring-purple-950/50 brightness-[1.4]' :
    'portrait:ml-0 portrait:mr-0 portrait:md:ml-12 landscape:ml-12 md:transition-all md:duration-500 md:ease-out ring-4 ring-purple-950/50 brightness-[1.4]';
  const inactiveClass = leftOrRight === 'right' ?
    'portrait:ml-0 portrait:mr-0 portrait:md:ml-12 landscape:ml-12 portrait:hover:ml-0 portrait:hover:mr-0 portrait:md:hover:ml-8 portrait:md:hover:mr-4 landscape:hover:ml-8 landscape:hover:mr-4 ring-1 ring-white/5 md:transition-all md:duration-500 md:ease-out' :
    'portrait:ml-0 portrait:mr-0 portrait:md:mr-12 landscape:mr-12 portrait:hover:ml-0 portrait:hover:mr-0 portrait:md:hover:ml-4 portrait:md:hover:mr-8 landscape:hover:ml-4 landscape:hover:mr-8 ring-1 ring-white/5 md:transition-all md:duration-500 md:ease-out';
    const activeHeadingClass = leftOrRight === 'right' ?
      'py-1 text-transparent bg-clip-text bg-gradient-to-b md:bg-gradient-to-tl from-[var(--purple-500)] to-purple-100 md:transition-all md:duration-500 md:ease-out' :
      'py-1 text-transparent bg-clip-text bg-gradient-to-b md:bg-gradient-to-tr from-[var(--purple-500)] to-purple-100 md:transition-all md:duration-500 md:ease-out';
    const inactiveHeadingClass = 'text-white py-1';
  const gradientSide = leftOrRight === 'left' ? 'bg-right bg-bgRadialGradientLeft' : 'bg-left bg-bgRadialGradientRight';
  const rowDirection = leftOrRight === 'left' ? 'flex-row' : 'flex-row-reverse';
  const textDirection = leftOrRight === 'left' ? 'text-right' : 'text-left';
  const svgDirection = leftOrRight === 'left' ? 'pl-6 portrait:pl-2 portrait:md:pl-4' : 'pr-6 portrait:pr-2 portrait:md:pr-4';

  return (
    <>
      {isUnder768 ? (
          <button
            className={cn(
              activeTab === value ? activeClass : inactiveClass,
              isPending && 'opacity-100',
              'flex flex-row items-center',
              'py-0 px-4',
              'text-[1.25rem] md:text-[1.9rem] lg:text-lg xl:text-lg 2xl:text-lg leading-none tracking-normal',
              'rounded-[3rem] bg-no-repeat bg-bottom bg-bgRadialGradientDown shadow-inset-mission'
            )}
            {...props}
          >
            <div className={cn("flex flex-row items-center")}>
              <div className={cn("flex text-center pl-2")}>
                <p className={cn(
                  activeTab === value ? activeHeadingClass : inactiveHeadingClass,
                  isPending && ''
                )}>
                  {smallHeading}
                </p>
              </div>
              <div className={cn("flex items-center justify-center py-[1.75vw] pl-2 pr-0")}>
                {children}
              </div>
            </div>
              {/* {isPending ? 'loading' : children} */}
          </button>
      ) : isPortrait ? (
        <button
          className={cn(
            activeTab === value ? activeClass : inactiveClass,
            isPending && 'opacity-100',
            'flex flex-row items-center',
            'py-6 px-10',
            'text-[1.55rem] md:text-[1.9rem] lg:text-lg xl:text-lg 2xl:text-lg font-semibold leading-none tracking-normal',
            'rounded-[3rem] bg-no-repeat shadow-inset-mission',gradientSide
          )}
          {...props}
        >
          <div className={cn("flex items-center", rowDirection)}>
            <div className={cn("flex", textDirection)}>
              <h6 className={cn(
                activeTab === value ? activeHeadingClass : inactiveHeadingClass,
                isPending && ''
              )}>
                {smallHeading}
              </h6>
            </div>
            <div className={cn("flex items-center justify-center py-4", svgDirection)}>
              {children}
            </div>
          </div>
          {/* {isPending ? 'loading' : children} */}
        </button>
        ) : (
          <button
            className={cn(
              activeTab === value ? activeClass : inactiveClass,
              isPending && 'opacity-100',
              'flex flex-row items-center',
              'w-fit max-w-[48rem] py-10 px-16',
              'text-[1.55rem] md:text-[1.9rem] lg:text-lg xl:text-lg 2xl:text-lg font-semibold leading-none tracking-normal',
              'rounded-[3rem] bg-no-repeat shadow-inset-mission',gradientSide
            )}
            {...props}
          >
            <div className={cn("flex items-center", rowDirection)}>
              <div className={cn("flex", textDirection)}>
                <h6 className={cn(
                  activeTab === value ? activeHeadingClass : inactiveHeadingClass,
                  isPending && ''
                )}>
                  {heading}
                </h6>
              </div>
              <div className={cn("flex items-center justify-center py-4", svgDirection)}>
                {children}
              </div>
            </div>
            {/* {isPending ? 'loading' : children} */}
          </button>
        )}
    </>
  )
}