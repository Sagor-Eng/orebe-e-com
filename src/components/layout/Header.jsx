import React, { useState } from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";
import logo from "/src/assets/logo.png";
import { Link } from "react-router-dom";
import { FaBars, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { ImCross } from "react-icons/im";

const Header = () => {
  const [show, setshow] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showPopupCart, setPopupCart] = useState(false);
  const handleCatagory = () => {
    setshow(!show)
    setShowUserMenu(false);
  }
  const handleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
    setshow(false);
  };
  const handleCart = () => {
    setPopupCart(!showPopupCart);
    setshow(false);
    setShowUserMenu(false);
  };
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
            <div onClick={handleCatagory} className="flex gap-x-3 items-center relative cursor-pointer">
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
              <div onClick={handleUserMenu} className="flex items-center relative cursor-pointer">
                <FaUser />
                <FaCaretDown />
              </div>
              {showUserMenu && (
                <div className="bg-[#262626] p-5 w-50 absolute mt-44.5 right-33.5 z-50">
                  <ul className="text-[#FFFFFFB2]">
                    <li className="border-b-2 border-[#FFFFFF24] hover:text-white hover:duration-700 p-4">
                      <Link to="/electronics">My Account</Link>
                    </li>
                    <li className="border-b-2 border-[#FFFFFF24] hover:text-white hover:duration-700 p-4">
                      <Link to="/furniture">Log Out</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="relative">
              <FaShoppingCart onClick={handleCart} className="cursor-pointer text-xl" />
              {showPopupCart && (
                <div className="w-90 border border-[#F0F0F0] absolute right-0 top-full z-50 bg-white">
                  <div className="p-5 flex items-center justify-between bg-[#F5F5F3]">
                    <div className="flex items-center gap-x-5">
                      <div className="w-20 h-20 bg-[#D8D8D8]">
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-black mb-3">Black Smart Watch</h3>
                        <p className="text-sm font-bold text-black">$44.00</p>
                      </div>
                    </div>
                    <div className="cursor-pointer">
                      <ImCross className="text-[10px]" />
                    </div>
                  </div>
                  <div className="p-5 bg-white">
                    <h4 className="text-base text-menuTextC mb-3">
                      Subtotal: <span className="font-bold text-black ml-2">$44.00</span>
                    </h4>
                    <div className="flex justify-between mt-5">
                      <button className="py-4 px-10 border border-black text-sm font-bold text-black hover:bg-black hover:text-white duration-300">
                        View Cart
                      </button>
                      <button className="py-4 px-10 bg-black text-sm font-bold text-white border border-black hover:bg-white hover:text-black duration-300">
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Flex>
          {show && (
            <div className="bg-[#262626] p-5 w-65.75 absolute z-50">
              <ul className="text-[#FFFFFFB2]">
                <li className="border-b-2 border-[#FFFFFF24] hover:text-white hover:duration-700 p-4">
                  <Link to="/accessories">Accesories</Link>
                </li>
                <li className="border-b-2 border-[#FFFFFF24] hover:text-white hover:duration-700 p-4">
                  <Link to="/furniture">Furniture</Link>
                </li>
                <li className="border-b-2 border-[#FFFFFF24] hover:text-white hover:duration-700 p-4">
                  <Link to="/electronics">Electronics</Link>
                </li>
                <li className="border-b-2 border-[#FFFFFF24] hover:text-white hover:duration-700 p-4">
                  <Link to="/clothes">Clothes</Link>
                </li>
                <li className="border-b-2 border-[#FFFFFF24] hover:text-white hover:duration-700 p-4">
                  <Link to="/bags">Bags</Link>
                </li>
                <li className="border-b-2 border-[#FFFFFF24] hover:text-white hover:duration-700 p-4">
                  <Link to="/home-appliances">Home appliances</Link>
                </li>
              </ul>
            </div>
          )}
        </Container>
      </div>
    </>

  );
};

export default Header;
