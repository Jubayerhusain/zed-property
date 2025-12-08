import React from "react";
import { MapPin, Home, Bath, Utensils, Bed, Warehouse, LayoutGrid, CheckSquare, Calendar } from "lucide-react";

export default function DetailsProperty() {
  return (
    <div className=" max-w-4xl border border-gray-200 rounded-lg sm:rounded-2xl mx-4 p-5 bg-white">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Manstret Haven / $425,000
        </h1>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={20} />
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
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
            <div className="text-green-500">
              <Home size={24} />
            </div>
            <div>
              <div className="text-gray-900 font-semibold">Rooms</div>
              <div className="text-gray-600">6</div>
            </div>
          </div>

          {/* Baths */}
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
            <div className="text-green-500">
              <Bath size={24} />
            </div>
            <div>
              <div className="text-gray-900 font-semibold">Baths</div>
              <div className="text-gray-600">2</div>
            </div>
          </div>

          {/* Kitchen */}
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
            <div className="text-green-500">
              <Utensils size={24} />
            </div>
            <div>
              <div className="text-gray-900 font-semibold">Kitchen</div>
              <div className="text-gray-600">1</div>
            </div>
          </div>

          {/* Year Build */}
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
            <div className="text-green-500">
              <Calendar size={24} />
            </div>
            <div>
              <div className="text-gray-900 font-semibold">Year Build</div>
              <div className="text-gray-600">2024</div>
            </div>
          </div>

          {/* Beds */}
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
            <div className="text-green-500">
              <Bed size={24} />
            </div>
            <div>
              <div className="text-gray-900 font-semibold">Beds</div>
              <div className="text-gray-600">4</div>
            </div>
          </div>

          {/* Garage */}
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
            <div className="text-green-500">
              <Warehouse size={24} />
            </div>
            <div>
              <div className="text-gray-900 font-semibold">Garage</div>
              <div className="text-gray-600">1</div>
            </div>
          </div>

          {/* Type */}
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
            <div className="text-green-500">
              <LayoutGrid size={24} />
            </div>
            <div>
              <div className="text-gray-900 font-semibold">Type</div>
              <div className="text-gray-600">House</div>
            </div>
          </div>

          {/* Sqft */}
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
            <div className="text-green-500">
              <CheckSquare size={24} />
            </div>
            <div>
              <div className="text-gray-900 font-semibold">Sqft</div>
              <div className="text-gray-600">2,820</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}