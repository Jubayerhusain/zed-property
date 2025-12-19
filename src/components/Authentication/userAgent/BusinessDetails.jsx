import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";

const BusinessDetails = () => {
  return (
    <div>
    <div className=" h-screen py-5 sm:py-10 sm:mt-8">
      <div className="h-[80vh] sm:flex w-full px-5 sm:px-0 sm:w-9/12 shadow-md mx-auto sm:rounded-l-2xl  rounded-t-2xl sm:rounded-t-none">
          <div className=" relative rounded-t-2xl sm:rounded-t-none sm:rounded-l-2xl bg-[#F8FAFC] p-5 w-full  sm:w-4/9">
            <div className="">
              <NavLink to={"/home"} className="">
                <img src={logo} alt="" />
              </NavLink>
              <div className="py-10">
                <h1 className=" text-2xl font-semibold">
                  Become a Proud Agent
                </h1>
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
                    <IoCheckmarkCircleOutline className=" font-extrabold text-green-600 text-lg" />
                  </div>
                  <div>
                    <h1 className="text-sm text-[#000000] font-semibold">
                      User Information
                    </h1>
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
                    <IoCheckmarkCircleOutline className=" text-black font-semibold  text-lg  " />
                  </div>
                  <div>
                    <h1 className="text-black font-semibold text-sm ">
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
                  We’ll review your details and activate your profile once
                  verified
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
            <NavLink
              to={"/agent-SingIn"}
              className=" text-b-5 hidden  sm:block absolute bottom-5 flex-row items-center justify-center gap-2"
            >
              {/* <div>
                <GoArrowLeft></GoArrowLeft>
              </div> */}
              <p className="text-sm  font-semibold">← Back to login</p>
            </NavLink>
          </div>
          {/* 2nd section  */}
          <div className=" w-full sm:w-6/9 px-5 sm:px-28 py-28 rounded-b-2xl sm:rounded-l-none sm:rounded-r-2xl bg-white ">
            <div className=" text-center">
              <h1 className=" text-2xl font-semibold">Your business details</h1>
              <h2 className=" text-sm py-2 text-[#6B7280]">
                Please provide your business details
              </h2>
            </div>
            <div className=" pt-5 mx-auto grid grid-cols-1 justify-center ">
              {/* 1st input  */}
              <div>
                <h1 className="py-2 text-sm font-medium ">
                  Position <a className=" text-red-600 text-xl">*</a>
                </h1>
                <select
                  defaultValue="Pick a color"
                  className="select border-gray-100 w-full"
                >
                  <option disabled={true}>Agent</option>
                  <option>Crimson</option>
                  <option>Amber</option>
                  <option>Velvet</option>
                </select>
              </div>
              {/* 2nd input  */}
              <div>
                <h1 className="py-2 text-sm font-medium ">
                  Websit <a className=" text-red-600 text-xl">*</a>
                </h1>
                <input
                  type="url"
                  placeholder="www.wesbsitename.com"
                  className="input border border-gray-100 w-full "
                />
              </div>
              {/* 3rd input  */}
              <div className="" >
                <h1 className="py-2 text-sm font-medium ">Social media </h1>
                <div className="flex gap-2" >
                   <input
                  type="url"
                  placeholder="https://www.facebook.com/username"
                  className="input border border-gray-100 w-full "
                />
                <button className="btn">
                  Add more link
                </button>
                </div>
              </div>
              {/* 4th input   */}
              <div className="">
                <h1 className="py-2 text-sm font-medium ">About <a className=" text-red-600 text-xl">*</a> </h1>
                <input
                  type="url"
                  placeholder="I’am working for the last 4 years as a web designer, 
                
                   graphics designer and well as UI/UX designer.........."
                  className="input border border-gray-100 pb-20 pt-5 w-full "
                />
              </div>
                 <NavLink
                to={"/join-as-agent/varifacation"}
                className="rounded-lg py-3 text-center mt-5 w-full text-white bg-gradient-to-t from-green-400 to-lime-300 "
              >
                Continue
              </NavLink>
                <NavLink
              to={"/agent-SingIn"}
              className=" text-b-5 sm:hidden block mt-5 flex items-center justify-center gap-2"
            >
              <div>
                <GoArrowLeft></GoArrowLeft>
              </div>
              <span className="text-sm  font-semibold">Back to login</span>
            </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
