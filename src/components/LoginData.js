import React from "react";
import { Link } from "react-router-dom";

const LoginData = () => {
  return (
    <div className="container-fluid my-5 login-data">
      <div className="row">
        <div className="col-md-6 img-fluid">
          <img src="/images/dl.beatsnoop 1.png" alt="" />
        </div>

        <div className="col-md-6 login-data-content">
          <div className="form-data">
            <h4>Log in to Exclusive</h4>
            <span>Enter your details below</span>
            <form action="" className="py-4">
              <input
                type="email"
                name=""
                id=""
                placeholder="Email or Phone Number"
              />
              <input type="password" placeholder="Password" />
            </form>
            <div className="login-btn  ">
              <Link to="/Home">
                <button> Log In</button>
              </Link>
              <span> Forget Password?</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginData;
