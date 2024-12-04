import Image from "next/image";
import PropTypes from "prop-types";
import Filter from "./filter";
import { LuSettings2 } from "react-icons/lu";
import { BiMenuAltRight } from "react-icons/bi";
import {motion} from "framer-motion"

const FrameComponent = ({ className = "", property1 = "Default",onClick }) => {
  return (
    <div
      className={`[border:none] px-[0px] bg-[transparent] flex w-full justify-between items-center box-border flex-wrap ${className} w-full`}
      data-property1={property1}
    >
       <motion.h1 
       initial={{scale:0}}
       animate={{scale:1}}
       transition={{type:"spring",stiffness:80}}
       className="m-[0px] text-[32px] capitalize font-semibold font-[inherit] flex items-center w-[211px] h-[48px] mq450:text-[19px] mq925:text-[26px]">
              My Units
            </motion.h1>
            <div className="flex gap-3 items-center">
               <motion.button
                initial={{scale:0}}
       animate={{scale:1}}
       transition={{type:"spring",stiffness:80}} className="cursor-pointer [border:none] py-[10px] bg-[#6666ff] h-[43px] rounded-[10px] flex flex-row items-center justify-center box-border gap-[8px] text-white px-3  hover:bg-[#2727cf] duration-200">
       
          <LuSettings2 color="white" size={26}/>
      </motion.button>
               <motion.button
                initial={{scale:0}}
       animate={{scale:1}}
       transition={{type:"spring",stiffness:80}} className="cursor-pointer [border:none] py-[10px] bg-[#6666ff] h-[43px] rounded-[10px] flex flex-row items-center justify-center box-border gap-[8px] text-white px-3  hover:bg-[#2727cf] duration-200">
       
          <BiMenuAltRight color="white" size={26}/>
      </motion.button>
      <motion.button
       initial={{scale:0}}
       animate={{scale:1}}
       transition={{type:"spring",stiffness:80}} 
      onClick={()=>onClick(true)} className="cursor-pointer [border:none] py-[16px] w-[250px] mq450:w-[170px] bg-[#6666ff] h-[52px] rounded-[10px] flex flex-row items-center justify-center box-border gap-[8px] hover:bg-[#2727cf] duration-200">
        <Image
          className="w-[24px] relative h-[24px] hidden"
          width={24}
          height={24}
          alt=""
          src="/logo.svg"
        />
        <Image
          className="w-[24px] relative h-[24px] object-cover hidden"
          width={24}
          height={24}
          alt=""
          src="/logo1@2x.png"
        />
        <Image
          className="w-[24px] relative h-[24px] overflow-hidden shrink-0"
          width={24}
          height={24}
          alt=""
          src="/icroundadd.svg"
        />
        <div className="relative text-[14px] tracking-[0.01em] leading-[135%] font-semibold font-[Poppins] text-[#fff] text-center">
          Add Unit
        </div>
      </motion.button>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default FrameComponent;
