// "use client";
// import React, { useContext } from "react";
// import { GlobalContext } from "../Context";
// import Link from "next/link";

// const Invoice = () => {
//   const context = useContext(GlobalContext);
//   if (!context) return null;
//   const { data, showInvoice, setShowInvoice } = context;

//   return (
//     <div className="w-full h-full flex flex-col items-center gap-y-4 md:mb-8">
//       {data.map((item, i) => (
//         <div
//           key={i}
//           className="w-full py-[25px] flex flex-row items-center bg-white rounded-[8px] px-8 md:py-4 lg:py-4 shadow-lg"
//         >
//           <div className="w-[50%] md:w-[10%] lg:w-[10%] flex flex-col justify-between">

//             <p className="font-bold text-[15px] leading-[1] tracking-[-0.25px] text-black mb-6 md:mb-0 lg:mb-0">
//               <span className="text-[#7E88C3] font-bold text-[15px] leading-[1] tracking-[-0.25px]">
//                 #
//               </span>
//               {item.id}
//             </p>
//             <p className="md:hidden lg:hidden w-full md:mr-[51px] lg:mr-[62px] md:ml-[28px] lg:ml-[44px] text-[#7E88C3] leading-[1.15] tracking-[-0.1px] text-[13px] font-medium whitespace-nowrap mb-[9px] md:mb-0 lg:mb-0">
//               <span className="text-[#888EB0]">Due </span> {item.paymentDue}
//             </p>
//             <p className="md:hidden lg:hidden md:ml-10 font-bold tracking-[1.6] leading-[-0.25px]">
//               £ 1,800.90
//             </p>
//           </div>

//           <div className="w-[20%] hidden md:flex lg:flex">
//             <p className="hidden md:flex lg:flex w-full md:mr-[51px] lg:mr-[62px] md:ml-[28px] lg:ml-[44px] text-[#7E88C3] leading-[1.15] tracking-[-0.1px] text-[13px] font-medium whitespace-nowrap">
//               <span className="text-[#888EB0]">Due </span> {item.paymentDue}
//             </p>
//           </div>

//           <div className="w-[25%] hidden md:flex lg:flex">
//             <p className="hidden md:flex lg:flex md:ml-[51px] lg:ml-[62px] text-[#7E88C3] text-[13px] font-medium">
//               {item.clientName}
//             </p>
//           </div>

//           <div className="w-[25%] hidden md:flex lg:flex">
//             <p className="hidden md:flex lg:flex md:ml-10 font-bold tracking-[1.6] leading-[-0.25px]">
//               £ {item.total}
//             </p>
//           </div>

//           <div className="w-[50%] md:w-[20%] lg:w-[20%] flex flex-col items-end gap-6 md:gap-0 lg:gap-0 md:items-start lg:items-start">
//             <p className="md:hidden lg:hidden md:ml-[51px] lg:ml-[62px] text-[#7E88C3] text-[13px] font-medium text-right">
//               Alex Grim
//             </p>
//             <button
//               style={{
//                 backgroundColor:
//                   item.status === "paid"
//                     ? "#33d6a042"
//                     : item.status === "pending"
//                     ? "#ff910032"
//                     : "#98949447",
//               }}
//               className="w-[80%] border-none outline-none bg-[#33d6a024] pt-[14px] pb-[12px] lg:w-[104px] rounded-[6px] flex flex-row items-center justify-center gap-2"
//             >
//               <span
//                 style={{
//                   backgroundColor:
//                     item.status === "paid"
//                       ? "#33D69F"
//                       : item.status === "pending"
//                       ? "#FF8F00"
//                       : "#373B53",
//                 }}
//                 className={`w-[8px] h-[8px] rounded-full`}
//               ></span>

//               <span
//                 style={{
//                   color:
//                     item.status === "paid"
//                       ? "#33D69F"
//                       : item.status === "pending"
//                       ? "#FF8F00"
//                       : "#373B53",
//                 }}
//                 className="text-[#33D69F] font-bold text-[15px] leading-[1] tracking-[-0.25px]"
//               >
//                 {item.status}
//               </span>
//             </button>
//           </div>

//           <div className="w-[2%]  hidden md:flex lg:flex md:justify-end lg:justify-end">
//             <Link href={`/pages/${item.id}`}>
//               <button
//                 onClick={() => setShowInvoice(!showInvoice)}
//                 className="h-[9px] w-[5px] bg-transparent "
//               >
//                 <img
//                   className="font-extrabold"
//                   src="/assets/icon-arrow-right.svg"
//                   alt=""
//                 />
//               </button>
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Invoice;

"use client";
import React, { useContext } from "react";
import { GlobalContext } from "../Context";
import Link from "next/link";

const Invoice = () => {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { data, showInvoice, setShowInvoice, setDeleteSectionOverlay, deleteSectionOverlay } = context;

  return (
    <div className="w-full h-full flex flex-col  gap-y-4 md:mb-8 ">
      {data.map((item, i) => (
        <Link href={`/pages/${item.id}`} key={i}>
          <div


          onClick={() => setDeleteSectionOverlay(false)}



            
            className="w-full py-[25px] flex flex-row items-center bg-white rounded-[8px] px-8 md:py-4 lg:py-4 shadow-lg"
          >
            <div className="w-[50%] md:w-[10%] lg:w-[10%] flex flex-col justify-between">
              <p className="font-bold text-[15px] leading-[1] tracking-[-0.25px] text-black mb-6 md:mb-0 lg:mb-0">
                <span className="text-[#7E88C3] font-bold text-[15px] leading-[1] tracking-[-0.25px]">
                  #
                </span>
                {item.id}
              </p>
              <p className="md:hidden lg:hidden w-full md:mr-[51px] lg:mr-[62px] md:ml-[28px] lg:ml-[44px] text-[#7E88C3] leading-[1.15] tracking-[-0.1px] text-[13px] font-medium whitespace-nowrap mb-[9px] md:mb-0 lg:mb-0">
                <span className="text-[#888EB0]">Due </span> {item.paymentDue}
              </p>
              <p className="md:hidden lg:hidden md:ml-10 font-bold tracking-[1.6] leading-[-0.25px]">
                £ 1,800.90
              </p>
            </div>

            <div className="w-[20%] hidden md:flex lg:flex">
              <p className="hidden md:flex lg:flex w-full md:mr-[51px] lg:mr-[62px] md:ml-[28px] lg:ml-[44px] text-[#7E88C3] leading-[1.15] tracking-[-0.1px] text-[13px] font-medium whitespace-nowrap">
                <span className="text-[#888EB0]">Due </span> {item.paymentDue}
              </p>
            </div>

            <div className="w-[25%] hidden md:flex lg:flex">
              <p className="hidden md:flex lg:flex md:ml-[51px] lg:ml-[62px] text-[#7E88C3] text-[13px] font-medium">
                {item.clientName}
              </p>
            </div>

            <div className="w-[25%] hidden md:flex lg:flex">
              <p className="hidden md:flex lg:flex md:ml-10 font-bold tracking-[1.6] leading-[-0.25px]">
                £ {item.total}
              </p>
            </div>

            <div className="w-[50%] md:w-[20%] lg:w-[20%] flex flex-col items-end gap-6 md:gap-0 lg:gap-0 md:items-start lg:items-start">
              <p className="md:hidden lg:hidden md:ml-[51px] lg:ml-[62px] text-[#7E88C3] text-[13px] font-medium text-right">
                Alex Grim
              </p>
              <button
                style={{
                  backgroundColor:
                    item.status === "paid"
                      ? "#33d6a042"
                      : item.status === "pending"
                      ? "#ff910032"
                      : "#98949447",
                }}
                className="w-[80%] border-none outline-none bg-[#33d6a024] pt-[14px] pb-[12px] lg:w-[104px] rounded-[6px] flex flex-row items-center justify-center gap-2"
              >
                <span
                  style={{
                    backgroundColor:
                      item.status === "paid"
                        ? "#33D69F"
                        : item.status === "pending"
                        ? "#FF8F00"
                        : "#373B53",
                  }}
                  className={`w-[8px] h-[8px] rounded-full`}
                ></span>

                <span
                  style={{
                    color:
                      item.status === "paid"
                        ? "#33D69F"
                        : item.status === "pending"
                        ? "#FF8F00"
                        : "#373B53",
                  }}
                  className="text-[#33D69F] font-bold text-[15px] leading-[1] tracking-[-0.25px]"
                >
                  {item.status}
                </span>
              </button>
            </div>

            <div className="w-[2%]  hidden md:flex lg:flex md:justify-end lg:justify-end">
              <button
                onClick={() => setShowInvoice(!showInvoice)}
                className="h-[9px] w-[5px] bg-transparent "
              >
                <img
                  className="font-extrabold"
                  src="/assets/icon-arrow-right.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Invoice;
