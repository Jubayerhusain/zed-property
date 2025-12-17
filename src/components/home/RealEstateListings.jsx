import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Bed, Bath, Maximize } from "lucide-react";

const RealEstateListings = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const listings = [
    {
      id: 1,
      title: "Classic Damara",
      price: "ZMW 480,500",
      location: "Lusaka, Kitwe and Ndola",
      beds: 4,
      baths: 2,
      sqft: "2,824 sqft",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Manstret Haven",
      price: "ZMW 425,000",
      location: "Lusaka, Kitwe and Ndola",
      beds: 4,
      baths: 2,
      sqft: "2,820 sqft",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Boston Retreat",
      price: "ZMW 350,800",
      location: "Lusaka, Kitwe and Ndola",
      beds: 3,
      baths: 2,
      sqft: "2,640 sqft",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Sunset Villa",
      price: "ZMW 520,000",
      location: "Lusaka, Kitwe and Ndola",
      beds: 5,
      baths: 3,
      sqft: "3,200 sqft",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    },
    {
      id: 5,
      title: "Urban Loft",
      price: "ZMW 395,000",
      location: "Lusaka, Kitwe and Ndola",
      beds: 3,
      baths: 2,
      sqft: "2,400 sqft",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    },
    {
      id: 6,
      title: "Coastal Paradise",
      price: "ZMW 680,000",
      location: "Lusaka, Kitwe and Ndola",
      beds: 4,
      baths: 3,
      sqft: "3,500 sqft",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop",
    },
    {
      id: 7,
      title: "Mountain Escape",
      price: "ZMW 455,000",
      location: "Lusaka, Kitwe and Ndola",
      beds: 4,
      baths: 2,
      sqft: "2,980 sqft",
      image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&h=600&fit=crop",
    },
    {
      id: 8,
      title: "Lakeside Cottage",
      price: "ZMW 510,200",
      location: "Lusaka, Kitwe and Ndola",
      beds: 3,
      baths: 2,
      sqft: "2,700 sqft",
      image:
        "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=800&h=600&fit=crop",
    },
    {
      id: 9,
      title: "Modern Penthouse",
      price: "ZMW 850,000",
      location: "Lusaka, Kitwe and Ndola",
      beds: 4,
      baths: 3,
      sqft: "3,000 sqft",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop",
    },
    {
      id: 10,
      title: "Greenwood Residence",
      price: "ZMW 420,750",
      location: "Lusaka, Kitwe and Ndola",
      beds: 3,
      baths: 2,
      sqft: "2,550 sqft",
      image:
        "https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=800&h=600&fit=crop",
    },
  ];

  const itemsPerPage = 3;
  const maxIndex = Math.ceil(listings.length / itemsPerPage) - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const visibleListings = listings.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <div className=" bg-gray-50 px-8 py-18">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-gray-500 text-sm mb-2">New Property</p>
            <h1 className="text-3xl sm:text-5xl font-serif">
              Newest{" "}
              <span
                className="bg-gradient-to-t to-[#0BC147] from-[#b6f50a] 
  bg-clip-text text-transparent italic"
              >
                Listings
              </span>
            </h1>
          </div>

          <div className="flex gap-2 border border-1 border-lime-300 p-1 rounded-full">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-lime-100 hover:bg-gradient-to-t to-[#0BC147] from-[#b6f50a] hover:text-white transition-colors flex items-center justify-center group"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-gr bg-gradient-to-t to-[#0BC147] from-[#b6f50a] hover:bg-lime-400 text-white transition-colors flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-manrope">
          {visibleListings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {listing.title}
                  </h3>
                  <span className="text-xl font-bold text-gray-900">
                    {listing.price}
                  </span>
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm">{listing.location}</span>
                </div>

                <div className="flex items-center gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5" />
                    <span className="text-sm">{listing.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5" />
                    <span className="text-sm">{listing.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize className="w-5 h-5" />
                    <span className="text-sm">{listing.sqft}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-lime-500 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealEstateListings;
