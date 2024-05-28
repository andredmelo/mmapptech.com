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
        activeTab === value ? 'bg-gradient-to-b md:bg-gradient-to-r from-[var(--primary-fuchsia-dark3)] to-[var(--primary-fuchsia-dark4)] text-neutral-100 transition-all duration-500 ease-out rounded-tr-2xl rounded-tl-2xl rounded-br-none rounded-bl-none md:rounded-bl-3xl md:rounded-tl-3xl md:rounded-tr-none md:rounded-br-none mt-1 mb-0 md:mt-2 md:mb-2 mr-1 ml-1 md:mr-0 md:ml-10 lg:ml-20 pr-0 deboss' : 'mr-1 ml-1 md:mr-4 md:ml-4 lg:mr-12 lg:ml-12 mt-2 mb-2 md:mt-2 md:mb-2 rounded-2xl md:rounded-3xl ring-1 ring-white/5 hover:ring-0 bg-transparent hover:bg-[var(--primary-fuchsia-dark3)] text-neutral-300 hover:text-neutral-300 text-center pr-0 md:hover:pr-3 transition-all duration-[600ms] ease-out',
        isPending && 'opacity-25',
        'font-calSans tracking-wide w-full md:w-auto h-full max-h-[16rem] lg:max-h-[16rem] px-3 md:px-[5%] py-[4%] md:py-[5%] break-normal text-md md:text-lg lg:text-xl' //font-bold 
      )}
      {...props}
    >
      {/* isPending ? 'loading' : */ children}
    </button>
  )
}