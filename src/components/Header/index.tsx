import Image from 'next/image'
import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/icons/cartIcon.svg'
import userIcon from '../../assets/icons/userIcon.svg'

export function Header() {
  return (
    <div className="text-varosPrincipalDoc max-w-8xl mx-auto flex gap-44 py-2.5">
      <div className="gap-19 flex w-full items-center text-sm">
        <Image src={logo} alt="Varos" className="h-3.5 w-20" />
        <nav className="flex gap-20">
          <a href="#">Produtos</a>
          <a href="#">Blog</a>
          <a href="#">Conteúdos</a>
          <a href="#">Quem somos</a>
        </nav>
      </div>
      <div className="flex text-lg">
        <button className="flex w-52 items-center gap-4 px-2.5 py-3">
          <Image src={cartIcon} alt="" />
          <a href="#">Assinar agora</a>
        </button>
        <button className="flex w-32 items-center gap-4 px-2.5 py-3">
          <Image src={userIcon} alt="" />
          <a href="#">Entrar</a>
        </button>
      </div>
    </div>
  )
}
