import React from "react";
import { Outlet } from "react-router-dom";
import Header from "Components/Header";
import Footer from "Components/Footer";

function DashboardLayout(props) {
  return (
    <div>
      <Header />
      <h1> This is The shared layout between parent and kid dashboards</h1>
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
