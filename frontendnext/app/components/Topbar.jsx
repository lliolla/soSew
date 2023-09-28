"use client";

import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineMail, AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiUser  } from "react-icons/hi";

import { MenuContext } from "context/MenuContext";

const Topbar = () => {
  const { toggle } = useContext(MenuContext);

  return (
    <div className="flex flex-row  justify-between bg-cyan-600 h-20">
      <div className="flex items-center ">
        <button
          className="btn btn-circle btn-ghost ml-2 text-zinc-50"
          onClick={toggle}
        >
          <FaBars className="h-5 w-5 "/>
        </button>
        <div className="text-zinc-50 font-semibold px-4 text-2xl">SoSew</div>
      </div>

      <div className="flex  items-center ">
        <AiOutlineSearch className="text-slate-50 h-5 w-5 m-2" />
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered h-8"
        />
        <div></div>
      </div>

      <div className="flex items-center ">
        <div className=" text-zinc-50 font-semibold  ">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <AiOutlineMail className="h-5 w-5" />
          </label>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <IoMdNotificationsOutline className="h-5 w-5" />
          </label>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2">
            <div className=" rounded-full ">
              <HiUser className="text-slate-50 h-5 w-5 " />
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
  );
};

export default Topbar;
