"use client";
import React, { useState } from "react";
import EmptyCart from "../../components/shoppingcart/EmptyCart";
import Pay1 from "../../images/pay1.png";

import Pay2 from "../../images/pay2.png";
import Pay3 from "../../images/pay3.png";
import Pay4 from "../../images/pay4.png";
import Pay5 from "../../images/pay5.png";
import Pay6 from "../../images/pay6.png";
import Pay7 from "../../images/pay7.png";
import Pay8 from "../../images/pay8.png";
import Pay9 from "../../images/pay9.png";
import Pay10 from "../../images/pay10.png";
import Boxer from "../../images/Boxers.png";

import Bag from "../../images/Bag.png";

import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { HiTrash } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

const ShoppingCart = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="grid lg:grid-cols-6 grid-cols-1 lg:p-12 gap-12 bg-[#fefefe]">
      <div className="lg:col-span-4 col-span-6  ">
        {/* Cart */}
        <div className="bg-white rounded-xl  p-6 shadow-md">
          <h1 className="font-serif font-extrabold text-2xl pb-2">
            Shopping Cart
          </h1>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <input type="checkbox" className="accent-red-500" />{" "}
              <p className="font-semibold">Select all</p>{" "}
            </div>
            <div className="flex flex-row items-center gap-2">
              <HiTrash className="text-red-500 text-2xl" />
              <p className="font-semibold"> Delete all</p>{" "}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl mt-6 space-y-8 shadow-md">
          {/* Cart`` */}
          <div className="flex lg:flex-row  flex-col items-center justify-between space-y-4">
            <div className="flex lg:flex-row flex-col gap-4 items-center">
              <input type="checkbox" className="accent-red-500" />
              <Image src={Boxer} className="h-24 w-32" />
              <div className="text-center lg:text-start">
                <p className="text-black font-semibold text-2xl">Cosmetic</p>
                <p>Delivery: Estimated between 4th Aug to 7th Aug</p>
                <h1 className="font-extrabold text-3xl pt-4">
                  $527{" "}
                  <span className="line-through text-gray-400 font-extralight text-sm">
                    $599
                  </span>{" "}
                </h1>
              </div>
            </div>

            <div className=" flex lg:items-end items-center gap-12 flex-col">
              <HiTrash className="text-gray-500 text-2xl cursor-pointer" />
              <div className="border border-gray-400 flex flex-row gap-6 items-center rounded-lg cursor-pointer">
                <p
                  className="border border-gray-400 py-1 px-2 rounded-lg text-1xl"
                  onClick={handleDecrement}
                >
                  <FaMinus />
                </p>
                <p>{count.toString().padStart(2, "0")}</p>
                <p
                  className="border border-gray-400 py-1 px-2 rounded-lg text-1xl"
                  onClick={handleIncrement}
                >
                  <FaPlus />
                </p>
              </div>
            </div>
          </div>
          {/* Cart`` */}
          <div className="flex lg:flex-row flex-col items-center justify-between space-y-4">
            <div className="flex lg:flex-row flex-col gap-4 items-center">
              <input type="checkbox" className="accent-red-500" />
              <Image src={Bag} className="h-24 w-32" />
              <div className="text-center lg:text-start">
                <p className="text-black font-semibold text-2xl">Leather Bag</p>
                <p>Delivery: Estimated between 4th Aug to 7th Aug</p>
                <h1 className="font-extrabold text-3xl pt-4">
                  $600{" "}
                  <span className="line-through text-gray-400 font-extralight text-sm">
                    $599
                  </span>{" "}
                </h1>
              </div>
            </div>

            <div className=" flex lg:items-end items-center gap-12 flex-col">
              <HiTrash className="text-gray-500 text-2xl cursor-pointer" />
              <div className="border border-gray-400 flex flex-row gap-6 items-center rounded-lg cursor-pointer">
                <p
                  className="border border-gray-400 py-1 px-2 rounded-lg text-1xl"
                  onClick={handleDecrement}
                >
                  <FaMinus />
                </p>
                <p>{count.toString().padStart(2, "0")}</p>
                <p
                  className="border border-gray-400 py-1 px-2 rounded-lg text-1xl"
                  onClick={handleIncrement}
                >
                  <FaPlus />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Summary */}
      <div className="lg:col-span-2 col-span-6 bg-white rounded-xl p-6 shadow-md">
        <h1 className="font-serif font-extrabold text-2xl pb-4">
          Order Summary
        </h1>
        <p className="text-gray-400">Have a promo code? Apply it here</p>

        <div className="flex justify-between gap-8 mt-6 mb-8">
          <input className="border border-x-gray-200 rounded-md h-[44px] w-full" />
          <div className="bg-[#f2f3f7] text-black font-semibold p-2 px-6 rounded-xl">
            Apply
          </div>
        </div>
        <div className="space-y-4 font-semibold text-2xl ">
          <div className="flex justify-between  text-black">
            <span className="text-gray-600">Item Total:</span>
            <span>02</span>
          </div>

          <div className="flex justify-between gap-4 text-black">
            <span className="text-gray-600">Sub Total:</span>
            <span>$1797</span>
          </div>
          <hr />
          <div className="flex justify-between gap-4 text-gray-800 text-2xl font-extrabold">
            <span>Total</span>
            <span>$134.99</span>
          </div>
        </div>
        <Link href="/Checkout">
          <button className="px-5 py-2.5 w-full my-12 cursor-pointer font-semibold text-white bg-[#f64343] hover:bg-red-800 rounded-lg shadow-md focus:shadow-none duration-100 ring-offset-2  focus:ring-2">
            Check Out (3)
          </button>
        </Link>

        <p className="flex gap-5 items-center font-extrabold">We Accept</p>

        <div className="flex flex-wrap gap-7 pt-8">
          <Image src={Pay1} className="h-[30px] w-[45px]" />
          <Image src={Pay2} className="h-[30px] w-[45px]" />
          <Image src={Pay3} className="h-[30px] w-[45px]" />
          <Image src={Pay4} className="h-[30px] w-[45px]" />
          <Image src={Pay5} className="h-[30px] w-[45px]" />
          <Image src={Pay6} className="h-[30px] w-[45px]" />
          <Image src={Pay7} className="h-[30px] w-[45px]" />
          <Image src={Pay8} className="h-[30px] w-[45px]" />
          <Image src={Pay9} className="h-[30px] w-[45px]" />
          <Image src={Pay10} className="h-[30px] w-[45px]" />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
