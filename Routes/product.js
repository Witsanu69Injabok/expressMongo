const express = require("express");
const router = express.Router();
const {
  read,
  list,
  create,
  update,
  remove,
} = require("../Controllers/product");

const { auth } = require('../Middleware/auth');



// http://localhost:5000/api/products
router.get("/products/:id", read);

router.get("/products",auth, list);

router.post("/products", create);

router.put("/products/:id", update);

router.delete("/products/:id", remove);

module.exports = router;
