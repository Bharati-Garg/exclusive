import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container-fluid main-Header">
        <div className="row top-header">
          <div className="col d-flex justify-content-between align-items-center">
            <h5 className="mx-auto pt-2">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%! <a href="#"> Shop Now</a>
            </h5>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                English
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Hindi
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row my-2">
          <nav className="navbar navbar-expand-lg">
            <div className="container bottom-header">
              <a className="navbar-brand" href="#">
                Exclusive
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  <i class="fa-solid fa-bars"></i>
                </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                  <li className="nav-item">
                    <Link to="/Home" className="text-decoration-none">
                      <a className="nav-link" aria-current="page" href="#">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="text-decoration-none">
                      <a className="nav-link" href="#">
                        About
                      </a>
                    </Link>
                  </li>
                  <Link to="/" className="text-decoration-none">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Sign Up
                      </a>
                    </li>
                  </Link>
                </ul>
                <form className="d-flex head-input">
                  <input
                    type="search"
                    placeholder="What are you looking for?"
                  />
                  {/* <i className="fa-solid fa-magnifying-glass my-auto"></i> */}
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
