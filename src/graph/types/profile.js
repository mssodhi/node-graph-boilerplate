const { GraphQLID, GraphQLString, GraphQLObjectType } = require('graphql');

const User = require('./user');

module.exports = new GraphQLObjectType({
  name: 'Profile',
  description: 'Profile type',
  fields: {
    id: { type: GraphQLID },
    user: { type: User },
    role: { type: GraphQLString },
    createdAt: { type: GraphQLString }
  }
});
