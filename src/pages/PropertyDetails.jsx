import React from "react";
import PropertyHero from "../components/propertyDetails/PropertyHero";
import DetailsProperty from "../components/propertyDetails/DetailsProperty";
import Leftsit from "../components/propertyDetails/Leftsit";

const PropertyDetails = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <PropertyHero />
      <div className="flex flex-col sm:flex-row justify-between  gap-5 sm:gap-10 sm:px-5">
        {/* left */}
        <div className="">
          <DetailsProperty />
        </div>

        {/* right */}
        <div className="">
          <Leftsit></Leftsit>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
