import Image from "next/image";
import PropTypes from "prop-types";

const LanguageSwitcher = ({ className = "", switcher = "english" }) => {
  return (
    <div
      className={`overflow-hidden flex flex-row items-center justify-start gap-[4px] text-left text-[14px] text-[#0512f5] font-[Poppins] ${className} cursor-pointer`}
      data-switcher={switcher}
    >
      <Image
        className="h-[28px] w-[28px] relative overflow-hidden shrink-0"
        loading="lazy"
        width={28}
        height={28}
        alt=""
        src="/materialsymbolslightlanguage.svg"
      />
      <a className="[text-decoration:none] relative capitalize font-medium text-[inherit]">
        EN
      </a>
    </div>
  );
};

LanguageSwitcher.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  switcher: PropTypes.number,
};

export default LanguageSwitcher;
