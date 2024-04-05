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
  const isUnder768 = useMediaQuery('(max-width: 768px)');
  const isTouch = useMediaQuery('(hover: none)');

  const activeClass = 
    'ml-0 mr-12 transition-all duration-500 ease-out ring-4 ring-purple-950/50 brightness-[1.4]';
  const inactiveClass =
    'ml-12 mr-0 hover:ml-8 hover:mr-4 transition-all duration-500 ease-out ring-1 ring-white/5';
  const activeHeadingClass = 
    'text-[1.5rem] md:text-[1.3vw] py-1 text-transparent bg-clip-text bg-gradient-to-b md:bg-gradient-to-tl from-[var(--purple-500)] to-purple-100 md:transition-all md:duration-500 md:ease-out';
  const inactiveHeadingClass = 'text-[1.5rem] md:text-[1.3vw] text-white py-1';

  return (
    <>
      <button
        className={cn(
          activeTab === value ? activeClass : inactiveClass,
          isPending && 'opacity-100',
          'flex flex-row items-center max-w-[19vw]',
          'py-1 px-4 md:py-[0.9vw] md:px-[2.25vw]',
          'font-semibold leading-none tracking-normal',
          'rounded-[3rem] bg-no-repeat bg-bottom bg-bgRadialGradientDown shadow-inset-mission'
        )}
        {...props}
      >
        <div className={cn("flex flex-row items-center")}>
          <div className={cn("flex text-center")}>
            <h6 className={cn(
              activeTab === value ? activeHeadingClass : inactiveHeadingClass,
              isPending && ''
            )}>
              {isUnder768 ? smallHeading : heading}
            </h6>
          </div>
          <div className={cn("flex items-center justify-center py-4 pl-3 pr-0")}>
            {children}
          </div>
        </div>
          {/* {isPending ? 'loading' : children} */}
      </button>
    </>
  )
}