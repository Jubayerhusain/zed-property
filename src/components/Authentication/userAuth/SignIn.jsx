import React from "react";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="w-full  mx-auto">
      <div className=" shadow-xl sm:w-9/12 rounded-2xl flex flex-col-reverse sm:flex-row my-10  mx-auto ">
        <div className="w-full p-5 sm:px-0 sm:w-4/8 rounded-xl sm:rounded-r-none ">
          <img
            src="https://housing.com/news/wp-content/uploads/2023/03/exterior-design-shutterstock_1932966368-1200x700-compressed.jpg"
            alt=""
            className="w-full h-full object-cover rounded-xl sm:rounded-r-none "
          />
        </div>
        <div className=" w-full sm:w-4/8 p-5 sm:p-24 rounded-r-2xl bg-white ">
          <div className=" text-center">
            <h1 className=" text-2xl font-semibold">Welcome to ZedProperty</h1>
            <h2 className=" text-sm py-2 text-[#6B7280]">
              Sign Up to Begin Your Property Journey
            </h2>
          </div>
          <div className=" pt-5 mx-auto grid grid-cols-1 justify-center ">
            <div>
              <h1 className="py-2 text-sm font-medium ">Email</h1>
              <input
                type="email"
                placeholder="Enter your email"
                className="input border border-gray-100 w-full "
              />
            </div>
            <div className="my-2">
              <h1 className="py-2 text-sm font-semibold">password</h1>
              <input
                type="password"
                placeholder="Enter your password"
                className="input border border-gray-100 w-full"
              />
              <h2 className="text-sm font-medium py-2">Forget Password?</h2>
            </div>
            <button className="rounded-lg py-1 text-white bg-gradient-to-t from-green-400 to-lime-300 ">
              Login
            </button>
            <h1 className=" text-center font-semibold text-sm gap-1 pt-5">
              Don’t have an account?
              <NavLink to={"/user-registation"} className="text-green-400 pl-1">Register now</NavLink>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
