import React from 'react'
import PaymentNavbar from '../Paymentnavbar/PaymentNavbar'
import PaymentSidebar from '../Paymentsidebar/PaymentSidebar'
import MakePayment from '../MakePayment/MakePayment'
import ToPay from '../AmountBox/ToPay'
import CardForm from '../CardForm/CardForm'
import "./DebitCard.css"

const DebitCard = () => {
  return (
    <>
        <div className="container-payment">
        <PaymentNavbar/>
        <div className="payment-body">
          <PaymentSidebar />
          <div className="payment-body-content">
            {/* <Wallet/> */}
            <div className="debitcard-card">
            <CardForm/>
            <MakePayment/>
            </div>
          </div>
          <div className="payment-rightbar">
            <ToPay/>
          </div>
        </div>
      </div>
    </>
  )
}

export default DebitCard