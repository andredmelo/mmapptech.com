import { cn } from '@/lib/utils'

export interface TabButtonFAQsProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  activeTab: string
  isPending?: boolean
}

export default function TabButtonFAQs({
  value,
  activeTab,
  isPending,
  children,
  ...props
}: TabButtonFAQsProps) {
  return (
    <button
      className={cn(
        activeTab === value ? 'dark:dark:bg-neutral-950 bg-neutral-800 dark:text-neutral-100 text-neutral-200' : 'dark:bg-neutral-800 bg-neutral-100 dark:hover:bg-neutral-700 hover:bg-neutral-200 dark:text-neutral-400 text-neutral-900 dark:hover:text-neutral-300 hover:text-neutral-700',
        isPending && 'opacity-25',
        'w-full h-full px-[1%] py-[3%] rounded-lg font-semibold break-normal text-[2rem] md:text-[1.9rem] lg:text-[2rem] xl:text-[2.3rem] 2xl:text-[2.8rem]'
      )}
      {...props}
    >
      {isPending ? 'loading' : children}
    </button>
  )
}
