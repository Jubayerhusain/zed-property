import React from 'react';
import { GoArrowLeft } from "react-icons/go";
import { NavLink } from "react-router-dom";

const ForgetPassword = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10 px-4">
            <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden">
                
                {/* Left Side: Image (Visible on desktop, moves to bottom on mobile) */}
                <div className="w-full md:w-1/2 h-56 md:h-auto order-2 md:order-1">
                    <img
                        src="https://housing.com/news/wp-content/uploads/2023/03/exterior-design-shutterstock_1932966368-1200x700-compressed.jpg"
                        alt="Property Exterior"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Side: Form */}
                <div className="w-full md:w-1/2 p-8 sm:p-14 lg:p-20 flex flex-col justify-center order-1 md:order-2">
                    <div className="text-center mb-10">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                            Reset your password
                        </h1>
                        <p className="text-sm text-gray-500 mt-2">
                            Enter your registered email address to receive instructions
                        </p>
                    </div>

                    <form className="w-full max-w-md mx-auto space-y-6" onSubmit={(e) => e.preventDefault()}>
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

                        <button 
                            type="submit"
                            className="w-full py-3.5 rounded-xl text-white font-bold bg-gradient-to-r from-green-400 to-lime-400 hover:opacity-90 transition-all shadow-lg active:scale-[0.98]"
                        >
                            Send Reset Link
                        </button>

                        <NavLink 
                            to="/agent-SingIn" 
                            className="flex items-center justify-center gap-2 text-gray-600 hover:text-black transition-colors pt-4"
                        >
                            <GoArrowLeft className="text-lg" />
                            <span className="text-sm font-bold">Back to login</span>
                        </NavLink>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;