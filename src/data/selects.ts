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

export const dataSelects: SelectItemProps[] = [
  {
    title: 'Carteira Seleção',
    icon: selectionIcon,
    category: 'wallets',
  },
  {
    title: 'Carteira FATOR',
    icon: fatorIcon,
    category: 'wallets',
  },
  {
    title: 'Carteira Dividendos',
    icon: dividendosIcon,
    category: 'wallets',
  },
  {
    title: 'Carteira Essencial',
    icon: essencialIcon,
    category: 'wallets',
  },
  {
    title: 'Carteira de FIIs',
    icon: fllIcon,
    category: 'wallets',
  },
  {
    title: 'Carteira Small Caps',
    icon: smallIcon,
    category: 'wallets',
  },
  {
    title: 'Valuation 2.0',
    icon: valuationIcon,
    category: 'courses',
  },
  {
    title: 'Código.py',
    icon: codigoPyIcon,
    category: 'courses',
  },
  {
    title: 'Dash.py',
    icon: dashPyIcon,
    category: 'courses',
  },
  {
    title: 'Carteira Essencial',
    icon: essencialIcon,
    category: 'courses',
  },
  {
    title: 'Curso Reels',
    icon: reelsIcon,
    category: 'courses',
  },
  {
    title: 'Enciclopédia de FII',
    icon: enciclopediaIcon,
    category: 'courses',
  },
  {
    title: 'Consultoria',
    icon: valuationIcon,
    category: 'consultory',
  },
]
