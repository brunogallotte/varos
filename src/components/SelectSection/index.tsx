'use client'

import { dataSelects } from '@/data/selects'
import { Select } from './components/Select'
import { ShowSelectPortal } from './components/ShowSelectPortal'

export function SelectSection() {
  return (
    <section className="mx-auto max-w-9/10 md:pb-24 md:pt-24 lg:max-w-9/10 lg:pb-52 lg:pt-64 xl:max-w-8xl">
      <div className="flex w-full flex-col gap-4">
        <h3 className="text-center text-4xl font-bold text-greyPaletteC1 md:w-103 md:text-start">
          Simplifique seus investimentos e alcance seus objetivos
        </h3>
        <span className="text-center text-xl font-medium text-greyPaletteC5 md:w-100 md:text-center md:text-start">
          Conteúdos preparados para trazer mais segurança, independente do seu
          nível.
        </span>
      </div>
      <div className="flex-col gap-6 md:flex md:flex-row md:justify-between">
        <div className="mt-10 flex flex-col gap-4">
          <Select
            dataItems={dataSelects}
            title="Carteiras"
            category="wallets"
          />
          <Select dataItems={dataSelects} title="Cursos" category="courses" />
          <Select
            dataItems={dataSelects}
            title="Consultoria"
            category="consultory"
          />
        </div>
        <ShowSelectPortal />
      </div>
    </section>
  )
}
