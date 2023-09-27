'use client'

import React,{useContext}   from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import { AiOutlineHome ,AiOutlineShop,AiOutlineFolderOpen,AiOutlineFileText,AiFillTool,AiOutlineRead} from "react-icons/ai";
import { GrUserAdmin} from "react-icons/gr";

import { MenuContext } from "context/MenuContext";


const navItems = () => {
const { open } = useContext(MenuContext);
const pathname = usePathname()
  return (
    <div>
        {
            open &&(
                <ul className="menu   bg-base-200 ">
                <li className="p-1">
                  <Link className="link " href="/dashboard/admin">
                  <GrUserAdmin className={`h-5 w-5 mr-2 ${pathname === '/' ? 'active' : ''}`}/>
                    Administration
                  </Link>
                </li>
                <li className="p-1">
                  <Link className="link " href="/dashboard">
                    
                    <AiOutlineHome className={`h-5 w-5 mr-2 ${pathname === '/' ? 'active' : ''}`} />
                    
                    Tableau de bord
                  </Link>
                </li>
                <li className="p-1">
                  <Link className="link " href="/dashboard/projets">
                    <AiOutlineFolderOpen className={`h-5 w-5 mr-2 ${pathname === '/' ? 'active' : ''}`}/>
                    Projets
                  </Link>
                </li>
                <li className="p-1">
                  <Link className="link " href="/dashboard/patrons">
                   <AiOutlineFileText className={`h-5 w-5 mr-2 ${pathname === '/' ? 'active' : ''}`}/>
                    Patrons
                  </Link>
                </li>
               
                <li className="p-1">
                  <Link className="link " href="/dashboard/capsule">
                  <AiOutlineShop className={`h-5 w-5 mr-2 ${pathname === '/' ? 'active' : ''}`} />
                    Capsule
                  </Link>
                </li>
                <li className="p-1">
                  <Link className="link " href="/dashboard/techniques">
                  <AiFillTool className={`h-5 w-5 mr-2 ${pathname === '/' ? 'active' : ''}`}/>
                    Techniques
                  </Link>
                </li>
               
                <li className="p-1">
                  <Link className="link " href="/dashboard/ressources">
                  <AiOutlineRead className={`h-5 w-5 mr-2 ${pathname === '/' ? 'active' : ''}`}/>
                    Ressources
                  </Link>
                </li>
                
              </ul>  
            )
        }

     
    </div>
  );
};

export default navItems;
