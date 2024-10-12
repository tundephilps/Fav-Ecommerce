"use client";
import React from "react";
import Boxers from "../images/Boxers.png";
import Shades from "../images/Shades.png";
import Card from "../images/CreditCard.png";
import Coin from "../images/coinbase.png";
import Payoneer from "../images/Payoneer.png";
import { BsCreditCardFill } from "react-icons/bs";

import Pay1 from "../images/pay1.png";

import Pay2 from "../images/pay2.png";
import Pay3 from "../images/pay3.png";
import Pay4 from "../images/pay4.png";
import Pay5 from "../images/pay5.png";
import Pay6 from "../images/pay6.png";
import Pay7 from "../images/pay7.png";
import Pay8 from "../images/pay8.png";
import Pay9 from "../images/pay9.png";
import Pay10 from "../images/pay10.png";

import Paypal from "../images/Paypal.png";
import { BiEdit } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";
import Image from "next/image";

const CheckoutPage = () => {
  return (
    <div className="grid lg:grid-cols-6 grid-cols-1 lg:p-12 gap-12 bg-[#fefefefe]">
      <div className="lg:col-span-4 col-span-6 ">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex justify-between ">
            <p className="font-semibold">Contact</p>
            <p className="font-semibold">
              Already have an account?
              <span className="underline text-[#f64343] m-2">Log in </span>{" "}
            </p>
          </div>

          <form className="">
            <input
              type="email"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
              placeholder="Email"
            />
            <div className="flex flex-row items-center gap-2 py-4">
              <input type="checkbox" className="accent-red-500" />{" "}
              <p className="font-semibold">Email me with news and offers</p>{" "}
            </div>

            <p className="font-semibold">Shipping Address</p>
            <div className="flex flex-row items-center gap-8 pt-2">
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
                placeholder="First name"
              />{" "}
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
                placeholder="Last name"
              />
            </div>
            <input
              type="text"
              required
              className="w-full  mt-6 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
              placeholder="address"
            />
            <input
              type="text"
              required
              className="w-full  mt-6 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
              placeholder="Apartment, suite, etc. (optional)"
            />

            <div className="flex lg:flex-row flex-col items-center gap-8 pt-4">
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
                placeholder="City"
              />{" "}
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
                placeholder="State"
              />
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
                placeholder="Postal Code"
              />
            </div>
            <input
              type="number"
              required
              className="w-full  mt-6 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
              placeholder="Phone"
            />
            <div className="flex flex-row items-center gap-2 py-4">
              <input type="checkbox" className="accent-red-500" />{" "}
              <p className="font-semibold text-[#b0b0b0]">
                Save the information for the next time.
              </p>{" "}
            </div>

            <button className=" px-4 py-2 text-white font-medium bg-[#f64343] hover:bg-red-800 rounded-lg duration-150">
              Continue to shipping
            </button>
          </form>
        </div>

        <div className="bg-white rounded-xl p-6 mt-8 shadow-lg">
          <p className="font-semibold flex flex-row items-center gap-4 text-2xl">
            <BsCreditCardFill /> Payment Method
          </p>
          <hr className="my-4" />

          <div className="inline-flex">
            <button
              type="button"
              className="text-gray-900 flex flex-col items-center bg-white hover:bg-red-100 border border-gray-200 focus:ring-1 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center   me-2 mb-2"
            >
              <Image src={Card} className="h-8 w-8" />
              Credit/Debit Card
            </button>
            <button
              type="button"
              className="text-gray-900 lg:w-[166px] w-full flex flex-col items-center bg-white hover:bg-red-100 border border-gray-200 focus:ring-1 focus:outline-none focus:ring-red-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center   me-2 mb-2"
            >
              <Image src={Payoneer} className="h-8 w-8" />
              Payoneer
            </button>
            <button
              type="button"
              className="text-gray-900 lg:w-[166px] w-full flex flex-col items-center bg-white hover:bg-red-100 border border-gray-200 focus:ring-1 focus:outline-none focus:ring-red-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center   me-2 mb-2"
            >
              <Image src={Coin} className="h-8 w-8" />
              Coinbase
            </button>
          </div>

          <div className="bg-[#f4f4f4] border rounded-lg p-4  mt-4">
            <div className="flex flex-wrap gap-7 mt-4">
              <Image src={Pay9} className="h-[30px] w-[45px]" />
              <Image src={Pay4} className="h-[30px] w-[45px]" />
              <Image src={Pay8} className="h-[30px] w-[45px]" />
              <Image src={Pay6} className="h-[30px] w-[45px]" />
            </div>

            <div className="pt-8">
              <label className="font-semibold text-sm text-[#6e6d6d]">
                Card holder name
              </label>
              <input
                type="text"
                required
                className="w-full mt-2 bg-white px-3 py-2 text-gray-500  outline-none border focus:border-red-600 shadow-sm rounded-lg"
                placeholder="John Doe"
              />
            </div>
            <div className="pt-4">
              <label className="font-semibold text-sm text-[#6e6d6d]">
                Card number
              </label>
              <input
                type="number"
                required
                className="w-full mt-2 px-3 py-2 bg-white text-gray-500  outline-none border focus:border-red-600 shadow-sm rounded-lg"
                placeholder="xxxx xxxx xxxx xxxx"
              />
            </div>

            <div className="flex flex-row items-center pt-4 gap-8 w-full">
              <div className="w-full">
                <label className="font-semibold text-sm text-[#6e6d6d]">
                  Expiry date
                </label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 bg-white px-3 py-2 text-gray-500  outline-none border focus:border-red-600 shadow-sm rounded-lg"
                  placeholder="John Doe"
                />
              </div>
              <div className=" w-full">
                <label className="font-semibold text-sm text-[#6e6d6d]">
                  CVC
                </label>
                <input
                  type="number"
                  required
                  className="w-full mt-2 px-3 py-2  bg-white text-gray-500  outline-none border focus:border-red-600 shadow-sm rounded-lg"
                  placeholder="0000"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center gap-2 py-4">
            <input type="checkbox" className="accent-red-500" />{" "}
            <p className="font-semibold text-[#b0b0b0]">
              Save card details for future use
            </p>{" "}
          </div>

          <button className=" px-4 py-2 w-full text-white font-medium bg-[#f64343] hover:bg-red-800 rounded-lg duration-150">
            Pay Now
          </button>
        </div>
      </div>

      {/* Summary */}
      <div className="lg:col-span-2 col-span-6 ">
        <div className=" bg-white rounded-xl p-6 shadow-lg">
          <p className="font-semibold">Contact info</p>
          <p className="text-[#b0b0b0] text-sm font-semibold pt-2">
            St. Paul Road, Norris, SD 58560, Dakata USA
          </p>
          <p className="flex items-center gap-2 text-red-500 text-xs pt-4 font-semibold">
            <CiEdit /> Edit address
          </p>
        </div>

        <div className=" bg-white rounded-xl p-6 mt-8 shadow-lg">
          <p className="font-semibold">Order Summary</p>
          <div className="space-y-2 pt-4">
            <div className="flex justify-between gap-4 text-gray-500">
              <span>Item Total</span>
              <span className="font-extrabold text-black">04</span>
            </div>

            <div className="flex justify-between gap-4 text-gray-500">
              <span>Sub Total</span>
              <span className="font-extrabold text-black">$4000.99</span>
            </div>
            <div className="flex justify-between gap-4 text-gray-500">
              <span>Tax</span>
              <span className="font-extrabold text-black">$78</span>
            </div>
            <hr />
            <div className="flex justify-between gap-4 text-gray-800 text-1xl ">
              <span>Total</span>
              <span className="font-extrabold text-black">$134.99</span>
            </div>
          </div>
        </div>

        <p className="text-[#666666]  text-xs text-center pt-6">
          Express checkout
        </p>
        <button className="bg-[#ffc439] hover:bg-yellow-500 w-full rounded-lg mt-4 object-cover">
          <Image src={Paypal} className="mx-auto h-12" />
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
