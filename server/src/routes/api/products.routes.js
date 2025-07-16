const router = require('express').Router();
const ProductController = require('../../controllers/products.controller');

//api/products
router.post('/', ProductController.createProduct);
router.get('/', ProductController.getAllProducts);
router.patch('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);
//:category

module.exports = router;
