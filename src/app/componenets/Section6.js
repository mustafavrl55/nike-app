import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi';

const Section6 = () => {
  return (
    <div  className='flex-col md:flex-row flex justify-between items-center gap-10 md:gap-40 mt-10 md:mt-64 mx-auto max-w-[1400px]'>
        <h2 className='text-5xl font-semibold'>Sign Up for <span className='text-[#FF6452] '>Updates</span> <br /> & Newsletter</h2>
        <div className='flex flex-col justify-center items-center relative  '>
            <input type="text" placeholder='Subcribe@nike.com' className=' w-full md:w-[556px] h-[74px] border border-solid border-[#6D6D6D] px-10 py-4 rounded-full' />
            <button className='bg-[#FF6452] px-10 py-4 rounded-full text-[16px] mt-6 md:mt-0 md:absolute top-2 right-2 '>
                        <span className='text-[#fff] text-lg '>Sign Up</span>
            </button>
        </div>
    </div>
  )
}

export default Section6