"use client";
import React, { useState } from "react";
import Face from "../images/face.jpeg";
import { FaUserCog } from "react-icons/fa";
import Cup from "../images/Cup.png";

import icon1 from "../images/icon1.png";

import icon2 from "../images/icon2.png";

import icon3 from "../images/icon3.png";

import icon6 from "../images/icon6.png";

import {
  HiOutlineClipboardDocument,
  HiOutlinePuzzlePiece,
  HiOutlineHeart,
  HiOutlineUser,
  HiOutlineTruck,
  HiOutlineCreditCard,
  HiOutlineLockClosed,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";
import { BsBagCheck } from "react-icons/bs";
import { LiaShippingFastSolid, LiaUsersSolid } from "react-icons/lia";
import OrderHistory from "../../components/myaccount/OrderHistory";

import MyReviews from "../../components/myaccount/MyReviews";
import Wishlist from "../../components/myaccount/Wishlist";
import PersonalInformation from "../../components/myaccount/PersonalInformation";
import ShippingAddress from "../../components/myaccount/ShippingAddress";
import PaymentMethods from "../../components/myaccount/PaymentMethods";
import ChangePassword from "../../components/myaccount/ChangePassword";
import HelpAndQuestions from "../../components/myaccount/HelpAndQuestions";
import Image from "next/image";

const MyAccount = () => {
  const [activeComponent, setActiveComponent] = useState("My Orders");

  const navigation = [
    {
      name: "My Orders",
      icon: <BsBagCheck className="w-5 h-5" />,
      component: <OrderHistory />,
    },
    {
      name: "My Reviews",
      icon: <Image src={icon1} className="w-5 h-5" alt="Reviews" />,
      component: <MyReviews />,
    },
    {
      name: "Wishlist",
      icon: <Image src={icon2} className="w-5 h-5" alt="Wishlist" />,
      component: <Wishlist />,
    },
    {
      name: "Personal Information",
      icon: <Image src={icon3} className="w-5 h-5" alt="Personal Info" />,
      component: <PersonalInformation />,
    },
    {
      name: "Shipping Address",
      icon: <LiaShippingFastSolid className="w-5 h-5" />,
      component: <ShippingAddress />,
    },
    {
      name: "Payment Methods",
      icon: <HiOutlineCreditCard className="w-5 h-5" />,
      component: <PaymentMethods />,
    },
    {
      name: "Change Password",
      icon: <Image src={icon6} className="w-5 h-5" alt="Change Password" />,
      component: <ChangePassword />,
    },
    {
      name: "Need help and Questions?",
      icon: <HiOutlineQuestionMarkCircle className="w-5 h-5" />,
      component: <HelpAndQuestions />,
    },
  ];

  return (
    <div className="bg-[#fafafafa]">
      <div className="grid lg:grid-cols-6 grid-cols-1 lg:p-12 gap-12]">
        <div className="lg:col-span-2 col-span-6 ">
          <div className="lg:px-6 px-2">
            <p className="text-[24px] font-semibold pb-6 lg:px-8 px-0">
              My Account
            </p>
            {/* User */}
            <div className="flex gap-2 items-center justify-between lg:px-8 px-0">
              <div className="inline-flex gap-3 items-center">
                <Image src={Face} className="h-[54px] w-[54px] rounded-full" />
                <div>
                  <p className="font-bold">Cameron W.</p>
                  <p className="inline-flex items-center text-xs gap-2 text-[#2e2c2c]">
                    {" "}
                    <FaUserCog className="text-orange-500 text-[14px]" />
                    FavourSelect User
                  </p>
                </div>
              </div>

              <div className="bg-orange-200 text-xs text-orange-800 p-2 flex gap-1 rounded-lg">
                <Image src={Cup} className="h-[16px] w-[16px]" />
                Level 1
              </div>
            </div>
            {/* Sidebar */}
            <div className="flex flex-col h-full py-8">
              <div className="flex-1 flex flex-col h-full overflow-auto">
                <ul className="px-4 text-sm font-medium flex-1">
                  {navigation.map((item, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => setActiveComponent(item.name)}
                        className={`flex items-center gap-x-3 text-[#2e2c2c] p-2 px-4 rounded-sm hover:border-l border-[#f52828] hover:bg-[#f52828]/10 active:bg-gray-100 duration-150 w-full text-left ${
                          activeComponent === item.name
                            ? "bg-[#f52828]/10 border-l border-[#f52828]"
                            : ""
                        }`}
                      >
                        <div className="text-[#5c5a5a]">{item.icon}</div>
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 col-span-6 ">
          {navigation.find((item) => item.name === activeComponent)?.component}
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
