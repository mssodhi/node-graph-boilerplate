const { GraphQLObjectType } = require('graphql');

const profileMutations = require('./mutations/profile.mutations');

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Omni Graphql mutations',
  fields: {
    ...profileMutations
  }
});
