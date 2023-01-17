import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  localStorage.removeItem("vendorId");
  localStorage.removeItem("cartData");
  localStorage.removeItem("user");
  
  useEffect(() => {
    document.title = "User";
    fetch("/api/user/signout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => {
      res.json();
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
      navigate("/");
      localStorage.setItem("user", false);
    });
  }, [navigate]);
  return (
    <>
    </>
  );
};

export default Logout;
