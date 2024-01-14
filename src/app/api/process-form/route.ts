import { api } from '@/lib/axios'
import { NextResponse } from 'next/server'

interface DataType {
  name: string
  mail: string
  tel: string
}

export async function POST(request: Request) {
  const data: DataType = await request.json()

  // Simulação do endpoint imaginário abaixo, que irá retornar erro, por isso deixei comentado

  // const response = await api.post('/submit-form', {
  //   name: data.name,
  //   mail: data.mail,
  //   tel: data.tel,
  // })

  return NextResponse.json(data)
}
