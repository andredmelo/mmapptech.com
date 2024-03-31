import { cn } from '@/lib/utils'

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
        activeTab === value ? 'dark:bg-neutral-950 dark:text-neutral-50 bg-white ring-1 ring-neutral-300 dark:ring-neutral-600 text-neutral-950' : 'dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 bg-neutral-200 hover:bg-neutral-100 text-neutral-700 hover:text-neutral-800',
        isPending && 'opacity-25',
        'whitespace-nowrap px-[1%] h-full w-full rounded-lg font-semibold text-[2rem] md:text-[1.9rem] lg:text-[2rem] xl:text-[2.3rem] 2xl:text-[2.8rem] hover:cursor-pointer'
      )}
      {...props}
    >
      {isPending ? 'loading' : children}
    </button>
  )
}
