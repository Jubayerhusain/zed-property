import React from "react";
import agent1 from "../../assets/Agents-assets/Property Card Image (3).png";
import Icon1 from "../../assets/Agents-assets/sms.png";
import Icon2 from "../../assets/Agents-assets/briefcase.png";
import Icon3 from "../../assets/Agents-assets/call.png";
import Icon4 from "../../assets/Agents-assets/house-2.png";

const ArnoldAlexander = () => {
  return (
    <div className="mx-4 md:mx-5 py-5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="flex flex-col sm:flex-row border gap-5 border-gray-200 rounded-xl p-5 w-full">
            
            {/* Image */}
            <div className="w-full sm:w-5/12 h-auto">
              <img src={agent1} alt="" className="w-full h-full object-cover rounded-xl" />
            </div>

            {/* Info */}
            <div className="sm:w-7/12 flex flex-col justify-between">
              <div className="border-b-2 border-gray-100 py-5">
                <h1 className="text-[28px] font-semibold">Arnold Alexander</h1>
                <h2 className="text-xl text-[#171C19B2] font-medium">Real Estate Agent</h2>
              </div>
              <div className="space-y-4">
                {/* 1st */}
                <div className="flex gap-2 p-2 rounded-xl border border-gray-100">
                  <div><img src={Icon1} alt="" /></div>
                  <h1 className="text-[16px] text-[#171C19B2]">arnoldalexander@gmail.com</h1>
                </div>
                {/* 2nd */}
                <div className="flex gap-2 p-2 rounded-xl border border-gray-100">
                  <div><img src={Icon2} alt="" /></div>
                  <h1 className="text-[16px] text-[#171C19B2]">4+ Years of Experience</h1>
                </div>
                {/* 3rd */}
                <div className="flex gap-2 p-2 rounded-xl border border-gray-100">
                  <div><img src={Icon3} alt="" /></div>
                  <h1 className="text-[16px] text-[#171C19B2]">+1 762 824 1628</h1>
                </div>
                {/* 4th */}
                <div className="flex gap-2 p-2 rounded-xl border border-gray-100">
                  <div><img src={Icon4} alt="" /></div>
                  <h1 className="text-[16px] text-[#171C19B2]">140 Listings</h1>
                </div>
              </div>
            </div>
          </div>

          {/* Overview Sections */}
          <div className="w-full grid grid-cols-1 gap-5 border border-gray-100 p-5 rounded-xl">
            {/* 1st */}
            <div className="border-b border-gray-100 pb-5">
              <h1 className="text-[28px] font-semibold">Agent Overview</h1>
              <h2 className="text-lg text-[#171C19B2] font-medium">
                I am an experienced property agent with in-depth knowledge of
                the local market. Known for my professional approach and
                client-focused expertise, I have helped numerous families and
                investors find their ideal properties and optimize investments.
                With a vast network and exclusive listings.
              </h2>
            </div>
            {/* 2nd */}
            <div className="border-b border-gray-100 pb-5">
              <h1 className="text-[28px] font-semibold">Work Philosophy</h1>
              <h2 className="text-lg text-[#171C19B2] font-medium">
                Making every property transaction a positive and transparent
                experience for clients. I am committed to helping you find the
                right property that suits your needs and budget.
              </h2>
            </div>
            {/* 3rd */}
            <div className="border-b border-gray-100 pb-5">
              <h1 className="text-[28px] font-semibold">Special Skills</h1>
              <ul className="list-disc text-lg text-[#171C19B2] pl-5 font-medium">
                <li>Market analysis and property pricing</li>
                <li>Negotiation and drafting of favorable agreements</li>
                <li>Property investment consulting for beginners and experienced investors</li>
              </ul>
            </div>
            {/* 4th */}
            <div className="pb-5">
              <h1 className="text-[28px] font-semibold">Why Choose Me</h1>
              <h2 className="text-lg text-[#171C19B2] font-medium">
                With a friendly approach and personalized service, I am
                dedicated to ensuring that every detail in the process of
                selling or renting your property is handled with care.
              </h2>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className=" h-auto col-span-12 lg:col-span-4 border border-gray-100 p-5 rounded-xl">
          <div className="border-b border-gray-100 pb-5">
            <h1 className="text-[28px] font-semibold">Contact Agent</h1>
          </div>
          {/* 1st */}
          <div className="py-5 border-b border-gray-100">
            <h1 className="text-xl pb-5 text-[#171C19] font-semibold">Full Name</h1>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="input w-full rounded-xl"
            />
          </div>
          {/* 2nd */}
          <div className="py-5 border-b border-gray-100">
            <h1 className="text-xl pb-5 text-[#171C19] font-semibold">Email</h1>
            <input
              type="text"
              placeholder="Enter Email"
              className="input w-full rounded-xl"
            />
          </div>
          {/* 3rd */}
          <div className="py-5 border-b border-gray-100">
            <h1 className="text-xl pb-5 text-[#171C19] font-semibold">Phone</h1>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="input w-full rounded-xl"
            />
          </div>
          {/* 4th */}
          <div className="py-5 ">
            <h1 className="text-xl pb-5  text-[#171C19] font-semibold">Message</h1>
            <textarea className="textarea rounded-xl w-full" placeholder="Message"></textarea>
          </div>
           <button className="w-full bg-gradient-to-t from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600 text-white font-semibold py-3 lg:py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Submit
            </button>
        </div>

      </div>
    </div>
  );
};

export default ArnoldAlexander;
