const express = require("express");
const bcrypt = require("bcryptjs");
const app = express();

require("../database/conn");
const Vendor = require("../models/Vendor").Vendor;

const signup = async (req, res, next) => {
  console.log(req.body);
  console.log(req.files);
  try {
    if (!req.body || !req.files) {
      return res.status(400).json({ error: "Please fill the data" });
    }
    vendorExist = await Vendor.findOne({ phone: req.body.phone });
    if (vendorExist) {
      return res.status(400).json({ error: "Vendor already exist" });
    } else if (req.body.password != req.body.cpassword) {
      return res.status(400).json({ error: "Password not match" });
    } else {
      const vendor = new Vendor({
        name: req.body.name,
        phone: req.body.phone,
        image: [req.files[0].filename, req.files[1].filename],
        password: req.body.password,
        cpassword: req.body.cpassword,
      });
      await vendor.save();
      res.status(200).json({ message: "Vendor Registered Successfully" });
    }
  } catch (err) {
    return next(err);
  }
};

const signin = async (req, res, next) => {
  try {
    const { phone, password } = req.body;
    if (!phone || !password) {
      return res.status(400).json({ error: "Please fill the data" });
    }
    const vendorLogin = await Vendor.findOne({ phone: phone });
    // console.log(vendorLogin);
    if (vendorLogin) {
      const isMatch = await bcrypt.compare(password, vendorLogin.password);
      const token = await vendorLogin.generateAuthToken();
      console.log("your token is"+token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials" });
      } else {
        res.json({ message: "Vendor Signin Successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    return next(err);
  }
};

const signout = async (req, res, next) => {
  try {
    res.clearCookie("jwtoken", { path: "/" });
    res.status(200).send("Vendor Signout Successfully");
  } catch (err) {
    return next(err);
  }
};

module.exports = { signup, signin, signout };