import Addstwo from "../layout/Addstwo";
import Ads from "../layout/Ads";
import Banner from "../layout/Banner";
import Bestsellers from "../layout/Bestsellers";
import Countclick from "../layout/Countclick";
import Footers from "../layout/Footers";
import NewArrivals from "../layout/NewArrivals";
import Policy from "../layout/Policy";
import SpecialOffers from "../layout/SpecialOffers";

const Home = () => {

  return (
    <>
      <Banner />
      <Policy />
      <Ads />
      <NewArrivals />
      <Bestsellers />
      <Addstwo/>
      <SpecialOffers/>
      <Footers/>
      <Countclick />
    </>
  );
};

export default Home;
