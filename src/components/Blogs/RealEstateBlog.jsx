import React, { useState } from "react";
import { Search, ChevronLeft, ChevronRight, Divide } from "lucide-react";

export default function RealEstateBlog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const blogPosts = [
    {
      id: 1,
      title: "Property Investment Guide",
      description:
        "Start your investment journey with this guide for beginners eager to explore property.",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Top 10 Trends in Property",
      description:
        "Discover the latest property trends and insights that could influence your decision.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Choosing the Ideal Property Location",
      description:
        "Location is key! Learn the factors for choosing the best spot for your investment or home.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Tips for Quick Property Sales",
      description:
        "Check out these effective strategies that will help you attract potential buyers and accelerate sales.",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    },
    {
      id: 5,
      title: "Understanding Property Fees",
      description:
        "Learn about common overlooked fees and taxes when buying or selling property.",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
    },
    {
      id: 6,
      title: "Renovate to Boost Property Value",
      description:
        "Want to boost your property's value? Explore remodeling ideas to increase appeal and price.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
    },
    {
      id: 7,
      title: "Modern Home Design Trends",
      description:
        "Explore the latest architectural styles and interior design trends transforming homes today.",
      image:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop",
    },
    {
      id: 8,
      title: "Smart Home Technology Guide",
      description:
        "Discover how smart technology can enhance your property value and living experience.",
      image:
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&h=600&fit=crop",
    },
    {
      id: 9,
      title: "Sustainable Property Solutions",
      description:
        "Learn about eco-friendly building practices and sustainable living options for modern homes.",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
    },
    {
      id: 10,
      title: "First-Time Buyer Tips",
      description:
        "Essential advice for first-time home buyers to navigate the property market with confidence.",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
    },
    {
      id: 11,
      title: "Luxury Property Features",
      description:
        "Discover the must-have features that define luxury properties in today's real estate market.",
      image:
        "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=800&h=600&fit=crop",
    },
    {
      id: 12,
      title: "Property Market Analysis",
      description:
        "Get insights into current market trends and learn how to make informed investment decisions.",
      image:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop",
    },
    {
      id: 13,
      title: "Home Staging Secrets",
      description:
        "Professional staging tips to make your property stand out and attract more potential buyers.",
      image:
        "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&h=600&fit=crop",
    },
    {
      id: 14,
      title: "Mortgage and Financing Guide",
      description:
        "Navigate the complexities of property financing with this comprehensive mortgage guide.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    },
    {
      id: 15,
      title: "Property Investment ROI",
      description:
        "Learn how to calculate and maximize your return on investment in real estate properties.",
      image:
        "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&h=600&fit=crop",
    },
    {
      id: 16,
      title: "Neighborhood Selection Guide",
      description:
        "Find the perfect neighborhood that matches your lifestyle and investment goals.",
      image:
        "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&h=600&fit=crop",
    },
    {
      id: 17,
      title: "Commercial Property Insights",
      description:
        "Explore opportunities in commercial real estate and understand the key differences from residential.",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
    },
    {
      id: 18,
      title: "Property Tax Strategies",
      description:
        "Smart tax planning strategies for property owners to minimize liabilities and maximize benefits.",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
    },
  ];

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <>
      <div className="bg-gray-50">
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-white rounded-full text-sm text-gray-600 mb-4">
                Blog
              </span>
              <h1 className="text-4xl md:text-5xl font-serif mb-4 font-playfair">
                Insights & Tips on
                <span className="bg-gradient-to-t pl-5 to-[#0BC147] from-[#b6f50a] 
               bg-clip-text text-transparent italic">
                Real Estate
                </span>
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Stay updated with market trends, investment advice, and property
                guides.
              </p>
            </div>

            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-3 pr-12 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-t to-[#0BC147] from-[#b6f50a] text-white p-2 rounded-full hover:bg-green-600 transition">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="px-6 py-2 bg-white rounded-full text-gray-700 hover:bg-gray-100 transition">
                Latest Property Trends
              </button>
              <button className="px-6 py-2 bg-white rounded-full text-gray-700 hover:bg-gray-100 transition">
                Ideal Property Location
              </button>
              <button className="px-6 py-2 bg-white rounded-full text-gray-700 hover:bg-gray-100 transition">
                Property Buying Guide
              </button>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex flex-wrap justify-center items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              {getPageNumbers().map((page, index) =>
                page === "..." ? (
                  <span
                    key={`ellipsis-${index}`}
                    className="text-gray-500 px-2"
                  >
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-lg font-medium transition ${
                      currentPage === page
                        ? "bg-gradient-to-t to-[#0BC147] from-[#b6f50a] text-white"
                        : "hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
