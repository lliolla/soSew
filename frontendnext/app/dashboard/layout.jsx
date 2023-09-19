import React from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/sidebar/Sidebar";
import MainContent from "../components/MainContent";

MainContent
const DashboardLayout = () => {
  return (
    <div>
      <Topbar />
      <div>
        <aside>
        <Navbar />
        </aside>
   
      </div>
        <MainContent/>
    </div>
  );
};

export default DashboardLayout;
