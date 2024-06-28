import React from 'react'

const BillFromSection = () => {
    
  return (
    <section className="bill-from w-full flex flex-col  gap-6 mb-[49px]">
            <h3 className="font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#7C5DFA]">
              Bill From
            </h3>

            <div className="Street-address flex flex-col gap-[9px]">
              <label
                className="font-medium text-[13px] leading-[1.15] traking-[-0.1px] text-[#7E88C3]"
                htmlFor=""
              >
                Street Address
              </label>
              <input
                defaultValue={"19 Union Terrace"}
                className="border border-[#DFE3FA] rounded-[4px] pl-[20px] pt-[18px] pb-[15px] font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#000000]  outline-none"
                type="text"
                placeholder=""
              />
            </div>

            <div className="w-full flex flex-col  md:flex-row  gap-[42px] lg:gap-[40px]">
              <div className="flex w-full flex-row gap-[23px] md:w-[60.58%] md:gap-[23px]">
                <div className="City flex flex-col gap-[9px] w-[46.21%] md:w-[49.21%] ">
                  <label
                    className="font-medium text-[13px] leading-[1.15] traking-[-0.1px] text-[#7E88C3]"
                    htmlFor=""
                  >
                    City
                  </label>
                  <input
                    defaultValue={"London"}
                    className="border border-[#DFE3FA] rounded-[4px] pl-[20px] pt-[18px] pb-[15px] font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#000000] outline-none"
                    type="text"
                    placeholder=""
                  />
                </div>

                <div className="Post-code flex flex-col gap-[9px] w-[46.21%] md:w-[49.21%] ">
                  <label
                    className="font-medium text-[13px] leading-[1.15] traking-[-0.1px] text-[#7E88C3]"
                    htmlFor=""
                  >
                    Post Code
                  </label>
                  <input
                    defaultValue={"E1 3EZ"}
                    className="border border-[#DFE3FA] rounded-[4px] pl-[20px] pt-[18px] pb-[15px] font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#000000] outline-none"
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="Country flex flex-col gap-[9px] w-full md:w-[30.29%]">
                <label
                  className="font-medium text-[13px] leading-[1.15] traking-[-0.1px] text-[#7E88C3]"
                  htmlFor=""
                >
                  Country
                </label>
                <input
                  defaultValue={"United Kingdom"}
                  className="border border-[#DFE3FA] rounded-[4px] pl-[20px] pt-[18px] pb-[15px] font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#000000]  outline-none"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
          </section>
  )
}

export default BillFromSection