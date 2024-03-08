import { cn } from '../lib/utils'

export interface TabButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  activeTab: string
  isPending?: boolean
}

export default function TabButton({
  value,
  activeTab,
  isPending,
  children,
  ...props
}: TabButtonProps) {
  return (
    <button
      className={cn(
        activeTab === value ? 'dark:bg-white dark:text-neutral-900 bg-neutral-800 text-neutral-200' : 'dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 bg-white hover:bg-neutral-100 text-neutral-900 hover:text-neutral-700',
        isPending && 'opacity-25',
        'whitespace-nowrap px-[1%] h-full w-full rounded-lg font-semibold text-[2rem] md:text-[1.9rem] lg:text-[2rem] xl:text-[2.3rem] 2xl:text-[2.8rem]'
      )}
      {...props}
    >
      {isPending ? 'loading' : children}
    </button>
  )
}
