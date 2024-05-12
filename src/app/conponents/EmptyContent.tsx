'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import Filter from './Filter'

const EmptyContent = () => {
    const path = usePathname()
    console.log(path, 'EmptyContent')
    return (
        <div className='className="flex flex-col items-center justify-center gap-y-8 mt-8  w-[87.2%] md:gap-y-[55px] md:w-[87.5%] md:mt-[61px] lg:w-[50.69%] lg:gap-] mx-auto lg:mx-0 lg:min-w-[730px]  '>
            
            {path === '/pages/Empty' && <Filter />}

            <div className='flex flex-col items-center justify-center gap-y-[66px] pt-[15.29%] pb-[20.83%] lg:mt-[8%] md:pt-[20.41%]  md:pb-[25.05%] lg:pt-0 lg:pb-0' >
                <img className='md:w-[241.34px] lg:w-[241.34px] md:h-[200px] lg:h-[200px]' src="/assets/illustration-empty.svg" alt="" />
                <div className='w-[206px] md:w-[207px] text-center flex flex-col gap-[23px]'>
                    <h2 className='tracking-[-0.75px] text-[24px] font-bold text-black'>There is nothing here</h2>
                    <p className='leading-[1.15] tracking-[-0.1px] text-[#888EB0] text-[13px]'>  Create an invoice by clicking the
                        New Invoice button and get started</p>
                </div>
            </div>

        </div>
    )
}

export default EmptyContent