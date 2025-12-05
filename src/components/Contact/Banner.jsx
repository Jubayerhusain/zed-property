import React from 'react';
import  Icon4  from '../../assets/Contact-assets/Step Icon Container (4).png';


const Banner = () => {
    return (
        <div>
         <div className=" text-center py-5">
          <button class=" text-[16px] px-3 py-2 bg-[#F7F7F7] text-gray-500 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            About ZedProperty
          </button>
          <h1 className=" text-3xl sm:text-[48px] py-5">
            <a
              className="bg-gradient-to-t to-[#0BC147] from-[#b6f50a] 
               bg-clip-text text-transparent italic  "
            >
              Let’s Connect {" "}
            </a>{" "}
            Today
          </h1>
          <p className=" text-[16px] text-[#171C19B2] font-medium">
            Building trust, creating opportunities, and connecting people with
            the right properties.
          </p>
        </div>
            <div>
            <div>
            <img src={Icon4} alt="" />
           </div>
            <h1 className='text-xl font-semibold' >Chat Our Agents</h1>
            <p className='text-[16px] text-[#171C19B2] font-semibold' >Speak to our friendly agent.</p>
            </div>
        </div>
    );
};

export default Banner;