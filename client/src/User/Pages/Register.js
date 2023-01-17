import React, {useState,useEffect} from "react";
import "../Styles/Register.css";
import { Link , useNavigate} from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Register = () => {
  const navigate = useNavigate();
    useEffect (() => {
      if(localStorage.getItem("user")===true){
        navigate('/home');
      }
    }, [navigate])


  const[user,setUser]=useState({name:"",password:"",cpassword:"",mobileNo:"",username:""});


  let name,value
  const handleInput=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value})
  }

  const postData=async (e)=>{
    e.preventDefault(); //isse voh automatic reload nhi hoga
    const{name,password,cpassword,mobileNo,username}=user;
    const res=await fetch("/api/user/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,password,cpassword,mobileNo,username
      })
    });
    const data=await res.json();
    if(res.status===400||!data){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }
    else if(res.status===401){
      window.alert("User Already Exist");
      // console.log("Invalid Registration");
    }
      else{
      window.alert("Registration Successful");
      console.log("Registration Successful");
      navigate('/login');
    }
  }

  return (
    <>
       <div className="register-body">
      <div className="content-box-register">
        <div className="logo-box-register">
          <img
            className="form-img-register"
            src="/images/phoneLogin.png"
            alt="not available"
          />
        </div>
        <div className="form-box-register">
          <div className="form-nav-register">
            <div className="arrow-icon">
              <Link to="/">
                <ArrowBackIcon className="arrow" />
              </Link>
            </div>
            <div>
              <img
                className="winkeat-logo-form-register"
                src="/images/winkeat-logo2.png"
                alt="not available"
              />
            </div>
          </div>

          <form method="POST" >
            <div className="input-form-register">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={user.name}
                onChange={handleInput}
              />
            </div>
            <div className="input-form-register">
              <input
                type="text"
                name="username"
                id="email"
                placeholder="UserName"
                autoComplete="chrome-off"
                value={user.username}
                onChange={handleInput}
              />
            </div>
            <div className="input-form-register">
              <input
                type="text"
                name="mobileNo"
                id="mobileNo"
                autoComplete="username"
                placeholder="Mobile Number"
                value={user.mobileNo}
                onChange={handleInput}
              />
            </div>
            <div className="input-form-register">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                autoComplete="off"
                value={user.password}
                onChange={handleInput}
              />
            </div>
            <div className="input-form-register">
              <input
                type="password"
                name="cpassword"
                id="repassword"
                placeholder="Re-enter Password"
                autoComplete="off"
                value={user.cpassword}
                onChange={handleInput}
              />
            </div>
            
            
            {
              user.mobileNo.length===10 && user.password.length>=8  && user.password===user.cpassword && user.username!==" " && user.name!==" "?
              <button className="submit-btn-register" onClick={postData}>Sign Up</button>
              :
              <button className="submit-btn-register_not submit-btn-register" disabled>Sign Up</button>

            }
          </form>

          <div className="form-footer-register">
              Already have an account?<Link to="/login">Sign In</Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Register;
