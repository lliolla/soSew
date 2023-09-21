'use client'

import React,{useContext}   from "react";
import Link from "next/link";
import { AiOutlineHome ,AiOutlineFolderOpen,AiOutlineFileText} from "react-icons/ai";
import { MenuContext } from "context/MenuContext";


const navItems = () => {
const { open } = useContext(MenuContext);

  return (
    <div>
        {
            open &&(
                <ul className="menu w-3/4 bg-base-200 ">
                <li>
                  <Link className="link " href="/dashboard">
                    
                    <AiOutlineHome className="h-5 w-5" />
                    
                    Tableau de bord
                  </Link>
                </li>
                <li>
                  <Link className="link " href="/dashboard/projets">
                    <AiOutlineFolderOpen className="h-5 w-5" />
                    Projets
                  </Link>
                </li>
                <li>
                  <Link className="link " href="/dashboard/patrons">
                   <AiOutlineFileText className="h-5 w-5"/>
                    Patrons
                  </Link>
                </li>
               
                <li>
                  <Link className="link " href="/dashboard/capsule">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    Capsule
                  </Link>
                </li>
              </ul>  
            )
        }

     
    </div>
  );
};

export default navItems;
