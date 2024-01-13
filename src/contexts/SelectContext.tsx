'use client'

import { ReactNode, createContext, useState } from 'react'

import iconInitialSelect from '../assets/icons/selectionIcon.svg'

export type ItemSelected = {
  title: string
  icon: string
  category?: string
}

interface SelectContextType {
  itemSelectedInBody: ItemSelected
  changeItemSelectedInBody: (item: ItemSelected) => void
}

interface SelectProviderProps {
  children: ReactNode
}

export const SelectContext = createContext({} as SelectContextType)

export function SelectProvider({ children }: SelectProviderProps) {
  const [itemSelectedInBody, setItemSelectedInBody] = useState<ItemSelected>({
    icon: iconInitialSelect,
    title: 'Carteira Seleção',
  })

  function changeItemSelectedInBody(item: ItemSelected) {
    setItemSelectedInBody(item)
  }

  return (
    <SelectContext.Provider
      value={{ itemSelectedInBody, changeItemSelectedInBody }}
    >
      {children}
    </SelectContext.Provider>
  )
}
