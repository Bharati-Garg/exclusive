import FacilityContent from "./FacilityContent";
import facilityData from "../utils/facilityData";

const Facility = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col facility mt-5 mb-5">
            {facilityData.map((value, index) => (
              <FacilityContent detail={value} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
