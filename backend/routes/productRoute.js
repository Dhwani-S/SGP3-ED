const express = require("express");
const { getAllPrdoucts, createProduct, updateProduct, deleteProduct } = require("../controllers/productController");

const router = express.Router();

router.route("/products").get(getAllPrdoucts);

router.route("/product/new").post(createProduct);

router.route("/product/:id").put(updateProduct).delete(deleteProduct);

module.exports = router;