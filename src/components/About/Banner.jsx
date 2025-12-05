import React from "react";
import img1 from "../../assets/About-assets/Vision & Mission Image.png";

const Banner = () => {
  return (
    <>
      <div className="sm:max-w-[1440px] w-full sm:h-auto mx-auto px-5 sm:px-0 sm:mb-14">
        <div className=" text-center py-5">
          <button class=" text-[16px] mt-4 px-3 py-2 bg-[#F7F7F7] text-gray-500 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            About ZedProperty
          </button>
          <h1 className="font-playfair text-3xl sm:text-[48px] py-5 font-normal">
            <a
              className="bg-gradient-to-t to-[#0BC147] from-[#b6f50a] 
               bg-clip-text text-transparent italic  "
            >
              Trusted Partner{" "}
            </a>{" "}
            for Your Journey
          </h1>
          <p className=" text-[16px] text-[#171C19B2] font-medium">
            Building trust, creating opportunities, and connecting people with
            the right properties.
          </p>
        </div>
        <div className=" w-full h-full mx-auto rounded-xl ">
          <img
            src={img1}
            alt=""
            className="w-full sm:h-full h-[200px] rounded-xl object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
