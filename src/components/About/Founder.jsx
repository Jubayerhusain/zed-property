import React from 'react';
import img1 from "../../assets/About-assets/Property Card Image.png";
import img2 from "../../assets/About-assets/Property Card Image (1).png";
import img3 from "../../assets/About-assets/Property Card Image (2).png";

const Founder = () => {
    return (
         <div>
        <div className=" my-10 text-center py-5">
          <button class=" text-[16px] px-3 py-2 bg-[#F7F7F7] text-gray-500 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            Founder & CO Founder
          </button>
          <h1 className="text-3xl sm:text-[48px] py-5 text-semibold">
            The Vision Behind{" "}
            <a className="bg-gradient-to-t to-[#0BC147] from-[#b6f50a] bg-clip-text text-transparent italic">ZedProperty</a>
          </h1>
          <p className=" text-[16px] font-medium">
            <p className=" text-[16px] text-[#171C19B2] font-medium">
              Meet the leaders shaping the future of real estate with passion
              and integrity.
            </p>
          </p>
        </div>
        <div className=" grid sm:grid-cols-3 gap-5">
          {/* 1st card */}
          <div className="card border  shadow-sm">
            <figure className=" rounded-lg p-5">
              <img src={img1} alt="img2" className=" rounded-lg " />
            </figure>
            <div className="px-5 pb-5">
              <h2 className=" text-2xl text-center sm:text-start font-semibold">
                Nathaniel Brooks
              </h2>
              <p className=" text-[16px] text-center sm:text-start text-[#A5A5A5] pt-2">
                CEO Nathaniel Brooks has 8+ years in property and tech. He aims
                to simplify finding dream homes with user-focused innovations.
              </p>
            </div>
          </div>
          {/* 2nd card  */}
          <div className="card border  shadow-sm">
            <figure className=" rounded-lg p-5">
              <img src={img2} alt="img2" className=" rounded-lg " />
            </figure>
            <div className="px-5 pb-5">
              <h2 className=" text-2xl text-center sm:text-start font-semibold">
                Nathaniel Brooks
              </h2>
              <p className=" text-[16px] text-center sm:text-start text-[#A5A5A5] pt-2">
                CEO Nathaniel Brooks has 8+ years in property and tech. He aims
                to simplify finding dream homes with user-focused innovations.
              </p>
            </div>
          </div>
          {/* 3rd card  */}
          <div className="card border  shadow-sm">
            <figure className=" rounded-lg p-5">
              <img src={img3} alt="img2" className=" rounded-lg " />
            </figure>
            <div className="px-5 pb-5">
              <h2 className=" text-2xl text-center sm:text-start font-semibold">
                Nathaniel Brooks
              </h2>
              <p className=" text-[16px] text-center sm:text-start text-[#A5A5A5] pt-2">
                CEO Nathaniel Brooks has 8+ years in property and tech. He aims
                to simplify finding dream homes with user-focused innovations.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Founder;