import Image from "next/image";
import Component1 from "./component1";
import FrameComponent1 from "./frame-component1";
import PropTypes from "prop-types";

const Filter = ({ className = "", property1 = "Default" }) => {
  return (
    <div
      className={`!m-[0] flex flex-col items-end justify-start gap-[11px] z-[4] text-left text-[14px] text-[#494949] font-[Poppins] ${className}`}
      data-property1={property1}
    >
      <Image
        className="w-[35px] h-[35px] relative rounded-[5px]"
        loading="lazy"
        width={35}
        height={35}
        alt=""
        src="/filter-icon.svg"
      />
      <div className="rounded-[10px] bg-[#fff] border-[#6666ff] border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[14px] pb-[0px] pl-[1px] pr-[0px] relative gap-[10px] opacity-[0]">
        <Component1 property1="Variant2" />
        <FrameComponent1
          property1="Default"
          frameDivAlignSelf="unset"
          frameDivHeight="30px"
          frameDivPosition="absolute"
          frameDivWidth="118px"
          frameDivTop="52px"
          frameDivRight="unset"
          frameDivBottom="unset"
          frameDivLeft="calc(50% - 59px)"
          frameDivMargin="0 !important"
          date="Reserved"
          dateHeight="unset"
          dateWidth="unset"
          dateDisplay="unset"
          dateAlignItems="unset"
          vector="pending_I1:501;251:2805;251:2464"
        />
        <FrameComponent1
          property1="Default"
          frameDivAlignSelf="unset"
          frameDivHeight="30px"
          frameDivPosition="absolute"
          frameDivWidth="118px"
          frameDivTop="unset"
          frameDivRight="unset"
          frameDivBottom="20px"
          frameDivLeft="calc(50% - 59px)"
          frameDivMargin="0 !important"
          date="Deleted"
          dateHeight="unset"
          dateWidth="unset"
          dateDisplay="unset"
          dateAlignItems="unset"
          vector="pending_I1:501;251:2806;251:2464"
        />
      </div>
    </div>
  );
};

Filter.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Filter;
