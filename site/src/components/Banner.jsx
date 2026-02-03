import React from "react";
import Slider from "react-slick";
import ExperimentHandwriting from "../assets/experiment_handwriting.png";
import IFFA from "../assets/IFFA.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 427,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: () => <div className="w-3 h-3 rounded-full"></div>,
  };

  return (
    <div className="container mx-auto">
      <div className="Banner">
        <h1>Welcome to the Interactive Computing Lab at Stevens</h1>
      </div>

      <div className="w-full overflow-hidden">
        <Slider {...settings}>
          <div className="w-full aspect-[892/344] overflow-hidden">
            <img
              className="w-full h-full object-cover object-center block"
              src={ExperimentHandwriting}
              alt="Experiment Handwriting"
            />
          </div>

          <div className="w-full aspect-[892/344] overflow-hidden">
            <img
              className="w-full h-full object-cover object-[50%_15%] block"
              src={IFFA}
              alt="IFFA"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
