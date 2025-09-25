import React from "react";
import { IoCreateOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import Theme from "./Theme";
const Navbar = () => {
  return (
    <div className="w-full lg:px-6 fixed top-0 left-0 overflow-hidden z-50 ">
      <div className="h-20 lg:max-w-7xl mx-auto flex items-center justify-between  p-4 lg:p-10 bg-zinc-600/50 shadow-xl text-white">
        {/*  Logo */}
        <Link to={"/"} className="lg:text-2xl font-bold tracking-wider ">
          {" "}
          NotePad
        </Link>

        <div>
          <div className="flex items-center justify-between lg:space-x-10 space-x-2">
            <Link to={"/create"} className="flex items-center space-x-2">
              <button>
                <IoCreateOutline className="text-2xl" />
              </button>
              <span className="hidden lg:block">New Note</span>
            </Link>
            <Theme />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
