import React from "react";
import PropertyHero from "../components/propertyDetails/PropertyHero";
import DetailsProperty from "../components/propertyDetails/DetailsProperty";

const PropertyDetails = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <PropertyHero />
      <div className="flex justify-between items-center gap-5">
        {/* left */}
        <div className="w-8/12 ">
          <DetailsProperty />
        </div>

        {/* right */}
        <div className="w-3/12"></div>
      </div>
    </div>
  );
};

export default PropertyDetails;
