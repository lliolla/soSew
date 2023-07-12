import PropTypes from "prop-types";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Toolbar,
  Badge,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { BsSearch } from "react-icons/bs";
import { styled, alpha } from "@mui/material/styles";
import {
  LightModeOutlined,
  MailOutlineOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

// personalisation des elements de la searchbar
const Search = styled("div")(({ theme }) => ({
  display: "flex",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function TopBar({ handleDrawerOpen, open, AppBar }) {
  return (
    <AppBar position="fixed" open={open}>
      <Box>
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
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Bibbliotheque de Patrons
          </Typography>

          {/* search bar */}
          <Search>
            <StyledInputBase placeholder="Recherche" />
            <SearchIconWrapper>
              <BsSearch />
            </SearchIconWrapper>
          </Search>
          
          {/* icons */}
          <Box display="flex" marginLeft="30px">
            <IconButton>
              <Badge badgeContent={3} color="primary">
                <MailOutlineOutlined sx={{ fontSize: "1.1rem" }} />
              </Badge>
            </IconButton>
            <IconButton aria-label="">
              <Badge badgeContent={10} color="primary">
                <SettingsOutlined sx={{ fontSize: "1.1rem" }} />
              </Badge>
            </IconButton>

            <IconButton aria-label="">
              <Badge badgeContent={4} color="primary">
                <LightModeOutlined sx={{ fontSize: "1.1rem" }} />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
TopBar.propTypes = {
  handleDrawerOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  AppBar: PropTypes.object.isRequired,
};
export default TopBar;
