import React from 'react'
import HeaderNavigationLink from './header-navigation-link.js'
import LanguageSwitcher from './language-switcher.js'
import Button from './Button.js'
import { slide as Menu } from 'react-burger-menu'
import UserButton from './user-button.js'

export default function MobileNavigationMenu({menuOpen,handleStateChange}) {
  return (
   <Menu
      right
      overlayClassName="bg-black left-0"
      className="mq925:block hidden"
      itemListClassName="flex flex-col items-center justify-start gap-[20px]"
      burgerButtonClassName="mq925:block hidden right-10"
      isOpen={menuOpen}
      onStateChange={handleStateChange}
    >
      <UserButton/>
<Button name="Home"/>
<Button name="About"/>
<Button name="Contact"/>
<Button name="🤍 Favourite"/>
        <LanguageSwitcher/>
      </Menu>
  )
}
