import React from "react";
import Slider from "react-slick";
import ExperimentHandwriting from "../assets/experiment_handwriting.png";
import IFFA from "../assets/IFFA.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = ({ src, alt }) => {
  return (
    <div className="w-full aspect-[892/344] overflow-hidden relative rounded-xl ring-1 ring-black/10 shadow-sm">
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover scale-125 blur-3xl"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/40" />
      <div className="absolute inset-0 bg-black/10" />

      <img
        src={src}
        alt={alt}
        className="relative z-10 w-full h-full object-contain block drop-shadow-[0_18px_35px_rgba(0,0,0,0.35)]"
      />
    </div>
  );
};

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
      { breakpoint: 1170, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true, autoplay: true, autoplaySpeed: 2000 } },
      { breakpoint: 992, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true, autoplay: true, autoplaySpeed: 2000 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 1, autoplay: true, autoplaySpeed: 2000 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 2000 } },
      { breakpoint: 427, settings: { slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 2000 } },
    ],
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: () => <div className="w-3 h-3 rounded-full" />,
  };

  return (
    <div className="w-full">
      <div className="Banner">
        <h1>Welcome to the Interactive Computing Lab at Stevens</h1>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 overflow-hidden">
        <Slider {...settings}>
          <Slide src={ExperimentHandwriting} alt="Experiment Handwriting" />
          <Slide src={IFFA} alt="IFFA" />
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
