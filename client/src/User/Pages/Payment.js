import React from "react";
import "../Styles/Payment.css"
import PaymentSidebar from "../Components/Payment/Paymentsidebar/PaymentSidebar";
import PaymentNavbar from "../Components/Payment/Paymentnavbar/PaymentNavbar";
import Wallet from "../Components/Payment/Wallet/Wallet";
import MakePayment from "../Components/Payment/MakePayment/MakePayment";
import ToPay from "../Components/Payment/AmountBox/ToPay";

const Payment = () => {
  return (
    <>
      <div className="container-payment">
        <PaymentNavbar/>
        <div className="payment-body">
          <PaymentSidebar />
          <div className="payment-body-content">
            <Wallet/>
            <MakePayment/>
          </div>
          <div className="payment-rightbar">
            <ToPay/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;