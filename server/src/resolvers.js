const { GraphQLScalarType } = require('graphql')
const { AuthenticationError, ForbiddenError } = require('apollo-server-micro')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { Kind } = require('graphql/language')

// Hash configuration
const BCRYPT_ROUNDS = 12

// Resolve GraphQL queries, mutations and graph paths
const resolvers = {
  Query: {
    users: async (obj, args, context) => {
      const user// -> Access data layer and get user data
      return user
    },
    currentUser: async (obj, args, context) => {
      const user // -> Access data layer and get user data
      return user
    },
    loginUser: async (obj, args, context) => {
      // Find user by email and password
      const user // -> Access data layer and get user data

      // Compare hash
      if(user && await bcrypt.compare(args.password, user.password)) {
        // Generate and return JWT token
        const token = jwt.sign({ email: user.email, name: (user.firstname + ' ' + user.lastname) }, process.env.JWT_SECRET )
        return { token: token }
      } else {
        // Throw authentication error
        throw new AuthenticationError('Login failed.')
      }
    }
  },
  Mutation: {
    createUser: async (obj, args, context) => {
      // Check if user already exists
      const user // -> Access data layer and get user data
      if (user) {
        throw new ForbiddenError('User already exists.')
      }

      // Hash password
      args.password = await bcrypt.hash(args.password, BCRYPT_ROUNDS)
      args.created = new Date()
      args.created_by = context.name || "system"
      const user // -> Access data layer and store user data
      return user
    },
    updateUser: async (obj, args, context) => {
      args.updated = new Date()
      args.updated_by = context.name || "system"

      // Hash password if provided
      if(args.password){
        args.password = await bcrypt.hash(args.password, BCRYPT_ROUNDS)
      }

      // -> Access data layer and update user data
      return { 
        success: true
      }
    },
    deleteUser: async (obj, args, context) => {
      // -> Access data layer and delete user data
      return { 
        success: true
      }
    }
  },
  User: {
    // Hide password hash
    password() {
      return ''
    }
  }
}

module.exports = resolvers