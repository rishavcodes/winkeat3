import React from "react";
import "./CreditCard.css";
import PaymentNavbar from "../Paymentnavbar/PaymentNavbar";
import PaymentSidebar from "../Paymentsidebar/PaymentSidebar";
import MakePayment from "../MakePayment/MakePayment";
import ToPay from "../AmountBox/ToPay";
import CardForm from "../CardForm/CardForm";

const CreditCard = () => {


  return (
    <>
      <div className="container-payment">
        <PaymentNavbar />
        <div className="payment-body">
          <PaymentSidebar />
          <div className="payment-body-content">
            <div className="creditcard-card">
              <div className="accepted-cards">
                {/* <div>
              <h3 className='we-accept'>We accept: </h3>
            </div> */}
                {/* <div className='accepted-card-img'>
              <img className='american-express-logo' src='/images/american-express-logo.png' alt='american-express-logo'/>
              <img className='mastercard-logo' src='/images/mastercard-logo.png' alt='american-express-logo'/>
              <img className='rupay-logo' src='/images/rupay-logo.png' alt='american-express-logo'/>
              <img className='visa-logo' src='/images/visa-logo.png' alt='american-express-logo'/>
            </div> */}
              </div>
              <CardForm/>
              <MakePayment/>
            </div>
          </div>
          <div className="payment-rightbar">
            <ToPay />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditCard;