import React from "react";
import "./Ordercard.css";

const OrderCard = (props) => {
  const {name,canteenName,orderStatus,postOrderActivity} = props;
  return (
    <>
      <div className="order-card-body">
        <div className="card-img">
        <img className="card-img-img" src="/images/chicken-pizza.png" alt='not available' />
        </div>
        <div className="card-info">
          <h2>{name}</h2>
          <p>{canteenName}</p>
        </div>
        <div className="card-status">
          <h3>Status</h3>
          <p>{orderStatus}</p>
        </div>
        <div className="post-order-activity">
          <button>{postOrderActivity}</button>
        </div>
      </div>
    </>
  );
};

export default OrderCard;
