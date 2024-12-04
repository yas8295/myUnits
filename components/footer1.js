import Image from "next/image";
import PropTypes from "prop-types";

const Footer1 = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-[#0512f5] shrink-0 flex items-center justify-center py-[29px] px-[60px] box-border gap-[70px] mq925:gap-[30px] text-left text-[14px] text-[#f2db00] font-[Poppins] ${className} flex-wrap mq925:flex-col max-w-screen`}
    >
      <Image
        className="h-[208px] w-[208px] relative object-cover"
        loading="lazy"
        width={208}
        height={208}
        alt=""
        src="/logos02-1@2x.png"
      />
      <div className="w-[1.5px] relative border-[#f2db00] border-r-[1.5px] border-solid box-border h-[177.5px] mq925:hidden" />
      <div className="grow relative">
        <div className="top-[0px] left-[0px] tracking-[-0.03em] leading-[140%] font-semibold inline-block w-[135px] h-[23px]  mb-4">
          Contact Us
        </div>
        <div className="top-[45px] left-[0px] w-[180px] flex flex-col items-start justify-start gap-[20px] text-[14px] text-[#fff] mq450:h-[112px]">
          <div className="self-stretch flex flex-row items-end justify-start gap-[20px]">
            <Image
              className="h-[24px] w-[26px] relative overflow-hidden shrink-0"
              loading="lazy"
              width={26}
              height={24}
              alt=""
              src="/mingcutelocationline.svg"
            />
            <div className="w-[167px] relative tracking-[-0.03em] leading-[140%] inline-block h-[23px] shrink-0">
              <p className="m-[0px]">42 Fareek Awal Ali Amer</p>
            </div>
          </div>
          <div className="flex flex-row items-end justify-start gap-[20px]">
            <Image
              className="h-[24px] w-[24px] relative overflow-hidden shrink-0"
              loading="lazy"
              width={24}
              height={24}
              alt=""
              src="/phphonebold.svg"
            />
            <div className="w-[135px] relative tracking-[-0.03em] leading-[140%] inline-block h-[23px] shrink-0">
              <p className="m-[0px]">01234568910</p>
            </div>
          </div>
          <div className="flex flex-row items-end justify-start gap-[20px]">
            <Image
              className="h-[24px] w-[24px] relative overflow-hidden shrink-0"
              loading="lazy"
              width={24}
              height={24}
              alt=""
              src="/icoutlineemail.svg"
            />
            <div className="w-[135px] relative tracking-[-0.03em] leading-[140%] inline-block h-[23px] shrink-0">
              hr@Madmon.ai
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1.5px] relative border-[#f2db00] border-r-[1.5px] border-solid box-border h-[177.5px] mq925:hidden" />

      <div className="grow relative text-[14px] text-[#fff]">
        <div className=" top-[0px] left-[0px] text-[14px] tracking-[-0.03em] leading-[140%] font-semibold text-[#f2db00] inline-block h-[23px] mb-4">
          Useful Links
        </div>
        <div className=" top-[45px] left-[0px] w-[180px] flex flex-col items-start justify-start gap-[11px]">
          <div className="self-stretch relative tracking-[-0.03em] leading-[140%] inline-block h-[23px] shrink-0 cursor-pointer">
            <p className="m-[0px]">About Us</p>
          </div>
          <div className="self-stretch relative tracking-[-0.03em] leading-[140%] inline-block h-[23px] shrink-0 cursor-pointer">
            <p className="m-[0px]">Privacy Policy</p>
          </div>
          <div className="self-stretch relative tracking-[-0.03em] leading-[140%] inline-block h-[23px] shrink-0 cursor-pointer">
            <p className="m-[0px]">Support</p>
          </div>
          <div className="self-stretch relative tracking-[-0.03em] leading-[140%] inline-block h-[23px] shrink-0 cursor-pointer">{`Terms & Conditions`}</div>
        </div>
        
      </div>
      <div className="w-[1.5px] relative border-[#f2db00] border-r-[1.5px] border-solid box-border h-[177.5px] mq925:hidden ms-[-50px]" />

      <div className="flex flex-row items-center justify-start gap-[16px]">
        <div className="w-[42px] rounded-[4px] border-[#fff] border-[1.5px] border-solid box-border h-[42px] flex flex-col items-start justify-start p-[10px] cursor-pointer">
          <Image
            className="w-[22.2px] h-[21px] relative"
            width={22}
            height={21}
            alt=""
            src="/vector-10.svg"
          />
        </div>
        <div className="w-[42px] rounded-[4px] border-[#fff] border-[1.5px] border-solid box-border h-[42px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-[10px] cursor-pointer">
          <Image
            className="h-[23.3px] w-[23.3px] relative"
            width={23}
            height={23}
            alt=""
            src="/vector-11.svg"
          />
        </div>
        <div className="w-[42px] rounded-[4px] border-[#fff] border-[1.5px] border-solid box-border h-[42px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[11px] px-[15px] cursor-pointer">
          <Image
            className="h-[23.3px] w-[12.3px] relative"
            width={12}
            height={23}
            alt=""
            src="/vector-12.svg"
          />
        </div>
      </div>
    </footer>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;
