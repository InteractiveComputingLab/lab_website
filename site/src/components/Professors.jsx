import React from "react";
import Img from "../assets/Hong.jpeg";

const Professors = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-black mb-8">
            Professor
          </h2>

          <div className="shadow-lg rounded-2xl p-6 text-center sm:mb-6 max-w-md mx-auto bg-white">
            <div className="w-full aspect-[16/9] overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center mb-6">
              <img
                src={Img}
                alt="Dr. Jonggi Hong"
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-2xl font-semibold text-black tracking-tight">
              Dr. Jonggi Hong
            </h3>

            <div className="details mt-2">
              <p className="text-gray-600 text-base">
                Assistant Professor
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Professors;