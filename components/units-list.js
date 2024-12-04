import Image from "next/image";
import LocationDetailsContainer from "./location-details-container";
import SideMenu from "./side-menu";
import MainNotifications from "./main-notifications";
import UnitInfo from "./unit-info";
import PropTypes from "prop-types";

const UnitsList = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start gap-[60px] max-w-full text-left text-[14px] text-[#000] font-[Poppins] mq925:gap-[30px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq450:gap-[20px]">
        <div className="self-stretch shadow-[0px_30px_30px_-25px_rgba(0,_0,_0,_0.15)] rounded-[16px] bg-[#f2f3f4] flex flex-row items-end justify-start flex-wrap content-end relative gap-[21px] max-w-full">
          <div className="self-stretch w-[922px] relative shadow-[0px_30px_30px_-25px_rgba(0,_0,_0,_0.15)] rounded-[16px] bg-[#f2f3f4] hidden max-w-full z-[0]" />
          <Image
            className="h-[235px] w-[228px] relative rounded-tl-[16px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[16px] object-cover z-[1]"
            width={228}
            height={235}
            alt=""
            src="/rectangle-20-1@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-end pt-[0px] px-[0px] pb-[19px] box-border min-w-[370px] max-w-full mq450:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start gap-[36px] max-w-full z-[1] text-[22px] mq700:gap-[18px] mq700:flex-wrap">
                <div className="flex-1 flex flex-row items-end justify-start gap-[11px] min-w-[230px] max-w-full mq450:flex-wrap">
                  <h3 className="m-[0px] relative text-inherit capitalize font-medium font-[inherit] mq450:text-[18px]">
                    Grand House Real Estate
                  </h3>
                  <div className="flex flex-col items-start justify-end pt-[0px] px-[0px] pb-[3px] text-[12px] text-[#fff]">
                    <div className="self-stretch h-[22px] rounded-[5px] bg-[#6666ff] border-[#6666ff] border-[1px] border-solid box-border flex flex-row items-start justify-start py-[0px] pl-[10px] pr-[7px]">
                      <div className="relative capitalize font-medium">
                        Pending
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[180px] flex flex-row items-start justify-start py-[1.5px] px-[0px] box-border text-[28px] text-[#f20000]">
                  <div className="ml-[-9.5px] h-[30px] relative capitalize flex items-center shrink-0 whitespace-nowrap mq450:text-[14px]">
                    <span>
                      <span className="font-semibold">13.500.000</span>
                      <span className="text-[26px] font-medium">{` `}</span>
                      <span className="text-[20px]">EGP</span>
                    </span>
                  </div>
                </div>
              </div>
              <LocationDetailsContainer />
              <div className="self-stretch flex flex-row items-start justify-between py-[10px] px-[0px] gap-[20px] z-[1] text-center text-[#6666ff] mq450:flex-wrap">
                <div className="h-[52px] rounded-[10px] bg-[#fff] border-[#6666ff] border-[1px] border-solid box-border flex flex-row items-start justify-start py-[13px] pl-[88px] pr-[85px] gap-[8px] mq450:pl-[20px] mq450:pr-[20px] mq450:box-border">
                  <Image
                    className="h-[24px] w-[24px] relative hidden"
                    width={24}
                    height={24}
                    alt=""
                  />
                  <Image
                    className="h-[24px] w-[24px] relative object-cover hidden"
                    width={24}
                    height={24}
                    alt=""
                    src="/logo5@2x.png"
                  />
                  <div className="relative tracking-[0.01em] leading-[135%] font-semibold">
                    Asign a Broker
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[4.5px] px-[0px] pb-[0px] text-left text-[#494949]">
                  <div className="flex flex-col items-start justify-start gap-[5px]">
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
          <Image
            className="h-[235px] w-[83px] relative z-[1]"
            width={83}
            height={235}
            alt=""
            src="/group-120.svg"
          />
          {/* <div className="h-[983px] w-[610px] absolute !m-[0] top-[-467px] left-[-315px] text-[#494949]">
           
            <MainNotifications notifications="default" />
          </div> */}
        </div>
        <div className="self-stretch shadow-[0px_30px_30px_-25px_rgba(0,_0,_0,_0.15)] rounded-[16px] bg-[#f2f3f4] flex flex-row items-start justify-start py-[0px] pl-[0px] pr-[33px] box-border gap-[23px] max-w-full text-[22px] mq925:flex-wrap mq925:p-[20px] mq925:box-border">
          <div className="self-stretch w-[922px] relative shadow-[0px_30px_30px_-25px_rgba(0,_0,_0,_0.15)] rounded-[16px] bg-[#f2f3f4] hidden max-w-full" />
          <div className="flex flex-row items-start justify-start pt-[0px] px-[0px] pb-[202px] box-border relative min-w-[228px] mq925:flex-1">
            <Image
              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-tl-[16px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[16px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
              width={228}
              height={235}
              alt=""
              src="/rectangle-20-2@2x.png"
            />
            <button className="cursor-pointer [border:none] py-[7px] pl-[27px] pr-[26px] bg-[#0512f5] rounded-tl-[16px] rounded-tr-[0px] rounded-br-[16px] rounded-bl-[0px] flex flex-row items-start justify-start z-[2] hover:bg-[#3845ff]">
              <div className="h-[33px] w-[112px] relative rounded-tl-[16px] rounded-tr-[0px] rounded-br-[16px] rounded-bl-[0px] bg-[#0512f5] hidden" />
              <div className="relative text-[12px] capitalize font-medium font-[Poppins] text-[#fff] text-left inline-block min-w-[60px] z-[1]">
                Reserved
              </div>
            </button>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[33px] px-[0px] pb-[0px] box-border min-w-[415px] max-w-full mq700:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start gap-[75px] max-w-full z-[1] mq450:gap-[19px] mq700:gap-[37px] mq700:flex-wrap">
                <div className="flex-1 flex flex-row items-end justify-start gap-[10px] min-w-[229px] max-w-full mq450:flex-wrap">
                  <h3 className="m-[0px] relative text-inherit capitalize font-medium font-[inherit] mq450:text-[18px]">
                    Grand House Real Estate
                  </h3>
                  <div className="flex flex-col items-start justify-end pt-[0px] px-[0px] pb-[5px] text-[12px] text-[#fff]">
                    <div className="rounded-[4px] bg-[#02ae36] flex flex-row items-start justify-start py-[2px] pl-[5px] pr-[4px]">
                      <div className="relative capitalize font-medium inline-block min-w-[61px]">
                        Approved
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[210px] flex flex-row items-start justify-start py-[1.5px] px-[5px] box-border text-right text-[28px] text-[#f20000]">
                  <div className="h-[30px] flex-1 relative capitalize flex items-center mq450:text-[14px]">
                    <span>
                      <span className="font-semibold">13.500.000</span>
                      <span className="text-[26px] font-medium">{` `}</span>
                      <span className="text-[20px]">EGP</span>
                    </span>
                  </div>
                </div>
              </div>
              <LocationDetailsContainer />
              <div className="self-stretch h-[24px] flex flex-row items-start justify-between gap-[20px] z-[1] text-[14px] text-[#494949]">
                <div className="flex flex-row items-start justify-start gap-[7px]">
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
                </div>
                <div className="mt-[-9.5px] flex flex-col items-end justify-start gap-[5px] text-right text-[14px]">
                  <div className="w-[57px] relative capitalize font-medium flex items-center">
                    Added
                  </div>
                  <div className="self-stretch relative capitalize inline-block min-w-[81px]">
                    31/8/2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch shadow-[0px_30px_30px_-25px_rgba(0,_0,_0,_0.15)] rounded-[16px] bg-[#f2f3f4] flex flex-row items-end justify-start flex-wrap content-end gap-[21px] max-w-full">
          <div className="self-stretch w-[922px] relative shadow-[0px_30px_30px_-25px_rgba(0,_0,_0,_0.15)] rounded-[16px] bg-[#f2f3f4] hidden max-w-full" />
          <Image
            className="h-[235px] w-[228px] relative rounded-tl-[16px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[16px] object-cover z-[1]"
            width={228}
            height={235}
            alt=""
            src="/rectangle-20-3@2x.png"
          />
          <UnitInfo
            frameDivBackgroundColor="#f20000"
            approved="Rejected"
            approvedDisplay="unset"
            approvedMinWidth="unset"
            asignABroker="Edit"
            asignABrokerFlex="1"
          />
          <Image
            className="h-[235px] w-[83px] relative z-[1]"
            width={83}
            height={235}
            alt=""
            src="/group-120.svg"
          />
        </div>
      </div>
      
    </div>
  );
};

UnitsList.propTypes = {
  className: PropTypes.string,
};

export default UnitsList;
