const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="row justify-content-center">
        <div className="col-md-2 ">
          <h6>Exclusive</h6>
          <ul>
            <li>
              <a href="#">Subscribe</a>
            </li>
            <li>
              <a href="#">Get 10% off your first order</a>
            </li>
            <li>
              <input type="email" placeholder="Enter your email" />
            </li>
          </ul>
        </div>

        <div className="col-md-2">
          <h6>Support</h6>
          <ul>
            <li>
              <p>
                /1202, Satyamev Elite, T Junction, near Vakil Saheb Bridge,
                South Bopal, Ambli, Ahmedabad, Gujarat 380058
              </p>
            </li>
            <li>
              <a href="#">umang.k@ecodedash.com</a>
            </li>
            <li>
              <span>+91 1234567890</span>
            </li>
          </ul>
        </div>

        <div className="col-md-2">
          <h6>Account</h6>
          <ul>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Login / Register</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
            <li>
              <a href="#">Wishlist</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
          </ul>
        </div>

        <div className="col-md-2">
          <h6>Quick Link</h6>
          <ul>
            <li>
              <a href="#">Terms Of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="col-md-3">
          <h6>Download App</h6>
          <ul>
            <li>
              <a href="#">Subscribe</a>
            </li>
            <li>
              <p>Save $3 with App New User Only</p>
            </li>
            <li>
              <img alt="QrCode" src="/images/Qr Code.png" />
              <img alt="Frame" src="/images/Frame 718.png" />
            </li>
            <div className="icons">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
