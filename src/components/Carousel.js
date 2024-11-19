import React from "react";
import data from "../utils/carouselData";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
          slidesToShow: 2,
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
    <div className="container">
      <div className=" row ">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div className="col-md-2 col-sm-12 mt-4 product-card" key={index}>
              <div className="card-box">
                <div className="card-btn mt-1">
                  <button>{d.discount}</button>
                  <CiHeart />
                </div>
                <Link to="/product">
                  <img src={d.img} alt="gamePad" />
                </Link>
              </div>
              <div className="card-body-box">
                <h6> {d.title} </h6>
                <label htmlFor="">
                  {d.price} <del>{d.del}</del>
                </label>

                <div className="rating">
                  <FaStar className="i" />
                  <FaStar className="i" />
                  <FaStar className="i" />
                  <FaStar className="i" />
                  <FaStar className="i" />
                  <span> ({d.review})</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="btn carousel-btn">
          <button>View All Products</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Carousel;
