import React ,{useEffect}from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import InventoryMenu from "../Components/InventoryMenu/InventoryMenu";
import AddItemForm from "../Components/AddItemForm/AddItemForm";

const AddItem = () => {
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
          navigate("/vendor/additem");
        } else {
          navigate("/vendor/login");
        }
      });
    } catch (error) {
      navigate("/vendor/login");
    }
  }, [navigate]);

  return (
    <div>
      {/* <div className="menu"> */}
      <Sidebar />
      <InventoryMenu />
      <AddItemForm />
      {/* </div> */}
      {/* <div className="add-item"> */}
      {/* </div> */}
    </div>
  );
};

export default AddItem;