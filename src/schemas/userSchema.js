const { gql } = require('apollo-server');

const typeDefs = gql`

    scalar Date

    enum Roles {
        CLIENT
        ADMIN
    }

    type User {
        _id: ID!
        fullname: String!
        email: String!
        password: String!
        address: String!
        tel: String!
        registerDate: Date!
        userType: Roles!
        PaymentMethod: [String!]
    }

    input UserInput {
        fullname: String
        email: String
        password: String
        address: String
        tel: String
        userType: Roles
        PaymentMethod: [String!]
    }

    type Query {
        users: [User]!
    }

    type Mutation {
        createUser(input: UserInput!): User
        updateUser(_id: ID!, input: UserInput!): User
        deleteUser(_id: ID!): User
    }
`;

module.exports = typeDefs;