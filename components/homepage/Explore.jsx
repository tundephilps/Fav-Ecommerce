import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Explore1 from "../../images/Explore1.jpg";

import Explore2 from "../../images/Explore2.jpg";
import Explore3 from "../../images/Explore3.jpeg";
import Image from "next/image";

const Explore = () => {
  return (
    <div>
      {" "}
      <div className="lg:px-16 px-2 py-12">
        <div className="flex flex-row items-center justify-between">
          <h1 className="font-serif font-extrabold text-2xl pb-4">
            Explore the country
          </h1>
          <p className="flex flex-row items-center gap-2">
            All Products <FaAngleRight />
          </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
          <div className="rounded-lg relative h-[250px]">
            <Image
              src={Explore1}
              className="h-full w-full object-cover rounded-lg"
            />
            <div className="text-gray-200 absolute  z-50 text-center space-y-2 inset-0 flex flex-col items-center top-5 font-extrabold">
              <h1 className="text-2xl">Products from Italy</h1>
            </div>
          </div>{" "}
          <div className="rounded-lg relative h-[250px]">
            <Image
              src={Explore2}
              className="h-full w-full object-cover rounded-lg"
            />
            <div className="text-gray-200 absolute  z-50 text-center space-y-2 inset-0 flex flex-col items-center top-5 font-extrabold">
              <h1 className="text-2xl">Products from India</h1>
            </div>
          </div>{" "}
          <div className="rounded-lg relative h-[250px]">
            <Image
              src={Explore3}
              className="h-full w-full object-cover rounded-lg"
            />
            <div className="text-gray-200 absolute  z-50 text-center space-y-2 inset-0 flex flex-col items-center top-5 font-extrabold">
              <h1 className="text-2xl">Products from USA</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
