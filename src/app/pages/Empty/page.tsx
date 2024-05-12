
import EmptyContent from '@/app/conponents/EmptyContent'
import { usePathname } from 'next/navigation'
import React from 'react'

const page = () => {


  return (
    <div className='w-full md:w-[calc(100%-103px)] h-full  md:h-full lg:h-screen flex  justify-center bg-[#F8F8FB] mx-auto'>
      <EmptyContent />

    </div>
  )
}

export default page