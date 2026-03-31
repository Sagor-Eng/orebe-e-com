import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";
import logo from "/src/assets/logo.png";
import { Link } from "react-router-dom";
import { FaBars, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <>
      <div className="py-8">
        <Container>
          <Flex className={"justify-between"}>
            <div className="w-[40%]">
             <Link to={"/"}>
              <Image src={logo} alt={logo} />
             </Link>
            </div>
            <div className="w-[60%]">
              <ul className="flex items-center gap-x-5">
                <li className="text-[14px] font-normal hover:font-bold hover:text-black text-menuTextC duration-300">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="text-[14px] font-normal hover:font-bold hover:text-black text-menuTextC duration-300">
                  <Link to={"/shop"}>Shop</Link>
                </li>
                <li className="text-[14px] font-normal hover:font-bold hover:text-black text-menuTextC duration-300">
                  <Link to={"/about"}>About</Link>
                </li>
                <li className="text-[14px] font-normal hover:font-bold hover:text-black text-menuTextC duration-300">
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
          </Flex>
        </Container>
      </div>
      <div className={"py-8 border-y border-2 border-[#979797] bg-[#F5F5F3]"}>
        <Container>
          <Flex className={"justify-between"}>
            <div className="flex gap-x-3 items-center">
              <FaBars />
              Shop by Category
            </div>
            <div className="relative">
              <input
                className="w-120 py-2 px-3 bg-white rounded-md focus:outline-none"
                placeholder="Search By Category"
              />
              <CiSearch className="text-2xl absolute right-5 top-1/2 -translate-y-1/2" />
            </div>
            <div className="flex items-center gap-x-4">
              <div className="flex items-center">
                <FaUser />
                <FaCaretDown />
              </div>
              <FaShoppingCart />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
