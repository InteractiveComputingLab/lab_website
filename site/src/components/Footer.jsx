import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";




const Footer = () => {
  return (
    <>
    
   <div className='bg-gray-200 mt-[60px] pt-[60px]'>
        <div className="container">
            <div className="footer-part grid md:grid-cols-3 lg:grid-cols-3 px-0 sm:px-5">
                <div className="one sm:mb-[60px]">
                    <h3 className="font-semibold text-2xl">Links</h3>
                    <ul className="text-center text-xl">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Publications</a></li>
                        <li><a href="#">Lab Members</a></li>
                        
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
                
            
                {/* <div className="text">
                    <p style="font-size: 18px;font-weight: 400;">© 2024 Nayef All rights reserved.</p>
                </div> */}
            </div>
        </div>
    </div>

    
    
    </>
  )
}

export default Footer
