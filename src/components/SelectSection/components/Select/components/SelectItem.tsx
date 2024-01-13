import { useContext } from 'react'
import { SelectContext } from '@/contexts/SelectContext'

import Image from 'next/image'
import { motion } from 'framer-motion'

export interface SelectItemProps {
  title: string
  icon: string
  category?: string
  variant?: 'dropdown' | 'showPortal'
  content?: string
}

export function SelectItem({ icon, title, variant }: SelectItemProps) {
  const { changeItemSelectedInBody, itemSelectedInBody } =
    useContext(SelectContext)

  const itemToContext = {
    title,
    icon,
  }

  return (
    <button
      onClick={() => changeItemSelectedInBody(itemToContext)}
      className="relative flex gap-4 p-4"
    >
      <Image className="z-10" src={icon} alt="Carteira Seleção" />
      <span className="z-10 cursor-pointer text-greyPaletteC1">{title}</span>
      {itemSelectedInBody.title === title && variant === 'dropdown' ? (
        <motion.div
          layoutId="teste"
          className="absolute inset-0 h-full w-full rounded-10 bg-greyPaletteC8/50"
        />
      ) : null}
    </button>
  )
}
