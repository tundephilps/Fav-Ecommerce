import React from "react";
import Hero from "../../components/homepage/Hero";
import BestDeals from "../../components/homepage/BestDeals";
import Promotions from "../../components/homepage/Promotions";
import Popular from "../../components/homepage/Popular";
import Collection from "../../components/homepage/Collection";
import Ads from "../images/Ads.png";
import Explore from "../../components/homepage/Explore";
import Image from "next/image";

const Homepage = () => {
  return (
    <>
      <Hero />
      <BestDeals />
      <Promotions />
      <Popular />
      <Image src={Ads} className="w-full h-[350px] lg:px-16 px-0 py-8" />
      <Collection />
      <Explore />
    </>
  );
};

export default Homepage;
