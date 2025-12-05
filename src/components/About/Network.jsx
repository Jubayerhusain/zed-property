import React from "react";
import Map from "../../assets/About-assets/World Map Pattern.png";

const Network = () => {
  return (
    <div>
      <div>
        <div className=" my-10 text-center py-5">
          <button class=" text-[16px] px-3 py-2 bg-[#F7F7F7] text-gray-500 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            Property Network
          </button>
          <h1 className="text-3xl sm:text-[48px] py-5 text-semibold">
            Our Growing <a className="bg-gradient-to-t to-[#0BC147] from-[#b6f50a] 
  bg-clip-text text-transparent italic">Network</a>
          </h1>
          <p className=" text-[16px] font-medium">
            <p className=" text-[16px] text-[#171C19B2] font-medium">
              Connecting buyers, sellers, and agents through a trusted real
              estate community.
            </p>
          </p>
        </div>
        <div>
          <img src={Map} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Network;
