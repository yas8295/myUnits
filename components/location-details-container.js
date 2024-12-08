import Image from "next/image";

const LocationDetailsContainer = () => {
  return (
    <div
      className={`w-[305px] flex flex-col items-start justify-start pt-[0px] px-[0px] pb-[10px] box-border gap-[15px] text-left text-[14px] text-[#494949] font-[Poppins]`}
    >
      <div className="self-stretch relative capitalize font-medium z-[1]">
        New Cairo, Egypt
      </div>
      <div className="flex flex-row items-start justify-start gap-[20px] text-[12px]">
        <div className="flex flex-row items-start justify-start gap-[6px]">
          <Image
            className="h-[24px] w-[24px] relative rounded-[5px] overflow-hidden shrink-0 z-[1]"
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
  );
};



export default LocationDetailsContainer;
