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
      <div className="px-6 lg:px-10 py-3 flex items-center justify-between">

        <img
          src={Logo}
          alt="Interactive Computing Lab logo"
          className="h-[35px] lg:h-[40px] w-auto object-contain"
        />

        <ul className="hidden lg:flex items-center gap-6">
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

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-2xl"
          aria-label="Toggle navigation menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden px-6 pb-4">
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
      )}
    </nav>
  );
};

export default Navbar;
