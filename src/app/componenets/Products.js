/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react'
import { items } from '@/items'

const Products = () => {
    return (
        <div className='container max-w-[1400px] mt-40 md:mt-64 mb-20 mx-auto'>
            <h2 className='text-5xl font-semibold'><span className='text-[#FF6452] '>Popular </span>Products</h2>
            <p className='mt-10 text-base text-[#6D6D6D]'>Experience top-notch quality and style with our sought-after <br /> selections. Discover a world of comfort, design and value</p>
            <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>

                {items.map((item, index) => (

                    <div className='flex flex-col'>
                        <img className='w-full md:w-[280px] md:h-[280px] ' src={item.url} alt="" />
                        <div className='flex items-center mt-8 ' >
                            <img className='w-[24px] h-[30px] mr-4 ' src="https://nike-web-x.vercel.app/assets/star-afb6cd21.svg" alt="" />
                            <span className='text-xl font-medium text-[#6D6D6D]'> ({item.point}) </span>
                        </div>
                        <h3 className='mt-2 text-2xl  font-medium '>{item.title}</h3>
                        <p className='mt-2 text-2xl text-[#FF6452] font-medium' >$ {item.price}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Products