import React from "react";
import img5 from "../../assets/About-assets/Feature Image.png";
import Icon from "../../assets/About-assets/Step Icon Container.png";
import Icon1 from "../../assets/About-assets/Step Icon Container (1).png";
import Icon2 from "../../assets/About-assets/Step Icon Container (2).png";
import Icon3 from "../../assets/About-assets/Step Icon Container (3).png";

const Discover = () => {
  return (
    <>
      <div className="sm:max-w-[1440px] mb-10 sm:mb-20 w-full sm:h-auto mx-auto px-5 sm:px-0">
        
        {/* Heading */}
        <div className="my-10 text-center py-5">
          <button className="text-[16px] px-3 py-2 bg-[#F7F7F7] text-gray-500 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            ZedProperty Benefit
          </button>

          <h1 className="text-3xl sm:text-[48px] py-5 font-playfair leading-snug">
            Discover Your Ideal{" "}
            <span className="bg-gradient-to-t to-[#0BC147] from-[#b6f50a] 
              bg-clip-text text-transparent italic">
              Property Perks
            </span>
          </h1>

          <p className="text-[16px] text-[#171C19B2] font-medium">
            Discover the benefits of our platform for a seamless property search.
          </p>
        </div>

        {/* Main Container */}
        <div className="sm:flex gap-5 flex-col sm:flex-row">
          
          {/* Left Section */}
          <div className="w-full sm:w-[50%] h-auto group overflow-hidden rounded-xl">
            <img
              src={img5}
              alt=""
              className="w-full h-[250px] sm:h-auto object-cover transition-all duration-500 
              group-hover:scale-110"
            />
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 gap-5 w-full sm:w-[50%] mt-5 sm:mt-0">
            
            {/* 1st Card */}
            <div className="p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="pb-5">
                <img src={Icon} alt="" />
              </div>
              <h1 className="text-2xl pb-2 font-semibold">
                Wide Selection of Properties
              </h1>
              <p className="text-[16px] text-[#171C19B2] font-medium">
                Find a wide selection of properties that perfectly suit your
                needs and preferences.
              </p>
            </div>

            {/* 2nd Card */}
            <div className="p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="pb-5">
                <img src={Icon1} alt="" />
              </div>
              <h1 className="text-2xl pb-2 font-semibold">
                Wide Selection of Properties
              </h1>
              <p className="text-[16px] text-[#171C19B2] font-medium">
                Find a wide selection of properties that perfectly suit your
                needs and preferences.
              </p>
            </div>

            {/* 3rd Card */}
            <div className="p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="pb-5">
                <img src={Icon2} alt="" />
              </div>
              <h1 className="text-2xl pb-2 font-semibold">
                Wide Selection of Properties
              </h1>
              <p className="text-[16px] text-[#171C19B2] font-medium">
                Find a wide selection of properties that perfectly suit your
                needs and preferences.
              </p>
            </div>

            {/* 4th Card */}
            <div className="p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="pb-5">
                <img src={Icon3} alt="" />
              </div>
              <h1 className="text-2xl pb-2 font-semibold">
                Wide Selection of Properties
              </h1>
              <p className="text-[16px] text-[#171C19B2] font-medium">
                Find a wide selection of properties that perfectly suit your
                needs and preferences.
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Discover;
