import React from "react";
import Banner from "../../Banner";
import WhyChoose from "../../WhyChoose";
import CustomerReviews from "../../Review";
import WritersBlogs from "../../WritersBlogs";
import LatestBooks from "../../LatestBooks";
import Work from "../../Work";
import DeliveryMan from "../../DeliveryMan";
import PricingInfo from "../../PricingInfo";
import SafetySecurity from "../../SafetySecurity";

const Home = () => {
  return (
    <div className="w-7xl mx-auto">
      <Banner></Banner>
      <LatestBooks></LatestBooks>
      <Work></Work>
      <WhyChoose></WhyChoose>
      <SafetySecurity></SafetySecurity>
      <PricingInfo></PricingInfo>
      <DeliveryMan></DeliveryMan>
      <CustomerReviews></CustomerReviews>
      <WritersBlogs></WritersBlogs>
    </div>
  );
};

export default Home;
