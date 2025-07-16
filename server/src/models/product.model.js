const { Schema, model } = require('mongoose');

const productSchema = new Schema(
  {
    name: { type: String, require: true },
    model: { type: String, require: true },
    colors: [String], //algunas veces no tiene colores
    description: String,
    category: String,
    technicalData: String,
    image: String
  },
  { timestamps: true, versionKey: false }
);

const ProductModel = model('Product', productSchema);
module.exports = ProductModel;
