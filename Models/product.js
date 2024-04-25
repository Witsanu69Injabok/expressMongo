const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: String,
    detail: {
      type: String,
    },
    price: {
      type: Number,
    },
    remark: {
      type: String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", productSchema);
