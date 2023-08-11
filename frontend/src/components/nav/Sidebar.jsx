import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { useTheme } from "@mui/material/styles";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

// import SidebarListItems from "./SidebarListItems";

import { navItem } from "../../data/navData";
import { BiChevronLeft } from "react-icons/bi";

function Sidebar({ drawerWidht, isSidebarOpen, setisSidebarOpen, isNoMobile }) {
  // permet de recuperer la page active pour l'afficher
  const { pathname } = useLocation();
  const [active, setactive] = useState("");

  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    //if pathname is changing we set ative value in current page and pass the correct url
    setactive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      sidebarv
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setisSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidht,
            "&.MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              background: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNoMobile ? 0 : "2px",
              width: drawerWidht,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <Box
                display="flex"
                justifyContent="space-between"
                color={theme.palette.secondary.main}
              >
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    SoSew
                  </Typography>
                </Box>
            
                {!isNoMobile && (
                    
                  <IconButton
                    onClick={() => setisSidebarOpen(!setisSidebarOpen)}
                  >
                    <BiChevronLeft />
                  </IconButton>
                )}
              </Box>
            </Box>
            <List>
                
              {navItem.map((item) => {
                if (!item.icon) {
                  return (
                    <Typography key={item.id} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {item.title}
                    </Typography>
                  );
                }
                const lcText = item.title.toLowerCase();
                return (
                  <ListItem key={item.id} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setactive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText>
                      {item.title}
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
}

Sidebar.propTypes = {
  drawerWidht: PropTypes.string,
  isSidebarOpen: PropTypes.bool,
  setisSidebarOpen: PropTypes.func.isRequired,
  isNoMobile: PropTypes.bool.isRequired,
};

export default Sidebar;
