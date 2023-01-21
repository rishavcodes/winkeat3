import React from 'react'
import "../CanteenNavBar/CanteenNavbar.css"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchBar from '../../../Common/Components/SearchBar/SearchBar'
import {Link} from 'react-router-dom'
const CanteenNavBar = () => {
  return (
   <>
    <div className="maincanteen-navbar">
          <div className="arrowback-maincanteen">
            {/* Link to go back to previous page */}
          <Link to={"/home"}>
            <ArrowBackIcon
              className="arrowback-icon-maincanteen"
            />
          </Link>
          </div>
          <div className="title-maincateen">
            <h2>Welcome To</h2>
            <h2 className='main-can-title'>Main Canteen</h2>
          </div>
          <div className="searchbar-maincanteen">
            <SearchBar />
          </div>
        </div>
   </>
  )
}

export default CanteenNavBar