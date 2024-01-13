import Image from 'next/image'
import { useState } from 'react'
import { SelectBody } from './components/SelectBody'
import { SelectItemProps } from './components/SelectItem'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import chevronDownIcon from '../../../../assets/icons/chrevonDown.svg'

interface SelectProps {
  title: string
  category: string
  dataItems: SelectItemProps[]
}

export function Select({ dataItems, title, category }: SelectProps) {
  const [selectMenuIsVisible, setSelectMenuIsVisible] = useState<boolean>(false)
  const [parent] = useAutoAnimate()

  function handleSelectMenuIsVisible() {
    setSelectMenuIsVisible(!selectMenuIsVisible)
  }

  return (
    <div className="md:w-77" ref={parent}>
      <button
        type="button"
        className="flex w-full items-center justify-center gap-2.5 rounded-10 bg-greyPaletteC8 px-8 py-4 text-lg text-greyPaletteC1"
        onClick={handleSelectMenuIsVisible}
      >
        <span className="tracking-widest">{title}</span>
        <Image src={chevronDownIcon} alt="" />
      </button>
      <SelectBody
        dataItems={dataItems}
        category={category}
        isVisible={selectMenuIsVisible}
      />
    </div>
  )
}
