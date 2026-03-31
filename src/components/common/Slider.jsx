import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Fa42Group } from "react-icons/fa6";

const Slider = () => {
  return (
    <>
      <Swiper
        navigation={{ nextEl: ".prev", prevEl: ".next" }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <div className="bg-[url(/src/assets/banner.png)] bg-no-repeat bg-cover bg-center h-150"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(/src/assets/banner.png)] bg-no-repeat bg-cover bg-center h-150"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(/src/assets/banner.png)] bg-no-repeat bg-cover bg-center h-150"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url(/src/assets/banner.png)] bg-no-repeat bg-cover bg-center h-150"></div>
        </SwiperSlide>
        <div className="next swiper-button-next">
          <Fa42Group />
        </div>
        <div className="prev swiper-button-prev">
          <Fa42Group />
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
