import {Grid} from "@mui/material/Box";
// views
import Capsule from "../../views/Capsule";
import Message from "../../views/Message";
import Pattern from "../../views/Pattern";
import Project from "../../views/Project";
import Settings from "../../views/Settings";
import PropTypes from "prop-types";

// styles

GridContent.propTypes = {
  menuData: PropTypes.string.isRequired,
};

export default function GridContent({ menuData }) {
  return (
    <Grid container spacing={3}>
      {menuData === "Capsule" && <Capsule />}
      {menuData === "Message" && <Message />}
      {menuData === "Pattern" && <Pattern />}
      {menuData === "Project" && <Project />}
      {menuData === "Settings" && <Settings />}
      </Grid>
  );
}

