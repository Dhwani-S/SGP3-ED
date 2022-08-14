const express = require("express");
const { getAllPrdoucts } = require("../controllers/productController");

const router = express.Router();

router.route("/products").get(getAllPrdoucts);

module.exports = router;