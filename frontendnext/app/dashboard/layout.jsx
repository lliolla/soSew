"use client";

import React, { useContext } from "react";
import Topbar from "../components/topBar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import DashboardHeader from "../components/layout/DashboardHeader";
import { MenuContext } from "context/MenuContext";

const DashboardLayout = ({children} ) => {
  const { open } = useContext(MenuContext);

  return (
    <div >
      <Topbar />
     
      <div className="bg-gray-200 flex flex-row w-screen min-h-screen ">
        <aside
          className={` sidebar-collapse  bg-red-400 overflow-hidden  ${
            open ? "w-60" : "w-10"}`}
        >
          <Sidebar />
        </aside>
       
        <main className='ml-[20px]'>

            {children}
        
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
