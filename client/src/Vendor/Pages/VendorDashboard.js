import React from "react";
import Navbar from "../../Common/Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";

const VendorDashboard = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="order-card"></div>
    </>
  );
};

export default VendorDashboard;
