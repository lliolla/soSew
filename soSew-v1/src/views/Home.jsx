import { NavLink } from "react-router-dom";



export default function Home() {
  return (
    <div>
<h3>Home loggin page</h3>
<NavLink 
           to="/dashboard"
           className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
           > tableau
           </NavLink>
    </div>
   
  )
}
