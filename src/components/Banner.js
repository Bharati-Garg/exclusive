import React from "react";

const Banner = () => {
  const arr = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <div className="container banner my-5">
      <div className="row">
        <div className="col-md-3 banner-list">
          <ul>
            {arr.map((ele, index) => (
              <li key={index}>
                <a href="#">{ele}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-8 banner-img mx-auto">
          <img src="images/Banner-slider.png" alt="BannerImg" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
