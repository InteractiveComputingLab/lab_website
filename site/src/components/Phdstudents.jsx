import React from 'react'
import Img from "../assets/users.png"

const Phdstudents = () => {
  return (
    <>
    <div className="container mx-auto">
      <div className='text-center'>
      <h1>Ph.D. Student(s)</h1>
            <div className="menu-part grid lg:grid-cols-2 md:grid-cols-2 gap-x-[100px]">
                <div className="menu shadow rounded-[20px] p-5 text-left sm:mb-[20px]">
                <img src={Img} alt="Publication" className="w-full h-auto object-cover rounded" />
                    <h2>Rifat Rahman Khan</h2>
                    <div className="details">
                        <p className='text-center'>Research Assistant</p>
                        
                        
                    </div>
                </div>

                 <div className="menu shadow rounded-[20px] p-5 text-left sm:mb-[20px]">
                <img src={Img} alt="Publication" className="w-full h-auto object-cover rounded" />
                    <h2>Jiayin Huang</h2>
                    <div className="details">
                        <p className='text-center'>Research Assistant</p>
                        
                        
                    </div>
                </div>

               
             

              
            </div>

      </div>

    </div>
    </>
  )
}

export default Phdstudents
