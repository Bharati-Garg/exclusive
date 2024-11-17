import { CiHeart } from "react-icons/ci";

const ColorSize = () => {
  return (
    <div>
      <div className="d-flex">
        <p className="colour">Colours:</p>
        <input type="radio" className="radioOne" />
        <input type="radio" className="radiotwo" />
      </div>
      <div className="d-flex">
        <p className="size">Size:</p>
        <p className="xs">XS</p>
        <p className="xs">S</p>
        <p className="m">M</p>
        <p className="xs">XL</p>
        <p className="xs">L</p>
      </div>
      <div>
        <button className="minus">-</button>
        <button className="two">2</button>
        <button className="plus">+</button>
        <button className="buy">Buy Now</button>
        <CiHeart className="heart" />
      </div>
    </div>
  );
};

export default ColorSize;
