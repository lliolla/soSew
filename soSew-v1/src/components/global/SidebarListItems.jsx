import { useParams, useNavigate} from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// verification type props : les props sont definie et ne pauvent etre null ou undifined
import PropTypes from "prop-types";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { useState } from "react";
import { Collapse } from "@mui/material";


SidebarListItems.propTypes = {
  navItem: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      item: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      link: PropTypes.string.isRequired,
      cat: PropTypes.string.isRequired,
    })
  ),
  
  catPatern: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    
    })
  ),
};
  
function SidebarListItems({navItem,catPatern}) {
//  const navigate =useNavigate();
    const [open, setOpen] = useState (true);
    const subMenu = navItem.find(item => item.id === 1)?.cat;
    const handleClick = () => {
        console.log("subMenu",subMenu,open);
        setOpen(!open);
      };
  return (
    <List component="nav">
    {navItem.map(item => (
      <List key={item.id} 
      disablePadding sx={{ display: 'block' }} 
     // Utilisation de la fonction de rappel lors du clic  onClick={()=>navigate(item.link)} 
      >
        <ListItemButton
        onClick={handleClick}
       
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
            fontSize :"1.3rem",
              minWidth: 0,
              mr: open ? 4 : 'auto',
              justifyContent: 'center',
            }}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.item} sx={{ opacity: open ? 1 : 0 }}  />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
      </List>
    ))}
  </List>
  )
}

export default SidebarListItems 

        