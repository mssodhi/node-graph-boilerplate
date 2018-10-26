const { GraphQLID, GraphQLString, GraphQLObjectType } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'User',
  description: 'User type',
  fields: {
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    createdAt: { type: GraphQLString }
  }
});
