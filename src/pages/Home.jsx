import Banner from "../components/Home/Banner";
import React from "react";
import Navbar from "../components/common/Navbar";
import ChangingInfo from "../components/Home/ChangingInfo";
import ProductsV2 from "../components/Home/ProductsV2";
import ScrollImg from "../components/Home/ScrollImg";
import Reviews from "../components/Home/Reviews";
import Savings from "../components/Home/Saving";
import Footer from "../components/common/Footer";
import Gallery from "../components/Home/Gallery";
import ReviewV2 from "../components/Home/ReviewV2";
import StayConnected from "../components/Home/StayConnected";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <ChangingInfo />
      <ProductsV2 />
      <ScrollImg />
      <Gallery />
      <ReviewV2 />
     
      <StayConnected />
      <Savings />
      <Footer />
    </div>
  );
};

export default Home;
