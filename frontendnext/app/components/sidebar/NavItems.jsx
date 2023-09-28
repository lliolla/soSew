'use client'

import React,{useContext}   from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import image from 'next/image'

import { MenuContext } from "context/MenuContext";
import { listItem } from "../../../data/navData";


const navItems = () => {
 const { open } = useContext(MenuContext);
const pathname = usePathname()
  return (
    <div>
  <div>
      {listItem.map((item) => (
        <div key={item.id}>
          {open ? (
            <div className="flex flex-col item-center text-sm" >
            
                  <Link className="link flex flex-row hover:bg-teal-600 hover:text-stone-200 hover:font-medium p-3 rounded-lg" href={item.link}>
                  <div className={pathname === '/' ? 'active' : ''}> {item.icon} </div>   
                  {item.title}
                  </Link>
               
    

            </div>
          ) : (
            <div className="flex flex-col item-center text-sm" >
            
                  <Link className="link flex flex-row justify-center hover:bg-teal-600 hover:text-stone-200 hover:font-medium p-3 rounded-lg" href={item.link}>
                  <div className={pathname === '/' ? 'active' : ''}> {item.icon} </div>   
         
                  </Link>
               
    

            </div>
          )}
        </div>
      ))}
    </div>

        {/* {
            open &&(

            <ul className="menu   bg-base-200 ">
                <li className="p-1">
                  <Link className="link " href="/dashboard/admin">
                  <GrUserAdmin className={`h-5 w-5 mr-2 ${pathname === '/' ? 'active' : ''}`}/>
                    Administration
                  </Link>
                </li>
              </ul>


            )
        } */}


    </div>
  );
};

export default navItems;
