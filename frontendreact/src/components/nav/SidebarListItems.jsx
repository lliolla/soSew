import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PropTypes from "prop-types";
import {  ChevronRight } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Collapse } from "@mui/material";

function SidebarListItems({ navItem, open }) {
  const [menu, setMenu] = useState(false);
  const [submenu, setSubmenu] = useState([]);

  useEffect(() => {
    console.log("effectmenu:", menu);
  }, [menu]);

  const handleSubmenuClick = (item) => {
    if (item.cat) {
      setMenu(!menu);
      setSubmenu(item.catPatern);
      console.log("truemenu", menu);
    }
  };

  return (
      <List component="nav">
        {navItem.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
            <ListItemButton
            component={item.cat ?  'div' :'a'}
            href={item.cat ? undefined:item.link}
              onClick={() => handleSubmenuClick(item)}
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
              <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
              {item.cat ? <ChevronRight /> : null}
            </ListItemButton>
            {item.cat && (
              <Collapse in={menu} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {submenu.map((subItem) => (
                    <ListItemButton key={subItem.id} sx={{ pl: 4 }}>
                      <ListItemIcon>{subItem.icon}</ListItemIcon>
                      <ListItemText primary={subItem.text} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </ListItem>
        ))}
      </List>
  );
}

SidebarListItems.propTypes = {
  navItem: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
      link: PropTypes.string.isRequired,
      cat: PropTypes.bool.isRequired,
    })
  ),
  catPatern: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]).isRequired,
      title: PropTypes.string,
    })
  ),
  open: PropTypes.bool.isRequired,
};

export default SidebarListItems;
