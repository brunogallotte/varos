import Image from 'next/image'
import logoFooter from '../../assets/images/logoFooter.svg'
import logoText from '../../assets/images/logo.svg'

export function Footer() {
  return (
    <footer className="max-w-9/10 mx-auto pb-8 md:h-102 md:pb-0 lg:h-100 lg:max-w-8xl">
      <div className="h-full justify-center gap-6 text-greyPaletteC1 lg:flex">
        <div className="w-75 flex-col justify-between lg:flex">
          <div className="flex flex-col gap-4 pb-10 lg:gap-4">
            <Image
              src={logoFooter}
              alt=""
              className="h-20 w-20 rounded-lg bg-greyPaletteC1 p-4"
            />
            <Image src={logoText} alt="" />
          </div>
          <div className="mb-6 flex flex-col md:hidden lg:flex lg:h-20 lg:flex-col">
            <span>Varos 2023</span>
            <span>Todos os direitos reservados</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 gap-y-20 md:grid-cols-4">
          <nav className="flex w-full flex-col gap-6 md:w-44">
            <strong>Cursos</strong>
            <a href="#">Valuation do Zero ao Avançado 2.0</a>
            <a href="#">Código.py</a>
            <a href="#">Minicurso Reels</a>
            <a href="#">Enciclopédia de FII</a>
          </nav>
          <nav className="flex w-full flex-col gap-6 md:w-44">
            <strong>Carteiras</strong>
            <a href="#">Carteira FATOR</a>
            <a href="#">Carteira Seleção</a>
            <a href="#">Carteira Essencial</a>
            <a href="#">Carteira Small Caps</a>
            <a href="#">Carteira Dividendos</a>
            <a href="#">Carteira de FIIs</a>
          </nav>
          <nav className="flex w-full flex-col gap-6 md:w-44">
            <strong>Sobre</strong>
            <a href="#">Quem somos</a>
          </nav>
          <nav className="flex w-full flex-col gap-6 md:w-44">
            <strong>Redes sociais</strong>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">Youtuber</a>
          </nav>
        </div>
        <div className="hidden h-20 flex-col pt-10 md:flex lg:hidden">
          <span>Varos 2023</span>
          <span>Todos os direitos reservados</span>
        </div>
      </div>
    </footer>
  )
}
