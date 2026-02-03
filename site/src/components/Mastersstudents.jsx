import React from "react";
import Img from "../assets/users.png";

const Mastersstudents = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="text-center">
          <h1>Masters Student(s)</h1>

          <div className="menu-part grid lg:grid-cols-3 md:grid-cols-2 gap-x-[30px]">
            <div className="menu shadow rounded-[20px] p-5 text-left sm:mb-[20px]">
              <div className="w-full aspect-[16/9] overflow-hidden rounded bg-black/5 flex items-center justify-center">
                <img src={Img} alt="Dawei Xu" className="w-full h-full object-contain" />
              </div>
              <h2>Dawei Xu</h2>
              <div className="details">
                <p className="text-center">Research Assistant</p>
              </div>
            </div>

            <div className="menu shadow rounded-[20px] p-5 text-left sm:mb-[20px]">
              <div className="w-full aspect-[16/9] overflow-hidden rounded bg-black/5 flex items-center justify-center">
                <img src={Img} alt="Azizul Hoque" className="w-full h-full object-contain" />
              </div>
              <h2>Azizul Hoque</h2>
              <div className="details">
                <p className="text-center">Research Assistant</p>
              </div>
            </div>

            <div className="menu shadow rounded-[20px] p-5 text-left sm:mb-[20px]">
              <div className="w-full aspect-[16/9] overflow-hidden rounded bg-black/5 flex items-center justify-center">
                <img src={Img} alt="Srikala Sandu" className="w-full h-full object-contain" />
              </div>
              <h2>Srikala Sandu</h2>
              <div className="details">
                <p className="text-center">Research Assistant</p>
              </div>
            </div>
          </div>

          <div className="menu-part grid lg:grid-cols-3 md:grid-cols-2 gap-x-[30px]">
            <div />

            <div className="menu shadow rounded-[20px] p-5 text-left sm:mb-[20px]">
              <div className="w-full aspect-[16/9] overflow-hidden rounded bg-black/5 flex items-center justify-center">
                <img
                  src={Img}
                  alt="Simratkaur Manjindersingh Randhawa"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2>Simratkaur Manjindersingh Randhawa</h2>
              <div className="details">
                <p className="text-center">Research Assistant</p>
              </div>
            </div>

            <div />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mastersstudents;
