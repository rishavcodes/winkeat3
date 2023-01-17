import React, { useState, useEffect } from "react";
import CategoryCard from "../Components/CategoryCard/CategoryCard";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchItData = async () => {
      try {
        const res = await fetch("/api/vendor/getcategory", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const data = await res.json();
        setCategories(data.category);
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

  return (

    <>
    {error ? 
    <>
    <h1 className="error">{error}<br/>
      Reload Your Page
      </h1>
    </> : 
    <>
      <div style={style}>
        {categories.map((cat) => {
          return (
            <CategoryCard
              id={cat._id}
              name={cat.name}
              image={cat.image}
            />
          );
        })}
      </div>
    </>
}
</>
  );
};

export default CategoryList;