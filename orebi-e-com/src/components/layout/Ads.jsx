import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";
import adsOne from "/src/assets/adsOne.jpg";
import adsTwo from "/src/assets/adsTwo.png";

const Ads = () => {
  return (
    <div className="py-6">
      <Container>
        <Flex className={"justify-between"}>
          <div className="w-[49%]">
            <Image src={adsOne} alt={"AdsOne"} className={"w-full"} />
          </div>
          <div className="w-[49%]">
            <Image src={adsTwo} alt={"adsTwo"} className={"w-full"}/>
            <Image src={adsTwo} alt={"adsTwo"}  className={"w-full mt-9"}/>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Ads;
