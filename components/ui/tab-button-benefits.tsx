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
        activeTab === value ? 'dark:bg-fuchsia-950 bg-white dark:text-neutral-100 text-neutral-950 transition-all duration-500 ease-out rounded-tr-2xl rounded-tl-2xl rounded-br-none rounded-bl-none md:rounded-bl-2xl md:rounded-tl-2xl md:rounded-tr-none md:rounded-br-none mt-1 mb-0 md:mt-2 md:mb-2 mr-1 ml-1 md:mr-0 md:ml-10 pr-0' : 'mr-1 ml-1 md:mr-4 md:ml-4 mt-2 mb-2 md:mt-2 md:mb-2 rounded-xl dark:bg-purple-950 bg-neutral-200 dark:hover:bg-fuchsia-900 hover:bg-neutral-200 dark:text-neutral-300 text-neutral-700 dark:hover:text-neutral-300 hover:text-neutral-700 text-center pr-0 md:hover:pr-2 transition-all duration-500 ease-out',
        isPending && 'opacity-25',
        'w-full md:w-auto h-full px-3 md:px-[5%] py-[4%] md:py-[5%] font-bold break-normal text-md md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl'
      )}
      {...props}
    >
      {isPending ? 'loading' : children}
    </button>
  )
}