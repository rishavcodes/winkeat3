import React, { useState, useEffect } from "react";

import InventoryCard from "../Components/InventoryCard/InventoryCard";
const InventoryList = () => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState([]);
  const [error, setError] = useState();
  
  useEffect(() => {
    const fetchItData = async () => {
      try {
        const res = await fetch("/api/vendor/getinventory", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const data = await res.json();
        setItems(data.items);
        setCategory(data.category);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchItData();
  }, []);
  const style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "0px 5px",
  };
  const listStyle = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <>
    {error ?
    <>
    <h1 className="error">{error}<br/>
        
        Reload Your Page
        </h1>
    </> :
    <>

      {category.map((cat) => {
        return (
          <div className="inventory-list" style={listStyle}>
            <div className="category-name">
              <h1>{cat.name}</h1>
            </div>
            <div className="inventory-card" style={style}>
              {items.map((item) => {
                if (item.category === cat._id) {
                  return (
                    <InventoryCard
                      id={item._id}
                      name={item.name}
                      price={item.price}
                      image={item.image}
                      stock={item.stock}
                      size={item.size}
                    />
                  );
                }
                else{
                    return null;
                }
              })}
            </div>
          </div>
        );
      })}
    </>
}
    </>
  );
};

export default InventoryList;