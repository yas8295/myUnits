import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const FrameComponent1 = ({
  className = "",
  property1 = "Default",
  frameDivAlignSelf,
  frameDivHeight,
  frameDivPosition,
  frameDivWidth,
  frameDivTop,
  frameDivRight,
  frameDivBottom,
  frameDivLeft,
  frameDivMargin,
  date,
  dateHeight,
  dateWidth,
  dateDisplay,
  dateAlignItems,
  vector,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      height: frameDivHeight,
      position: frameDivPosition,
      width: frameDivWidth,
      top: frameDivTop,
      right: frameDivRight,
      bottom: frameDivBottom,
      left: frameDivLeft,
      margin: frameDivMargin,
    };
  }, [
    frameDivAlignSelf,
    frameDivHeight,
    frameDivPosition,
    frameDivWidth,
    frameDivTop,
    frameDivRight,
    frameDivBottom,
    frameDivLeft,
    frameDivMargin,
  ]);

  const dateStyle = useMemo(() => {
    return {
      height: dateHeight,
      width: dateWidth,
      display: dateDisplay,
      alignItems: dateAlignItems,
    };
  }, [dateHeight, dateWidth, dateDisplay, dateAlignItems]);

  return (
    <div
      className={`self-stretch h-[30px] flex flex-row items-center justify-between py-[0px] pl-[16px] pr-[10px] box-border text-left text-[14px] text-[#494949] font-[Poppins] ${className}`}
      data-property1={property1}
      style={frameDiv1Style}
    >
      <div className="relative capitalize" style={dateStyle}>
        {date}
      </div>
      <Image
        className="h-[11px] w-[6px] relative object-contain"
        width={"6px"}
        height={"11px"}
        alt=""
        // src={vector}
      />
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string,
  vector: PropTypes.string.isRequired,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  frameDivAlignSelf: PropTypes.string,
  frameDivHeight: PropTypes.string,
  frameDivPosition: PropTypes.string,
  frameDivWidth: PropTypes.string,
  frameDivTop: PropTypes.string,
  frameDivRight: PropTypes.string,
  frameDivBottom: PropTypes.string,
  frameDivLeft: PropTypes.string,
  frameDivMargin: PropTypes.string,
  dateHeight: PropTypes.string,
  dateWidth: PropTypes.string,
  dateDisplay: PropTypes.string,
  dateAlignItems: PropTypes.string,
};

export default FrameComponent1;
