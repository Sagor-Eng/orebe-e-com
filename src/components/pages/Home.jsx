import Ads from "../layout/Ads";
import Banner from "../layout/Banner";
import Bestsellers from "../layout/Bestsellers";
import Countclick from "../layout/Countclick";
import NewArrivals from "../layout/NewArrivals";
import Policy from "../layout/Policy";

const Home = () => {

  return (
    <>
      <Banner />
      <Policy />
      <Ads />
      <NewArrivals />
      <Bestsellers />
      <Countclick />
    </>
  );
};

export default Home;
