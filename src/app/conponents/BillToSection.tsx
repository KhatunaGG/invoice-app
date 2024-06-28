"use client";
import React, { useContext } from "react";
import { GlobalContext } from "../Context";

const BillToSection = () => {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const {
    setClientName,
    editParams,
    data,
    setClientEmail,
    setClientStreet,
    setClientCity,
    setClientPostCode,
    setClientCountry,
  } = context;

  const editData = data.find((item) => item.id === editParams);

  return (
    <section className="bill-to flex flex-col gap-6 mb-[41px]">
      <h3 className="font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#7C5DFA]">
        Bill To
      </h3>

      <div className=" relative  Street-address flex flex-col gap-[9px]">
        <label
          className="font-medium text-[13px] leading-[1.15] traking-[-0.1px] text-[#7E88C3]"
          htmlFor=""
        >
          Client’s Name
        </label>
        <input
          onChange={(e) => setClientName(e.target.value)}
          className="border border-[#DFE3FA] rounded-[4px] pl-[20px] pt-[18px] pb-[15px] font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#000000]  outline-none"
          type="text"
          defaultValue={editParams ? editData?.clientName : ""}
          placeholder=""
        />
      </div>
      <div className="relative Street-address flex flex-col gap-[9px]">
        <label
          className="font-medium text-[13px] leading-[1.15] traking-[-0.1px] text-[#7E88C3]"
          htmlFor=""
        >
          Client’s Email
        </label>
        <input
          onChange={(e) => setClientEmail(e.target.value)}
          className="border border-[#DFE3FA] rounded-[4px] pl-[20px] pt-[18px] pb-[15px] font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#000000]  outline-none"
          type="text"
          defaultValue={editParams ? editData?.clientEmail : ""}
          placeholder=""
        />
      </div>

      <div className="relative Street-address flex flex-col gap-[9px]">
        <label
          className="font-medium text-[13px] leading-[1.15] traking-[-0.1px] text-[#7E88C3]"
          htmlFor=""
        >
          Street Address
        </label>
        <input
          onChange={(e) => setClientStreet(e.target.value)}
          className="border border-[#DFE3FA] rounded-[4px] pl-[20px] pt-[18px] pb-[15px] font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#000000]  outline-none"
          type="text"
          defaultValue={editParams ? editData?.clientAddress.street : ""}
          placeholder=""
        />
      </div>

      <div className="w-full flex flex-col  md:flex-row  gap-[42px] lg:gap-[40px]">
        <div className="flex w-full flex-row gap-[23px] md:w-[60.58%] md:gap-[23px]">
          <div className="relative City flex flex-col gap-[9px] w-[46.21%] md:w-[49.21%] ">
            <label
              className="font-medium text-[13px] leading-[1.15] traking-[-0.1px] text-[#7E88C3]"
              htmlFor=""
            >
              City
            </label>
            <input
              onChange={(e) => setClientCity(e.target.value)}
              className="border border-[#DFE3FA] rounded-[4px] pl-[20px] pt-[18px] pb-[15px] font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#000000]  outline-none"
              type="text"
              defaultValue={editParams ? editData?.clientAddress.city : ""}
              placeholder=""
            />
          </div>

          <div className="relative Post-code flex flex-col gap-[9px] w-[46.21%] md:w-[49.21%] ">
            <label
              className="font-medium text-[13px] leading-[1.15] traking-[-0.1px] text-[#7E88C3]"
              htmlFor=""
            >
              Post Code
            </label>
            <input
              onChange={(e) => setClientPostCode(e.target.value)}
              className="border border-[#DFE3FA] rounded-[4px] pl-[20px] pt-[18px] pb-[15px] font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#000000] outline-none"
              type="text"
              defaultValue={editParams ? editData?.clientAddress.postCode : ""}
              placeholder=""
            />
          </div>
        </div>

        <div className="relative Country flex flex-col gap-[9px] w-full md:w-[30.29%]">
          <label
            className="font-medium text-[13px] leading-[1.15] traking-[-0.1px] text-[#7E88C3]"
            htmlFor=""
          >
            Country
          </label>
          <input
            onChange={(e) => setClientCountry(e.target.value)}
            className="border border-[#DFE3FA] rounded-[4px] pl-[20px] pt-[18px] pb-[15px] font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#000000] outline-none"
            type="text"
            defaultValue={editParams ? editData?.clientAddress.country : ""}
            placeholder=""
          />
        </div>
      </div>
    </section>
  );
};

export default BillToSection;
