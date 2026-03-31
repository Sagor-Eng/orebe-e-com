import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../common/NextArrow";
import PrevArrow from "../common/PrevArrow";
const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="">
      <Slider {...settings}>
        <div className="bg-[url(/src/assets/banner.png)] bg-no-repeat bg-cover bg-center h-150"></div>
        <div className="bg-[url(/src/assets/banner.png)] bg-no-repeat bg-cover bg-center h-150"></div>
        <div className="bg-[url(/src/assets/banner.png)] bg-no-repeat bg-cover bg-center h-150"></div>
        <div className="bg-[url(/src/assets/banner.png)] bg-no-repeat bg-cover bg-center h-150"></div>
      </Slider>
    </div>
  );
};

export default Banner;
