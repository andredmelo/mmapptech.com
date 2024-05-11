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
        /* activeTab === value ? 'dark:bg-neutral-950 dark:text-neutral-50 bg-white border-2 border-purple-600 dark:border-purple-600 text-neutral-950' : 'dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-200 bg-neutral-200 hover:bg-neutral-100 text-neutral-700 hover:text-neutral-800 border-2 border-transparent', */
        activeTab === value ? 'bg-neutral-950 text-neutral-50 border-2 border-purple-600 ' : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-neutral-200 border-2 border-transparent',
        isPending && 'opacity-25',
        'whitespace-nowrap px-[1%] h-full w-full rounded-lg font-semibold text-[1.8rem] md:text-[1.6rem] lg:text-[2rem] xl:text-[2.3rem] 2xl:text-[2.5rem] hover:cursor-pointer'
      )}
      {...props}
    >
      {isPending ? 'loading' : children}
    </button>
  )
}
