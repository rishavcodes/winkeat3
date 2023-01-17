import React, {useState} from 'react'
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./CardForm.css"

const CardForm = () => {
    const [cardnumber, setcardNumber] = useState("");
  const [expirydate, setexpirydate] = useState("");
  const [CVV, setCVV] = useState("");
  const [nameoncard, setnameoncard] = useState("");

  const [cardData, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newData = {
      name: cardnumber,
      expirydate: expirydate,
      CVV: CVV,
      nameoncard: nameoncard,
    };

    setAllEntry([...cardData, newData]);
  };
  return (
    <>
        <form onSubmit={submitForm}>
                <div className="card-form">
                  <div>
                    <input
                      type="number"
                      className="cardnumber"
                      placeholder="Card Number"
                      name="cardnumber"
                      value={cardnumber}
                      onChange={(e) => setcardNumber(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="date"
                      className="expirydate"
                      placeholder="Expiry Date"
                      name="expirydate"
                      value={expirydate}
                      onChange={(e) => setexpirydate(e.target.value)}
                    />
                    <input
                      type="password"
                      className="cvv"
                      placeholder="CVV"
                      name="CVV"
                      value={CVV}
                      onChange={(e) => setCVV(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      className="nameoncard"
                      placeholder="Name of Card Holder"
                      name="nameoncard"
                      value={nameoncard}
                      onChange={(e) => setnameoncard(e.target.value)}
                    />
                  </div>
                  <div className="save-card-checkbox-text">
                    <input className="save-card-checkbox" type="checkbox"/>
                    <p className="save-card-text">Save this card for next use</p>
                  </div>
                </div>
                {/* <div className="make-payment-button">
                  <button type="submit">
                    Make Payment <ShoppingCartIcon />
                  </button>
                </div> */}
              </form>
    </>
  )
}

export default CardForm