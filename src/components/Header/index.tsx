'use client'
import { useState } from 'react'

import Image from 'next/image'
import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/icons/cartIcon.svg'
import userIcon from '../../assets/icons/userIcon.svg'
import Link from 'next/link'
import Hamburger from 'hamburger-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleIsMenuOpen() {
    if (isMenuOpen) {
      setIsMenuOpen(!isMenuOpen)
    }
  }

  return (
    <div>
      <div className="mx-auto flex max-w-9/10 gap-44 py-10 text-varosPrincipalDoc md:h-20 md:py-2.5 lg:max-w-9/10 lg:gap-20 xl:max-w-8xl">
        <div className="flex w-full items-center gap-19 text-sm">
          <Link className="flex-shrink-0" href="/">
            <Image
              src={logo}
              alt="Varos"
              className="h-10 w-24"
              onClick={handleIsMenuOpen}
            />
          </Link>
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
        <Link
          className="flex items-center lg:hidden"
          href={!isMenuOpen ? '/menu' : '/'}
        >
          <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
        </Link>
      </div>
    </div>
  )
}
