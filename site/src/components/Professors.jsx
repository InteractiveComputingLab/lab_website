import React from 'react'
import Img from "../assets/Hong.jpeg"

const Professors = () => {
  return (
    <>
    <div className="container mx-auto">
      <div className='text-center'>
      <h1>Professor</h1>
            {/* <div className="menu-part grid lg:grid-cols-3 md:grid-cols-2 gap-x-[30px]">
                <div className="menu shadow rounded-[20px] p-5 text-left sm:mb-[20px] mx-auto">
                <img src={Img} alt="Publication" className="=w-full h-auto object-cover rounded mx-auto" />
                    <h2>Dr. Jonggi Hong</h2>
                    <div className="details">
                        <p className='text-center'>Assistant Professor</p>
                    </div>
                </div>


             

           
            </div> */}


                <div className="shadow rounded-[20px] p-5 text-left sm:mb-[20px] w-100 mx-auto">
                     <img src={Img} alt="Publication" className="w-80 h-auto object-cover rounded mx-auto" />
                      <h2>Dr. Jonggi Hong</h2>
                    <div className="details">
                        <p className='text-center'>Assistant Professor</p>
                    </div>
                </div>

      </div>

        </div>
    </>
  )
}

export default Professors
