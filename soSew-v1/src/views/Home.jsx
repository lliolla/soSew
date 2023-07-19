import { NavLink } from "react-router-dom";



export default function Home() {
  return (
    <div>
<h3>Home loggin page</h3>
<NavLink 
           to="/layout"
           className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
           > aller au dasbord
           </NavLink>
    </div>
   
  )
}
