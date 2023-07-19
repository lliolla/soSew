import { useState } from "react";

import TopBar from "./TopBar"
import Sidebar from "./sidebar/Sidebar";
import GridContent from "./GridContent";

const Layout = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TopBar handleDrawerOpen={handleDrawerOpen} open={open} />
      <Sidebar handleDrawerClose={handleDrawerClose} />
      <GridContent />
    </>
  );
}

export default Layout;
