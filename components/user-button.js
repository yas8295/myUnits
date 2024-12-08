import Image from "next/image";

const UserButton = () => {
  return (
    <div
      className={`flex flex-row items-center justify-center text-left text-[14px] text-[#494949] font-[Poppins] $ cursor-pointer`}
    >
     <div
      className={`w-[185px] flex flex-col items-end justify-start gap-[10px] text-left text-[14px] text-[#494949] font-[Poppins]`}
    >
      <div className="self-stretch flex flex-col items-end justify-start">
        <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
          <Image
            className="w-[30px] relative h-[30px] object-cover"
            width={30}
            height={30}
            alt=""
            src="/ellipse-156@2x.png"
          />
          <a className="[text-decoration:none] relative capitalize text-[inherit]">
            Omar Mohamed
          </a>
          <Image
            className="h-[7px] w-[12px] relative object-contain"
            width={12}
            height={7}
            alt=""
            src="/vector-7.svg"
          />
        </div>
      </div>
      <div className="w-[97px] rounded-[10px] bg-[#fff] hidden flex-row items-center justify-center py-[5px] px-[10px] box-border text-[#0512f5]">
        <div className="h-[24px] w-[55px] relative capitalize flex items-center">
          Logout
        </div>
      </div>
    </div>
    </div>
  );
};



export default UserButton;
