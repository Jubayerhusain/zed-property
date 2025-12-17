import React from "react";
import Icon from "../../assets/property-assets/Step-Icon-Container.png";
import Icon1 from "../../assets/property-assets/Step-Icon-Container-(1).png";
import Icon2 from "../../assets/property-assets/Step-Icon-Container-(2).png";
import Icon3 from "../../assets/property-assets/Step-Icon-Container-(3).png";
import Icon4 from "../../assets/property-assets/Step-Icon-Container-(4).png";
import Icon5 from "../../assets/property-assets/Step-Icon-Container-(5).png";
import Icon6 from "../../assets/property-assets/Step-Icon-Container-(6).png";
import Icon7 from "../../assets/property-assets/Step-Icon-Container-(7).png";
import Image1 from "../../assets/property-assets/Video-Tour-Image.png";
import Image2 from "../../assets/property-assets/Location-Image.png";

export default function DetailsProperty() {
  const features = [
    { icon: Icon, label: "Rooms", value: "6" },
    { icon: Icon1, label: "Baths", value: "2" },
    { icon: Icon2, label: "Kitchen", value: "1" },
    { icon: Icon3, label: "Year Build", value: "2024" },
    { icon: Icon4, label: "Beds", value: "4" },
    { icon: Icon5, label: "Garage", value: "1" },
    { icon: Icon6, label: "Type", value: "House" },
    { icon: Icon7, label: "Sqft", value: "2,820" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 w-full col-span-8 px-4 sm:px-6 lg:px-0">
      {/* Main Property Details Card */}
      <div className="border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 bg-white shadow-sm">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
            Manstret Haven / ZMW 425,000
          </h1>
          <div className="flex items-center gap-2 text-gray-600">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm sm:text-base lg:text-lg">
              Lusaka, Kitwe and Ndola
            </span>
          </div>
        </div>

        {/* Property Description */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
            Property Description
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Experience luxury living in the heart of New York with this elegant
            property designed to provide the ultimate in urban comfort and
            lifestyle. Strategically located in the heart of the city, the
            property offers easy access to business centers, and renowned
            entertainment venues.
          </p>
        </div>

        {/* Property Features */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
            Property Features
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
            Discover premium comfort and lifestyle with an array of top-notch
            amenities designed to meet your every need. This property offers
            exclusive features, making it an ideal city residence.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12">
                  <img
                    src={feature.icon}
                    alt={feature.label}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-sm sm:text-base text-gray-900 font-semibold truncate">
                    {feature.label}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">
                    {feature.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Property Video Tour */}
      <div className="border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 bg-white shadow-sm">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-5">
          Property Video Tour
        </h2>
        <div className="relative w-full aspect-video sm:aspect-[16/10] overflow-hidden rounded-lg sm:rounded-xl">
          <img
            src={Image1}
            alt="Property Video Tour"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-500 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Property Location */}
      <div className="border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 bg-white shadow-sm">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-5">
          Property Location
        </h2>
        <div className="relative w-full aspect-video sm:aspect-[16/10] overflow-hidden rounded-lg sm:rounded-xl">
          <img
            src={Image2}
            alt="Property Location Map"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}