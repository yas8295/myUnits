import Image from "next/image";
import UnitInfo from "./unit-info";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import {motion} from "framer-motion"

const UnitItem = ({ unit,units,setUnits }) => {
  return (
    <motion.div
    initial={{y: "30%",opacity:0}}
    whileInView={{y: "0",opacity:1}}
    viewport={{once:true}}
    transition={{type:"spring",stiffness:60}}
      className={`self-stretch flex flex-col items-center justify-start gap-[10px] max-w-full text-left text-[14px] text-[#494949] font-[Poppins]`}
    >
      
      
      <div className="self-stretch flex flex-row py-[0px] pl-[0px] pr-[6px] box-border max-w-full justify-center rounded-[40px]">
        
        <div className="shadow-[0px_30px_30px_-25px_rgba(0,_0,_0,_0.15)] bg-[#f2f3f4] flex flex-row items-end justify-center content-end relative gap-[21px] mq700:gap-[10px] grow mq700:flex-col rounded-[40px]">
          <div className="self-stretch relative shadow-[0px_30px_30px_-25px_rgba(0,_0,_0,_0.15)] rounded-[16px] bg-[#f2f3f4] hidden max-w-full z-[0]" />
          <div className="relative mq700:w-full"> 
            {unit.badge &&   <button className="cursor-pointer absolute [border:none] py-[7px] pl-[27px] pr-[26px] bg-[#0512f5] rounded-tl-[16px] rounded-tr-[0px] rounded-br-[16px] rounded-bl-[0px] flex flex-row items-start justify-start z-[2] hover:bg-[#3845ff]">
              <div className="h-[33px] w-[112px] relative rounded-tl-[16px] rounded-tr-[0px] rounded-br-[16px] rounded-bl-[0px] bg-[#0512f5] hidden" />
              <div className="relative text-[12px] capitalize font-medium font-[Poppins] text-[#fff] text-left inline-block min-w-[60px] z-[1]">
                Reserved
              </div>
            </button>}
          <Image
            className="h-full self-stretch relative rounded-tl-[16px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[16px] object-cover z-[1] mq700:w-full mq700:rounded-[40px] mq700:h-[300px] mq700:object-cover mq450:h-[200px]"
            loading="lazy"
            width={200}
            height={235}
            alt=""
            src={unit.image}
          />
          </div>
          <UnitInfo unit={unit} />
         <div onClick={() => {setUnits(units.filter((u) => u.id !== unit.id))
          toast.success(`Unit ${unit?.name} Deleted Successfully`)
         }} className="bg-red-400 h-full min-w-[65px] rounded-r-2xl flex justify-center items-center mq700:w-full mq700:rounded-[40px] mq700:py-4 cursor-pointer hover:bg-red-600 duration-200">
<AiOutlineDelete color="white" size={28}/>
         </div>
        </div>
      </div>
    </motion.div>
  );
};


export default UnitItem;
