const ProductModel = require('../models/product.model');

const createProduct = async (req, res) => {
  const newProduct = await ProductModel.create(req.body);
  res.status(201).json(newProduct);
};

module.exports = {
  createProduct
};
