import React from "react";
import ProductDataContent from "./ProductDataContent";

const ProductDataImage = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 d-flex flex-column justify-content-between">
            <img src="/images/image1.png" alt="img" className="img" />
            <img src="/images/image 2.png" alt="img" className="img" />
            <img src="/images/image 3.png" alt="img" className="img" />
            <img src="/images/image 4.png" alt="img" className="img" />
          </div>
          <div className="col-md-5">
            <img src="/images/image 5.png" alt="img" className="big-img" />
          </div>
          <div className="col-md-5">
            <ProductDataContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDataImage;
