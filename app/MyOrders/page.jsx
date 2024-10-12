import React from "react";
import EmptyOrder from "../../images/EmptyOrder.png";
import Image from "next/image";

const MyOrders = () => {
  return (
    <div>
      <div className="mx-auto w-full flex flex-col items-center justify-center py-8 space-y-5 text-center">
        <Image src={EmptyOrder} />
        <h1 className="text-5xl">Your have no current orders</h1>
        <button className="px-5 py-2.5 cursor-pointer text-white bg-red-600 rounded-lg shadow-md focus:shadow-none duration-100 ring-offset-2 ring-indigo-600 focus:ring-2">
          Browse products
        </button>
      </div>
    </div>
  );
};

export default MyOrders;
