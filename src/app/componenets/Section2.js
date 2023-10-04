/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Section2 = () => {

  return (
    <div className=' container max-w-[1400px] mt-10 md:mt-64 md:mb-20 mx-auto flex-col md:flex-row flex justify-between'>
      <div className='w-full md:w-[700px] ' >
        <h2 className='leading-tight text-4xl md:text-5xl capitalize font-semibold'>We Provide You We <br /> Provide You  <span className='text-[#FF6452] '>Super <br /> Quality</span> Shoes</h2>
        <p className=' mt-6 text-lg text-[#6D6D6D] leading-7 '>Ensuring premium comfort and style, our meticulously <br /> 
        crafted footwear is designed to elevate your experience,<br />
          providing you with unmatched quality, innovation, and <br />
          a touch of elegance.
        </p>
        <p className='text-[#6D6D6D] text-lg leading-7 mt-10'>
          Our dedication to detail and excellence ensures your <br /> satisfaction
        </p>
        <button className='bg-[#FF6452]  w-[165px] h-[52px] rounded-full text-white text-lg  mt-10 font-medium' >
            View details
        </button>
      </div>
      <div className='flex justify-center items-center w-full md:w-[570px] h-[522px] md:mr-20 '>
        <img className='w-[570px] h-[522px] '  src="https://nike-web-x.vercel.app/assets/shoe8-721e1149.svg" alt="" />
      </div>
    </div>
  )
}

export default Section2