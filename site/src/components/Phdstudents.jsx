import React from "react";
import Rifat from "../assets/Rifat.jpg";
import Jiayin from "../assets/Jiayin.jpg";

const Phdstudents = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-black mb-10">
            Ph.D. Student(s)
          </h2>

          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            
            <div className="shadow-lg rounded-2xl p-6 bg-white text-center">
              <div className="w-full aspect-[16/9] overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center mb-6">
                <img
                  src={Rifat}
                  alt="Rifat Rahman Khan"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-2xl font-semibold text-black tracking-tight">
                Rifat Rahman Khan
              </h3>

              <div className="mt-2">
                <p className="text-gray-600 text-base">
                  Research Assistant
                </p>
              </div>
            </div>

            <div className="shadow-lg rounded-2xl p-6 bg-white text-center">
              <div className="w-full aspect-[16/9] overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center mb-6">
                <img
                  src={Jiayin}
                  alt="Jiayin Huang"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-2xl font-semibold text-black tracking-tight">
                Jiayin Huang
              </h3>

              <div className="mt-2">
                <p className="text-gray-600 text-base">
                  Research Assistant
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Phdstudents;