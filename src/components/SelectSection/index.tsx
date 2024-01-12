'use client'

import { dataSelects } from '@/data/selects'
import { Select } from './components/Select'
import { ShowSelectPortal } from './components/ShowSelectPortal'

export function SelectSection() {
  return (
    <section className="mx-auto max-w-8xl pb-52 pt-64">
      <div className="flex flex-col gap-4">
        <h3 className="w-103 text-4xl font-bold text-greyPaletteC1">
          Simplifique seus investimentos e alcance seus objetivos
        </h3>
        <span className="w-100 text-xl font-medium text-greyPaletteC5">
          Conteúdos preparados para trazer mais segurança, independente do seu
          nível.
        </span>
      </div>
      <div className="flex justify-between">
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
