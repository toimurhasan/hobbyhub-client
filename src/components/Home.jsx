import React from "react";
import Banner from "./Banner";
import Testimonial from "./Testimonial";
import Features from "./Features";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-6 my-6">
      <Banner />

      <Features />

      <Testimonial />
    </div>
  );
};

export default Home;
