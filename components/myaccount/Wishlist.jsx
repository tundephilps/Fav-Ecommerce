import React from "react";
import Bag from "../../images/Bag.png";

import Boxers from "../../images/Boxers.png";
import Shades from "../../images/Shades.png";
import Shoe from "../../images/Shoe.png";
import Pagination from "../../components/productdetails/Pagination";
import { FaShop } from "react-icons/fa6";
import { HiTrash } from "react-icons/hi";
import { GrCart } from "react-icons/gr";
import Image from "next/image";

const Wishlist = () => {
  const products = [
    {
      name: "2024 Trendy Men's Snekers casual shoes",
      size: 42,
      color: "Black",
      price: 544.43,
      quantity: "01",
      status: "Completed",
      image: Shoe,
      backgroundColor: "bg-red-500",
    },
    {
      name: "2024 Trendy Men's Snekers casual shoes",
      size: 42,
      color: "Black",
      price: 544.43,
      quantity: "01",
      status: "Canceled",
      image: Shades,
      backgroundColor: "bg-gray-200",
    },
    {
      name: "2024 Trendy Men's Snekers casual shoes",
      size: 42,
      color: "Black",
      price: 544.43,
      quantity: "01",
      status: "Completed",
      image: Bag,
      backgroundColor: "bg-blue-500",
    },
    {
      name: "2024 Trendy Men's Snekers casual shoes",
      size: 42,
      color: "Black",
      price: 544.43,
      quantity: "01",
      status: "Return",
      image: Boxers,
      backgroundColor: "bg-yellow-500",
    },
  ];

  return (
    <div className="bg-white rounded-xl lg:p-6 px-1 shadow-lg">
      <div className=" flex justify-between items-center">
        <p className="lg:text-[20px] text-sm font-semibold">My review</p>{" "}
        <select
          id="small"
          className="block w-52 p-2 mb-6 text-sm text-gray-900 border border-gray-500 rounded-md bg-transparent  "
        >
          <option selected>All time</option>

          <option value="FR">Last 24hrs</option>
          <option value="US">Last 7 days</option>
          <option value="CA">Past Month</option>
        </select>
      </div>

      <div className="max-full mx-auto bg-white  rounded-lg  lg:overflow-hidden overflow-auto overscroll-auto ">
        <table className="w-full border ">
          <thead className="w-full bg-[#f8f8f8] ">
            <tr className="bg-[#f8f8f8] w-full text-left text-[#2e2c2c]">
              <th className="py-2 px-4">Product</th>
              <th className="py-2 px-4  ">Price</th>
              <th className="py-2 px-4 opacity-0 ">Review</th>

              <th className="py-2 px-4 opacity-0 ">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="py-4 px-4">
                  <div className="flex items-center lg:w-[300px] w-[350px]">
                    <div
                      className={`w-20 h-20 ${product.backgroundColor} rounded-md mr-4 flex-shrink-0`}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="font-semibold w-full text-sm">
                        {product.name}
                      </p>
                      <p className="text-sm text-gray-600 ">
                        Size: {product.size}, Color: {product.color}
                      </p>
                      <p className="text-xs text-[#2e2c2c] inline-flex gap-2 items-center">
                        <FaShop /> Shoes Store
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 font-semibold">
                  ${product.price.toFixed(2)}
                </td>
                <td className="py-4 px-4">
                  <button
                    type="button"
                    className="text-[#f64343] inline-flex items-center gap-2 hover:text-white border border-[#f64343] hover:bg-red-800 focus:ring-1 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  "
                  >
                    <GrCart /> Add to cart
                  </button>
                </td>
                <td className="py-4 px-4 font-semibold">
                  <HiTrash className="text-gray-500 text-2xl cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
};

export default Wishlist;
