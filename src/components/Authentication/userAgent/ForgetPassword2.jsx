import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { NavLink } from "react-router-dom";

const ForgetPassword2 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-xl rounded-2xl overflow-hidden">
        
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src="https://housing.com/news/wp-content/uploads/2023/03/exterior-design-shutterstock_1932966368-1200x700-compressed.jpg"
            alt="Property"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 sm:p-16 lg:p-24 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Reset your password
            </h1>
            <p className="text-sm py-2 text-gray-500">
              Enter your registered email address
            </p>
          </div>

          <div className="w-full max-w-md mx-auto space-y-6">
            <div>
              <label className="block py-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              />
            </div>

            <button className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-green-400 to-lime-400 hover:opacity-90 transition-opacity shadow-md">
              Reset Password
            </button>

            <NavLink
              to="/agent-SingIn"
              className="flex items-center justify-center gap-2 text-gray-600 hover:text-black transition-colors"
            >
              <GoArrowLeft className="text-lg" />
              <span className="text-sm font-semibold">Back to login</span>
            </NavLink>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ForgetPassword2;