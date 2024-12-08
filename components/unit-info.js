import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const UnitInfo = ({
  unit
}) => {

  return (
    <div
      className={`mq700:px-4 flex flex-col items-center justify-center h-full px-[0px] box-border min-w-[370px] max-w-full text-left text-[14px] text-[#494949] font-[Poppins] mq450:min-w-full grow w-full py-3`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
        <div className="self-stretch grow gap-10 flex mq1100:gap-[6px] mq1100:items-start mq1100:flex-col items-center justify-start max-w-full z-[1] text-[22px] text-[#000]">
          <div className="grow flex flex-row items-center justify-start gap-[6px] max-w-full mq450:flex-wrap">
            <h3 className="m-[0px] relative text-[21px] capitalize font-medium font-[inherit] mq450:text-[18px]">
              {unit?.name}
            </h3>
            <div className="flex flex-col items-start justify-end pt-[0px] px-[0px] pb-[5px] text-[12px] text-[#fff]">
              <div
                className={`rounded-[4px] ${unit?.status == "Approved" ? " bg-[#02ae36]" : unit?.status == "Rejected" ? "bg-red-500" : "bg-[#6666ff]"} flex flex-row items-start justify-start py-[2px] pl-[5px] pr-[4px]`}
              >
                <div
                  className="relative capitalize font-medium inline-block min-w-[61px]"
                >
                  {unit?.status}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-[1.5px] px-[0px] box-border text-[23px] text-[#f20000]">
            <div className="ml-[-9.5px] h-[30px] relative capitalize flex items-center whitespace-nowrap mq450:text-[14px] grow">
              <span>
                <span className="font-semibold ml-3">{unit?.price}</span>
                <span className="text-[26px] font-medium">{` `}</span>
                <span className="text-[20px]">EGP</span>
              </span>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-start justify-start pt-[0px] px-[0px] pb-[10px] box-border gap-[15px]">
          <div className="self-stretch relative capitalize font-medium z-[1]">
            {unit?.location}
          </div>
          <div className="flex flex-row items-start justify-start gap-[10px] text-[12px]">
            <div className="flex flex-row items-start justify-start gap-[6px]">
              <Image
                className="h-[24px] w-[24px] relative rounded-[5px] overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/materialsymbolslightbedroomchildoutlinerounded.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[2.5px] px-[0px] pb-[0px]">
                <div className="relative capitalize font-medium inline-block min-w-[54px] z-[1]">
                  3 Rooms
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[6px]">
              <Image
                className="h-[24px] w-[24px] relative rounded-[5px] z-[1]"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/frame-49176.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[2.5px] px-[0px] pb-[0px]">
                <div className="relative capitalize font-medium inline-block min-w-[75px] z-[1]">
                  3 Bathroom
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[6px]">
              <Image
                className="h-[24px] w-[24px] relative rounded-[5px] overflow-hidden shrink-0 z-[1]"
                width={24}
                height={24}
                alt=""
                src="/tdesignmeasurement1.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[2.5px] px-[0px] pb-[0px]">
                <div className="relative font-medium inline-block min-w-[42px] z-[1]">
                  <span className="capitalize">{`250 `}</span>m
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`self-stretch flex flex-row items-center px-[0px] gap-[20px] z-[1]  ${unit?.button == ""? "justify-end"  :"justify-between"}`}>
          {unit?.button == "mohamed sami" ? <div className="flex flex-row items-start justify-start gap-[7px]">
                  <div className="h-[24px] w-[24px] rounded-[5px] bg-[#fff] border-[#6666ff] border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[1px] px-[2px]">
                    <Image
                      className="h-[10.6px] w-[9.7px] relative"
                      width={10}
                      height={11}
                      alt=""
                      src="/vector-6.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[2.5px] px-[0px] pb-[0px]">
                    <div className="w-[134px] relative capitalize flex items-center">
                      Mohamed Sami
                    </div>
                  </div>
                </div>: unit?.button == "" ? "": <button className="cursor-pointer border-[#6666ff] border-[1px] border-solid py-[13px] bg-[#fff] rounded-[10px] box-border flex flex-row items-start justify-center gap-[8px] mq450:box-border px-16 mq700:px-8">
            <Image
              className="h-[24px] w-[24px] relative hidden"
              width={24}
              height={24}
              alt=""
              src="/logo2.svg"
            />
            <Image
              className="h-[24px] w-[24px] relative object-cover hidden"
              width={24}
              height={24}
              alt=""
              src="/logo3@2x.png"
            />
            <div
              className="relative text-[14px] tracking-[0.01em] leading-[135%] font-semibold font-[Poppins] text-[#6666ff] text-center"
            >
            { unit?.button} 
            </div>
          </button>}
          
          <div className="pt-[4.5px] px-[0px] pb-[0px]">
            <div className=" gap-[5px]">
              <div className="flex flex-row items-start justify-start py-[0px] pl-[24px] pr-[0px]">
                <div className="relative capitalize font-medium inline-block min-w-[57px]">
                  Added
                </div>
              </div>
              <div className="relative capitalize inline-block min-w-[81px]">
                31/8/2022
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default UnitInfo;
