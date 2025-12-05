import React from "react";
import img1 from "../../assets/About-assets/Property Card Image.png";
import img2 from "../../assets/About-assets/Property Card Image (1).png";
import img3 from "../../assets/About-assets/Property Card Image (2).png";

const Founder = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-5 sm:px-0 py-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <button className="text-[16px] px-4 py-2 bg-[#F7F7F7] text-gray-500 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
          Founder & Co-Founder
        </button>

        <h1 className="text-3xl sm:text-5xl font-playfair pt-5 leading-snug">
          The Vision Behind{" "}
          <span className="bg-gradient-to-t to-[#0BC147] from-[#b6f50a] bg-clip-text text-transparent italic">
            ZedProperty
          </span>
        </h1>

        <p className="text-[16px] text-[#171C19B2] font-medium max-w-2xl mx-auto pt-3">
          Meet the leaders shaping the future of real estate with passion and
          integrity.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1st card */}
        <div className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-4">
          <figure className="rounded-lg overflow-hidden">
            <img src={img1} alt="Founder" className="rounded-lg w-full" />
          </figure>
          <h2 className="text-2xl font-semibold pt-4 text-center sm:text-start">
            Nathaniel Brooks
          </h2>
          <p className="text-[16px] text-[#A5A5A5] pt-2 text-center sm:text-start">
            CEO Nathaniel Brooks has 8+ years in property and tech. He aims to
            simplify finding dream homes with user-focused innovations.
          </p>
        </div>

        {/* 2nd card */}
        <div className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-4">
          <figure className="rounded-lg overflow-hidden">
            <img src={img2} alt="Co-Founder" className="rounded-lg w-full" />
          </figure>
          <h2 className="text-2xl font-semibold pt-4 text-center sm:text-start">
            Sarah Mitchell
          </h2>
          <p className="text-[16px] text-[#A5A5A5] pt-2 text-center sm:text-start">
            Sarah brings strategic planning and a strong vision for modern
            living solutions, ensuring every property meets future standards.
          </p>
        </div>

        {/* 3rd card */}
        <div className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-4">
          <figure className="rounded-lg overflow-hidden">
            <img src={img3} alt="Team Lead" className="rounded-lg w-full" />
          </figure>
          <h2 className="text-2xl font-semibold pt-4 text-center sm:text-start">
            Michael Johnson
          </h2>
          <p className="text-[16px] text-[#A5A5A5] pt-2 text-center sm:text-start">
            Michael ensures seamless operations and brings innovative ideas to
            enhance user experience in real estate browsing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founder;
