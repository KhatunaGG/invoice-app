"use client";
import React, { useContext } from "react";
import { GlobalContext} from "../Context";
import { ItemSectionPropsType } from "../interfaces";


const ItemSection = ({ el }: ItemSectionPropsType) => {
  const contex = useContext(GlobalContext);
  if (!contex) return null;
  const {
    editParams,
    setItemName,
    setItemQty,
    setItemPrice,
    setTotalPrice,
    itemQty,
    itemPrice,
    itemName,
    error,
    totalPrice
  } = contex;


  return (
    <div
      className={`w-full flex flex-col items-center md:flex-row  gap-2 mb-[49px]`}
    >
      <div className="relative w-full flex flex-col gap-y-[15px]       md:w-[41%]">
        <label
          className="font-medium text-[13px] leading-[1.15] traking-[-0.1px] text-[#7E88C3]"
          htmlFor=""
        >
          Item Name
        </label>
        <input
          onChange={(e) => setItemName(e.target.value)}
          defaultValue={editParams ? el?.name : ""}
          className="border border-[#DFE3FA] rounded-[4px] pl-[20px] pt-[18px] pb-[15px] font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#000000] h-[52px] outline-none"
        />
        {error && itemName.length === 0 ? (
          <span className="text-red-600 text-[10px] absolute left-1 bottom-[-19px]">
            Please fill all required fields
          </span>
        ) : (
          ""
        )}
      </div>

      <div className=" w-full flex flex-row items-center gap-2     md:w-[59%]">
        <div className="w-full flex flex-row gap-2">
          <div className="w-[18.34%] flex flex-col gap-y-[15px]     md:w-[16%]">
            <label
              className="font-medium text-[13px] leading-[1.15] traking-[-0.1px] text-[#7E88C3] text-right"
              htmlFor=""
            >
              Qty.
            </label>
            <input
              onChange={(e) => setItemQty(Number(e.target.value))}
              defaultValue={editParams ? el?.quantity : ""}
              style={{
                border: error && itemQty === 0 ? "1px solid red" : "",
              }}
              className=" border border-[#DFE3FA] rounded-[4px] text-right pt-[18px] pb-[15px] font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#000000] h-[52px] outline-none"
            />
          </div>

          <div className="w-[30.58%] flex flex-col gap-y-[15px]   md:w-[31%]">
            <label
              className="font-medium text-[13px] leading-[1.15] traking-[-0.1px] text-[#7E88C3] text-right"
              htmlFor=""
            >
              Price
            </label>
            <input
              onChange={(e) => setItemPrice(Number(e.target.value))}
              defaultValue={editParams ? el?.price : ""}
                style={{
                  border: error && itemPrice === 0 ? "1px solid red" : "",
                }}
              className=" border border-[#DFE3FA] rounded-[4px] text-right pt-[18px] pb-[15px] font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#000000] h-[52px]  outline-none"
            />
          </div>

          <div className="w-[30.58%] flex flex-col gap-y-[15px]    md:w-[31%]">
            <label
              className="font-medium text-[13px] leading-[1.15] traking-[-0.1px] text-[#7E88C3] text-right"
              htmlFor=""
            >
              Total
            </label>
            <input
              onChange={() => setTotalPrice(itemQty * itemPrice)}
              defaultValue={editParams ? el?.total : ""}
                style={{
                  border:
                    error && totalPrice === 0 ? "1px solid red" : "",
                }}
              className="border border-[#DFE3FA] rounded-[4px] text-right pt-[18px] pb-[15px] font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#000000] h-[52px] outline-none"
            />
          </div>
          <div
            className="w-[19.57%] flex self-center justify-end mt-8  md:max-w-[22%]"
          >
            <img
              className="w-[12.44px] h-[16px]"
              src="/assets/icon-delete.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemSection;
