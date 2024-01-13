'use client'

import { useState } from 'react'

interface MenuToggleMobileProps {
  toggleMenuIsOpen: (state: boolean) => void
}

export function MenuToggleMobile({ toggleMenuIsOpen }: MenuToggleMobileProps) {
  const [isChecked, setIsChecked] = useState(false)

  const onCheckboxChange = () => {
    setIsChecked((prevChecked) => {
      const newChecked = !prevChecked
      toggleMenuIsOpen(newChecked)
      return newChecked
    })
  }

  return (
    <>
      <label
        htmlFor="menu-icon"
        className="lg:none fixed right-0 top-0 mr-4 mt-4 h-16 w-16 cursor-pointer rounded bg-white p-2.5"
      >
        <input
          id="menu-icon"
          type="checkbox"
          checked={isChecked}
          onChange={onCheckboxChange}
        />
        <span className="relative left-0 mb-1 block h-1 w-full rounded bg-white"></span>
        <span></span>
        <span></span>
      </label>
    </>
  )
}
