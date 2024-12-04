import Image from "next/image";
import FrameComponent1 from "./frame-component1";
import PropTypes from "prop-types";

const Component1 = ({ className = "", property1 = "Default" }) => {
  return (
    <div
      className={`w-[247px] h-[138px] flex flex-row items-start justify-start gap-[9px] z-[0] text-left text-[14px] text-[#494949] font-[Poppins] ${className}`}
      data-property1={property1}
    >
      <div className="h-[30px] w-[118px] flex flex-row items-start justify-start py-[3px] pl-[16px] pr-[10px] box-border gap-[35px]">
        <div className="h-[24px] w-[52px] relative capitalize flex items-center shrink-0">
          Status
        </div>
        <div className="h-[17.5px] w-[6px] flex flex-col items-start justify-start pt-[6.5px] px-[0px] pb-[0px] box-border">
          <Image
            className="w-[6px] relative h-[11px] object-contain"
            width={6}
            height={11}
            alt=""
          />
        </div>
      </div>
      <div className="h-[138px] w-[120px] rounded-[10px] bg-[#fff] border-[#6666ff] border-[1px] border-solid box-border flex flex-col items-start justify-start py-[14px] px-[0px] gap-[10px] opacity-[0] mq450:h-[138px]">
        <FrameComponent1
          property1="Default"
          date="approved"
          // vector="/pending_I1:501;251:2804;251:2646;251:2464"
        />
        <FrameComponent1
          property1="Default"
          frameDivAlignSelf="stretch"
          frameDivHeight="30px"
          frameDivPosition="unset"
          frameDivWidth="unset"
          frameDivTop="unset"
          frameDivRight="unset"
          frameDivBottom="unset"
          frameDivLeft="unset"
          frameDivMargin="unset"
          date="Pending"
          dateHeight="unset"
          dateWidth="unset"
          dateDisplay="unset"
          dateAlignItems="unset"
          vector="pending_I1:501;251:2804;251:2647;251:2464"
        />
        <FrameComponent1
          property1="Default"
          frameDivAlignSelf="stretch"
          frameDivHeight="30px"
          frameDivPosition="unset"
          frameDivWidth="unset"
          frameDivTop="unset"
          frameDivRight="unset"
          frameDivBottom="unset"
          frameDivLeft="unset"
          frameDivMargin="unset"
          date="Rejected"
          dateHeight="unset"
          dateWidth="unset"
          dateDisplay="unset"
          dateAlignItems="unset"
          vector="pending_I1:501;251:2804;251:2648;251:2464"
        />
      </div>
    </div>
  );
};

Component1.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Component1;
