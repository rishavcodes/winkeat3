import React, { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Sidebar from "../Components/Sidebar/Sidebar";
import InventoryMenu from "../Components/InventoryMenu/InventoryMenu";
import AddCategoryCard from "../Components/AddCategoryCard/AddCategoryCard";
import "../Styles/Category.css";
import CategoryList from "./CategoryList";
import { useNavigate } from "react-router-dom";


const Category = () => {
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
          navigate("/vendor/category");
        } else {
          navigate("/vendor/login");
        }
      });
    } catch (error) {
      navigate("/vendorlogin");
    }
  }, [navigate]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState([]);
  function relodePage() {
    window.location.reload();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", categoryName);
      formData.append("image", categoryImage);
      const res = await fetch("/api/vendor/addcategory", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      const data = await res.json();
      navigate("/vendor/category");
      console.log(data);
      console.log(data.status);
      if (data.status === 422 || !data) {
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      } else {
        window.alert("Category Added Successfully");
        console.log("Category Added Successfully");
        setCategoryName("");
        setCategoryImage([]);
        relodePage();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="menu">
        <Sidebar />
        <InventoryMenu />
      </div>
      <div className="category">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossorigin="anonymous"
        />
        <div className="category-card">
          <div className="add-category" onClick={handleShow}>
            <AddCategoryCard />
          </div>
          <Modal className="modal" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="modal-title">
                Add a New Category
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Category Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Category Name"
                    name="name"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Category image</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Category image"
                    name="image"
                    onChange={(e) => setCategoryImage(e.target.files[0])}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer className="modal-footer">
              <Button variant="warning" onClick={handleSubmit}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          <div className="cards">
            <CategoryList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;