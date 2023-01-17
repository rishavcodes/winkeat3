import React from 'react'
import PaymentNavbar from '../Paymentnavbar/PaymentNavbar'
import PaymentSidebar from '../Paymentsidebar/PaymentSidebar'
import MakePayment from '../MakePayment/MakePayment'
import ToPay from '../AmountBox/ToPay'

const UPI = () => {
  return (
    <>
        <div className="container-payment">
        <PaymentNavbar/>
        <div className="payment-body">
          <PaymentSidebar />
          <div className="payment-body-content">
            {/* <Wallet/> */}
            <MakePayment/>
          </div>
          <div className="payment-rightbar">
            <ToPay/>
          </div>
        </div>
      </div>
    </>
  )
}

export default UPI