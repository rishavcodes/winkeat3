const express = require("express");
const { Item } = require("../models/item");
const Cart = require("../models/Cart");

const addtocart = async (req, res, next) => {
  try {
    const arr = req.body;
    let update = false;
    let added = false;
    for (let i = 0; i < arr.length; i++) {
      try {
        let item = {};
        item = req.body[i];
        const { id, quantity, price } = item;

        if (!id || !quantity || !price) {
          return res.status(400).json({ error: "Please fill all the data" });
        }
        const itemExist = await Item.findOne({ _id: id });
        if (!itemExist) {
          return res.status(400).json({ error: "Item not found" });
        }
        const cartExist = await Cart.findOne({
          customerId: req.rootUser._id,
          productStatus: "Pending",
        });
        if (cartExist) {
          const itemExistInCart = cartExist.items.find(
            (items) => items.itemId == id
          );
          if (itemExistInCart) {
            itemExistInCart.quantity += quantity;
            itemExistInCart.price += price;
            cartExist.total = cartExist.total + price;
            await cartExist.save();
            update = true;
          } else {
            cartExist.items.push({ itemId: id, quantity, price });
            cartExist.total = cartExist.total + price;
            await cartExist.save();
            added = true;
          }
        } else {
          const cart = new Cart({
            customerId: req.rootUser._id,
            items: [{ itemId: id, quantity, price }],
            total: price,
            productStatus: "Pending",
            paymentStatus: "Pending",
          });
          await cart.save();
          added = true;
        }
      } catch (err) {
        return next(err);
      }
    }
    if (update && added) {
      return res.status(200).send({ message: "Cart Updated and Added" });
    }
    if (update) {
      return res.status(201).send({ message: "Item Updated Successfully" });
    } else if (added)
      return res.status(201).send({ message: "Items Added Successfully" });
  } catch (err) {
    return res.status(401).send({ message: "error" });
  }
};
const getcart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({
      customerId: req.rootUser._id,
      productStatus: "Pending",
    });
    if (!cart) {
      return res.status(400).json({ error: "Cart not found" });
    }
    const cartItem = [];
    for (const element of cart.items) {
      const item = await Item.findOne({
        _id: element.itemId,
      });
      if (!item) {
        return res.status(400).json({ error: "Item not found" });
      }
      cartItem.push({
        itemId: item._id,
        itemName: item.name,
        itemImage: item.image,
        itemPrice: item.price,
        itemQuantity: element.quantity,
        itemTotal: element.price,
      });
    }
    return res.status(200).json({
      cartItem,
      total: cart.total,
    });
  } catch (err) {
    return next(err);
  }
};

const CustomerOrder = async (req, res, next) => {
  try {
    const arr = req.body;
    let update = false;
    let added = false;
    for (let i = 0; i < arr.length; i++) {
      try {
        let item = {};
        item = req.body[i];
        const { id, quantity, price } = item;
        if (!id || !quantity || !price) {
          return res.status(400).json({ error: "Please fill all the data" });
        }
        const itemExist = await Item.findOne({ _id: id });
        if (!itemExist) {
          return res.status(400).json({ error: "Item not found" });
        }
        const orderExist = await Order.findOne({
          customerId: req.rootUser._id,
          vendorId: vendor_id,
          productStatus: "Pending",
        });
        if (orderExist) {
          const itemExistInOrder = orderExist.items.find(
            (items) => items.itemId == id
          );
          if (itemExistInOrder) {
            itemExistInOrder.quantity += quantity;
            itemExistInOrder.price += price;
            orderExist.total = orderExist.total + price;
            await orderExist.save();
            update = true;
          } else {
            orderExist.items.push({ id, quantity, price });
            orderExist.total = orderExist.total + price;
            await orderExist.save();
            added = true;
          }
        } else {
          const order = new Order({
            customerId: req.rootUser._id,
            vendorId: vendor_id,
            items: [{ itemId: id, quantity, price }],
            totalPrice: price,
            productStatus: "Pending",
            paymentStatus: "Pending",
          });
          await order.save();
        }
      } catch (err) {
        return next(err);
      }
    }
    if (update && added) {
      return res.status(200).send({ message: "Order Updated and Added" });
    }
    if (update) {
      return res.status(201).send({ message: "Item Updated Successfully" });
    } else if (added)
      return res.status(201).send({ message: "Items Added Successfully" });
  } catch (err) {
    return res.status(401).send({ message: "error" });
  }
};

module.exports = { addtocart, CustomerOrder, getcart };
