import {motion} from "framer-motion"

const UnitButton = ({
  myAccount,
}) => {
  

  return (
    <motion.div
      initial={{x: "-100%",opacity:0}}
    whileInView={{x: "0",opacity:1}}
    viewport={{once:true}}
    transition={{type:"spring",stiffness:60,delay:0.2}}
          className="rounded-[10px] bg-[#f2f3f4]  flex flex-row items-center justify-start py-[10px] grow gap-[5px] cursor-pointer w-full mq925:w-fit group overflow-hidden px-2"
        >
          <div className="h-[10px] w-[10px] relative rounded-[50%] bg-[#0512f5] translate-x-[-40px] group-hover:translate-x-3 duration-200" />
          <div className="relative tracking-[-0.03em] leading-[140%] pl-1 group-hover:pl-3 duration-200">
         {myAccount}
          </div>
        </motion.div>
  );
};


export default UnitButton;
