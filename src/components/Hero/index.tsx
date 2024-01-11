import Image from 'next/image'
import arrowIcon from '../../assets/icons/arrowRight.svg'

export function Hero() {
  return (
    <div className="max-w-8xl mx-auto flex w-full gap-40 py-40">
      <div className="max-w-intro flex flex-col">
        <h2 className="text-title/[70.4px] mb-6 font-extrabold text-greyPaletteC1">
          Investir de forma mais inteligente passa por aqui.
        </h2>
        <span className="w-99 mb-8 text-lg/[21.6px] text-greyPaletteC2">
          Fazemos de tudo para que você possa conquistar seus sonhos da melhor
          forma possível.
        </span>
        <button className="rounded-12 text-greenPaletteC1 w-65 flex items-center justify-center gap-2.5 bg-varosPrincipalGreen/[0.4] px-12 py-4">
          Comprar agora
          <Image src={arrowIcon} alt="" />
        </button>
      </div>
      <div>
        <div>
          <span>Carteira fator</span>
        </div>
        <div>
          <span>Carteira de dividendos</span>
        </div>
        <div>
          <span>Codigo.py</span>
        </div>
      </div>
    </div>
  )
}
