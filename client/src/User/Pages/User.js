import React, { useState, useEffect } from "react";
import "../Styles/User.css";
import Sidebar from "../../Common/Components/Sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
const User = () => {
  const navigate = useNavigate();
  const [Loader,setLoader]=useState(false);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const callAboutPage = async () => {
      try {
        setLoader(true);
        const res = await fetch("/api/user/about", {

          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const data = await res.json();
        setUserData(data);
        if (res.status === 200) {
          setLoader(false);
          setUserData(data);
        } else if (res.status === 401) {
          navigate("/login");
        } else if (res.status === 422) {
          navigate("/login");
        }
      } catch (error) {
        
        navigate("/login");

      } 
    }
    callAboutPage();
    document.title = "About";
  }, [navigate]);

  return (
    <div className="user-container">
      <div className="user-page-body">
        <Sidebar />
        <div className="user-col">
          <div className="user-upper-part">
            <div className="user-info-grid">
              <div className="user-img">
                {userData.img === null ? (
                  <input
                    type="image"
                    src="img_submit.gif"
                    alt="Submit"
                    width="48"
                    height="48"
                  />
                ) : (
                  <img src="/images/user-img.jpg" alt="not available" />
                  // <img src={userData.img} alt="user-img" />
                )}
              </div>

              {/* </div> */}
              <div className="user-info">
              {
               Loader ?
               
               <>
              <div >
              <HashLoader
                color="#FDCF52"
                size={30}
              />
            </div>
              </>
              :
              <>
                <h2 className="user-name">{userData.name}</h2>
                <h4 className="user-userid">{userData.username}</h4>
                <h4 className="user-email">{userData.mobileNo}</h4>
              </>
}
              </div>
            </div>
          </div>
        

          <hr />
          <div className="user-menu-list">
            <ul>
              <li>Your Orders</li>
              <li>Saved Cards</li>
              <li>Change Password</li>
              <Link to={"/logout"}>
                <li>Log Out</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
