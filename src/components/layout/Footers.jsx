import Container from '../common/Container';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Image from '../common/Image';
import Logo from "../../assets/logo.png";

const Footers = () => {
  return (
    <footer className="bg-[#F5F5F3] py-20 mt-20">
      <Container>
        <div className="grid grid-cols-5 gap-x-10">
          
          {/* Menu Column */}
          <div>
            <h4 className="font-bold mb-6">MENU</h4>
            <ul className="flex flex-col gap-y-4 text-[#6D6D6D] text-sm">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
              <li>Journal</li>
            </ul>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="font-bold mb-6">SHOP</h4>
            <ul className="flex flex-col gap-y-4 text-[#6D6D6D] text-sm">
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
              <li>Category 4</li>
              <li>Category 5</li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="font-bold mb-6">HELP</h4>
            <ul className="flex flex-col gap-y-4 text-[#6D6D6D] text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Special E-shop</li>
              <li>Shipping</li>
              <li>Secure Payments</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-1">
            <h4 className="font-bold mb-2">(052) 611-5711</h4>
            <h4 className="font-bold mb-6">company@domain.com</h4>
            <p className="text-[#6D6D6D] text-sm">575 Crescent Ave. Quakertown, PA 18951</p>
          </div>

          {/* Logo Column */}
          <div className="flex justify-end w-30.25 h-7">
            <Image src={Logo} />
          </div>
        </div>

        {/* copyright section*/}
        <div className="flex justify-between items-center mt-16">
          <div className="flex gap-x-6 text-xl">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
          <p className="text-[#6D6D6D] text-sm">
            2020 Orebi Minimal eCommerce Figma Template
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footers;