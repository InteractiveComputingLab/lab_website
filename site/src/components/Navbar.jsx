import React, { useState } from "react";
import Logo from "../assets/iclab_logo.png";
import { FaHome } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="px-6 lg:px-10 py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between">
        
        {/* Top Row */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <img
            src={Logo}
            alt="ICLab logo"
            className="h-[30px] sm:h-[30px] md:h-[35px] lg:h-[40px] xl:h-[40px] w-auto object-contain"
          />

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Menu */}
        <ul
          className={`flex flex-col lg:flex-row lg:items-center gap-6 mt-4 lg:mt-0 ${
            open ? "flex" : "hidden"
          } lg:flex`}
        >
          <li>
            <a href="#" className="flex items-center gap-2 hover:text-gray-300">
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 hover:text-gray-300">
              <IoDocumentTextSharp /> Publications
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 hover:text-gray-300">
              <FaPeopleGroup /> Lab Members
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
