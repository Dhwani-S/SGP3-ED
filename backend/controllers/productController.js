const Product = require("../models/productModel");

//Create Product -- Admin
exports.createProduct = async (req, res) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    });
}


// Get All Products
exports.getAllProducts = async (req, res) => {
    
    const products = await Product.find();

    res.status(200).json({
        success: true,
        products
    })
}

// Update Product -- Admin
exports.updateProduct = async (req, res, next) => {

    let product = await Product.findById(req.params.id);

    if(!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
        success: true,
        product
    })
}