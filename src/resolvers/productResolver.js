const productService = require('../services/productService');

const resolvers = {
    Query: {
        products: () => productService.getAllProducts(),
    },

    Mutation: {
        createProduct: async (_, { input }) => {
            const newProduct = {
                ...input,
                createdAt: new Date(),  // Asigna la fecha de creación aquí
            };
            return productService.createProduct(newProduct);
        },

        updateProduct: async (_, { _id, input }) => {
            return await productService.updateProduct(_id, input);
        },

        deleteProduct: async (_, { _id }) => {
            return productService.deleteProduct(_id);
        },
    },
};

module.exports = resolvers;