import { useState } from 'react'
import viteLogo from '/vite.svg'
import './Index.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import Recent_publications from './components/recent_publications'
import Publications from './components/Publications'
import Logo from './assets/iclab_logo.png'
import { FaHome } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import Labmembers from './components/Labmembers'




function App() {
  const [home, setHome] = useState(true);
  const [publications, setpublications] = useState(false);
  const [lab_members, setlab_members] = useState(false);
  const OnHome = () =>{
    setHome(true);
    setpublications(false);
    setlab_members(false);
 }
 const OnPublications = () =>{
  setHome(false);
  setpublications(true);
  setlab_members(false);
}
const OnLabMembers = () =>{
  setHome(false);
  setpublications(false);
  setlab_members(true);
}
 
  

  return (
    <>
      <nav>
            <div className="flex justify-between px-10 bg-black text-white">
              <div>
                <img className='w-[120px] h-auto' src={Logo} alt="" />
              </div>
                
                <div>
                <ul className="flex gap-4 mt-[40px]">
                    <li><a onClick={OnHome} href="#"><FaHome className='inline-block mx-1 mt-[-5px]'/>Home</a></li>
                    <li><a onClick={OnPublications} href="#"><IoDocumentTextSharp className='inline-block mx-1 mt-[-5px]'/>Publications</a></li>
                    <li><a onClick={OnLabMembers} href="#"><FaPeopleGroup className='inline-block mx-1 mt-[-5px]'/>Lab Members</a></li>
                    
                    

                </ul>
                </div>
                
            </div>

            
            
       </nav>
       
        {home && !publications && !lab_members ? (
          <>
            <Banner/>
            <About />
            <Recent_publications />
          </>
        ) : null}

        {!home && publications && !lab_members ? (
          <>
            
            <Publications/>
          </>
        ) : null}
         {!home && !publications && lab_members ? (
          <>
            <Labmembers/>
          </>
        ) : null}
       
      
    
      
      <div className='bg-gray-200 mt-[60px] pt-[60px]'>
        <div className="container">
            <div className="footer-part grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 px-0 sm:px-5">
                <div className="one sm:mb-[60px]">
                    <h3 className="font-semibold text-2xl">Links</h3>
                    <ul className="text-center text-xl">
                    <li><a onClick={OnHome} href="#">Home</a></li>
                        <li><a onClick={OnPublications} href="#">Publications</a></li>
                        <li><a onClick={OnLabMembers} href="#">Lab Members </a></li>
                        
                    </ul>
                </div>
              
                <div className="two sm:mb-[60px]">
                    <h3 className="font-semibold text-2xl">Contact Us</h3>
                    <ul className="text-center text-xl">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Publications</a></li>
                        <li><a href="#">Lab Members</a></li>
                        
                    </ul>
                </div>
                <div className="three sm:mb-[60px]">
                    <h3 className="font-semibold text-2xl">Social Media</h3>
                    <div className='text-xl'>
                    <ul className='flex justify-center'>
                        <li><a href="#"><FaLinkedin /></a></li>
                        <li><a href="#"><FaTwitterSquare /></a></li>
                        <li><a href="#"><CiFacebook /></a></li>
                        <li><a href="#"><FaInstagramSquare /></a></li>
                    
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default App
