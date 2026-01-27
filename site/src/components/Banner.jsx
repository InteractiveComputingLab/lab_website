import React from 'react'
import Slider from "react-slick";
import AnnualLunch from "../assets/annual_lunch.jpeg"
import Assets2025 from "../assets/assets2025.jpg"
import { MdKeyboardArrowRight } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {

  var settings = {
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
        }
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
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 427,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
    ],
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className='w-3 h-3 rounded-full'></div>
    )
  };

  return (
    <>
      <div className='container mx-auto'>
        <div className='Banner'>
          <h1>Welcome to the Interactive Computing Lab at Stevens</h1>
        </div>

        <div className="w-full img-width overflow-hidden object-cover">
          <Slider {...settings}>
            <div>
              <img src={AnnualLunch} alt="Annual Lunch" />
            </div>
            <div>
              <img src={Assets2025} alt="Assets 2025" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Banner
