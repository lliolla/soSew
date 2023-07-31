import { NavLink } from "react-router-dom";



export default function Auth() {
  return (
    <div>
<h3>Auth loggin page</h3>
<NavLink 
           to="/layout"
           className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
           > aller au dasbord
           </NavLink>
    </div>
   
  )
}
