const express = require("express");
const { getAllPrdoucts, createProduct } = require("../controllers/productController");

const router = express.Router();

router.route("/products").get(getAllPrdoucts);
router.route("/product/new").post(createProduct);

module.exports = router;