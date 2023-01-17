import React, { createContext, useReducer, useEffect} from "react";
import "../Styles/Cart.css";
import ContextCart from "../Components/ContextCart";
import PizzaData from "../PizzaData";
import {reducer} from "../Components/reducer.js";
import { useState } from "react";
import axios from "axios";
export const CartContext = createContext();

const initialState = {
  item: PizzaData,
  totalAmount: 0,
  totalItem: 0,
}

const Cart = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const[Loader,setLoader]=useState(false);
  const [error, setError] = useState("");
  // to delet individual item from cart 
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  // increment of item
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };


  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };
const[cartData,setCartData]=useState([])
  useEffect(() => {
    dispatch({type: "GET_TOTAL"});
      try {
        const fetchItData = async ()=>{
          await axios.get(`api/user/getcart`)
          .then((res)=>{
            console.log("abayega data2");
            setCartData(res.data.cartItem);
            console.log(cartData);
          })
          .catch((err) => {
            
        })
          
        }
        fetchItData();
        
      } catch (error) {
        setError(error.message);
      }
      setLoader(false);
    }, [cartData]);

  
 
  

  return (
    Loader ? <div className="loader">LOader</div> :
      <CartContext.Provider value={{...state, removeItem, increment, decrement}}>
        <ContextCart />
      </CartContext.Provider>
  );
  }
export default Cart;