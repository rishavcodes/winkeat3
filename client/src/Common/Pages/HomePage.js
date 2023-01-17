import React, { useEffect } from "react";
import "../Styles/HomePage.css";
import { Link ,useNavigate} from "react-router-dom";


const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("vendorId");
    localStorage.removeItem("cartData");
    if(localStorage.getItem("user")===true){
      navigate('/home');
    }
  }, [navigate]);

  
 
  return (
    <>
    <div className="body1">
      <div id="container-landing-page">
        <div className="nav">
          <div className="nav-items">
            <img
              className="nav-logo"
              src="/images/winkeat-logo.png"
              alt="not available"
            />
            <i>
              <li className="nav-buttons">
              <Link to="login">
                <button className="signin-btn">Sign In</button>
              </Link>
              <Link to="register">
                <button className="signup-btn">Sign Up</button>
              </Link>
              </li>
            </i>
          </div>
        </div>
        <body className="landingPage-body">
          <p className="winkeat-typo">
            <span className="winkeat">WinkEat</span><br/>
            <span className="winkeat-quote">Get your </span><br/>
            <span className="winkeat-quote">food ready</span><br/>
            <span className="winkeat-quote">before you</span><br/>
            <span className="winkeat-quote">reach</span>
          </p>
          <img className="winkeat-home-img" src="/images/phon.png" alt="Not available" />
        </body>
        <footer className="landing-page-footer">
          <p><Link to="/vendor/login">Login </Link>as Vendor</p>
          <p>Let's enhance your business <Link to="/contact">Contact Us </Link></p>
        </footer>
      </div>
      </div>
    </>
  );
};

export default LandingPage;
