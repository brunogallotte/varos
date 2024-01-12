import { SelectContext } from '@/contexts/SelectContext'
import Image from 'next/image'
import { useContext } from 'react'

export interface SelectItemProps {
  title: string
  icon: string
  category?: string
}

export function SelectItem({ icon, title }: SelectItemProps) {
  const { changeItemSelectedInBody } = useContext(SelectContext)

  const itemToContext = {
    title,
    icon,
  }

  return (
    <button
      onClick={() => changeItemSelectedInBody(itemToContext)}
      className="flex gap-4 p-4"
    >
      <Image src={icon} alt="Carteira Seleção" />
      <span className="cursor-pointer text-greyPaletteC1">{title}</span>
    </button>
  )
}
