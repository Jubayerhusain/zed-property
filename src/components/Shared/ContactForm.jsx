import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import contactImage from "../../assets/home-assets/contact.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    propertyType: "",
    budgetRange: "",
    location: "",
    message: "",
  });

  const propertyTypes = [
    "Residential",
    "Commercial",
    "Land",
    "Apartment",
    "Villa",
    "Office",
  ];
  const budgetRanges = [
    "ZMW 100,000 - ZMW 250,000",
    "ZMW 250,000 - ZMW 500,000",
    "ZMW 500,000 - ZMW 1,000,000",
    "ZMW 1,000,000 - ZMW 2,500,00",
    "ZMW 2,5M+",
  ];
  const locations = [
    "Lusaka",
    "Kitwe",
    "Ndola",
    "Chipata",
    "Kabwe",
    "Chingola",
    "Mufulira",
    "Luanshya",
    "Livingstone",
    "Kasama",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.propertyType ||
      !formData.budgetRange ||
      !formData.location ||
      !formData.message
    ) {
      alert("Please fill in all fields");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      propertyType: "",
      budgetRange: "",
      location: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white px-8 py-18">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-500 text-sm mb-2 font-manrope">Contact Us</p>
          <h1 className="text-3xl sm:text-5xl font-serif mb-4">
            Let's Get in{" "}
            <span
              className="bg-gradient-to-t to-[#0BC147] from-[#b6f50a] 
  bg-clip-text text-transparent italic"
            >
              Touch
            </span>
          </h1>
          <p className="text-gray-600 font-manrope">
            Have questions? Our team is here to guide you every step of the way.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center bg-white rounded-3xl overflow-hidden font-manrope">
          <div className="relative w-full sm:w-[408px] h-auto sm:h-[546px] bg-gradient-to-br from-green-50 to-green-100 rounded-xl overflow-hidden">
            <img
              src={contactImage}
              alt="Customer Support"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="sm:p-8 lg:p-12 w-full sm:w-10/12">
            <div className="space-y-6 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <div className="relative">
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white cursor-pointer"
                    >
                      <option value="">Select type</option>
                      {propertyTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <div className="relative">
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white cursor-pointer"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location Preferences
                  </label>
                  <div className="relative">
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white cursor-pointer"
                    >
                      <option value="">Select location</option>
                      {locations.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-t from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600  text-white font-semibold py-3 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
