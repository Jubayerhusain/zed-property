import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { NavLink } from "react-router-dom";

const ForgetPassword2 = () => {
  return (
    <div className=" h-screen py-5 sm:py-10 sm:mt-8">
      <div className="h-[80vh] sm:flex w-full px-5 sm:px-0 sm:w-9/12 shadow-md mx-auto sm:rounded-l-2xl  rounded-t-2xl sm:rounded-t-none">
        <div className="flex flex-col-reverse sm:flex-row">
          <div className="w-full pt-5 sm:p-0 sm:w-4/8 rounded-xl sm:rounded-r-none ">
            <img
              src="https://housing.com/news/wp-content/uploads/2023/03/exterior-design-shutterstock_1932966368-1200x700-compressed.jpg"
              alt=""
              className="w-full h-full object-cover rounded-xl sm:rounded-r-none "
            />
          </div>
          <div className=" w-full sm:w-4/8 px-10 py-32 sm:p-24 rounded-xl sm:rounded-l-none bg-white ">
            <div className=" text-center">
              <h1 className=" text-2xl font-semibold">Reset your password</h1>
              <h2 className=" text-sm py-2 text-[#6B7280]">
                Enter your registered email address
              </h2>
            </div>
            <div className="  mx-auto grid grid-cols-1 justify-center ">
              <div className="py-5">
                <h1 className="py-2 text-sm font-medium ">Email</h1>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input border border-gray-100 w-full "
                />
              </div>
              <button className="rounded-lg py-1 text-white bg-gradient-to-t from-green-400 to-lime-300 ">
                Reset Password
              </button>
              <NavLink
                to={"/agent-SingIn"}
                className=" pt-5 flex items-center justify-center gap-2"
              >
                <div>
                  <GoArrowLeft></GoArrowLeft>
                </div>
                <a className="text-sm font-semibold">Back to login</a>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword2;
