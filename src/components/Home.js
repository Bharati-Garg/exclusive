import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Product from "./Product";
import Category from "./Category";
import Selling from "./Selling";
import Footer from "./Footer";
import ProductPage from "./ProductPage";
import Arrival from "./Arrival";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Product />
      <Category />
      <Selling />
      <ProductPage />
      <Arrival />
      <Footer />
    </div>
  );
};

export default Home;
