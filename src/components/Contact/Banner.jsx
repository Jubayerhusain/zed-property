import React from "react";
import Icon4 from "../../assets/Contact-assets/Step Icon Container (4).png";
import Icon5 from "../../assets/Contact-assets/Step Icon Container (5).png";
import Icon6 from "../../assets/Contact-assets/Step Icon Container (6).png";
import Icon7 from "../../assets/Contact-assets/Step Icon Container (7).png";

const Banner = () => {
  return (
    <div className="pt-20 pb-24 bg-[#FAFAFA]  ">
      <div className="max-w-[1440px] mx-auto">
        <div className=" text-center py-5">
          <button class=" text-[16px] px-3 py-2 bg-[#FFFFFF] text-gray-500 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            Contact Us
          </button>
          <h1 className=" text-3xl font-playfair sm:text-[48px] py-2 mt-4">
            <a
              className="bg-gradient-to-t to-[#0BC147] from-[#b6f50a] 
               bg-clip-text text-transparent italic  "
            >
              Let’s Connect{" "}
            </a>{" "}
            Today
          </h1>
          <p className=" text-[16px] text-[#171C19B2] font-medium mb-5">
            Building trust, creating opportunities, and connecting people with
            the right properties.
          </p>
        </div>
        <div className=" grid sm:grid-cols-3 md:grid-cols-4 gap-5 ">
          {/* 1st card  */}
          <div className="p-5 border border-gray-100 bg-[#FFFFFF] rounded-xl ">
            <div className=" pb-10">
              <img src={Icon4} alt="" />
            </div>
            <h1 className="text-xl py-2 font-semibold">Chat Our Agents</h1>
            <p className="text-[16px] text-[#171C19B2] font-semibold pb-2 ">
              Speak to our friendly agent.
            </p>
            <button class=" w-full py-1.5 border border-gray-300 rounded-xl text-gray-600 text-sm bg-white">
              Chat to Sales
            </button>
          </div>
          {/* 2nd card  */}
          <div className="p-5 border border-gray-100 bg-[#FFFFFF] rounded-xl">
            <div className=" pb-10">
              <img src={Icon5} alt="" />
            </div>
            <h1 className="text-xl py-2 font-semibold">Chat Our Agents</h1>
            <p className="text-[16px] text-[#171C19B2] font-semibold pb-2 ">
              Speak to our friendly agent.
            </p>
            <button class=" w-full py-1.5 border border-gray-300 rounded-xl text-gray-600 text-sm bg-white">
              Chat to Support
            </button>
          </div>
          {/* 3rd card  */}
          <div className="p-5 border border-gray-100 bg-[#FFFFFF] rounded-xl">
            <div className=" pb-10">
              <img src={Icon6} alt="" />
            </div>
            <h1 className="text-xl py-2 font-semibold">Visit Us</h1>
            <p className="text-[16px] text-[#171C19B2] font-semibold pb-2 ">
              Visit our office HQ.
            </p>
            <button class=" w-full py-1.5 border border-gray-300 rounded-xl text-gray-600 text-sm bg-white">
              Get Directions
            </button>
          </div>
          {/* 4th card  */}
          <div className="p-5 border border-gray-100 bg-[#FFFFFF] rounded-xl">
            <div className=" pb-10">
              <img src={Icon7} alt="" />
            </div>
            <h1 className="text-xl py-2 font-semibold">Call Us</h1>
            <p className="text-[16px] text-[#171C19B2] font-semibold pb-2 ">
              Mon - Fri from 9am to 5pm.
            </p>
            <button class="w-full py-1.5 border border-gray-300 rounded-xl text-gray-600 text-sm bg-white">
              Call Our Teams
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
