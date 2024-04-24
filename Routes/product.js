const express = require("express");
const router = express.Router();
const {
  read,
  list,
  create,
  update,
  remove,
} = require("../Controllers/product");

// http://localhost:5000/api/products
router.get("/products/:id", read);

router.get("/products", list);

router.post("/products", create);

router.put("/products/:id", update);

router.delete("/products/:id", remove);

module.exports = router;
