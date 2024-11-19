import Facility from "./Facility";

const Arrival = () => {
  return (
    <div className="container arrival-section">
      <div className="heading">
        <h3>Our Products</h3>
      </div>
      <div className="row">
        <div className="col">
          <h3>New Arrival</h3>
        </div>
      </div>

      <div className="row my-4">
        <div className="col-md-6 arrival-left-img">
          <img src="/images/arrival1.png" alt="" />
        </div>
        <div className="col-md-6 arrival-right-img ">
          <img src="/images/arrival2.png" alt="" className="my-sm-2" />
          <img src="/images/Frame 737.png" alt="" className="mt-3" />
        </div>
      </div>
      <div className="mb-5">
        <Facility />
      </div>
    </div>
  );
};

export default Arrival;
