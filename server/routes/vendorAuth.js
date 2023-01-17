const express = require("express");
const vendorAuthenticate = require("../middleware/vendorProtected");
const app = express();
const router = express.Router();
const { ItemCategory, CatImgUpload } = require("../models/itemCategory");
const { Item, itemImgUpload } = require("../models/item");
// const { ContactToVendor } = require("../models/Contact").ContactToVendor;
const { Vendor, upload } = require("../models/Vendor");
const {
  StepContext,
} = require("twilio/lib/rest/studio/v1/flow/engagement/step");

router.post(
  "/signup",
  upload.array("image", 3),
  require("../controller/vendorAuth").signup
);
router.post("/signin", require("../controller/vendorAuth").signin);
router.get(
  "/signout",
  vendorAuthenticate,
  require("../controller/vendorAuth").signout
);

router.get("/about", vendorAuthenticate, (req, res) => {
  res.send(req.rootVendor);
});
router.get("/getdata", vendorAuthenticate, (req, res) => {
  res.send(req.rootVendor);
});

router.get("/getinventory", vendorAuthenticate, async (req, res, next) => {
  try {
    const vendor = await Vendor.findOne({ _id: req.rootVendor._id }, [
      "_id",
      "name",
    ]);
    if (!vendor) {
      return next(new errorResponce("Vendor not found", 404));
    }
    const category = await ItemCategory.find({ createdBy: vendor._id }, [
      "_id",
      "name",
    ]);
    if (!category) {
      return next(new errorResponce("Category not found", 404));
    }
    const items = await Item.find({ createdBy: vendor._id }, [
      "_id",
      "name",
      "price",
      "stock",
      "image",
      "category",
      "size",
    ]);
    if (!items) {
      return next(new errorResponce("Item not found", 404));
    }
    res.status(200).json({ category: category, items: items });
  } catch (err) {
    next(err);
  }
});

router.get("/getcategory", vendorAuthenticate, async (req, res, next) => {
  try {
    const vendor = await Vendor.findOne({ _id: req.rootVendor._id }, [
      "_id",
      "name",
    ]);
    if (!vendor) {
      return next(new errorResponce("Vendor not found", 404));
    }
    const category = await ItemCategory.find({ createdBy: vendor._id }, [
      "_id",
      "name",
      "image",
    ]);
    if (!category) {
      return next(new errorResponce("Category not found", 404));
    }
    res.status(200).json({ category: category });
  } catch (err) {
    next(err);
  }
});

router.get("/additem", vendorAuthenticate, async (req, res, next) => {
  try {
    const vendor = await Vendor.findOne({ _id: req.rootVendor._id }, [
      "_id",
      "name",
    ]);
    if (!vendor) {
      return next(new errorResponce("Vendor not found", 404));
    }
    const category = await ItemCategory.find({ createdBy: vendor._id }, [
      "_id",
      "name",
    ]);
    if (!category) {
      return next(new errorResponce("Category not found", 404));
    }
    res.status(200).json({ category: category });
  } catch (err) {
    next(err);
  }
});

router.post(
  "/addcategory",
  vendorAuthenticate,
  CatImgUpload.single("image"),
  require("../controller/vendorDashboard").addcategory
);

router.post(
  "/item/new",
  vendorAuthenticate,
  itemImgUpload.single("image"),
  require("../controller/vendorDashboard").item
);

router.post(
  "/item/outofstock/:id",
  vendorAuthenticate,
  require("../controller/vendorDashboard").outofstock
);

router.post(
  "/item/instock/:id",
  vendorAuthenticate,
  require("../controller/vendorDashboard").instock
);

router.post(
  "/item/delete/:id",
  vendorAuthenticate,
  require("../controller/vendorDashboard").deleteitem
);

router.post(
  "/category/delete/:id",
  vendorAuthenticate,
  require("../controller/vendorDashboard").deletecategory
);

router.post("/");

module.exports = router;