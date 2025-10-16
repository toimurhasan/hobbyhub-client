import React from "react";
import Banner from "./Banner";
import Testimonial from "./Testimonial";
import Features from "./Features";
import FeaturedGroups from "./FeaturedGroups";

const Home: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-6 my-6">
      <Banner />
      <div>
        <h3 className="font-semibold text-center text-2xl my-4">Our Featured Groups</h3>
        <FeaturedGroups />
      </div>
      <Features />
      <Testimonial />
    </div>
  );
};

export default Home;
