import React from 'react';
import './Sidebar.css';
import { useState } from 'react'
import { Link } from 'react-router-dom';


export default function Sidebar() {

    const [state2, setstate2] = useState("bx bx-menu")
    
    const [state, setstate] = useState("sidebar")
    let closeBtn=()=>{
        if(state==="sidebar"){
            setstate("sidebar open")
            setstate2("bx bx-menu");
            document.getElementById("logo-nav").style.display="none";
        }
        else{
            setstate("sidebar")
            setstate2("bx bx-menu");
            document.getElementById("logo-nav").style.display="block";

        }
    }
    return (
        <>
        <div className="sidebarMain">
        <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'/>
        <div className={state}>
        <div className="logo-details">
            <div className="logo_name">WINKEAT</div>
            <i className={state2} id="btn" onClick={closeBtn} ></i>
        </div>
        <ul className="nav-list">
          
          <li>
           <Link to="/home">
             <i className='bx bx-home' ></i>
             <span className="links_name">Home</span>
           </Link>
           <span className="tooltip">Home</span>
         </li>
          <li>
           <Link to="/user">
             <i className='bx bx-user'></i>
             <span className="links_name">User</span>
           </Link>
           <span className="tooltip">User</span>
         </li>
         <li>
           <Link to="/Prevorders">
             <i className='bx bx-cart-alt' ></i>
             <span className="links_name">Previous Orders</span>
           </Link>
           <span className="tooltip">Previous Orders</span>
         </li>
         
         <li className="profile" >
          <Link to="/home">
          <span className="links_name">Logout</span>
             <i className='bx bx-log-out' id="log_out"></i>
             </Link>
             <span className="tooltip">Logout</span>
         </li>
        </ul>
      </div>
      </div>
    </>
    )
}
