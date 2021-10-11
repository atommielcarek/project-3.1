const { gql } = require('apollo-server');

const typeDefs = gql`
  
  type Query {
  User(id: ID!): User
  Users: [User]
  }

  type User {
  id: ID!
  username: String!
  email: String!
  password: String!
}
  type Token {
      jwt: ID!
  }

  type Mutation {
  signup(email: String!, username: String!, password: String!): String!,
  login(email: String, username: String, password: String!): Token!
  }
`;

module.exports = typeDefs;
