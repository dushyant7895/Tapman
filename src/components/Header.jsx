import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";
const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="flex items-center bg-gray-800 w-full h-20 text-white justify-between fixed">
      <div className="text-3xl font-semibold p-2 md:pl-20">
        <h1 className="">Taapmaan</h1>
      </div>

      <ul className="hidden md:flex ">
        <Link to="Home" smooth duration={500}>
          <li className="px-4 mt-2 capitalize cursor-pointer font-medium  items-center hover:scale-105 duration-500">
            Home
          </li>
        </Link>
        <Link to="MoreData" smooth duration={500}>
          <li className="px-4 mt-2 capitalize cursor-pointer font-medium  items-center hover:scale-105 duration-500">
            Others
          </li>
        </Link>
      </ul>

      <div
        className="cursor-pointer pr-4 z-10 text-green-500
                 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {!nav ? <FaBars size={30} /> : <IoMdClose size={30} />}
      </div>
      {nav && (
        <ul
          className="flex flex-col justify-center items-center gap-6 absolute top-0 left-0 w-full h-screen
                 bg-gradient-to-b from-black to-gray-800 text-white"
        >
            <Link to="Home" onClick={()=> setNav(!nav)} smooth duration={500}>
          <li className="px-4 capitalize cursor-pointer text-4xl  items-center hover:scale-105 duration-500">
            Home
          </li>
            </Link>
            <Link to="MoreData" onClick={()=> setNav(!nav)} smooth duration={500}>
          <li className="px-4 capitalize cursor-pointer text-4xl  items-center hover:scale-105 duration-500">
            Others
          </li>
            </Link>
        </ul>
      )}
    </div>
  );
};

export default Header;
