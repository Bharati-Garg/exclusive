import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import ColorSize from "./ColorSize";
import Delivery from "./Delivery";

const ProductDataContent = () => {
  return (
    <div>
      <h2 className="havic">Havic HV G-92 Gamepad</h2>
      <FaStar className="star" />
      <FaStar className="star" />
      <FaStar className="star" />
      <FaStar className="star" />
      <CiStar className="star-empty" />
      <span className="review">(150 Reviews) | </span>
      <span className="stock"> In Stock</span>
      <h4 className="dolor">$192.00</h4>
      <p className="para">
        PlayStation 5 Controller Skin High quality vinyl with air channel
        adhesive for easy bubble free install & mess free removal Pressure
        sensitive.
      </p>
      <ColorSize />
      <div className="delivery">
        <Delivery />
      </div>
    </div>
  );
};

export default ProductDataContent;
