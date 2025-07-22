const ProductModel = require('../models/product.model');

//CREATE PRODUCT
const createProduct = async (req, res) => {
  const newProduct = await ProductModel.create(req.body);
  res.status(201).json(newProduct);
};

//READ ALL PRODUCTS
const getAllProducts = async (req, res) => {
  const products = await ProductModel.find();
  res.status(200).json(products);
};

//get all categories
const getAllCategories = async (req, res) => {
  const categories = await ProductModel.find().select('category -_id');
  const finalCategories = [];
  for (const cat of categories) {
    // console.log(cat);
    if (!finalCategories.includes(cat.category)) {
      finalCategories.push(cat.category);
    }
  }

  res.status(200).json(finalCategories);
};

//get products by category
const getProductsByCategory = async (req, res) => {
  const { category } = req.params;
  const products = await ProductModel.find({ category });
  if (products.length === 0) {
    return res
      .status(404)
      .json({ message: 'No products found in this category' });
  }
  res.status(200).json(products);
};

//UPDATE PRODUCT BY ID
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updatedProduct = await ProductModel.findByIdAndUpdate(id, req.body);
  if (!updatedProduct) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(updatedProduct);
};

//DELETE PRODUCT BY ID
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await ProductModel.findByIdAndDelete(id);
  if (!deletedProduct) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(204).send();
};

module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getAllCategories,
  getProductsByCategory
};
