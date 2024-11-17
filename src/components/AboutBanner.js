import React from "react";
import BreadcrumbTwo from "./BreadcrumbTwo";

const AboutBanner = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <BreadcrumbTwo />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="story">Our Story</h1>
            <p className="story-para">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p className="story-para">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="col-md-6">
            <img src="/images/girls.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
