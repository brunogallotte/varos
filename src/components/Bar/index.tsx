import { HTMLProps, ReactNode } from 'react'

interface BarProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode
}

export function Bar({ children, ...props }: BarProps) {
  return (
    <div {...props}>
      <div className="flex w-full gap-10 overflow-hidden rounded-3xl border border-greyPaletteC7 p-6">
        {children}
      </div>
    </div>
  )
}
