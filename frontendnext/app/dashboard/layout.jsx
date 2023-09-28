"use client";

import React, { useContext } from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import { MenuContext } from "context/MenuContext";

const DashboardLayout = ({children} ) => {
  const { open } = useContext(MenuContext);

  return (
    <div className="flex " >
    
        <aside className={`bg-slate-100h- screen p-4  flex flex-col justify-between ${open?"w-60" : "w-15"}`}>
        <Sidebar />
        </aside>
     
        <main className=" w-full bg-teal-50" >
            <Topbar />
         
        <div className="bg-teal-300  pt-10 pb-20 "></div>
          {children}
  
            
        </main>
    </div>
  );
};

export default DashboardLayout;
