import React from "react";
import SellingData from "../utils/sellingData";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";

const Selling = () => {
  return (
    <div>
      <div className="container selling-section my-5">
        <div className="heading">
          <h3>Today’s</h3>
        </div>
        <div className="row selling-title">
          <div className="col d-flex justify-content-between">
            <h3>Best Selling Products</h3>
            <button> View All</button>
          </div>
        </div>

        <div className="row selling-card my-4">
          {SellingData.map((data, index) => (
            <div className="col-md-3" key={index}>
              <div className="card border-0">
                <CiHeart className="m-2 heart-set" />
                <MdOutlineRemoveRedEye className="m-2" />
                <Link to="/product">
                  <img src={data.img} alt="coat" />
                </Link>
              </div>
              <div className="card-body">
                <h6>{data.title}</h6>
                <label htmlFor="">
                  {data.price} <del>{data.del}</del>
                </label>
                <div className="rating">
                  <FaStar className="i" />
                  <FaStar className="i" />
                  <FaStar className="i" />
                  <FaStar className="i" />
                  <FaStar className="i" />
                  <span> {data.review}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row selling-product">
          <div className="col  mt-5">
            <img src="images/product.png" alt="product" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selling;
