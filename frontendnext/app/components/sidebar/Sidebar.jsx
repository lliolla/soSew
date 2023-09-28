
import NavItems from "./NavItems";
import image from 'next/image'
const Sidebar = () => {
  return (
  <div>  
    <div className="avatar"> <img src="../../../public/john.png" alt="John Doe" /> </div>
    {/* si open = false alors on laisse que lavatar */}
    <h3>John Doe</h3>
     <div className="divider"></div>

  <NavItems />

   
     </div>
     
 
  );
};

export default Sidebar;
