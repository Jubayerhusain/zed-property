import React from "react";
import Icon from "../../assets/Contact-assets/FAQ Question Icon.png";
import Icon1 from "../../assets/Contact-assets/FAQ Question Icon (1).png";

const Question = () => {
  return (
    <div>
      <div className=" text-center py-5">
        <button class=" text-[16px] px-3 py-2 bg-[#FFFFFF] text-gray-500 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
          Contact Us
        </button>
        <h1 className=" text-3xl sm:text-[48px] py-5">
          Frequently Asked
          <a
            className="bg-gradient-to-t to-[#0BC147] from-[#b6f50a] 
               bg-clip-text text-transparent italic  "
          >
            Questions{" "}
          </a>{" "}
        </h1>
        <p className=" text-[16px] text-[#171C19B2] font-medium">
          Quick answers to common questions about buying, selling, and renting
          with ZedProperty.
        </p>
      </div>
      <div className=" grid grid-cols-1 gap-5">
        {/* 1st  */}
        <div className="w-[660px] h-44 p-5 border border-gray-100 mx-auto ">
          <div className="flex py-5 justify-between">
            <h1 className=" text-[20px] font-semibold ">
              How to start the property buying process?
            </h1>
            <div>
              <img src={Icon} alt="" />
            </div>
          </div>
          <p className=" text-[14px] text-[#171C19B2] font-medium">
            To get started, simply reach out to our team or complete the form on
            the “Contact Us” page. Once we receive your details, one of our
            dedicated representatives will connect with you to discuss your
            specific needs and preferences.
          </p>
        </div>
        {/* 2nd  */}
        <div className="flex w-[660px] px-5 py-2 border border-gray-100 rounded-xl mx-auto justify-between">
          <h1 className=" text-[20px] text-[#171C19] font-semibold ">
            Is there financing or credit help for property?
          </h1>
          <div>
            <img src={Icon1} alt="" />
          </div>
        </div>
        {/* 3rd  */}
        <div className="flex w-[660px] px-5 py-2 border border-gray-100 rounded-xl mx-auto justify-between">
          <h1 className=" text-[20px] text-[#171C19] font-semibold ">
            Can I buy property from overseas?
          </h1>
          <div>
            <img src={Icon1} alt="" />
          </div>
        </div>
        {/* 4th  */}
        <div className="flex w-[660px] px-5 py-2 border border-gray-100 rounded-xl mx-auto justify-between">
          <h1 className=" text-[20px] text-[#171C19] font-semibold ">
            What are the requirements to apply for a purchase?
          </h1>
          <div>
            <img src={Icon1} alt="" />
          </div>
        </div>
        {/* 5th  */}
        <div className="flex w-[660px] px-5 py-2 border border-gray-100 rounded-xl mx-auto justify-between">
          <h1 className=" text-[20px] text-[#171C19] font-semibold ">
            Are there extra fees beyond the property price?
          </h1>
          <div>
            <img src={Icon1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
