import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { BiSearchAlt2, BiCart } from "react-icons/bi";
import logo from "../imgs/logo.png"

const header = () => {
  return (
    <>

  <div className="flex flex-row justify-evenly bg-white py-3 drop-shadow-md  md:py-5 md:justify-between ">
        <div className="left flex items-center  md:flex-row md:space-x-9  md:pl-28 md:text-xl">
          <BiMenuAltLeft className="text-3xl "/>
          <p className="invisible md:visible">Products</p>
          <p className="invisible md:visible ">Blog</p>
        </div>
        <div className="middle w-20 md:w-40">
          <img src={logo} alt="logo" height="100px" width="150px"/>
        </div>
        <div className="flex items-center pl-10 md:pr-28 md:space-x-9 md:text-xl ">
          <BiSearchAlt2 className="text-3xl" />
          <BiCart  className="text-3xl relative lg:right-6"/>
          <button className="invisible md:visible md:py-1.5 md:px-2.5 md:rounded-lg md:text-black md:border-2 md:border-orange-400 md:items-center md:hover:bg-orange-400 md:hover:text-amber-50 ">Login</button>
        </div>
  </div>

    </>
  );
};

export default header;
