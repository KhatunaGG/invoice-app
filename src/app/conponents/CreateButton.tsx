"use client";
import React, { useContext } from "react";
import { GlobalContext } from "../Context";

const CreateButton = () => {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const {
    newInvoicePage,
    editParams,
    setNewInvoicePage,
    createNewInvoice,
    editExistingInvoice,
  } = context;

  return (
    <>
      <button
        onClick={() => {
          setNewInvoicePage(!newInvoicePage);
          if (!editParams) {
            createNewInvoice();
          } else {
            editExistingInvoice(editParams);
          }
        }}
        className="bg-[#7C5DFA] pt-[18px] pb-[15px] px-[14.5px] md:px-[23.5px] rounded-[50px] text-white font-bold text-[15px] leading-[1] tracking-[-0.25px] whitespace-nowrap "
      >
        {editParams ? "Save Changes" : "Save & Send"}
      </button>
    </>
  );
};

export default CreateButton;
