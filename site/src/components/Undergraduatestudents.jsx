import React from "react";
import Img from "../assets/users.png";
import Nicholas from "../assets/Nicholas.png";

const Undergraduatestudents = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="text-center">
          <h1>Undergraduate Student(s)</h1>

          <div className="menu-part grid lg:grid-cols-3 md:grid-cols-2 gap-x-[30px]">
            <div className="menu shadow rounded-[20px] p-5 text-left sm:mb-[20px]">
              <div className="w-full aspect-[16/9] overflow-hidden rounded bg-black/5 flex items-center justify-center">
                <img
                  src={Img}
                  alt="Katherine Espinoza"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2>Katherine Espinoza</h2>
              <div className="details">
                <p className="text-center">Research Assistant</p>
              </div>
            </div>

            <div className="menu shadow rounded-[20px] p-5 text-left sm:mb-[20px]">
              <div className="w-full aspect-[16/9] overflow-hidden rounded bg-black/5 flex items-center justify-center">
                <img
                  src={Img}
                  alt="Zeynep Alta"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2>Zeynep Alta</h2>
              <div className="details">
                <p className="text-center">Research Assistant</p>
              </div>
            </div>

            <div className="menu shadow rounded-[20px] p-5 text-left sm:mb-[20px]">
              <div className="w-full aspect-[16/9] overflow-hidden rounded bg-black/5 flex items-center justify-center">
                <img
                  src={Img}
                  alt="Ananya Iyer"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2>Ananya Iyer</h2>
              <div className="details">
                <p className="text-center">Research Assistant</p>
              </div>
            </div>
          </div>

          <div className="menu-part grid lg:grid-cols-3 md:grid-cols-2 gap-x-[30px]">
            <div className="menu shadow rounded-[20px] p-5 text-left sm:mb-[20px]">
              <div className="w-full aspect-[16/9] overflow-hidden rounded bg-black/5 flex items-center justify-center">
                <img
                  src={Nicholas}
                  alt="Nicholas Russo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2>Nicholas Russo</h2>
              <div className="details">
                <p className="text-center">Research Assistant</p>
              </div>
            </div>

            <div className="menu shadow rounded-[20px] p-5 text-left sm:mb-[20px]">
              <div className="w-full aspect-[16/9] overflow-hidden rounded bg-black/5 flex items-center justify-center">
                <img
                  src={Img}
                  alt="Matthew Schmitt"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2>Matthew Schmitt</h2>
              <div className="details">
                <p className="text-center">Research Assistant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Undergraduatestudents;
