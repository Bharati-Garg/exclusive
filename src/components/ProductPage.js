import React from "react";
import productPageData from "../utils/productPageData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ProductPage = () => {
  const settings = {
    className: "center",
    slidesToShow: 4,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesPerRow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="container productPage">
        <div className="heading">
          <h3>Our Products</h3>
        </div>
        <div className="row ">
          <div className="col ">
            <h3>Explore Our Products</h3>
          </div>
        </div>

        <div className="row ">
          <Slider {...settings}>
            {productPageData.map((data, index) => (
              <div className="product-page-card" key={index}>
                <div className="product-page-image">
                  <i class="fa-regular fa-heart"></i>
                  <Link to="/product">
                    <img src={data.ProductImage} alt="Products" />
                  </Link>
                </div>
                <div className="pro-content">
                  <h6>{data.name}</h6>
                  <label className="me-2">${data.price} </label>
                  <FaStar className="i" />
                  <FaStar className="i" />
                  <FaStar className="i" />
                  <FaStar className="i" />
                  <FaStar className="i" />
                  <span className="ms-1"> ({data.review})</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="btn pro-btn">
          <button>View All Products</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
