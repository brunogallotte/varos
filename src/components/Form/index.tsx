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
    <section className="max-w-8xl mx-auto pb-32">
      <div className="flex justify-between">
        <div className="w-98 flex flex-col gap-2">
          <h4 className="text-4xl font-bold text-greyPaletteC1">
            Cadastre-se para receber mais informações.
          </h4>
          <span className="w-80 text-lg text-greyPaletteC1">
            Fique ligado no que tem de melhor no Mercado Financeiro.
          </span>
        </div>
        <form
          onSubmit={handleSubmit(handleSubmitMessage)}
          className="border-greyPaletteC7 rounded-10 w-102 flex flex-col gap-6 border bg-greyPaletteC9 p-14"
        >
          <input
            className="border-greyPaletteC7 text-greyPaletteC6 rounded border bg-greyPaletteC8 px-6 py-3 text-lg"
            type="text"
            placeholder="Nome"
            {...register('name')}
          />
          <input
            className="border-greyPaletteC7 text-greyPaletteC6 rounded border bg-greyPaletteC8 px-6 py-3 text-lg"
            type="email"
            placeholder="Melhor e-mail"
            {...register('mail')}
          />
          <input
            className="border-greyPaletteC7 tet-greyPaletteC6 rounded border bg-greyPaletteC8 px-6 py-3 text-lg"
            type="text"
            placeholder="Celular"
            {...register('cel')}
          />
          <button
            disabled={isSubmitting}
            className="border-varosPrincipalDoc rounded border bg-varosPrincipalGreen px-4 py-2.5 text-lg uppercase disabled:cursor-not-allowed disabled:opacity-60"
          >
            Quero me inscrever
          </button>
        </form>
      </div>
    </section>
  )
}
