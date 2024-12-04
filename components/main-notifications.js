import Image from "next/image";
import PropTypes from "prop-types";

const MainNotifications = ({ className = "", notifications = "toogle" }) => {
  return 
  // (
    // <div
    //   className={`absolute top-[0px] left-[0px] w-full h-full z-[3] text-left text-[16px] text-[#fff] font-[Poppins] ${className}`}
    //   data-notifications={notifications}
    // >
    //   <div className="absolute h-[27.67%] w-[29.69%] top-[69.58%] right-[70.31%] bottom-[2.75%] left-[0%] flex flex-row items-start justify-start opacity-[0]">
    //     <div className="flex flex-row items-start justify-start pt-[8.6px] px-[14px] pb-[11px] relative">
    //       <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [backdrop-filter:blur(30px)] rounded-[16px] bg-[rgba(0,4,69,0.4)]" />
    //       <div className="h-[252.4px] w-[151.4px] flex flex-col items-start justify-center py-[0px] px-[0px] box-border gap-[10px] z-[1]">
    //         <div className="w-[505px] flex flex-row items-center justify-between max-w-[334%] gap-[20px] text-[20px]">
    //           <a className="[text-decoration:none] relative font-semibold text-[inherit] mq450:text-[16px]">
    //             Today
    //           </a>
    //           <Image
    //             className="h-[24px] w-[24px] relative overflow-hidden shrink-0"
    //             width={24}
    //             height={24}
    //             alt=""
    //           />
    //         </div>
    //         <div className="self-stretch rounded-[10px] bg-[rgba(0,4,69,0.6)] flex flex-col items-start justify-start p-[20px]">
    //           <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
    //             <div className="self-stretch flex flex-row items-start justify-between py-[0px] px-[0px] gap-[-159.56px]">
    //               <div className="relative font-medium shrink-0">
    //                 Install Payment Notifications
    //               </div>
    //               <a className="[text-decoration:none] relative font-medium text-[#f2db00] z-[1]">
    //                 14:30
    //               </a>
    //             </div>
    //             <div className="self-stretch relative text-[14px] leading-[24px] font-light">
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
    //               aliquam, purus sit amet luctus venenatis, lectus magna
    //               fringilla urna, porttitor
    //             </div>
    //           </div>
    //         </div>
    //         <div className="self-stretch rounded-[10px] bg-[rgba(0,4,69,0.6)] flex flex-col items-start justify-start p-[20px] gap-[8px]">
    //           <div className="self-stretch h-[96px] flex flex-row items-center justify-center gap-[10px]">
    //             <div className="self-stretch w-[61.4px] relative font-medium inline-block">
    //               Successfull Payments
    //             </div>
    //             <div className="relative font-medium text-[#f2db00] inline-block min-w-[41px]">
    //               10:20
    //             </div>
    //           </div>
    //           <div className="self-stretch relative text-[14px] leading-[24px] font-light">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, `}</div>
    //         </div>
    //         <div className="self-stretch rounded-[10px] bg-[rgba(0,4,69,0.6)] flex flex-col items-start justify-start p-[20px] gap-[8px]">
    //           <div className="self-stretch flex flex-row items-center justify-center gap-[10px]">
    //             <div className="w-[71.4px] relative font-medium inline-block">
    //               Application Fees
    //             </div>
    //             <div className="relative font-medium text-[#f2db00] inline-block min-w-[31px]">
    //               1:30
    //             </div>
    //           </div>
    //           <div className="self-stretch relative text-[14px] leading-[24px] font-light">
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
    //             aliquam, purus sit amet luctus venenatis, lectus magna fringilla
    //             urna, porttitor
    //           </div>
    //         </div>
    //         <div className="self-stretch rounded-[10px] bg-[rgba(0,4,69,0.6)] flex flex-col items-start justify-start p-[20px] gap-[8px]">
    //           <div className="self-stretch h-[96px] flex flex-row items-center justify-center gap-[10px]">
    //             <div className="self-stretch w-[61.4px] relative font-medium inline-block">
    //               Payment Reviews
    //             </div>
    //             <div className="relative font-medium text-[#f2db00]">14:30</div>
    //           </div>
    //           <div className="self-stretch relative text-[14px] leading-[24px] font-light">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus `}</div>
    //         </div>
    //         <div className="relative text-[20px] font-semibold inline-block min-w-[105px] mq450:text-[16px]">{`Yesterday `}</div>
    //         <div className="self-stretch rounded-[10px] bg-[rgba(0,4,69,0.6)] flex flex-col items-start justify-start p-[20px] gap-[8px]">
    //           <div className="flex flex-row items-center justify-center gap-[10px]">
    //             <div className="relative font-medium inline-block min-w-[61.4px]">
    //               Invoice
    //             </div>
    //             <div className="relative font-medium text-[#f2db00] inline-block min-w-[42px]">
    //               09:10
    //             </div>
    //           </div>
    //           <div className="self-stretch relative text-[14px] leading-[24px] font-light">
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
    //             aliquam, purus sit amet luctus venenatis, lectus magna fringilla
    //             urnar
    //           </div>
    //         </div>
    //         <div className="self-stretch rounded-[10px] bg-[rgba(0,4,69,0.6)] flex flex-col items-start justify-start p-[20px] gap-[8px]">
    //           <div className="self-stretch h-[96px] flex flex-row items-center justify-center gap-[10px]">
    //             <div className="self-stretch w-[61.4px] relative font-medium inline-block">
    //               Successfull Payments
    //             </div>
    //             <div className="relative font-medium text-[#f2db00]">14:30</div>
    //           </div>
    //           <div className="self-stretch relative text-[14px] leading-[24px] font-light">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, `}</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="absolute h-[5.09%] w-[8.2%] top-[94.91%] right-[89.84%] bottom-[0%] left-[1.97%] rounded-[50px] bg-[#0512f5] flex flex-row items-start justify-start py-[9px] px-[11px] box-border z-[1]">
    //     <div className="h-[32px] w-[28px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[2px] box-border relative gap-[10px]">
    //       <Image
    //         className="h-[22.9px] w-[20px] relative"
    //         loading="lazy"
    //         width={20}
    //         height={23}
    //         alt=""
    //         src="/-icon-bell.svg"
    //       />
    //       <div className="h-[7px] w-[7px] absolute !m-[0] top-[4px] left-[5px] rounded-[50%] bg-[#f20000] z-[1]" />
    //     </div>
    //   </div>
    // </div>
  // );
};

MainNotifications.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  notifications: PropTypes.number,
};

export default MainNotifications;
