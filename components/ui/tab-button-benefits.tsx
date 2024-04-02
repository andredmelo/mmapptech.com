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
        activeTab === value ? 'dark:bg-gradient-to-b md:dark:bg-gradient-to-r from-[var(--primary-fuchsia-dark2)] to-[var(--primary-fuchsia-dark3)] bg-white dark:text-neutral-100 text-neutral-950 transition-all duration-500 ease-out rounded-tr-2xl rounded-tl-2xl rounded-br-none rounded-bl-none md:rounded-bl-2xl md:rounded-tl-2xl md:rounded-tr-none md:rounded-br-none mt-1 mb-0 md:mt-2 md:mb-2 mr-1 ml-1 md:mr-0 md:ml-10 lg:ml-20 pr-0' : 'mr-1 ml-1 md:mr-4 md:ml-4 lg:mr-12 lg:ml-12 mt-2 mb-2 md:mt-2 md:mb-2 rounded-3xl ring-1 ring-white/5 hover:ring-0 dark:bg-transparent bg-neutral-200 dark:hover:bg-[var(--primary-fuchsia-dark2)] hover:bg-neutral-200 dark:text-neutral-300 text-neutral-700 dark:hover:text-neutral-300 hover:text-neutral-700 text-center pr-0 md:hover:pr-2 transition-all duration-500 ease-out',
        isPending && 'opacity-25',
        'w-full md:w-auto h-full max-h-[16rem] lg:max-h-[20rem] px-3 md:px-[5%] py-[4%] md:py-[5%] font-bold break-normal text-md md:text-lg lg:text-xl'
      )}
      {...props}
    >
      {isPending ? 'loading' : children}
    </button>
  )
}