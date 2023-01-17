import React from "react";
import "./CategoryList copy.css";
import { Link } from "react-router-dom";

const CategoryListCardMain = (props) => {
  const { categoryName, image } = props;
  return (
    <>
      <Link to={`/CanteenPage#${categoryName}`}>
        <div className="header-full-body">
          <div className="canteen-body-header">
            <div className="canteenacard">
              <div className="canteencard-img">
              <img
                  className="main-canteen-card-img"
                  // src="./images/pizza.png"
                  src={"./uploads/image/Category/" + image}
                  alt="not available"
                />
              </div>
              <div className="canteena-card-title">{categoryName}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CategoryListCardMain;
