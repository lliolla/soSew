import { useState } from "react";

import TopBar from "../components/nav/TopBar";

import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/nav/Sidebar";

function Layout() {
    const [isSidebarOpen, setisSidebarOpen] = useState(false);
    const isNoMobile = useMediaQuery("(min-widht: 600px )");
  
  return (
    <Box display={isNoMobile ? "flex" : "block"} width="100% " height="100%">
   <Sidebar
        isNoMobile={isNoMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setisSidebarOpen={setisSidebarOpen}
      />
    
    <Box>
      <TopBar
        isSidebarOpen={isSidebarOpen}
        setisSidebarOpen={setisSidebarOpen}
      />

      <Outlet />
    </Box>
  </Box>
  )
}

export default Layout