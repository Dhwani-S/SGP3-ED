const express = require("express");
const { 
    getAllProducts, 
    createProduct, 
    updateProduct, 
    deleteProduct,
    createProductReview 
} = require("../controllers/productController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/product/new").post(createProduct);

router.route("/product/:id").put(updateProduct).delete(deleteProduct);

router.route("/review").put(isAuthenticatedUser, createProductReview);

module.exports = router;