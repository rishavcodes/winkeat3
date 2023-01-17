import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  const {vendorId,img1,imgPhone,Canteenname} = props;
  const changeValue=()=>{
    localStorage.setItem('vendorId',vendorId);
  }
 

    return (
     
    <Link to={"/CanteenPage"}>
    <div className="card" onClick={changeValue}>
            <img
              className="canteen-card-img"
              src={img1}
              alt="not available"
            />
            <img
              className="canteen-card-img-mobile"
              src={imgPhone}
              alt="not available"
            />
            <h2 className="canteen-card-title">
              {Canteenname}
              </h2>
          </div>
    </Link>
  )
}
export default Card