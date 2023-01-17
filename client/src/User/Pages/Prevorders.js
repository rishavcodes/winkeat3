import React from "react";
import "../Styles/Prevorders.css";
import Sidebar from "../../Common/Components/Sidebar/Sidebar";
import orderData from "../OrderData";
import OrderCard from "../Components/Ordercard/OrderCard";

const Prevorders = () => {
  function OrderCardInfo(orderData) {
    const { ItemName, CanteenName, Status, PostOrderWork } = orderData;
    return (
      <OrderCard
        name={ItemName}
        canteenName={CanteenName}
        orderStatus={Status}
        postOrderActivity={PostOrderWork}
      />
    );
  }
  return (
    <>
      <Sidebar />
      <h1 className="order-page-h1">Previous Orders</h1>
      {orderData.map(OrderCardInfo)}
    </>
  );
};

export default Prevorders;
