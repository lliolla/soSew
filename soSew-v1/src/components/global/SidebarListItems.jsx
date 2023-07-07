
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// verification type props : les props sont definie et ne pauvent etre null ou undifined
import PropTypes from "prop-types";

SidebarListItems.propTypes = {
  navItem: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      item: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      page: PropTypes.string.isRequired,
    })
  ).isRequired,
  setMenuData: PropTypes.func.isRequired,
};
  
function SidebarListItems({navItem,setMenuData }) {
    const handleItemClick = (page) => {
        setMenuData(page); // Appel de la fonction de rappel pour mettre à jour la valeur dans le parent
      };
  return (
    <List>
    {navItem.map(item => (
      <ListItem key={item.id} 
      disablePadding sx={{ display: 'block' }} 
      onClick={() => handleItemClick(item.page)} // Utilisation de la fonction de rappel lors du clic
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.item} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
  )
}

export default SidebarListItems 

        