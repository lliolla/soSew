import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';



import SidebarListItems from './SidebarListItems'
import { navItem } from '../../data/navData'

import PropTypes from 'prop-types';

Sidebar.propTypes = {
  handleMenuDataChange: PropTypes.func.isRequired,
}

function Sidebar({ handleMenuDataChange }) {
  const [open, setOpen] = React.useState(false);
  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
    <Drawer variant="permanent" open={open}>
   
        <IconButton onClick={handleDrawerClose}></IconButton>

      <Divider />
      <SidebarListItems
        navItem={navItem}
        setMenuData={handleMenuDataChange}
      />
      <Divider />
    </Drawer>
  )
}

export default Sidebar;
