// import { Link } from "react-router-dom";

const BreadcrumOne = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb" className="m-5">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Account</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Gaming</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Havic HV G-92 Gamepad
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumOne;
