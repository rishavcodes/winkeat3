import React, { useContext } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Items from "./Items/Items.js";
import { Scrollbars } from "react-custom-scrollbars";
import Dropdown from "react-dropdown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../Pages/Cart";
import { Link } from "react-router-dom";

const ContextCart = () => {

  const {item, totalItem, totalAmount} = useContext(CartContext);

  const options = ["Dine-In", "Packaging"];

  return (
    <>
      <div className="cart-container">
        <div className="cart-left">
          <div className="cart-navbar">
            <div className="cart-navbar-arrowicon">
            <Link to="/CanteenPage">
              <ArrowBackIcon />
              </Link>
            </div>
            <div className="cart-title">
              <h1>My Cart</h1>
              <p className="total-itmes">
                Items in Cart: <span className="total-items-count">{totalItem}</span>
              </p>
            </div>
          </div>
          <Scrollbars>
            <div className="cart-body">
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </div>
          </Scrollbars>
        </div>
        <div className="cart-right">
          <div className="cart-total">
            <h2 className="order-details-title">Order Details</h2>
            <h6 className="order-details-subtotal">
              Sub Total: <br /> ₹ <span>{totalAmount}</span>
            </h6>
            <div className="dine-packaging-options">
              <Dropdown options={options} placeholder="Dine-In/Packaging" />
              <ArrowDropDownIcon />
            </div>
            <h3 className="total-amount-cart">
              Total Amount : <br /> ₹ <span>{totalAmount}</span>
            </h3>
            <div className="proceedtopay-btn">
            <Link to="/payment">
              <button className="proceed-to-payment-btn">
                Proceed to Payment <ShoppingCartIcon />
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContextCart;