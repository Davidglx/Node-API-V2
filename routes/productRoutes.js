const express = require('express');
const Product = require('../models/productModels')
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');



const router = express.Router();

router.get('/', getProducts);

router.get('/:id', getProduct);

router.post('/', createProduct)

router.delete("/:id", deleteProduct)

router.put("/:id", updateProduct);


module.exports = router;

