import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BlogArticleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const articles = [
    {
      id: 1,
      title: "Property Investment Guide",
      description: "Start your investment journey with this guide for beginners eager to explore property.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Top 10 Trends in Property",
      description: "Discover the latest property trends and insights that could influence your decision.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Choosing the Ideal Property Location",
      description: "Location is key! Learn the factors for choosing the best spot for your investment or home.",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Smart Home Technology Guide",
      description: "Explore how smart home features can increase your property value and improve living comfort.",
      image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "First-Time Buyer's Checklist",
      description: "Everything you need to know before purchasing your first property, from financing to closing.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      title: "Property Market Analysis 2025",
      description: "In-depth look at current market conditions, predictions, and opportunities for investors.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop"
    }
  ];

  const itemsPerPage = 3;
  const maxIndex = Math.ceil(articles.length / itemsPerPage) - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const visibleArticles = articles.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <div className="bg-gray-50 p-8">
      <div className="max-w-[1440px] mx-auto">

        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-gray-500 text-sm mb-2 font-manrope">Blog</p>
            <h1 className="text-5xl font-serif">
              Our <span className="bg-gradient-to-t to-[#0BC147] from-[#b6f50a] 
  bg-clip-text text-transparent italic">Article</span>
            </h1>
          </div>
          
          {/*Buttons */}
          <div className="flex gap-2 border p-1 border-lime-400 rounded-full">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-green-100 hover:bg-gradient-to-t to-[#0BC147] from-[#b6f50a]  hover:text-white transition-colors flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-gradient-to-t to-[#0BC147] from-[#b6f50a]  hover:bg-lime-500 text-white transition-colors flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-manrope">
          {visibleArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-t to-[#0BC147] from-[#b6f50a]  w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogArticleCarousel;