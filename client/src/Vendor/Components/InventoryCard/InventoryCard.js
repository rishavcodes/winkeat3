import React, { useState } from "react";
import "./InventoryCard.css";
// import { useNavigate } from "react-router-dom";
import { warning } from "@remix-run/router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const InventoryCard = (props) => {
  // const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id, image, price, name, stock, size } = props;

  const outofstock = () => {
    warning("Are you sure you want to mark this item as out of stock?");
    try {
      fetch(`/api/vendor/item/outofstock/${id}`, {
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

  const [updateStock, setUpdateStock] = useState(stock);

  const updateItem = () => {
    try {
      fetch(`/api/vendor/item/instock/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          stock: updateStock,
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

  const deleteItem = () => {
    try {
      fetch(`/api/vendor/item/delete/${id}`, {
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
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
      />
      <div className="card-container">
        <div className="card-image" onClick={handleShow}>
          <img src={"/uploads/image/item/" + image} alt="not available" />
        </div>
        <Modal className="modal" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="modal-title">Update the Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Stock</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the Current Stock"
                  name="name"
                  value={updateStock}
                  onChange={(e) => setUpdateStock(e.target.value)}
                />
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Category image</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Category image"
                    name="image"
                  />
                </Form.Group> */}
            </Form>
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            <Button variant="danger" onClick={deleteItem}>Delete</Button>
            <Button variant="warning" onClick={updateItem}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="card-content">
          <div className="card-title">
            <h6>{name}</h6>
          </div>
          <div className="item-detail">
            <div className="item-detail-2">
              <h6>₹ {price}</h6>
              <h6>Size: {size}</h6>
            </div>
          </div>
          <div className="Stock">
            <h6>Stock: {stock}</h6>
          </div>
          <div className="Out-of-Stock" onClick={outofstock}>
            <h6>Out of Stock</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryCard;