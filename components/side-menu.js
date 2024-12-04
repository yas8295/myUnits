import { useCallback } from "react";
import FrameComponent2 from "./frame-component2";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import {motion} from "framer-motion"

const SideMenu = ({ className = "" }) => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div
      className={`flex flex-row items-start justify-start mt-4 box-border text-left text-[14px] text-[#0512f5] font-[Poppins] ${className} grow`}
    >
      <div className="flex flex-col mq925:flex-row mq700:flex-wrap items-start justify-start gap-[13px] w-full">
        <FrameComponent2 dashboardSideMenu="default" myAccount="My Account" />
        <motion.div
          initial={{x: "-100%",opacity:0}}
    whileInView={{x: "0",opacity:1}}
    viewport={{once:true}}
    transition={{type:"spring",stiffness:60,delay:0.4}}
          className="rounded-[10px] bg-[#f2f3f4] border-[#0512f5] border-[1px] border-solid flex flex-row items-center justify-start py-[10px] grow gap-[5px] cursor-pointer w-full mq925:w-fit px-2"
          onClick={onFrameContainerClick}
        >
          <div className="h-[10px] w-[10px] relative rounded-[50%] bg-[#0512f5] ml-4" />
          <div className="relative tracking-[-0.03em] leading-[140%]">
            My Units
          </div>
        </motion.div>
        <FrameComponent2
          dashboardSideMenu="default"
          myAccount="My Reservations"
          myAccountWidth="124px"
        />
      </div>
    </div>
  );
};

SideMenu.propTypes = {
  className: PropTypes.string,
};

export default SideMenu;
