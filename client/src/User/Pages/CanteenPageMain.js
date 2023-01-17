import React ,{useEffect, useState}from "react";
import "../Styles/CanteenPage copy.css";
// import Menuitems from "../Components/Menuitems/Menuitems.js"; 
import MenuitemsMain from "../Components/Menuitems/MenuitemsMain";
import { Scrollbars } from "react-custom-scrollbars";
import axios from 'axios'
// import CategoryList from "../Components/CategoryList/CategoryList";
import CategoryListCardMain from "../Components/CategoryList/CategoryListCardMain";
import HorizontalScroll from "react-horizontal-scrolling";
import CanteenNavBar from "../Components/CanteenNavBar/CanteenNavBar";
import { Link } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from "react-router-dom";
import CanteenListLoader from "../Loader/CanteenListLoader";

const CanteenPageMain = (props) => {
  if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    localStorage.removeItem('cartData');
  } 

  const [Loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const vendorId=localStorage.getItem('vendorId');
  const [categoryData,setCategoryData]=useState([]);
  const [itemsData, setitemsData] = useState([]);
  const [error, setError] = useState()
  

  window.addEventListener("load", () => {
    setTimeout(() => {
      setLoader(false)
    }, 2000);
  });
  useEffect(() => {
    const fetchItData = async ()=>{
      setLoader(true)
      axios.get(`api/user/${vendorId}/items`)
      .then((res)=>{
        setitemsData(res.data.items)
        setCategoryData(res.data.category)
      })
      .catch((err) => {
        setError(err.message);
    }).finally(()=>{
      setLoader(false);
      })
      
    }
    fetchItData();
  
    
  }, [setCategoryData,setitemsData,vendorId])

async function cartButton(){
  let cartData = [];
    if (localStorage.getItem("cartData")) {
      cartData = JSON.parse(localStorage.getItem("cartData"));
    }
    const res=await axios({
      method: 'post',
      url: '/api/user/addtocart',
      data: cartData
    });
    console.log(res);
    if(res.status === 200 ){
      navigate('/cart');
    }
    else if(res.status === 201){
      navigate('/cart');
    }
    else if(res.status === 401){
      window.alert("something went wrong");
      navigate('/home');
    }
   
      
}
  function CategoryListFun (categoryData){
    const {_id,name,image} = categoryData;
    return (
     <CategoryListCardMain
     categoryName={name}
     image={image}
     id={_id}
     />
    )
  }

  return (
    <>
    <div className="maincanteen-container">
        <CanteenNavBar/>

    {error ? 
    <>
    <h1 className="error">{error}<br/>
      Reload Your Page
      </h1>
    </> : 
      Loader ?
      <CanteenListLoader/>

      :
     
        <div className="canteena-body">
            <div className="canteen-list-Category-card">
          <HorizontalScroll>
          <div className="canteen-list-maincanteen">
            {categoryData.map(CategoryListFun)}
          </div>
          </HorizontalScroll>
          </div>
          <hr className="hrforMid"/>
           <div className="canteen-body-body">
            <Scrollbars style={{ width: 1300, height: 410 }}>
              {/* {categoryData.map((category)=>{ */}
                  <>
                  <div className="menu-start">
                    {itemsData
                    .map((item)=>{
                      return(
                        <>
                        <MenuitemsMain
                        id={item._id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                      />
                        </>
                      ) 
                    })}
                  </div>
                  </>
             <br />
            <br />
            <br />
            </Scrollbars>
            
            
          </div>
          <div className="addToCartLine" id="addtoCartLineId">
            <div>
              <h3>
                <span id="itemNo.">0 item</span> |  ₹<span id="totalPrice">0</span>
              </h3>
            </div>
            <Link className="next-link" style={{ textDecoration: 'none' }} to="/Cart">
            <div className="next-and-icon-maincanteen">
              <h3 className="next-and-icon-maincanteen-h3" onClick={cartButton}>Next <NavigateNextIcon className="navigate-next-icon"/></h3>
            </div>
            </Link>
          </div>
        </div>
    }  
    </div>
    
    </>
    
  );
};
export default CanteenPageMain;