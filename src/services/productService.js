const Product = require('../models/productModel');

module.exports = {

    getAllProducts: async () => {
        return await Product.find();
    },

    createProduct: async (product) => {
        const p = new Product(product);
        return await p.save();
    },

    updateProduct: async (_id, product) => {
        return await Product.findByIdAndUpdate(_id,product);
    },

    deleteProduct: async (_id) => { 
        return await Product.findByIdAndDelete(_id);
    },
    
}