"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/assests/KoinXLogo.png";
import img from "../../public/assests/Shape.png";
 import Link from "next/link";
 
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center py-4 px-10 bg-[#ffffff]">
        <div className="">
          <Image src={logo} alt="..." />
        </div>
        <div className=" hidden sm:flex flex items-center">
          <div className="font-inter font-semibold hover:cursor-pointer  mx-6">
            Crypto Taxes
          </div>
          <div className="font-inter font-semibold hover:cursor-pointer   mx-6">
            Free Tools
          </div>
          <div className="font-inter font-semibold hover:cursor-pointer  mx-6">
            Resource Center
          </div>
          <button className="font-inter py-2 mx-6 px-4 text-white rounded-[7px] font-semibold bg-gradient-to-r from-[#2870EA] to-[#1B4AEF]">
            Get Started
          </button>
        </div>
        <div className="sm:hidden" onClick={toggleMenu}>
          <Image src={img} alt="..." />
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-10 right-8 sm:hidden h-[95vh] w-[100vw] flex flex-col items-center justify-center bg-transparent backdrop-blur-md  ">
          <div className="font-inter font-semibold hover:cursor-pointer my-8 mx-6">
            Crypto Taxes
          </div>
          <div className="font-inter font-semibold hover:cursor-pointer my-8  mx-6">
            Free Tools
          </div>
          <div className="font-inter font-semibold hover:cursor-pointer my-8 mx-6">
            Resource Center
          </div>
          <button className="font-inter py-2 mx-6 px-4 text-white rounded-[7px] my-8 font-semibold bg-gradient-to-r from-[#2870EA] to-[#1B4AEF]">
            Get Started
          </button>
        </div>
      )}
    </>
  );
}
