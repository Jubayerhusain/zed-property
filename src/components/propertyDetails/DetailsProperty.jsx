import React from "react";
import Icon from "../../assets/property-assets/Step-Icon-Container.png"
import Icon1 from "../../assets/property-assets/Step-Icon-Container-(1).png"
import Icon2 from "../../assets/property-assets/Step-Icon-Container-(2).png"
import Icon3 from "../../assets/property-assets/Step-Icon-Container-(3).png"
import Icon4 from "../../assets/property-assets/Step-Icon-Container-(4).png"
import Icon5 from "../../assets/property-assets/Step-Icon-Container-(5).png"
import Icon6 from "../../assets/property-assets/Step-Icon-Container-(6).png"
import Icon7 from "../../assets/property-assets/Step-Icon-Container-(7).png"
import  Image1  from "../../assets/property-assets/Video-Tour-Image.png";
import  Image2  from "../../assets/property-assets/Location-Image.png";


export default function DetailsProperty() {
  return (
    <div className=" grid grid-cols-1 gap-5 w-full col-span-8  mx-4" >
      <div className=" border border-gray-200 rounded-lg sm:rounded-2xl  p-5 bg-white">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Manstret Haven / $425,000
        </h1>
        <div className="flex items-center gap-2 text-gray-600">
          <span className="text-lg">New York, United States</span>
        </div>
      </div>

      {/* Property Description */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Property Description
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Experience luxury living in the heart of New York with this elegant property designed to provide the ultimate in urban comfort and lifestyle. Strategically located in the heart of the city, the property offers easy access to business centers, and renowned entertainment venues.
        </p>
      </div>

      {/* Property Features */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Property Features
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Discover premium comfort and lifestyle with an array of top-notch amenities designed to meet your every need. This property offers exclusive features, making it an ideal city residence.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Rooms */}
          <div className="flex items-center gap-3 p-4 rounded-lg">
            <div className="text-green-500">
              <img src={Icon} alt="" />
            </div>
            <div>
              <div className="text-gray-900 font-semibold">Rooms</div>
              <div className="text-gray-600">6</div>
            </div>
          </div>

          {/* Baths */}
          <div className="flex items-center gap-3 p-4  rounded-lg">
            <div className="text-green-500">
              <img src={Icon1} alt="" />
            </div>
            <div>
              <div className="text-gray-900 font-semibold">Baths</div>
              <div className="text-gray-600">2</div>
            </div>
          </div>

          {/* Kitchen */}
          <div className="flex items-center gap-3 p-4  rounded-lg">
            <div className="text-green-500">
                <img src={Icon2} alt="" />

            </div>
            <div>
              <div className="text-gray-900 font-semibold">Kitchen</div>
              <div className="text-gray-600">1</div>
            </div>
          </div>

          {/* Year Build */}
          <div className="flex items-center gap-3 p-4 rounded-lg">
            <div className="text-green-500">
              <img src={Icon3} alt="" />
            </div>
            <div>
              <div className="text-gray-900 font-semibold">Year Build</div>
              <div className="text-gray-600">2024</div>
            </div>
          </div>

          {/* Beds */}
          <div className="flex items-center gap-3 p-4  rounded-lg">
            <div className="text-green-500">
              <img src={Icon4} alt="" />
            </div>
            <div>
              <div className="text-gray-900 font-semibold">Beds</div>
              <div className="text-gray-600">4</div>
            </div>
          </div>

          {/* Garage */}
          <div className="flex items-center gap-3 p-4 rounded-lg">
            <div className="text-green-500">
              <img src={Icon5} alt="" />

            </div>
            <div>
              <div className="text-gray-900 font-semibold">Garage</div>
              <div className="text-gray-600">1</div>
            </div>
          </div>

          {/* Type */}
          <div className="flex items-center gap-3 p-4 rounded-lg">
            <div className="text-green-500">
                <img src={Icon6} alt="" />
            </div>
            <div>
              <div className="text-gray-900 font-semibold">Type</div>
              <div className="text-gray-600">House</div>
            </div>
          </div>

          {/* Sqft */}
          <div className="flex items-center gap-3 p-4  rounded-lg">
            <div className="text-green-500">
              <img src={Icon7} alt="" />
            </div>
            <div>
              <div className="text-gray-900 font-semibold">Sqft</div>
              <div className="text-gray-600">2,820</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="  px-5 border border-gray-100 rounded-xl " >
        <h1 className=" text-2xl pt-5 font-semibold " >Property Video Tour</h1>
        <div className="py-5 w-full h-full  sm:h-[512px]" >
          <img src={Image1} alt="" className=" w-full h-full rounded-xl" />
        </div>
      </div>
      <div className="  px-5 border border-gray-100 rounded-xl " >
        <h1 className=" text-2xl pt-5 font-semibold " >Property Location</h1>
        <div className="py-5 w-full h-full  sm:h-[512px]" >
          <img src={Image2} alt="" className=" w-full h-full rounded-xl" />
        </div>
      </div>
    </div>
  );
}