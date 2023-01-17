import React from 'react'
import "../Wallet/Wallet.css"

const Wallet = () => {
  return (
    <>
        <div className="amazon-pay">
              <div className="pay-icon-payment">
                <img src="/images/amazonpay-icon.png" alt="amazonpay" />
              </div>
              <div className="link-account-btn-payment">
                <button className="wallet-link-account">Link Account</button>
              </div>
            </div>
            <div className="paytm">
              <div className="pay-icon-payment">
                <img src="/images/paytm-icon.png" alt="paytm" />
              </div>
              <div className="link-account-btn-payment">
                <button className="wallet-link-account">Link Account</button>
              </div>
            </div>
            <div className="phone-pay">
              <div className="pay-icon-payment">
                <img src="/images/phonepay-icon.png" alt="phonepay" />
              </div>
              <div className="link-account-btn-payment">
                <button className="wallet-link-account">Link Account</button>
              </div>
            </div>
    </>
  )
}

export default Wallet
