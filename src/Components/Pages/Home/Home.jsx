import React from "react";
import Banner from "../../Banner";
import WhyChoose from "../../WhyChoose";
import CustomerReviews from "../../Review";
import WritersBlogs from "../../WritersBlogs";
import LatestBooks from "../../LatestBooks";

const Home = () => {
  return (
    <div className="w-7xl mx-auto">
      <Banner></Banner>
      <LatestBooks></LatestBooks>
      <WhyChoose></WhyChoose>
      <CustomerReviews></CustomerReviews>
      <WritersBlogs></WritersBlogs>
    </div>
  );
};

export default Home;
