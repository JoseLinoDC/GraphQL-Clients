const { gql } = require("apollo-server");
const typeDefs = gql`

type Mutation {
    sendEmail(input: EmailInput!): EmailResponse!
  }
  
  input EmailInput {
    to: String!
    subject: String!
    text: String
    html: String
  }
  
  type EmailResponse {
    success: Boolean!
    message: String!
  }
  `

module.exports = typeDefs;