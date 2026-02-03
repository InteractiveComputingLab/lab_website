import React from "react";
import Img from "../assets/Hong.jpeg";

const Professors = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="text-center">
          <h1>Professor</h1>

          <div className="shadow rounded-[20px] p-5 text-left sm:mb-[20px] w-100 mx-auto">
            <div className="w-full max-w-xl mx-auto aspect-[16/9] overflow-hidden rounded bg-black/5 flex items-center justify-center">
              <img
                src={Img}
                alt="Dr. Jonggi Hong"
                className="w-full h-full object-contain"
              />
            </div>

            <h2>Dr. Jonggi Hong</h2>

            <div className="details">
              <p className="text-center">Assistant Professor</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Professors;
