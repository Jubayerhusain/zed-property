import React, { useState } from "react";
import { MapPin, Home, DollarSign, ChevronDown } from "lucide-react";
import heroimage from "../../assets/home-hero.png";
import villaIcon from "../../assets/home-assets/villa.png";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  return (
    <>
      <div
        className="hero h-[60vh] sm:h-[90vh] w-full relative"
        style={{
          backgroundImage: `url(${heroimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute w-full px-6 top-8 left-0 lg:max-w-[620px] lg:top-10 2xl:top-20 lg:left-10 2xl:left-72 lg:px-0">
          <h1 className="text-4xl lg:text-5xl 2xl:text-7xl text-black font-normal  lg:text-left">
            Unlock the Door to
          </h1>
          <h1 className="text-4xl lg:text-5xl 2xl:text-7xl text-black font-normal lg:text-left">
            Your{" "}
            <span
              className="bg-gradient-to-t to-[#0BC147] from-[#b6f50a] 
  bg-clip-text text-transparent italic"
            >
              Dream Home
            </span>
          </h1>
          <p className="text-sm text-black mt-4 lg:text-left max-w-xl mx-auto lg:mx-0">
            Step into a world of exclusive properties, thoughtfully designed and
            carefully selected to perfectly match your lifestyle, aspirations,
            and unique needs.
          </p>
        </div>

        <div className="bg-white border-t-6 border-t-lime-200 font-manrope rounded-3xl shadow-2xl p-6 lg:p-8 w-[90%] max-w-md absolute top-[280px] left-1/2 -translate-x-1/2 lg:top-10 2xl:top-20 lg:right-20 2xl:right-80 lg:left-auto lg:translate-x-0">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 lg:mb-8 text-center lg:text-left">
            Find Your Dream Home
          </h1>

          <div className="space-y-4 lg:space-y-6">
            <div>
              <label className="block text-sm text-gray-500 mb-2">
                Location
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-16 pr-12 py-3 lg:py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-300 text-gray-700 appearance-none bg-white"
                >
                  <option value="">Enter City Or Area</option>
                  <option value="new-york">Lusaka</option>
                  <option value="los-angeles">Kitwe</option>
                  <option value="chicago">Ndola</option>
                  <option value="houston">Chipata</option>
                  <option value="miami">Kabwe</option>
                  <option value="san-francisco">Chingola</option>
                  <option value="boston">Mufulira</option>
                  <option value="seattle">Luanshya</option>
                  <option value="seattle">Livingstone</option>
                  <option value="seattle">Kasama</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-2">
                Property Type
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center">
                  <img
                    src={villaIcon}
                    alt="Villa Icon"
                    className="w-5 h-5 text-white"
                  />
                </div>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full pl-16 pr-12 py-3 lg:py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-300 text-gray-700 appearance-none bg-white"
                >
                  <option value="">Select House, Villa</option>
                  <option value="house">House</option>
                  <option value="villa">Villa</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-2">
                Price Range
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full pl-16 pr-12 py-3 lg:py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-300 text-gray-700 appearance-none bg-white"
                >
                  <option value="">Choose Your Budget</option>
                  <option value="0-100k">ZMW 0 - ZMW 100,000</option>
                  <option value="100k-250k">ZMW 100,000 - ZMW 250,000</option>
                  <option value="250k-500k">ZMW 250,000 - ZMW 500,000</option>
                  <option value="500k+">ZMW 500,000+</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <button className="w-full bg-gradient-to-t from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600 text-white font-semibold py-3 lg:py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Search Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
