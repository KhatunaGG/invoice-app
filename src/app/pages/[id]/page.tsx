import Details from "@/app/conponents/Details";
import { ParamsPropsType } from "@/app/interfaces";
import React from "react";


const page = ({ params }: ParamsPropsType) => {
  return (
    <>
      <Details params={params} />
    </>
  );
};

export default page;
