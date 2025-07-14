const { Schema, model } = require('mongoose');

const productSchema = new Schema(
  {
    name: { type: String, require: true },
    price: { type: Number, require: true },
    colors: [String], //algunas veces no tiene colores
    description: String
  },
  { timestamps: true, versionKey: false }
);

const ProductModel = model('Product', productSchema);
module.exports = ProductModel;
