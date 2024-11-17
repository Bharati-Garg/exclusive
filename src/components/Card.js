import CardContent from "./CardContent";
import cardData from "../utils/cardData";

const Card = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col card-data mt-5">
            {cardData.map((value, index) => (
              <CardContent details={value} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
