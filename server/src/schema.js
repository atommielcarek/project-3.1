const { gql } = require('apollo-server-micro')

// GraphQL schema
const typeDefs = gql`

directive @isAuthenticated on FIELD_DEFINITION

scalar Date

type User {
  id: String!
  email: String!
  password: String!
  firstname: String!
  lastname: String!

  created: Date
  created_by: String!
  updated: Date
  updated_by: String!
}

type Token {
  token: String!
}

type Response {
  success: Boolean!
  message: String
}

type Query {
  currentUser: User @isAuthenticated
  users: [User] @isAuthenticated
  loginUser(email: String!, password: String!): Token
}

type Mutation {
  createUser(email: String!, password: String!, firstname: String!, lastname: String!): User
  updateUser(id: String!, email: String, password: String, firstname: String, lastname: String): Response
  deleteUser(id: String!): Response
}
`

module.exports = typeDefs