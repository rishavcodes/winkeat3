import React,{useEffect, useState} from 'react'
import "../Paymentsidebar/Paymentsidebar.css"
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import { Link } from 'react-router-dom';
const PaymentSidebar = () => {
  const [debit, setDebit] = useState("")
  const [credit, setCredit] = useState("")
  const [upi, setUpi] = useState("")
  const [wallet, setWallet] = useState("") 

  useEffect(() => {
    if (window.location.pathname === "/payment" || window.location.pathname==="/payment/wallet") {
      setWallet("active")
      setCredit("")
      setDebit("")
      setUpi("")

    }
    else if (window.location.pathname === "/payment/credit-card") {
      setCredit("active")
      setWallet("")
      setDebit("")
      setUpi("")
    }
    else if (window.location.pathname === "/payment/debit-card") {
      setDebit("active")
      setCredit("")
      setWallet("")
      setUpi("")
    }
    else if (window.location.pathname === "/payment/upi") {
      setUpi("active")
      setCredit("")
      setWallet("")
      setDebit("")
    }
  }, [])
  
  

  return (
    <>
        <div className="payment-sidebar">
        <h3>Choose Payment Option</h3>
        <ul>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/payment"
          >
            <li className={wallet}>
              <AccountBalanceWalletIcon /> Wallet
            </li>
          </Link>
          <Link to="/payment/credit-card" style={{ textDecoration: "none", color: "black" }}>
            <li className={credit}>
              <CreditCardIcon /> Credit Card
            </li>
          </Link>
          <Link to="/payment/debit-card" style={{ textDecoration: "none", color: "black" }}>
            <li className={debit}>
              <CreditCardIcon /> Debit Card
            </li>
          </Link>
          <Link to="/payment/upi" style={{ textDecoration: "none", color: "black" }}>
            <li className={upi}>
              <QrCodeScannerIcon /> UPI Payment
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default PaymentSidebar