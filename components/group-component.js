import Image from "next/image";
import FrameComponent3 from "./frame-component3";
import LanguageSwitcher from "./language-switcher";
import FrameComponent5 from "./frame-component5";
import PropTypes from "prop-types";
import { slide as Menu } from 'react-burger-menu'
import { useState } from "react";
import Button from "./Button";
import {motion} from "framer-motion"

const GroupComponent = ({ className = "" }) => {
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
      <Menu
      right
      overlayClassName="bg-black left-0"
      className="mq925:block hidden"
      itemListClassName="flex flex-col items-center justify-start gap-[20px]"
      burgerButtonClassName="mq925:block hidden right-10"
      isOpen={menuOpen}
      onStateChange={handleStateChange}
    >
      <FrameComponent5 loggedInOut="logged in" />
<Button name="Home"/>
<Button name="About"/>
<Button name="Contact"/>
<Button name="🤍 Favourite"/>
        <LanguageSwitcher switcher="english" />
      </Menu>
      <div className="flex flex-row items-center  gap-[20px] mq925:hidden">
        <FrameComponent3
          property1="Default"
          home="Home"
          // line447="pending_I1:499;159:4618;105:3934"
        />
        <FrameComponent3
          property1="Default"
          frameDivWidth="61px"
          home="About"
          // line447="pending_I1:499;159:4619;105:3934"
        />
        <FrameComponent3
          property1="Default"
          frameDivWidth="82px"
          home="Contact"
          // line447="pending_I1:499;159:4620;105:3934"
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
        <LanguageSwitcher switcher="english" />
      <FrameComponent5 loggedInOut="logged in" />
      </div>
    </motion.div>
    
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
