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
      <div className="px-6 lg:px-10 py-4">
        
        {/* Top Row */}
        <div className="flex items-center justify-between">
          <img
            src={Logo}
            alt="ICLab logo"
            className="h-[30px] sm:h-[30px] md:h-[35px] lg:h-[40px] xl:h-[40px] w-auto object-contain"
          />

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl"
            aria-label="Toggle Menu"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            open ? "max-h-60 mt-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4">
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

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:items-center lg:justify-end gap-6 mt-4 lg:mt-0">
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
