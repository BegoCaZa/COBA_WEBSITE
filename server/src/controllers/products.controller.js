const ProductModel = require('../models/product.model');

const createProduct = async (req, res) => {
  const newProduct = await ProductModel.create(req.body);
  res.status(201).json(newProduct);
};

const getAllProducts = async (req, res) => {
  const products = await ProductModel.find();
  res.status(200).json(products);
};

module.exports = {
  createProduct,
  getAllProducts
};
