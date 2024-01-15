import Image from 'next/image'
import { useContext } from 'react'

import { SelectItem } from '../Select/components/SelectItem'
import graphicImage from '../../../../assets/images/graphicImage.png'
import glow from '../../../../assets/images/Glow4.png'
import { SelectContext } from '@/contexts/SelectContext'
import { dataSelects } from '@/data/selects'

export function ShowSelectPortal() {
  const { itemSelectedInBody } = useContext(SelectContext)

  const dataFilterContentIndex = dataSelects.findIndex((item) => {
    if (item.title === itemSelectedInBody.title) {
      return item
    }

    return null
  })

  return (
    <>
      <div className="relative z-10 mt-8 h-98 overflow-hidden rounded-10 border border-greyPaletteC8 bg-greyPaletteC9 pl-10 pt-6 md:mt-0 md:w-100 lg:h-101.5 lg:w-105">
        <header className="mb-6">
          <SelectItem
            icon={itemSelectedInBody.icon}
            title={itemSelectedInBody.title}
            variant="showPortal"
          />
        </header>
        <div className="flex flex-col gap-4">
          <strong className="text-2xl font-semibold text-greyPaletteC1 md:w-78">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </strong>
          <span className="text-base/[19.2px] text-greyPaletteC3 md:w-80">
            {dataSelects[dataFilterContentIndex].content}
          </span>
        </div>
        <Image
          className="absolute bottom-0 pt-4 lg:-bottom-5 lg:mt-auto"
          src={graphicImage}
          alt=""
        />
      </div>
      <Image
        className="right-0 ml-80 hidden lg:absolute lg:right-20 lg:mr-24 lg:mt-16 lg:flex"
        src={glow}
        alt=""
      />
    </>
  )
}
