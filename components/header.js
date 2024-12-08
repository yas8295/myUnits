import Image from "next/image";
import LanguageSwitcher from "./language-switcher";
import { useState } from "react";
import {motion} from "framer-motion"
import HeaderNavigationLink from "./header-navigation-link.js";
import UserButton from "./user-button.js";
import MobileNavigationMenu from "./mobile-navigation-menu.js";

const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.div
      initial={{y: "-100%",opacity:0}}
    whileInView={{y: "0",opacity:1}}
    viewport={{once:true}}
    transition={{type:"spring",stiffness:60}}
      className={`flex justify-between text-[14px] text-[#0512f5] shadow-[0px_8px_14px_rgba(0,_0,_0,_0.05)] bg-[#fff] z-[1] mq700:px-5 px-14 text-left font-[Poppins] gap-5 ${!menuOpen && "py-1"}`}
    >
      <Image
        loading="lazy"
        width={120}
        height={100}
        alt=""
        src="/logo@2x.png"
      />  
      <MobileNavigationMenu  menuOpen={menuOpen} handleStateChange={handleStateChange}/>
      <div className="flex flex-row items-center  gap-[20px] mq925:hidden">
        <HeaderNavigationLink
          name="Home"
        />
        <HeaderNavigationLink
          name="About"
        />
        <HeaderNavigationLink
          name="Contact"
        />
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[4px] cursor-pointer">
          <Image
            className="h-[28px] w-[28px] relative overflow-hidden shrink-0"
            loading="lazy"
            width={28}
            height={28}
            alt=""
            src="/marketeqfavourite.svg"
          />
          <a className="[text-decoration:none] relative capitalize font-medium text-[inherit]">
            Favourite
          </a>
        </div>
        <LanguageSwitcher />
      <UserButton/>
      </div>
    </motion.div>
    
  );
};



export default Header;
