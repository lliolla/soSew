import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PropTypes from "prop-types";
import { ExpandLess, ExpandMore, StarBorder} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Collapse } from "@mui/material";





  function SidebarListItems({ navItem, catPatern, open}) {
    const [menu, setMenu] = useState(false);
    const [collapse, setCollapse] = useState(false);
    // Écoutez les changements de menu
    useEffect(() => {
        console.log('effectmenu:', menu);
      }, [menu]);

const handleSubmenuClick = (item) => {
  
    if(item.cat){
        setMenu(!menu)
     
        console.log("truemenu",menu);
    }};
   

    return (
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="nav">
          {navItem.map((item) => (
            <ListItem
              key={item.id}
              disablePadding
              sx={{ display: "block" }}
            >
               
              <ListItemButton
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
                <ListItemText
                  primary={item.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
                {item.cat ? <ExpandLess /> :null }
              </ListItemButton>
            {item.cat &&(
            <Collapse in={menu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>)} 
         
            </ListItem>
          ))
          }
        
        </List>
      </Collapse>
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
          icon: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.elementType,
          ]).isRequired,
          title: PropTypes.string,
        })
      ),
      handleClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  };

export default SidebarListItems;