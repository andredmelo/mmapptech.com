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
        activeTab === value ? 'bg-white text-neutral-900' : 'bg-neutral-800 text-neutral-400',
        isPending && 'opacity-25',
        'whitespace-nowrap px-[1%] h-full w-full rounded-lg text-md md:text-md lg:text-[2rem] xl:text-lg 2xl:text-xl'
      )}
      {...props}
    >
      {isPending ? 'loading' : children}
    </button>
  )
}
