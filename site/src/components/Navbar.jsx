import React, { useEffect, useState } from 'react'
import Logo from "../assets/iclab_logo.png"
import { FaHome } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";


const Navbar = () => {
     const [state, setState] = useState(false);
     const [color, setColor] = useState('bg-amber-800');
    const HandleClick = () =>{
       setState(!state);
    }
    // const colorChange = () =>{
    //     color == 'bg-amber-800' ? setColor("bg-green-500") : setColor("bg-amber-800");
    //  }
    // useEffect(() => {
    //     console.log(color)
    // },[color])
    
  return (
    <>
        <nav>
            <div className="flex justify-between px-10 bg- py-5 text-white">
                <div>
                <img className='h-10 w-auto md:h-12 lg:h-14 object-contain' src={Logo} alt="" />
                
                </div>
                <div>
                <ul className="flex gap-4">
                    <li><a href="#"><FaHome className='inline-block mx-1 mt-[-5px]'/>Home</a></li>
                    <li><a href="#"><IoDocumentTextSharp className='inline-block mx-1 mt-[-5px]'/>Publications</a></li>
                    <li><a href="#"><FaPeopleGroup className='inline-block mx-1 mt-[-5px]'/>Lab Members</a></li>
                    
                    

                </ul>
                </div>
                {/* <div>
                <button className="px-4 py-1.5 bg-blue-400 rounded-full">Click Here</button>
                </div> */}
            </div>

            {
                state?
                <div className={`h-80 ${color}`}>
                <h1>Hello</h1>
                <button className="px-4 py-1.5 bg-blue-400 rounded-full" onClick={colorChange}>Click Here</button>
                
                </div>: null

            }
            
        </nav>
    
    
    </>
  )
}

export default Navbar
