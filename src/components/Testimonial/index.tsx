import testimonialImage from '../../assets/images/testimonial.png'

import Image from 'next/image'
import { Bar } from '../Bar'
import { Card } from './components/Card'
import { testimonialsData } from '@/data/selects'

export function Testimonial() {
  return (
    <section className="max-w-9/10 mx-auto mt-20 flex flex-col gap-4 md:flex-row md:pb-24 md:pt-24 lg:mt-0 lg:max-w-8xl lg:justify-between lg:gap-20 lg:pb-21">
      <div className="mb-6 flex flex-col gap-10 md:mb-0 md:h-102 md:w-100 md:gap-20">
        <div className="gap-2">
          <h4 className="mb-2 text-4xl font-bold text-greyPaletteC1">
            Didática de verdade
          </h4>
          <span className="text-lg font-bold text-greyPaletteC1">
            Garantindo seu aprendizado
          </span>
        </div>
        <div className="relative flex max-w-full overflow-hidden md:max-w-[325px] lg:max-w-full lg:gap-6">
          {testimonialsData.map((item) => {
            return (
              <Card
                key={item.content}
                content={item.content}
                author={item.author}
                className="animate-infinite-carousel"
              />
            )
          })}
          <div className="absolute inset-0 z-10 w-full bg-gradient-to-r from-transparent to-varosPrincipalDark" />
        </div>
      </div>
      <div className="relative flex flex-col overflow-hidden md:gap-20">
        <Image className="z-20" src={testimonialImage} alt="" />

        <Bar className="md:w-[414px] lg:w-full">
          <div className="z-20 flex w-full items-center lg:justify-around">
            <div className=" flex w-20.5 flex-col">
              <span className="font-bold tracking-widest text-greyPaletteC4 lg:text-lg">
                + 1000
              </span>
              <span className="text-varosPrincipalDoc md:text-sm">
                Nota média geral das aulas
              </span>
            </div>
            <div className="w-20.5">
              <span className="block text-lg font-bold tracking-widest text-varosPrincipalGreen">
                4,8/5
              </span>
              <span className="text-varosPrincipalDoc md:text-sm">
                Nota média geral das aulas
              </span>
            </div>
            <div className="w-20.5">
              <span className="block text-lg font-bold text-greyPaletteC4">
                10k+
              </span>
              <span className="text-varosPrincipalDoc md:text-sm">
                Comunidade
              </span>
            </div>
          </div>
        </Bar>

        <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent to-varosPrincipalDark" />
      </div>
    </section>
  )
}
