'use client'
import React, { useContext } from "react";
import Form from "./Form";
import DeleteSection from "./DeleteSection";
import { GlobalContext } from "../Context";

const Header = () => {
  const context = useContext(GlobalContext)
  if(!context) return null
  const { isDesktop, newInvoicePage, editParams } = context;


  return (
    <>
      <div
        className="w-full bg-[#373B53] h-[80px] md:h-[80px]  lg:w-[103px]     lg:h-[100vh]
   relative lg:rounded-tr-[29px] lg:rounded-br-[18px] lg:flex lg:items-end  z-50"
      >
        <img
          className="absolute top-0 legt-0 z-10 bg-transparent  w-[80px] h-[80px] lg:w-[103px] lg:h-[103px]"
          src="/assets/Group9.svg"
          alt=""
        />

        <div className="w-full h-full flex items-center justify-end  lg:h-full lg:w-full lg:items-end ">
          <div className="flex  items-center h-full lg:h-auto lg:w-full flex-row lg:flex-col lg:justify-between  ">


            <img
              className="w-[19.99px] h-[19.99px] mr-6 lg:mr-0 lg:mt-6"
              src="/assets/icon-moon.svg"
              alt=""
            />
            <div className="line h-full w-[1px] lg:w-full lg:h-[1px] bg-[#494E6E] lg:my-6"></div>
            <img
              className="w-[32px] h-[32px] rounded-full ml-6 mr-6 lg:mb-6"
              src="/assets/image-avatar.jpg"
              alt=""
            />
          </div>
        </div>


      </div>

      {newInvoicePage &&  <Form />}
      {/* {editParams && (
        <Form params={editParams} />
      )} */}


   
    </>
  );
};

export default Header;
