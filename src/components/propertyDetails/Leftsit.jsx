import React from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import img1 from "../../assets/property-assets/Property-Card-Image.png";

const Leftsit = () => {
  return (
    <div>
      <div className="border border-gray-100 p-5">
        <div className="w-full sm:w-[388px] h-[330px] pb-5">
          <img src={img1} alt="" className=" w-full h-full" />
        </div>
        <div className="flex justify-between px-5 pb-5">
          <div>
            <h2 className=" text-xl font-semibold">Arnold Alexander</h2>
            <h1 className=" text-[16px] text-[#171C19B2] font-medium">
              Real Estate Agent
            </h1>
          </div>
          <h1 className=" text-xl font-semibold">140 Listings</h1>
        </div>
        <div>
          <button className=" px-5 w-full bg-gradient-to-t to-[#0BC147] from-[#b6f50a] text-white font-semibold px-4 py-3 rounded-lg">
            Contact Agent
          </button>
        </div>
      </div>
      <div>
        <div className=" border border-gray-100 bg-base-200 flex items-center justify-center mt-5">
          <div className="card bg-base-100 w-full max-w-md">
            <div className="card-body">
              <h1 className="card-title text-3xl font-bold mb-6">
                Make Appointment
              </h1>

              <div className="space-y-4">
                {/* Date Selection */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Full Name</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Select date"
                      className="input input-bordered w-full pr-10"
                      readOnly
                    />
                    <FaCalendarAlt className="absolute right-3 top-1/2 -translate-y-1/2 text-success" />
                  </div>
                </div>

                {/* Time Selection */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Time</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Select time"
                      className="input input-bordered w-full pr-10"
                      readOnly
                    />
                    <FaClock className="absolute right-3 top-1/2 -translate-y-1/2 text-success" />
                  </div>
                </div>

                {/* Full Name Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="input input-bordered w-full"
                  />
                </div>

                {/* Email Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="input input-bordered w-full"
                  />
                </div>

                {/* Phone Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Phone</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="input input-bordered w-full"
                  />
                </div>

                {/* Message Textarea */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Message</span>
                  </label>
                  <textarea
                    placeholder="Write message"
                    className="textarea textarea-bordered w-full h-24"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button className=" px-5 w-full bg-gradient-to-t to-[#0BC147] from-[#b6f50a] text-white font-semibold px-4 py-3 rounded-lg">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftsit;
