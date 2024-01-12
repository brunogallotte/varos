import Image from 'next/image'
import { SelectItem } from '../Select/components/SelectItem'
import selectionIcon from '../../../../assets/icons/selectionIcon.svg'
import graphicImage from '../../../../assets/images/graphicImage.png'
import glow from '../../../../assets/images/Glow4.png'
import { useContext } from 'react'
import { SelectContext } from '@/contexts/SelectContext'

interface ShowSelectPortalProps {
  icon: string
  title: string
}

export function ShowSelectPortal() {
  const { itemSelectedInBody } = useContext(SelectContext)

  return (
    <>
      <div className="relative z-10 h-101.5 w-105 overflow-hidden rounded-10 border border-greyPaletteC8 bg-greyPaletteC9 pl-10 pt-6">
        <header className="mb-6">
          <SelectItem
            icon={itemSelectedInBody.icon}
            title={itemSelectedInBody.title}
          />
        </header>
        <div className="flex flex-col gap-4">
          <strong className="w-78 text-2xl font-semibold text-greyPaletteC1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </strong>
          <span className="mb-4 w-80 text-base/[19.2px] text-greyPaletteC3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </span>
        </div>
        <Image className="absolute mt-auto" src={graphicImage} alt="" />
      </div>
      <Image className="absolute right-20 mr-24 mt-16" src={glow} alt="" />
    </>
  )
}
