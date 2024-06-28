"use client";
import React, { useContext } from "react";
import ItemSection from "./ItemSection";
import { GlobalContext } from "../Context";
import BillFromSection from "./BillFromSection";
import BillToSection from "./BillToSection";
import InvoiceDateSaction from "./InvoiceDateSection";
import DraftButton from "./DraftButton";
import CreateButton from "./CreateButton";

const Form = () => {
  const contex = useContext(GlobalContext);
  if (!contex) return null;
  const {
    setNewInvoicePage,
    newInvoicePage,
    editParams,
    data,
    createNewItems,
    createNewInvoice,
    newItemArr,
  } = contex;

  const editData = data.find((item) => item.id === editParams);

  return (
    <div className="bg-[#00000049] min-h-[2147px] w-full absolute top-0  z-10  flex flex-row md:min-h-[1470px] lg:min-h-[1424px] ">
      <div className="w-full h-full bg-white  md:rounded-tr-[20px] md:w-[80.20%] lg:w-[49.93%]  lg:rounded-tr-[20px] md:rounded-br-[20px] lg:rounded-br-[20px] flex flex-col gap-6 md:gap-[47px] ">
        <div className="left w-full  px-6  pt-[113px]  md:pt-[139px]  lg:pl-[159px] lg:pt-[59px]  md:px-[56px] lg:px-[56px] ">
          <div className="w-full flex flex-row gap-[23.66px] items-center md:hidden lg:hidden mb-[26px]">
            <img
              className="w-[8.46px]"
              src="/assets/icon-arrow-left.svg"
              alt=""
            />
            <p className="font-bold">Go back</p>
          </div>

          {editParams !== "" ? (
            <p className="font-bold text-[24px] leading-[1] tracking-[-0.5px] text-black md:mb-[46px] lg:mb-[46px] mb-[22px]">
              Edit
              <span className="text-[#7E88C3] font-bold text-[24px] leading-[1] tracking-[-0.5px] ">
                {" "}
                #{editParams}
              </span>
            </p>
          ) : (
            <p className="font-bold text-[24px] leading-[1] tracking-[-0.5px] text-black md:mb-[46px] lg:mb-[46px] mb-[22px] ">
              New Invoice
            </p>
          )}

          <BillFromSection />
          <BillToSection />
          <InvoiceDateSaction />
          <section className="Item-List flex flex-col ">
            <h3 className="font-bold text-[18px] leading-[1.77] tracking-[-0.38px] text-[#777F98] mb-[25px]">
              Item List
            </h3>
            {editData?.items?.map((el, i) => (
              <ItemSection el={el} key={i} />
            ))}
            {newItemArr.map((el, i) => (
              <ItemSection key={i} />
            ))}
          </section>

          <button
            onClick={() => {
              createNewItems(editParams);
            }}
            className="w-full pt-[18px] pb-[15px] bg-[#F9FAFE] font-bold text-[15px] leading-[1] traking-[-0.25px] text-[#7E88C3] rounded-[24px] "
          >
            + Add New Item
          </button>
        </div>

        <footer className="w-full md:px-[56px]  lg:pl-[159px] lg:pr-[56px] ">
          <div className="h-[64px] md:hidden w-full  bg-gradient-to-t from-gray-300 to-white "></div>

          <div className="w-full flex flex-row items-center gap-2 md:justify-between px-6 bg-white py-6  md:px-0 lg:pb-8 md:pt-0 lg:pt-0 ">
            <button
              onClick={() => setNewInvoicePage(!newInvoicePage)}
              className="bg-[#F9FAFE] pt-[18px] pb-[15px] px-[23.5px] rounded-[50px] text-[#7E88C3] font-bold text-[15px] leading-[1] tracking-[-0.25px]"
            >
              {editParams ? "Cancel" : "Discard"}
            </button>

            <div className="flex items-center flex-row gap-2 ">
              <DraftButton />
              <CreateButton />
            </div>
          </div>
        </footer>
      </div>

      <div className="left hidden md:w-[19.79%]  lg:w-[50.06%]"> </div>
    </div>
  );
};

export default Form;
