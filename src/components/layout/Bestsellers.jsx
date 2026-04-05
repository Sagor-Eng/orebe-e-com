import React from 'react'
import Container from '../common/Container'
import bestselarpic1 from "/src/assets/bestselarpic1.png";
import bestselarpic2 from "/src/assets/bestselarpic2.png";
import bestselarpic3 from "/src/assets/bestselarpic3.png";
import bestselarpic4 from "/src/assets/bestselarpic4.png";
import Product from "../common/Product";
import Flex from "../common/Flex";

const Bestsellers = () => {
    return (
        <section>
            <Container>
                <h1 className="text-[39px] text-[#262626] font-bold mb-8">Our Bestsellers</h1>
                <Flex className="justify-between gap-4">
                    <div className="w-92.5">
                        <Product
                            productImg={bestselarpic1}
                            badgeName="New"
                            productName="Basic Crew Neck Tee"
                            ProductPrice="$80.00"
                            color="Black"
                        />
                    </div>
                    <div className="w-92.5">
                        <Product
                            productImg={bestselarpic2}
                            badgeName="New"
                            productName="Basic Crew Neck Tee"
                            ProductPrice="$60.00"
                            color="Black"
                        />
                    </div>
                    <div className="w-92.5">
                        <Product
                            productImg={bestselarpic3}
                            badgeName="New"
                            productName="Basic Crew Neck Tee"
                            ProductPrice="$70.00"
                            color="Black"
                        />
                    </div>
                    <div className="w-92.5">
                        <Product
                            productImg={bestselarpic4}
                            badgeName="New"
                            productName="Basic Crew Neck Tee"
                            ProductPrice="$90.00"
                            color="Black"
                        />
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Bestsellers;