import React from "react";
import img1 from "../../assets/About-assets/Vision & Mission Image.png";

const Banner = () => {
  return (
    <div>
      <div>
        <div className=" text-center py-5">
          <button class=" text-[16px] px-3 py-2 bg-[#F7F7F7] text-gray-500 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            About ZedProperty
          </button>
          <h1 className=" text-3xl sm:text-[48px] py-5 text-semibold">
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
        <div className=" w-[1,344px] h-[540px] mx-auto rounded-xl ">
          <img
            src={img1}
            alt=""
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
