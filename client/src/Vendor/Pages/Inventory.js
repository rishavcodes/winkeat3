import React, { useEffect} from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import InventoryMenu from "../Components/InventoryMenu/InventoryMenu";
import InventoryList from "./InventoryList";
import { useNavigate } from "react-router-dom";
import "../Styles/Inventory.css";

const Inventory = () => {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      fetch("/api/vendor/getdata", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      }).then((res) => {
        if (res.status === 200) {
          navigate("/vendor/inventory");
        } else {
          navigate("/vendor/login");
        }
      });
    } catch (error) {
      navigate("/vendor/login");
    }
  }, [navigate]);

  return (
    <>
      <Sidebar />
      <div className="all-inventory">
        <div className="inventory">
          <InventoryList />
        </div>
      </div>
      <InventoryMenu />
    </>
  );
};

export default Inventory;