import Image from 'next/image'
import { Card } from './components/Card'

import arrowIcon from '../../assets/icons/arrowRight.svg'
import fatorIcon from '../../assets/icons/fatorIcon.svg'
import dividendosIcon from '../../assets/icons/dividendosIcon.svg'
import pyIcon from '../../assets/icons/pyIcon.svg'
import glow1 from '../../assets/images/glow1.png'
import glow2 from '../../assets/images/glow2.png'
import glow3 from '../../assets/images/glow3.png'
import { SliderComponent } from './components/Slider'

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-9/10 pb-40 pt-16 md:mt-40 md:pb-0 md:pt-0 lg:max-w-9/10 lg:items-center xl:max-w-8xl xl:gap-64">
      <div className="flex w-full flex-col items-center md:h-101 md:max-w-81 md:items-start lg:max-w-102">
        <h2 className="mb-6 text-center text-4xl font-extrabold text-greyPaletteC1 md:text-start md:text-5xl lg:text-title/[70.4px]">
          Investir de forma mais inteligente passa por aqui.
        </h2>
        <span className="mb-8 text-center text-lg/[21.6px] text-greyPaletteC2 md:w-80 md:text-start lg:w-99">
          Fazemos de tudo para que você possa conquistar seus sonhos da melhor
          forma possível.
        </span>
        <button className="flex w-65 items-center justify-center gap-2.5 rounded-12 bg-varosPrincipalGreen/[0.4] px-12 py-4 text-greenPaletteC1">
          Comprar agora
          <Image src={arrowIcon} alt="" />
        </button>
        <SliderComponent />
      </div>

      <div className="hidden w-80 flex-col gap-10 md:flex lg:flex">
        <div className="relative z-10 flex h-24 items-center">
          <Card icon={fatorIcon} title="Carteira Fator" width="w-75" />
          <Image src={glow1} alt="" className="absolute right-0" />
        </div>

        <div className="relative z-10 flex h-24 items-center justify-end">
          <Card
            icon={dividendosIcon}
            title="Carteira de Dividendos"
            width="w-77"
          />
          <Image src={glow2} alt="" className="absolute -left-4" />
        </div>

        <div className="relative z-10 flex h-24 items-center justify-start">
          <Card icon={pyIcon} title="Código" width="w-56" titleSufix={true} />
          <Image src={glow3} alt="" className="absolute right-10" />
        </div>
      </div>
    </section>
  )
}
