import React from "react";
import Navbar from "../components/common/Navbar";
import Banner from "../components/ProductPage/ZingBanner";
import StackingCards from "../components/ProductPage/StackingCards";
import RevealScroll from "../components/ProductPage/RevealScroll";
import Transition from "../components/ProductPage/Transition";
import ProductShow from "../components/ProductPage/ProductShow";
import BikeInfo from "../components/ProductPage/BikeInfo";

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <BikeInfo />
      <StackingCards />
      <Transition />
      <RevealScroll />
      <ProductShow />
    </div>
  );
};

export default ProductPage;
