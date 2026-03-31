import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import Slider from "react-slick";
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={"text-red-400 text-2xl absolute left-5 top-1/2 z-10"} onClick={onClick}>
      <FaArrowCircleLeft />
    </div>
  );
};

export default PrevArrow;
