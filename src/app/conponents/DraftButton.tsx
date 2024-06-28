"use client";
import React, { useContext } from "react";
import { GlobalContext } from "../Context";
import { DataType } from "../interfaces";

const DraftButton = () => {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const {
    newInvoicePage,
    editParams,
    randomID,
    createdAt,
    projectDesc,
    clientName,
    clientEmail,
    clientStreet,
    clientCity,
    clientPostCode,
    clientCountry,
    itemName,
    itemQty,
    itemPrice,
    totalPrice,
    addNewInvoice,
    setNewInvoicePage,
    paymentDue,
    paymentTerms,
    setUpdatedDataEl
  } = context;



  return (
    <>
      {!editParams && (
        <button
          onClick={() => {
            let newInvoiceObj: DataType = {
              id: randomID,
              createdAt: createdAt,
              paymentDue: paymentDue,
              description: projectDesc,
              paymentTerms: paymentTerms,
              clientName: clientName,
              clientEmail: clientEmail,
              status: "draft",
              senderAddress: {
                street: "19 Union Terrace",
                city: "London",
                postCode: "E1 3EZ",
                country: "United Kingdom",
              },
              clientAddress: {
                street: clientStreet,
                city: clientCity,
                postCode: clientPostCode,
                country: clientCountry,
              },
              items: [
                {
                  name: itemName,
                  quantity: itemQty,
                  price: itemPrice,
                  total: itemQty * itemPrice,
                },
              ],
              total: totalPrice,
            };
            addNewInvoice(newInvoiceObj);
            setNewInvoicePage(!newInvoicePage);
          }}
          className="bg-[#000000] pt-[18px] pb-[15px] px-[14.5px] md:px-[23.5px] rounded-[50px] text-[#7E88C3] font-bold text-[15px] leading-[1] tracking-[-0.25px] whitespace-nowrap "
        >
          Save as Draft
        </button>
      )}
    </>
  );
};

export default DraftButton;
