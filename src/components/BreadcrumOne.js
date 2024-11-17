import { Link } from "react-router-dom";

const BreadcrumOne = () => {
  return (
    <>
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
    </>
  );
};

export default BreadcrumOne;
