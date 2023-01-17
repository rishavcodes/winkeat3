import React from "react";
import "./CategoryCard.css";

function CategoryCard(props) {
  const { id, name, image } = props;
  console.log(id);
  const deletecategory = () => {
    try {
      fetch(`/api/vendor/category/delete/${id}`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="Card-Container">
        <div className="Card-Image">
          <img src={"/uploads/image/category/" + image} alt="not available" />
        </div>
        <div className="Card-Title">
          <span onClick={deletecategory}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash-fill icon "
              viewBox="0 0 16 16"
            >
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
          </span>
          <h5>{name}</h5>
        </div>
      </div>
    </>
  );
}

export default CategoryCard;