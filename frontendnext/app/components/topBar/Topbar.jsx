'use client'

import React ,{useContext} from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineMail ,AiOutlineSearch} from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MenuContext } from "context/MenuContext";

const Topbar = () => {
    const {toggle} =useContext(MenuContext)

  return (
    <div className="navbar justify-between bg-cyan-600 ">
     <div >
        <button className="btn btn-circle btn-ghost text-zinc-50" onClick={toggle}>
          <FaBars />
        </button>
        <div className="text-zinc-50 font-semibold px-4 text-2xl">
            SoSew
        </div>
        </div>
      <div >
        <div className="flex flex-row ">

          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
          <div> <AiOutlineSearch/> </div>
        </div>
        <div >
          <div className="flex flex-row text-zinc-50 font-semibold  ">
            <AiOutlineMail className=" btn btn-ghost btn-circle w-5"/>
            <IoMdNotificationsOutline className="btn btn-ghost btn-circle w-5 "  />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-8 rounded-full">
                <img src="../../public/john.png" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a href="/">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
