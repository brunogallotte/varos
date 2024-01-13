import Image from 'next/image'

import aspasImg from '../../../assets/icons/aspas.svg'
import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  author: string
  content: string
}

export function Card({ author, content, ...props }: CardProps) {
  return (
    <div {...props}>
      <div className="w-79 h-77.5 relative flex flex-col justify-center rounded-3xl border border-greyPaletteC8 bg-greyPaletteC9 p-8">
        <p className="pl-6 text-lg/[21.6px] font-medium text-greyPaletteC5">
          {content}
        </p>
        <span className="justify-star mt-6 pl-6 text-lg font-medium italic text-greyPaletteC1">
          {author}
        </span>
        <Image
          className="absolute left-0 top-0 ml-6 mt-6"
          src={aspasImg}
          alt=""
        />
      </div>
    </div>
  )
}
