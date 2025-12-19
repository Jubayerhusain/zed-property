import React from "react";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 h-56 md:h-auto">
          <img
            src="https://housing.com/news/wp-content/uploads/2023/03/exterior-design-shutterstock_1932966368-1200x700-compressed.jpg"
            alt="Luxury Property"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-14 lg:p-20 flex flex-col justify-center">
          <div className="text-center mb-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Welcome to ZedProperty
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Sign in to manage your listings and leads
            </p>
          </div>

          <form className="w-full max-w-md mx-auto space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-400 focus:outline-none transition-all"
                required
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-sm font-semibold text-gray-700">Password</label>
                <NavLink
                  to="/agent-forget-password"
                  className="text-xs font-bold text-green-600 hover:text-green-700 transition-colors"
                >
                  Forgot Password?
                </NavLink>
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-400 focus:outline-none transition-all"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-green-500 focus:ring-green-400 border-gray-300 rounded cursor-pointer"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600 cursor-pointer">
                Remember me
              </label>
            </div>

            <button 
              type="submit"
              className="w-full py-3.5 rounded-xl text-white font-bold bg-gradient-to-r from-green-400 to-lime-400 hover:opacity-90 transition-all shadow-lg active:scale-[0.98]"
            >
              Login
            </button>

            <div className="pt-6 text-center">
              <p className="text-sm text-gray-600">
                Don’t have an account?
                <NavLink
                  to="/join-as-agent/user-information"
                  className="text-green-600 font-bold pl-1 hover:underline underline-offset-4"
                >
                  Register now
                </NavLink>
              </p>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default SignIn;