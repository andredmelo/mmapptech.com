import { cn } from '@/lib/utils'

export interface TabButtonBenefitsProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  activeTab: string
  isPending?: boolean
}

export default function TabButtonBenefits({
  value,
  activeTab,
  isPending,
  children,
  ...props
}: TabButtonBenefitsProps) {
  return (
    <button
      className={cn(
        activeTab === value ? 'dark:bg-blue-950 bg-white dark:text-neutral-100 text-neutral-950' : 'dark:bg-blue-800 bg-neutral-200 dark:hover:bg-blue-900 hover:bg-neutral-200 dark:text-neutral-300 text-neutral-700 dark:hover:text-neutral-300 hover:text-neutral-700',
        isPending && 'opacity-25',
        'w-full h-full px-[3%] md:px-[5%] py-[4%] md:py-[5%] rounded-lg font-bold break-normal text-md md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl'
      )}
      {...props}
    >
      {isPending ? 'loading' : children}
    </button>
  )
}
