import React, { useEffect, useState } from "react";
import "./AddItemForm.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const AddItemForm = () => {
  const navegate = useNavigate();
  const [itemDetails, setItemDetails] = useState({
    name: "",
    description: "",
    category: "",
    size: "",
  });
  const [itemPrice, setItemPrice] = useState();
  const [itemStock, setItemStock] = useState();
  const [itemImage, setItemImage] = useState([]);
  const [itemCategory, setItemCategory] = useState([]);

  useEffect(() => {
    fetch("/api/vendor/additem", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setItemCategory(data.category);
        // console.log(data);
      });
  }, []);

  console.log(itemDetails);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(itemDetails.size)
      const formData = new FormData();
      formData.append("name", itemDetails.name);
      formData.append("description", itemDetails.description);
      formData.append("category", itemDetails.category);
      formData.append("size", itemDetails.size);
      formData.append("price", itemPrice);
      formData.append("stock", itemStock);
      formData.append("image", itemImage);
      // console.log(formData);
      const res = await fetch("/api/vendor/item/new", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      if (res.status === 400) {
        window.alert(data.error);
      } else if (res.status === 201) {
        window.alert("Item Added Successfully");
        console.log("Item Added Successfully");
        setItemDetails({
          name: "",
          description: "",
          category: null,
          size: null,
        });

        setItemPrice("");
        setItemStock("");
        setItemImage(null);
        navegate("/vendor/inventory");
      } else {
        console.log(res.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ marginLeft: "5%" }}>
      <div class="new_inventory">
        <form id="root">
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
            integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
            crossorigin="anonymous"
          />
          <div class="add_product_details">
            <div class="add_product_details_context">
              <label>
                Product Category<span class="star"> *</span>
              </label>
              <select
                name="category_id"
                required=""
                class="category_selecter"
                onChange={(e) =>
                  setItemDetails({
                    ...itemDetails,
                    category: e.target.value,
                  })
                }
              >
                <option>choose your category</option>
                {itemCategory.map((item) => {
                  return <option value={item.name}>{item.name}</option>;
                })}
              </select>

              <div class="each_block">
                <label>
                  Product Name<span class="star"> *</span>
                </label>
                <input
                  required=""
                  type="text"
                  name="name"
                  value={itemDetails.name}
                  onChange={(e) =>
                    setItemDetails({ ...itemDetails, name: e.target.value })
                  }
                  placeholder="Product Name"
                />
              </div>

              <div class="each_block">
                <label>
                  Initial Stock<span class="star"> *</span>
                </label>
                <input
                  required=""
                  type="number"
                  value={itemStock}
                  onChange={(e) => setItemStock(e.target.value)}
                  name="stock"
                  placeholder="Inital Stock"
                />
              </div>

              <div class="each_block">
                <label>
                  MRP<span class="star"> *</span>
                </label>
                <input
                  type="number"
                  name="mrp"
                  value={itemPrice}
                  onChange={(e) => setItemPrice(e.target.value)}
                  id="mrp"
                  oninput="compare_sp_mrp()"
                  required=""
                  placeholder="MRP"
                />
              </div>

              <div class="each_block_pack_size">
                <label>
                  size<span class="star"> *</span>
                </label>
                <select
                  aria-label="Default select example"
                  required=""
                  name="unit"
                  className="category_selecter"
                  placeholder="Price Per Pack"
                  onChange={(e) =>
                    setItemDetails({ ...itemDetails, size: e.target.value })
                  }
                  value={itemDetails.size}
                >
                  <option selected="" value="">
                    Choose..
                  </option>

                  <option
                    value="Small"
                    onChange={(e) =>
                      setItemDetails({ ...itemDetails, size: e.target.value })
                    }
                  >
                    {" "}
                    Small
                  </option>
                  <option
                    value="Medium"
                    onChange={(e) =>
                      setItemDetails({ ...itemDetails, size: e.target.value })
                    }
                  >
                    {" "}
                    Medium
                  </option>
                  <option
                    value="Large"
                    onChange={(e) =>
                      setItemDetails({ ...itemDetails, size: e.target.value })
                    }
                  >
                    {" "}
                    Large
                  </option>
                </select>
              </div>
              <div className="each_block_pack_size" style={{ width: "100%" }}>
                <label>
                  Add the Item Image <span class="star"> *</span>
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  required=""
                  onChange={(e) => setItemImage(e.target.files[0])}
                  class="form-control"
                />
              </div>

              <label>
                Product Description<span class="star"> *</span>
              </label>
              <textarea
                required=""
                name="product_description"
                class="Product_description"
                rows="4"
                cols="50"
                placeholder="Product Description"
                onChange={(e) =>
                  setItemDetails({
                    ...itemDetails,
                    description: e.target.value,
                  })
                }
              ></textarea>
            </div>
            <div class="addproductbutton">
              <Button variant="warning" onClick={handleSubmit}>
                Save Changes
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemForm;