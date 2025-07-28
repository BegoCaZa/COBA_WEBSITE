const router = require('express').Router();
const ProductController = require('../../controllers/products.controller');

//api/products
router.post('/', ProductController.createProduct);
router.get('/', ProductController.getAllProducts);
router.get('/categories', ProductController.getAllCategories);
router.get('/categories/:category', ProductController.getProductsByCategory);
router.get('/:id', ProductController.getProductById);
router.patch('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;
