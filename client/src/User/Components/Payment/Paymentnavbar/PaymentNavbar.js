import React from 'react'
import "../Paymentnavbar/Paymentnavbar.css"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


const PaymentNavbar = () => {
  return (
    <>
        <div className="payment-navbar">
        <div className="arrowbackicon-payment">
          <ArrowBackIcon />
        </div>
        <div className="payment-page-title">
          <h2>Payment</h2>
        </div>
        </div>
    </>
  )
}

export default PaymentNavbar