"use client";
import React, { useState } from "react";
import ProductSlider from "../../components/productdetails/ProductSlider";
import { CiHeart } from "react-icons/ci";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoIosStar, IoMdFlame } from "react-icons/io";
import {
  FaMinus,
  FaMobileAlt,
  FaPhone,
  FaPlus,
  FaShippingFast,
} from "react-icons/fa";
import { PiHandshakeBold } from "react-icons/pi";
import { BiSolidPackage, BiSolidShieldX } from "react-icons/bi";
import QR from "../../images/QR.png";

import Download from "../../images/Download.png";

import Store from "../../images/Store.png";

import Chat from "../../images/Chat.png";

import special from "../../images/special.jpg";
import { IoFilter } from "react-icons/io5";
import Pagination from "../../components/productdetails/Pagination";
import Toppicks from "../../components/productdetails/Toppicks";
import Image from "next/image";

const ProductDetails = () => {
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
    <>
      <div className="lg:p-12 p-2 grid lg:grid-cols-6 grid-cols-1 lg:gap-12 gap-2">
        <div className="  col-span-4  bg-[#fefefe] rounded-lg shadow-lg p-4">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <ProductSlider />
            <div className="">
              <h1 className="font-bold text-3xl">Leather Mens Slipper</h1>
              <h1 className="flex items-center gap-3 text-gray-500 pt-3">
                <IoIosStar className="text-[#f52828]" />
                <span className="">4.5 </span> Recommeded by 96% 137 purchase
              </h1>
              <h1 className="text-[#666666] text-2xl pt-4">
                Price: <span className="text-[#f52828] font-bold">$440</span>{" "}
                <span className=" line-through">$550 </span>
              </h1>
              <Image src={special} />
              <div className="flex flex-row gap-12 pt-6 font-semibold">
                <p>Category</p>
                <p>Slippers</p>
              </div>
              <div className="flex flex-row gap-12 pt-6 font-semibold">
                <p>Brand Name</p>
                <p>Cosmetic World</p>
              </div>{" "}
              <div className="flex flex-row gap-12 pt-6 font-semibold items-center">
                <p>Quantity</p>
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
              <div className="flex flex-row items-center gap-6 pt-8">
                <button className="lg:px-12 px-8 py-2.5  text-white bg-[#f64343] rounded-lg shadow-md focus:shadow-none duration-100 ring-offset-2  focus:ring-2">
                  Buy Now
                </button>
                <button className="lg:px-12 px-8 py-2.5  text-white bg-black rounded-lg shadow-md focus:shadow-none duration-100 ring-offset-2  focus:ring-2">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 bg-[#fefefe] shadow-lg p-4 rounded-lg">
          <p className="font-bold">Delivery Details</p>
          <div className="flex flex-row justify-between pt-4">
            <div className="flex flex-row gap-6 items-center">
              <FaShippingFast className="text-2xl" />
              <div>
                <p>Shipping Cost</p>
                <p className="text-xs text-gray-600">
                  Gurranteed by 12-21 Sept
                </p>
              </div>
            </div>

            <h1 className="font-bold">#120</h1>
          </div>

          <div className="flex flex-row pt-6 items-center gap-6">
            <PiHandshakeBold className="text-2xl" />
            <p>Cash on Deliver is Available</p>
          </div>

          <hr className="my-6" />
          <p className="font-bold">Return & Warranty</p>
          <div className="flex flex-row gap-6 items-center pt-4">
            <BiSolidPackage className="text-2xl" />
            <div>
              <p>7 Day Return</p>
            </div>
          </div>
          <div className="flex flex-row gap-6 items-center pt-4">
            <BiSolidShieldX className="text-2xl" />
            <div>
              <p>Warranty is not avaliable</p>
            </div>
          </div>
          <hr className="my-6" />

          <div className="flex flex-rwo items-center ">
            <Image src={QR} className="h-[126px] w-[126px]" />
            <Image src={Download} className="h-full w-full" />
          </div>
          <div className="flex flex-row items-center gap-3 font-semibold">
            <FaMobileAlt className="text-4xl" /> Scan with your mobile
          </div>
        </div>
      </div>
      <div className="lg:p-12 p-2 grid lg:grid-cols-6 grid-cols-1 lg:gap-12 gap-2">
        <div className="  col-span-4  bg-[#fefefe] rounded-lg shadow-lg p-4 ">
          <div className="flex flex-row items-center justify-between">
            <h1>Review</h1>
            <div className="flex flex-row items-center gap-3 font-semibold">
              <IoIosStar className="text-[#f52828]" />
              <IoIosStar className="text-[#f52828]" />
              <IoIosStar className="text-[#f52828]" />
              <IoIosStar className="text-[#f52828]" />
              <IoIosStar /> 4.5
            </div>
            <div className="flex flex-row items-center gap-4 text-gray-500 border-l-2 px-6">
              <IoFilter /> Filter:
              <span className="font-bold text-black"> 4 Star </span>
            </div>
          </div>
          {/* Comments */}
          <div className="border-t mt-4 pt-6">
            <div className="flex flex-row items-center justify-between">
              <p className="font-semibold">Brooklyn Simmons </p>
              <p className="text-gray-400 text-xs">2 days ago</p>
            </div>
            <div className="flex flex-row items-center gap-3 font-semibold py-4">
              <IoIosStar className="text-[#f52828]" />
              <IoIosStar className="text-[#f52828]" />
              <IoIosStar className="text-[#f52828]" />
              <IoIosStar className="text-[#f52828]" />
              <IoIosStar />
            </div>
            <p>This Product is highly dope i 100% recommend it!</p>
          </div>
          <div className="border-t mt-4 pt-6">
            <div className="flex flex-row items-center justify-between">
              <p className="font-semibold">Frank Edwards</p>
              <p className="text-gray-400 text-xs">7 days ago</p>
            </div>
            <div className="flex flex-row items-center gap-3 font-semibold py-4">
              <IoIosStar className="text-[#f52828]" />
              <IoIosStar className="text-[#f52828]" />
              <IoIosStar className="text-[#f52828]" />
              <IoIosStar className="text-[#f52828]" />
              <IoIosStar />
            </div>
            <p>This Product is highly dope i 100% recommend it!</p>
          </div>
          <div className="border-t mt-4 pt-6">
            <div className="flex flex-row items-center justify-between">
              <p className="font-semibold">David Beckham</p>
              <p className="text-gray-400 text-xs">7 days ago</p>
            </div>
            <div className="flex flex-row items-center gap-3 font-semibold py-4">
              <IoIosStar className="text-[#f52828]" />
              <IoIosStar className="text-[#f52828]" />
              <IoIosStar className="text-[#f52828]" />
              <IoIosStar className="text-[#f52828]" />
              <IoIosStar />
            </div>
            <p>This Product is highly dope i 100% recommend it!</p>
          </div>

          <Pagination />
        </div>
        <div className="col-span-2 bg-[#fefefe] shadow-lg  rounded-lg">
          <div className="flex flex-row items-center justify-between p-4">
            <div>
              <p className="text-xs text-[#666666]">Sold by </p>
              <p className="text-[#555555] font-semibold">STORE HOUSE</p>
            </div>
            <Image src={Chat} className="cursor-pointer" />
          </div>
          <div className="bg-pink-100 flex flex-row justify-between">
            <div className="p-2 justify-between flex-col flex border border-red-300 w-full">
              <p className="text-gray-500 text-sm">Positive Seller Ratings</p>
              <p className="font-semibold text-3xl">76%</p>
            </div>
            <div className="p-2 justify-between flex-col flex border border-red-300 w-full">
              <p className="text-gray-500 text-sm">Ship on Time</p>
              <p className="font-semibold text-3xl">89%</p>
            </div>{" "}
            <div className="p-2 space-y-8 border border-red-300 w-full">
              <p className="text-gray-500 text-sm">Chat Response Rate</p>
              <p className="font-semibold text-3xl">97%</p>
            </div>
          </div>
          <Image
            src={Store}
            alt=" mx-auto"
            className="mx-auto mt-12 cursor-pointer"
          />
        </div>
      </div>

      <Toppicks />
    </>
  );
};

export default ProductDetails;
