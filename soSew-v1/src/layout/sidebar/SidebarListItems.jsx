import { useParams, useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PropTypes from "prop-types";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { useState } from "react";
import { Collapse } from "@mui/material";

SidebarListItems.propTypes = {
  navItem: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      item: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
      link: PropTypes.string.isRequired,
      cat: PropTypes.bool.isRequired,
    })
  ),
  catPatern: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.elementType,
      ]).isRequired,
    })
  ),
  open: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

function SidebarListItems({ navItem, catPatern, open, handleClick }) {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleSubmenuClick = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="nav">
        {navItem.map((item) => (
          <List
            key={item.id}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              onClick={item.cat ? handleSubmenuClick : handleClick}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  fontSize: "1.3rem",
                  minWidth: 0,
                  mr: open ? 4 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.item}
                sx={{ opacity: open ? 1 : 0 }}
              />
              {item.cat ? (submenuOpen ? <ExpandLess /> : <ExpandMore />) : null}
            </ListItemButton>
          </List>
        ))}
      </List>
    </Collapse>
  );
}

export default SidebarListItems;