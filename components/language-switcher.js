import Image from "next/image";

const LanguageSwitcher = () => {
  return (
    <div
      className={`overflow-hidden flex flex-row items-center justify-start gap-[4px] text-left text-[14px] text-[#0512f5] font-[Poppins] cursor-pointer`}
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



export default LanguageSwitcher;
