import React, { useState, useMemo } from "react";
import {
  ChevronDown,
  MapPin,
  Bed,
  Bath,
  Maximize,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import building from "../../assets/property-assets/building.png";
import buildings from "../../assets/property-assets/buildings.png";
import buliding from "../../assets/property-assets/buliding.png";
import hospital from "../../assets/property-assets/hospital.png";
import house from "../../assets/property-assets/house.png";

const PropertyListing = () => {
  const [location, setLocation] = useState("New York, US");
  const [propertyStatus, setPropertyStatus] = useState("Sell");
  const [selectedPropertyType, setSelectedPropertyType] = useState(["House"]);
  const [priceRange, setPriceRange] = useState([200000, 1000000]);
  const [landArea, setLandArea] = useState([2000, 4000]);
  const [bedroom, setBedroom] = useState("Any");
  const [bathroom, setBathroom] = useState("Any");
  const [selectedAmenities, setSelectedAmenities] = useState(["Garden"]);
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const allProperties = [
    {
      id: 1,
      name: "Manstret Haven",
      price: 425000,
      location: "New York, United States",
      beds: 4,
      baths: 2,
      sqft: 2920,
      type: "House",
      amenities: ["Garden", "Swimming Pool", "Garage"],
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    },
    {
      id: 2,
      name: "New Trafford",
      price: 448300,
      location: "New York, United States",
      beds: 4,
      baths: 2,
      sqft: 2882,
      type: "House",
      amenities: ["Garden", "Backyard", "Garage"],
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
    },
    {
      id: 3,
      name: "Amolet Metric",
      price: 460280,
      location: "New York, United States",
      beds: 4,
      baths: 2,
      sqft: 2824,
      type: "House",
      amenities: ["Garden", "Gym", "Swimming Pool"],
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    },
    {
      id: 4,
      name: "Boise Loide",
      price: 420840,
      location: "New York, United States",
      beds: 3,
      baths: 2,
      sqft: 2640,
      type: "House",
      amenities: ["Garden", "Swimming Pool"],
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    },
    {
      id: 5,
      name: "Timber Place",
      price: 406800,
      location: "New York, United States",
      beds: 3,
      baths: 2,
      sqft: 2465,
      type: "House",
      amenities: ["Garden", "Backyard"],
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
    },
    {
      id: 6,
      name: "Fabulous Estate",
      price: 446896,
      location: "New York, United States",
      beds: 3,
      baths: 2,
      sqft: 2698,
      type: "House",
      amenities: ["Garden", "Swimming Pool", "Gym"],
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    },
    {
      id: 7,
      name: "Bended Mate",
      price: 425000,
      location: "New York, United States",
      beds: 4,
      baths: 2,
      sqft: 2480,
      type: "Apartment",
      amenities: ["Garden", "Garage", "Laundry"],
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    },
    {
      id: 8,
      name: "Neva Shift",
      price: 448300,
      location: "New York, United States",
      beds: 4,
      baths: 2,
      sqft: 2482,
      type: "House",
      amenities: ["Garden", "Swimming Pool"],
      image:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
    },
    {
      id: 9,
      name: "Ocean Vista",
      price: 520000,
      location: "New York, United States",
      beds: 5,
      baths: 3,
      sqft: 3200,
      type: "House",
      amenities: ["Garden", "Swimming Pool", "Gym", "Backyard"],
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    },
    {
      id: 10,
      name: "Urban Loft",
      price: 380000,
      location: "New York, United States",
      beds: 2,
      baths: 2,
      sqft: 1800,
      type: "Apartment",
      amenities: ["Gym", "Laundry"],
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
    },
    {
      id: 11,
      name: "Sunset Manor",
      price: 675000,
      location: "New York, United States",
      beds: 5,
      baths: 4,
      sqft: 3800,
      type: "House",
      amenities: ["Garden", "Swimming Pool", "Garage", "Fireplace"],
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    },
    {
      id: 12,
      name: "Modern Plaza",
      price: 290000,
      location: "New York, United States",
      beds: 2,
      baths: 1,
      sqft: 1500,
      type: "Apartment",
      amenities: ["Laundry", "Surveillance Cameras"],
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    },
  ];

  const propertyTypes = [
    { name: "House", icon: <img src={house} alt="House" /> },
    { name: "Apartment", icon: <img src={buliding} alt="buliding" /> },
    { name: "Office", icon: <img src={buildings} alt="" srcset="" /> },
    { name: "Shophouse", icon: <img src={building} alt="building" /> },
    { name: "Medical", icon: <img src={hospital} alt="hospital" /> },
  ];

  const amenities = [
    "Backyard",
    "Garden",
    "Fireplace",
    "Gym",
    "Swimming Pool",
    "Garage",
    "Playground",
    "Surveillance Cameras",
    "Laundry",
  ];

  const togglePropertyType = (type) => {
    setSelectedPropertyType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
    setCurrentPage(1);
  };

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
    setCurrentPage(1);
  };

  // Filter and sort properties
  const filteredAndSortedProperties = useMemo(() => {
    let filtered = allProperties.filter((property) => {
      // Property type filter
      if (
        selectedPropertyType.length > 0 &&
        !selectedPropertyType.includes(property.type)
      ) {
        return false;
      }

      // Price range filter
      if (property.price < priceRange[0] || property.price > priceRange[1]) {
        return false;
      }

      // Land area filter
      if (property.sqft < landArea[0] || property.sqft > landArea[1]) {
        return false;
      }

      // Bedroom filter
      if (bedroom !== "Any" && property.beds !== parseInt(bedroom)) {
        return false;
      }

      // Bathroom filter
      if (bathroom !== "Any" && property.baths !== parseInt(bathroom)) {
        return false;
      }

      // Amenities filter
      if (selectedAmenities.length > 0) {
        const hasAllAmenities = selectedAmenities.every((amenity) =>
          property.amenities.includes(amenity)
        );
        if (!hasAllAmenities) {
          return false;
        }
      }

      return true;
    });

    // Sort properties
    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "sqft-low") {
      filtered.sort((a, b) => a.sqft - b.sqft);
    } else if (sortBy === "sqft-high") {
      filtered.sort((a, b) => b.sqft - a.sqft);
    }

    return filtered;
  }, [
    allProperties,
    selectedPropertyType,
    priceRange,
    landArea,
    bedroom,
    bathroom,
    selectedAmenities,
    sortBy,
  ]);

  // Pagination
  const totalPages = Math.ceil(
    filteredAndSortedProperties.length / itemsPerPage
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProperties = filteredAndSortedProperties.slice(
    startIndex,
    endIndex
  );

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const getPaginationRange = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      }
    }

    let prev = 0;
    for (const i of range) {
      if (prev && i - prev > 1) {
        rangeWithDots.push("...");
      }
      rangeWithDots.push(i);
      prev = i;
    }

    return rangeWithDots;
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="bg-white py-16">
        <div className="max-w-[1440px] mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
            Property
          </p>
          <h1 className="text-5xl text-gray-900 mb-4 font-playfair">
            Explore Our{" "}
            <span
              className="bg-gradient-to-t to-[#0BC147] from-[#b6f50a] 
  bg-clip-text text-transparent italic"
            >
              Properties
            </span>
          </h1>
          <p className="text-gray-600">
            Browse residential, commercial, and rental listings tailored to your
            needs.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Filters */}
          <div className="w-80 h-auto border border-gray-100 rounded-lg flex-shrink-0">
            {/* Location Filter */}
            <div className="border-t border-gray-100 mt-10 mx-4"></div>

            <div className="bg-white rounded-lg p-4 ">
              <h3 className="text-lg font-semibold mb-4">Location</h3>
              <div className="relative">
                <select
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg appearance-none bg-white cursor-pointer"
                >
                  <option>New York, US</option>
                  <option>Los Angeles, US</option>
                  <option>Chicago, US</option>
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={20}
                />
              </div>
            </div>

            <div className="border-t border-gray-100  mx-4"></div>
            {/* Property Status */}
            <div className="bg-white rounded-lg p-6 ">
              <h3 className="text-lg font-semibold mb-4">Property Status</h3>
              <div className="relative">
                <select
                  value={propertyStatus}
                  onChange={(e) => {
                    setPropertyStatus(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg appearance-none bg-white cursor-pointer"
                >
                  <option>Sell</option>
                  <option>Rent</option>
                  <option>Sold</option>
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={20}
                />
              </div>
            </div>

            <div className="border-t border-gray-100  mx-4"></div>

            {/* Property Type */}
            <div className="bg-white rounded-lg p-6 ">
              <h3 className="text-lg font-semibold mb-4">Property Type</h3>
              <div className="grid grid-cols-2 gap-3">
                {propertyTypes.map((type) => (
                  <button
                    key={type.name}
                    onClick={() => togglePropertyType(type.name)}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all flex items-center gap-2 ${
                      selectedPropertyType.includes(type.name)
                        ? "bg-gradient-to-t from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600 text-white"
                        : "bg-white text-gray-700 border-gray-200 hover:border-green-500"
                    }`}
                  >
                    <p>{type.icon}</p>
                    <p>{type.name}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100 mx-4"></div>

            {/* Price Range */}
            <div className="bg-white rounded-lg p-6 ">
              <h3 className="text-lg font-semibold mb-4">Price Range</h3>
              <p className="text-sm text-gray-600 mb-4">
                ${priceRange[0].toLocaleString()} - $
                {priceRange[1].toLocaleString()}
              </p>
              <div className="relative pt-1 pb-4">
                <div className="relative h-1 bg-gray-200 rounded-full">
                  <div
                    className="absolute h-1 bg-gradient-to-t from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600 rounded-full"
                    style={{
                      left: `${((priceRange[0] - 200000) / 800000) * 100}%`,
                      width: `${
                        ((priceRange[1] - priceRange[0]) / 800000) * 100
                      }%`,
                    }}
                  ></div>
                  <input
                    type="range"
                    min="200000"
                    max="1000000"
                    step="10000"
                    value={priceRange[0]}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (val < priceRange[1]) {
                        setPriceRange([val, priceRange[1]]);
                        setCurrentPage(1);
                      }
                    }}
                    className="absolute w-full h-1 opacity-0 cursor-pointer"
                    style={{ top: 0 }}
                  />
                  <input
                    type="range"
                    min="200000"
                    max="1000000"
                    step="10000"
                    value={priceRange[1]}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (val > priceRange[0]) {
                        setPriceRange([priceRange[0], val]);
                        setCurrentPage(1);
                      }
                    }}
                    className="absolute w-full h-1 opacity-0 cursor-pointer"
                    style={{ top: 0 }}
                  />
                  <div
                    className="absolute w-4 h-4 bg-gradient-to-t from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600 rounded-full border-4 border-white shadow-md cursor-pointer -top-1.5 pointer-events-none"
                    style={{
                      left: `${((priceRange[0] - 200000) / 800000) * 100}%`,
                      transform: "translateX(-50%)",
                    }}
                  ></div>
                  <div
                    className="absolute w-4 h-4 bg-gradient-to-t from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600 rounded-full border-4 border-white shadow-md cursor-pointer -top-1.5 pointer-events-none"
                    style={{
                      left: `${((priceRange[1] - 200000) / 800000) * 100}%`,
                      transform: "translateX(-50%)",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100  mx-4"></div>

            {/* Land Area */}
            <div className="bg-white rounded-lg p-6 ">
              <h3 className="text-lg font-semibold mb-4">Land Area</h3>
              <p className="text-sm text-gray-600 mb-4">
                {landArea[0]} - {landArea[1]} (sqft)
              </p>
              <div className="relative pt-1 pb-4">
                <div className="relative h-1 bg-gray-200 rounded-full">
                  <div
                    className="absolute h-1 bg-gradient-to-t from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600 rounded-full"
                    style={{
                      left: `${((landArea[0] - 2000) / 2000) * 100}%`,
                      width: `${((landArea[1] - landArea[0]) / 2000) * 100}%`,
                    }}
                  ></div>
                  <input
                    type="range"
                    min="2000"
                    max="4000"
                    step="100"
                    value={landArea[0]}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (val < landArea[1]) {
                        setLandArea([val, landArea[1]]);
                        setCurrentPage(1);
                      }
                    }}
                    className="absolute w-full h-1 opacity-0 cursor-pointer"
                    style={{ top: 0 }}
                  />
                  <input
                    type="range"
                    min="2000"
                    max="4000"
                    step="100"
                    value={landArea[1]}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (val > landArea[0]) {
                        setLandArea([landArea[0], val]);
                        setCurrentPage(1);
                      }
                    }}
                    className="absolute w-full h-1 opacity-0 cursor-pointer"
                    style={{ top: 0 }}
                  />
                  <div
                    className="absolute w-4 h-4 bg-gradient-to-t from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600 rounded-full border-4 border-white shadow-md cursor-pointer -top-1.5 pointer-events-none"
                    style={{
                      left: `${((landArea[0] - 2000) / 2000) * 100}%`,
                      transform: "translateX(-50%)",
                    }}
                  ></div>
                  <div
                    className="absolute w-4 h-4 bg-gradient-to-t from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600 rounded-full border-4 border-white shadow-md cursor-pointer -top-1.5 pointer-events-none"
                    style={{
                      left: `${((landArea[1] - 2000) / 2000) * 100}%`,
                      transform: "translateX(-50%)",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100  mx-4"></div>

            {/* Room */}
            <div className="bg-white rounded-lg p-6 ">
              <h3 className="text-lg font-semibold mb-4">Room</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">
                    Bedroom
                  </label>
                  <div className="relative">
                    <select
                      value={bedroom}
                      onChange={(e) => {
                        setBedroom(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg appearance-none bg-white cursor-pointer"
                    >
                      <option>Any</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                      size={16}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">
                    Bathroom
                  </label>
                  <div className="relative">
                    <select
                      value={bathroom}
                      onChange={(e) => {
                        setBathroom(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg appearance-none bg-white cursor-pointer"
                    >
                      <option>Any</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                      size={16}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100  mx-4"></div>

            {/* Amenities */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Amenities</h3>
              <div className="flex flex-wrap gap-2">
                {amenities.map((amenity) => (
                  <button
                    key={amenity}
                    onClick={() => toggleAmenity(amenity)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedAmenities.includes(amenity)
                        ? "bg-gradient-to-t from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {amenity}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Property Grid */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center mb-6">
              <p className="text-gray-600">
                <span className="font-semibold">Showing Result:</span>
                <span className="border border-gray-200 py-2 px-3 rounded-lg mx-3">
                  {startIndex + 1} -{" "}
                  {Math.min(endIndex, filteredAndSortedProperties.length)} of{" "}
                  {filteredAndSortedProperties.length}
                </span>
              </p>
              <div className="flex items-center gap-3">
                <span className="text-gray-600">Short By:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-gray-200 rounded-lg appearance-none bg-white cursor-pointer pr-10"
                  >
                    <option value="default">Default Sorting</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="sqft-low">Size: Small to Large</option>
                    <option value="sqft-high">Size: Large to Small</option>
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                    size={16}
                  />
                </div>
              </div>
            </div>

            {/* Property Cards Grid */}
            {currentProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {currentProperties.map((property) => (
                  <div
                    key={property.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-64 overflow-hidden group">
                      <img
                        src={property.image}
                        alt={property.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        ❤️
                      </button>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {property.name}
                        </h3>
                        <span className="text-xl font-bold text-gray-900">
                          ${property.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <MapPin size={16} className="mr-1" />
                        {property.location}
                      </div>
                      <div className="flex items-center gap-6 text-gray-600 text-sm">
                        <div className="flex items-center gap-2">
                          <Bed size={18} />
                          <span>{property.beds} Beds</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Bath size={18} />
                          <span>{property.baths} Baths</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Maximize size={18} />
                          <span>{property.sqft.toLocaleString()} sqft</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-gray-500">
                  No properties found matching your filters.
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Try adjusting your search criteria.
                </p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={20} />
                </button>

                {getPaginationRange().map((page, index) =>
                  page === "..." ? (
                    <span key={`dots-${index}`} className="px-2">
                      ...
                    </span>
                  ) : (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        currentPage === page
                          ? "bg-green-500 text-white"
                          : "border border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
