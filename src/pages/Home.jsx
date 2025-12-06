import React from "react";
import Hero from "../components/home/Hero";
import TrustedPartner from "../components/home/TrustedPartner";
import FeaturedListings from "../components/home/FeaturedListings";
import JourneySimplified from "./../assets/home-assets/JourneySimplified";
import RealEstateListings from "../components/home/RealEstateListings";
import TestimonialCarousel from "../components/home/TestimonialCarousel";
import BlogArticleCarousel from './../components/home/BlogArticleCarousel';
import ContactForm from '../components/Shared/ContactForm';

const Home = () => {
  return (
    <div className="font-playfair">
      <Hero />
      <TrustedPartner />
      <FeaturedListings />
      <JourneySimplified />
      <RealEstateListings />
      <TestimonialCarousel />
      <BlogArticleCarousel />
      <ContactForm />
    </div>
  );
};

export default Home;
