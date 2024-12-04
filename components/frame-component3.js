import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const FrameComponent3 = ({
  className = "",
  property1 = "Default",
  frameDivWidth,
  home,
  line447,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  return (
    <div
      className={`w-[60px] overflow-hidden shrink-0 flex flex-col items-center justify-between text-left text-[14px] text-[#0512f5] font-[Poppins] ${className} group cursor-pointer`}
      data-property1={property1}
      style={frameDiv2Style}
    >
      <a className="[text-decoration:none] self-stretch relative capitalize font-medium text-[inherit] text-center">
        {home}
      </a>
    <span className="w-0 h-[2px] bg-[#0512f5] group-hover:w-full duration-200"></span>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  home: PropTypes.string,
  line447: PropTypes.string.isRequired,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  frameDivWidth: PropTypes.string,
};

export default FrameComponent3;
