import React from "react";
import Navbar from "../Navbar/Navbar";

import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
