/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Header = () => {
  return (
    <div className='container max-w-[1400px]  my-0 mx-auto px-6 pt-6'>
      <header className=' flex-col  flex justify-between items-center w-full h-24 md:flex-row '>
        <img className=' h-50' src="https://nike-web-x.vercel.app/assets/header-logo-098c06bd.svg" alt="" />
        <nav className='w-full md:w-3/4 flex items-center justify-start md:gap-10 md:px-20 gap-3 md:text-xl '>
          <span>Home</span>
          <span>About Us</span>
          <span>Products</span>
          <span>Contact Us</span>
        </nav>
      </header>
    </div>
  )
}

export default Header