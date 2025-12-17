import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Buying a home felt overwhelming at first, but ZedProperty made the entire process smooth and stress-free. Their agent really listened to my needs, showed me properties within my budget, and guided me through the paperwork step by step.",
      name: "Farha Khan",
      role: "First-time Homebuyer",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      id: 2,
      rating: 5,
      text: "I was worried about how long it would take to sell my apartment, but ZedProperty exceeded my expectations. Their team created a professional listing with great photos, promoted it across their network, and within a few weeks I had multiple offers.",
      name: "Imran Hossain",
      role: "Property Owner",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      id: 3,
      rating: 5,
      text: "As an investor, I've worked with many agencies, but ZedProperty stands out. Their market knowledge, professional advice, and strong property network gave me confidence in making the right decisions.",
      name: "Mariya",
      role: "Real Estate Investor",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
      id: 4,
      rating: 5,
      text: "Exceptional service from start to finish! The team was responsive, knowledgeable, and made our dream home a reality. Couldn't have asked for a better experience.",
      name: "David Martinez",
      role: "Home Owner",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    {
      id: 5,
      rating: 5,
      text: "Professional, efficient, and trustworthy. ZedProperty helped me find the perfect investment property and handled all negotiations expertly. Highly recommended!",
      name: "Sarah Johnson",
      role: "Property Investor",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    },
    {
      id: 6,
      rating: 5,
      text: "Outstanding experience! They understood exactly what we were looking for and delivered beyond expectations. The entire process was transparent and smooth.",
      name: "Ahmed Ali",
      role: "First-time Buyer",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    },
  ];

  const itemsPerPage = 3;
  const maxIndex = Math.ceil(testimonials.length / itemsPerPage) - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <div className="bg-gray-100 p-5 sm:p-8 font-manrope">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-gray-500 text-sm mb-2 font-manrope">
              Testimonial
            </p>
            <h1 className="text-3xl sm:text-5xl font-serif">
              Client{" "}
              <span
                className="bg-gradient-to-t to-[#0BC147] from-[#b6f50a] 
  bg-clip-text text-transparent italic"
              >
                Testimonial
              </span>
            </h1>
          </div>

          <div className="flex gap-2 p-1 border border-lime-400 rounded-full">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-green-100 hover:bg-gradient-to-t to-[#0BC147] from-[#b6f50a] hover:text-white transition-colors flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-gradient-to-t to-[#0BC147] from-[#b6f50a] hover:bg-lime-400 hover:text-white transition-colors flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id={`starGradient${i}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: "#0BC147", stopOpacity: 1 }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: "#b6f50a", stopOpacity: 1 }}
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill={`url(#starGradient${i})`}
                      stroke={`url(#starGradient${i})`}
                      strokeWidth="1"
                    />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                {/* Google */}
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8" viewBox="0 0 48 48">
                    <path
                      fill="#4285F4"
                      d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
                    />
                    <path
                      fill="#34A853"
                      d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
                    />
                    <path
                      fill="#EA4335"
                      d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-t to-[#0BC147] from-[#b6f50a]  w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
