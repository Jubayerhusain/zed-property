import React from "react";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      {/* Main Container */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden">
        
        {/* Left Side: Image (Hidden on very small screens or stacked) */}
        <div className="md:w-1/2 w-full h-64 md:h-auto">
          <img
            src="https://housing.com/news/wp-content/uploads/2023/03/exterior-design-shutterstock_1932966368-1200x700-compressed.jpg"
            alt="Property"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Form */}
        <div className="md:w-1/2 w-full p-8 sm:p-12 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Welcome to ZedProperty</h1>
            <p className="text-sm text-gray-500 mt-2">
              Sign Up to Begin Your Property Journey
            </p>
          </div>

          <form className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition duration-200"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition duration-200"
              />
              <div className="text-right mt-2">
                <NavLink 
                  to="/user-forgetPassword" 
                  className="text-xs font-semibold text-gray-600 hover:text-green-500"
                >
                  Forgot Password?
                </NavLink>
              </div>
            </div>

            {/* Login Button */}
            <button className="w-full py-3 px-4 bg-gradient-to-r from-green-400 to-lime-400 text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition duration-300 transform hover:scale-[1.01]">
              Login
            </button>

            {/* Footer Link */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Don’t have an account? 
              <NavLink to="/user-registation" className="text-green-500 font-bold ml-1 hover:underline">
                Register now
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;