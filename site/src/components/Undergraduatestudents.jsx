import React from "react";
import Img from "../assets/users.png";
import Nicholas from "../assets/Nicholas.png";

const Undergraduatestudents = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-black mb-10">
            Undergraduate Student(s)
          </h1>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

            <div className="shadow-lg rounded-2xl p-6 bg-white text-center">
              <div className="w-full aspect-[16/9] overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center mb-6">
                <img
                  src={Img}
                  alt="Katherine Espinoza"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold text-black tracking-tight">
                Katherine Espinoza
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Research Assistant
              </p>
            </div>

            <div className="shadow-lg rounded-2xl p-6 bg-white text-center">
              <div className="w-full aspect-[16/9] overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center mb-6">
                <img
                  src={Img}
                  alt="Zeynep Alta"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold text-black tracking-tight">
                Zeynep Alta
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Research Assistant
              </p>
            </div>

            <div className="shadow-lg rounded-2xl p-6 bg-white text-center">
              <div className="w-full aspect-[16/9] overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center mb-6">
                <img
                  src={Img}
                  alt="Ananya Iyer"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold text-black tracking-tight">
                Ananya Iyer
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Research Assistant
              </p>
            </div>

            <div className="shadow-lg rounded-2xl p-6 bg-white text-center">
              <div className="w-full aspect-[16/9] overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center mb-6">
                <img
                  src={Nicholas}
                  alt="Nicholas Russo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold text-black tracking-tight">
                Nicholas Russo
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Research Assistant
              </p>
            </div>

            <div className="shadow-lg rounded-2xl p-6 bg-white text-center">
              <div className="w-full aspect-[16/9] overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center mb-6">
                <img
                  src={Img}
                  alt="Matthew Schmitt"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold text-black tracking-tight">
                Matthew Schmitt
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Research Assistant
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Undergraduatestudents;