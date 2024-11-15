const { gql } = require('apollo-server');

const typeDefs = gql`

    scalar Date

    enum Roles {
        CLIENT
        ADMIN
    }

    type Address {
        zip: String!        # Código postal
        street: String      # Nombre de la calle
        exterior: String    # Número exterior
        interior: String    # Número interior
        neighborhood: String    # Colonia
        city: String        # Ciudad
        municipality: String    # Municipio o delegación
        state: String       # Nombre del estado o código ISO 3166-2
        country: String     # Código de país ISO 3166-1 alpha-3
    }

    type User {
        _id: ID!
        fullname: String!
        email: String!
        password: String!
        address: Address!
        tel: String!
        registerDate: Date!
        userType: Roles!
        paymentMethod: [String!]
    }

    type Query {
        users: [User]!
    }

    input AddressInput {
        zip: String!        # Código postal
        street: String      # Nombre de la calle
        exterior: String    # Número exterior
        interior: String    # Número interior
        neighborhood: String    # Colonia
        city: String        # Ciudad
        municipality: String    # Municipio o delegación
        state: String       # Nombre del estado o código ISO 3166-2
        country: String     # Código de país ISO 3166-1 alpha-3
    }

    type Mutation {
        createUser(
            fullname: String!,
            email: String!,
            password: String!,
            address: AddressInput,
            tel: String,
            userType: Roles,
            paymentMethod: [String!]
        ): User

        updateUser(
            _id: ID!,
            fullname: String,
            email: String,
            password: String,
            address: AddressInput,
            tel: String,
            userType: Roles,
            paymentMethod: [String!]
        ): User

        deleteUser(_id: ID!): User
    }
`;


module.exports = typeDefs;