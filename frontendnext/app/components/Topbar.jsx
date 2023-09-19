import React from "react";
import{FaBars} from'react-icons/fa'
const Topbar = () => {
  return (
    <div className="navbar bg-cyan-600">
      <div className="flex-1">
      <button className="btn ">
        <FaBars/>
      </button>
       <div className="text-slate-50 font-semibold px-4 text-2xl ">SoSew</div>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
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
  );
};

export default Topbar;
