import React, { useState } from 'react'
import Logo from "../assets/iclab_logo.png"
import { FaHome } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";

const Navbar = () => {
  const [state, setState] = useState(false);

  return (
    <>
      <nav className="bg-black text-white">
        <div className="flex items-center justify-between px-10 h-16">
          <div className="flex items-center">
            <img
              src={Logo}
              alt="Logo of the Interactive Computing Lab at Stevens"
              className="h-10 w-auto object-contain"
            />
          </div>

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
          <div className="h-80 bg-amber-800"></div>
        )}
      </nav>
    </>
  )
}

export default Navbar
