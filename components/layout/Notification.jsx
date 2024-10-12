import React from "react";
import { AiOutlineWarning } from "react-icons/ai";

const Notification = () => {
  return (
    <div className="absolute top-[15%] lg:right-40 right-0 lg:w-[30%] w-full bg-white shadow-lg rounded-lg p-4 z-10 space-y-2">
      <h2 className="text-lg font-bold mb-2 border-b border-gray-100">
        Notifications
      </h2>
      <div className="flex items-center text-yellow-600 mb-2 text-sm">
        <AiOutlineWarning className="mr-2" />
        <p>Login or sign up so you dont have to enter your details everytime</p>
      </div>
      <div className="flex items-center text-yellow-600 mb-2 text-sm">
        <AiOutlineWarning className="mr-2" />
        <p>New Discounts on Arrival</p>
      </div>
    </div>
  );
};

export default Notification;
