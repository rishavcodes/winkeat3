const mongoose = require("mongoose");

const customerOrderSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    vendorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
      required: true,
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed","failed"],
    },
    status: {
      type: String,
      enum: ["pending", "in progress", "completed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const CustomerOrder = mongoose.model("CustomerOrder", customerOrderSchema);

module.exports = CustomerOrder;