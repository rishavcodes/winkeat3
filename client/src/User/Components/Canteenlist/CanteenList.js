import React, { useEffect,useState } from "react";
import "./Canteenlist.css";
import Card from "../Cards/Card";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";

const CanteenList = () => {

  const navigate = useNavigate();
  const [Loader,setLoader]=useState(false);
  const [canteenList, setCanteenList] = useState([]);
  const [error, setError] = useState("");
    useEffect (() => {
      setLoader(true)
        axios.get("api/user/vendorlist")
        .then((res) => {
            setCanteenList(res.data.data);
            console.log(res.data.data);
            
        })
        .catch((err) => {
            setError(err.message);
            
        }).finally(()=>{
          setLoader(false);
        })
        
    }, [navigate,setCanteenList]);
    console.log(canteenList);
  function CardList (canteenList){
    const {_id,name,image} = canteenList;
    const vendorId=_id;
    return (
      <Card 
      Canteenname={name}
      vendorId={vendorId}
      img1={"./uploads/image/Vendor/"+image[0]}
      imgPhone={"./uploads/image/Vendor/"+image[1]}
      isLoading={Loader}
    />
    )
  }
  return (
    <>
    {error ? 
    <>
    <h1 className="error">{error}<br/>
      Reload Your Page
      </h1>
    </> : 
    Loader ?
    <div style={{"paddingLeft":"780px","paddingTop":"380px"}}>
      <HashLoader
        color="#FDCF52"
        size={80}
      />
    </div>:
  
     <div className="canteen-card-body">
        <div className="canteen-card-list">
          {canteenList.map(CardList)}
        </div>
      </div>}  
    
    </>
  );
};

export default CanteenList;
