import React, { useState } from 'react'
import Logo from "../assets/iclab_logo.png"
import { FaHome } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 md:px-10">
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-6">
          <img
            src={Logo}
            alt="Logo of the Interactive Computing Lab at Stevens"
            className="h-auto max-h-20 w-auto object-contain"
          />
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

        <ul className="hidden md:flex items-center gap-6 whitespace-nowrap">
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

      {open && (
        <ul className="md:hidden mt-4 space-y-3 pb-4">
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
      )}
    </nav>
  )
}

export default Navbar
