const express = require("express");
const sharp = require("sharp");
const fs = require("fs");
const { ItemCategory, upload } = require("../models/itemCategory");
const { Item, itemImgUpload } = require("../models/item");

const addcategory = async (req, res, next) => {
  console.log(req.rootVendor._id);
  console.log(req.rootVendor.name);
  try {
    if (!req.file || !req.body) {
      return res.status(400).json({ error: "Please fill the data" });
    }
    const categoryExist = await ItemCategory.findOne({
      name: req.body.name,
      createdBy: req.rootVendor._id,
    });
    if (categoryExist) {
      return res.status(400).json({ error: "Category already exist" });
    }

    const itemCategory = new ItemCategory({
      name: req.body.name,
      image: req.file.filename,
      createdBy: req.rootVendor._id,
    });
    await itemCategory.save();
    res.status(201).json({ message: "Item Category Added Successfully" });
  } catch (err) {
    return next(err);
  }
};

const item = async (req, res, next) => {
  try {
    if (!req.file || !req.body) {
      return res.status(400).json({ error: "Please fill all the data" });
    }
    const findCategory = await ItemCategory.findOne({
      name: req.body.category,
      createdBy: req.rootVendor._id,
    });
    const itemExist = await Item.findOne({
      name: req.body.name,
      createdBy: req.rootVendor._id,
      category: findCategory._id,
    });
    if (itemExist) {
      return res.status(400).json({ error: "Item already exist" });
    }

    console.log(findCategory._id);

    const item = new Item({
      name: req.body.name,
      image: req.file.filename,
      stock: req.body.stock,
      price: req.body.price,
      description: req.body.description,
      category: findCategory._id,
      createdBy: req.rootVendor._id,
      size: req.body.size,
    });
    await item.save();
    res.status(201).json({ message: "Item Added Successfully" });
  } catch (err) {
    return next(err);
  }
};

const outofstock = async (req, res, next) => {
  try {
    const item = await Item.findOneAndUpdate(
      { _id: req.params.id },
      { stock: 0 }
    ).exec();
    res.status(200).json({ message: "Item Out of Stock" });
  } catch (err) {
    return next(err);
  }
};

const instock = async (req, res, next) => {
  try {
    const item = await Item.findOneAndUpdate(
      { _id: req.params.id },
      { stock: req.body.stock }
    ).exec();
    res.status(200).json({ message: "Your Stock is Updated" });
  } catch (err) {
    return next(err);
  }
};

const deleteitem = async (req, res, next) => {
  try {
    const item = await Item.findOneAndDelete({ _id: req.params.id }).exec();
    res.status(200).json({ message: "Item Deleted Successfully" });
  } catch (err) {
    return next(err);
  }
};

const deletecategory = async (req, res, next) => {
  try {
    const category = await ItemCategory.findOneAndDelete({
      _id: req.params.id,
    }).exec();
    res.status(200).json({ message: "Category Deleted Successfully" });
  } catch (err) {
    return next(err);
  }
};

module.exports = { addcategory, item, outofstock, instock, deleteitem , deletecategory };