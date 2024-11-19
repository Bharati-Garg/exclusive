import Carousel from "./Carousel";
import React, { useState } from "react";

const Product = () => {
  const timeArr = ["Days", "Hours", "Minutes", "Seconds"];
  const [time, setTime] = useState(["03", "23", "19", "56"]);
  return (
    <>
      <div className="container slider-section ">
        <div className="heading">
          <h3>Today’s</h3>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <h3>Flash Sales</h3>
          </div>
          <div className="col-md-4 timer">
            <table>
              <thead>
                {timeArr.map((ele, index) => (
                  <th key={index}> {ele}</th>
                ))}
              </thead>
              <tbody>
                <tr>
                  {time.map((ele, index) => (
                    <td key={index}>
                      {ele} <span>:</span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
