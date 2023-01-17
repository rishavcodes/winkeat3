import React from 'react'
import "./Navbar.css"
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className="navbar-items">
                <div className="navbar-logo">
                    <img className="navbar-logo-img" id="logo-nav" src="/images/winkeat-logo2.png" alt="Not available" />
                </div>
                <div className="nav-searchbar">
                    <SearchBar />
                </div>
                <div className="navbar-profile-icon" >
                <Link to="/user">
                    <img className="navbar-profile-icon-img" src="/images/user-img.jpg" alt="not available" />
                </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar