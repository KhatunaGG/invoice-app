"use client";
import React, { useContext } from "react";
import { DataType, GlobalContext } from "../Context";
import { Span } from "next/dist/trace";

const Form = () => {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const {
    newInvoicePage,
    // addNewInvoice,
    setClientName,
    setClientEmail,
    setClientStreet,
    setClientCity,
    setClientPostCode,
    setClientCountry,
    setCreatedAt,
    setPaymentTermsDropDown,
    paymentTermsDropDown,
    setHandlePaymentTerm,
    handlePaymentTerm,
    setProjectDesc,
    setItemName,
    setItemPrice,
    setItemQty,
    setTotal,
    setTotalPrice,
    randomID,
    setData,

    addNewInvoice,

    createdAt,
    projectDesc,
    clientName,
    clientEmail,
    status,
    clientStreet,
    clientCity,
    clientPostCode,
    clientCountry,
    totalPrice,
    itemName,
    itemPrice,
    itemQty,

    // setStatusOnBtnClick,
    // statusOnBtnClick,
    newInvoiceItem,
    // updateInvoiceStatus,
    setNewInvoiceItem,

    // createNewInvoisObj,
    setNewInvoicePage,
    setError,
    error,



    calculatePaymentTerms,
    paymentTerms,
    paymentDue
  } = context;

 

  // console.log(randomID);
  console.log(itemPrice, 'itemprice')
  console.log(itemName, 'itemName')

  return (
    <div className="bg-[#00000049] min-h-[2147px] w-full absolute top-0  z-10  flex flex-row md:min-h-[1470px] lg:min-h-[1424px] ">
      <div className="w-full h-full bg-white  md:rounded-tr-[20px] md:w-[80.20%] lg:w-[49.93%] lg:rounded-tr-[20px] md:rounded-br-[20px] lg:rounded-br-[20px] flex flex-col gap-6 md:gap-[47px] ">
        <div className="left w-full  px-6  pt-[113px]  md:pt-[139px]  lg:pl-[159px] lg:pt-[59px] md:px-[7.78%] lg:px-[7.78%] ">
          <div className="w-full flex flex-row gap-[23.66px] items-center md:hidden lg:hidden mb-[26px]">
            <img
              className="w-[8.46px]"
              src="/assets/icon-arrow-left.svg"
              alt=""
            />
            <p className="font-bold">Go back</p>
          </div>

          {!newInvoicePage ? (
            <p className="font-bold text-[24px] leading-[1] tracking-[-0.5px] text-black md:mb-0 lg:mb-0 mb-[22px] lg:hidden">
              Edit
              <span className="text-[#7E88C3] font-bold text-[24px] leading-[1] tracking-[-0.5px] ">
                {" "}
                #
              </span>
              RT3080
            </p>
          ) : (
            <p className="font-bold text-[24px] leading-[1] tracking-[-0.5px] text-black md:mb-[46px] lg:mb-[46px] mb-[22px] ">
              New Invoice
            </p>
          )}

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
                className="border border-[#DFE3FA] rounded-[4px] pl-[20px] pt-[18px] pb-[15px] font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#000000]  outline-none"
                defaultValue={"19 Union Terrace"}
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
                    className="border border-[#DFE3FA] rounded-[4px] pl-[20px] pt-[18px] pb-[15px] font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#000000] outline-none"
                    defaultValue={"London"}
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
                    className="border border-[#DFE3FA] rounded-[4px] pl-[20px] pt-[18px] pb-[15px] font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#000000] outline-none"
                    defaultValue={"E1 3EZ"}
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
                  className="border border-[#DFE3FA] rounded-[4px] pl-[20px] pt-[18px] pb-[15px] font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#000000]  outline-none"
                  defaultValue={"United Kingdom"}
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
          </section>

          <section className="bill-to flex flex-col gap-6 mb-[41px]">
            <h3 className="font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#7C5DFA]">
              Bill From
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
                placeholder=""
              />
              {error && clientName.length === 0 ? <span className="text-red-600 text-[10px] absolute left-1 bottom-[-19px]">Please fill all required fields</span> : ''}
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
                placeholder=""
              />
              {error && clientEmail.length === 0 ? <span className="text-red-600 text-[10px] absolute left-1 bottom-[-19px]">Please fill all required fields</span> : ''}
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
                placeholder=""
              />
              {error && clientStreet.length === 0 ? <span className="text-red-600 text-[10px] absolute left-1 bottom-[-19px]">Please fill all required fields</span> : ''}
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
                    placeholder=""
                  />
                  {error && clientCity.length === 0 ? <span className="text-red-600 text-[10px] absolute left-1 bottom-[-19px]">Please fill all required fields</span> : ''}
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
                    placeholder=""
                  />
                  {error && clientPostCode.length === 0 ? <span className="text-red-600 text-[10px] absolute left-1 bottom-[-19px]">Please fill all required fields</span> : ''}
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
                  placeholder=""
                />
                {error && clientCountry.length === 0 ? <span className="text-red-600 text-[10px] absolute left-1 bottom-[-19px]">Please fill all required fields</span> : ''}
              </div>
            </div>
          </section>

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
                  placeholder=""
                />
                {error && createdAt.length === 0 ? <span className="text-red-600 text-[10px] absolute left-1 bottom-[-19px]">Please fill all required fields</span> : ''}
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
                        calculatePaymentTerms(createdAt,  1)
                      }}
                      // defaultValue={1}
                      className="border border-b-[#e0e1e5] py-[15px] pl-6"
                    >
                      Net 1 Day
                    </span>
                    <span
                      onClick={() => {
                        setHandlePaymentTerm("Net 14 Days");
                        setPaymentTermsDropDown(!paymentTermsDropDown);
                        calculatePaymentTerms(createdAt,  14)
                      }}
                      // defaultValue={14}
                      className="border border-b-[#e0e1e5] py-[15px] pl-6"
                    >
                      Net 14 Days
                    </span>
                    <span
                      onClick={() => {
                        setHandlePaymentTerm("Net 30 Days");
                        setPaymentTermsDropDown(!paymentTermsDropDown);
                        calculatePaymentTerms(createdAt,  30)
                      }}
                      // defaultValue={30}
                      className="border border-b-[#e0e1e5] py-[15px] pl-6"
                    >
                      Net 30 Days
                    </span>
                    <span
                      onClick={() => {
                        setHandlePaymentTerm("Net 7 Days");
                        setPaymentTermsDropDown(!paymentTermsDropDown);
                        calculatePaymentTerms(createdAt,  7)
                      }}
                      // defaultValue={7}
                      className="border border-b-[#e0e1e5] py-[15px] pl-6"
                    >
                      Net 7 Days
                    </span>
                  </div>
                )}

              {error && paymentTermsDropDown ? <span className="text-red-600 text-[10px] absolute left-1 bottom-[-19px]">Please fill all required fields</span> : ''}
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
                placeholder=""
              />
              {error && projectDesc.length === 0 ? <span className="text-red-600 text-[10px] absolute left-1 bottom-[-19px]">Please fill all required fields</span> : ''}
              {/* <div className='border border-[#DFE3FA] rounded-[4px] pl-[20px] pt-[18px] pb-[15px] font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#000000] h-[52px]'>Graphic Design</div> */}
            </div>
          </section>

          <section className="Item-List flex flex-col">
            <h3 className="font-bold text-[18px] leading-[1.77] tracking-[-0.38px] text-[#777F98] mb-[25px]">
              Item List
            </h3>

            <div className="w-full flex flex-col items-center md:flex-row  gap-2 mb-[49px]">
              <div className="relative w-full flex flex-col gap-y-[15px]       md:w-[41%]">
                <label
                  className="font-medium text-[13px] leading-[1.15] traking-[-0.1px] text-[#7E88C3]"
                  htmlFor=""
                >
                  Item Name
                </label>
                <input
                  onChange={(e) => setItemName(e.target.value)}
                  className="border border-[#DFE3FA] rounded-[4px] pl-[20px] pt-[18px] pb-[15px] font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#000000] h-[52px] outline-none"
                />
                {error && itemName.length === 0 ? <span className="text-red-600 text-[10px] absolute left-1 bottom-[-19px]">Please fill all required fields</span> : ''}
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
                      style={{border: error && itemQty === 0  ? '1px solid red' : ''}}
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
                      style={{border: error && itemPrice === 0 ? '1px solid red' : ''}}
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
                      // onChange={(e) => setTotalPrice(Number(e.target.value))}
                      onChange={() => setTotalPrice(itemQty * itemPrice)}
                      style={{border: error && totalPrice === 0 ? '1px solid red' : ''}}
                      className="border border-[#DFE3FA] rounded-[4px] text-right pt-[18px] pb-[15px] font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#000000] h-[52px] outline-none"
                    />
                  </div>

                  <div className="w-[19.57%] flex self-center justify-end mt-8  md:max-w-[22%]">
                    <img
                      className="w-[12.44px] h-[16px]"
                      src="/assets/icon-delete.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <button className="w-full pt-[18px] pb-[15px] bg-[#F9FAFE] font-bold text-[15px] leading-[1] tracking-[-0.25px] text-[#7E88C3] rounded-[24px] transition duration-300 hover:bg-[#DFE3FA]">
            + Add New Item
          </button>
        </div>

        <footer className="w-full md:px-[56px]  lg:pl-[159px] lg:pr-[56px] ">
          <div className="h-[64px] md:hidden w-full  bg-gradient-to-t from-gray-300 to-white "></div>

          <div className="w-full flex flex-row items-center gap-2 md:justify-between px-6 bg-white py-6  md:px-0 lg:pb-8 md:pt-0 lg:pt-0 ">
            <button
            onClick={() => setNewInvoicePage(!newInvoicePage)}
            className="bg-[#F9FAFE] pt-[18px] pb-[15px] px-[23.5px] rounded-[50px] text-[#7E88C3] font-bold text-[15px] leading-[1] tracking-[-0.25px]">
              Discard
            </button>

            <div className="flex items-center flex-row gap-2 ">
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

              <button
                onClick={() => {
                  if (
                    createdAt &&
                    handlePaymentTerm &&
                    projectDesc &&
                    clientName &&
                    clientEmail &&
                    clientStreet &&
                    clientCity &&
                    clientPostCode &&
                    clientCountry &&
                    itemName &&
                    itemQty &&
                    itemPrice &&
                    totalPrice
                  ) {
                    let newInvoiceObj = {
                      id: randomID,
                      createdAt: createdAt,
                      paymentDue: paymentDue,
                      description: projectDesc,
                      paymentTerms: paymentTerms,
                      clientName: clientName,
                      clientEmail: clientEmail,
                      status: "pending",
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
                  } else {
                    setError(!error)

                  }
                  // setNewInvoicePage(!newInvoicePage);
                }}
                className="bg-[#7C5DFA] pt-[18px] pb-[15px] px-[14.5px] md:px-[23.5px] rounded-[50px] text-white font-bold text-[15px] leading-[1] tracking-[-0.25px] whitespace-nowrap "
              >
                Save & Send
              </button>
            </div>
          </div>
        </footer>
      </div>

      <div className="left hidden md:w-[19.79%]  lg:w-[50.06%]"> </div>
    </div>
  );
};

export default Form;
