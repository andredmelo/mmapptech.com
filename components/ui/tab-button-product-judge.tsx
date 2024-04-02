import { cn } from '@/lib/utils'

export interface TabButtonProductJudgeProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  leftOrRight: 'left' | 'right'
  activeTab: string
  isPending?: boolean
}

export default function TabButtonProductJudge({
  className,
  value,
  activeTab,
  isPending,
  children,
  leftOrRight,
  ...props
}: TabButtonProductJudgeProps) {
  const activeClass = leftOrRight === 'right' ? 'ml-0 mr-12 transition-all duration-500 ease-out' : 'ml-12 mr-0 transition-all duration-500 ease-out';
  const inactiveClass = leftOrRight === 'right' ? 'ml-12 mr-0 hover:ml-8 hover:mr-4 transition-all duration-500 ease-out' : 'ml-0 mr-12 hover:ml-4 hover:mr-8 transition-all duration-500 ease-out';
  const gradientSide = leftOrRight === 'left' ? 'bg-right bg-bgRadialGradientLeft' : 'bg-left bg-bgRadialGradientRight';

  return (
    <button
      className={cn(
        activeTab === value ? activeClass : inactiveClass,
        isPending && 'opacity-25',
        'flex flex-row items-center py-10 px-16 rounded-[3rem] bg-no-repeat ring-1 ring-white/5 shadow-inset-mission text-[1.55rem] md:text-[1.9rem] lg:text-lg xl:text-lg 2xl:text-lg font-semibold leading-none tracking-normal',gradientSide
      )}
      {...props}
    >
      {isPending ? 'loading' : children}
    </button>
  )
}