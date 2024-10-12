"use client";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoMdFlame } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md";

import Shop from "../images/shop.png";
import { IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import Link from "next/link";

const Categories = () => {
  const categories = [
    { name: "Outlet", logo: Shop },
    { name: "Kids", logo: Shop },
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

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const posts = [
    {
      Price: "$42",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
    {
      Price: "$42",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
    {
      Price: "$42",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
    {
      Price: "$42",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
    {
      Price: "$42",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
    {
      Price: "$42",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
    {
      Price: "$42",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
    {
      Price: "$42",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
  ];

  const [showPriceInputs, setShowPriceInputs] = useState(false);

  const togglePriceInputs = () => {
    setShowPriceInputs(!showPriceInputs);
  };
  return (
    <div className="grid lg:grid-cols-8 grid-cols-1 lg:p-12 gap-12 bg-[#f8f8f8]">
      <div className="lg:col-span-2 col-span-8 bg-white rounded-xl p-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex items-center gap-2 p-2 cursor-pointer  rounded-lg hover:bg-gray-100"
          >
            <Image
              src={category.logo}
              alt={category.name}
              className="w-8 h-8"
              width={100}
              height={100}
            />

            <p>{category.name}</p>
          </div>
        ))}
      </div>
      <div className="lg:col-span-6 col-span-8 bg-white rounded-xl p-6">
        <div className="flex flex-wrap gap-6 items-center">
          <div>
            <label className="text-xs text-gray-500 py-2">Sort By</label>
            <div className="relative  w-52">
              <IoMdArrowDropdown className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3" />

              <select className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-red-600 focus:ring-2">
                <option>Default</option>
                <option>Price low to high</option>
                <option>Price high to low</option>
                <option>Newest first</option>
                <option>By Rating</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-500 py-2">Price</label>
            <div
              className="relative  w-52 p-1.5 border border-gray-300 rounded-md "
              onClick={togglePriceInputs}
            >
              <p className="text-sm"> Any</p>

              <IoMdArrowDropdown className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3" />
            </div>
            {showPriceInputs && (
              <div className="absolute z-10 bg-white mt-2 p-2 border border-gray-300 rounded-md">
                <div className="mb-2">
                  <label htmlFor="priceFrom" className="text-xs text-gray-500">
                    From
                  </label>
                  <input
                    type="number"
                    id="priceFrom"
                    className="mt-1 p-1 w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="priceTo" className="text-xs text-gray-500">
                    To
                  </label>
                  <input
                    type="number"
                    id="priceTo"
                    className="mt-1 p-1 w-full border border-gray-300 rounded-md"
                  />
                </div>
                <button className="w-full mt-2 px-4 py-2 bg-red-500 text-white rounded-md">
                  Apply
                </button>
              </div>
            )}
          </div>

          <div className=" text-xs text-red-400 p-3 bg-red-50 rounded-full cursor-pointer">
            Reset Filters
          </div>
        </div>

        <div className="grid gap-x-4 gap-y-10  sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((items, key) => (
            <div className="w-full mx-auto group sm:max-w-sm" key={key}>
              <div className="cursor-pointer">
                <div className="relative">
                  <img
                    src={items.img}
                    loading="lazy"
                    alt={items.Price}
                    className="w-full rounded-lg"
                  />
                  <div className="flex flex-row items-center justify-between w-full absolute p-2 top-1 ">
                    <div className="p-2 bg-[#f52828] text-white rounded-md">
                      -10%
                    </div>
                    <div
                      className={`rounded-full p-2 cursor-pointer ${
                        isFavorite ? "bg-gray-100" : "bg-gray-100"
                      } transition-all duration-300`}
                      onClick={toggleFavorite}
                    >
                      {isFavorite ? (
                        <FaHeart className="text-2xl text-red-600 transition-all animate-pulse duration-300 transform scale-80" />
                      ) : (
                        <CiHeart className="text-2xl text-gray-500 transition-all duration-300" />
                      )}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
                    <button className="w-full px-4 py-4 flex flex-row items-center gap-4 justify-center text-white duration-300 transform translate-y-full group-hover:translate-y-0 bg-black/50 rounded-sm shadow-md focus:shadow-none ring-offset-2 ring-indigo-600 focus:ring-2">
                      <FaCartPlus /> ADD TO CART
                    </button>
                  </div>
                </div>
                <Link href="/ProductDetails" className="mt-3 space-y-2">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-3">
                      <h3 className="text-lg text-red-600 duration-150 group-hover:text-red-400 font-semibold">
                        {items.Price}
                      </h3>
                      <span className="block text-gray-600 text-sm line-through">
                        {items.Oldprice}
                      </span>
                    </div>

                    <div className="flex flex-row items-center gap-2 rounded-full p-1.5 text-xs">
                      <MdOutlineStarPurple500 className="text-yellow-500" />{" "}
                      {items.review} <p className="text-gray-400">/ 1000+</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                    {items.desc}
                  </p>
                  <div className="flex flex-row items-center gap-3">
                    <div className="flex flex-row items-center gap-2 rounded-full p-1.5 bg-red-100 text-xs text-gray-500">
                      <p className="text-red-400">Sale</p> 11 days
                    </div>
                    <div className="flex flex-row items-center gap-2 rounded-full p-1.5 bg-red-100 text-xs text-gray-500">
                      <IoMdFlame className="text-yellow-500" /> Best Seller
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
