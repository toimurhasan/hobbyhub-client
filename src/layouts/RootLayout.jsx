import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-4">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default RootLayout;
