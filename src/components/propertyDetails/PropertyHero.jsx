import React from "react";

export default function PropertyHero() {
  return (
    <div className="bg-white p-4 mb-8">
      <div className="flex flex-col sm:flex-row items-stretch gap-5 sm:h-[560px]">
        <div className="sm:flex-1">
          <img
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80"
            alt=""
            className="w-full h-[200px] lg:h-full object-cover rounded-2xl"
          />
        </div>

        <div className="flex flex-row sm:flex-col gap-5 w-full sm:w-[400px] ">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center">
              <div className="text-white text-2xl sm:text-3xl font-bold">12+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}