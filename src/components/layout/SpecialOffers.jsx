import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from '../common/Container';
import Product from "../common/Product";
import Flex from "../common/Flex";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../common/NextArrow";
import PrevArrow from "../common/PrevArrow";
import Slider from "react-slick";

const SpecialOffers = () => {
    let [allData, setAllData] = useState([]);

    useEffect(() => {
        async function alldatas() {
            let data = await axios.get("https://dummyjson.com/products");
            setAllData(data.data.products);
        }
        alldatas();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

    };

    return (
        <Container>
            <h1 className="text-[39px] text-[#262626] font-bold pt-10">Special Offers</h1>
            <Slider {...settings}>
                {allData.slice(0, 20).map((item) => (
                    <div className="px-2" key={item.id}>
                        <Product
                            productImg={item.thumbnail}
                            badgeName={item.price}
                            productName={item.title}
                            ProductPrice={item.price}
                        />
                    </div>
                ))}
            </Slider>
        </Container>
    );
};
export default SpecialOffers;
