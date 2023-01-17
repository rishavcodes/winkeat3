import React, { useEffect } from "react";
import "../Styles/VendorList.css";
import Sidebar from "../../Common/Components/Sidebar/Sidebar";
import Navbar from "../../Common/Components/Navbar/Navbar";
import CanteenList from "../Components/Canteenlist/CanteenList";
// import LabelBottomNavigation from "../Components/BottomBar/BottomBar";
import {useNavigate} from 'react-router-dom'
const VendorList = () => {
  const navigate = useNavigate();
  useEffect (() => {
    try {
        fetch('/api/user/getdata',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        }).then(async (res) => {
            if(res.status === 200){
              
                navigate('/home');
                const data = await res.json();
                localStorage.setItem("user",data._id)
            }else if(res.status === 401){
                navigate('/login');
                localStorage.setItem("user",false)
            }else if(res.status === 422){
                navigate('/login');
                localStorage.setItem("user",false)
            }
        })
    }
    catch (error) {
        navigate('/login');
        localStorage.setItem("user",false)
    }
}, [navigate])
  localStorage.removeItem("vendorId");
  localStorage.removeItem("cartData");
  return (
    <>
      <Sidebar />
      <Navbar />
      <CanteenList />
      {/* <LabelBottomNavigation className="hello"/> */}
    </>
  );
};

export default VendorList;
