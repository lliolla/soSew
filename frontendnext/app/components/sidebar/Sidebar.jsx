
import NavItems from "./NavItems";
import { listItem } from "../../../data/navData";
const Sidebar = () => {
  return (
  <div>  
    <div className="divider"></div>
 {   listItem.map((item)=>{
    return  <NavItems key={item.id}/>
 })  }
    <div className="divider"></div>
     </div>
     
 
  );
};

export default Sidebar;
