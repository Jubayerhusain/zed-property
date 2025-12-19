import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Varification = () => {
  return (
    <div className=" h-screen py-5 sm:py-10 sm:mt-8">
      <div className="h-[80vh] sm:flex w-full px-5 sm:px-0 sm:w-9/12 shadow-md mx-auto sm:rounded-l-2xl  rounded-t-2xl sm:rounded-t-none">
        <div className=" relative bg-[#F8FAFC] py-5 w-full  sm:col-span-4/9">
          <div className="px-5">
            <NavLink to={"/home"} className="">
              <img src={logo} alt="" />
            </NavLink>
            <div className="py-10">
              <h1 className=" text-2xl font-semibold">Become a Proud Agent</h1>
              <h2 className=" text-sm text-[#64748B]">
                Fill out the info and grow your business with us
              </h2>
            </div>
          </div>
          <div className=" px-5 grid grid-cols-1 gap-10">
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
                  <IoCheckmarkCircleOutline className=" text-green-600 font-semibold  text-lg  " />
                </div>
                <div>
                  <h1 className=" text-black font-semibold text-sm ">
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
                <div className="g">
                  <IoCheckmarkCircleOutline className=" font-extrabold text-black text-lg" />
                </div>
                <div>
                  <h1 className="text-sm text-black font-semibold">
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
            className=" absolute bottom-5 flex items-center px-5 gap-2"
          >
            <div>
              <GoArrowLeft></GoArrowLeft>
            </div>
            <p className="text-sm font-semibold">Back to login</p>
          </NavLink>
        </div>
        {/* 2nd section  */}
        <div className=" w-full sm:col-span-4/9 px-5 sm:px-28 py-48 rounded-b-2xl sm:rounded-l-none sm:rounded-r-2xl bg-white ">
          <div className="w-[402px] mx-auto">
            <div className=" text-center">
              <h1 className=" text-2xl font-semibold">
                Enter Verification Code
              </h1>
              <h2 className=" text-sm pt-2 text-[#6B7280]">
                We’ve send a code to{" "}
                <a className=" text-black font-semibold">mail@email.com</a>
              </h2>
            </div>
            <div className=" pt-5 pb-7 w-full grid grid-cols-6 gap-4 justify-center ">
              <input type="text" placeholder="" className="input rounded-lg" />
              <input type="text" placeholder="" className="input rounded-lg" />
              <input type="text" placeholder="" className="input rounded-lg" />
              <input type="text" placeholder="" className="input rounded-lg" />
              <input type="text" placeholder="" className="input rounded-lg" />
              <input type="text" placeholder="" className="input rounded-lg" />
            </div>
            <NavLink
              to={"/join-as-agent/set-password"}
              className="rounded-lg py-4 text-center w-full pl-4 px-32 sm:px-44 bg-[#E2E8F0]"
            >
              Submit
            </NavLink>
            <h1 className=" text-center font-medium text-sm gap-1 pt-5">
              Didn’t receive the code?
              <NavLink
                to={"/join-as-agent/resend-it"}
                className=" underline pl-1"
              >
                Resend it
              </NavLink>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Varification;
