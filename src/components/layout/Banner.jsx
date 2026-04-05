import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
