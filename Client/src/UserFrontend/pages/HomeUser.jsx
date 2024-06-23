import React from "react";
import HeroSection from "../components/HeroSection";
import Destinations from "../components/Destinations";
import Services from "../components/Services";
import Hotels from "../components/Hotels";
import NewsLetter from "../components/NewsLetter";
import Advertisements from "../components/Advertisements";
import Footer from "../components/Footer";

const HomeUser = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <Destinations />
      <Services />
      <Hotels />
      <NewsLetter />
      <Advertisements />
      <Footer />
    </div>
  );
};

export default HomeUser;
