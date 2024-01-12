import Image from 'next/image'

import arrowIcon from '../../assets/icons/arrowRight.svg'
import fatorIcon from '../../assets/icons/fatorIcon.svg'
import dividendosIcon from '../../assets/icons/dividendosIcon.svg'
import pyIcon from '../../assets/icons/pyIcon.svg'
import glow1 from '../../assets/images/glow1.png'
import glow2 from '../../assets/images/glow2.png'
import glow3 from '../../assets/images/glow3.png'
import { SliderComponent } from './components/Slider'
import { Card } from './components/Card'

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-8xl items-center gap-40">
      <div className="flex h-101 max-w-102 flex-col">
        <h2 className="mb-6 text-title/[70.4px] font-extrabold text-greyPaletteC1">
          Investir de forma mais inteligente passa por aqui.
        </h2>
        <span className="mb-8 w-99 text-lg/[21.6px] text-greyPaletteC2">
          Fazemos de tudo para que você possa conquistar seus sonhos da melhor
          forma possível.
        </span>
        <button className="flex w-65 items-center justify-center gap-2.5 rounded-12 bg-varosPrincipalGreen/[0.4] px-12 py-4 text-greenPaletteC1">
          Comprar agora
          <Image src={arrowIcon} alt="" />
        </button>
        <SliderComponent />
      </div>

      <div className="flex w-80 flex-col gap-10">
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
