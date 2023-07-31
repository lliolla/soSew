import { useDispatch } from "react-redux";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
} from "@mui/icons-material";
import { IconButton, InputBase, Toolbar, AppBar } from "@mui/material";
import { FlexBeteween } from "../../style";
import { setMode } from "../../state/index";
import { useTheme } from "@mui/material/styles";

function TopBar() {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <FlexBeteween>
          <IconButton onClick={() => console.log("open/Close sidebar")}>
            <MenuIcon />
          </IconButton>
          <FlexBeteween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Rechercher.." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBeteween>
        </FlexBeteween>
        <FlexBeteween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>
        </FlexBeteween>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
