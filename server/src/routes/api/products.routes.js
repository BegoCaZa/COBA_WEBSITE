const router = require('express').Router();
const ProductController = require('../../controllers/products.controller');

//api/products
router.post('/', ProductController.createProduct);
router.get('/', ProductController.getAllProducts);

module.exports = router;
