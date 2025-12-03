import React from "react";
import { ArrowUpRight } from "lucide-react";
import propertyImage from "../../assets/home-assets/Complete-Property-Image.png";
export default function TrustedPartner() {
  return (
    <div className="w-full bg-white py-16 px-4 lg:px-8 mt-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-800 mb-2">Who We Are</p>
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            Trusted{" "}
            <span
              className="bg-gradient-to-t to-[#0BC147] from-[#b6f50a] 
  bg-clip-text text-transparent italic"
            >
              Partner
            </span>{" "}
            for Your Journey
          </h2>
          <p className="text-gray-500 max-w-2xl font-manrope mx-auto text-sm">
            At ZedProperty, we connect people with properties they love,
            combining trust, transparency, and expertise in every deal
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side - Large Image Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white">
            <img
              src={propertyImage}
              alt="Modern luxury house"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-xl p-8 m-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Partner for Every Property Need
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                As a leading property platform, we provide full-service
                solutions to meet your needs. With top properties and dedicated
                experts, we ensure a seamless experience for buying, selling, or
                renting.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">

            {/* Properties Available*/}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg relative group hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div className="flex justify-end">
                <div className="w-8 h-8 border border-[#0BC147] rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-green-500" />
                </div>
              </div>
              <div className="mt-auto">
                <h4 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  800+
                </h4>
                <p className="text-gray-500 text-sm">Properties Available</p>
              </div>
            </div>

            {/* Satisfied Customer */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg relative group hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div className="flex justify-end">
                <div className="w-8 h-8  border border-[#0BC147] rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-green-500 " />
                </div>
              </div>
              <div className="mt-auto">
                <h4 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  460+
                </h4>
                <p className="text-gray-500 text-sm">Satisfied Customer</p>
              </div>
            </div>

            {/* Total Partners*/}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg relative group hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div className="flex justify-end">
                <div className="w-8 h-8 border border-[#0BC147] rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-green-500" />
                </div>
              </div>
              <div className="mt-auto">
                <h4 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  280+
                </h4>
                <p className="text-gray-500 text-sm">Total Partners</p>
              </div>
            </div>

            {/* Awards Winning*/}
            <div className="bg-gradient-to-t to-[#baf3cd] from-[#fafac7f3] rounded-3xl p-6 lg:p-8 shadow-lg relative group hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div className="flex justify-end">
                <div className="w-8 h-8 bg-white bg-opacity-40 rounded-full flex items-center justify-center group-hover:bg-opacity-60 transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-green-700" />
                </div>
              </div>
              <div className="mt-auto">
                <h4 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  120+
                </h4>
                <p className="text-gray-700 text-sm">Awards Winning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
