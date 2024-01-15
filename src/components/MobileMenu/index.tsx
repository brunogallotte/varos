'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import userIcon from '../../assets/icons/userIcon.svg'
import arrowRigth from '../../assets/icons/arrowRight2.svg'

export function MobileMenu() {
  return (
    <motion.div
      className="mx-auto flex w-full border-greyPaletteC8 bg-varosPrincipalDark"
      initial={{ translateY: -80, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ durantion: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto w-full max-w-9/10">
        <div className="flex w-full flex-col gap-6">
          <button className="flex w-full items-center justify-center gap-4 rounded border border-varosPrincipalDoc bg-varosPrincipalDark p-2.5 text-lg font-medium uppercase text-varosPrincipalDoc">
            <Image src={userIcon} alt="" />
            Entrar
          </button>
          <button className="flex w-full items-center justify-center gap-4 rounded border border-varosPrincipalDoc bg-varosPrincipalGreen p-2.5 text-lg font-medium uppercase text-varosPrincipalDark">
            Assinar Agora
          </button>
        </div>
        <div className="mt-10 rounded-lg bg-greyPaletteC8">
          <div className="p-6">
            <span className="pb-6 text-varosPrincipalDoc">Produtos</span>
          </div>
          <div className="border-b border-varosPrincipalDoc" />
          <div className="px-6 pb-6">
            <div className="flex w-full flex-col gap-2">
              <header className="w-ful flex items-center justify-between pt-8">
                <span className="text-varosPrincipalDoc">Carteiras</span>
                <Image src={arrowRigth} alt="" />
              </header>
              <p className="text-xs/[14.4px] text-greyPaletteC5">
                Aprenda a encontrar as melhores ações, invista seu dinheiro de
                maneira inteligente e construa um futuro financeiro sólido.
              </p>
            </div>
            <div className="flex w-full flex-col gap-2">
              <header className="w-ful flex items-center justify-between pt-8">
                <span className="text-varosPrincipalDoc">Carteiras</span>
                <Image src={arrowRigth} alt="" />
              </header>
              <p className="text-xs/[14.4px] text-greyPaletteC5">
                Aprenda a encontrar as melhores ações, invista seu dinheiro de
                maneira inteligente e construa um futuro financeiro sólido.
              </p>
            </div>
            <div className="flex w-full flex-col gap-2">
              <header className="w-ful flex items-center justify-between pt-8">
                <span className="text-varosPrincipalDoc">Carteiras</span>
                <Image src={arrowRigth} alt="" />
              </header>
              <p className="text-xs/[14.4px] text-greyPaletteC5">
                Aprenda a encontrar as melhores ações, invista seu dinheiro de
                maneira inteligente e construa um futuro financeiro sólido.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 pt-16">
          <span className="border-b border-greyPaletteC8 pb-6 font-bold text-varosPrincipalDoc">
            Blog
          </span>
          <span className="border-b border-greyPaletteC8 pb-6 font-bold text-varosPrincipalDoc">
            Quem somos
          </span>
          <span className="border-b border-greyPaletteC8 pb-6 font-bold text-varosPrincipalDoc">
            Conteúdos
          </span>
        </div>
      </div>
    </motion.div>
  )
}
