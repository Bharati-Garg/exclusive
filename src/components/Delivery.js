import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";

const Delivery = () => {
  return (
    <>
      <div className="d-flex">
        <div>
          <TbTruckDelivery className="truck" />
        </div>
        <div>
          <h6 className="free">Free Delivery</h6>
          <a className="enter">
            Enter your postal code for Delivery Availability
          </a>
        </div>
      </div>
      <hr />
      <div className="d-flex">
        <div>
          <HiOutlineArrowPathRoundedSquare className="truck" />
        </div>
        <div>
          <h6 className="return">Return Delivery</h6>
          <a className="enter">Free 30 Days Delivery Returns. Details</a>
        </div>
      </div>
    </>
  );
};

export default Delivery;
