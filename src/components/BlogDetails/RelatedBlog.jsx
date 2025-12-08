import React from "react";
import image1 from "../../assets/Blog-assets/Listing Image.png";
import image2 from "../../assets/Blog-assets/Listing Image (2).png";
import image3 from "../../assets/Blog-assets/Listing Image (1).png";

const RelatedBlog = () => {
  return (
    <div className=" bg-[#FAFAFA] border border-[#F3F3F3] rounded-xl mx-5">
      <div className=" py-10 sm:py-20 sm:mx-5 mx-4">
        <div className=" text-center ">
          <button class=" text-[16px]  px-3 py-2 bg-white text-gray-500 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            Related Blog
          </button>
          <h1 className="font-playfair text-3xl sm:text-[48px] py-5 font-normal">
            <a
              className="bg-gradient-to-t to-[#0BC147] from-[#b6f50a] 
               bg-clip-text text-transparent italic  "
            >
              Similar Homes e{" "}
            </a>{" "}
            You May Lik
          </h1>
          <p className=" text-[16px] py-5 text-[#171C19B2] font-medium">
            Discover more options that match your preferences and lifestyle.
          </p>
        </div>
        {/* this is a card section  */}
        <div className=" grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* 1st card  */}
          <div className="card bg-base-100 w-full h-full rounded-xl shadow-sm">
            <figure className="px-5 pt-5">
              <img
                src={image1}
                alt="homes"
                className="rounded-xl w-full h-full object-cover "
              />
            </figure>
            <div className="card-body items-start text-start">
              <h2 className="card-title text-xl font-semibold">
                Tips for Quick Property Sales
              </h2>
              <p className=" text-[16px] text-[#171C19B2] font-medium">
                Check out these effective strategies that will help you attract
                potential buyers and accelerate sales.
              </p>
            </div>
          </div>
          {/* 2nd card  */}
          <div className="card bg-base-100 w-full h-full rounded-xl shadow-sm">
            <figure className="px-5 pt-5">
              <img
                src={image2}
                alt="homes"
                className="rounded-xl w-full h-full object-cover "
              />
            </figure>
            <div className="card-body items-start text-start">
              <h2 className="card-title text-xl font-semibold">
                Learning Property Taxes and Fees
              </h2>
              <p className=" text-[16px] text-[#171C19B2] font-medium">
                Learn about common overlooked fees and taxes when buying or
                selling property.
              </p>
            </div>
          </div>
          {/* 3rd  */}
          <div className="card bg-base-100 w-full h-full rounded-xl shadow-sm">
            <figure className="px-5 pt-5">
              <img
                src={image3}
                alt="homes"
                className="rounded-xl w-full h-full object-cover "
              />
            </figure>
            <div className="card-body items-start text-start">
              <h2 className="card-title text-xl font-semibold">
                Renovate to Boost Property Value
              </h2>
              <p className=" text-[16px] text-[#171C19B2] font-medium">
              Want to boost your property's value? Explore remodeling ideas to
             increase appeal and price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedBlog;
