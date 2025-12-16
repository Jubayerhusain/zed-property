import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import logo from "../../../assets/logo.png";

const SignUp = () => {
  return (
    <div className=" bg-gray-100 py-10">
       <div className=" sm:flex w-full px-5 sm:px-0 sm:w-9/12 mx-auto ">
      
      <div className="  rounded-t-2xl sm:rounded-t-none sm:rounded-l-2xl bg-[#F8FAFC] p-5 w-full  sm:col-span-3" >
        <div className="">
          <div className="pb-10">
         <img src={logo} alt="" className="" />
        </div>
         <div className="pb-10">
           <h1 className=" text-2xl font-semibold">Become a Proud Agent</h1>
          <h2 className=" text-sm text-[#64748B]">
            Fill out the info and grow your business with us
          </h2>
         </div>
        </div>
        <div className=" grid grid-cols-1 gap-10">
          {/* 1st  */}
          <div>
            <div className="flex gap-2 items-center font-semibold">
              <div className="font-extrabold text-lg">
                <IoCheckmarkCircleOutline className=" font-extrabold text-black text-lg" />
              </div>
              <div>
                <h1 className="text-sm text-[#000000] font-semibold">User Information</h1>
              </div>
            </div>
            <h1 className="text-[#64748B] text-[12px] font-medium">
              Enter your basic details to get started
            </h1>
          </div>
          {/* 2nd  */}
          <div>
            <div className="flex gap-2 items-center font-semibold">
              <div className="font-semibold">
                <IoCheckmarkCircleOutline className=" font-semibold text-lg text-[#64748B] " />
              </div>
              <div>
                <h1 className="text-[#64748B] font-semibold text-sm ">
                  Business Details
                </h1>
              </div>
            </div>
            <h1 className="text-[#64748B] font-medium text-[12px]">
              Add your company and service information for your profile
            </h1>
          </div>
          {/* 3rd */}
          <div>
            <div className="flex gap-2 items-center font-semibold">
              <div className="font-extrabold text-black text-lg">
                <IoCheckmarkCircleOutline className=" font-extrabold text-[#64748B] text-lg" />
              </div>
              <div>
                <h1 className="text-sm text-[#64748B] font-semibold">
                  Verification
                </h1>
              </div>
            </div>
            <h1 className="text-[#64748B] text-[12px] font-medium">
              We’ll review your details and activate your profile once verified
            </h1>
          </div>
          {/* 4th */}
          <div>
            <div className="flex gap-2 items-center font-semibold">
              <div className="font-extrabold text-gray-600 text-lg">
                <IoCheckmarkCircleOutline className=" font-extrabold text-gray-600 text-lg" />
              </div>
              <div>
                <h1 className="text-sm text-[#64748B] font-semibold">
                  Set Password
                </h1>
              </div>
            </div>
            <h1 className="text-[#64748B] text-[12px] font-medium">
              Create a secure password to access your account
            </h1>
          </div>
        </div>
      </div>
      <div className=" w-full sm:col-span-9 px-5 sm:px-20 py-16 rounded-b-2xl sm:rounded-b-none sm:rounded-r-2xl bg-white ">
          <div className=" text-center">
            <h1 className=" text-2xl font-semibold">Primary user details</h1>
            <h2 className=" text-sm py-2 text-[#6B7280]">
              Please provide your Primary user details
            </h2>
          </div>
          <div className=" pt-5 mx-auto grid grid-cols-1 justify-center ">
            {/* 1st input  */}
            <div>
              <h1 className="py-2 text-sm font-medium ">
                Username <a className=" text-red-600 text-xl">*</a>
              </h1>
              <input
                type="text"
                placeholder="Enter your user name"
                className="input border border-gray-100 w-full "
              />
            </div>
            {/* 2nd input  */}
            <div>
              <h1 className="py-2 text-sm font-medium ">
                First name <a className=" text-red-600 text-xl">*</a>
              </h1>
              <input
                type="text"
                placeholder="Enter your first name"
                className="input border border-gray-100 w-full "
              />
            </div>
            {/* 3rd input  */}
            <div>
              <h1 className="py-2 text-sm font-medium ">Last name </h1>
              <input
                type="text"
                placeholder="Enter your last name"
                className="input border border-gray-100 w-full "
              />
            </div>
            {/* 4th input  */}
            <div>
              <h1 className="py-2 text-sm font-medium ">
                Email <a className=" text-red-600 text-xl">*</a>
              </h1>
              <input
                type="email"
                placeholder="Companyname@gmail.com"
                className="input border border-gray-100 w-full "
              />
            </div>
            {/* 5th input  */}
            <div>
              <h1 className="py-2 text-sm font-medium ">
                Mobile number <a className=" text-red-600 text-xl">*</a>
              </h1>
              <input
                type=""
                placeholder="Enter your contact number"
                className="input border border-gray-100 w-full "
              />
            </div>
            <button className="rounded-lg py-1 mt-5 text-white bg-gradient-to-t from-green-400 to-lime-300 ">
              Continue
            </button>
          </div>
        </div>
    </div>
    </div>

  );
};

export default SignUp;
