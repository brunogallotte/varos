'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const newMessageFormValidationSchema = zod.object({
  name: zod.string().min(1, 'Informe o seu nome'),
  mail: zod.string().min(1, 'Informe o seu e-mail'),
  cel: zod.string().min(11, 'Informe o seu número do celular'),
})

type NewMessageFormData = zod.infer<typeof newMessageFormValidationSchema>

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewMessageFormData>({
    resolver: zodResolver(newMessageFormValidationSchema),
  })

  function handleSubmitMessage(data: NewMessageFormData) {
    console.log(data)
  }

  return (
    <section className="max-w-9/10 mx-auto pb-32 pt-32 md:pt-0 lg:max-w-8xl">
      <div className="flex flex-col justify-between md:flex-row">
        <div className="mb-10 flex flex-col gap-2 md:mb-0 md:w-98">
          <h4 className="text-center text-4xl font-bold text-greyPaletteC1 md:text-start">
            Cadastre-se para receber mais informações.
          </h4>
          <span className="w-full text-center text-lg text-greyPaletteC1 md:w-80 md:text-start">
            Fique ligado no que tem de melhor no Mercado Financeiro.
          </span>
        </div>
        <form
          onSubmit={handleSubmit(handleSubmitMessage)}
          className="md:w-81 flex flex-col gap-6 rounded-10 border border-greyPaletteC7 bg-greyPaletteC9 p-14 lg:w-102"
        >
          <input
            className="rounded border border-greyPaletteC7 bg-greyPaletteC8 px-6 py-3 text-lg text-greyPaletteC6"
            type="text"
            placeholder="Nome"
            {...register('name')}
          />
          <input
            className="rounded border border-greyPaletteC7 bg-greyPaletteC8 px-6 py-3 text-lg text-greyPaletteC6"
            type="email"
            placeholder="Melhor e-mail"
            {...register('mail')}
          />
          <input
            className="tet-greyPaletteC6 rounded border border-greyPaletteC7 bg-greyPaletteC8 px-6 py-3 text-lg"
            type="text"
            placeholder="Celular"
            {...register('cel')}
          />
          <button
            disabled={isSubmitting}
            className="rounded border border-varosPrincipalDoc bg-varosPrincipalGreen px-4 py-2.5 text-lg uppercase disabled:cursor-not-allowed disabled:opacity-60"
          >
            Quero me inscrever
          </button>
        </form>
      </div>
    </section>
  )
}
