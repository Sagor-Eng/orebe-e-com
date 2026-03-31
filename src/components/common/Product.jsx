import Badge from "./Badge";
import Image from "./Image";

const Product = ({ productImg, badgeName, productName, price, color }) => {
  return (
    <div className="w-full mb-10 group">
      <div className="relative overflow-hidden">
        <Image src={productImg} className="w-full" />
        <Badge badgeName={badgeName} className="absolute top-3 left-3" />
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <h3 className="text-[20px] font-bold text-[#262626]">{productName}</h3>
          <span className="text-[16px] text-menuTextC">{price}</span>
        </div>
        <p className="text-[16px] text-menuTextC mt-2">{color}</p>
      </div>
    </div>
  );
};

export default Product;