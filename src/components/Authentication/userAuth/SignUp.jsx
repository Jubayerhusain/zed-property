import React from "react";

const SignUp = () => {
  return (
   <div className=" bg-gray-200" >
     <div className="w-full py-10 sm:w-9/12 mx-auto" >
      <div className=" shadow-xl  rounded-2xl flex flex-col-reverse sm:flex-row my-10  mx-auto ">
        <div className="w-full p-5 sm:p-0 sm:w-4/8 rounded-xl sm:rounded-r-none ">
          <img
            src="https://housing.com/news/wp-content/uploads/2023/03/exterior-design-shutterstock_1932966368-1200x700-compressed.jpg"
            alt=""
            className="w-full h-full object-cover rounded-xl sm:rounded-r-none "
          />
        </div>
        <div className=" w-full sm:w-4/8 p-5 sm:px-20 sm:py-10 rounded-r-2xl bg-white ">
          <div className=" text-center">
            <h1 className=" text-2xl font-semibold">Primary user details</h1>
            <h2 className=" text-sm py-2 text-[#6B7280]">
              Please provide your Primary user details
            </h2>
          </div>
          <div className=" pt-5 mx-auto grid grid-cols-1 justify-center ">
            {/* 1st input  */}
            <div>
              <h1 className="py-2 text-sm font-medium ">
                Username <a className=" text-red-600 text-xl">*</a>
              </h1>
              <input
                type="text"
                placeholder="Enter your user name"
                className="input border border-gray-100 w-full "
              />
            </div>
            {/* 2nd input  */}
            <div>
              <h1 className="py-2 text-sm font-medium ">
                First name <a className=" text-red-600 text-xl">*</a>
              </h1>
              <input
                type="text"
                placeholder="Enter your first name"
                className="input border border-gray-100 w-full "
              />
            </div>
            {/* 3rd input  */}
            <div>
              <h1 className="py-2 text-sm font-medium ">Last name </h1>
              <input
                type="text"
                placeholder="Enter your last name"
                className="input border border-gray-100 w-full "
              />
            </div>
            {/* 4th input  */}
            <div>
              <h1 className="py-2 text-sm font-medium ">
                Email <a className=" text-red-600 text-xl">*</a>
              </h1>
              <input
                type="email"
                placeholder="Companyname@gmail.com"
                className="input border border-gray-100 w-full "
              />
            </div>
            {/* 5th input  */}
            <div>
              <h1 className="py-2 text-sm font-medium ">
                Mobile number <a className=" text-red-600 text-xl">*</a>
              </h1>
              <input
                type=""
                placeholder="Enter your contact number"
                className="input border border-gray-100 w-full "
              />
            </div>
            <button className="rounded-lg py-1 mt-5 text-white bg-gradient-to-t from-green-400 to-lime-300 ">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default SignUp;
