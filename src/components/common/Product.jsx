import Badge from "./Badge";
import Image from "./Image";
import { FaHeart, FaCartPlus } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";

const Product = ({ productImg, badgeName, productName, ProductPrice }) => {
  return (
    <div className="w-full mb-10 group pt-20 relative">
      <div className="relative overflow-hidden">
        <Image src={productImg} className="w-full" />
        <Badge badgeName={badgeName} className="absolute top-3 left-3" />
      </div>
      <div className="bg-white p-5 flex items-center justify-between">
        <h3>{productName}</h3>
        <h4>{ProductPrice}</h4>
      </div>
      <div className="bg-[rgba(245,245,245,0.53)] p-5 absolute bottom-16  right-0 hidden group-hover:block">
        <div className="flex justify-end items-center gap-x-3 cursor-pointer ">
          <h3>Add to Wish List</h3>
          <FaHeart />
        </div>
        <div className="flex justify-end items-center gap-x-3 cursor-pointer ">
          <h3>Compare</h3>
          <TfiReload />
        </div>
        <div className="flex justify-end items-center gap-x-3 cursor-pointer ">
          <h3>Add to Cart</h3>
          <FaCartPlus />
        </div>
      </div>
    </div>
  );
};

export default Product;