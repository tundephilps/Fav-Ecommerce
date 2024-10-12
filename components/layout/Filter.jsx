"use client";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { BiLogoShopify } from "react-icons/bi";
import Shop from "../../images/shop.png";
import { BsFillGridFill } from "react-icons/bs";
import { FaTag } from "react-icons/fa";
import { HiGift } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

const Filter = () => {
  const categories = [
    { name: "Outlet", logo: Shop },
    { name: "Free gifts with purchase", logo: Shop },
    { name: "Home and Kitchen", logo: Shop },
    { name: "Electronics", logo: Shop },
    { name: "Smartphone Cases", logo: Shop },
    { name: "Home Appliances", logo: Shop },
    { name: "Outdoors & Garden", logo: Shop },
    {
      name: "Cars and Motorcycles",
      logo: Shop,
    },
    { name: "Beauty", logo: Shop },
    { name: "Health", logo: Shop },
    { name: "Shoes", logo: Shop },
    { name: "Mens Fashion", logo: Shop },
    { name: "Bags & Suitcase", logo: Shop },
    {
      name: "Hobbies & Creativity",
      logo: Shop,
    },
  ];

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="p-4 ">
      <div className="bg-[#f90606] text-[#f90606] h-[0.1px] my-4 w-full" />
      <div className="flex flex-wrap gap-4 justify-center px-3">
        <div
          className="lg:flex hidden flex-row items-center  gap-2 cursor-pointer"
          onClick={toggleMenu}
        >
          <BsFillGridFill /> All Categories
        </div>
        <Link
          href="/Categories"
          className="text-red-600 flex flex-row gap-2 items-center"
        >
          <FaTag />
          Outlet
        </Link>
        <Link
          href="/Categories"
          className="text-red-600 flex flex-row gap-2 items-center"
        >
          <HiGift /> Free gifts with purchase
        </Link>
        <Link href="/Categories">Lotion</Link>
        <Link href="/Categories">Bag</Link>{" "}
        <Link href="/Categories">T-Shirt</Link>
        <Link href="/Categories">Sport Accessories</Link>
        <Link href="/Categories">Health</Link>
        <Link href="/Categories">Watch</Link>
        <Link href="/Categories">Bag</Link>
        <Link href="/Categories">Shoes</Link>
        <Link href="/Categories">Mens Fashion</Link>
        <Link href="/Categories">Bags & Suitcase</Link>
        <Link href="/Categories">Hobbies & Creativity </Link>
      </div>
      <div className="bg-[#f90606] text-[#f90606] h-[0.1px] my-4 w-full" />
      {isMenuOpen && (
        <div className="mt-4 p-4 bg-white shadow-lg rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex items-center gap-2 p-2  rounded-lg hover:bg-gray-100"
              >
                <Image
                  src={category.logo}
                  alt={category.name}
                  className="w-8 h-8"
                />

                <p>{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
