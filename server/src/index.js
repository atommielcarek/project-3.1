const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { createStore } = require('./utils');


const UserAPI = require('./api/user');

const store = createStore();

const server = new ApolloServer({ 
    typeDefs,
    dataSources: () => ({
        UserAPI: new UserAPI({store})
    })
});

server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
    Explore at https://studio.apollographql.com/sandbox
  `);
});