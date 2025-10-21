import React from "react";
import Banner from "../components/Banner";
import Testimonial from "../components/Testimonial";
import Features from "../components/Features";
import FeaturedGroups from "../components/FeaturedGroups";

const Home: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-6 my-6">
      <Banner />
      <div>
        <h3 className="font-semibold text-center text-2xl my-4">Featured Groups</h3>
        <FeaturedGroups />
      </div>
      <Features />
      <Testimonial />
    </div>
  );
};

export default Home;
