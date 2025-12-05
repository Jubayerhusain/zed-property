import React from 'react';
import img5 from "../../assets/About-assets/Feature Image.png";
import Icon from "../../assets/About-assets/Step Icon Container.png";
import Icon1 from "../../assets/About-assets/Step Icon Container (1).png";
import Icon2 from "../../assets/About-assets/Step Icon Container (2).png";
import Icon3 from "../../assets/About-assets/Step Icon Container (3).png";


const Discover = () => {
    return (
        <div>
            <div>
        <div className=" my-10 text-center py-5">
          <button class=" text-[16px] px-3 py-2 bg-[#F7F7F7] text-gray-500 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            ZedProperty Benefit
          </button>
          <h1 className="text-3xl sm:text-[48px] py-5 text-semibold">
            Discover Your Ideal {" "}
            <a className="bg-gradient-to-t to-[#0BC147] from-[#b6f50a] 
  bg-clip-text text-transparent italic">Property Perks</a>
          </h1>
          <p className=" text-[16px] font-medium">
            <p className=" text-[16px] text-[#171C19B2] font-medium">
             Discover the benefits of our platform for a seamless property search.
            </p>
          </p>
        </div>
        <div className=" sm:flex gap-5" >
            {/* left site  */}
            <div className="w-[660px] h-[920px]" >
            <img src={img5} alt="" className=" w-full h-full rounded-xl object-cover" />
           </div>
        {/* right site  */}
        <div className=" grid grid-cols-1 gap-5 " >
            {/* 1 st card  */}
            <div className=" sm:w-[660px] sm:h-[212px] p-5 rounded-xl border " >
            <div className="pb-5" >
            <img src= {Icon} alt="" />
           </div>
           <h1 className=" text-2xl pb-2 font-semibold" >
            Wide Selection of Properties
           </h1>
           <p className=" text-[16px] text-[#171C19B2] font-medium" >
            Find a wide selection of properties that perfectly suit your needs and preferences.
            Browse a comprehensive list of properties that offer detailed information.
           </p>
        </div>
        {/* 2nd card  */}
        <div className=" sm:w-[660px] sm:h-[212px] p-5 rounded-xl border " >
            <div className="pb-5" >
            <img src= {Icon1} alt="" />
           </div>
           <h1 className=" text-2xl pb-2 font-semibold" >
            Wide Selection of Properties
           </h1>
           <p className=" text-[16px] text-[#171C19B2] font-medium" >
            Find a wide selection of properties that perfectly suit your needs and preferences.
            Browse a comprehensive list of properties that offer detailed information.
           </p>
        </div>
        {/* 3rd card  */}
        <div className=" sm:w-[660px] sm:h-[212px] p-5 rounded-xl border " >
            <div className="pb-5" >
            <img src= {Icon2} alt="" />
           </div>
           <h1 className=" text-2xl pb-2 font-semibold" >
            Wide Selection of Properties
           </h1>
           <p className=" text-[16px] text-[#171C19B2] font-medium" >
            Find a wide selection of properties that perfectly suit your needs and preferences.
            Browse a comprehensive list of properties that offer detailed information.
           </p>
        </div>
        {/* 4th card  */}
        <div className=" sm:w-[660px] sm:h-[212px] p-5 rounded-xl border " >
            <div className="pb-5" >
            <img src= {Icon3} alt="" />
           </div>
           <h1 className=" text-2xl pb-2 font-semibold" >
            Wide Selection of Properties
           </h1>
           <p className=" text-[16px] text-[#171C19B2] font-medium" >
            Find a wide selection of properties that perfectly suit your needs and preferences.
            Browse a comprehensive list of properties that offer detailed information.
           </p>
        </div>
        </div>
        </div>
      </div>
        </div>
    );
};

export default Discover;