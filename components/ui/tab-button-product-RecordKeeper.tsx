import { cn } from '@/lib/utils'
import { useMediaQuery } from '@react-hook/media-query';

export interface TabButtonProductRecordKeeperProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  heading: string
  smallHeading: string
  activeTab: string
  isPending?: boolean
}

export default function TabButtonProductRecordKeeper({
  className,
  value,
  heading,
  smallHeading,
  activeTab,
  isPending,
  children,
  ...props
}: TabButtonProductRecordKeeperProps) {
  //const isLandscape = useMediaQuery('(orientation: landscape)');
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const isUnder768 = useMediaQuery('(max-width: 767px)');
  const isTouch = useMediaQuery('(hover: none)');

  const activeClass = cn(
    'ml-0 mr-0 mt-0 mb-0',
    'md:ml-0 md:mr-12 md:mt-0 md:mb-0',
    'portrait:md:ml-0 portrait:md:mr-0 portrait:md:mt-0 portrait:md:mb-12',
    'md:transition-all md:duration-500 md:ease-out ring-4 ring-purple-950/50 brightness-[1.4]'
    )
  const inactiveClass = cn(
    'mt-0 mb-0 ml-0 mr-0 hover:ml-0 hover:mr-0',
    'md:ml-12 md:mr-0 md:mt-0 md:mb-0 md:hover:ml-8 md:hover:mr-4',
    'portrait:md:mt-12 portrait:md:mb-0 portrait:md:ml-0 portrait:md:mr-0 portrait:md:hover:ml-0 portrait:md:hover:mr-0',
    'md:transition-all md:duration-500 md:ease-out ring-1 ring-white/5'
    )
  const activeHeadingClass = cn(
    'text-[3.5vw] md:text-[1.3vw] portrait:touch:md:text-[2.25vw] leading-snug py-1 text-transparent bg-clip-text bg-gradient-to-b md:bg-gradient-to-tl from-[var(--purple-500)] to-purple-100',
    'md:transition-all md:duration-500 md:ease-out'
    )
  const inactiveHeadingClass = 'text-[3.5vw] md:text-[1.3vw] portrait:touch:md:text-[2.25vw] leading-snug text-white py-1';

  return (
    <>
      <button
        className={cn(
          activeTab === value ? activeClass : inactiveClass,
          isPending && 'opacity-100',
          'flex flex-row items-center w-fit max-w-[20vw] portrait:touch:max-w-fit portrait:touch:md:max-w-[20vw] portrait:touch:min-h-[7vw]',
          'py-[1vw] px-6 md:py-[1.1vw] md:px-[2.25vw] portrait:touch:py-[1.25vw] portrait:touch:md:py-[1vw] portrait:touch:md:px-[1.75vw]',
          'font-semibold tracking-normal',
          'rounded-[3rem] bg-no-repeat bg-bottom bg-bgRadialGradientDown shadow-inset-mission',
          className
        )}
        {...props}
      >
        <div className={cn("flex flex-row items-center")}>
          <div className={cn("flex items-center justify-center py-2 md:py-4 pr-[0vw] md:pr-[0.8vw] portrait:touch:md:pr-[0.4vw] pl-0")}>
            {children}
          </div>
          <div className={cn("flex text-left pr-[2.5vw] md:pr-[0vw] portrait:touch:md:pr-[1vw]")}>
            <h6 className={cn(
              activeTab === value ? activeHeadingClass : inactiveHeadingClass,
              isPending && ''
            )}>
              {isUnder768 ? smallHeading : ( isTouch ? smallHeading : heading )}
            </h6>
          </div>
        </div>
          {/* {isPending ? 'loading' : children} */}
      </button>
    </>
  )
}