import React from "react";
import "./Sidebar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [state2, setstate2] = useState("bx bx-menu");

  const [state, setstate] = useState("sidebar");
  let closeBtn = () => {
    if (state === "sidebar") {
      setstate("sidebar open");
      setstate2("bx bx-menu");
      document.getElementById("logo-nav").style.display = "none";
    } else {
      setstate("sidebar");
      setstate2("bx bx-menu");
      document.getElementById("logo-nav").style.display = "block";
    }
  };
  return (
    <>
      <div className="sidebarMain">
        <link
          href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
          rel="stylesheet"
        />
        <div className={state}>
          <div className="logo-details">
            <div className="logo_name">WINKEAT</div>
            <i className={state2} id="btn" onClick={closeBtn}></i>
          </div>
          <ul className="nav-list" style={{"padding":0}}>
            <li style={{"padding":"5px 0"}}>
              <Link to="/vendor/home">
                <i class="bx bxs-dashboard"></i>
                <span className="links_name">Dashboard</span>
              </Link>
              <span className="tooltip">Dashboard</span>
            </li>
            <li style={{"padding":"5px 0"}}>
              <Link to="/vendor/inventory">
                <i class="bx bx-food-menu"></i>
                <span className="links_name">Inventory</span>
              </Link>
              <span className="tooltip">Inventory</span>
            </li>
            <li style={{"padding":"5px 0"}}>
              <Link to="/vendor/setting">
                <i class="bx bx-cog"></i>
                <span className="links_name">settings</span>
              </Link>
              <span className="tooltip">settings</span>
            </li>

            <li className="profile" style={{"padding":"5px 10px"}}>
              <Link to="/vendor/logout">
                <span className="links_name">Logout</span>
                <i className="bx bx-log-out" id="log_out"></i>
              </Link>
              <span className="tooltip">Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
