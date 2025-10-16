import React, { FC } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router"; // ✅ Use react-router-dom in web
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

const RootLayout: FC = () => {
  return (
    <div>
      <Navbar />
      <main className="mx-4">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default RootLayout;
