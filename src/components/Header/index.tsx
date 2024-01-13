'use client'

import Image from 'next/image'
import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/icons/cartIcon.svg'
import userIcon from '../../assets/icons/userIcon.svg'
import hamburguerIcon from '../../assets/icons/hamburguerIcon.svg'
import { useState } from 'react'
import { MenuToggleMobile } from './components/MenuMobileToggle'
import { MobileMenu } from '../MobileMenu'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenuIsOpen(state: boolean) {
    setIsMenuOpen(state)
  }

  return (
    <div>
      <div className="max-w-9/10 lg:max-w-9/10 mx-auto flex gap-44 py-10 text-varosPrincipalDoc md:h-20 md:py-2.5 xl:max-w-8xl">
        <div className="flex w-full items-center gap-19 text-sm">
          <Image src={logo} alt="Varos" className="h-10 w-24" />
          <nav className="hidden gap-20 lg:flex">
            <a href="#">Produtos</a>
            <a href="#">Blog</a>
            <a href="#">Conteúdos</a>
            <a href="#">Quem somos</a>
          </nav>
        </div>
        <div className="hidden text-lg sm:hidden md:hidden lg:flex">
          <button className="flex w-52 items-center gap-4 px-2.5 py-3">
            <Image src={cartIcon} alt="" />
            <a href="#">Assinar agora</a>
          </button>
          <button className="flex w-32 items-center gap-4 px-2.5 py-3">
            <Image src={userIcon} alt="" />
            <a href="#">Entrar</a>
          </button>
        </div>
        {/* <MenuToggleMobile toggleMenuIsOpen={toggleMenuIsOpen} /> */}
        <Image className="flex lg:hidden" src={hamburguerIcon} alt="" />
      </div>
    </div>
  )
}
