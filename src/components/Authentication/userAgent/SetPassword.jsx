import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";

const SetPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        
        {/* Sidebar - Step Indicator */}
        <div className="w-full md:w-2/5 bg-[#F8FAFC] p-6 sm:p-10 flex flex-col justify-between">
          <div>
            <NavLink to="/home">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </NavLink>

            <div className="mt-10 mb-12">
              <h1 className="text-2xl font-bold text-gray-800">Become a Proud Agent</h1>
              <p className="text-sm text-[#64748B] mt-1">
                Fill out the info and grow your business with us
              </p>
            </div>

            <div className="space-y-8">
              {/* Step 1: Completed */}
              <div className="flex gap-4">
                <IoCheckmarkCircleOutline className="text-green-600 text-xl flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-bold text-gray-900">User Information</h3>
                  <p className="text-[12px] text-[#64748B]">Enter your basic details to get started</p>
                </div>
              </div>

              {/* Step 2: Completed */}
              <div className="flex gap-4">
                <IoCheckmarkCircleOutline className="text-green-600 text-xl flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Business Details</h3>
                  <p className="text-[12px] text-[#64748B]">Add your company and service information</p>
                </div>
              </div>

              {/* Step 3: Completed */}
              <div className="flex gap-4">
                <IoCheckmarkCircleOutline className="text-green-600 text-xl flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Verification</h3>
                  <p className="text-[12px] text-[#64748B]">Review and profile activation</p>
                </div>
              </div>

              {/* Step 4: Current */}
              <div className="flex gap-4">
                <IoCheckmarkCircleOutline className="text-black text-xl flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-bold text-black">Set Password</h3>
                  <p className="text-[12px] text-[#64748B]">Secure your agent account</p>
                </div>
              </div>
            </div>
          </div>

          <NavLink to="/agent-SingIn" className="hidden md:flex items-center gap-2 text-gray-700 hover:text-black mt-10">
            <GoArrowLeft />
            <span className="text-sm font-bold">Back to login</span>
          </NavLink>
        </div>

        {/* Main Form Section */}
        <div className="w-full md:w-3/5 p-6 sm:p-12 lg:p-24 flex flex-col justify-center">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-800">Set password</h2>
            <p className="text-sm text-gray-500 mt-2">
              Must be at least 8 characters
            </p>
          </div>

          <div className="max-w-md mx-auto w-full space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Please set your password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm password
              </label>
              <input
                type="password"
                placeholder="Re-enter password"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            <button
              className="block w-full py-3.5 text-center text-white font-bold rounded-xl bg-gradient-to-r from-green-400 to-lime-400 shadow-lg hover:opacity-90 transition-opacity mt-8"
            >
              Submit
            </button>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Didn’t receive the code? 
                <NavLink to="/join-as-agent/resend-it" className="text-black font-bold underline ml-1 hover:text-green-600 transition-colors">
                  Resend it
                </NavLink>
              </p>
            </div>

            {/* Mobile Back Button */}
            <NavLink to="/agent-SingIn" className="flex md:hidden items-center justify-center gap-2 mt-8 text-gray-600 font-bold text-sm">
              <GoArrowLeft />
              <span>Back to login</span>
            </NavLink>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SetPassword;