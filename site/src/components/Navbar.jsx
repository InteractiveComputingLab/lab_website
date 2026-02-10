import React, { useState } from 'react'
import Logo from "../assets/iclab_logo.png"
import { FaHome } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";

const Navbar = () => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  return (
    <>
      <nav className="bg-black text-white">
        <div className="flex items-center justify-between px-10 py-4">

          {/* Logo */}
          <img
            src={Logo}
            alt="ICLab logo"
            className="h-12 lg:h-14 w-auto object-contain"
          />

          {/* Navigation */}
          <ul className="flex items-center gap-6">
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

        {state && (
          <div className="h-80 bg-amber-800">
            <h1>Hello</h1>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
