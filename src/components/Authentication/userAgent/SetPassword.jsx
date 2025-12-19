import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";

const SetPassword = () => {
  return (
    <div className=" h-screen py-5 sm:py-10 sm:mt-8">
      <div className="h-[80vh] sm:flex w-full px-5 sm:px-0 sm:w-9/12 shadow-md mx-auto sm:rounded-l-2xl  rounded-t-2xl sm:rounded-t-none">
        {/* 1st section  */}
        <div className="relative bg-[#F8FAFC] py-5 w-full  sm:col-span-4/9">
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
                  <IoCheckmarkCircleOutline className=" font-extrabold text-green-600 text-lg" />
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
            className=" bottom-5 px-5 hidden sm:block absolute   justify-center "
          >
            <div className=" flex items-center gap-2">
              <GoArrowLeft></GoArrowLeft>
              <p className="text-sm font-semibold">Back to login</p>
            </div>
          </NavLink>
        </div>
        {/* 2nd section  */}
        <div className=" relative w-full sm:col-span-6/9 px-5 pt-10  sm:px-28 sm:p-36  rounded-b-2xl sm:rounded-l-none sm:rounded-r-2xl bg-white ">
          <div className=" text-center">
            <h1 className=" text-2xl font-semibold">Set password</h1>
            <h2 className=" text-sm pt-2 text-[#6B7280]">
              Must be at least 8 characters
            </h2>
          </div>
          <div className=" pt-5 pb-7 mx-auto  grid grid-cols-1 gap-4 justify-center ">
            {/* 1st input  */}
            <div>
              <h1 className="py-2">Please set your password</h1>
              <input
                type="password"
                placeholder="Password"
                className="input w-full  rounded-lg"
              />
            </div>
            <div>
              <h1 className="py-2">Confirm password</h1>
              <input
                type="password"
                placeholder="Re-enter password"
                className="input w-full rounded-lg"
              />
            </div>
            <NavLink
              to={"/varifacation"}
              className="rounded-lg py-4 text-center w-full text-white bg-gradient-to-t from-green-400 to-lime-300 "
            >
              Submit
            </NavLink>
            <div className=" text-center font-medium text-sm gap-1 pt-5">
              Didn’t receive the code?
              <NavLink
                to={"/join-as-agent/resend-it"}
                className=" underline pl-1"
              >
                Resend it
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetPassword;
