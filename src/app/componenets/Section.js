/* eslint-disable @next/next/no-img-element */

/* eslint-disable react/jsx-key */
"use client";
import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const Section = () => {
  const [bigImage, setBigImage] = useState(
    "https://nike-web-x.vercel.app/assets/big-shoe1-0c574e3f.png"
  );

  const [images, setImages] = useState([
    {
      id: 1,
      src: "https://nike-web-x.vercel.app/assets/big-shoe1-0c574e3f.png",
    },

    {
      id: 2,
      src: "https://nike-web-x.vercel.app/assets/big-shoe2-84852328.png",
    },
    {
      id: 3,
      src: "https://nike-web-x.vercel.app/assets/big-shoe3-f8fa095d.png",
    },
  ]);

  return (
    <div className="flex-col container max-w-[1400px] mt-10 mx-auto flex gap-10 relative md:flex-row ">
      <div className="">
        <p className="font-bold text-xl font-montserrat text-[#FF6452]">
          Our Summer collections
        </p>
        <h1 className=" font-bold text-3xl  absolute top-[60px] left-0 pr-10 w-[800px] md:text-[90px] ">
          The New Arrival
        </h1>
        <div className="font-bold text-3xl mt-20  md:mt-[140px] md:text-[90px]">
          {" "}
          <span className="text-[#FF6452]">Nike </span> Shoes{" "}
        </div>
        <p className="text-[#6D6D6D] font-medium text-base md:text-lg leading-8 mt-10">
          Discover stylish Nike arrivals, quality <br />
          comfort, and innovation for your active life.
        </p>
        <button className="bg-[#FF6452] flex justify-center items-center gap-4 px-8 py-4 rounded-full mt-10 text-[16px] ">
          <span className="text-[#fff] ">Show now</span>
          <div className="text-[#FF6452] bg-white w-6 h-6 text-center rounded-full ">
            <BiRightArrowAlt className="w-6 h-6 " />
          </div>
        </button>
        <div className="flex justify-start items-center gap-16 mt-16 ">
          <div className="">
            <p className="text-2xl md:text-[48px] font-bold">1k+</p>
            <p className="text-base text-[#6D6D6D] ">Brands</p>
          </div>
          <div>
            <p className="text-2xl md:text-[48px] font-bold">500+</p>
            <p className="text-base text-[#6D6D6D]">Shops</p>
          </div>
          <div>
            <p className="text-2xl md:text-[48px] font-bold">250k+</p>
            <p className="text-base text-[#6D6D6D]">Customers</p>
          </div>
        </div>
      </div>
      <div class=" py-24  md:pl-36 pr-10 bg-[url('https://nike-web-x.vercel.app/assets/collection-background-9acc9f4e.svg')] bg-cover bg-center rounded-xl">
        <img  src={bigImage} alt="" />
        <div className="flex justify-center mt-10 items-center gap-4 md:mt-0 md:gap-20 md:px-10 absolute md:left-[600px] md:bottom-[-100px] max-w-[700px] ">
          {images.map((item) => (
            <div
              className={`${
                item.src === bigImage ? "border border-red-600" : ""
              }  md:w-[160px] h-[160px] flex justify-center items-center  bg-[url('https://nike-web-x.vercel.app/assets/thumbnail-background-61028098.svg')] bg-cover bg-center rounded-xl`}
              onClick={() => setBigImage(item.src)}
            >
              <img src={item.src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Section;
