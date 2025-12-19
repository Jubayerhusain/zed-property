import React from "react";
import { NavLink } from "react-router-dom";

const SignIn = () => {
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

        <div className="w-full md:w-1/2 p-6 sm:p-12 lg:p-16 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Welcome to ZedProperty
            </h1>
            <p className="text-sm py-2 text-gray-500">
              Sign Up to Begin Your Property Journey
            </p>
          </div>

          <div className="w-full max-w-md mx-auto space-y-4">
            <div>
              <label className="block py-2 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              />
            </div>

            <div>
              <label className="block py-2 text-sm font-semibold text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              />
              <div className="mt-2 text-right">
                <NavLink
                  to="/agent-forget-password"
                  className="text-sm font-medium text-gray-600 hover:text-green-500"
                >
                  Forget Password?
                </NavLink>
              </div>
            </div>

            <div className="pt-2">
              <button className="w-full py-2.5 rounded-lg text-white font-semibold bg-gradient-to-r from-green-400 to-lime-400 hover:opacity-90 transition-opacity shadow-md">
                Login
              </button>
            </div>

            <p className="text-center font-medium text-sm text-gray-600 pt-4">
              Don’t have an account?
              <NavLink
                to="/join-as-agent/user-information"
                className="text-green-500 pl-1 hover:underline"
              >
                Register now
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;