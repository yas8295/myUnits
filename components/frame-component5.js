import FrameComponent4 from "./frame-component4";
import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "", loggedInOut = "logged out" }) => {
  return (
    <div
      className={`flex flex-row items-center justify-center text-left text-[14px] text-[#494949] font-[Poppins] ${className} cursor-pointer`}
      data-loggedInOut={loggedInOut}
    >
      <FrameComponent4 logout="default" />
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  loggedInOut: PropTypes.number,
};

export default FrameComponent5;
