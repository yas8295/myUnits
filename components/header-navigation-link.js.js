const HeaderNavigationLink = ({
  name,
}) => {
  

  return (
    <div
      className={`w-[60px] overflow-hidden shrink-0 flex flex-col items-center justify-between text-left text-[14px] text-[#0512f5] font-[Poppins] group cursor-pointer`}
    >
      <a className="[text-decoration:none] self-stretch relative capitalize font-medium text-[inherit] text-center">
        {name}
      </a>
    <span className="w-0 h-[2px] bg-[#0512f5] group-hover:w-full duration-200"></span>
    </div>
  );
};


export default HeaderNavigationLink;
