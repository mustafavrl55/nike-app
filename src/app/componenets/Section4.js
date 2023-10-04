/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const Section4 = () => {
  return (
    <div className="flex-col md:flex-row flex justify-start items-center gap-10 mt-10 md:mt-64 mx-auto max-w-[1400px]">
      <div className="w-full">
        <img
          className="w-full"
          src="https://nike-web-x.vercel.app/assets/offer-dd627fbb.svg"
          alt=""
        />
      </div>
      <div className="w-full">
        <h3 className="text-5xl md:mt-0 mt-10 font-semibold  ">
          {" "}
          <span className="text-[#FF6452]">Special</span> Offer
        </h3>
        <p className="text-xl text-[#6D6D6D] mt-10">
          Embark on a shopping journey that redefines your <br />
          experience with unbeatable deals. From premier <br />
          selections to incredible savings, we offer unparalleled <br />
          value that sets us apart.
        </p>
        <p className="text-xl text-[#6D6D6D] mt-10">
          Navigate a realm of possibilities designed to fulfill your <br />
          unique desires, surpassing the loftiest expectations. Your <br />
          journey with us is nothing short of exceptional.
        </p>
        <div className="flex-col md:flex-row flex justify-center md:justify-start items-center mt- md:gap-10">
          <button className="bg-[#FF6452] flex justify-center items-center gap-4 px-8 py-4 rounded-full mt-10 text-[16px] ">
            <span className="text-[#fff] ">Show now</span>
            <div className="text-[#FF6452] bg-white w-6 h-6 text-center rounded-full ">
              <BiRightArrowAlt className="w-6 h-6 " />
            </div>
          </button>
          <button className=" flex justify-center items-center gap-4 px-8 py-4 rounded-full border border-[#6D6D6D] mt-4 md:mt-10 text-[16px] ">
            <span className="text-[6D6D6D] ">Learn more</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section4;
