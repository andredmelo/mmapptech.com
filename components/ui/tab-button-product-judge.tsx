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

  const activeClass = leftOrRight === 'right' ?
    'ml-0 portrait:mr-0 portrait:md:mr-12 landscape:mr-12 transition-all duration-500 ease-out ring-4 ring-fuchsia-950/50' :
    'portrait:ml-0 portrait:md:ml-12 landscape:ml-12 mr-0 transition-all duration-500 ease-out ring-4 ring-fuchsia-950/50';
  const inactiveClass = leftOrRight === 'right' ?
    'ring-1 ring-white/5 portrait:ml-0 portrait:md:ml-12 landscape:ml-12 mr-0 portrait:hover:ml-0 portrait:hover:mr-0 landscape:hover:ml-8 landscape:hover:mr-4 transition-all duration-500 ease-out' :
    'ring-1 ring-white/5 ml-0 portrait:mr-0 portrait:md:mr-12 landscape:mr-12 portrait:hover:ml-0 portrait:hover:mr-0 landscape:hover:ml-4 landscape:hover:mr-8 transition-all duration-500 ease-out';
  const gradientSide = leftOrRight === 'left' ? 'bg-right bg-bgRadialGradientLeft' : 'bg-left bg-bgRadialGradientRight';
  const rowDirection = leftOrRight === 'left' ? 'flex-row' : 'flex-row-reverse';
  const textDirection = leftOrRight === 'left' ? 'text-right' : 'text-left';
  const svgDirection = leftOrRight === 'left' ? 'pl-6 portrait:pl-2 portrait:md:pl-6' : 'pr-6 portrait:pr-2 portrait:md:pr-6';

  return (
    <>
      {isUnder768 ? (
          <button
            className={cn(
              activeTab === value ? activeClass : inactiveClass,
              isPending && 'opacity-25',
              'flex flex-row items-center',
              'py-1 px-4',
              'text-[1.55rem] md:text-[1.9rem] lg:text-lg xl:text-lg 2xl:text-lg font-semibold leading-none tracking-normal',
              'rounded-[3rem] bg-no-repeat bg-bottom bg-bgRadialGradientDown shadow-inset-mission'
            )}
            {...props}
          >
            <div className={cn("flex flex-row items-center")}>
              <div className={cn("flex text-center")}>
                <h6 className="text-white pl-2">
                  {smallHeading}
                </h6>
              </div>
              <div className={cn("flex items-center justify-center py-4 pl-3 pr-0")}>
                {children}
              </div>
            </div>
              {/* {isPending ? 'loading' : children} */}
          </button>
      ) : isPortrait ? (
        <button
          className={cn(
            activeTab === value ? activeClass : inactiveClass,
            isPending && 'opacity-25',
            'flex flex-row items-center',
            'py-6 px-12',
            'text-[1.55rem] md:text-[1.9rem] lg:text-lg xl:text-lg 2xl:text-lg font-semibold leading-none tracking-normal',
            'rounded-[3rem] bg-no-repeat shadow-inset-mission',gradientSide
          )}
          {...props}
        >
          <div className={cn("flex items-center", rowDirection)}>
            <div className={cn("flex", textDirection)}>
              <h6 className="text-white">
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
              isPending && 'opacity-25',
              'flex flex-row items-center',
              'py-10 px-16',
              'text-[1.55rem] md:text-[1.9rem] lg:text-lg xl:text-lg 2xl:text-lg font-semibold leading-none tracking-normal',
              'rounded-[3rem] bg-no-repeat shadow-inset-mission',gradientSide
            )}
            {...props}
          >
            <div className={cn("flex items-center", rowDirection)}>
              <div className={cn("flex", textDirection)}>
                <h6 className="text-white">
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