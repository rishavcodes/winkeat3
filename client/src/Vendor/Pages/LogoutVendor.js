import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Vendor";
    fetch("/api/vendor/signout", {
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
      navigate("/vendor/login");
    });
  }, [navigate]);
  return (
    <>
    </>
  );
};

export default Logout;