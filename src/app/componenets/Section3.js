/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Section3 = () => {
    return (
        <div className='container max-w-[1400px] mt-10 md:mt-64 mx-auto mb-20 flex-col md:flex-row flex justify-center flex-wrap gap-8'>
            <div className='flex-1 border-inherit border-2 border-solid rounded-2xl shadow-2xl bg-white  w-full md:w-[440px] h-[300px] py-10 pl-10'>
                <div className='bg-[#FF6452] w-11 h-11 rounded-full'>
                    <img src="https://nike-web-x.vercel.app/assets/truck-fast-9039ad27.svg" alt="" />
                </div>
                <h3 className='text-3xl font-semibold mt-4'>Free shipping</h3>
                <p className='text-lg text-[#6D6D6D] mt-4'>
                    Enjoy seamless shopping with our <br /> complimentary shipping service.
                </p>
            </div>
            <div className='flex-1  border-inherit border-2 border-solid rounded-2xl shadow-2xl bg-white w-full md:w-[440px] h-[300px] py-10 pl-10'>
                <div className='bg-[#FF6452] w-11 h-11 rounded-full'>
                    <img src="https://nike-web-x.vercel.app/assets/shield-tick-e2e16ca6.svg" alt="" />
                </div>
                <h3 className='text-3xl font-semibold mt-4'>Secure Payment</h3>
                <p className='text-lg text-[#6D6D6D] mt-4'>
                    Experience worry-free transactions with <br /> our secure payment options.
                </p>
            </div>
            <div className='flex-1  border-inherit border-2 border-solid rounded-2xl shadow-2xl bg-white  w-full md:w-[440px] h-[300px] py-10 pl-10'>
                <div className='bg-[#FF6452] w-11 h-11 rounded-full'>
                    <img src="https://nike-web-x.vercel.app/assets/support-43744df6.svg" alt="" />
                </div>
                <h3 className='text-3xl font-semibold mt-4'>Love to help you</h3>
                <p className='text-lg text-[#6D6D6D] mt-4'>
                    Our dedicated team is here to assist <br /> you every step of the way.
                </p>
            </div>
        </div>
    )
}

export default Section3