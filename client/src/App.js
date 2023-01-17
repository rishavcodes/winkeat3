import React from 'react'
import './App.css';
import {RecoilRoot} from 'recoil'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './Common/Pages/HomePage'
import Login from './User/Pages/Login';
import Register from './User/Pages/Register';
import VendorList from './User/Pages/VendorList';
import Logout from './User/Pages/Logout';
import User from './User/Pages/User';
import Prevorders from './User/Pages/Prevorders';
import Payment from './User/Pages/Payment';
import CreditCard from './User/Components/Payment/CreditCard/CreditCard';
import DebitCard from './User/Components/Payment/DebitCard/DebitCard';
import UPI from './User/Components/Payment/UPI/UPI';
//Removed
// import CanteenPage from './User/Pages/CanteenPage';
// end Removed
import CanteenListLoader from './User/Loader/CanteenListLoader'
// //Vendors 
import VendorLogin from './Vendor/Pages/VendorLogin';
import VendorDashboard from './Vendor/Pages/VendorDashboard';
import AddItem from './Vendor/Pages/AddItem';
import LogoutVendor from './Vendor/Pages/LogoutVendor';
import Category from './Vendor/Pages/Category';
import Inventory from './Vendor/Pages/Inventory';
import UpdateItem from "./Vendor/Pages/UpdateItem";
import Cart from './User/Pages/Cart';

import Tryhehe from './User/Pages/Tryhehe';
import CanteenPageMain from './User/Pages/CanteenPageMain';

const App = () => {

  return (

     
        
            <>
            <RecoilRoot>
            <Router>
            <Routes>
            <Route path="/tryhehe" element={<Tryhehe/>}/>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<VendorList />} /> 
            <Route path="/user" element={<User/>}/>
            {/* <Route path="/canteenPage" element={<CanteenPage/>}/> */}
            <Route path="/canteenPage" element={<CanteenPageMain />} />
            <Route path="/logout" element={<Logout/>}/>
            <Route path='/cart' element={<Cart/>}/>

            <Route path="/prevorders" element={<Prevorders/>}/>
            <Route path="/payment" element={<Payment />} />
            <Route path="/payment/credit-card" element={<CreditCard />} />
            <Route path="/payment/debit-card" element={<DebitCard />} />
            <Route path="/payment/upi" element={<UPI />} />
            <Route path="/canteenListLoader" element={<CanteenListLoader />} />

            <Route path="*" element={<h1>404 Not Found</h1>} />
             <Route path="vendor">
               <Route path="login" element={<VendorLogin />} />
              <Route path="home" element={<VendorDashboard />} />
              <Route path="inventory" element={<Inventory />} />
             <Route path="additem" element={<AddItem />} />
              <Route path="logout" element={<LogoutVendor />} />
              <Route path="category" element={<Category />} />
              <Route path="inventory/update" element={<UpdateItem />} />
              
            </Route>
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/CanteenPage" element={<CanteenPage />} /> */}
            {/* <Route path="/cart" element={<Cart />} /> */}
            {/* <Route path="/user" element={<User />} /> */}
            </Routes>
            </Router>
            </RecoilRoot>

    </>
  )
}

export default App