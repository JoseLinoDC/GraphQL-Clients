const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String, require: true},
    description: {type: String, require: true},
    price: {type: Number, require: true},
    category: {type: String, require: true},
    brand: {type: String, require: true},
    stock: {type: Number, require: true},
    createdAt: {type: Date, require: true},
    imgs: {type: Array, default: true},
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;