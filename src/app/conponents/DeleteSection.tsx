"use client";
import React, { useContext } from "react";
import { GlobalContext } from "../Context";
import Link from "next/link";
import { ParamsPropsType } from "../interfaces";

const DeleteSection = ({ params }: ParamsPropsType) => {
  const context = useContext(GlobalContext);
  if (!context) return null;

  const {
    deleteSectionOverlay,
    setDeleteSectionOverlay,
    deleteDataItems,
    setData,
  } = context;

  return (
    <>
      {deleteSectionOverlay && (
        <div className=" bg-[#00000049] w-full h-full absolute top-0 left-0 z-20 flex items-center justify-center px-8 ">
          <div className="w-full h-screen absolute top-0 z-30 flex items-center justify-center px-8 ">
            <div className=" bg-white  rounded-[8px] p-[34px] md:px-[48px] md:pt-[51px] md:pb-[48px] ">
              <h2 className="text-[24px] font-bold leading-[1.33] tracking-[-0.5px] mb-[12px] text-[#0C0E16]">
                Confirm Deletion
              </h2>
              <p className="tetx-[13px] font-medium leading-[1.69] tracking-[-0.1px] text-[#888EB0]   mb-[14px]">
                Are you sure you want to delete invoice{" "}
                <span className="font-bold">#{params.id}?</span> This action
                cannot be undone.
              </p>

              <div className="w-full flex items-center justify-end gap-2">
                <button
                  onClick={() => setDeleteSectionOverlay(!deleteSectionOverlay)}
                  className="bg-[#F9FAFE] pt-[18px] pb-[15px] px-[23.5px] rounded-[50px] text-[#7E88C3] font-bold text-[15px] leading-[1] tracking-[-0.25px]"
                >
                  Cancel
                </button>
                <Link href={"/pages/Empty"}>
                  <button
                    onClick={() => deleteDataItems(params.id)}
                    className="bg-[#EC5757] pt-[18px] pb-[15px] px-[24.5px] rounded-[50px] text-white font-bold text-[15px] leading-[1] tracking-[-0.25px] transition-background-color duration-300 hover:bg-[#FF9797]"
                  >
                    Delete
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteSection;
