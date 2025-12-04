import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="p-10 w-full grid sm:grid-cols-2 " >
      <div className="" >
        <div>
            <img src={logo} alt="" />
        </div>
       
      </div>
      <div className=" grid grid-cols-2 sm:grid-cols-4" >
        {/* 1st section */}
        <div className=" grid grid-cols-1 gap-2" >
        <h1 className=" text-[16px] font-semibold" >Company</h1>
        <h1 className=" text-[16px] text-[#171C19B2] font-medium" >About Us</h1>
        <h1 className=" text-[16px] text-[#171C19B2] font-medium" >Blog</h1>
        <h1 className=" text-[16px] text-[#171C19B2] font-medium" >Proparty</h1>
        <h1 className=" text-[16px] text-[#171C19B2] font-medium" >Contact</h1>
      </div>
      {/* 2nd section  */}
      <div className=" grid grid-cols-1 gap-2" >
        <h1 className=" text-[16px] font-semibold" >Social Media</h1>
        <h1 className=" text-[16px] text-[#171C19B2] font-medium" >Twitter</h1>
        <h1 className=" text-[16px] text-[#171C19B2] font-medium" >LinkedIn</h1>
        <h1 className=" text-[16px] text-[#171C19B2] font-medium" >Facebook</h1>
        <h1 className=" text-[16px] text-[#171C19B2] font-medium" >Instagram</h1>
      </div>
    
      {/* 3rd section  */}
      <div className=" grid grid-cols-1 gap-2" >
        <h1 className=" text-[16px] font-semibold" >Services</h1>
        <h1 className=" text-[16px] text-[#171C19B2] font-medium" >Buy Property</h1>
        <h1 className=" text-[16px] text-[#171C19B2] font-medium" >Sell Property </h1>
        <h1 className=" text-[16px] text-[#171C19B2] font-medium" >Property Agent</h1>
      </div> 
      {/* 4th       */}
      <div className=" grid grid-cols-1 gap-2" >
        <h1 className=" text-[16px] font-semibold" >Contact</h1>
        <h1 className=" text-[16px] text-[#171C19B2] font-medium" >Chat Our Support</h1>
        <h1 className=" text-[16px] text-[#171C19B2] font-medium" >ZedProperty@gmail.com </h1>
        <h1 className=" text-[16px] text-[#171C19B2] font-medium" >+1 814 637 1529</h1>
      </div> 
      </div>
    </div>
  );
};

export default Footer;
