import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";

const BusinessDetails = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        
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
              <div className="flex gap-4">
                <IoCheckmarkCircleOutline className="text-green-600 text-xl flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-bold text-gray-900">User Information</h3>
                  <p className="text-[12px] text-[#64748B]">Enter your basic details to get started</p>
                </div>
              </div>

              <div className="flex gap-4">
                <IoCheckmarkCircleOutline className="text-black text-xl flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-bold text-black">Business Details</h3>
                  <p className="text-[12px] text-[#64748B]">Add your company and service information</p>
                </div>
              </div>

              <div className="flex gap-4 opacity-50">
                <IoCheckmarkCircleOutline className="text-gray-400 text-xl flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-bold text-gray-600">Verification</h3>
                  <p className="text-[12px] text-gray-600">Review and profile activation</p>
                </div>
              </div>

              <div className="flex gap-4 opacity-50">
                <IoCheckmarkCircleOutline className="text-gray-400 text-xl flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-bold text-gray-600">Set Password</h3>
                  <p className="text-[12px] text-gray-600">Secure your agent account</p>
                </div>
              </div>
            </div>
          </div>

          <NavLink to="/agent-SingIn" className="hidden md:flex items-center gap-2 text-gray-700 hover:text-black transition-colors">
            <span className="text-sm font-bold">← Back to login</span>
          </NavLink>
        </div>

        <div className="w-full md:w-3/5 p-6 sm:p-12 lg:p-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-800">Your business details</h2>
            <p className="text-sm text-gray-500 mt-1">Please provide your business details</p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Position <span className="text-red-600 font-bold">*</span>
              </label>
              <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none bg-white">
                <option disabled value="">Select position</option>
                <option>Agent</option>
                <option>Crimson</option>
                <option>Amber</option>
                <option>Velvet</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Website <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="url"
                placeholder="www.wesbsitename.com"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Social media</label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="url"
                  placeholder="https://www.facebook.com/username"
                  className="flex-grow px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-xs font-bold hover:bg-gray-200 transition-colors">
                  Add more
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                About <span className="text-red-600 font-bold">*</span>
              </label>
              <textarea
                placeholder="Briefly describe your experience and services..."
                rows="4"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none resize-none"
              ></textarea>
            </div>

            <NavLink
              to="/join-as-agent/varifacation"
              className="block w-full py-3.5 text-center text-white font-bold rounded-xl bg-gradient-to-r from-green-400 to-lime-400 shadow-lg hover:opacity-90 transition-opacity mt-8"
            >
              Continue
            </NavLink>

            <NavLink to="/agent-SingIn" className="flex md:hidden items-center justify-center gap-2 mt-6 text-gray-600 font-bold text-sm">
              <GoArrowLeft />
              <span>Back to login</span>
            </NavLink>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BusinessDetails;