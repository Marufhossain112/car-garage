import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Home from "../components/Home";

const Root = () => {
  return (
    <div>
      <Home></Home>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
