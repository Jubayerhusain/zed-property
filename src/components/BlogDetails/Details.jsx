import React from "react";
import imag1 from "../../assets/Blog-assets/Blog Image.png";
import imag2 from "../../assets/Blog-assets/Section 2 Image.png";

const Details = () => {
  return (
    <div>

      <div className=" sm:mx-5 " >
        <div className=" text-center py-5">
          <button class=" text-[16px] mt-4 px-3 py-2 bg-white text-gray-500 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            Blog Detail
          </button>
          <h1 className="font-playfair text-3xl sm:text-[48px] py-5 font-normal">
            In-Depth
            <a
              className="bg-gradient-to-t to-[#0BC147] from-[#b6f50a] 
               bg-clip-text text-transparent italic  "
            >
              Real Estate{" "}
            </a>{" "}
            Knowledge
          </h1>
          <p className=" text-[16px] text-[#171C19B2] font-medium">
            Explore expert articles and detailed insights to make informed
            decisions.
          </p>
        </div>
        <div>
          <div className="w-full h-[266px] sm:h-[540px] rounded sm:rounded-xl">
            <img
              src={imag1}
              alt=""
              className=" w-full h-full rounded sm:rounded-xl object-cover"
            />
          </div>
        </div>
      </div>

      <div className="my-10 mx-5 grid grid-cols-1 sm:grid-cols-12 gap-5">
        {/* left side  */}
        <div className=" sm:col-span-4 sm:h-[430px] px-5 border border-gray-100 rounded-xl">
          {/* 1st  */}
          <div>
            <h1 className=" text-[24px] py-5 border-b border-gray-100 font-semibold">
              Table Of Content
            </h1>
          </div>
          {/* 2nd   */}
          <div>
            <h1 className=" text-xl py-5 border-b border-gray-100 font-medium">
              Property Investment Guide, A Beginner's Path to Success
            </h1>
          </div>
          {/* 3rd  */}
          <div>
            <h1 className=" text-xl text-[#171C19B2] py-5 border-b border-gray-100 font-medium">
                Why Invest in Property?
            </h1>
          </div>
          {/* 4th  */}
          <div>
            <h1 className=" text-xl text-[#171C19B2] py-5 border-b border-gray-100 font-medium">
                Choosing the Right Property
            </h1>
          </div>
          {/* 5th  */}
          <div>
            <h1 className=" text-xl text-[#171C19B2] py-5  font-medium">
                Long-term Strategy in Property Investment
            </h1>
          </div>
        </div>
        {/* rite side  */}
        <div className=" sm:col-span-8 w-full grid grid-cols-1  border border-gray-100 p-5 rounded-xl">
          {/* 1st */}
          <div className="border-b border-gray-100 pb-5">
            <h1 className="text-[24px] font-semibold">
              Property Investment Guide, A Beginner's Path to Success
            </h1>
            <h2 className="text-lg text-[#171C19B2] font-medium">
              Investing in property can be a lucrative way to build wealth, but
              it can also be overwhelming for beginners. Whether you're looking
              to buy your first home or venture into real estate investment,
              understanding the basics is crucial. This guide will help you
              navigate the key steps to make informed decisions and succeed in
              the world of property investment.
            </h2>
          </div>
          {/* 2nd */}
          <div className="border-b border-gray-100 py-5">
            <h1 className="text-[24px] font-semibold pb-5 ">
              Why Invest in Property?
            </h1>
            <div className="w-full h-[161px] sm:h-[456px] rounded-xl">
              <img
                src={imag2}
                alt=""
                className=" w-full h-full rounded-xl object-cover"
              />
            </div>
            <h2 className="text-lg pt-5 text-[#171C19B2] font-medium">
              Property investment has long been considered one of the most
              reliable and profitable ways to grow wealth. Unlike stocks or
              bonds, real estate provides both short-term rental income and
              long-term appreciation. It also offers tangible ownership and the
              potential for tax benefits. With the right strategy, property can
              be a steady source of income and financial security.
            </h2>
          </div>
          {/* 3rd */}
          <div className="border-b border-gray-100 pb-5">
            <h1 className="text-[24px] font-semibold">
              Choosing the Right Property
            </h1>
            <h2 className=" text-lg text-[#171C19B2] font-medium">
              Choose the property type that fits your investment goals. Common
              choices include:
            </h2>
            <ul className="list-disc text-lg text-[#171C19B2] pl-5 font-medium">
              <li>
                Residential Property: A house or apartment that is rented out to
                tenants.
              </li>
              <li>
                Commercial Property: Buildings that are leased to businesses,
                such as offices or shop houses.
              </li>
              <li>
                Industrial Property: Warehouses and production facilities leased
                for industrial activities.
              </li>
            </ul>
          </div>
          {/* 4th */}
          <div className="pb-5">
            <h1 className="text-[24px] font-semibold">Long-term Strategy in Property Investment</h1>
            <h2 className="text-lg text-[#171C19B2] font-medium">
                Property investment is a long-term game. Focus on purchasing properties with good growth potential and make repairs or renovations to increase their value. Diversify your property portfolio to reduce risk and maintain financial stability in the long run.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
