
import { FaArrowCircleRight } from "react-icons/fa";
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={"text-red-400 text-2xl absolute right-5 top-1/2"} onClick={onClick}>
      <FaArrowCircleRight/>
    </div>
  );
};

export default NextArrow;
