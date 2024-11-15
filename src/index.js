require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge'); 

const productTypeDefs = require('./schemas/productSchema');
const productResolvers = require('./resolvers/productResolver');
const userTypeDefs = require('./schemas/userSchema');
const userResolvers = require('./resolvers/userResolver');

const startConnection = async () => {
    await mongoose.connect(process.env.MONGO_URI);

    const typeDefs = mergeTypeDefs([productTypeDefs, userTypeDefs]);
    const resolvers = mergeResolvers([productResolvers, userResolvers]);

    const server = new
    ApolloServer({ typeDefs, resolvers });

    server.listen().then(({url}) => {
        console.log(`Servidor corriendo en ${url}`);
    });
};

startConnection();
