import Image from 'next/image'
import logoFooter from '../../assets/images/logoFooter.svg'
import logoText from '../../assets/images/logo.svg'

export function Footer() {
  return (
    <footer className="max-w-8xl h-100 mx-auto">
      <div className="flex h-full gap-6 text-greyPaletteC1">
        <div className="w-75 flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <Image
              src={logoFooter}
              alt=""
              className="h-20 w-20 rounded-lg bg-greyPaletteC1 p-4"
            />
            <Image src={logoText} alt="" />
          </div>
          <div className="flex h-20 flex-col">
            <span>Varos 2023</span>
            <span>Todos os direitos reservados</span>
          </div>
        </div>
        <div className="flex gap-6">
          <nav className="flex w-44 flex-col gap-6">
            <strong>Cursos</strong>
            <a href="#">Valuation do Zero ao Avançado 2.0</a>
            <a href="#">Código.py</a>
            <a href="#">Minicurso Reels</a>
            <a href="#">Enciclopédia de FII</a>
          </nav>
          <nav className="flex w-44 flex-col gap-6">
            <strong>Carteiras</strong>
            <a href="#">Carteira FATOR</a>
            <a href="#">Carteira Seleção</a>
            <a href="#">Carteira Essencial</a>
            <a href="#">Carteira Small Caps</a>
            <a href="#">Carteira Dividendos</a>
            <a href="#">Carteira de FIIs</a>
          </nav>
          <nav className="flex w-44 flex-col gap-6">
            <strong>Sobre</strong>
            <a href="#">Quem somos</a>
          </nav>
          <nav className="flex w-44 flex-col gap-6">
            <strong>Redes sociais</strong>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">Youtuber</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
