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
        'h-24 rounded-lg text-lg'
      )}
      {...props}
    >
      {isPending ? 'loading' : children}
    </button>
  )
}
