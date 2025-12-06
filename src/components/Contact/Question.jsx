import React from "react";
import Icon from "../../assets/Contact-assets/FAQ Question Icon.png";
import Icon1 from "../../assets/Contact-assets/FAQ Question Icon (1).png";

const Question = () => {
  return (
    <div className="pb-20 bg-[#FAFAFA] ">
      <div className="max-w-[1440px]  mx-auto">
        <div className=" text-center py-5">
          <button class=" text-[16px] px-3 py-2 bg-[#FFFFFF] text-gray-500 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            FAQ
          </button>
          <h1 className=" font-playfair text-3xl sm:text-[48px] py-5">
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
        <div className=" w-full sm:w-[660px] mx-auto grid grid-cols-1 gap-5">
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-semibold">
                How to start the property buying process?
            </div>
            <div className="collapse-content text-sm">
             To get started, simply reach out to our team or complete the form on the “Contact Us” page. Once we receive your details, one of our dedicated representatives will connect with you to discuss your specific needs and preferences.
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-[#171C19B2] font-semibold">
                Is there financing or credit help for property?
            </div>
            <div className="collapse-content  text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugit, deleniti animi at minus tenetur quam cupiditate dignissimos similique et aliquam eum. Iure cupiditate amet eius voluptatum accusamus deleniti quisquam.
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-[#171C19B2] font-semibold">
                Can I buy property from overseas?
            </div>
            <div className="collapse-content text-[#171C19B2] text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique minima rerum quaerat repellendus, beatae et excepturi quibusdam nihil suscipit obcaecati tempora eum facilis impedit! Alias et nulla quo suscipit sapiente.
            </div>
          </div> 
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-[#171C19B2] font-semibold">
                What are the requirements to apply for a purchase?
            </div>
            <div className="collapse-content text-[#171C19B2] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur veniam impedit hic quia placeat officia molestias accusamus vero. Assumenda perferendis explicabo et provident magnam ut inventore iste deleniti facilis eos.
            </div>
          </div> 
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-[#171C19B2] font-semibold">
                Are there extra fees beyond the property price?
            </div>
            <div className="collapse-content text-[#171C19B2] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quaerat sapiente cupiditate rem dignissimos obcaecati. Quasi, autem corrupti voluptatem enim facere, eveniet facilis suscipit corporis nam qui blanditiis aliquam nobis?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
