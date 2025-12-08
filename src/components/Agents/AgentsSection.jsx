import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AgentsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const agentsPerPage = 6;

  const agents = [
    {
      id: 1,
      name: "Arnold Alexander",
      listings: 140,
      title: "Real Estate Agent",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces",
    },
    {
      id: 2,
      name: "Kevin Nolan",
      listings: 184,
      title: "Real Estate Agent",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces",
    },
    {
      id: 3,
      name: "James Smith",
      listings: 152,
      title: "Real Estate Agent",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces",
    },
    {
      id: 4,
      name: "John Gallagher",
      listings: 208,
      title: "Real Estate Agent",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
    },
    {
      id: 5,
      name: "Steevan Bob",
      listings: 189,
      title: "Real Estate Agent",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces",
    },
    {
      id: 6,
      name: "Denis Peter",
      listings: 164,
      title: "Real Estate Agent",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces",
    },
    {
      id: 7,
      name: "Michael Brown",
      listings: 195,
      title: "Real Estate Agent",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces",
    },
    {
      id: 8,
      name: "Sarah Johnson",
      listings: 177,
      title: "Real Estate Agent",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces",
    },
    {
      id: 9,
      name: "David Wilson",
      listings: 143,
      title: "Real Estate Agent",
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop&crop=faces",
    },
    {
      id: 10,
      name: "Emma Davis",
      listings: 201,
      title: "Real Estate Agent",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=faces",
    },
    {
      id: 11,
      name: "Robert Taylor",
      listings: 156,
      title: "Real Estate Agent",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&crop=faces",
    },
    {
      id: 12,
      name: "Lisa Anderson",
      listings: 188,
      title: "Real Estate Agent",
      image:
        "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&h=400&fit=crop&crop=faces",
    },
  ];

  const totalPages = Math.ceil(agents.length / agentsPerPage);
  const indexOfLastAgent = currentPage * agentsPerPage;
  const indexOfFirstAgent = indexOfLastAgent - agentsPerPage;
  const currentAgents = agents.slice(indexOfFirstAgent, indexOfLastAgent);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 4;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 2) {
        for (let i = 1; i <= 3; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 1) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="bg-gray-50">
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-white rounded-full text-sm text-gray-600 mb-4">
              Our Agents
            </span>
            <h1 className="text-4xl font-playfair md:text-5xl mb-4">
              Meet Our{" "}
              <span
                className="bg-gradient-to-t to-[#0BC147] from-[#b6f50a] 
               bg-clip-text text-transparent italic"
              >
                Trusted Agents
              </span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced professionals ready to guide you through every step of
              your property journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {currentAgents.map((agent) => (
              <div
                key={agent.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-80 bg-gradient-to-br from-green-100 to-green-200 overflow-hidden">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {agent.name}
                      </h3>
                      <p className="text-sm text-gray-500">{agent.title}</p>
                    </div>
                    <div className=" flex gap-3 items-center text-right text-xl font-semibold text-gray-900">
                      <p>{agent.listings}</p>
                      <p>Listings</p>
                    </div>
                  </div>
                  <button className="mt-4">
                    <Link
                      to={"/agent-details/:id"}
                      className="w-full border border-gray-200 py-4 px-6 rounded-xl text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
                    >
                      View Details
                    </Link>
                  </button>
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
                <span key={`ellipsis-${index}`} className="text-gray-500 px-2">
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
  );
}
