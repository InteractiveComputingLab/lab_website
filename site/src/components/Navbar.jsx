import React, { useState } from "react";
import Logo from "../assets/iclab_logo_white_nospace.png";
import { FaHome } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black text-white shadow-md">
      <div className="mx-auto flex items-center justify-between px-10 py-4">

        <div className="flex items-center gap-6 min-w-0">
          <img
            src={Logo}
            alt="Interactive Computing Lab at Stevens Institute of Technology"
            className="h-12 md:h-14 lg:h-16 w-auto object-contain flex-shrink-0"
          />

          <ul className="hidden lg:flex items-center gap-6 whitespace-nowrap">
            <li>
              <a href="#" className="flex items-center gap-1 hover:text-gray-300">
                <FaHome /> Home
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-1 hover:text-gray-300">
                <IoDocumentTextSharp /> Publications
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-1 hover:text-gray-300">
                <FaPeopleGroup /> Lab Members
              </a>
            </li>
          </ul>
        </div>

        <button
          className="lg:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-black px-10 pb-6">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2 hover:text-gray-300">
              <FaHome /> Home
            </li>
            <li className="flex items-center gap-2 hover:text-gray-300">
              <IoDocumentTextSharp /> Publications
            </li>
            <li className="flex items-center gap-2 hover:text-gray-300">
              <FaPeopleGroup /> Lab Members
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
