import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center max-w-6xl mx-auto h-14 ">
        <div className="flex items-center font-medium text-slate-300 mr-5 space-x-6 drop-shadow-md ">
          <NavLink to="/">
            <div className="ml-5">
              <button>Home</button>
            </div>
          </NavLink>
        </div>

        <div className="flex items-center font-medium text-slate-300 mr-5 space-x-6  drop-shadow-md  ">
          <NavLink to="/Create">
            <div>
              <button>Create-New</button>
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
