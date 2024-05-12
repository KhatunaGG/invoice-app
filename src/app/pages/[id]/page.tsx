import DeleteSection from '@/app/conponents/DeleteSection'
import Details from '@/app/conponents/Details'
import React from 'react'

export type ParamsPropsType = {
  params: {
    id: string;
  }
}

const page = ({ params }: ParamsPropsType) => {

  return (
    <>
      {/* <DeleteSection params={params}  /> */}
      <Details params={params} />
    </>

  )
}

export default page

