'use client'

import React,{useContext} from "react";
import Topbar from "../components/topBar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import MainContent from "../components/MainContent";
import { MenuContext } from "context/MenuContext";

MainContent;
const DashboardLayout = () => {
    const { open } = useContext(MenuContext);

  return (
    <div>
      
        <nav>
          <Topbar />
        </nav>

        <div className="bg-black flex flex-row ">
          <aside className={`${open?"w-60 bg-red-400 overflow-hidden ":"w-0"}`}>
    
            <Sidebar />
          </aside>
          <MainContent />
        </div>
     
    </div>
  );
};

export default DashboardLayout;
