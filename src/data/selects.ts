import selectionIcon from '../assets/icons/selectionIcon.svg'
import fatorIcon from '../assets/icons/fatorIcon.svg'
import dividendosIcon from '../assets/icons/dividendosIcon.svg'
import essencialIcon from '../assets/icons/essencialIcon.svg'
import fllIcon from '../assets/icons/fllIcon.svg'
import smallIcon from '../assets/icons/smallIcon.svg'
import valuationIcon from '../assets/icons/valuationIcon.svg'
import codigoPyIcon from '../assets/icons/codigoPy.svg'
import dashPyIcon from '../assets/icons/dashPyIcon.svg'
import reelsIcon from '../assets/icons/cursoReels.svg'
import enciclopediaIcon from '../assets/icons/enciclopediaIcon.svg'

import { SelectItemProps } from '@/components/SelectSection/components/Select/components/SelectItem'
import { getContent } from '@/utils'

interface TestimonialType {
  content: string
  author: string
}

export const dataSelects: SelectItemProps[] = [
  {
    title: 'Carteira Seleção',
    icon: selectionIcon,
    category: 'wallets',
    content: getContent(
      'Baixo risco e resultados acima da média. Renda passiva pingando direto na sua conta. Os maiores potenciais de retorno da bolsa. Com a queda da inflação, a taxa de juros vai começar a cair vertiginosamente. As expectativas dos investidores são cada vez maiores.',
    ),
  },
  {
    title: 'Carteira FATOR',
    icon: fatorIcon,
    category: 'wallets',
    content: getContent(
      'Modelos de investimento quantitativos dominam Wall Street, 60% do dinheiro gerido nos EUA é feito por algoritmos, O mercado americano está há 20 anos na nossa frente, com o início massivo de modelos quantitativos a partir da década de 90.',
    ),
  },
  {
    title: 'Carteira Dividendos',
    icon: dividendosIcon,
    category: 'wallets',
    content: getContent(
      'O efeito bola de neve é um apelido carinhoso para o efeito dos juros compostos. Na prática, imagine que seus primeiros aportes são como uma singela bola de neve rolando montanha abaixo. Conforme essa bola vai descendo, ela se mistura com a neve do chão, ficando maior e mais pesada. Com o tempo, até chegar no pé da montanha, ela terá causado uma avalanche.',
    ),
  },
  {
    title: 'Carteira Essencial',
    icon: essencialIcon,
    category: 'wallets',
    content: getContent(
      'Analisar ações foi colocado como algo banal e que qualquer pessoa seria capaz de fazer. Que bastava você olhar alguns indicadores de uma ação que você saberia dizer quais eram bons ativos e quais eram ruins. O mercado vendeu que todo mundo deveria saber escolher as próprias ações, do contrário você estaria sendo passado para trás.',
    ),
  },
  {
    title: 'Carteira de FIIs',
    icon: fllIcon,
    category: 'wallets',
    content: getContent(
      'O seu dinheiro nunca teve tanto valor. Com menos de um cafezinho por dia, você vai receber todo o conhecimento de uma equipe de analista dedicada 100% aos seus rendimentos. Contamos com os melhores analistas do mercado, que se dedicam exclusivamente a cada setor. Está procurando uma equipe para te ajudar a construir e multiplicar o seu patrimônio? Eles estão aqui.',
    ),
  },
  {
    title: 'Carteira Small Caps',
    icon: smallIcon,
    category: 'wallets',
    content: getContent(
      'Small Caps são ações de empresas que possuem menores valores de mercado. Por serem menores, muitas vezes essas empresas de baixa estatura são gigantes em potencial. Pense em como seria investir na Weg em meados de 2009, quando a empresa não tinha 10% do valor de mercado que tem hoje. De lá para cá, o preço da WEG já subiu quase 1800%. Quem enxergou a oportunidade antes dos demais, conseguiu excelentes retornos.',
    ),
  },
  {
    title: 'Valuation 2.0',
    icon: valuationIcon,
    category: 'courses',
    content: getContent(
      'Começando agora? O curso parte do início da vida e explica como o mercado financeiro surgiu. Já é um mestre na arte? Sem problemas, você vai aprender simulações de Monte Carlo, opções reais e várias coisas que você nunca ouviu falar. Esqueça essa ideia de que curso online não tem interação. Na nossa plataforma, você pode tirar dúvidas a qualquer momento e aprender com as perguntas e respostas dos outros alunos. Nós temos um time de 8 analistas que ficam de olho diariamente pra responder qualquer dúvida que você tenha assim que ela aparecer.',
    ),
  },
  {
    title: 'Código.py',
    icon: codigoPyIcon,
    category: 'courses',
    content: getContent(
      'Domine a criação de modelos de investimento, machine learning e manipulação de dados com python e ganhe muito dinheiro no mercado financeiro. Domine a criação de modelos de investimento, machine learning e manipulação de dados com python e ganhe muito dinheiro no mercado financeiro.',
    ),
  },
  {
    title: 'Dash.py',
    icon: dashPyIcon,
    category: 'courses',
    content: getContent(
      'Com o Dash.py você vai... Criar Dashboards para gerenciar suas finanças pessoais. Realizar análise em tempo real de dados e notícias do mercado financeiro. Criar e apresentar dashboards interativos para se destacar na sua área de trabalho.',
    ),
  },
  {
    title: 'Curso Reels',
    icon: reelsIcon,
    category: 'courses',
    content: getContent(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ',
    ),
  },
  {
    title: 'Enciclopédia de FII',
    icon: enciclopediaIcon,
    category: 'courses',
    content: getContent(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ',
    ),
  },
  {
    title: 'Consultoria',
    icon: valuationIcon,
    category: 'consultory',
    content: getContent(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ',
    ),
  },
]

export const testimonialsData: TestimonialType[] = [
  {
    author: 'Assinante VAROS',
    content:
      'Conteúdos preparados para trazer mais segurança, independente do seu nível. Conteúdos preparados para trazer mais segurança, independente do seu nível.Conteúdos preparados para trazer mais segurança, independente do seu nível.',
  },
  {
    author: 'Assinante VAROS',
    content:
      'Eu acompanho vários gestores de fundo e educadores financeiros. Tu de longe és um dos que mais contribui para minha construção de conhecimento. A forma que colocas coisas que outras pessoas fazem parecer complexas de uma forma super simples e ginal. Parabéns! E continue.',
  },
  {
    author: 'Assinante VAROS',
    content:
      'Nunca vi algo tão completo que nem o de vocês. E olha que esses 11 anos que tô no MF já assinei muita casa de análise. Nada chega perto do trabalho seu e da sua equipe.',
  },
]
