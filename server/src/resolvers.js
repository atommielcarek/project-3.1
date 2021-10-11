module.exports = {
    Query: {
        User: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
    }
};