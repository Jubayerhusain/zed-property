import React from 'react';
import img1 from "../../assets/property-assets/Property-Card-Image.png"

const Leftsit = () => {
    return (
       <div>
         <div className=' col-span-4 border border-gray-100' >
            <div className='w-[392px] h-[312px] px-5' >
                <img src={img1} alt="" className=' w-full h-full' />
            </div>
            <div className='flex justify-between px-5 pb-5' >
             <div>
             <h2 className=' text-xl font-semibold' >
                Arnold Alexander
            </h2>
             <h1 className=' text-[16px] text-[#171C19B2] font-medium' >
                Real Estate Agent
            </h1>
            </div>
            <h1 className=' text-xl font-semibold' >
                140 Listings
            </h1>
            </div>
        </div>
       </div>
    );
};

export default Leftsit;