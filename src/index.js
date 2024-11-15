require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge'); 

const productTypeDefs = require('./schemas/productSchema');
const productResolvers = require('./resolvers/productResolver');
const userTypeDefs = require('./schemas/userSchema');
const userResolvers = require('./resolvers/userResolver');

const emaiTyperDefs = require('./schemas/correoSchema');
const emailResolvers = require('./resolvers/sendGridResolver');


const startConnection = async () => {
    await mongoose.connect(process.env.MONGO_URI);

    const typeDefs = mergeTypeDefs([productTypeDefs, userTypeDefs, emaiTyperDefs]);
    const resolvers = mergeResolvers([productResolvers, userResolvers, emailResolvers]);

    const server = new
    ApolloServer({ typeDefs, resolvers });

    server.listen().then(({url}) => {
        console.log(`Servidor corriendo en ${url}`);
    });
};

startConnection();
