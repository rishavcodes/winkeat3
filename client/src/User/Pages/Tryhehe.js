import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Tryhehe = () => {
  const [Data,setdata]=useState([]);
    useEffect(() => {
        console.log("tryhehe");
        const fetchItData = async ()=>{
          await axios.get(`api/user/getcart`)
          .then((res)=>{
            console.log("abayega data2");
            setdata(res.data.cartItem);
            console.log(Data);
          })
          .catch((err) => {
            
        })
          
        }
        fetchItData();
        
      }, [])
    
  return (
    <div>tryhehe</div>
  )
}

export default Tryhehe