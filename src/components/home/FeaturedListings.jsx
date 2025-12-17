import React from 'react';
import { MapPin, Bed, Bath, Maximize } from 'lucide-react';
import maximize from '../../assets/home-assets/maximize-3.png'
import solar_bath_linear from '../../assets/home-assets/solar_bath-linear.png'
import solar_bed_broken from '../../assets/home-assets/solar_bed-broken.png'
import { Link } from 'react-router-dom';


export default function FeaturedListings() {
  
    const properties = [
    {
      id: 1,
      title: "Classic Damara",
      price: "$480,500",
      location: "Lusaka, Kitwe and Ndola",  
      beds: 4,
      baths: 2,
      sqft: "2,826",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Manstret Haven",
      price: "$425,000",
      location: "Lusaka, Kitwe and Ndola",
      beds: 4,
      baths: 2,
      sqft: "2,820",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Boston Retreat",
      price: "$350,800",
      location: "Lusaka, Kitwe and Ndola",
      beds: 3,
      baths: 2,
      sqft: "2,640",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Phenix Otica",
      price: "$428,100",
      location: "Lusaka, Kitwe and Ndola",
      beds: 3,
      baths: 2,
      sqft: "2,598",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Welvore Henix",
      price: "$480,500",
      location: "Lusaka, Kitwe and Ndola",
      beds: 4,
      baths: 2,
      sqft: "2,882",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Havasu Bave",
      price: "$398,600",
      location: "Lusaka, Kitwe and Ndola",
      beds: 3,
      baths: 2,
      sqft: "2,466",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-4 lg:px-8 font-manrope">
      <div className="max-w-[1440px] mx-auto">

        <div className="text-center mb-12">
          <p className="text-sm text-gray-800 mb-2">Popular Property</p>
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-t to-[#0BC147] from-[#b6f50a] 
  bg-clip-text text-transparent italic">Listings</span>
          </h2>
          <p className="text-gray-500 text-sm">
            Discover the most sought-after properties handpicked for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Link to={'/property-details/:id'}
              key={property.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{property.title}</h3>
                  <p className="text-lg font-bold text-gray-900">{property.price}</p>
                </div>

                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{property.location}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center text-gray-600 text-sm">
                    <img src={solar_bed_broken} alt="Beds" className="w-4 h-4 mr-1" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <img src={solar_bath_linear} alt="Baths" className="w-4 h-4 mr-1" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <img src={maximize} alt="Square Feet" className="w-4 h-4 mr-1" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}