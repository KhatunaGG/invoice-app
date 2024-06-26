"use client";
import React, { useContext } from "react";
import { GlobalContext } from "../Context";
import Link from "next/link";
import DeleteSection from "./DeleteSection";
import { DataType, ParamsPropsType } from "../interfaces";

const Details = ({ params }: ParamsPropsType) => {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const {
    data,
    markAsPaid,
    setMarkAsPaid,
    setData,
    setNewInvoicePage,
    newInvoicePage,
    setEditParams,
    setClientName,
    setCreatedAt,
    setClientEmail,
    setClientStreet,
    setClientCity,
    setClientCountry,
    setClientPostCode,
    setPaymentDue,
    setStatus,
    setTotal,
    setTotalPrice,
    setProjectDesc,
    setNewItemArr,
    setDeleteSectionOverlay,
    deleteSectionOverlay,
  } = context;

  const paramsData = data.filter((item) => item.id === params.id);

  if (paramsData.length === 0) return;
  const handleEdit = () => {
    const invoice: DataType = paramsData[0];
    setClientName(invoice.clientName);
    setCreatedAt(invoice.createdAt);
    setClientEmail(invoice.clientEmail);
    setClientStreet(invoice.clientAddress.street);
    setClientCity(invoice.clientAddress.city);
    setClientCountry(invoice.clientAddress.country);
    setClientPostCode(invoice.clientAddress.postCode);
    setPaymentDue(invoice.paymentDue);
    setStatus(invoice.status);
    setTotal(invoice.total);
    setProjectDesc(invoice.description);
    setTotalPrice(invoice.total);
  };

  return (
    <div className="w-full lg:w-[calc(100%-103px)] h-full flex flex-col items-center bg-[#F8F8FB] md:mb-[136px] lg:mb-[136px]">
      <div className="w-[87.2%] md:w-[87.5%] lg:w-[50.69%] lg:min-w-[730px] flex flex-col items-center justify-center pb-[56px] pt-[49px] md:pb-0 ">
        <div className="w-full flex flex-row gap-[23.66px] items-center mb-[31px]">
          <img
            className="w-[8.46px]"
            src="/assets/icon-arrow-left.svg"
            alt=""
          />
          <Link href={"/"}>
            <p className="font-bold">Go back</p>
          </Link>
        </div>

        {paramsData.map((el, i) => (
          <div key={i} className="w-full flex flex-col gap-6">
            <div
              className="w-full flex flex-row items-center gap-6 px-6 pt-[24px] pb-[27px] md:px-8 bg-white shadow-lg rounded-[8px]
            justify-between md:py-[20px]"
            >
              <div className="w-full justify-between flex flex-row items-center md:justify-start md:gap-[20px]">
                <p className="text-[#858BB2] text-[13px] font-medium leading-[1.15]  tracking-[-0.1px]">
                  Status
                </p>
                <button
                  style={{
                    backgroundColor:
                      el.status === "paid"
                        ? "#33d6a042"
                        : el.status === "pending"
                        ? "#ff910032"
                        : "#98949447",
                  }}
                  className="w-[31.80%] border-none outline-none bg-[#33d6a024] pt-[14px] pb-[12px] lg:w-[104px] rounded-[6px] flex flex-row items-center justify-center gap-2"
                >
                  <span
                    style={{
                      backgroundColor:
                        el.status === "paid"
                          ? "#33D69F"
                          : el.status === "pending"
                          ? "#FF8F00"
                          : "#373B53",
                    }}
                    className={`w-[8px] h-[8px] rounded-full`}
                  ></span>

                  <span
                    style={{
                      color:
                        el.status === "paid"
                          ? "#33D69F"
                          : el.status === "pending"
                          ? "#FF8F00"
                          : "#373B53",
                    }}
                    className="text-[#33D69F] font-bold text-[15px] leading-[1] tracking-[-0.25px]"
                  >
                    {el.status}
                  </span>
                </button>
              </div>

              <div className="hidden md:w-full lg:w-full md:flex lg:flex md:flex-row md:items-center md:gap-2 ">
                <button
                  onClick={() => {
                    setNewInvoicePage(!newInvoicePage);
                    setEditParams(params.id);
                    handleEdit();
                    setNewItemArr([]);
                  }}
                  className="bg-[#F9FAFE] pt-[18px] pb-[15px] px-[23.5px] rounded-[50px] text-[#7E88C3] font-bold text-[15px] leading-[1] tracking-[-0.25px]"
                >
                  Edit
                </button>
                <button
                  onClick={() => setDeleteSectionOverlay(!deleteSectionOverlay)}
                  className={`bg-[#EC5757] pt-[18px] pb-[15px] px-[24.5px] rounded-[50px] text-white font-bold text-[15px] leading-[1] tracking-[-0.25px] transition-background-color duration-300 hover:bg-[#FF9797]`}
                >
                  Delete
                </button>

                {deleteSectionOverlay && params ? (
                  <DeleteSection params={params} />
                ) : (
                  ""
                )}

                <button
                  onClick={() => {
                    if (el.status === "pending" || el.status === "draft") {
                      setMarkAsPaid(!markAsPaid);
                      const index = data.findIndex((item) => item.id === el.id);
                      if (index !== -1) {
                        const newData = [...data];
                        newData[index] = { ...newData[index], status: "paid" };
                        setData(newData);
                      }
                    }
                  }}
                  className="bg-[#7C5DFA] pt-[18px] pb-[15px] px-[23.5px] rounded-[50px] text-white font-bold text-[15px] leading-[1] tracking-[-0.25px] whitespace-nowrap transition-background-color duration-300 hover:bg-[#9277FF] "
                >
                  Mark as Paid
                </button>
              </div>
            </div>

            <div className="w-full bg-white rounded-[8px] shadow-lg p-8">
              <div className="flex flex-col gap-[30px] md:flex-row md:justify-between mb-[21px] ">
                <div className="flex flex-col gap-[7px]">
                  <p className="font-bold text-[15px] leading-[1] tracking-[-0.25px] text-black md:mb-0 lg:mb-0">
                    <span className="text-[#7E88C3] font-bold text-[15px] leading-[1] tracking-[-0.25px]">
                      #
                    </span>
                    {el.id}
                  </p>
                  <p className="text-[#7E88C3] text-[13px] font-medium leading-[1.15]  tracking-[-0.1px]">
                    {el.description}
                  </p>
                </div>

                <div className="flex flex-col items-start md:items-end ">
                  <p className="text-[#7E88C3] text-[13px] font-medium leading-[1.38]  tracking-[-0.1px]">
                    {el.senderAddress.street}
                  </p>
                  <p className="text-[#7E88C3] text-[13px] font-medium leading-[1.38]  tracking-[-0.1px]">
                    {el.senderAddress.city}
                  </p>
                  <p className="text-[#7E88C3] text-[13px] font-medium leading-[1.38]  tracking-[-0.1px]">
                    {el.senderAddress.postCode}
                  </p>
                  <p className="text-[#7E88C3] text-[13px] font-medium leading-[1.38]  tracking-[-0.1px]">
                    {el.senderAddress.country}
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row mb-[47px]">
                <div className=" flex gap-0 justify-between lg:flex-row md:gap-[117px]">
                  <div className="flex flex-col   gap-[31px]">
                    <div className="flex flex-col gap-[13px]">
                      <p className="text-[#7E88C3] text-[13px] font-medium leading-[1.15]  tracking-[-0.1px]">
                        Invoice Date
                      </p>
                      <p className="font-bold text-[15px] leading-[1.33] tracking-[-0.25px] text-black">
                        {el.createdAt}
                      </p>
                    </div>

                    <div className="flex flex-col gap-[13px]">
                      <p className="text-[#7E88C3] text-[13px] font-medium leading-[1.15]  tracking-[-0.1px]">
                        Payment Due
                      </p>
                      <p className="font-bold text-[15px] leading-[1.33] tracking-[-0.25px] text-black">
                        {el.paymentDue}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[13px]">
                    <p className="text-[#7E88C3] text-[13px] font-medium leading-[1.15]  tracking-[-0.1px]">
                      Bill To
                    </p>
                    <div className="flex flex-col gap-[2.2px]">
                      <p className="font-bold text-[15px] leading-[1.33] tracking-[-0.25px] text-black mb-[7px]">
                        {el.clientName}
                      </p>
                      <p className="text-[#7E88C3] text-[13px] font-medium leading-[1.15]  tracking-[-0.1px]">
                        {el.clientAddress.street}
                      </p>
                      <p className="text-[#7E88C3] text-[13px] font-medium leading-[1.15]  tracking-[-0.1px]">
                        {el.clientAddress.city}
                      </p>
                      <p className="text-[#7E88C3] text-[13px] font-medium leading-[1.15]  tracking-[-0.1px]">
                        {el.clientAddress.postCode}
                      </p>
                      <p className="text-[#7E88C3] text-[13px] font-medium leading-[1.15]  tracking-[-0.1px]">
                        {el.clientAddress.country}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-[13px] md:ml-[117px]">
                  <p className="text-[#7E88C3] text-[13px] font-medium leading-[1.15]  tracking-[-0.1px]">
                    Sent to
                  </p>
                  <p className="font-bold text-[15px] leading-[1.33] tracking-[-0.25px] text-black">
                    {el.clientEmail}
                  </p>
                </div>
              </div>

              <div className="px-8 pt-[33px] pb-[39px] bg-[#F8F8FB] rounded-tr-[8px] rounded-tl-[8px]">
                <div className="flex flex-col gap-6 md:gap-8">
                  <div className="hidden w-full md:flex">
                    <div className="w-full flex flex-row items-center justify-between  md:w-[75%]">
                      <p className="text-[rgb(126,136,195)] text-[13px] font-medium leading-[1.15]  tracking-[-0.1px] md:w-[64%]">
                        Item Name
                      </p>
                      <div className="flex flex-row justify-between items-end   md:w-[45%] ">
                        <p className="text-[#7E88C3] text-[13px] font-medium leading-[1.15]  tracking-[-0.1px] md:w-[20%] flex justify-end">
                          QTY.
                        </p>
                        <p className="text-[#7E88C3] text-[13px] font-medium leading-[1.15]  tracking-[-0.1px] md:w-[60%]  flex justify-end">
                          Price
                        </p>
                      </div>
                    </div>
                    <p className="text-[#7E88C3] text-[13px] font-medium leading-[1.15]  tracking-[-0.1px] flex justify-end  md:w-[25%]">
                      Total
                    </p>
                  </div>

                  {el.items?.map((item, i) => (
                    <div
                      key={i}
                      className="w-full flex flex-row  md:flex items-center "
                    >
                      <div className="w-full flex-col flex md:flex-row md:items-center justify-between  md:w-[75%]">
                        <p className="font-bold text-[15px] leading-[1.33] tracking-[-0.25px] text-black md:w-[64%]">
                          {item?.name}
                        </p>
                        <div className="flex flex-row items-end justify-between md:w-[45%] ">
                          <p className="hidden  font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#7E88C3] md:w-[20%]  md:flex justify-end">
                            {item?.quantity}
                          </p>
                          <p className="font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#7E88C3] md:w-[60%] flex justify-end">
                            <span className="md:hidden">
                              {item?.quantity} x
                            </span>
                            <span className="ml-[3px] md:ml-0 text-[blue]">
                              {" "}
                              £{" "}
                              {typeof item?.price === "number"
                                ? item?.price.toFixed(2)
                                : item?.price}
                            </span>
                          </p>
                        </div>
                      </div>
                      <p className=" w-[50%] font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#7E88C3] flex justify-end  md:w-[25%]">
                        £{" "}
                        {(Number(item?.quantity) * Number(item?.price)).toFixed(
                          2
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full bg-[#252945] px-8 flex flex-row justify-between items-center pt-[27px] pb-[21px] rounded-br-[8px] rounded-bl-[8px]">
                <p className="text-[13px] font-medium leading-[1.38] tracking-[-0.1px] text-white">
                  Amount Due
                </p>
                <p className="text-[24px] font-bold leading-[1.33] tracking-[-0.5px] text-white">
                  £ {el.total.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto bg-white w-full py-[22px] flex md:hidden lg:hidden flex-row items-center justify-center gap-2 ">
        <div>
          <button className="bg-[#F9FAFE] pt-[18px] pb-[15px] px-[23.5px] rounded-[50px] text-[#7E88C3] font-bold text-[15px] leading-[1] tracking-[-0.25px]">
            Edit
          </button>

          <button className="bg-[#EC5757] pt-[18px] pb-[15px] px-[24.5px] rounded-[50px] text-white font-bold text-[15px] leading-[1] tracking-[-0.25px]">
            Delete
          </button>

          <button className="bg-[#7C5DFA] pt-[18px] pb-[15px] px-[23.5px] rounded-[50px] text-white font-bold text-[15px] leading-[1] tracking-[-0.25px] whitespace-nowrap ml-2 transition-background-color duration-300 hover:bg-[#9277FF]">
            Mark as Paid
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
