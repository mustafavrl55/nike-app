/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-10 md:mt-64 mx-auto max-w-full h-auto bg-black text-white py-20 md:py-[100px] px-6 ' >
      <div className='flex-col md:flex-row flex justify-between items-start max-w-[1400px] mx-auto '>
        <div>
          <img className='w-[150px] h-[32px] ' src="https://nike-web-x.vercel.app/assets/footer-logo-4821ca9f.svg" alt="" />
          <p className='text-[#fffc] text-sm mt-10 '>Get shoes ready for the new term at your <br /> nearest Nike store. Find Your Perfect Size in <br /> Store. Get Rewards.</p>
          <div className='flex gap-4 items-center mt-10 '>
            <div className='bg-white w-12 h-12 rounded-full flex justify-center items-center'>
              <img className='' src="https://nike-web-x.vercel.app/assets/facebook-2adfdbf4.svg" alt="" />
            </div>
            <div className='bg-white w-12 h-12 rounded-full flex justify-center items-center'>
              <img className='' src="https://nike-web-x.vercel.app/assets/twitter-bb05cad0.svg" alt="" />
            </div>
            <div className='bg-white w-12 h-12 rounded-full flex justify-center items-center'>
              <img className='' src="https://nike-web-x.vercel.app/assets/instagram-95e9d410.svg" alt="" />
            </div>
          </div>
        </div>
        <div className='md:mt-0 mt-10'>
          <h3 className='text-2xl leading-normal font-medium '>Products</h3>
          <div className='flex flex-col gap-2 mt-4 text-[#fffc]'>
            <span>Air Force 1</span>
            <span>Air Max 1</span>
            <span>Air Jordan 1</span>
            <span>Air Force 2</span>
            <span>Nike Waffle Racer</span>
            <span>Nike Cortez</span>
          </div>
        </div>
        <div className='md:mt-0 mt-10'>
        <h3 className='text-2xl leading-normal font-medium '>Help</h3>
          <div className='flex flex-col gap-2 mt-4 text-[#fffc]'>
            <span>About us</span>
            <span>FAQs</span>
            <span>How it works</span>
            <span>Privacy policy</span>
            <span>Payment policyr</span>
          </div>
        </div>
        <div className='md:mt-0 mt-10'>
        <h3 className='text-2xl leading-normal font-medium '>Get in touch</h3>
          <div className='flex flex-col gap-2 mt-4 text-[#fffc]'>
            <span>customer@nike.com</span>
            <span>+92554862354</span>
          </div>
        </div>
      </div>
      <div className='max-w-[1400px] mx-auto flex-col md:flex-row flex justify-between items-center text-[#fffc] text-lg mt-10'>
        <span className='flex gap-4'> <img src="https://nike-web-x.vercel.app/assets/copyright-sign-b38b2eec.svg" alt="" /> Copyright. All Rights Reserved.</span>
        <span>Terms & Conditions</span>
      </div>
    </div>
  )
}

export default Footer