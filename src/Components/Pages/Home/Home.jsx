import React from "react";
import Banner from "../../Banner";
import WhyChoose from "../../WhyChoose";
import CustomerReviews from "../../Review";
import WritersBlogs from "../../WritersBlogs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <WhyChoose></WhyChoose>
      <CustomerReviews></CustomerReviews>
      <WritersBlogs></WritersBlogs>
    </div>
  );
};

export default Home;
