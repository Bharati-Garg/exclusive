import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewSliderContent = ({ item }) => {
  return (
    <div>
      <img src={item.img} className="review-img" alt="img" />
      <h5 className="review-heading">{item.title}</h5>
      <p className="review-para">{item.para}</p>
      <div className="review-icon">
        <span>{item.iconOne}</span>
        <span>{item.iconTwo}</span>
        <span>{item.iconThree}</span>
      </div>
    </div>
  );
};

export default ReviewSliderContent;
