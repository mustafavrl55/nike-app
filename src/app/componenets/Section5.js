/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Section5 = () => {
    return (

        <div className='my-20 md:my-64 mx-auto max-w-[1400px] py-10 bg-[#F6F5FF]'>
            <h2 className=' bg-pale-blue text-center text-5xl font-medium'>What Our <span className='text-[#FF6452] '>Customers</span> Say?</h2>
            <p className='text-center text-xl text-[#6D6D6D] mt-6'>Hear genuine stories from our satisfied customers about <br />
                their exceptional experience with us
            </p>
            <div className='flex-col md:flex-row flex justify-center items-center mt-24 gap-20 md:gap-[200px]  '>
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-[120px] h-[120px] rounded-full' src="https://nike-web-x.vercel.app/assets/customer1-68e0c3c8.jpeg" alt="" />
                    <p className='mt-10 text-center text-xl text-[#6D6D6D] '>The attention to detail and the quality of <br /> the product exceeded my expectations. <br />
                        Highly recommended!
                    </p>
                    <div className='flex items-center justify-center mt-4 gap-4'>
                        <img className='w-[24px] h-[24px] ' src="https://nike-web-x.vercel.app/assets/star-afb6cd21.svg" alt="" />
                        <span className='text-xl'> (4.5) </span>
                    </div>
                    <h3 className='mt-4 text-3xl font-semibold'>Morich Brown</h3>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-[120px] h-[120px] ' src="https://nike-web-x.vercel.app/assets/customer2-e014463b.svg" alt="" />
                    <p className='text-center mt-10 text-xl text-[#6D6D6D] '>
                        The product not only met but exceeded <br /> 
                        my expectations.I ll definitely be a  <br />
                        returning customer!
                    </p>
                    <div className='flex items-center mt-4 gap-4'>
                        <img src="https://nike-web-x.vercel.app/assets/star-afb6cd21.svg" alt="" />
                        <span className='text-xl'> (4.5) </span>
                    </div>
                    <h3 className='mt-4 text-3xl font-semibold'>Morich Brown</h3>
                </div>
            </div>
        </div>
    )
}

export default Section5