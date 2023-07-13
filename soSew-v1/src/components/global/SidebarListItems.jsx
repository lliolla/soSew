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
            PropTypes.string, // ou PropTypes.instanceOf(React.Element) selon le type réel de `icon`
            PropTypes.elementType // ou PropTypes.instanceOf(React.Element) selon le type réel de `icon`
          ]).isRequired,
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
    <Collapse in={open} timeout="auto" unmountOnExit>

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
          <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} >

          </ListItemText>
          

          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        
  
      </List>
    ))}
  </List>
  </Collapse>
  )
}

export default SidebarListItems 

        