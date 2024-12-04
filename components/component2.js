import Image from "next/image";
import FrameComponent1 from "./frame-component1";
import PropTypes from "prop-types";

const Component2 = ({ className = "", property1 = "Default" }) => {
  return (
    <div
      className={`w-[120px] h-[150px] !m-[0] absolute top-[166px] right-[417px] flex flex-row items-start justify-end pt-[0px] px-[0px] pb-[115px] box-border z-[2] ${className}`}
      data-property1={property1}
    >
      <Image
        className="h-[35px] w-[35px] relative rounded-[5px]"
        loading="lazy"
        width={35}
        height={35}
        alt=""
        src="/frame-49191.svg"
      />
      <div className="w-[27px] relative h-[23.4px] hidden">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[10px] bg-[#fff] border-[#6666ff] border-[1px] border-solid box-border" />
        <FrameComponent1
          property1="Default"
          frameDivAlignSelf="unset"
          frameDivHeight="29.06%"
          frameDivPosition="absolute"
          frameDivWidth="98.15%"
          frameDivTop="13.68%"
          frameDivRight="1.11%"
          frameDivBottom="57.26%"
          frameDivLeft="0.74%"
          frameDivMargin="unset"
          date="Date"
          dateHeight="24px"
          dateWidth="38px"
          dateDisplay="flex"
          dateAlignItems="center"
          vector="pending_I1:500;251:2414;251:2464"
        />
        <FrameComponent1
          property1="Default"
          frameDivAlignSelf="unset"
          frameDivHeight="29.06%"
          frameDivPosition="absolute"
          frameDivWidth="98.15%"
          frameDivTop="52.14%"
          frameDivRight="1.11%"
          frameDivBottom="18.8%"
          frameDivLeft="0.74%"
          frameDivMargin="unset"
          date="Price"
          dateHeight="24px"
          dateWidth="39px"
          dateDisplay="flex"
          dateAlignItems="center"
          vector="pending_I1:500;251:2415;251:2464"
        />
      </div>
    </div>
  );
};

Component2.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Component2;
