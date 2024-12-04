import Footer1 from "./footer1";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center pt-[60px] px-[0px] pb-[0px] box-border z-[1] ${className}`}
    >
      <Footer1 />
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
