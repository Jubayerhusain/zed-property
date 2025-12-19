import React from "react";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
        
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src="https://housing.com/news/wp-content/uploads/2023/03/exterior-design-shutterstock_1932966368-1200x700-compressed.jpg"
            alt="Exterior Design"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 sm:p-10 lg:p-16">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Primary user details</h1>
            <p className="text-sm py-2 text-gray-500">
              Please provide your Primary user details
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your user name"
                className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                placeholder="Companyname@gmail.com"
                className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile number <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter your contact number"
                className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              />
            </div>

            <button className="w-full py-3 mt-4 text-white font-semibold rounded-lg bg-gradient-to-r from-green-400 to-lime-300 hover:opacity-90 transition-opacity shadow-md">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;