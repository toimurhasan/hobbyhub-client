import React from "react";
import Banner from "./Banner";
import Testimonial from "./Testimonial";
import Features from "./Features";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mt-6">
        <Banner />
      </div>
      <Features />
      <Testimonial />
    </div>
  );
};

export default Home;
