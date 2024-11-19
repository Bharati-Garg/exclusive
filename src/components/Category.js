import React from "react";
import CategoryData from "../utils/categoryData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Category = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <>
      <div className="container my-5 category-section">
        <div className="heading">
          <h3>This Month</h3>
        </div>
        <div className="row d-flex">
          <div className="col">
            {" "}
            <h3>Browse By Category</h3>
          </div>
        </div>

        <div className="row ">
          <Slider {...settings}>
            {CategoryData.map((item, index) => (
              <div className="category-box" key={index}>
                <img src={item.img} alt="mobile" />
                <h6> {item.name}</h6>
              </div>
            ))}
          </Slider>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Category;
