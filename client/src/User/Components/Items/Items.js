import React, {useContext} from 'react'
import "./Items.css"
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartContext } from "../../Pages/Cart"



const Items = ({id, img, title, price, description, quantity}) => {

  // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.
  // const [count, setCount] = useState(0);

  const {removeItem, increment, decrement} = useContext(CartContext);


  return (
  <>
    <div className="cart-items">
      <div className="cart-card-body">
        <div className="cart-img">
          <img
            className="cart-img-img"
            src={img}
            alt="not available"
          />
        </div>
        <div className="cart-tiem-info">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="cart-increase-decrease">
          <button onClick={() => decrement(id)}>
            <RemoveIcon/>
          </button>
          <h2>{quantity}</h2>
          <button onClick={() => increment(id)}>
            <AddIcon />
          </button>
        </div>
        <div className="item-amount">
          <h3>₹ {price}</h3>
        </div>
        <div className="remove-to-trash">
          <button>
            <DeleteIcon onClick={() => removeItem(id)} />
          </button>
        </div>
      </div>
    </div>
  </>
  )
}

export default Items