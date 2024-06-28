"use client";
import React, { useContext } from "react";
import { GlobalContext } from "../Context";

const InvoiceDateSaction = () => {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const {
    setCreatedAt,
    editParams,
    data,
    error,
    paymentTermsDropDown,
    setPaymentTermsDropDown,
    setHandlePaymentTerm,
    calculatePaymentTerms,
    setProjectDesc,
    projectDesc,
    createdAt,
    handlePaymentTerm,
  } = context;

  const editData = data.find((item) => item.id === editParams);


  
  return (
    <section className="ivoice-date-section flex flex-col items-center gap-6 md:mb-[27px] md:lg-[39px]">
      <div className="w-full flex flex-col items-center gap-6 md:flex-row">
        <div className="relative Invoice-Date flex flex-col gap-[9px] w-full md:w-[47.61%]">
          <label
            className="font-medium text-[13px] leading-[1.15] traking-[-0.1px] text-[#7E88C3]"
            htmlFor=""
          >
            Invoice Date
          </label>
          <input
            onChange={(e) => setCreatedAt(e.target.value)}
            className="border border-[#DFE3FA] rounded-[4px] pl-[20px] pt-[18px] pb-[15px] pr-4 font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#000000] outline-none"
            type="date"
            defaultValue={editParams ? editData?.createdAt : ""}
            placeholder=""
          />
          {error && createdAt.length === 0 ? (
            <span className="text-red-600 text-[10px] absolute left-1 bottom-[-19px]">
              Please fill all required fields
            </span>
          ) : (
            ""
          )}
        </div>

        <div className="w-full flex flex-col gap-[9px]  md:w-[47.61%] relative ">
          <label
            className="font-medium text-[13px] leading-[1.15] traking-[-0.1px] text-[#7E88C3] w-full "
            htmlFor=""
          >
            Payment Terms
          </label>
          <div
            onClick={() => setPaymentTermsDropDown(!paymentTermsDropDown)}
            className="w-full bg-white border border-[#DFE3FA] h-[53px]  rounded-[4px] overflow-hidden flex items-center font-bold text-[13px] leading-[1.15] traking-[-0.1px] text-[#000000] px-[20px] flex-row justify-between "
          >
            <span>{handlePaymentTerm}</span>
            <img src="/assets/icon-arrow-down.svg" alt="" />
          </div>

          {paymentTermsDropDown && (
            <div className="bg-white absolute top-[80px] left-0 z-30 rounded-[4px] flex  flex-col w-full overflow-hidden shadow-xl">
              <span
                onClick={() => {
                  setHandlePaymentTerm("Net 1 Day");
                  setPaymentTermsDropDown(!paymentTermsDropDown);
                  calculatePaymentTerms(createdAt, 1);
                }}
                className="border border-b-[#e0e1e5] py-[15px] pl-6"
              >
                Net 1 Day
              </span>
              <span
                onClick={() => {
                  setHandlePaymentTerm("Net 14 Days");
                  setPaymentTermsDropDown(!paymentTermsDropDown);
                  calculatePaymentTerms(createdAt, 14);
                }}
                className="border border-b-[#e0e1e5] py-[15px] pl-6"
              >
                Net 14 Days
              </span>
              <span
                onClick={() => {
                  setHandlePaymentTerm("Net 30 Days");
                  setPaymentTermsDropDown(!paymentTermsDropDown);
                  calculatePaymentTerms(createdAt, 30);
                }}
                className="border border-b-[#e0e1e5] py-[15px] pl-6"
              >
                Net 30 Days
              </span>
              <span
                onClick={() => {
                  setHandlePaymentTerm("Net 7 Days");
                  setPaymentTermsDropDown(!paymentTermsDropDown);
                  calculatePaymentTerms(createdAt, 7);
                }}
                className="border border-b-[#e0e1e5] py-[15px] pl-6"
              >
                Net 7 Days
              </span>
            </div>
          )}

          {error && paymentTermsDropDown ? (
            <span className="text-red-600 text-[10px] absolute left-1 bottom-[-19px]">
              Please fill all required fields
            </span>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="relative Project-Description flex flex-col gap-[9px] w-full ">
        <label
          className="font-medium text-[13px] leading-[1.15] traking-[-0.1px] text-[#7E88C3]"
          htmlFor=""
        >
          Project Description
        </label>
        <input
          onChange={(e) => setProjectDesc(e.target.value)}
          className="border border-[#DFE3FA] rounded-[4px] pl-[20px] pt-[18px] pb-[15px] font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#000000] outline-none"
          type="text"
          defaultValue={editParams ? editData?.description : ""}
          placeholder=""
        />
        {error && projectDesc.length === 0 ? (
          <span className="text-red-600 text-[10px] absolute left-1 bottom-[-19px]">
            Please fill all required fields
          </span>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default InvoiceDateSaction;
