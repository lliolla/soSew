import PropTypes from "prop-types";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Toolbar,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { BsSearch } from "react-icons/bs";

// import { useContext } from "react";

function TopBar({ handleDrawerOpen, open,AppBar }) {
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        {/* Logo */}
        <Typography variant="h4" noWrap component="div">
          SOSew Bibbliotheque de Patrons
        </Typography>
        <IconButton sx={{ display: "flex" }}></IconButton>
        {/* search bar */}
        <Box display="flex" borderRadius="3px">
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Recherche" />
          <IconButton type="button" sx={{ p: 1 }}>
            <BsSearch />
          </IconButton>
        </Box>

        {/* site title */}
      </Toolbar>
    </AppBar>
  );
}
TopBar.propTypes = {
  handleDrawerOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  AppBar: PropTypes.object.isRequired,
};
export default TopBar;
