import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../common/Container";
import Product from "../common/Product";
import NextArrow from "../common/NextArrow";
import PrevArrow from "../common/PrevArrow";
import catProduct from "/src/assets/catProduct.png";
import araival2 from "/src/assets/araival2.png";
import araivalpic3 from "/src/assets/araivalpic3.png";
import watchProduct from "/src/assets/watch.png";

const NewArrivals = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

  };
  return (

    <section>
      <Container>
        <h2 className="text-[39px] font-bold mb-8">New Arrivals</h2>
        <Slider {...settings}>
          <Product
            productImg={watchProduct}
            badgeName="New"
            productName="Smart Watch"
            ProductPrice="$120.00"
          />
          <Product
            productImg={araival2}
            badgeName="-10%"
            productName="Smart Watch"
            ProductPrice="$100.00"
          />
          <Product
            productImg={araivalpic3}
            badgeName="Hot"
            productName="Beautiful fita bag"
            ProductPrice="$350.00"
          />
          <Product
            productImg={catProduct}
            badgeName="Top"
            productName="Big Totoro (gray)"
            ProductPrice="$250.00"
          />
          <Product
            productImg={araivalpic3}
            badgeName="Hot"
            productName="Beautiful fita bag"
            ProductPrice="$350.00"
          />
        </Slider>
      </Container>
    </section>
  );
};

export default NewArrivals;