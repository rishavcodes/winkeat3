import React, { useState,useEffect } from "react";
import "../Styles/VendorLogin.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";

const VendorLogin = () => {
    const navigate = useNavigate();
    useEffect(() => {
      try {
        fetch("/api/vendor/getdata", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        }).then((res) => {
          if (res.status === 200) {
            navigate("/vendor/home");
          } else if (res.status === 401) {
            navigate("/vendor/login");
          } else if (res.status === 422) {
            navigate("/vendor/login");
          }
        });
      } catch (error) {
        navigate("/vendor/login");
      }
    }, [navigate]);

    const [vendor, setVendor] = useState({
        phone: "",
        password: "",
      });
      let name, value;
      const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setVendor({ ...vendor, [name]: value });
      };
      const postData = async (e) => {
        e.preventDefault();
        const { phone, password } = vendor;
        const res = await fetch("/api/vendor/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone,
            password,
          }),
        });
        const data = await res.json();
        if (!data) {
          window.alert("login problem");
        } else if (res.status === 400) {
          window.alert("Please fill the data");
        } else if (res.status === 401) {
          alert("Please verify your phone no to complete the process");
        } else if (res.status === 402) {
          window.alert("Invalid Credential");
        } else if (res.status === 201) {
          window.alert("Login failed");
        } else if (res.status === 422) {
          alert("Please enter a valid Mobile Number");
        } else {
          window.alert("Login Successful");
          navigate("/vendor/home");
        }
      };
  return (
    <>
    <div className="login-body">
      <div className="content-box-login">
        <div className="logo-box">
          <img
            className="form-img-login"
            src="/images/phoneLogin.png"
            alt="not available"
          />
        </div>
        <div className="form-box-login">
          <div className="form-nav">
            <div className="arrow-icon">
            <Link to="/">
              <ArrowBackIcon className="arrow" />
            </Link>
            </div>
            <div>
            <img
              className="winkeat-logo-form"
              src="/images/winkeat-logo2.png"
              alt="not available"
            />

            </div>
          </div>

          <form action="">
            <div className="input-form-login">
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Mobile Number"
                autoComplete="off"
                value={vendor.phone}
                onChange={handleInput}
              />
            </div>
            <div className="input-form-login">
              <input 
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                autoComplete="off"
                value={vendor.password}
                onChange={handleInput}
              />
            </div>

            {
              vendor.phone.length===10&& vendor.password.length>=8?
              <button className="submit-btn-login" onClick={postData}>Login</button>
              :
              <button className="submit-btn-login_not submit-btn-login" disabled>Login</button>

            }

          <div className="form-footer">
          <div className="footer-top">
            <span>Are You a <Link to="/login">User</Link> ?</span><br/>
            <span>Forgot Password?</span><br/>
            <span><Link>Contact Us</Link></span>
          </div>

          </div>
          </form>
          
        </div>
      </div>
      </div>
    </>
  );
};

export default VendorLogin;
